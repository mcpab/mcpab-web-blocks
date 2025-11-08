import type {
    AbsoluteGrid,
    AbsoluteNode,
    GridErrorShape,
} from "./core/layoutTypes";

type GridCheckProps<Id extends PropertyKey> = {
    absoluteGrid: AbsoluteGrid<Id>;
    warningsIn?: GridErrorShape<Id>[];
    errorsIn?: GridErrorShape<Id>[];
};

/**
 * Validates an AbsoluteGrid:
 * - basic coordinate sanity (starts >=1, exclusive ends > starts)
 * - out-of-bounds vs explicit track counts (warn → implies implicit tracks)
 * - implicit-track usage FYI
 * - overlap errors (unless both sides allowOverlap), zIndex warnings
 * - order ties warnings
 * - ancestry constraints: any ancestor with constrainChildren=true must fully contain its descendants
 */
export function gridChecker<Id extends PropertyKey>({
    absoluteGrid,
    warningsIn,
    errorsIn,
}: GridCheckProps<Id>): { warnings: GridErrorShape<Id>[]; errors: GridErrorShape<Id>[] } {
    let warnings: GridErrorShape<Id>[] = warningsIn ?? [];
    let errors: GridErrorShape<Id>[] = errorsIn ?? [];

    // --- Explicit track counts (canonical options)
    const isUniform = absoluteGrid.options.mode === "uniform";
    const isList = absoluteGrid.options.mode === "list";

    let explicitRowCount: number | undefined;
    let explicitColCount: number | undefined;
    let explicitRowKnown = false;
    let explicitColKnown = false;

    if (isUniform) {
        explicitRowCount = absoluteGrid.options.rows;
        explicitColCount = absoluteGrid.options.columns;
        explicitRowKnown = explicitColKnown = true;
    } else if (isList) {
        explicitRowCount = absoluteGrid.options.rowSizes.length;
        explicitColCount = absoluteGrid.options.columnSizes.length;
        explicitRowKnown = explicitColKnown = true;
    }

    // --- Effective required size derived from node end lines (exclusive)
    let requiredRows = 0;
    let requiredCols = 0;

    const nodeEntries = Object.entries(absoluteGrid.nodes) as Array<[Id, AbsoluteNode<Id>]>;

    for (const [nodeId, node] of nodeEntries) {
        if (!node) {
            errors.push({
                code: "plan-mismatch",
                elementId: nodeId,
                message: `Node '${String(nodeId)}' missing from absoluteGrid.nodes.`,
            });
            continue;
        }
        requiredRows = Math.max(requiredRows, node.coordinates.gridRowEnd - 1);
        requiredCols = Math.max(requiredCols, node.coordinates.gridColumnEnd - 1);
    }

    // --- Per-node validations + order collection
    const orders = new Map<number, Id[]>(); // order -> [ids]

    for (const [nodeId, node] of nodeEntries) {
        const { gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd } = node.coordinates;

        // Starts
        if (gridRowStart < 1) {
            errors.push({
                code: "invalid-position",
                elementId: nodeId,
                message: `gridRowStart < 1 (${gridRowStart}).`,
            });
        }
        if (gridColumnStart < 1) {
            errors.push({
                code: "invalid-position",
                elementId: nodeId,
                message: `gridColumnStart < 1 (${gridColumnStart}).`,
            });
        }

        // Spans (exclusive ends must be > starts)
        if (gridRowEnd <= gridRowStart) {
            errors.push({
                code: "invalid-span",
                elementId: nodeId,
                message: `gridRowEnd (${gridRowEnd}) <= gridRowStart (${gridRowStart}).`,
            });
        }
        if (gridColumnEnd <= gridColumnStart) {
            errors.push({
                code: "invalid-span",
                elementId: nodeId,
                message: `gridColumnEnd (${gridColumnEnd}) <= gridColumnStart (${gridColumnStart}).`,
            });
        }

        // Out-of-bounds vs explicit counts (implies implicit tracks)
        if (explicitColKnown && explicitColCount !== undefined) {
            const lastExplicitColLine = explicitColCount + 1;
            if (gridColumnEnd > lastExplicitColLine) {
                warnings.push({
                    code: "out-of-bounds",
                    elementId: nodeId,
                    message: `Column end (${gridColumnEnd}) > explicit last line (${lastExplicitColLine}).`,
                });
            }
        }
        if (explicitRowKnown && explicitRowCount !== undefined) {
            const lastExplicitRowLine = explicitRowCount + 1;
            if (gridRowEnd > lastExplicitRowLine) {
                warnings.push({
                    code: "out-of-bounds",
                    elementId: nodeId,
                    message: `Row end (${gridRowEnd}) > explicit last line (${lastExplicitRowLine}).`,
                });
            }
        }

        // Orders
        if (node.order !== undefined) {
            const bucket = orders.get(node.order) ?? [];
            bucket.push(nodeId);
            orders.set(node.order, bucket);
        }
    }

    // --- Order ties (grouped)
    for (const [ord, ids] of orders) {
        if (ids.length > 1) {
            warnings.push({
                code: "order-ties",
                elementId: ids[0],
                message: `Multiple elements share order=${ord}: ${ids.map(String).join(", ")}`,
            });
        }
    }

    // --- Implicit-track usage FYI (layout-level)
    if (explicitColKnown && explicitColCount !== undefined && requiredCols > explicitColCount) {
        warnings.push({
            code: "implicit-track",
            elementId: undefined,
            message: `Computed columns (${requiredCols}) exceed explicit columns (${explicitColCount}).`,
        });
    }
    if (explicitRowKnown && explicitRowCount !== undefined && requiredRows > explicitRowCount) {
        warnings.push({
            code: "implicit-track",
            elementId: undefined,
            message: `Computed rows (${requiredRows}) exceed explicit rows (${explicitRowCount}).`,
        });
    }

    // --- Overlaps
    {
        const pairDiag = checkOverlaps(nodeEntries);
        warnings = warnings.concat(pairDiag.warnings);
        errors = errors.concat(pairDiag.errors);
    }

    // --- Children / ancestry constraints via identity.parentId chain
    {
        const constrainedAncestorsByChild = computeConstrainedAncestorsFromParents(nodeEntries);
        for (const [childId, ancestorIds] of constrainedAncestorsByChild) {
            const child = absoluteGrid.nodes[childId as Id];
            if (!child) continue;

            for (const ancId of ancestorIds) {
                const anc = absoluteGrid.nodes[ancId as Id];
                if (!anc) continue;

                const inside =
                    child.coordinates.gridRowStart >= anc.coordinates.gridRowStart &&
                    child.coordinates.gridRowEnd <= anc.coordinates.gridRowEnd &&
                    child.coordinates.gridColumnStart >= anc.coordinates.gridColumnStart &&
                    child.coordinates.gridColumnEnd <= anc.coordinates.gridColumnEnd;

                if (!inside) {
                    errors.push({
                        code: "constraint-violation",
                        elementId: childId,
                        message: `Element '${String(childId)}' exceeds constrained ancestor '${String(ancId)}'.`,
                        details: { ancestorId: ancId },
                    });
                }
            }
        }
    }

    return { warnings, errors };
}

/* ====================== internals ====================== */

function intervalsOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number) {
    // strict: touching at boundary is NOT overlap
    return aStart < bEnd && bStart < aEnd;
}

function checkOverlaps<Id extends PropertyKey>(
    entries: Array<[Id, AbsoluteNode<Id>]>
): { errors: GridErrorShape<Id>[]; warnings: GridErrorShape<Id>[] } {
    const errors: GridErrorShape<Id>[] = [];
    const warnings: GridErrorShape<Id>[] = [];

    for (let i = 0; i < entries.length - 1; i++) {
        const [ida, A] = entries[i];
        for (let j = i + 1; j < entries.length; j++) {
            const [idb, B] = entries[j];

            // Axis tests
            const rowHit = intervalsOverlap(
                A.coordinates.gridRowStart, A.coordinates.gridRowEnd,
                B.coordinates.gridRowStart, B.coordinates.gridRowEnd
            );
            if (!rowHit) continue;

            const colHit = intervalsOverlap(
                A.coordinates.gridColumnStart, A.coordinates.gridColumnEnd,
                B.coordinates.gridColumnStart, B.coordinates.gridColumnEnd
            );
            if (!colHit) continue;

            // Rectangles overlap
            const bothAllow = !!A.options.allowOverlap && !!B.options.allowOverlap;
            if (!bothAllow) {
                errors.push({
                    code: "overlap-not-allowed",
                    elementId: ida,
                    message: `Overlaps with '${String(idb)}'.`,
                    details: { otherId: idb },
                });
            } else {
                const aZ = A.options.zIndex;
                const bZ = B.options.zIndex;
                if (aZ === undefined && bZ === undefined) {
                    warnings.push({
                        code: "overlap-without-z",
                        elementId: ida,
                        message: `Overlaps '${String(idb)}' but neither has zIndex; DOM order will decide.`,
                        details: { otherId: idb },
                    });
                } else if (aZ !== undefined && bZ !== undefined && aZ === bZ) {
                    warnings.push({
                        code: "overlap-without-z",
                        elementId: ida,
                        message: `Overlaps '${String(idb)}' with equal zIndex=${aZ}; DOM order will decide.`,
                        details: { otherId: idb, zIndex: aZ },
                    });
                }
            }
        }
    }

    return { errors, warnings };
}

/**
 * Build childId -> [ancestorIdsWithConstraint] using the flat parent chain on identity.parentId.
 * Any ancestor with options.constrainChildren === true constrains all descendants below it.
 */
function computeConstrainedAncestorsFromParents<Id extends PropertyKey>(
    entries: Array<[Id, AbsoluteNode<Id>]>
): Map<Id, Id[]> {
    const byId = new Map<Id, AbsoluteNode<Id>>(entries);

    const getParentId = (n: AbsoluteNode<Id>): Id | undefined => n.identity.parentId;
    const hasConstrainChildren = (n: AbsoluteNode<Id>): boolean => !!n.options.constrainChildren;

    // Memoize constrained-ancestor sets for each node
    const memo = new Map<Id, Id[]>();

    const collectFor = (id: Id): Id[] => {
        if (memo.has(id)) return memo.get(id)!;
        const self = byId.get(id);
        if (!self) {
            memo.set(id, []);
            return [];
        }
        const pId = getParentId(self);
        if (pId === undefined || pId === null) {
            memo.set(id, []);
            return [];
        }
        const parentAnc = collectFor(pId);
        const parentNode = byId.get(pId);
        const constrained = parentNode && hasConstrainChildren(parentNode) ? [pId, ...parentAnc] : parentAnc.slice();
        memo.set(id, constrained);
        return constrained;
    };

    const map = new Map<Id, Id[]>();
    for (const [id] of entries) {
        const list = collectFor(id);
        if (list.length) map.set(id, list);
    }
    return map;
}
