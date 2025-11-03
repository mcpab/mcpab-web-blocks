/**
 * @fileoverview SubscribeButton - Email subscription button with validation and feedback
 * 
 * A specialized button component designed for email subscription and newsletter signup
 * flows. Features input validation, loading states, success feedback, and error handling
 * for optimal conversion rates and user experience in email marketing campaigns.
 * 
 * Key Features:
 * - Email validation with real-time feedback
 * - Loading states during subscription processing
 * - Success confirmation with celebratory feedback
 * - Error handling with helpful messaging
 * - Integration-ready for email service providers
 * - Accessibility compliance with form context
 * - Mobile-optimized input and interaction design
 * 
 * Use Cases:
 * - Newsletter subscription forms
 * - Marketing campaign email capture
 * - Product update notifications
 * - Beta program signups
 * - Event and webinar registrations
 * - Blog and content subscription
 * - Lead generation and nurturing
 * 
 * @example
 * <SubscribeButton 
 *   onSubscribe={handleEmailSubscription}
 *   placeholder="Enter your email"
 *   successMessage="Welcome! Check your inbox."
 * >
 *   Subscribe to Updates
 * </SubscribeButton>
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

'use client';
import * as React from 'react';
import { 
  Button, 
  TextField, 
  Box, 
  CircularProgress, 
  Alert,
  Snackbar,
  Stack,
  type ButtonProps 
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface SubscribeButtonProps extends Omit<ButtonProps, 'onClick'> {
  onSubscribe: (email: string) => Promise<boolean>;
  placeholder?: string;
  successMessage?: string;
  errorMessage?: string;
  requireEmail?: boolean;
  showInlineForm?: boolean;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  onSubscribe,
  placeholder = "Enter your email address",
  successMessage = "Successfully subscribed!",
  errorMessage = "Subscription failed. Please try again.",
  requireEmail = true,
  showInlineForm = true,
  children = "Subscribe",
  ...rest
}) => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (requireEmail && !email.trim()) {
      setEmailError('Email address is required');
      return;
    }

    if (requireEmail && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setIsLoading(true);

    try {
      const success = await onSubscribe(email);
      if (success) {
        setShowSuccess(true);
        setEmail('');
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (showInlineForm) {
    return (
      <>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ width: '100%' }}>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            placeholder={placeholder}
            error={Boolean(emailError)}
            helperText={emailError}
            type="email"
            fullWidth
            size="medium"
          />
          <Button
            onClick={handleSubscribe}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : <MailOutlineIcon />}
            sx={{ minWidth: 140 }}
            {...rest}
          >
            {isLoading ? 'Subscribing...' : children}
          </Button>
        </Stack>

        <Snackbar open={showSuccess} autoHideDuration={4000} onClose={() => setShowSuccess(false)}>
          <Alert severity="success" icon={<CheckCircleIcon />}>
            {successMessage}
          </Alert>
        </Snackbar>

        <Snackbar open={showError} autoHideDuration={4000} onClose={() => setShowError(false)}>
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      </>
    );
  }

  return (
    <Button
      onClick={handleSubscribe}
      disabled={isLoading}
      startIcon={isLoading ? <CircularProgress size={20} /> : <MailOutlineIcon />}
      {...rest}
    >
      {isLoading ? 'Subscribing...' : children}
    </Button>
  );
};

export default SubscribeButton;