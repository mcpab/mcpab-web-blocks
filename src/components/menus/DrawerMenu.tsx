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
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { resolver } from 'src/core/hierarchy/resolver';
import { LinkTypeComponent } from 'src/core/link';
import { capitalizeWords } from 'src/lib/utils';

import { RenderNode, RenderRootNode } from 'src/core/hierarchyRendering/HierarchyElementType';
import IconPicker from '../../lib/icon/IconPicker';
import { HierarchyNode } from 'd3-hierarchy';

import { DefaultLinkLike } from 'src/core/link/link-types';
import { HIERARCHY_ERROR_CODE, HierarchyIssue } from 'src/core/hierarchy/hierarchyErrorShape';
import { convertToTree } from './convertToTree';

export type MenuTreeElement = {
  label: string;
  link?: string;
  order?: number;
};

export type RootTreeElement = {
  label: 'Menu';
};

export type MenuTreeElementUI = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: boolean;
  divider?: boolean;
};

export type RootOverridesUI = {
  linkComponent: LinkTypeComponent;
  rootPath?: string;
};

type DrawerMenuProps<
  P extends PayloadMap<MenuTreeElement>,
  H extends HierarchyTree<P, RootTreeElement>,
  HR extends HierarchyTreeOverrides<P, H, RootOverridesUI, MenuTreeElementUI>,
> = {
  hierarchy: H;
  overrides: HR;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
};

export function DrawerMenu<
  P extends PayloadMap<MenuTreeElement>,
  H extends HierarchyTree<P, RootTreeElement>,
  HR extends HierarchyTreeOverrides<P, H, RootOverridesUI, MenuTreeElementUI>,
>({ hierarchy, overrides, anchor = 'left' }: DrawerMenuProps<P, H, HR>) {
  //
  // checking the integrity of the hierarchy
  const resolverReturn = resolver<H>(hierarchy);
  //
  if (!resolverReturn.ok) {
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return <div>Hierarchy issues detected. Check console for details.</div>;
  }
  let issues: HierarchyIssue[] = [];

  // getting the tree structure from the hierarchy
  const root = convertToTree<P, H, HR>(hierarchy, overrides, issues);

  if (root === null) {
    console.error('Failed to convert hierarchy to tree:', issues);
    return <div>Failed to convert hierarchy to tree. Check console for details.</div>;
  }


  type MenuTreeNode = {
    element: MenuTreeElementType;
    children?: Record<string, MenuTreeNode>;
  };

  const menuTree: Record<string, MenuTreeNode> = {};

  const buildMenuTree = (node: HierarchyNode<MenuTreeElementType>) => {
    //
    // getting the payload which is of type MenuTreeElementType
    const payload: MenuTreeElementType = node.data;

    // getting the id of the node
    const id = node.id;

    if (id === undefined) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Node with undefined id found.`,
      });
      return;
    }

    const element: MenuTreeNode = {
      element: payload,
    };

    // if the node has children, initialize the children object
    if (node.children !== undefined) {
      element.children = {};
    }

    // getting the parent node
    const parent = node.parent;

    // if there is no parent,   this is the root node
    if (parent === null) {
      menuTree[id] = element;
      return;
    }

    const parentId = parent.id;

    if (parentId === undefined) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Parent node with undefined id found.`,
      });
      return;
    }
    if (!(parentId in menuTree)) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Parent node with id ${parentId} not found in menu tree.`,
      });
      return;
    }
    if (menuTree[parentId].children === undefined) {
      menuTree[parentId].children = {};
    }
    menuTree[parentId].children[id] = element;
  };

  //
  // the link like component from root
  //
  const linkLikeComp: LinkTypeComponent = overrides.root?.payload.linkComponent ?? DefaultLinkLike;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (drawerState: boolean) => () => {
    setOpenDrawer(drawerState);
  };

  const initialStoreState: Record<string, boolean> = {};

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
        ></List>
      </Drawer>
      <MenuIcon onClick={toggleDrawer(true)} />
    </Box>
  );
}

 