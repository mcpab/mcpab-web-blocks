'use client';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { MenuTreeElement, MenuTreeElementUI } from './DrawerMenu';
import { ElementLabel } from './ElementLabel';
import { useMenuContext } from './MenuContext';
import { Indent } from './DrawerMenu_Client';

export type ElementButtonProps = {
  menuElement: MenuTreeElement;
  overrides?: MenuTreeElementUI;
  indent: Indent;
};
export function ElementButton({ menuElement, overrides, indent }: ElementButtonProps) {
  ///
  const display = overrides?.display ?? true;
  if (!display) return null;

  const { linkLikeComp: LinkComponent } = useMenuContext();

  const onClick = overrides?.onClick;
  const link = menuElement.link;

  const elementLabel = <ElementLabel menuElement={menuElement} overrides={overrides} />;
console.log('Indent in ElementButton:', indent);
  const button = link ? (
    <ListItemButton component={LinkComponent} href={link} onClick={onClick} sx={{ pl: indent.indentValue * indent.depth }}>
      {elementLabel}
    </ListItemButton>
  ) : (
    <ListItemButton onClick={onClick} sx={{ pl: indent.indentValue * indent.depth }}>{elementLabel}</ListItemButton>
  );

  return (
    <>
      {button}
    </>
  );
}
