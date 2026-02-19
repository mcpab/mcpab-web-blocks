import { createContext, useContext } from 'react';
import { MenuStore, MenuState } from './menuStore';

/**
 * Provides the shared {@link MenuStore} instance that tracks open/closed state
 * for all collapsible nodes in a single menu tree.
 *
 * Consumed by {@link DrawerOpenClose} (and any future toggle components) to read
 * and update individual node states without prop-drilling.
 */
export type MenuControllerContextType = {
  menuStore: MenuStore<MenuState>;
};

const MenuControllerContext = createContext<MenuControllerContextType | null>(null);
export { MenuControllerContext };

/** Returns the {@link MenuControllerContextType} from {@link MenuControllerContext}. Throws if missing. */
export function useMenuControllerContext() {
  const ctx = useContext(MenuControllerContext);
  if (!ctx) throw new Error('MenuControllerContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
