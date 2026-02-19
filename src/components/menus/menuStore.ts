import { useSyncExternalStore } from 'react';

/**
 * State shape for a menu store: a map of node id → open/closed boolean.
 * Only nodes that have been explicitly toggled appear in the map;
 * absent nodes default to `false` (closed).
 */
export type MenuState = Record<string, boolean>;

/**
 * Minimal observable store for menu open/close state.
 *
 * Compatible with React's `useSyncExternalStore`. Supports both direct
 * state replacement and functional updates to avoid stale closures.
 *
 * @see {@link createMenuStore} to create an instance.
 * @see {@link useNodeOpen} / {@link setOpen} for component-level helpers.
 */
export type MenuStore<MenuState> = {
  /** Returns the current state snapshot. */
  getState: () => MenuState;
  /** Replaces the state or applies a functional update. Notifies all subscribers. */
  setState: (next: MenuState | ((prev: MenuState) => MenuState)) => void;
  /** Subscribes a listener that is called on every state change. Returns an unsubscribe function. */
  subscribe: (listener: () => void) => () => void;
};

/**
 * Creates a new {@link MenuStore} with the given initial state.
 *
 * @example
 * ```ts
 * const store = createMenuStore({});
 * ```
 */
export function createMenuStore(initialState: MenuState): MenuStore<MenuState> {
  let menusState = { ...initialState };
  let listeners = new Set<() => void>();

  return {
    getState: () => menusState,
    setState: (next: MenuState | ((prev: MenuState) => MenuState)) => {
      if (next === menusState) return;
      menusState = typeof next === 'function' ? next(menusState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

/**
 * React hook that subscribes to the open/closed state of a single node.
 *
 * Returns `false` for nodes that have never been explicitly toggled.
 * Safe for server rendering (snapshot always returns `false`).
 *
 * @param store - The store created by {@link createMenuStore}.
 * @param nodeId - The node whose open state to read.
 */
export function useNodeOpen(store: MenuStore<MenuState>, nodeId: string): boolean {
  return useSyncExternalStore(
    store.subscribe,
    () => store.getState()[nodeId] ?? false,
    () => false,
  );
}

/**
 * Returns a stable setter that toggles the open state of a single node.
 *
 * @param store - The store created by {@link createMenuStore}.
 * @param nodeId - The node whose open state to update.
 * @returns A function `(open: boolean) => void` to call on toggle events.
 */
export function setOpen(store: MenuStore<MenuState>, nodeId: string): (open: boolean) => void {
  return (open: boolean) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
