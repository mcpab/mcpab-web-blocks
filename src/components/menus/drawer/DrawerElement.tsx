'use client';

import Divider from '@mui/material/Divider';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { DrawerOpenClose } from './DrawerOpenClose';
import { ElementButton } from '../ElementButton';

////
type DrawerElementProps = {
  id: string;
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};

export function DrawerElement({ id, node }: DrawerElementProps) {
  ///
  const menuTreeElement = node.node;
  console.log('DrawerElement render:', id, menuTreeElement);
  if (!menuTreeElement) return null;

  const ui = node.overrides;
  if (ui?.display === false) return null;

  const children = node.children;

  // Precedence: children => expander (ignore link)
  if (children && Object.keys(children).length > 0) {
    return (
      <>
        <DrawerOpenClose id={id} node={node} />
        {ui?.divider && <Divider />}
      </>
    );
  }

  return (
    <>
      <ElementButton node={node} />
      {ui?.divider && <Divider />}
    </>
  );
}
