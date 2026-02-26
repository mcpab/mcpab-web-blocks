'use client';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { LinkTypeComponent } from 'src/core/link';
import { DefaultLinkLike } from 'src/core/link/link-types';
import { useMenuControllerContext } from '../MenuControllerContext';
import { MenuDepthContext } from '../MenuDepthContext';
import { MenuRenderContext, MenuRenderContextType } from '../MenuRenderContext';
import { useMenuSelectorContext } from '../MenuSelectorContext';
import { setOpen } from '../menuStore';
import { defaultDrawerRowPolicy } from './defaultDrawerRowPolicy';
import { DrawerElement } from './DrawerElement';
import { DrawerMenuPropsRendering } from './DrawerMenuTypes';

///

export function DrawerMenu_Client({
  root: root,
  treeFromRoot: treeFromRoot,
  rootOverrides,
  anchor = 'left',
  indent = 0,
}: DrawerMenuPropsRendering) {
  //
  //
  // console.log('DrawerMenu_Client root:', root);
  // console.log('DrawerMenu_Client treeFromRoot:', treeFromRoot);
  //
  const linkLikeComp: LinkTypeComponent = rootOverrides?.linkComponent ?? DefaultLinkLike;

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (drawerState: boolean) => () => setOpenDrawer(drawerState);

  const rootLabel = root.label || 'Menu';

  treeFromRoot.node = {
    label: rootLabel,
  };

  const renderContext: MenuRenderContextType = {
    linkLikeComp: linkLikeComp,
    rowPolicy: defaultDrawerRowPolicy({
      baseIndent: indent,
      openIndicator: <ExpandLess />,
      closeIndicator: <ExpandMore />,
    }),
  };

  const selectors = useMenuSelectorContext();
  const menuController = useMenuControllerContext();
  const selectedPathIds = selectors.selectedPathIds;
  const selectId = selectors.selectedId;
  const menuStore = menuController.menuStore;

  useEffect(() => {
    for (const selectedId of selectedPathIds) {
      if (selectedId !== selectId) setOpen(menuStore, selectedId)(true);
    }
  }, [selectId, menuStore]);

  const childrenComponents = treeFromRoot.children
    ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <DrawerElement
            id={childId}
            menuTreeElement={childBranch.node}
            overrides={childBranch.overrides}
            children={childBranch.children}
          />
        </React.Fragment>
      ))
    : [];

  return (
    <MenuRenderContext.Provider value={renderContext}>
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
    </MenuRenderContext.Provider>
  );
}
