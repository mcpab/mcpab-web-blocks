import { createContext, useContext } from "react";


export type MenuDepthContextType = {
    depth:number;
}

export const MenuDepthContext = createContext<MenuDepthContextType|null>(null);

export function useMenuDepthContext() {
  const ctx = useContext(MenuDepthContext);

  if (!ctx)
    throw new Error('MenuDepthContext missing. Wrap with <MenuDepthContext>.');
  return ctx;
}
