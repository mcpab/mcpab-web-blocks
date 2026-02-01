'use client';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from 'node_modules/@mui/system/esm/Box/Box';
import React, { useMemo, useState } from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { LinkTypeComponent } from 'src/core/link';
import { DefaultLinkLike } from 'src/core/link/link-types';
import { MenuControllerContext, MenuRenderContext, MenuRenderContextType } from '../MenuContext';
import { createMenuStore, MenuState } from '../menuStore';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from '../MenuTypes';
import { DrawerOpenClose } from './DrawerOpenClose';

import { MenuDepthContext } from '../MenuDepthContext';
import { defaultDrawerRowPolicy } from './defaultDrawerRowPolicy';
import { DrawerElement } from './DrawerElement';
///
type DrawerMenuClientProps = {
  root: RootTreeElement;
  treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  rootOverrides?: RootOverridesUI;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  indent?: number;
};

export function DrawerMenu_Client({
  root: root,
  treeFromRoot: treeFromRoot,
  rootOverrides,
  anchor = 'left',
  indent = 0,
}: DrawerMenuClientProps) {
  //
  //

  const linkLikeComp: LinkTypeComponent = rootOverrides?.linkComponent ?? DefaultLinkLike;

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (drawerState: boolean) => () => setOpenDrawer(drawerState);

  const rootLabel = root.label || 'Menu';

  treeFromRoot.node = {
    label: rootLabel,
  };

  const menuStore = useMemo(() => {
    const initialStoreState: MenuState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState);
    initialStoreState['root'] = false;
    return createMenuStore(initialStoreState);
  }, [treeFromRoot]);

  const renderContext: MenuRenderContextType = {
    linkLikeComp: linkLikeComp,
    rowPolicy: defaultDrawerRowPolicy({
      baseIndent: indent,
      openIndicator: <ExpandLess />,
      closeIndicator: <ExpandMore />,
    }),
  };

  const childrenComponents = treeFromRoot.children
    ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <DrawerElement id={childId} node={childBranch} />
        </React.Fragment>
      ))
    : [];

  return (
    <MenuControllerContext.Provider value={{ menuStore }}>
      <MenuRenderContext.Provider value={renderContext}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh" width="100%">
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
            <List
              dense
              disablePadding
              component="nav"
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              <MenuDepthContext.Provider value={{ depth: 0 }}>
                {childrenComponents}
              </MenuDepthContext.Provider>
            </List>
          </Drawer>

          <IconButton onClick={toggleDrawer(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </Box>
      </MenuRenderContext.Provider>
    </MenuControllerContext.Provider>
  );
}

function populateInitialStoreState(
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>,
  store: Record<string, boolean>,
) {
  //
  if (node.children) {
    for (const key in node.children) {
      store[key] = false;
      populateInitialStoreState(node.children[key], store);
    }
  }
}
