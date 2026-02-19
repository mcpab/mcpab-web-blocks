import Grid from '@mui/material/Grid';
import React from 'react';
import List from '@mui/material/List';
import { StratifyPayload } from '../../../core/hierarchy/D3StratifyTypes';
import { ElementLabel } from '../ElementLabel';
import { MenuDepthContext, useMenuDepthContext } from '../MenuDepthContext';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { useRowPlan } from '../useRowPlan';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ElementButton } from '../ElementButton';
import { useMenuRenderContext } from '../MenuRenderContext';
import { LinkTypeComponent } from 'src/core/link';
import { standardMegaMenuPolicy } from './defaultMegaMenuPolicy';

/** @internal Props for {@link DropDownMegaMenu}. */
export type DropDownMegaMenuProps = {
  /** The direct children of the top-level nav item, each becoming a column. */
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>>;
};

/**
 * Renders the mega menu panel content inside the MUI `Popover` opened by {@link DropDownOpenClose}.
 *
 * Lays out its children as a horizontal row of {@link ColumnElement}s, with optional
 * vertical `Divider`s between columns. Layout and spacing are controlled by {@link MegaMenuPolicy}
 * read from {@link MenuRenderContext}.
 *
 * Must be rendered at depth 1 (set by {@link DropDownOpenClose} via {@link MenuDepthContext}).
 *
 * @internal
 */
export function DropDownMegaMenu({ children }: DropDownMegaMenuProps) {
  //
  const { depth } = useMenuDepthContext();
  const { linkLikeComp, megaMenuPolicy = standardMegaMenuPolicy } = useMenuRenderContext();
  const { showColumnDividers, outerPadding } = megaMenuPolicy;

  if (depth !== 1) {
    console.warn('DropDownMegaMenu should only be used at depth 1. Current depth:', depth);
    return null;
  }

  const entries = Object.entries(children);
  const childrenComponents = entries.map(([childId, childBranch], index) => (
    <React.Fragment key={childId}>
      <ColumnElement
        id={childId}
        node={childBranch.node}
        children={childBranch.children}
        overrides={childBranch.overrides}
        linkLikeComp={linkLikeComp}
      />
      {showColumnDividers && index < entries.length - 1 && (
        <Divider orientation="vertical" flexItem />
      )}
    </React.Fragment>
  ));

  return (
    <Box padding={outerPadding}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        {childrenComponents}
      </Box>
    </Box>
  );
}

/** @internal */
export type ColumnElementProps = {
  id: string;
  linkLikeComp: LinkTypeComponent;
  node: MenuTreeElement | null;
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
  overrides: MenuTreeElementUI | undefined;
};

/**
 * Renders a single column (or nested item) within the mega menu panel.
 *
 * Branches on depth read from {@link MenuDepthContext}:
 * - **depth 1** — column header: wrapped in `Box + List` with configurable `minWidth`,
 *   optional horizontal `Divider` below the header, children rendered below inside a
 *   `MenuDepthContext.Provider`.
 * - **depth 2+** — flat list item: renders `ElementButton` followed by any children
 *   at the next depth level. Supports arbitrary nesting with `paddingInlineStart` indentation.
 *
 * @internal Rendered recursively by {@link DropDownMegaMenu} and itself.
 */
function ColumnElement({ id, node, children, overrides, linkLikeComp }: ColumnElementProps) {
  //
  if (!node) return null;

  const { rowPlan, depth } = useRowPlan({ id, node, children, overrides });
  const { megaMenuPolicy = standardMegaMenuPolicy } = useMenuRenderContext();
  const { showItemDivider, columnMinWidth } = megaMenuPolicy;

  const elementLabel = (
    <ElementButton
      link={node.link}
      overrides={overrides}
      rowPlan={rowPlan}
      linkComponent={linkLikeComp}
    />
  );

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <ColumnElement
            id={childId}
            node={childBranch.node}
            children={childBranch.children}
            overrides={childBranch.overrides}
            linkLikeComp={linkLikeComp}
          />
        </React.Fragment>
      ))
    : [];

  if (depth === 1) {
    return (
      <Box padding={2} sx={{ minWidth: columnMinWidth }}>
        <List>
          {elementLabel}
          {showItemDivider && <Divider />}
          <MenuDepthContext.Provider value={{ depth: depth + 1 }}>
            {childrenComponents}
          </MenuDepthContext.Provider>
        </List>
      </Box>
    );
  } else {
    return (
      <>
        {elementLabel}
        <MenuDepthContext.Provider value={{ depth: depth + 1 }}>
          {childrenComponents}
        </MenuDepthContext.Provider>
      </>
    );
  }
}
