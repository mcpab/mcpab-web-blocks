import '../../../mui-augment';
import Button, { type ButtonProps } from '@mui/material/Button';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import { useMenuSelectionContext } from '../tree/MenuSelectionContext';
import { useDropDownMenuRenderContext } from './DropDownMenuRendererContext';

export type DropDownLinkProps = {
  href: string;
  label: string;
  id: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonProps?: ButtonProps;
  labelTypographyProps?: TypographyProps;
};

export function DropDownLink({
  href,
  id,
  label,
  buttonProps,
  disabled,
  icon,
  labelTypographyProps,
}: DropDownLinkProps) {
  //

  const { LinkComponent } = useDropDownMenuRenderContext();
  const { isSelected } = useMenuSelectionContext();
  const selected = isSelected(id);

  return (
    <Button
      component={LinkComponent}
      href={href}
      disabled={disabled}
      color={selected ? 'primary' : 'inherit'}
      variant="text"
      startIcon={icon}
      {...buttonProps}
    >
      <Typography variant="narrative" {...labelTypographyProps}>
        {label}
      </Typography>
    </Button>
  );
}

export default DropDownLink;
