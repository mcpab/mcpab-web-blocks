'use client';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';

import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerElement } from './DrawerElement';

import { MenuDepthContext } from '../MenuDepthContext';
import { RowPlan } from '../RowPolicyTypes';

import React from 'react';
import { ElementButton } from '../ElementButton';
//
/** @internal Props for {@link DrawerOpenClose}. */
export type DrawerOpenCloseProps = {
  /** Child branches to render inside the collapse panel. */
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
  /** Visual plan produced by the active {@link RowPolicy} for this node. */
  rowPlan: RowPlan;
  /** Whether the collapse panel is currently open. Managed by the Zustand menu store. */
  isOpen: boolean;
  /** Callback to toggle the open state. */
  onToggle: (open: boolean) => void;
  /** Current depth in the tree, used to set the next {@link MenuDepthContext} value. */
  depth: number;
};

/**
 * Renders a collapsible parent node in the drawer menu.
 *
 * Displays an {@link ElementButton} as the toggle trigger (with expand/collapse indicator),
 * then wraps child {@link DrawerElement}s in a MUI `Collapse` panel.
 * Increments {@link MenuDepthContext} for children so depth-based styling applies correctly.
 *
 * @internal Used by {@link DrawerElement} when a node has children.
 */
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

  const { indicator } = rowPlan;

  const localOverrides: MenuTreeElementUI = {
    onClick: handleClick,
  };

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

  return (
    <>
      <ElementButton overrides={localOverrides} rowPlan={rowPlan} indicator={indicator} />

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
