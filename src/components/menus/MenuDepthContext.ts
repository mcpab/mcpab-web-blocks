import { createContext } from 'react';
import { MenuStore, MenuState } from './menuStore';
import { LinkTypeComponent } from 'src/core/link';
import { useContext } from 'react';

///
///
type MenuDepthContextType = {
depth: number;

}; 

const MenuDepthContext = createContext<MenuDepthContextType | null>(null); 

export { MenuDepthContext };

export function useMenuDepthContext() {
  const ctx = useContext(MenuDepthContext);
  if (!ctx) throw new Error("MenuDepthContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
 