/**
 * @module HierarchyD3
 * @remarks
 * Utilities for converting this library’s hierarchy relations into a `d3-hierarchy` stratified tree.
 *
 * This module produces the `id/parentId` array required by `d3.stratify()` and returns a
 * {@link HierarchyNode} root containing a synthetic `"root"` anchor node.
 */
import type { HierarchyNode } from 'd3-hierarchy';
import { stratify } from 'd3-hierarchy';
import { type HierarchyIssue, HIERARCHY_ERROR_CODE } from './hierarchyErrorShape';
import { PayloadMap } from './hierarchyTypes';

/**
 * Payload stored on each `d3-hierarchy` node after stratification.
 *
 * @remarks
 * - `node` is the original node payload (or `null` for the synthetic `"root"` anchor).
 * - `overrides` optionally stores a per-node override payload.
 * - `children` is only populated for `"root"` during conversion (as a convenience).
 */
export type StratifyPayload<Node, NodeOverrides> = {
  node: Node | null;
  overrides?: NodeOverrides;
  children?: Record<string, StratifyPayload<Node, NodeOverrides>>;
};

/**
 * Row format passed into `d3.stratify()`.
 *
 * @remarks
 * `d3.stratify()` expects an array of objects where each object has:
 * - `id`: unique identifier
 * - `parentId`: parent identifier (or `null` for the root)
 */
export type D3StratifyData<Node, NodeOverrides> = {
  id: string;
  parentId: string | null;
  payload: StratifyPayload<Node, NodeOverrides>;
};

/**
 * The `d3-hierarchy` node type returned by {@link convertToD3Stratify}.
 */
export type Stratify<Node, NodeOverrides> = HierarchyNode<D3StratifyData<Node, NodeOverrides>>;

/**
 * Convert a normalized hierarchy map into a `d3-hierarchy` stratified tree.
 *
 * @remarks
 * This function:
 * 1. Creates a synthetic `"root"` record with `parentId: null`.
 * 2. Converts each entry `{ payload, parent }` into `{ id, parentId, payload }`.
 * 3. Calls `d3.stratify()` and returns its root node.
 *
 * D3 may throw if the data is invalid (e.g. cycles, missing parents, duplicate ids).
 * Those errors are caught and returned as {@link HierarchyIssue} with code
 * {@link HIERARCHY_ERROR_CODE.D3_STRATIFY_ERROR}.
 *
 * @param hierarchy - Map of node id → `{ payload, parent }` where parent is another node id or `"root"`.
 * @param overridesNodes - Optional per-node payload overrides. If present for a node, its override is embedded under `payload.overrides`.
 *
 * @returns `{ ok: true, root }` on success, where `root` is a `d3-hierarchy` {@link HierarchyNode}
 * rooted at the synthetic `"root"` anchor. Otherwise `{ ok: false, issues }`.
 *
 * @example
 * ```ts
 * const res = convertToD3Stratify(nodes, overrides);
 * if (!res.ok) throw new Error(res.issues[0]?.message);
 * console.log(res.root.children);
 * ```
 */

import { HierarchyRelations } from './hierarchyTypes';
import { HierarchyRelationsOverrides } from './hierarchyTypes';

export function convertToD3Stratify<Node, NodeOverrides, P extends PayloadMap<Node>>(
  hierarchy: HierarchyRelations<P>,
  overridesNodes?: HierarchyRelationsOverrides<P, HierarchyRelations<P>, NodeOverrides>,
): { ok: true; root: Stratify<Node, NodeOverrides> } | { ok: false; issues: HierarchyIssue[] } {
  //
  const data: D3StratifyData<Node, NodeOverrides>[] = [];

  const issues: HierarchyIssue[] = [];

  // creating a dummy root node with id 'root' and parentId null
  data.push({
    id: 'root',
    parentId: null,
    payload: { node: null, children: {} }, // creating the children array only for root
  });

  // const hierarchy = hierarchyTree.nodes;
  // const overridesNodes = overrides.nodes;

  for (const key in hierarchy) {
    //
    let node: Node = hierarchy[key].payload;
    let overrides: NodeOverrides | undefined = undefined;

    if (overridesNodes) {
      if (key in overridesNodes) {
        const oveR = overridesNodes[key as keyof typeof overridesNodes];
        if (oveR !== undefined) {
          overrides = oveR.payload;
        }
      }
    }

    data.push({
      id: key,
      parentId: hierarchy[key].parent,
      payload: { node: node, ...(overrides !== undefined ? { overrides: overrides } : {}) },
    });
  }

  try {
    const root = stratify<D3StratifyData<Node, NodeOverrides>>()(data);
    return { ok: true, root };
  } catch (e) {
    const message = e instanceof Error ? e.message : typeof e === 'string' ? e : JSON.stringify(e);

    issues.push({
      code: HIERARCHY_ERROR_CODE.D3_STRATIFY_ERROR,
      message: `D3 Stratify error: ${message}`,
    });
    return { ok: false, issues };
  }
}
