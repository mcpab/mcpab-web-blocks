import { createContext } from 'react';
import { MenuStore, MenuState } from './menuStore';
import { LinkTypeComponent } from 'src/core/link';
import { useContext } from 'react';

///
///
type MenuContextType = {
  menuStore: MenuStore<MenuState>;
  linkLikeComp: LinkTypeComponent;
};

//


const MenuContext = createContext<MenuContextType | null>(null);
export default MenuContext;


export function useMenuContext() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("MenuContext missing. Wrap with <MenuProvider>.");
  return ctx;
}

