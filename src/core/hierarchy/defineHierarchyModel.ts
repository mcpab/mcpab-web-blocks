import { type HierarchyRelations, type PayloadMap } from './hierarchyTypes';

/**
 * Helper that anchors generic inference for a hierarchy relations model.
 *
 * @remarks
 * `_payloadMap` is intentionally unused at runtime; it exists to drive
 * compile-time inference for `P`.
 */
export const defineHierarchyModel = <P extends PayloadMap>(
  _payloadMap: P,
  model: HierarchyRelations<P>,
): HierarchyRelations<P> => {
  return model;
};
