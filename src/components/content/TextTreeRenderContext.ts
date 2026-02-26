import { createContext, useContext } from 'react';
import { Registry } from './textNodeRenderers/rendersRegistryTypes';

/**
 * Input type for the indent policy function.
 * Passed by `TextElement` when computing `pl` for each node's wrapper `Box`.
 */
type IndentPolicyProps = {
  /** The base indent unit configured on `TextDrawer` (default `0`). */
  baseIndent: number;
  /** Zero-based depth of the node being rendered. */
  depth: number;
};

/**
 * Shape of the value provided by {@link TextTreeRendererContext}.
 *
 * @remarks
 * This context carries *rendering* configuration — visual indicators, the
 * active renderer registry, and the indent strategy.  State management lives
 * separately in {@link TextControllerContext} / {@link TreeTextStore}.
 *
 * Created once per `TextDrawer_Client` mount with values supplied by the
 * parent `TextDrawer` component via props.
 */
export type TextTreeRendererContextType = {
  /**
   * React node rendered as the toggle indicator when a section is **open**.
   * Typically `<ExpandLess />` from MUI icons.
   */
  openIndicator: React.ReactNode;
  /**
   * React node rendered as the toggle indicator when a section is **closed**.
   * Typically `<ExpandMore />` from MUI icons.
   */
  closeIndicator: React.ReactNode;
  /**
   * Base indent unit (in MUI spacing units) passed to `indentPolicy`.
   * Comes from the `indent` prop on `TextDrawer`.
   */
  baseIndent: number;
  /**
   * The active renderer registry.
   * Keys must match the `renderer` field of every {@link TextDrawerElement} in
   * the tree; missing keys cause a runtime error in `TextElement`.
   * Defaults to {@link defaultRendersRegistry}.
   */
  rendersRegistry: Registry;
  /**
   * Pure function that maps `(baseIndent, depth)` → a MUI spacing number used
   * as the `pl` (padding-left) on each node's `Box` wrapper in `TextElement`.
   *
   * The default implementation is `baseIndent * depth` — linear scaling.
   * Replace to implement step-function indentation, capped indentation, etc.
   *
   * @example
   * ```ts
   * // Flat — no indent regardless of depth
   * indentPolicy: () => 0,
   *
   * // Linear (default)
   * indentPolicy: ({ baseIndent, depth }) => baseIndent * depth,
   *
   * // Capped at 3 levels
   * indentPolicy: ({ baseIndent, depth }) => baseIndent * Math.min(depth, 3),
   * ```
   */
  indentPolicy: ({ baseIndent, depth }: IndentPolicyProps) => number;
};

/**
 * React context that carries renderer configuration down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer_Client`.  Consumed by `TextElement` and
 * `TextOpenClose` via {@link useTextTreeRendererContext}.
 *
 * Do **not** consume this context directly — use the hook instead.
 */
export const TextTreeRendererContext = createContext<TextTreeRendererContextType | null>(null);

/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
export function useTextTreeRendererContext() {
  const ctx = useContext(TextTreeRendererContext);

  if (!ctx)
    throw new Error('TextTreeRendererContext missing. Wrap with <TextTreeRendererContext>.');
  return ctx;
}
