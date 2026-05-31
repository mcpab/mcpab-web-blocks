import { createContext, useContext } from 'react';

export type MenuSelectionContextType = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: string[];
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

export const MenuSelectionContext =
  createContext<MenuSelectionContextType | null>(null);

/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
export function useMenuSelectionContext() {
  const ctx = useContext(MenuSelectionContext);

  if (!ctx)
    throw new Error(
      'MenuSelectionContext missing. Wrap with <MenuSelectionContext.Provider>.',
    );
  return ctx;
}
