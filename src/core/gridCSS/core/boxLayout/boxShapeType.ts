
// this the shape type used in box layouts and box shape catalogs
export type BoxShape= [number, number]; // [width, height]

export type BoxShapeId =
  | 'unitCell'
  | 'doubleWideCell'
  | 'doubleTallCell'
  | 'doubleCell'
  | 'tripleWideCell'
  | 'tripleTallCell'
  | 'tripleCell';

export type BoxShapeCatalog = Record<BoxShapeId, BoxShape>;

