import { BPs } from "../breakpoints";

// this the shape type used in box layouts and box shape catalogs
export type BoxDimensions= [number, number]; // [width, height]
  
export type BoxDimensionId =
  | 'unitCell'
  | 'doubleWideCell'
  | 'doubleTallCell' 
  | 'doubleCell'
  | 'tripleWideCell'
  | 'tripleTallCell'
  | 'tripleCell'
  | '5WideCell' 
  | '5TallCell'
  | '5Wide5TallCell'
  | '10WideCell'
  | '10TallCell'
  | '10Wide10TallCell'
  | '15WideCell'
  | '15TallCell'
  | '15Wide15TallCell'
  | '20WideCell'
  | '20TallCell'
  | '20Wide20TallCell'
  ;
  
export type BoxShapeCatalog = Record<BoxDimensionId, BoxDimensions>;
export type BoxDimensionIdsCSS = BoxDimensionId | BPs<BoxDimensionId>; // we enforce full responsiveness for box shapes

