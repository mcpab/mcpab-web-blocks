import { createContext, useContext } from "react";
import { GetSelectorsReturnType } from "./drawer/pathSelectors";

export type MenuSelectorContextType = GetSelectorsReturnType;

const MenuSelectorContext = createContext<MenuSelectorContextType | null>(null);
export { MenuSelectorContext };


export function useMenuSelectorContext() {
  const ctx = useContext(MenuSelectorContext);
  if (!ctx) throw new Error('MenuSelectorContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
