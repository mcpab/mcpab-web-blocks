import { StratifyPayload } from 'src/core/hierarchy/convertToD3Stratify';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI } from './DrawerMenu';
import Box from 'node_modules/@mui/system/esm/Box/Box';
import { Drawer, List, ListSubheader } from '@mui/material';
import { useState } from 'react';
import { LinkTypeComponent } from 'src/core/link';
import { DefaultLinkLike } from 'src/core/link/link-types';
import MenuIcon from '@mui/icons-material/Menu';
import { createMenuStore, MenuState } from './menuStore';
type DrawerMenuClientProps = {
  root: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  rootOverrides?: RootOverridesUI;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
};
import MenuContext from './MenuContext';

export function DrawerMenu_Client({ root, rootOverrides, anchor = 'left' }: DrawerMenuClientProps) {
  //
  // the link like component from root
  //
  const linkLikeComp: LinkTypeComponent = rootOverrides?.linkComponent ?? DefaultLinkLike;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (drawerState: boolean) => () => {
    setOpenDrawer(drawerState);
  };

  const initialStoreState: MenuState = {};
  //
  populateInitialStoreState(root, initialStoreState);

  const menuStore = createMenuStore(initialStoreState);

  return (
    <MenuContext.Provider value={menuStore}>
      <Box display={'flex'} alignItems="center" justifyContent="center" height="100vh" width="100%">
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer(false)}
          anchor={anchor}
          slotProps={{
            paper: {
              sx: { minWidth: 240, pl: 1, pt: 2, overflowY: 'scroll' }, // style the Paper
              elevation: 2, // Paper prop
            },
          }}
        >
          <List
            dense
            disablePadding
            component="nav"
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Menu
              </ListSubheader>
            }
          ></List>
        </Drawer>
        <MenuIcon onClick={toggleDrawer(true)} />
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
