// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

import type { NodeID } from "../ids/kinds";
 
import { PartialBps, BPs } from "./breakpoints";

/**
 * Configuration options for grid nodes
 */
export type GridNodeOptions = {
    zIndex?: number | undefined;
    allowOverlap?: boolean;
    constrainChildren?: boolean;

    justifySelf?: "start" | "end" | "center" | "stretch";
    alignSelf?: "start" | "end" | "center" | "stretch";

    role?: string;
    tags?: string[];

    visibility?: "visible" | "hidden" | "visuallyHidden";
};
/**
 * Absolute coordinates for grid node positioning
 */

export type NodeAbsoluteCoordinates = {
    gridRowStart: number;
    gridColumnStart: number;
    gridRowEnd: number; // exclusive
    gridColumnEnd: number; // exclusive
};/**
 * Grid node identity and metadata
 */

export type GridNodeIdentity = {
    parentId?: NodeID;
    name?: string; // display/debug name
    id: NodeID;
};
/**
 * Absolute positioned grid node with identity, coordinates, and options
 */

export type NodeAbsoluteCoordinatesBPS = BPs<NodeAbsoluteCoordinates>;
export type AbsoluteNode<K extends string> = {
    kind: K;
    identity: GridNodeIdentity ;
    coordinates: PartialBps<NodeAbsoluteCoordinates>;
    options: GridNodeOptions;
    /** Ordering hint for rendering/placement; the checker groups ties */
    order?: number;
};

