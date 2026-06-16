import { createContext, useContext } from 'react';
import type { LinkTypeComponent } from '../../../core/link/linkExtensions';
import type { RenderDrawerMenuNode } from './defaultDrawerMenuRegistry';


export type DrawerMenuRenderContextType = {
  /**
   * React node rendered as the toggle indicator when a section is **open**.
   * Typically `<ExpandLess />` from MUI icons.
   */
  openIndicator: React.ReactNode;
  /**
   * React node rendered as the toggle indicator when a section is **closed**.
   * Typically `<ExpandMore />` from MUI icons.
   */
  closeIndicator: React.ReactNode;
  nodesRenderer: RenderDrawerMenuNode;

  LinkComponent: LinkTypeComponent;

  basePadding: number;
};

/**
 * React context that carries renderer configuration down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer_Client`.  Consumed by `TextElement` and
 * `TextOpenClose` via {@link useTextTreeRendererContext}.
 *
 * Do **not** consume this context directly — use the hook instead.
 */

export const DrawerMenuRenderContext =
  createContext<DrawerMenuRenderContextType | null>(null);

/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
export function useDrawerMenuRenderContext() {
  const ctx = useContext(DrawerMenuRenderContext);

  if (!ctx)
    throw new Error('DrawerMenuRenderContext missing. Wrap with <DrawerMenuRenderContext>.');
  return ctx;
}
