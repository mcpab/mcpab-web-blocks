'use client';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { ElementLabel } from '../ElementLabel';
import { useMenuControllerContext, useMenuRenderContext } from '../MenuContext';
import { setOpen, useNodeOpen } from '../menuStore';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerElement } from './DrawerElement';

import { MenuDepthContext, useMenuDepthContext } from '../MenuDepthContext';
//
export type DrawerOpenCloseProps = {
  id: string;
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};
//
//
export function DrawerOpenClose({ id, node }: DrawerOpenCloseProps) {
  //
  //
  const menuElement = node.node;
  const children = node.children;

  if (!menuElement) return null;

  const { menuStore } = useMenuControllerContext();
  const { rowPolicy } = useMenuRenderContext();

  const isOpen = useNodeOpen(menuStore, id);

  const handleClick = () => {
    // simplest version:
    setOpen(menuStore, id)(!isOpen);
  };

  //
  const elementLabel = <ElementLabel node={node} />;
 
  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <DrawerElement id={childId} node={childBranch}  />
        </React.Fragment>
      ))
    : [];

  const { depth } = useMenuDepthContext();

  const { indicator, paddingInlineStart } = rowPolicy({ depth, node, isOpen });

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: paddingInlineStart }}>
        {elementLabel}
        {indicator}
      </ListItemButton>

      {children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List
            dense
            disablePadding
 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <MenuDepthContext.Provider value={{ depth: depth + 1 }}>
              {childrenComponents}
            </MenuDepthContext.Provider>
          </List>
        </Collapse>
      )}
    </>
  );
}
