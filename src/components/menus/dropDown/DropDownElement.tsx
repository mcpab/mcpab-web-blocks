'use client';

import type { StratifyPayload } from '../../../core/hierarchy/D3StratifyTypes';
import { ElementButton } from '../ElementButton';
import type { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { useMenuRenderContext } from '../MenuRenderContext';
import { useMenuSelectorContext } from '../MenuSelectorContext';
import { DropDownOpenClose } from './DropDownOpenClose';
import { useMenuDepthContext } from '../MenuDepthContext';

/** @internal */
type DropDownElementProps = {
  id: string;
  menuTreeElement: MenuTreeElement | null;
  overrides: MenuTreeElementUI | undefined;
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
};

/**
 * Renders a single top-level item in the dropdown navigation bar (always at depth 0).
 *
 * Decides between two render paths:
 * - **Has children** → {@link DropDownOpenClose}: a button that opens a `Popover` containing
 *   a {@link DropDownMegaMenu} panel.
 * - **Leaf node** → {@link ElementButton}: a direct navigation link or plain item.
 *
 * Enforces depth 0 — this component is only rendered by {@link DropDown_Client}.
 *
 * @internal
 */
export function DropDownElement({
  id,
  menuTreeElement,
  overrides,
  children,
}: DropDownElementProps) {
  //

  const { depth } = useMenuDepthContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const { rowPolicy, linkLikeComp } = useMenuRenderContext();

  if (depth !== 0) {
    console.warn(
      'DropDownElement should only be used at the top level (depth 0). Current depth:',
      depth,
    );
    return null;
  }

  const ui = overrides;
  if (ui?.display === false) return null;


  if (!menuTreeElement) return null;

  const hasChildren = children !== undefined && Object.keys(children).length > 0;

  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);

  const rowPlan = rowPolicy({
    depth: 0,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen: true,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren,
  });

  if (!hasChildren) {
    return (
      <>
        <ElementButton
          link={menuTreeElement.link}
          overrides={overrides}
          rowPlan={rowPlan}
          linkComponent={linkLikeComp}
        />
      </>
    );
  } else {
    return (
      <> 
          <DropDownOpenClose
            id={id}
            menuTreeElement={menuTreeElement}
            overrides={overrides}
            children={children}
          />
      
      </>
    );
  }
}
