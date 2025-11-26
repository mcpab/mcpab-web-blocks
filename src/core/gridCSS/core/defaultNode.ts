import { NodeID } from "../ids/kinds";
import { GridNodeOptions, NodeAbsoluteCoordinates, AbsoluteNode } from "./gridNodeTypes";
import { PartialBps } from "./breakpoints";


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


export const defaultGridNode = <K extends string>(kind: K, id: NodeID,
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
    };
};
