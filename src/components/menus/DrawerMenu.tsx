'use client';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {
  HierarchyRelations,
  HierarchyRelationsOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { resolver } from 'src/core/hierarchy/resolver';
import { LinkTypeComponent } from 'src/core/link';
import { capitalizeWords } from 'src/lib/utils';

import { RenderNode, RenderRootNode } from 'src/core/hierarchyRendering/HierarchyElementType';
import IconPicker from '../../lib/icon/IconPicker';
import { stratify } from 'd3-hierarchy';
import { R } from 'node_modules/@mcpab/gridcss/dist/mui-Dn7Eo95z';

export type MenuTreeElement = {
  label: string;
  link?: string;
};

export type RootTreeElement = {
  label: 'Menu';
};

export type MenuTreeElementUI = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: boolean;
  divider?: boolean;
};

type RootOverridesUI = {
  linkComponent: LinkTypeComponent;
  rootPath?: string;
};

type DrawerMenuProps<
  P extends PayloadMap<MenuTreeElement, RootTreeElement>,
  H extends HierarchyRelations<P>,
  HR extends HierarchyRelationsOverrides<H, MenuTreeElementUI, RootOverridesUI>,
> = {
  hierarchy: H;
  overrides: HR;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
};

export function DrawerMenu<
  P extends PayloadMap<MenuTreeElement, RootTreeElement>,
  H extends HierarchyRelations<P>,
  HR extends HierarchyRelationsOverrides<H, MenuTreeElementUI, RootOverridesUI>,
>({ hierarchy, overrides, anchor = 'left' }: DrawerMenuProps<P, H, HR>) {
  //
  // checking the integrity of the hierarchy
  const resolverReturn = resolver<H>(hierarchy);
  //
  if (!resolverReturn.ok) {
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return <div>Hierarchy issues detected. Check console for details.</div>;
  }

  //
  // the link like component from root
  const linkLikeComponent = overrides.root.payload.linkComponent;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (drawerState: boolean) => () => {
    setOpenDrawer(drawerState);
  };

  const menusElements = initializeMenus();

  const initialStoreState: Record<string, boolean> = {};

  // transforming the hierarchy into menu elements
  for (const nodeId in hierarchy) {
    const node = hierarchy[nodeId];
  }

  return (
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
        >
          <SingleElement element={props.elements} />
        </List>
      </Drawer>
      <MenuIcon onClick={toggleDrawer(true)} />
    </Box>
  );

  function initializeMenus() {
    //
    return {
      root: {
        key: 'root-menu',
        Component: Box,
        props: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
        },
        //children elements
        children: {
          drawer: {
            key: 'drawer-menu',
            Component: Drawer,
            props: {
              open: openDrawer,
              onClose: toggleDrawer(false),
              anchor: anchor,
              slotProps: {
                paper: {
                  sx: { minWidth: 240, pl: 1, pt: 2, overflowY: 'scroll' }, // style the Paper
                  elevation: 2, // Paper prop
                },
              },
            },
          } satisfies RenderNode,
          menuIcon: {
            key: 'menu-icon',
            Component: MenuIcon,
            props: {
              onClick: toggleDrawer(true),
            },
          } satisfies RenderNode,
        },
      },
    } satisfies RenderRootNode<any>;
  }
}



type MenuTreeElementType = {
  menuTreeElement: MenuTreeElement;
  id: string;
  ui?: MenuTreeElementUI;
  kind: 'item';
};

type RootElementType = {
  rootTreeElement: RootTreeElement;
  id: string;
  rootUi?: RootOverridesUI;
  kind: 'root';
};
type D3StratifyData<NodePayload = MenuTreeElementType | RootElementType> = {
  id: string;
  parentId: string | null;
  payload: NodePayload;
};

function convertToTree<
  P extends PayloadMap<MenuTreeElement, RootTreeElement>,
  H extends HierarchyRelations<P>,
  HR extends HierarchyRelationsOverrides<H, MenuTreeElementUI, RootOverridesUI>,
>(hierarchy: H, overrides: HR) {
  //
  const data: D3StratifyData[] = [];

  const rootElement: RootTreeElement = hierarchy['root'].payload;
  const rootOverride: RootOverridesUI = overrides['root'].payload;

  data.push({
    id: 'root',
    parentId: null,
    payload: {
      rootTreeElement: rootElement,
      rootUi: rootOverride,
      id: 'root',
      kind: 'root',
    } satisfies RootElementType,
  });

  for (const key in hierarchy) {
    //
    if (key === 'root') continue;
    //
    let payload: MenuTreeElementType = {
      menuTreeElement: hierarchy[key].payload,
      id: key,
      kind: 'item',
    } ;

    const k = key as Exclude<Extract<keyof H, string>, 'root'>;
let hj = overrides[k];

    if (key in overrides) {
      const oveR = overrides[key];
      if (oveR !== undefined) {
        payload['ui'] = oveR.payload;
      }
    }
    data.push({
      id: key,
      parentId: hierarchy[key].parent,
      payload: payload,
    });
  }
try { what is d3 emitting as error?
  const root = stratify()(data);
}
