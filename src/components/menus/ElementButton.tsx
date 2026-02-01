'use client';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { ElementLabel } from './ElementLabel';
import { useMenuRenderContext } from './MenuContext';
import { useMenuDepthContext } from './MenuDepthContext';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';

export type ElementButtonProps = {
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};
export function ElementButton({ node }: ElementButtonProps) {
  ///
  // console.log('ElementButton render:', menuElement);
  // console.log('ElementButton overrides:', overrides);

  const menuElement = node.node;
  const overrides = node.overrides;

  if (!menuElement) return null;

  const display = overrides?.display ?? true;
  if (!display) return null;

    const { depth } = useMenuDepthContext();

  const { linkLikeComp: LinkComponent , rowPolicy } = useMenuRenderContext();

  const {paddingInlineStart: rowPaddingLeft} = rowPolicy({ depth, node });

  const onClick = overrides?.onClick;
  const link = menuElement.link;

  const elementLabel = <ElementLabel node={node} />;

  if (link) {
    return (
      <ListItemButton component={LinkComponent} href={link} onClick={onClick} sx={{ pl: rowPaddingLeft }}>
        {elementLabel}
      </ListItemButton>
    );
  } else if (onClick) {
    return <ListItemButton onClick={onClick} sx={{ pl: rowPaddingLeft }}>{elementLabel}</ListItemButton>;
  }

  return <ListItem disablePadding sx={{ pl: rowPaddingLeft }}>{ elementLabel }</ListItem>;


}
