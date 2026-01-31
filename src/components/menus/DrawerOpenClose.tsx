'use client';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { DrawerElement } from './DrawerElement';
import { MenuTreeElement, MenuTreeElementUI } from './DrawerMenu';
import { ElementLabel } from './ElementLabel';
import { useMenuContext } from './MenuContext';
import { setOpen, useNodeOpen } from './menuStore';
import { Indent } from './DrawerMenu_Client';
//
export type DrawerOpenCloseProps = {
  id: string;
  menuElement: MenuTreeElement;
  overrides?: MenuTreeElementUI;
  children?: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>>;
  indent: Indent;
};
//
//
export function DrawerOpenClose({
  id,
  menuElement,
  children,
  overrides,
  indent,
}: DrawerOpenCloseProps) {
  //
  const { menuStore } = useMenuContext();

  const isOpen = useNodeOpen(menuStore, id);

  const handleClick = () => {
    // simplest version:
    setOpen(menuStore, id)(!isOpen);
    // better version if you add toggleOpen(menuStore, id):
    // toggleOpen(menuStore, id);
  };

  const localOverrides: MenuTreeElementUI = { ...overrides, fontWeight: 'bold' };
  //
  const elementLabel = <ElementLabel menuElement={menuElement} overrides={localOverrides} />;

  const nextIndent = { depth: indent.depth + 1, indentValue: indent.indentValue };

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <DrawerElement id={childId} branch={childBranch} indent={nextIndent} />
        </React.Fragment>
      ))
    : [];

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: indent.indentValue * indent.depth }}>
        {elementLabel}
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List
            dense
            disablePadding
            component="nav"
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {childrenComponents}
          </List>
        </Collapse>
      )}
    </>
  );
}
