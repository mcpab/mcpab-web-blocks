import { BPs, Breakpoint } from "../core/breakpoints";
import { DiagnosticEntry, GRID_ERROR_CODE, makeDiagnostic, makeError } from "../core/gridErrorShape";
import { NodeAbsoluteCoordinates, NodeAbsoluteCoordinatesBPS } from "../core/gridNodeTypes";
export type Coordinate = { x: number; y: number };
export type CoordinateBps = BPs<Coordinate>;




const MAXNODE: NodeAbsoluteCoordinates = {
    gridColumnStart: +Infinity,
    gridColumnEnd: Infinity,
    gridRowStart: +Infinity,
    gridRowEnd: Infinity,
};

const MINNODE: NodeAbsoluteCoordinates = {
    gridColumnStart: -Infinity,
    gridColumnEnd: -Infinity,
    gridRowStart: -Infinity,
    gridRowEnd: -Infinity,
};

const MAX_COORDINATES: BPs<NodeAbsoluteCoordinates> = {
    xs: { ...MAXNODE },
    sm: { ...MAXNODE },
    md: { ...MAXNODE },
    lg: { ...MAXNODE },
    xl: { ...MAXNODE },
};

const MIN_COORDINATES: BPs<NodeAbsoluteCoordinates> = {
    xs: { ...MINNODE },
    sm: { ...MINNODE },
    md: { ...MINNODE },
    lg: { ...MINNODE },
    xl: { ...MINNODE },
};

function minAbsoluteCoordinates(a: NodeAbsoluteCoordinates, b: NodeAbsoluteCoordinates): NodeAbsoluteCoordinates {
    return {
        gridRowStart: Math.min(a.gridRowStart, b.gridRowStart),
        gridRowEnd: Math.min(a.gridRowEnd, b.gridRowEnd),
        gridColumnStart: Math.min(a.gridColumnStart, b.gridColumnStart),
        gridColumnEnd: Math.min(a.gridColumnEnd, b.gridColumnEnd),
    }
}

function minAbsoluteCoordinatesBPS(a: NodeAbsoluteCoordinatesBPS, b: NodeAbsoluteCoordinatesBPS): NodeAbsoluteCoordinatesBPS {
    return {
        xs: minAbsoluteCoordinates(a.xs, b.xs),
        sm: minAbsoluteCoordinates(a.sm, b.sm),
        md: minAbsoluteCoordinates(a.md, b.md),
        lg: minAbsoluteCoordinates(a.lg, b.lg),
        xl: minAbsoluteCoordinates(a.xl, b.xl),
    }
}

function maxAbsoluteCoordinates(a: NodeAbsoluteCoordinates, b: NodeAbsoluteCoordinates): NodeAbsoluteCoordinates {
    return {
        gridRowStart: Math.max(a.gridRowStart, b.gridRowStart),
        gridRowEnd: Math.max(a.gridRowEnd, b.gridRowEnd),
        gridColumnStart: Math.max(a.gridColumnStart, b.gridColumnStart),
        gridColumnEnd: Math.max(a.gridColumnEnd, b.gridColumnEnd),
    }
}

function maxAbsoluteCoordinatesBPS(a: NodeAbsoluteCoordinatesBPS, b: NodeAbsoluteCoordinatesBPS): NodeAbsoluteCoordinatesBPS {
    return {
        xs: maxAbsoluteCoordinates(a.xs, b.xs),
        sm: maxAbsoluteCoordinates(a.sm, b.sm),
        md: maxAbsoluteCoordinates(a.md, b.md),
        lg: maxAbsoluteCoordinates(a.lg, b.lg),
        xl: maxAbsoluteCoordinates(a.xl, b.xl),
    }
}


function sumCoordinatesBPS(a: CoordinateBps, b: CoordinateBps): CoordinateBps {
    return {
        xs: { x: a.xs.x + b.xs.x, y: a.xs.y + b.xs.y },
        sm: { x: a.sm.x + b.sm.x, y: a.sm.y + b.sm.y },
        md: { x: a.md.x + b.md.x, y: a.md.y + b.md.y },
        lg: { x: a.lg.x + b.lg.x, y: a.lg.y + b.lg.y },
        xl: { x: a.xl.x + b.xl.x, y: a.xl.y + b.xl.y },
    }
}

function isAnyNegative(coords: CoordinateBps, errors: DiagnosticEntry[], gridPolicy: 'clamp' | 'extend', origin: 'cursor' | 'addNode' | 'building grid'): boolean {
    let hasNegative = false;
    (Object.keys(coords) as Breakpoint[]).forEach((bp) => {
        const c = coords[bp];
        if (c.x < 1 || c.y < 1) {
            hasNegative = true;

            errors.push(makeDiagnostic(gridPolicy === 'clamp' ? 'warning' : 'error', 'boxFlow', GRID_ERROR_CODE.NEGATIVE_COORDINATE,
                `negative coordinate at breakpoint ${bp}: (${c.x}, ${c.y} from ${origin})`,
                { details: { bp, coordinate: c } }
            ));
        }
    });
    return hasNegative;
}

function getLowerLeftCorner(coords: NodeAbsoluteCoordinatesBPS): CoordinateBps {
    return {
        xs: { x: coords.xs.gridColumnStart, y: coords.xs.gridRowStart },
        sm: { x: coords.sm.gridColumnStart, y: coords.sm.gridRowStart },
        md: { x: coords.md.gridColumnStart, y: coords.md.gridRowStart },
        lg: { x: coords.lg.gridColumnStart, y: coords.lg.gridRowStart },
        xl: { x: coords.xl.gridColumnStart, y: coords.xl.gridRowStart },
    }
}

function translateCoordinate(coord: NodeAbsoluteCoordinates, delta: Coordinate): NodeAbsoluteCoordinates {
    return {
        gridColumnStart: coord.gridColumnStart + delta.x,
        gridColumnEnd: coord.gridColumnEnd + delta.x,
        gridRowStart: coord.gridRowStart + delta.y,
        gridRowEnd: coord.gridRowEnd + delta.y,
    }
}
function createBox(cursor: Coordinate, displacement: Coordinate): NodeAbsoluteCoordinates {

    let vertex: Coordinate = { x: cursor.x + displacement.x, y: cursor.y + displacement.y };

    return {
        gridColumnStart: cursor.x < vertex.x ? cursor.x : vertex.x,
        gridColumnEnd: cursor.x < vertex.x ? vertex.x : cursor.x,
        gridRowStart: cursor.y < vertex.y ? cursor.y : vertex.y,
        gridRowEnd: cursor.y < vertex.y ? vertex.y : cursor.y,
    }
}

function createBoxBPS(cursor: CoordinateBps, length: CoordinateBps): NodeAbsoluteCoordinatesBPS {
    return {
        xs: {
            ...createBox(cursor.xs, length.xs)
        },
        sm: {
            ...createBox(cursor.sm, length.sm)
        },
        md: {
            ...createBox(cursor.md, length.md)
        },
        lg: {
            ...createBox(cursor.lg, length.lg)
        },
        xl: {
            ...createBox(cursor.xl, length.xl)
        },
    }
}

function translateCoordinates(coords: NodeAbsoluteCoordinatesBPS, delta: CoordinateBps): NodeAbsoluteCoordinatesBPS {
    return {
        xs: {
            ...translateCoordinate(coords.xs, delta.xs),
        },
        sm: {
            ...translateCoordinate(coords.sm, delta.sm),

        },
        md: {
            ...translateCoordinate(coords.md, delta.md),
        },
        lg: {
            ...translateCoordinate(coords.lg, delta.lg),
        },
        xl: {
            ...translateCoordinate(coords.xl, delta.xl),
        },
    }
}

function translateGrid(nodes: NodeAbsoluteCoordinatesBPS[], delta: CoordinateBps): NodeAbsoluteCoordinatesBPS[] {
    return nodes.map((node) => translateCoordinates(node, delta));
}

function normalizeCornerForTranslation(lowerLeftCorner: CoordinateBps): CoordinateBps {
    return {
        xs: { x: lowerLeftCorner.xs.x < 1 ? 1 - lowerLeftCorner.xs.x : 0, y: lowerLeftCorner.xs.y < 1 ? 1 - lowerLeftCorner.xs.y : 0 },
        sm: { x: lowerLeftCorner.sm.x < 1 ? 1 - lowerLeftCorner.sm.x : 0, y: lowerLeftCorner.sm.y < 1 ? 1 - lowerLeftCorner.sm.y : 0 },
        md: { x: lowerLeftCorner.md.x < 1 ? 1 - lowerLeftCorner.md.x : 0, y: lowerLeftCorner.md.y < 1 ? 1 - lowerLeftCorner.md.y : 0 },
        lg: { x: lowerLeftCorner.lg.x < 1 ? 1 - lowerLeftCorner.lg.x : 0, y: lowerLeftCorner.lg.y < 1 ? 1 - lowerLeftCorner.lg.y : 0 },
        xl: { x: lowerLeftCorner.xl.x < 1 ? 1 - lowerLeftCorner.xl.x : 0, y: lowerLeftCorner.xl.y < 1 ? 1 - lowerLeftCorner.xl.y : 0 },
    }
}

function clampGrid(nodes: NodeAbsoluteCoordinatesBPS[]): NodeAbsoluteCoordinatesBPS[] {
    return nodes.map((node) => {
        return {
            xs: {
                gridColumnStart: Math.max(1, node.xs.gridColumnStart),
                gridColumnEnd: Math.max(2, node.xs.gridColumnEnd),
                gridRowStart: Math.max(1, node.xs.gridRowStart),
                gridRowEnd: Math.max(2, node.xs.gridRowEnd),
            },
            sm: {
                gridColumnStart: Math.max(1, node.sm.gridColumnStart),
                gridColumnEnd: Math.max(2, node.sm.gridColumnEnd),
                gridRowStart: Math.max(1, node.sm.gridRowStart),
                gridRowEnd: Math.max(2, node.sm.gridRowEnd),
            },
            md: {
                gridColumnStart: Math.max(1, node.md.gridColumnStart),
                gridColumnEnd: Math.max(2, node.md.gridColumnEnd),
                gridRowStart: Math.max(1, node.md.gridRowStart),
                gridRowEnd: Math.max(2, node.md.gridRowEnd),
            },
            lg: {
                gridColumnStart: Math.max(1, node.lg.gridColumnStart),
                gridColumnEnd: Math.max(2, node.lg.gridColumnEnd),
                gridRowStart: Math.max(1, node.lg.gridRowStart),
                gridRowEnd: Math.max(2, node.lg.gridRowEnd),
            },
            xl: {
                gridColumnStart: Math.max(1, node.xl.gridColumnStart),
                gridColumnEnd: Math.max(2, node.xl.gridColumnEnd),
                gridRowStart: Math.max(1, node.xl.gridRowStart),
                gridRowEnd: Math.max(2, node.xl.gridRowEnd),
            },
        }
    });
}

// we allow negative coordinates, and at the end we check whether the policy is clamping or extend the grid
export class BoxFlowBuilder {

    cursor: CoordinateBps;
    nodes: Array<NodeAbsoluteCoordinatesBPS> = [];

    gridPolicy: 'clamp' | 'extend' = 'extend';

    invalidNodePolicy: 'allow' | 'skip' = 'allow';

    errors: DiagnosticEntry[] = [];

    maxNodeCoordinates: NodeAbsoluteCoordinatesBPS = MIN_COORDINATES;
    minNodeCoordinates: NodeAbsoluteCoordinatesBPS = MAX_COORDINATES;

    isTerminal: boolean = false;

    constructor(policy: 'clamp' | 'extend' = 'extend', invalidNodePolicy: 'allow' | 'skip' = 'allow') {

        this.gridPolicy = policy;
        this.invalidNodePolicy = invalidNodePolicy;

        this.cursor = {
            xs: { x: 1, y: 1 },
            sm: { x: 1, y: 1 },
            md: { x: 1, y: 1 },
            lg: { x: 1, y: 1 },
            xl: { x: 1, y: 1 },
        };
    }

    setCursorAt(newCursor: CoordinateBps) {
        // shallow copy with overrides
        this.cursor.xs = newCursor.xs;
        this.cursor.sm = newCursor.sm;
        this.cursor.md = newCursor.md;
        this.cursor.lg = newCursor.lg;
        this.cursor.xl = newCursor.xl;
    }
    advanceCursorBy(delta: CoordinateBps) {

        this.cursor.xs = { x: this.cursor.xs.x + delta.xs.x, y: this.cursor.xs.y + delta.xs.y };
        this.cursor.sm = { x: this.cursor.sm.x + delta.sm.x, y: this.cursor.sm.y + delta.sm.y };
        this.cursor.md = { x: this.cursor.md.x + delta.md.x, y: this.cursor.md.y + delta.md.y };
        this.cursor.lg = { x: this.cursor.lg.x + delta.lg.x, y: this.cursor.lg.y + delta.lg.y };
        this.cursor.xl = { x: this.cursor.xl.x + delta.xl.x, y: this.cursor.xl.y + delta.xl.y };

        // just checking if the curse is getting in the negative space
        isAnyNegative(this.cursor, this.errors, this.gridPolicy, 'cursor');
    }
    getCursor(): CoordinateBps {
        return {
            xs: { x: this.cursor.xs.x, y: this.cursor.xs.y },
            sm: { x: this.cursor.sm.x, y: this.cursor.sm.y },
            md: { x: this.cursor.md.x, y: this.cursor.md.y },
            lg: { x: this.cursor.lg.x, y: this.cursor.lg.y },
            xl: { x: this.cursor.xl.x, y: this.cursor.xl.y },
        }
    }
    addNode(diagonal: CoordinateBps): boolean {

        if (this.isTerminal) {
            this.errors.push(makeError('boxFlow',
                GRID_ERROR_CODE.BOXFLOW_MUTATION_AFTER_FINALIZE,
                `attempted to mutate BoxFlowBuilder after finalization with getNodes()`,
            ));
            return false;
        }
        if (diagonal.xs.x === 0 || diagonal.xs.y === 0) {
            if (this.invalidNodePolicy === 'skip') {
                this.errors.push(
                    makeDiagnostic(
                        'error',
                        'boxFlow',
                        GRID_ERROR_CODE.BOXFLOW_ZERO_DIMENSION_NODE,
                        'skipped node with zero dimension at xs breakpoint',
                        { details: { diagonal } }
                    )
                );
                return false;
            } else {
                this.errors.push(
                    makeDiagnostic(
                        'warning',
                        'boxFlow',
                        GRID_ERROR_CODE.BOXFLOW_ZERO_DIMENSION_NODE,
                        'added node with zero dimension at xs breakpoint',
                        { details: { diagonal } }
                    )
                );
            }
        }
        const nodeCoordinates: NodeAbsoluteCoordinatesBPS = createBoxBPS(this.cursor, diagonal);


        this.cursor = sumCoordinatesBPS(this.cursor, diagonal);

        this.nodes.push(nodeCoordinates);

        // finding max and min of nodes
        this.maxNodeCoordinates = maxAbsoluteCoordinatesBPS(this.maxNodeCoordinates, nodeCoordinates);
        this.minNodeCoordinates = minAbsoluteCoordinatesBPS(this.minNodeCoordinates, nodeCoordinates);

        isAnyNegative(this.cursor, this.errors, this.gridPolicy, 'addNode');

        return true;
    }

    getNodes(): {
        nodes: Array<NodeAbsoluteCoordinatesBPS>; errors: DiagnosticEntry[],
        rows: BPs<number>, columns: BPs<number>
    } {

        const lowerLeftCorner = getLowerLeftCorner(this.minNodeCoordinates);

        if (isAnyNegative(lowerLeftCorner, this.errors, this.gridPolicy, 'building grid')) {
            if (this.gridPolicy === 'extend') {
                // translate all nodes to positive space
                const correction = normalizeCornerForTranslation(lowerLeftCorner);

                this.maxNodeCoordinates = translateCoordinates(this.maxNodeCoordinates, correction);
                this.minNodeCoordinates = translateCoordinates(this.minNodeCoordinates, correction);

                this.nodes = translateGrid(this.nodes, correction);

                this.errors.push(makeDiagnostic('warning', 'boxFlow',
                    GRID_ERROR_CODE.NEGATIVE_COORDINATE,
                    `translated grid to positive space by ${JSON.stringify(correction)}`,
                    { details: { correction } }
                ));
            } else if (this.gridPolicy === 'clamp') {
                this.nodes = clampGrid(this.nodes);
                this.errors.push(makeDiagnostic('warning', 'boxFlow',
                    GRID_ERROR_CODE.NEGATIVE_COORDINATE,
                    `clamped grid to positive space`,
                    { details: {} }
                ));
            }
        }

        const rows: BPs<number> = {
            xs: this.maxNodeCoordinates.xs.gridRowEnd - 1,
            sm: this.maxNodeCoordinates.sm.gridRowEnd - 1,
            md: this.maxNodeCoordinates.md.gridRowEnd - 1,
            lg: this.maxNodeCoordinates.lg.gridRowEnd - 1,
            xl: this.maxNodeCoordinates.xl.gridRowEnd - 1,
        };

        const columns: BPs<number> = {
            xs: this.maxNodeCoordinates.xs.gridColumnEnd - 1,
            sm: this.maxNodeCoordinates.sm.gridColumnEnd - 1,
            md: this.maxNodeCoordinates.md.gridColumnEnd - 1,
            lg: this.maxNodeCoordinates.lg.gridColumnEnd - 1,
            xl: this.maxNodeCoordinates.xl.gridColumnEnd - 1,
        };

        this.isTerminal = true;

        return { nodes: this.nodes, errors: this.errors, rows: rows, columns: columns };
    }
}