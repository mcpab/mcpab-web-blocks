import { createContext } from "react";
import { MenuStore, MenuState } from "./menuStore";

const MenuContext = createContext<MenuStore<MenuState>|null>(null);

export default MenuContext;