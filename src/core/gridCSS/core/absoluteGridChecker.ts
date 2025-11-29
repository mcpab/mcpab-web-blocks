// core/absoluteGridChecker.ts
// ============================================================================
// AbsoluteGrid checker - structural invariants + simple overlap detection
// ============================================================================

import type { NodeID } from "../templates/layoutIDs";
import type { AbsoluteGrid } from "./absoluteGridTypes";
import { BREAKPOINTS } from "./breakpoints";
import { GRID_ERROR_CODE, makeDiagnostic, makeError } from "./gridErrorShape";
import type { NodeAbsoluteCoordinates } from "./gridNodeTypes";

type CheckResult = {
    errors: ReturnType<typeof makeError>[];
    warnings: ReturnType<typeof makeDiagnostic>[];
};

export function checkAbsoluteGrid<K extends NodeID>(
    grid: AbsoluteGrid<K>
): CheckResult {
    const errors: CheckResult["errors"] = [];
    const warnings: CheckResult["warnings"] = [];

    // --------------------------------------------------------------------------
    // 1) Basic lattice sanity per breakpoint (rows/columns > 0)
    // --------------------------------------------------------------------------
    for (const [bp, rows] of Object.entries(grid.rows)) {
        if (rows <= 0) {
            errors.push(
                makeError(
                    "absoluteGrid",
                    GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                    `rows must be > 0 at breakpoint "${bp}", got ${rows}`,
                    { details: { breakpoint: bp, rows } }
                )
            );
        }
    }

    for (const [bp, columns] of Object.entries(grid.columns)) {
        if (columns <= 0) {
            errors.push(
                makeError(
                    "absoluteGrid",
                    GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                    `columns must be > 0 at breakpoint "${bp}", got ${columns}`,
                    { details: { breakpoint: bp, columns } }
                )
            );
        }
    }

    // Collect all breakpoints that appear anywhere (rows, columns, or node coords)
    const breakpointSet = new Set<string>();
    Object.keys(grid.rows).forEach((bp) => breakpointSet.add(bp));
    Object.keys(grid.columns).forEach((bp) => breakpointSet.add(bp));

    for (const node of Object.values(grid.nodes)) {
        if (!node) continue;
        for (const bp of Object.keys(node.node.coordinates)) {
            breakpointSet.add(bp);
        }
    }

    const allBreakpoints = Array.from(breakpointSet);

    // --------------------------------------------------------------------------
    // 2) Per-node, per-breakpoint coordinate sanity
    // --------------------------------------------------------------------------
    type NodeAtBp<K extends string> = {
        id: NodeID;

        bp: string;
        coords: NodeAbsoluteCoordinates;

    };

    const nodesPerBreakpoint = new Map<string, NodeAtBp<K>[]>();

    for (const [id, node] of Object.entries(grid.nodes) as [
        NodeID,
        typeof grid.nodes[number]
    ][]) {
        if (!node) continue;

        for (const bp of BREAKPOINTS) {
            
            const coords = node.node.coordinates[bp];
            if (!coords) continue;

            const { gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd } = coords;

            // Zero/negative area checks
            if (gridRowEnd <= gridRowStart || gridColumnEnd <= gridColumnStart) {
                errors.push(
                    makeError(
                        "absoluteGrid",
                        GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                        `node "${id}" has non-positive area at breakpoint "${bp}"`,
                        {
                            details: {
                                nodeId: id,
                                breakpoint: bp,
                                coords,
                            },
                        }
                    )
                );
                continue;
            }

            // Bounds checks if lattice info is available for this breakpoint
            const rows = (grid.rows as any)[bp] as number | undefined;
            const columns = (grid.columns as any)[bp] as number | undefined;

            if (rows != null) {
                if (gridRowStart < 1 || gridRowEnd > rows + 1) {
                    errors.push(
                        makeError(
                            "absoluteGrid",
                            GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                            `node "${id}" row range [${gridRowStart}, ${gridRowEnd}) is out of bounds for ${rows} rows at "${bp}"`,
                            {
                                details: {
                                    nodeId: id,
                                    breakpoint: bp,
                                    coords,
                                    rows,
                                },
                            }
                        )
                    );
                }
            } else {
                warnings.push(
                    makeDiagnostic(
                        "warning",
                        "absoluteGrid",
                        GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                        `node "${id}" has row coordinates at breakpoint "${bp}" but grid.rows["${bp}"] is undefined`,
                        {
                            details: {
                                nodeId: id,
                                breakpoint: bp,
                                coords,
                            },
                        }
                    )
                );
            }

            if (columns != null) {
                if (gridColumnStart < 1 || gridColumnEnd > columns + 1) {
                    errors.push(
                        makeError(
                            "absoluteGrid",
                            GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                            `node "${id}" column range [${gridColumnStart}, ${gridColumnEnd}) is out of bounds for ${columns} columns at "${bp}"`,
                            {
                                details: {
                                    nodeId: id,
                                    breakpoint: bp,
                                    coords,
                                    columns,
                                },
                            }
                        )
                    );
                }
            } else {
                warnings.push(
                    makeDiagnostic(
                        "warning",
                        "absoluteGrid",
                        GRID_ERROR_CODE.INVALID_GRID_DEFINITION,
                        `node "${id}" has column coordinates at breakpoint "${bp}" but grid.columns["${bp}"] is undefined`,
                        {
                            details: {
                                nodeId: id,
                                breakpoint: bp,
                                coords,
                            },
                        }
                    )
                );
            }

            // Collect for overlap detection
            const list = nodesPerBreakpoint.get(bp) ?? [];
            list.push({
                id,
                bp,
                coords,
                 
            });
            nodesPerBreakpoint.set(bp, list);
        }
    }

    

    return { errors, warnings };
}

// Simple [r1,r2) × [c1,c2) intersection
function rectanglesOverlap(
    a: NodeAbsoluteCoordinates,
    b: NodeAbsoluteCoordinates
): boolean {
    const rowsOverlap = a.gridRowStart < b.gridRowEnd && a.gridRowEnd > b.gridRowStart;
    const colsOverlap =
        a.gridColumnStart < b.gridColumnEnd && a.gridColumnEnd > b.gridColumnStart;
    return rowsOverlap && colsOverlap;
}
