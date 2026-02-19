import Popover from '@mui/material/Popover';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuDepthContext, useMenuDepthContext } from '../MenuDepthContext';
import { useMenuRenderContext } from '../MenuRenderContext';
import { useMenuSelectorContext } from '../MenuSelectorContext';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DropDownMegaMenu } from './DropDownMegaMenu';
import { ElementButton } from '../ElementButton';

/** @internal Props for {@link DropDownOpenClose}. */
type DropDownOpenCloseProps = {
  id: string;
  menuTreeElement: MenuTreeElement | null;
  overrides: MenuTreeElementUI | undefined;
  /** Direct children of this nav item — each becomes a column in the mega menu. */
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>>;
};

/**
 * Renders a top-level nav item that controls the open/close state of a mega menu `Popover`.
 *
 * Displays an {@link ElementButton} as the trigger (with a down-chevron indicator).
 * On click, opens a MUI `Popover` anchored below the button, containing a
 * {@link DropDownMegaMenu} rendered at depth 1.
 *
 * Open state is local (`useState`) — each top-level item independently controls its panel.
 * The `isOpen` value is passed to {@link RowPolicy} so policies can react to open/closed state.
 *
 * @internal Used by {@link DropDownElement} when a node has children.
 */
export function DropDownOpenClose({
  id,
  menuTreeElement,
  overrides,
  children,
}: DropDownOpenCloseProps) {
  //

  if (!menuTreeElement) return null;

  const { depth } = useMenuDepthContext();
  if (depth !== 0) {
    console.warn('DropDownOpenClose should only be used at depth 0. Current depth:', depth);
    return null;
  }

  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const hasChildren = children !== undefined && Object.keys(children).length > 0;

  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { rowPolicy } = useMenuRenderContext();

  const rowPlan = rowPolicy({
    depth,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren,
  });

  const { indicator } = rowPlan;

  const localOverrides: MenuTreeElementUI = {
    ...overrides,
    onClick: handleClick,
  };

  return (
    <>
      <ElementButton overrides={localOverrides} rowPlan={rowPlan} indicator={indicator} />

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuDepthContext.Provider value={{ depth: 1 }}>
          <DropDownMegaMenu children={children} />
        </MenuDepthContext.Provider>
      </Popover>
    </>
  );
}
