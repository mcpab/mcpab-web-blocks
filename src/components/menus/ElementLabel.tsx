import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconPicker from '../../lib/icon/IconPicker';
import { capitalizeWords } from '../../lib/utils';
import { MenuTreeElement, MenuTreeElementUI } from './DrawerMenu';

export type ElementLabelProps = {
  menuElement: MenuTreeElement;
  overrides?: MenuTreeElementUI;
};

export function ElementLabel({ menuElement, overrides }: ElementLabelProps) {
  //
  const {
    display = true,
    pickIcon = true,
    fontWeight = 'normal',
    capitalize = false,
  } = overrides ?? {};

  if (!display) return null;

  const label = menuElement.label;

  return (
    <>
      <ListItemIcon sx={{ minWidth: 36 }}>{pickIcon && <IconPicker name={label} />}</ListItemIcon>

      <ListItemText
        primary={
          <Typography variant="narrative" fontWeight={fontWeight}>
            {capitalize ? capitalizeWords(label) : label}
          </Typography>
        }
      />

   
    </>
  );
}
