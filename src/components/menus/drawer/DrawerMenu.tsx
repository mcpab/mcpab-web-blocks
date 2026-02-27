'use client';

import { useMemo } from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuControllerContext } from '../MenuControllerContext';
import { MenuSelectorContext } from '../MenuSelectorContext';
import { createMenuStore, MenuState } from '../menuStore';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerMenu_Client } from './DrawerMenu_Client';
import { getSelectors, IsSelectedMenuElement } from './pathSelectors';
import { DrawerMenuPropsRendering } from './DrawerMenuTypes';

/** Props for the public {@link DrawerMenu} component. */
export type DrawerMenuProps = DrawerMenuPropsRendering & {
  /**
   * Callback that identifies the currently active menu item (e.g. the current page).
   * If omitted, no item is selected and all ancestor highlighting is disabled.
   */
  selector?: IsSelectedMenuElement;
};

/**
 * Top-level entry point for the collapsible sidebar (drawer) navigation.
 *
 * Orchestrates three React contexts before rendering the interactive client component:
 * - **MenuSelectorContext** — derives `isSelected` / `isAncestorSelected` from the `selector` callback.
 * - **MenuControllerContext** — a Zustand store tracking which nodes are expanded,
 *   pre-opened along the path to the selected item.
 *
 * Renders a hamburger `IconButton` that opens a MUI `Drawer` containing the menu tree.
 * Each top-level item shows an icon resolved by name via `IconPicker`.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
 * if (result.ok) {
 *   return (
 *     <DrawerMenu
 *       {...result}
 *       anchor="left"
 *       indent={2}
 *       selector={(id) => id === currentPageId}
 *     />
 *   );
 * }
 * ```
 *
 * @see {@link hierarchyToDrawerInput} to build the required props from a hierarchy definition.
 * @see {@link defaultDrawerRowPolicy} for the default row styling policy.
 */
export function DrawerMenu({
  root: root,
  treeFromRoot: treeFromRoot,
  rootOverrides,
  anchor = 'left',
  indent = 0,
  drawerPaperSx,
  listSx,
  triggerButtonSx,
  selector,
}: DrawerMenuProps) {
  //

  const selectors = useMemo(
    () =>
      getSelectors({
        treeFromRoot,
        selector: selector,
      }),
    [treeFromRoot, selector],
  );

  const menuStore = useMemo(() => {
    const initialStoreState: MenuState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState, selectors.selectedPathIds);
    initialStoreState['root'] = false;
    return createMenuStore(initialStoreState);
  }, [treeFromRoot]);

  return (
    <MenuSelectorContext.Provider value={selectors}>
      <MenuControllerContext.Provider value={{ menuStore }}>
        <DrawerMenu_Client
          root={root}
          treeFromRoot={treeFromRoot}
          rootOverrides={rootOverrides}
          anchor={anchor}
          indent={indent}
          drawerPaperSx={drawerPaperSx}
          listSx={listSx}
          triggerButtonSx={triggerButtonSx}
        />
      </MenuControllerContext.Provider>
    </MenuSelectorContext.Provider>
  );
}

function populateInitialStoreState(
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>,
  store: Record<string, boolean>,
  selectedIs: Set<string>,
) {
  //
  if (node.children) {
    for (const key in node.children) {
      store[key] = false;
      if (selectedIs.has(key)) {
        store[key] = true;
      }
      populateInitialStoreState(node.children[key], store, selectedIs);
    }
  }
}
