import { createContext } from 'react';
import { MenuStore, MenuState } from './menuStore';
import { LinkTypeComponent } from 'src/core/link';
import { useContext } from 'react';
import { RowPolicy } from './RowPolicyTypes';

///
///
export type MenuControllerContextType = {
  menuStore: MenuStore<MenuState>;

};

export type MenuRenderContextType  = {
  linkLikeComp: LinkTypeComponent;
  rowPolicy: RowPolicy;
};

//


const MenuControllerContext = createContext<MenuControllerContextType | null>(null);
const MenuRenderContext = createContext<MenuRenderContextType | null>(null);

export { MenuControllerContext };
export { MenuRenderContext };

export function useMenuControllerContext() {
  const ctx = useContext(MenuControllerContext);
  if (!ctx) throw new Error("MenuControllerContext missing. Wrap with <MenuProvider>.");
  return ctx;
}

export function useMenuRenderContext() {
  const ctx = useContext(MenuRenderContext);
  if (!ctx) throw new Error("MenuRenderContext missing. Wrap with <MenuProvider>.");
  return ctx;
}