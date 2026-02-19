import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { MenuLabelTypographyProps } from './RowPolicyTypes';

/** @internal Props for {@link ElementLabel}. */
export type ElementLabelProps = {
  /** Optional icon rendered to the left in a `ListItemIcon` (36 px slot). */
  icon: React.ReactNode;
  /** Label text or node rendered inside `ListItemText`. */
  text: React.ReactNode;
  /** Typography styling forwarded from the active {@link RowPlan}. */
  typographyProps?: MenuLabelTypographyProps;
};

/**
 * Renders the icon + label portion of a menu row.
 *
 * Used by {@link ElementButton} as the inner content of every row, regardless
 * of whether the row is a link, a toggle button, or a plain item.
 *
 * @internal
 */
export function ElementLabel({ typographyProps, icon, text }: ElementLabelProps) {
  return (
    <>
      {icon && <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>}
      <ListItemText primary={<Typography {...typographyProps}>{text}</Typography>} />
    </>
  );
}
