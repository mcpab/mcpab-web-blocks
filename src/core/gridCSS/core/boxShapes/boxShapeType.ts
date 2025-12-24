import { BPs } from "../breakpoints";

// this the shape type used in box layouts and box shape catalogs
export type BoxDimensions = [number, number]; // [width, height]

export type BoxDimensionId =
  | 'unitCell'
  | 'doubleWideCell'
  | 'doubleTallCell'
  | 'doubleCell'
  | 'tripleWideCell'
  | 'tripleTallCell'
  | 'tripleCell'
  | '4WideCell'
  | '4TallCell'
  | '4Wide4TallCell'
  | '5WideCell'
  | '5TallCell'
  | '5Wide5TallCell'
  | '6WideCell'
  | '7WideCell'
  | '8WideCell'
  | '8TallCell'
  | '8Wide8TallCell'
  | '10WideCell'
  | '10TallCell'
  | '10Wide10TallCell'
  | '12WideCell'
  | '12TallCell'
  | '12Wide12TallCell'
  | '14WideCell'
  | '15WideCell'
  | '15TallCell'
  | '15Wide15TallCell'
  | '16WideCell'
  | '16TallCell'
  | '16Wide16TallCell'
  | '18WideCell'
  | '20WideCell'
  | '20TallCell'
  | '20Wide20TallCell';

export type BoxDimensionIdsCSS = BoxDimensionId | BPs<BoxDimensionId>;
export type BoxShapeCatalog = Record<BoxDimensionId, BoxDimensions>;


