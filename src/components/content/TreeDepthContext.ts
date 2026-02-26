import { createContext, useContext } from 'react';

/**
 * Tracks the current nesting depth within the text drawer tree.
 *
 * @remarks
 * The depth value is set at the root by `TextDrawer_Client` (depth 0) and
 * incremented by one each time `TextOpenClose` wraps its children in a new
 * `TreeTextDepthContext.Provider`.  Leaf nodes read this value to pass it
 * to their renderer's `props` function (e.g. `titleAndSubDepth` uses it to
 * select the correct heading size).
 */
type TreeTextDepthContextType = {
  /** Zero-based depth of the current node (0 = top-level drawer items). */
  depth: number;
};

/**
 * React context that carries the current tree depth.
 *
 * @remarks
 * Exported as a named value so `TextOpenClose` can create new providers with
 * `depth + 1` without going through the hook (which would throw if used
 * outside a provider).
 *
 * Consumers should prefer {@link useTextTreeDepthContext}.
 */
const TreeTextDepthContext = createContext<TreeTextDepthContextType | null>(null);
export { TreeTextDepthContext };

/**
 * Hook — returns the current tree depth for the calling node.
 *
 * @throws {Error} If called outside of a `TreeTextDepthContext.Provider` tree.
 *
 * @example
 * ```tsx
 * const { depth } = useTextTreeDepthContext();
 * // depth === 0 at top level, 1 inside first-level sections, etc.
 * ```
 */
export function useTextTreeDepthContext() {
  const ctx = useContext(TreeTextDepthContext);
  if (!ctx) throw new Error('TreeTextDepthContext missing. Wrap with <TreeTextDepthContext>.');
  return ctx;
}
