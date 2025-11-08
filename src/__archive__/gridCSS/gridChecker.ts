import type {
    AbsoluteGridElement,
    AbsoluteGridLayout,
    GridLayout,
    GridErrorShape, // assumed: { code: string; elementId: string; message: string; details?: Record<string,unknown> }
} from "./types";
import { deriveAutoUnitAndCountFromTemplate } from "./gridUnitsHelpers";

type GridCheckProps = {
    absoluteGrid: AbsoluteGridLayout;
    gridLayout: GridLayout;
    warningsIn?: GridErrorShape[];
    errorsIn?: GridErrorShape[];
};

export function gridChecker({
    absoluteGrid,
    gridLayout,
    warningsIn,
    errorsIn,
}: GridCheckProps): { warnings: GridErrorShape[]; errors: GridErrorShape[] } {
    
    let warnings: GridErrorShape[] = warningsIn ?? [];
    let errors: GridErrorShape[] = errorsIn ?? [];

    // --- Build fast lookup maps
    const elemById = new Map<string, AbsoluteGridElement>();
    for (const e of absoluteGrid.elements) elemById.set(e.id, e);

    // Ancestor constraints: map childId -> array of ancestorIds that enforce constrainChildren
    const constrainedAncestorsByChild = computeConstrainedAncestors(gridLayout);

    // --- Explicit track counts (if determinable) + template warnings
    const implicitRowUnits = gridLayout.implicitRowUnits;
    const implicitColumnUnits = gridLayout.implicitColumnUnits;

    let explicitRowCount: number | undefined;
    let explicitRowKnown = false;

    if ("rows" in gridLayout.rows) {
        explicitRowCount = gridLayout.rows.rows;
        explicitRowKnown = true;
    } else {
        const res = deriveAutoUnitAndCountFromTemplate(
            gridLayout.rows.rowTemplate,
            implicitRowUnits
        );
        if (!res.isUniform) {
            warnings.push({
                code: "implicit-track",
                elementId: "layout",
                message: `Row template is not uniform; using implicitRowUnits='${implicitRowUnits}' (${res.reason ?? "unknown reason"}).`,
            });
        }
        if (res.explicitCountKnown) {
            explicitRowCount = res.explicitCount;
            explicitRowKnown = true;
        } else {
            warnings.push({
                code: "explicit-count-unknown",
                elementId: "layout",
                message:
                    "Row template explicit track count is indeterminate (auto-fill/fit or dynamic); precise out-of-bounds checks skipped.",
            });
        }
    }

    let explicitColCount: number | undefined;
    let explicitColKnown = false;

    if ("columns" in gridLayout.columns) {
        explicitColCount = gridLayout.columns.columns;
        explicitColKnown = true;
    } else {
        const res = deriveAutoUnitAndCountFromTemplate(
            gridLayout.columns.columnTemplate,
            implicitColumnUnits
        );
        if (!res.isUniform) {
            warnings.push({
                code: "implicit-track",
                elementId: "layout",
                message: `Column template is not uniform; using implicitColumnUnits='${implicitColumnUnits}' (${res.reason ?? "unknown reason"}).`,
            });
        }
        if (res.explicitCountKnown) {
            explicitColCount = res.explicitCount;
            explicitColKnown = true;
        } else {
            warnings.push({
                code: "explicit-count-unknown",
                elementId: "layout",
                message:
                    "Column template explicit track count is indeterminate (auto-fill/fit or dynamic); precise out-of-bounds checks skipped.",
            });
        }
    }

    // --- Plan integrity (recompute used counts from elements)
    const recomputedRows =
        Math.max(0, ...absoluteGrid.elements.map((e) => e.gridRowEnd - 1));
    const recomputedCols =
        Math.max(0, ...absoluteGrid.elements.map((e) => e.gridColumnEnd - 1));

    if (absoluteGrid.computedRows !== recomputedRows) {
        warnings.push({
            code: "plan-mismatch",
            elementId: "layout",
            message: `computedRows (${absoluteGrid.computedRows}) != recomputed (${recomputedRows}).`,
        });
    }
    if (absoluteGrid.computedColumns !== recomputedCols) {
        warnings.push({
            code: "plan-mismatch",
            elementId: "layout",
            message: `computedColumns (${absoluteGrid.computedColumns}) != recomputed (${recomputedCols}).`,
        });
    }

    // --- Element-wise validations
    const seenIds = new Set<string>();
    const orders = new Map<number, string[]>(); // order -> ids

    for (const el of absoluteGrid.elements) {
        // Duplicate ids
        if (seenIds.has(el.id)) {
            errors.push({
                code: "duplicate-id",
                elementId: el.id,
                message: `Duplicate element id '${el.id}'.`,
            });
        } else {
            seenIds.add(el.id);
        }

        // Positions & spans
        if (el.gridRowStart < 1) {
            errors.push({
                code: "invalid-position",
                elementId: el.id,
                message: `gridRowStart < 1 (${el.gridRowStart}).`,
            });
        }
        if (el.gridColumnStart < 1) {
            errors.push({
                code: "invalid-position",
                elementId: el.id,
                message: `gridColumnStart < 1 (${el.gridColumnStart}).`,
            });
        }
        if (el.gridRowEnd <= el.gridRowStart) {
            errors.push({
                code: "invalid-span",
                elementId: el.id,
                message: `gridRowEnd (${el.gridRowEnd}) <= gridRowStart (${el.gridRowStart}).`,
            });
        }
        if (el.gridColumnEnd <= el.gridColumnStart) {
            errors.push({
                code: "invalid-span",
                elementId: el.id,
                message: `gridColumnEnd (${el.gridColumnEnd}) <= gridColumnStart (${el.gridColumnStart}).`,
            });
        }

        // Out-of-bounds relative to explicit counts (when known)
        if (explicitColKnown && explicitColCount !== undefined) {
            const lastExplicitLine = explicitColCount + 1;
            if (el.gridColumnEnd > lastExplicitLine) {
                warnings.push({
                    code: "out-of-bounds",
                    elementId: el.id,
                    message: `Column end (${el.gridColumnEnd}) > explicit last line (${lastExplicitLine}).`,
                });
            }
        }
        if (explicitRowKnown && explicitRowCount !== undefined) {
            const lastExplicitLine = explicitRowCount + 1;
            if (el.gridRowEnd > lastExplicitLine) {
                warnings.push({
                    code: "out-of-bounds",
                    elementId: el.id,
                    message: `Row end (${el.gridRowEnd}) > explicit last line (${lastExplicitLine}).`,
                });
            }
        }

        // Track order ties
        if (el.order !== undefined) {
            const bucket = orders.get(el.order) ?? [];
            bucket.push(el.id);
            orders.set(el.order, bucket);
        }
    }

    // Order ties (report grouped for clarity)
    for (const [ord, ids] of orders.entries()) {
        if (ids.length > 1) {
            warnings.push({
                code: "order-ties",
                elementId: "layout",
                message: `Multiple elements share order=${ord}: ${ids.join(", ")}`,
            });
        }
    }

    // Implicit-track usage vs explicit counts (layout-level FYIs)
    if (explicitColKnown && explicitColCount !== undefined && recomputedCols > explicitColCount) {
        warnings.push({
            code: "implicit-track",
            elementId: "layout",
            message: `Computed columns (${recomputedCols}) exceed explicit columns (${explicitColCount}).`,
        });
    }
    if (explicitRowKnown && explicitRowCount !== undefined && recomputedRows > explicitRowCount) {
        warnings.push({
            code: "implicit-track",
            elementId: "layout",
            message: `Computed rows (${recomputedRows}) exceed explicit rows (${explicitRowCount}).`,
        });
    }

    // --- Overlap checks (unordered pairs)
    {
        const pairs = checkOverlaps(absoluteGrid.elements);
        warnings = warnings.concat(pairs.warnings);
        errors = errors.concat(pairs.errors);
    }

    // --- Children constraints (ancestry containment)
    // Rule: if any ancestor marks constrainChildren=true, every descendant must be inside it.
    for (const [childId, ancestorIds] of constrainedAncestorsByChild.entries()) {
        const child = elemById.get(childId);
        if (!child) continue;

        for (const ancId of ancestorIds) {
            const anc = elemById.get(ancId);
            if (!anc) continue;

            const inside =
                child.gridRowStart >= anc.gridRowStart &&
                child.gridRowEnd <= anc.gridRowEnd &&
                child.gridColumnStart >= anc.gridColumnStart &&
                child.gridColumnEnd <= anc.gridColumnEnd;

            if (!inside) {
                errors.push({
                    code: "constraint-violation",
                    elementId: childId,
                    message: `Element '${childId}' exceeds constrained ancestor '${ancId}'.`,
                    details: { ancestorId: ancId },
                });
            }
        }
    }

    return { warnings, errors };
}

/* ------------------------ internals: overlaps & ancestry ------------------------ */

function intervalsOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number) {
    // strict: touching at boundary is NOT overlap
    return aStart < bEnd && bStart < aEnd;
}

function checkOverlaps(
    elements: AbsoluteGridElement[]
): { errors: GridErrorShape[]; warnings: GridErrorShape[] } {
    const errors: GridErrorShape[] = [];
    const warnings: GridErrorShape[] = [];

    // Unordered pairs i<j
    for (let i = 0; i < elements.length - 1; i++) {
        const A = elements[i];
        for (let j = i + 1; j < elements.length; j++) {
            const B = elements[j];

            const rowHit = intervalsOverlap(A.gridRowStart, A.gridRowEnd, B.gridRowStart, B.gridRowEnd);
            if (!rowHit) continue;

            const colHit = intervalsOverlap(
                A.gridColumnStart,
                A.gridColumnEnd,
                B.gridColumnStart,
                B.gridColumnEnd
            );
            if (!colHit) continue;

            // Rectangles overlap
            const bothAllow = A.allowOverlap && B.allowOverlap;
            if (!bothAllow) {
                errors.push({
                    code: "overlap-not-allowed",
                    elementId: A.id,
                    message: `Overlaps with '${B.id}'.`,
                    details: { otherId: B.id },
                });
            } else {
                const aZ = A.zIndex;
                const bZ = B.zIndex;
                if (aZ === undefined && bZ === undefined) {
                    warnings.push({
                        code: "overlap-without-z",
                        elementId: A.id,
                        message: `Overlaps '${B.id}' but neither has zIndex; DOM order will decide.`,
                        details: { otherId: B.id },
                    });
                } else if (aZ !== undefined && bZ !== undefined && aZ === bZ) {
                    warnings.push({
                        code: "overlap-without-z",
                        elementId: A.id,
                        message: `Overlaps '${B.id}' with equal zIndex=${aZ}; DOM order will decide.`,
                        details: { otherId: B.id, zIndex: aZ },
                    });
                }
            }
        }
    }

    return { errors, warnings };
}

/**
 * Build a map childId -> [ancestorIdsWithConstraint].
 * Walks GridLayout.elements recursion; an ancestor participates ONLY if it has constrainChildren=true.
 */
function computeConstrainedAncestors(gridLayout: GridLayout): Map<string, string[]> {
    const result = new Map<string, string[]>();

    function dfs(nodes: GridLayout["elements"], constrainedStack: string[], lineage: string[]) {
        for (const n of nodes) {
            // current applicable constraints = previous + any ancestor in lineage with constrainChildren=true
            const nextStack =
                n.constrainChildren ? [...constrainedStack, n.id] : constrainedStack.slice();

            // All descendants of this node inherit nextStack
            if (n.children && n.children.length) {
                // Record constraints for each descendant below; current node itself is not "child" of itself
                dfs(n.children, nextStack, [...lineage, n.id]);
            }

            // For direct children, attach current constraints (note: they already got handled when visited)
            // We also ensure the current node carries the constraints from its ancestors
            if (nextStack.length) {
                // Do not mark the node itself as constrained by itself; filter self if present
                const filtered = nextStack.filter((id) => id !== n.id);
                if (filtered.length) {
                    const prior = result.get(n.id) ?? [];
                    result.set(n.id, mergeUnique(prior, filtered));
                }
            }
        }
    }

    dfs(gridLayout.elements, [], []);
    return result;
}

function mergeUnique<T>(a: T[], b: T[]) {
    const s = new Set<T>(a);
    for (const x of b) s.add(x);
    return [...s];
}
