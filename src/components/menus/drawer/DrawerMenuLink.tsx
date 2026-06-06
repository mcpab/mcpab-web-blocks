import '../../../mui-augment';
import ListItemButton, { type ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import ListItemIcon, { type ListItemIconProps } from '@mui/material/ListItemIcon';
import { useDrawerMenuRenderContext } from './DrawerMenuRenderContext';
import { useMenuSelectionContext } from '../tree/MenuSelectionContext';

export type DrawerMenuLinkProps = {
  href: string;
  label: string;
  id: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonProps?: ListItemButtonProps;
  labelTypographyProps?: TypographyProps;
  iconProps?: ListItemIconProps;
};

export function DrawerMenuLink({
  href,
  label,
  id,
  disabled,
  icon,
  buttonProps,
  iconProps,
  labelTypographyProps,
}: DrawerMenuLinkProps) {
  //

  const { LinkComponent } = useDrawerMenuRenderContext();
  const { isSelected } = useMenuSelectionContext();
  const selected = isSelected(id);

  return (
    <ListItemButton
      component={LinkComponent}
      href={href}
      selected={selected}
      disabled={disabled}
      {...buttonProps}
    >
      {icon && <ListItemIcon {...iconProps}>{icon}</ListItemIcon>}
      <ListItemText
        primary={
          <Typography variant="narrative" {...labelTypographyProps}>
            {label}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default DrawerMenuLink;
