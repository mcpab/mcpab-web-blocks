import { createContext, useContext } from 'react';
import { TreeTextState, TreeTextStore } from './textTreeStore';

/**
 * Shape of the value provided by {@link TextControllerContext}.
 *
 * @remarks
 * Intentionally narrow — only the shared store is exposed here.
 * Rendering concerns (indicators, indent policy, registry) live in
 * {@link TextTreeRendererContext} to keep the two responsibilities separate.
 */
export type TextControllerContextType = {
  /**
   * The single source of truth for every node's open/closed state in this tree.
   * Created once per `TextDrawer` mount and shared to all descendant nodes.
   */
  treeTextStore: TreeTextStore<TreeTextState>;
};

/**
 * React context that carries the {@link TreeTextStore} down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer` (the public Server-component shell).
 * Consumed by `TextElement` via {@link useTextControllerContext}.
 *
 * Do **not** consume this context directly — use the hook instead so that
 * missing-provider errors surface with a clear message.
 */
export const TextControllerContext = createContext<TextControllerContextType | null>(null);

/**
 * Hook — returns the {@link TextControllerContextType} for the nearest `TextDrawer` ancestor.
 *
 * @throws {Error} If called outside of a `TextControllerContext.Provider` tree.
 *
 * @example
 * ```tsx
 * const { treeTextStore } = useTextControllerContext();
 * const isOpen = useTreeTextOpen(treeTextStore, id);
 * ```
 */
export function useTextControllerContext() {
  const ctx = useContext(TextControllerContext);
  if (!ctx) throw new Error('TextControllerContext missing. Wrap with <TextControllerContext>.');
  return ctx;
}
