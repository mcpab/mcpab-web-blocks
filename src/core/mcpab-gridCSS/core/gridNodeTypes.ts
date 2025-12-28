// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

 
import { BPs } from "./breakpoints";

export type GridNodeLayoutFlags = {
  allowOverlap?: boolean;
  constrainChildren?: boolean;
  visibility?: "visible" | "hidden"; // no visuallyHidden here
};

/**
 * Absolute coordinates for grid node positioning
 */

export type CSSCoordinates = {
    gridRowStart: number;
    gridColumnStart: number;
    gridRowEnd: number; // exclusive
    gridColumnEnd: number; // exclusive
};
/**
 * Grid node identity and metadata
 */

// export type GridNodeIdentityK<ID extends string = string> = {
//     parentId?: ID;
//     name?: string; // display/debug name
//     id: ID;
// };
/**
 * Absolute positioned grid node with identity, coordinates, and options
 */

export type CSSCoordinatesBPS = BPs<CSSCoordinates>;
