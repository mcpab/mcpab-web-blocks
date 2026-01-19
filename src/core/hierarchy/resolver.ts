/**
 * @module HierarchyResolver
 * @remarks
 * Runtime validation for {@link HierarchyTree} / {@link HierarchyRelations}.
 *
 * Types prevent some invalid states (e.g. self-parenting), but runtime validation is still required for:
 * - missing parents / missing nodes
 * - invalid parent references
 * - cycle detection
 * - ensuring at least one node attaches to `"root"`
 */
import { HIERARCHY_ERROR_CODE, HierarchyIssue } from './hierarchyErrorShape';
import { HierarchyRelations, HierarchyTree } from './hierarchyTypes';

/**
 * Result of {@link resolver}.
 *
 * @remarks
 * - When `ok: false`, `issues` contains one or more {@link HierarchyIssue} entries.
 * - When `ok: true`, `resolvedHierarchy` is the validated hierarchy tree.
 */
export type ResolverReturn<H extends HierarchyTree<any, any>> =
  | { ok: false; issues: HierarchyIssue[] }
  | { ok: true; resolvedHierarchy: H };

/**
 * Validate a hierarchy tree and detect invalid relations.
 *
 * @remarks
 * Checks performed:
 * 1. No `"root"` key inside `nodes`
 * 2. No undefined node entries
 * 3. Every node has a parent (non-null/undefined)
 * 4. Parent must be `"root"` or an existing node id
 * 5. No self-parenting
 * 6. At least one node attaches to `"root"`
 * 7. No cycles (DFS)
 *
 * @example
 * ```ts
 * const result = resolver(tree);
 * if (!result.ok) {
 *   console.log(result.issues);
 * } else {
 *   const valid = result.resolvedHierarchy;
 * }
 * ```
 */
export function resolver<H extends HierarchyTree<any, any>>(hierarchyTree: H): ResolverReturn<H> {
  //
  let issues: HierarchyIssue[] = [];

  let hasUndefinedElements = false;
  let hasMissingParents = false;
  let hasRoot = false;
  let hasInvalidParent = false;
  let hasInvalidHierarchy = false;

  const hierarchy = hierarchyTree.nodes;

  // populating the keys
  for (const key in hierarchy) {
    //

    if (key === 'root') {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `No element can have 'root' as its key.`,
      });
      hasInvalidHierarchy = true;
      continue;
    }

    const element = hierarchy[key];

    if (!element) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Element ${key} is undefined.`,
      });
      hasUndefinedElements = true;
      continue;
    }

    if (element.parent === undefined || element.parent === null) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.MISSING_PARENT,
        message: `Element ${key} is missing a parent.`,
      });
      hasMissingParents = true;
    } else {
      if (element.parent !== 'root' && !(element.parent in hierarchy)) {
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_PARENT,
          message: `Element ${key} has a parent ${element.parent} which does not exist in the hierarchy.`,
        });
        hasInvalidParent = true;
      }

      if (element.parent === key) {
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_PARENT,
          message: `Element ${key} cannot be its own parent.`,
        });
        hasInvalidParent = true;
      }

      if (element.parent === 'root') {
        hasRoot = true;
      }
    }
  }

  if (!hasRoot) {
    issues.push({
      code: HIERARCHY_ERROR_CODE.MISSING_ROOT_ATTACHMENT,
      message: `Hierarchy is missing an element with parent 'root'.`,
    });
  }
  if (
    hasMissingParents ||
    hasUndefinedElements ||
    !hasRoot ||
    hasInvalidParent ||
    hasInvalidHierarchy
  ) {
    return {
      ok: false,
      issues,
    };
  }

  // checking for cycles
  const visited = new Map<string, status>();
  let hasCycle = false;

  for (const key in hierarchy) {
    if (!visited.has(key)) {
      const path: string[] = [];
      const acyclicResult = acyclic(key, hierarchy, visited, path);
      if (!acyclicResult) {
        hasCycle = true;
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_CYCLE,
          message: `Cycle detected in hierarchy: ${path.join(' -> ')}`,
        });
        break;
      }
    }
  }

  if (hasCycle) {
    return {
      ok: false,
      issues,
    };
  }

  return {
    ok: true,
    resolvedHierarchy: hierarchyTree,
  };
}

type status = 'visiting' | 'visited';
/**
 * DFS helper used by {@link resolver} to detect cycles by following parent links.
 *
 * @remarks
 * Uses a color/state map:
 * - `"visiting"` means the node is on the current recursion stack
 * - `"visited"` means the node has been fully validated with no cycles
 *
 * @returns `true` if the traversal from `node` reaches `"root"` without encountering a cycle.
 */
function acyclic(
  node: string,
  hierarchy: HierarchyRelations<any>,
  visited: Map<string, status>,
  path: string[],
): boolean {
  ///

  /// DFS to detect cycles
  if (!visited.has(node)) {
    //
    visited.set(node, 'visiting');
    path.push(node);
    const parent = hierarchy[node].parent;

    if (parent === 'root') {
      // this is a good path
      visited.set(node, 'visited');
      return true;
    } else {
      const res = acyclic(parent, hierarchy, visited, path);
      if (res) {
        visited.set(node, 'visited');
      }
      return res;
    }
  } else if (visited.get(node) === 'visiting') {
    // cycle detected
    path.push(node);
    return false;
  } else {
    // already visited
    return true;
  }
}
