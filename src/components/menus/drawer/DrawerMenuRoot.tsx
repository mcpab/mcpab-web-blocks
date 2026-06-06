'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Fragment, useMemo, useState } from 'react';

import { DefaultLinkLike } from '../../../core/link';
import type { LinkTypeComponent } from '../../../core/link';
import type { DrawerMenuTree } from './DrawerMenuTreeTypes';
import { getDrawerMenuSelectors } from './DrawerMenuSelectors';
import { defaultRenderDrawerMenuNode } from './defaultDrawerMenuRegistry';
import type { RuntimeDrawerMenuTreeOverrides } from './defaultDrawerMenuRegistry';
import { MenuDepthContext } from '../tree/MenuDepthContext';
import { MenuSelectionContext } from '../tree/MenuSelectionContext';
import { DrawerMenuControllerContext } from './DrawerMenuControllerContext';
import { DrawerMenuRenderContext } from './DrawerMenuRenderContext';
import type { DrawerMenuRenderContextType } from './DrawerMenuRenderContext';
import { createDrawerMenuStore, getInitialDrawerMenuStoreState } from './drawerMenuStore';
import Drawer, { type DrawerProps } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export type DrawerMenuRootProps = {
  currentPath: string;
  menuTree: DrawerMenuTree;
  treeOverrides?: RuntimeDrawerMenuTreeOverrides;
  openIndicator?: React.ReactNode;
  closeIndicator?: React.ReactNode;
  basePadding?: number;
  LinkComponent?: LinkTypeComponent;
  anchor?: DrawerProps['anchor'];
};

export function DrawerMenuRoot({
  currentPath,
  menuTree,
  treeOverrides,
  closeIndicator = <ChevronRightIcon fontSize="small" />,
  openIndicator = <ExpandMoreIcon fontSize="small" />,
  basePadding = 2,
  LinkComponent = DefaultLinkLike,
  anchor,
}: DrawerMenuRootProps) {
  //

  // creating the selectors
  const selectors = useMemo(
    () => getDrawerMenuSelectors({ drawerMenuTree: menuTree, currentPath }),
    [menuTree, currentPath],
  );

  const initialDrawerMenuState = useMemo(
    () => getInitialDrawerMenuStoreState({ selectors }),
    [selectors],
  );

  const drawerMenuStore = useMemo(
    () => createDrawerMenuStore(initialDrawerMenuState),
    [initialDrawerMenuState],
  );

  const nodesRenderer = useMemo(
    () =>
      defaultRenderDrawerMenuNode({
        runtimeOverrides: treeOverrides,
      }),
    [treeOverrides],
  );

  const renderedContext = useMemo<DrawerMenuRenderContextType>(
    () => ({
      basePadding,
      closeIndicator,
      LinkComponent,
      openIndicator,
      nodesRenderer,
    }),
    [basePadding, closeIndicator, LinkComponent, nodesRenderer, openIndicator],
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (drawerState: boolean) => () => setOpenDrawer(drawerState);
  return (
    <Box>
      <MenuSelectionContext.Provider value={selectors}>
        <DrawerMenuRenderContext.Provider value={renderedContext}>
          <DrawerMenuControllerContext.Provider value={{ drawerMenuStore }}>
            <MenuDepthContext.Provider value={{ depth: 0 }}>
              <Drawer
                open={openDrawer}
                onClose={toggleDrawer(false)}
                anchor={anchor}
                slotProps={{
                  paper: {
                    sx: { minWidth: 240, pl: 1, pt: 2, overflowY: 'auto' },
                    elevation: 2,
                  },
                }}
              >
                <List dense disablePadding>
                  {menuTree.children.map((child) => {
                    return (
                      <Fragment key={child.id}>{nodesRenderer({ node: child }).rendered}</Fragment>
                    );
                  })}
                </List>
              </Drawer>
              <IconButton onClick={toggleDrawer(true)} aria-label="Open menu">
                <MenuIcon />
              </IconButton>
            </MenuDepthContext.Provider>
          </DrawerMenuControllerContext.Provider>
        </DrawerMenuRenderContext.Provider>
      </MenuSelectionContext.Provider>
    </Box>
  );
}

export default DrawerMenuRoot;
