/**
 * Touch-friendly button style built on top of MUI `Button`.
 *
 * Keeps full MUI button API while applying house defaults:
 * - 40px height
 * - no uppercase transform
 * - primary background with darker hover
 */

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// No 'use client' needed: no hooks/browser APIs.

const TouchButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  paddingInline: theme.spacing(2),
  minWidth: 0,
  width: 'fit-content',
  height: 40,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': { backgroundColor: theme.palette.primary.dark },
})) as typeof Button; // keep full polymorphic Button props (component="a", etc.)

/** Props are identical to MUI `Button` props. */
export type TouchButtonProps = React.ComponentProps<typeof Button>;
export default TouchButton;
