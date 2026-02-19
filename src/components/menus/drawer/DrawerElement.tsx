'use client';

import Divider from '@mui/material/Divider';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerOpenClose } from './DrawerOpenClose';
import { ElementButton } from '../ElementButton';
import { useMenuControllerContext } from '../MenuControllerContext';
import { useMenuRenderContext } from '../MenuRenderContext';
import { useMenuDepthContext } from '../MenuDepthContext';
import { setOpen, useNodeOpen } from '../menuStore';
import { useMenuSelectorContext } from '../MenuSelectorContext';

/** @internal */
type DrawerElementProps = {
  id: string;
  menuTreeElement: MenuTreeElement | null;
  overrides: MenuTreeElementUI | undefined;
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
};

/**
 * Renders a single node in the drawer menu tree.
 *
 * Decides between two render paths based on whether the node has children:
 * - **Parent node** → {@link DrawerOpenClose}: expand/collapse via Zustand store + MUI `Collapse`.
 * - **Leaf node** → {@link ElementButton}: a link or plain list item.
 *
 * Reads open/close state from {@link MenuControllerContext}, selection state from
 * {@link MenuSelectorContext}, and calls the active {@link RowPolicy} to compute visual properties.
 *
 * @internal Rendered recursively inside {@link DrawerOpenClose}.
 */
export function DrawerElement({ id, menuTreeElement, overrides, children }: DrawerElementProps) {
  ///

  if (!menuTreeElement) return null;

  const { menuStore } = useMenuControllerContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();

  const isOpen = useNodeOpen(menuStore, id);
  const onToggle = (open: boolean) => setOpen(menuStore, id)(open);

  const { rowPolicy, linkLikeComp } = useMenuRenderContext();
  const { depth } = useMenuDepthContext();

  const hasChildren = children !== undefined && Object.keys(children).length > 0;

  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);

  const rowPlan = rowPolicy({
    depth,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren,
  });

  const ui = overrides;
  if (ui?.display === false) return null;

  if (hasChildren) {
    return (
      <>
        <DrawerOpenClose
          children={children}
          rowPlan={rowPlan}
          isOpen={isOpen  }
          onToggle={onToggle}
          depth={depth}
        />
        {ui?.divider && <Divider />}
      </>
    );
  }

  return (
    <>
      <ElementButton
        link={menuTreeElement.link}
        overrides={overrides}
        rowPlan={rowPlan}
        linkComponent={linkLikeComp}
      />
      {ui?.divider && <Divider />}
    </>
  );
}
