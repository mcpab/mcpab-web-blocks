'use client';

import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { TextDrawerElement, TextDrawerElementUI } from './TextDrawerTypes';
import { useMemo } from 'react';
import { TreeTextState } from './textTreeStore';
import { createTreeTextStore } from './textTreeStore';
import { TextControllerContext } from './TextControllerContext';
import { TextDrawer_Client } from './TextDrawer_Client';

/**
 * Props for the `TextDrawer` component.
 *
 * @remarks
 * Obtain `treeFromRoot` by calling {@link hierarchyToTextDrawerProps} with a
 * typed `HierarchyTree` literal and checking `result.ok` before use.
 */
export type TextDrawerProps = {
  /** Pre-built, sorted tree produced by {@link hierarchyToTextDrawerProps}. */
  treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
  /**
   * Base indent unit (MUI spacing) applied to each depth level.
   * The actual padding is computed as `indent * depth` by the default
   * `indentPolicy` in `TextDrawer_Client`.
   * @defaultValue 0
   */
  indent?: number;
};

/**
 * Public-facing accordion/collapsible text tree component.
 *
 * @remarks
 * `TextDrawer` is the **only** component consumers should mount directly.
 * It is responsible for:
 * - Building the {@link TreeTextStore} from the tree's `defaultOpen` overrides.
 * - Providing the store via {@link TextControllerContext}.
 * - Delegating rendering to `TextDrawer_Client` (a `'use client'` boundary).
 *
 * The store is memoised on `treeFromRoot` — it is only rebuilt when the tree
 * reference changes, so the open/closed state survives parent re-renders.
 *
 * @example
 * ```tsx
 * const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
 * if (result.ok) {
 *   return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
 * }
 * ```
 */
export default function TextDrawer({ treeFromRoot, indent = 0 }: TextDrawerProps) {
  const treeTextStore = useMemo(() => {
    const initialStoreState: TreeTextState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState);
    initialStoreState['root'] = false;
    return createTreeTextStore(initialStoreState);
  }, [treeFromRoot]);

  return (
    <TextControllerContext.Provider value={{ treeTextStore }}>
      <TextDrawer_Client treeFromRoot={treeFromRoot} indent={indent} />
    </TextControllerContext.Provider>
  );
}

/**
 * Recursively walks the `StratifyPayload` tree and seeds every node's entry in
 * the open/closed state map from its `defaultOpen` override (or `false`).
 *
 * @remarks
 * Called once per store initialisation inside the `useMemo` in `TextDrawer`.
 * Leaf nodes are included in the map so the store surface is uniform — their
 * boolean has no visual effect but avoids conditional `??` lookups at read time.
 *
 * @internal
 */
function populateInitialStoreState(
  node: StratifyPayload<TextDrawerElement, TextDrawerElementUI>,
  store: Record<string, boolean>,
) {
  if (node.children) {
    for (const key in node.children) {
      store[key] = node.children[key].overrides?.defaultOpen ?? false;
      populateInitialStoreState(node.children[key], store);
    }
  }
}
