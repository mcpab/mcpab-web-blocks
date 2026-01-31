import { useSyncExternalStore } from 'react';

// the state of a store is simply a record of string and a boolean, indicating whether a menu node is open or closed
export type MenuState = Record<string, boolean>;

// the menu store interface, defining methods to get and set state, and to subscribe to state changes
export type MenuStore<MenuState> = {
  getState: () => MenuState;
  setState: (next: MenuState | ((prev: MenuState) => MenuState)) => void;
  subscribe: (listener: () => void) => () => void;
};

// this is the factory of stores, creating a new store with the given initial state
export function createMenuStore(initialState: MenuState): MenuStore<MenuState> {
  //
  let menusState = { ...initialState };

  let listeners = new Set<() => void>();

  return {
    getState: () => {
      return menusState;
    },
    setState: (next: MenuState | ((prev: MenuState) => MenuState)) => {
      //
      if (next === menusState) {
        return;
      }
      if (typeof next === 'function') {
        menusState = next(menusState);
      } else {
        menusState = next;
      }
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    //
  };
}

// this function is a hook to use the open state of a specific menu node from the store
// the way to use it is to pass the store and the node id, and it will return the open state of that node
export function useNodeOpen(store: MenuStore<MenuState>, nodeId: string): boolean {
  return useSyncExternalStore(
    store.subscribe,
    () => {
      return store.getState()[nodeId] ?? false;
    },
    () => {
      return false;
    },
  );
}

// this function returns a setter function to set the open state of a specific menu node in the store
// the way to use it is to pass the store and the node id, and it will return a function that takes a boolean to set the open state
export function setOpen(store: MenuStore<MenuState>, nodeId: string): (open: boolean) => void {
  return (open: boolean) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
