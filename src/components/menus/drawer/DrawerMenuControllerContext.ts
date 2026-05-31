import { createContext, useContext } from 'react';

import type { DrawerMenuStore } from './drawerMenuStore';

export type DrawerMenuControllerContextType = {
  drawerMenuStore: DrawerMenuStore;
};

export const DrawerMenuControllerContext =
  createContext<DrawerMenuControllerContextType | null>(null);

export function useDrawerMenuControllerContext() {
  const ctx = useContext(DrawerMenuControllerContext);

  if (!ctx) {
    throw new Error(
      'DrawerMenuControllerContext missing. Wrap with <DrawerMenuControllerContext.Provider>.',
    );
  }

  return ctx;
}
