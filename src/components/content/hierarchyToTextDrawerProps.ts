import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';

import { StratifyPayload } from '../../core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from '../../core/hierarchy/hierarchyErrorShape';

import {
  TextDrawerElement,
  RootTextElement,
  RootTextElementUI,
  TextDrawerElementUI,
} from './TextDrawerTypes';
import prepareTextTree from './prepareTextTree';

/**
 * Input props for {@link hierarchyToTextDrawerProps}.
 *
 * @typeParam P - The payload map literal type inferred from the `hierarchy`
 *   constant.  Must satisfy `PayloadMap<TextDrawerElement>`.
 */
export type HierachyToTextDrawerProps<P extends PayloadMap<TextDrawerElement>> = {
  /**
   * Compile-time–validated tree literal.
   * Use `as const satisfies HierarchyTree<P, RootTextElement>` at the
   * definition site to get full TypeScript narrowing.
   */
  hierarchy: HierarchyTree<P, RootTextElement>;
  /**
   * UI-only overrides keyed by node ID.
   * Each node's overrides are merged with its base payload at render time.
   * All node IDs in `overrides.nodes` must exist in `hierarchy.nodes`.
   */
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTextElement>,
    RootTextElementUI,
    TextDrawerElementUI
  >;
};

/**
 * Discriminated-union return type from {@link hierarchyToTextDrawerProps}.
 *
 * Check `ok` before accessing `treeFromRoot`.
 */
export type HierachyToTextDrawerPropsReturn =
  | { ok: false; issues: HierarchyIssue[] }
  | {
      ok: true;
      /** Pre-built, sorted tree ready to pass directly to `<TextDrawer treeFromRoot={…} />`. */
      treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
    };

/**
 * Public entry point — converts a typed hierarchy literal into the prop
 * expected by `TextDrawer`.
 *
 * @remarks
 * This is the **only** function consumers should call.  Internally it delegates
 * to `prepareTextTree` which runs the full pipeline:
 * 1. `resolver` — validates parent references and detects cycles.
 * 2. `convertToD3Stratify` — flattens the hierarchy into D3-compatible records.
 * 3. `sortD3Stratify` — applies `order` fields for stable sibling ordering.
 * 4. `buildTreeFromStratify` — reconstructs the recursive `StratifyPayload` tree.
 *
 * All validation errors are collected into `issues` and returned as
 * `{ ok: false, issues }` so the caller can decide how to surface them.
 *
 * @typeParam P - Inferred payload map from the `hierarchy` literal.
 *
 * @example
 * ```ts
 * const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
 * if (!result.ok) {
 *   console.error(result.issues);
 * } else {
 *   return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
 * }
 * ```
 */
export function hierarchyToTextDrawerProps<P extends PayloadMap<TextDrawerElement>>({
  hierarchy,
  overrides,
}: HierachyToTextDrawerProps<P>): HierachyToTextDrawerPropsReturn {
  const treeRoot = prepareTextTree<P>({ hierarchy, overrides, issues: [] });

  if (!treeRoot.ok) {
    console.error('Failed to prepare text tree:', treeRoot.issues);
    return { ok: false, issues: treeRoot.issues };
  }

  return {
    ok: true,
    treeFromRoot: treeRoot.root,
  };
}
