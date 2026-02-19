import { createContext, useContext } from 'react';
import { GetSelectorsReturnType } from './drawer/pathSelectors';

/**
 * Provides selection state derived from the active page selector callback.
 *
 * Holds stable `isSelected` and `isAncestorSelected` functions computed once
 * by {@link getSelectors} and distributed to all menu elements without re-renders.
 *
 * @see {@link GetSelectorsReturnType} for the full shape of the context value.
 */
export type MenuSelectorContextType = GetSelectorsReturnType;

const MenuSelectorContext = createContext<MenuSelectorContextType | null>(null);
export { MenuSelectorContext };

/** Returns {@link MenuSelectorContextType} from {@link MenuSelectorContext}. Throws if missing. */
export function useMenuSelectorContext() {
  const ctx = useContext(MenuSelectorContext);
  if (!ctx) throw new Error('MenuSelectorContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
