import { createContext, useContext } from 'react';
import { RenderedRegistry, RenderingNodesAndProps } from '../../core/rendering/RegistryTypes';
import { DefaultTextNodesRegistry, TextNodeKind } from './defaultTextRegistries';
import { DefaultRendersRegistry } from './textNodeRenderers';
import { LinkTypeComponent } from '../../core/link';

/*
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
 
  rendersRegistry: typeof DefaultTextNodesRegistry;
 
  indentPolicy: ({ baseIndent, depth }: IndentPolicyProps) => number;

  LinkComponent : LinkTypeComponent;
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
