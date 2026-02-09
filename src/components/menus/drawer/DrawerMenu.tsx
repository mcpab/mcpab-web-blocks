'use client';

import { useMemo } from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuControllerContext } from '../MenuControllerContext';
import { MenuSelectorContext } from '../MenuSelectorContext';
import { createMenuStore, MenuState } from '../menuStore';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerMenu_Client, DrawerMenuClientProps } from './DrawerMenu_Client';
import { getSelectors, IsSelectedMenuElement } from './pathSelectors';

export type DrawerMenuPros = DrawerMenuClientProps & {
  selector?: IsSelectedMenuElement;
};

export function DrawerMenu({
  root: root,
  treeFromRoot: treeFromRoot,
  rootOverrides,
  anchor = 'left',
  indent = 0,
  selector,
}: DrawerMenuPros) {
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
