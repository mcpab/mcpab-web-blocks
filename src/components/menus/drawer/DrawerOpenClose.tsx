'use client';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { ElementLabel } from '../ElementLabel';

import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerElement } from './DrawerElement';

import { MenuDepthContext } from '../MenuDepthContext';
import { RowPlan } from '../RowPolicyTypes';
//
export type DrawerOpenCloseProps = {
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
  rowPlan: RowPlan;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  depth: number;
};
//
//
export function DrawerOpenClose({
  children,
  rowPlan,
  isOpen,
  onToggle,
  depth,
}: DrawerOpenCloseProps) {
  //
  //
  const handleClick = () => {
    onToggle(!isOpen);
  };

  const { indicator, paddingInlineStart, indicatorPlacement, typographyProps, icon, text } =
    rowPlan;

  //
  const elementLabel = <ElementLabel typographyProps={typographyProps} icon={icon} text={text} />;

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
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

  const elementWithIndicator =
    indicatorPlacement === 'start' ? (
      <>
        {indicator}
        {elementLabel}
      </>
    ) : (
      <>
        {elementLabel}
        {indicator}
      </>
    );
  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: paddingInlineStart }}>
        {elementWithIndicator}
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
