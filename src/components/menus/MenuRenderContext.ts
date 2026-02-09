import { createContext, useContext } from 'react';
import { LinkTypeComponent } from 'src/core/link';
import { RowPolicy } from './RowPolicyTypes';


///////////////////////////////
const MenuRenderContext = createContext<MenuRenderContextType | null>(null);
export { MenuRenderContext };

export type MenuRenderContextType = {
  linkLikeComp: LinkTypeComponent;
  rowPolicy: RowPolicy;
};
export function useMenuRenderContext() {
  const ctx = useContext(MenuRenderContext);
  if (!ctx) throw new Error('MenuRenderContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
