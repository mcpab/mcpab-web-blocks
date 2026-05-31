import { useSyncExternalStore } from 'react';

import type { DrawerMenuSelectors } from './DrawerMenuSelectors';

export type DrawerMenuState = Record<string, boolean>;

export type DrawerMenuStore = {
  /** Returns the current state snapshot. */
  getState: () => DrawerMenuState;
  /** Replaces the state or applies a functional update. Notifies all subscribers. */
  setState: (next: DrawerMenuState | ((prev: DrawerMenuState) => DrawerMenuState)) => void;
  /** Subscribes a listener that is called on every state change. Returns an unsubscribe function. */
  subscribe: (listener: () => void) => () => void;
};

export function createDrawerMenuStore(initialState: DrawerMenuState): DrawerMenuStore {
  let drawerMenuState = { ...initialState };
  const listeners = new Set<() => void>();

  return {
    getState: () => drawerMenuState,
    setState: (next: DrawerMenuState | ((prev: DrawerMenuState) => DrawerMenuState)) => {
      if (next === drawerMenuState) return;
      drawerMenuState = typeof next === 'function' ? next(drawerMenuState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function getInitialDrawerMenuStoreState({
  selectors,
}: {
  selectors: DrawerMenuSelectors;
}): DrawerMenuState {
  const drawerMenuState: DrawerMenuState = {};

  for (const ancestorId of selectors.selectedPathIds) {
    drawerMenuState[ancestorId] = true;
  }

  return drawerMenuState;
}

export function useDrawerMenuNodeOpen(store: DrawerMenuStore, nodeId: string): boolean {
  return useSyncExternalStore(
    store.subscribe,
    () => store.getState()[nodeId] ?? false,
    () => false,
  );
}

export function setDrawerMenuNodeOpen(
  store: DrawerMenuStore,
  nodeId: string,
): (open: boolean) => void {
  return (open: boolean) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
