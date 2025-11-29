
/**
 * Configuration options for grid nodes
 */

import { NodeID } from "../templates/layoutIDs";
import { AbsoluteNode } from "./gridNodeTypes";

 

export type GridNodeViewOptions  = {
    zIndex?: number | undefined;
    allowOverlap?: boolean;
    constrainChildren?: boolean;

    justifySelf?: "start" | "end" | "center" | "stretch";
    alignSelf?: "start" | "end" | "center" | "stretch";

    role?: string;
    tags?: string[];

    visibility?: "visible" | "hidden" | "visuallyHidden";
};

export const defaultGridNodeOptions: GridNodeViewOptions  = {
    zIndex: 0,
    allowOverlap: false,
    constrainChildren: false,

    justifySelf: 'stretch',
    alignSelf: 'stretch',

    role: undefined,
    tags: [],

    visibility: 'visible',
};

export type GridNodeRenderConfig<K extends NodeID> = {
  contentRenderer: (nodeId: K,node:AbsoluteNode) => React.ReactNode;     
  view?: GridNodeViewOptions;
};

export type GridRenderersRegistry<K extends NodeID> = {
  [key in K]: GridNodeRenderConfig<key>;
};