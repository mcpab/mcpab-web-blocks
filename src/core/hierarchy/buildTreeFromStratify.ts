import { Stratify } from './convertToD3Stratify';
import { StratifyPayload } from './D3StratifyTypes';
import { HIERARCHY_ERROR_CODE, HierarchyIssue } from './hierarchyErrorShape';
/**
 * Build a nested `{ children: Record<id, payload> }` tree from a `d3-hierarchy` stratified root.
 *
 * @remarks
 * This converts the `HierarchyNode` representation (where children are stored as arrays of nodes)
 * into a plain object tree of {@link StratifyPayload} values keyed by child id.
 *
 * ⚠️ **Mutation:** This function mutates `stratify.data.payload` objects by assigning/creating
 * `payload.children` on parents during traversal.
 *
 * The returned `root` is the payload object corresponding to the stratify root (often the synthetic `"root"` node),
 * with `root.children` set to the constructed children map.
 *
 * @param stratify - Root {@link Stratify} node returned by `d3.stratify()`.
 * @returns `{ root, issues }` where `root` is a plain {@link StratifyPayload} tree.
 *
 * @example
 * ```ts
 * const res = convertToD3Stratify(nodes, overrides);
 * if (!res.ok) throw new Error(res.issues[0]?.message);
 *
 * const built = buildTreeFromStratify(res.root);
 * console.log(built.root?.children);
 * ```
 */


export function buildTreeFromStratify<Node, NodeOverrides>(
  stratify: Stratify<Node, NodeOverrides>,
): { root: StratifyPayload<Node, NodeOverrides>; issues: HierarchyIssue[] } {
  //
  ///

  const { node, overrides } = stratify.data.payload;

  const root: StratifyPayload<Node, NodeOverrides> = {
    node: node,
    overrides: overrides,
  };

  const issues: HierarchyIssue[] = [];
  const buildNode = createBuildNode<Node, NodeOverrides>(issues);

  stratify.eachBefore(buildNode);

  root.children = stratify.data.payload.children;

  return { root, issues };
  //
}

function createBuildNode<Node, NodeOverrides>(
  issues: HierarchyIssue[],
): (node: Stratify<Node, NodeOverrides>) => void {
  ///
  return (nodeStratify: Stratify<Node, NodeOverrides>) => {
    ///

    const id = nodeStratify.id;

    if (id === undefined) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Node with undefined id found.`,
      });
      return;
    }

    // initialize the tree node

    const parent = nodeStratify.parent;

    if (parent === null) {
      // this is the root node, return, nothing to do
      return;
    }

    let parentChildren = parent.data.payload.children;

    if (parentChildren === undefined) {
      // console.log('Initializing children for parent id:', parent.id);
      parentChildren = {};
      parent.data.payload.children = parentChildren;
    }

    ///
    parentChildren[id] = nodeStratify.data.payload;
  };
}
