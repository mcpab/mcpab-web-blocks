'use client';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import type { SxProps, Theme } from '@mui/material/styles';
import { LinkTypeComponent } from 'src/core/link';
import { ElementLabel } from './ElementLabel';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';
import { RowPlan } from './RowPolicyTypes';

export type ElementButtonProps = {
  menuElement: MenuTreeElement  ;
  overrides: MenuTreeElementUI | undefined;
  linkComponent: LinkTypeComponent;
  rowPlan: RowPlan;
};
export function ElementButton({
  menuElement,
  overrides,
  linkComponent,
  rowPlan,
}: ElementButtonProps) {
 

  if (overrides?.display === false) return null;

  // const { rowPolicy } = useMenuRenderContext();

  // Compute row plan ONCE
  // const { typographyProps, icon, text } = rowPolicy({ depth, node });

  // console.log('ElementButton rowPolicy result:', { paddingInlineStart, rowSx, typographyProps, icon, text });

  const onClick = overrides?.onClick;
  const link = menuElement.link;

  const { typographyProps, icon, text, paddingInlineStart, rowSx } = rowPlan;

  const elementLabel = <ElementLabel typographyProps={typographyProps} icon={icon} text={text} />;

  const sx: SxProps<Theme> = [
    { paddingInlineStart },
    ...(Array.isArray(rowSx) ? rowSx : rowSx ? [rowSx] : []),
  ];

  if (link) {
    return (
      <ListItemButton component={linkComponent} href={link} onClick={onClick} sx={sx}>
        {elementLabel}
      </ListItemButton>
    );
  } else if (onClick) {
    return (
      <ListItemButton onClick={onClick} sx={sx}>
        {elementLabel}
      </ListItemButton>
    );
  }

  return (
    <ListItem disablePadding sx={sx}>
      {elementLabel}
    </ListItem>
  );
}
