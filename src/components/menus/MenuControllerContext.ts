import { createContext } from 'react';
import { MenuStore, MenuState } from './menuStore';
import { useContext } from 'react';

///
///
export type MenuControllerContextType = {
  menuStore: MenuStore<MenuState>;
};

const MenuControllerContext = createContext<MenuControllerContextType | null>(null);

export { MenuControllerContext };

export function useMenuControllerContext() {
  const ctx = useContext(MenuControllerContext);
  if (!ctx) throw new Error('MenuControllerContext missing. Wrap with <MenuProvider>.');
  return ctx;
}


