import { useSyncExternalStore } from 'react';

/**
 * Flat map of node-id → open/closed boolean for the entire text drawer tree.
 *
 * @remarks
 * Every node (parent and leaf) has an entry so that `defaultOpen` overrides can
 * be seeded uniformly.  Leaf nodes retain their state in the store even though
 * they have no visible collapse effect — this keeps the API surface consistent
 * and allows future controlled-open scenarios without schema changes.
 */
export type TreeTextState = Record<string, boolean>;

/**
 * Minimal external store compatible with React's `useSyncExternalStore`.
 *
 * @remarks
 * Deliberately framework-agnostic — no React imports, no context coupling.
 * The store is created once per `TextDrawer` mount (via `useMemo`) and shared
 * downward through the `TextDrawer` context provider.
 *
 * @typeParam TreeTextState - Shape of the state slice managed by this store.
 */
export type TreeTextStore<TreeTextState> = {
  /** Returns the current state snapshot. */
  getState: () => TreeTextState;
  /**
   * Replaces the state or applies a functional update.
   * Skips notification if the new reference is identical to the current one.
   * Notifies all subscribers after every accepted update.
   */
  setState: (next: TreeTextState | ((prev: TreeTextState) => TreeTextState)) => void;
  /**
   * Registers a listener called after every state change.
   * @returns An unsubscribe function — call it to remove the listener.
   */
  subscribe: (listener: () => void) => () => void;
};

/**
 * Creates a new {@link TreeTextStore} initialised with `initialState`.
 *
 * @remarks
 * The store uses a `Set` of listeners for O(1) subscribe/unsubscribe.
 * Reference equality is checked in `setState` to avoid spurious re-renders
 * when the same state object is returned from a functional update.
 *
 * @param initialState - Seed state; typically produced by walking the tree and
 *   collecting each node's `defaultOpen` override.
 * @returns A fully wired store instance.
 *
 * @example
 * ```ts
 * const store = createTreeTextStore({ 'section-a': true, 'section-b': false });
 * ```
 */
export function createTreeTextStore(initialState: TreeTextState): TreeTextStore<TreeTextState> {
  let treeTextState = { ...initialState };
  let listeners = new Set<() => void>();

  return {
    getState: () => treeTextState,
    setState: (next: TreeTextState | ((prev: TreeTextState) => TreeTextState)) => {
      if (next === treeTextState) return;
      treeTextState = typeof next === 'function' ? next(treeTextState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

/**
 * React hook — subscribes to a single node's open/closed state.
 *
 * @remarks
 * Uses `useSyncExternalStore` for concurrent-safe granular subscriptions.
 * Each node only re-renders when its own boolean flips; sibling toggles are
 * invisible to it.  The server-side snapshot always returns `false` (collapsed).
 *
 * @param store - The shared store from `TextDrawer`.
 * @param nodeId - The node whose open state to observe.
 * @returns `true` when the node is open, `false` when closed or not found.
 */
export function useTreeTextOpen(store: TreeTextStore<TreeTextState>, nodeId: string): boolean {
  return useSyncExternalStore(
    store.subscribe,
    () => store.getState()[nodeId] ?? false,
    () => false,
  );
}

/**
 * Returns a stable setter that toggles a single node's open state in the store.
 *
 * @remarks
 * Curried so callers (typically `TextElement`) can create the setter once and
 * pass it down as a stable callback without re-creating it on every render.
 *
 * @param store - The shared store from `TextDrawer`.
 * @param nodeId - The node to mutate.
 * @returns A setter `(open: boolean) => void` that merges the new value into
 *   the existing state via a functional update.
 *
 * @example
 * ```ts
 * const onToggle = setTreeTextOpen(store, 'section-a');
 * onToggle(true);  // opens section-a
 * onToggle(false); // closes section-a
 * ```
 */
export function setTreeTextOpen(
  store: TreeTextStore<TreeTextState>,
  nodeId: string,
): (open: boolean) => void {
  return (open: boolean) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
