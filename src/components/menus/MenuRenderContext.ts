import { createContext, useContext } from 'react';
import { LinkTypeComponent } from 'src/core/link';
import type { MegaMenuPolicy, RowPolicy } from './RowPolicyTypes';

/**
 * Shared rendering configuration passed down through a menu tree.
 *
 * Provides the {@link RowPolicy} (per-row styling), the {@link MegaMenuPolicy}
 * (mega menu panel layout), and the link component used for navigation items.
 * Set once at the top of each menu variant (DrawerMenu, DropDown) and consumed
 * by every element and label component below it.
 */
export type MenuRenderContextType = {
  /** Component used to render navigation links (e.g. Next.js `Link`). */
  linkLikeComp: LinkTypeComponent;
  /** Determines visual styling for each row based on depth and selection state. */
  rowPolicy: RowPolicy;
  /** Layout policy for the mega menu panel (dropdown only). */
  megaMenuPolicy?: MegaMenuPolicy;
};

const MenuRenderContext = createContext<MenuRenderContextType | null>(null);
export { MenuRenderContext };

/** Returns {@link MenuRenderContextType} from {@link MenuRenderContext}. Throws if missing. */
export function useMenuRenderContext() {
  const ctx = useContext(MenuRenderContext);
  if (!ctx) throw new Error('MenuRenderContext missing. Wrap with <MenuProvider>.');
  return ctx;
}
