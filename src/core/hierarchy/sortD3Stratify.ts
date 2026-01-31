import { Stratify } from './convertToD3Stratify';
import { HIERARCHY_ERROR_CODE, type HierarchyIssue } from './hierarchyErrorShape';
/**
 * Sort a `d3-hierarchy` stratified tree by `payload.node.order`.
 *
 * @remarks
 * - Uses {@link Stratify.sort} to order siblings.
 * - Primary key: `payload.node.order` (ascending).
 * - Fallback: `id` lexicographic compare when `order` is missing.
 *
 * Validation:
 * - Reports {@link HIERARCHY_ERROR_CODE.NULL_NODE} if it encounters a non-root node
 *   whose `payload.node` is `null`.
 *
 * ⚠️ Current behavior: issues are collected but sorting still proceeds.
 * If you want `ok:false` on any issue, return early when `issues.length > 0`.
 *
 * @typeParam Node - Node payload type. Must include `{ order: number }`.
 * @typeParam NodeOverrides - Optional override payload type embedded in {@link StratifyPayload}.
 */

export function sortD3Stratify<Node extends { order?: number }, NodeOverrides>(
  stratify: Stratify<Node, NodeOverrides>,
): { ok: true; root: Stratify<Node, NodeOverrides> } | { ok: false; issues: HierarchyIssue[] } {
  //

  const issues: HierarchyIssue[] = [];

  stratify.each((node) => {
    if (node.parent === null) {
      // this is the root node, skip
      return;
    }
    if (node.data.payload.node === null) {
      const parentId = node.parent ? node.parent.id : 'null';
      let parentString = '';
      if (parentId) {
        parentString = ` under parent id ${parentId}`;
      }
      issues.push({
        code: HIERARCHY_ERROR_CODE.NULL_NODE,
        message: `There is a null node while sorting${parentString}.`,
      });
    }
  });

  const root = stratify.sort((a, b) => {
    //

    if (a.data.payload.node === null || b.data.payload.node === null) {
      return 0;
    }

    const aOrder = a.data.payload.node.order;
    const bOrder = b.data.payload.node.order;

    if (aOrder === undefined && bOrder === undefined) {
      return a.data.id.localeCompare(b.data.id);
    }

    if (aOrder === undefined && bOrder !== undefined) return 1;
    if (aOrder !== undefined && bOrder === undefined) return -1;

    if (aOrder !== undefined && bOrder !== undefined) return aOrder - bOrder;

    return 0;
    //
  });

  if (issues.length > 0) {
    return { ok: false, issues };
  }

  return { root, ok: true };
}
