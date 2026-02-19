import { createContext, useContext } from 'react';

/** Tracks the current nesting depth within a menu tree. Provided by each menu component. */
type MenuDepthContextType = {
  /** Zero-based depth of the current node (0 = root bar / drawer top level). */
  depth: number;
};

const MenuDepthContext = createContext<MenuDepthContextType | null>(null);
export { MenuDepthContext };

/** Returns the current depth from {@link MenuDepthContext}. Throws if the context is missing. */
export function useMenuDepthContext() {
  const ctx = useContext(MenuDepthContext);
  if (!ctx) throw new Error('MenuDepthContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
