import { DefaultNodeManager } from "../core/DefaultNodeManager";
import { AbsoluteNode, GridNodeOptions, NodeAbsoluteCoordinates } from "../core/GridNodeTypes";
import { CanonicalGrid, GridOptions, PartialBps } from "../core/layoutTypes";
import { CssLength } from "../domainTypes";
import { Kinds, NodeID } from "../ids/kinds";
export const VIRTUAL_RESOLUTION = { vx: 48, vy: 48 } as const;

// literal types derived from the values
export type Vx = typeof VIRTUAL_RESOLUTION.vx; // 48
export type Vy = typeof VIRTUAL_RESOLUTION.vy; // 48

const px = (value: number): CssLength => ({ unit: 'px', value });

export const defaultUniformGridOptions: GridOptions = {
    // --- Gaps ---
    // Single shorthand → same for row & column
    gap: px(16),

    // --- Implicit tracks (grid-auto-rows / grid-auto-columns) ---
    // CSS default is `auto`; you can swap to `fr(1)` if you want uniform tracks
    implicitRowUnits: { unit: 'auto' },
    implicitColumnUnits: { unit: 'auto' },

    // --- Layout behavior ---
    overflow: 'visible',       // grid container overflow
    autoFlow: 'row',           // grid-auto-flow: row

    // --- Item alignment (per cell) ---
    justifyItems: 'stretch',
    alignItems: 'stretch',

    // --- Grid alignment (as a block inside parent) ---
    justifyContent: 'start',
    alignContent: 'start',
};

export const defaultGridNodeOptions: GridNodeOptions = {
    zIndex: 0,
    allowOverlap: false,
    constrainChildren: false,

    justifySelf: 'stretch',
    alignSelf: 'stretch',

    role: undefined,
    tags: [],

    visibility: 'visible',
};


export const defaultCanonicalGrid = <K extends Kinds>(nodeManager: DefaultNodeManager<K>, gridOptions?: Partial<GridOptions>): CanonicalGrid<K> => {

    const canonicalGrid: CanonicalGrid<K> = {

        columns: VIRTUAL_RESOLUTION.vx,
        rows: VIRTUAL_RESOLUTION.vy,
        options: { ...defaultUniformGridOptions, ...gridOptions },
        nodes: nodeManager.nodesRegistry


    }
    return canonicalGrid;

}

export const defaultGridNode = <K extends Kinds>(kind: K, id: NodeID,
    coordinates: PartialBps<NodeAbsoluteCoordinates>, options?: Partial<GridNodeOptions>): AbsoluteNode<K> => {
    return {
        kind: kind,
        identity: {
            id: id,
        },
        coordinates: coordinates,
        options: {
            ...defaultGridNodeOptions,
            ...options
        }
    }
};