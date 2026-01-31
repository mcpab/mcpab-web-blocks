'use client';

import Divider from '@mui/material/Divider';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuTreeElement, MenuTreeElementUI } from './DrawerMenu';
import { DrawerOpenClose } from './DrawerOpenClose';
import { ElementButton } from './ElementButton';
import { Indent } from './DrawerMenu_Client';


////
type DrawerElementProps = {
  id: string;
  branch: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  indent: Indent  ;
};

export function DrawerElement({ id, branch, indent }: DrawerElementProps) {
  ///
  const menuTreeElement = branch.node;
  console.log('DrawerElement render:', id, menuTreeElement);
  if (!menuTreeElement) return null;

  const ui = branch.overrides;
  if (ui?.display === false) return null;

  const children = branch.children;

  const nextIndent = { depth: indent.depth + 1, indentValue: indent.indentValue };

  // Precedence: children => expander (ignore link)
  if (children && Object.keys(children).length > 0) {
    return (
      <>
        <DrawerOpenClose id={id} menuElement={menuTreeElement} overrides={ui} children={children} indent={indent} />
        {ui?.divider && <Divider />}
      </>
    );
  }

  return (
    <>
      <ElementButton menuElement={menuTreeElement} overrides={ui} indent={indent} />
      {ui?.divider && <Divider />}
    </>
  );
}