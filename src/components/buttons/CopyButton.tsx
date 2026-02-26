/**
 * CopyButton
 *
 * Copy-to-clipboard button with success feedback.
 *
 * Uses the modern Clipboard API when available, with a small fallback for older
 * environments. Optional tooltip + icon-only mode make it suitable for tight UIs
 * (e.g. copying API keys).
 *
 * @example
 * ```tsx
 * <CopyButton text={apiKey} iconOnly showTooltip />
 * ```
 */

'use client';
import * as React from 'react';
import { Button, type ButtonProps, Snackbar, Alert, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

/** Props for {@link CopyButton}. */
export interface CopyButtonProps extends Omit<ButtonProps, 'onClick' | 'onCopy'> {
  text: string;
  successMessage?: string;
  showTooltip?: boolean;
  iconOnly?: boolean;
  onCopy?: (success: boolean) => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  successMessage = "Copied to clipboard!",
  showTooltip = true,
  iconOnly = false,
  onCopy,
  children = "Copy",
  sx,
  ...rest
}) => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [justCopied, setJustCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowSuccess(true);
      setJustCopied(true);
      onCopy?.(true);
      
      // Reset icon after 2 seconds
      setTimeout(() => setJustCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
      onCopy?.(false);
      
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowSuccess(true);
        setJustCopied(true);
        onCopy?.(true);
        setTimeout(() => setJustCopied(false), 2000);
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  const getButtonContent = () => {
    const icon = justCopied ? <CheckIcon /> : <ContentCopyIcon />;
    
    if (iconOnly) {
      return icon;
    }
    
    return (
      <>
        {icon}
        {justCopied ? 'Copied!' : children}
      </>
    );
  };

  const button = (
    <Button
      onClick={handleCopy}
      startIcon={iconOnly ? undefined : (justCopied ? <CheckIcon /> : <ContentCopyIcon />)}
      sx={{
        minWidth: iconOnly ? 'auto' : undefined,
        color: justCopied ? 'success.main' : undefined,
        ...sx
      }}
      aria-label={iconOnly ? `Copy ${text}` : undefined}
      {...rest}
    >
      {iconOnly ? getButtonContent() : (justCopied ? 'Copied!' : children)}
    </Button>
  );

  const wrappedButton = showTooltip && iconOnly ? (
    <Tooltip title={`Copy: ${text.length > 50 ? text.substring(0, 50) + '...' : text}`}>
      {button}
    </Tooltip>
  ) : button;

  return (
    <>
      {wrappedButton}
      <Snackbar
        open={showSuccess}
        autoHideDuration={2000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" icon={<CheckIcon />}>
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CopyButton;