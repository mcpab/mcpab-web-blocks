/**
 * CallToActionButton
 *
 * Small wrapper around MUI Button for async actions.
 *
 * It renders one of three visual states:
 * - normal: children plus optional start/end icons
 * - loading: spinner plus loading text
 * - success: check icon plus success text, then returns to normal content
 *
 * The caller still owns the actual async work and passes `loading` / `success`.
 *
 * @example
 * ```tsx
 * <CallToActionButton loading loadingText="Submitting...">
 *   Submit
 * </CallToActionButton>
 * ```
 */

'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';

/** Props for {@link CallToActionButton}. */
export interface CallToActionButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  /** Shows spinner content and disables clicks. */
  loading?: boolean;
  /** Shows temporary success content. The caller controls when this becomes true. */
  success?: boolean;
  /** Milliseconds to keep success content visible before falling back to normal content. */
  successDuration?: number;
  /** Content shown next to the spinner while loading. Falls back to children. */
  loadingText?: React.ReactNode;
  /** Content shown next to the check icon while successful. Falls back to children. */
  successText?: React.ReactNode;
  /** Icon rendered before children in the normal state. */
  startIcon?: React.ReactNode;
  /** Icon rendered after children in the normal state. */
  endIcon?: React.ReactNode;
}

type SuccessButtonContentProps = {
  successDuration: number;
  successText?: React.ReactNode;
  children: React.ReactNode;
  fallback: React.ReactNode;
};

function SuccessButtonContent({
  successDuration,
  successText,
  children,
  fallback,
}: SuccessButtonContentProps) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, successDuration);

    return () => window.clearTimeout(timer);
  }, [successDuration]);

  if (!visible) {
    return fallback;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <CheckCircleIcon sx={{ color: green[500] }} />
      {successText || children}
    </Box>
  );
}

/** Button with built-in loading and temporary success presentation. */
export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  loading = false,
  success = false,
  successDuration = 2000,
  loadingText,
  successText,
  startIcon,
  endIcon,
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const defaultContent = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {startIcon}
      {children}
      {endIcon}
    </Box>
  );

  const getButtonContent = () => {
    if (success) {
      return (
        <SuccessButtonContent
          successDuration={successDuration}
          successText={successText}
          fallback={defaultContent}
        >
          {children}
        </SuccessButtonContent>
      );
    }

    if (loading) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={20} color="inherit" />
          {loadingText || children}
        </Box>
      );
    }

    return defaultContent;
  };

  return (
    <Button
      disabled={isDisabled}
      onClick={handleClick}
      aria-busy={loading}
      aria-live={success ? 'polite' : undefined}
      {...rest}
    >
      {getButtonContent()}
    </Button>
  );
};

export default CallToActionButton;
