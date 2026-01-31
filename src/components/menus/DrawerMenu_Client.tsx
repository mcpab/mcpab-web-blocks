'use client';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from 'node_modules/@mui/system/esm/Box/Box';
import { useMemo, useState } from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { LinkTypeComponent } from 'src/core/link';
import { DefaultLinkLike } from 'src/core/link/link-types';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from './DrawerMenu';
import { DrawerOpenClose } from './DrawerOpenClose';
import MenuContext from './MenuContext';
import { createMenuStore, MenuState } from './menuStore';
///
type DrawerMenuClientProps = {
  root: RootTreeElement;
  treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  rootOverrides?: RootOverridesUI;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  indent?: number;
};

export type Indent = {
  depth: number;
  indentValue: number;
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
  const initialIndent: Indent = { depth: 0, indentValue: indent };
  
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

  return (
    <MenuContext.Provider value={{ menuStore, linkLikeComp }}>
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
        > <List
            dense
            disablePadding
            component="nav"
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
          <DrawerOpenClose
            id="root"
            menuElement={treeFromRoot.node}
            children={treeFromRoot.children}
            indent={initialIndent}
          />
          </List>
        </Drawer>

        <IconButton onClick={toggleDrawer(true)} aria-label="Open menu">
          <MenuIcon />
        </IconButton>
      </Box>
    </MenuContext.Provider>
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
