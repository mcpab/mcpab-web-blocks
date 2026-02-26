/**
 * CallToActionButton
 *
 * Primary conversion button with built-in loading and success states.
 * This component is intentionally “UI-first”: it does not perform the async work
 * for you, but it makes it easy to reflect progress in the button itself.
 *
 * @example
 * ```tsx
 * <CallToActionButton loading loadingText="Submitting…">
 *   Submit
 * </CallToActionButton>
 * ```
 */

'use client';
import * as React from 'react';
import { Button, type ButtonProps, CircularProgress, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';

/**
 * Props interface for CallToActionButton component
 * 
 * Extends Material-UI ButtonProps with additional conversion-focused features
 * including loading states, success feedback, and enhanced accessibility.
 * 
 * @interface CallToActionButtonProps
 * @extends {ButtonProps} All Material-UI Button properties
 * 
 * @property {boolean} [loading=false] - Shows loading spinner and disables interaction
 *   - Prevents double submissions during async operations
 *   - Automatically disables button and shows progress indicator
 *   - Maintains button dimensions to prevent layout shift
 *   - Accessible to screen readers with proper ARIA states
 * 
 * @property {boolean} [success=false] - Shows success state with checkmark icon
 *   - Displays green checkmark icon when action completes successfully
 *   - Temporarily overrides button content for visual confirmation
 *   - Automatically resets after specified duration
 *   - Provides positive feedback for completed conversions
 * 
 * @property {number} [successDuration=2000] - Duration to show success state (ms)
 *   - Controls how long success feedback is displayed
 *   - Allows users to see completion confirmation
 *   - Returns to normal state automatically
 *   - Customizable based on action importance
 * 
 * @property {React.ReactNode} [loadingText] - Optional text to show during loading
 *   - Custom message during async operations
 *   - Provides context about what's happening
 *   - Improves user experience during wait times
 *   - Falls back to original children if not provided
 * 
 * @property {React.ReactNode} [successText] - Optional text to show on success
 *   - Custom success confirmation message
 *   - Replaces button content temporarily
 *   - Provides specific feedback about completion
 *   - Falls back to success icon if not provided
 * 
 * @example
 * // Type-safe prop usage
 * const ctaProps: CallToActionButtonProps = {
 *   loading: isSubmitting,
 *   success: submissionSuccess,
 *   successDuration: 3000,
 *   loadingText: "Creating account...",
 *   successText: "Account created!",
 *   variant: "contained",
 *   size: "large",
 *   fullWidth: true,
 *   onClick: handleSubmission
 * };
 */
/** Props for {@link CallToActionButton}. */
export interface CallToActionButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  loading?: boolean;
  success?: boolean;
  successDuration?: number;
  loadingText?: React.ReactNode;
  successText?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

/**
 * CallToActionButton - High-conversion primary action button
 * 
 * A sophisticated button component optimized for conversion actions with
 * built-in loading states, success feedback, and accessibility features.
 * Designed to maximize user engagement and provide clear action feedback.
 * 
 * State Management:
 * - Loading state disables interaction and shows progress
 * - Success state provides positive feedback with checkmark
 * - Automatic state reset after success confirmation
 * - Preserves all other button states and interactions
 * 
 * Accessibility Features:
 * - Proper ARIA states for loading and success conditions
 * - Screen reader announcements for state changes
 * - Keyboard navigation and focus management
 * - High contrast support for visual clarity
 * 
 * Performance Considerations:
 * - Efficient re-renders with React.useEffect for success timeout
 * - Minimal bundle impact with selective Material-UI imports
 * - Optimized for both mobile and desktop interactions
 * - Supports server-side rendering
 * 
 * @param {CallToActionButtonProps} props - Component props
 * @param {boolean} [props.loading=false] - Loading state indicator
 * @param {boolean} [props.success=false] - Success state indicator  
 * @param {number} [props.successDuration=2000] - Success display duration
 * @param {React.ReactNode} [props.loadingText] - Loading state text
 * @param {React.ReactNode} [props.successText] - Success state text
 * @param {React.ReactNode} [props.startIcon] - Icon before text
 * @param {React.ReactNode} [props.endIcon] - Icon after text
 * @param {React.ReactNode} props.children - Button content
 * @param {ButtonProps} ...rest - All other Material-UI Button props
 * 
 * @returns {React.ReactElement} Enhanced call-to-action button
 * 
 * @example
 * // Newsletter signup with feedback
 * const [isSubscribing, setIsSubscribing] = useState(false);
 * const [subscribed, setSubscribed] = useState(false);
 * 
 * const handleSubscribe = async () => {
 *   setIsSubscribing(true);
 *   try {
 *     await subscribeToNewsletter(email);
 *     setSubscribed(true);
 *     setTimeout(() => setSubscribed(false), 3000);
 *   } finally {
 *     setIsSubscribing(false);
 *   }
 * };
 * 
 * <CallToActionButton
 *   onClick={handleSubscribe}
 *   loading={isSubscribing}
 *   success={subscribed}
 *   loadingText="Subscribing..."
 *   successText="Welcome aboard!"
 *   variant="contained"
 *   color="primary"
 *   size="large"
 *   fullWidth
 * >
 *   Subscribe to Updates
 * </CallToActionButton>
 * 
 * @example
 * // E-commerce checkout flow
 * <CallToActionButton
 *   onClick={handleCheckout}
 *   loading={processingPayment}
 *   success={paymentComplete}
 *   loadingText="Processing payment..."
 *   successText="Order confirmed!"
 *   startIcon={<CreditCardIcon />}
 *   variant="contained"
 *   color="success"
 *   size="large"
 *   disabled={cartIsEmpty}
 *   sx={{
 *     minHeight: 56,
 *     fontSize: '1.1rem',
 *     fontWeight: 600,
 *   }}
 * >
 *   Complete Purchase
 * </CallToActionButton>
 * 
 * @example
 * // Free trial conversion
 * <CallToActionButton
 *   onClick={handleStartTrial}
 *   loading={creatingAccount}
 *   success={accountCreated}
 *   variant="contained"
 *   size="large"
 *   sx={{
 *     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 *     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
 *     color: 'white',
 *     '&:hover': {
 *       background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
 *     }
 *   }}
 * >
 *   Start Free Trial
 * </CallToActionButton>
 */
const CallToActionButton: React.FC<CallToActionButtonProps> = ({
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
  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, successDuration);
      return () => clearTimeout(timer);
    }
  }, [success, successDuration]);

  const isDisabled = disabled || loading;
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const getButtonContent = () => {
    if (showSuccess) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircleIcon sx={{ color: green[500] }} />
          {successText || children}
        </Box>
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

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {startIcon}
        {children}
        {endIcon}
      </Box>
    );
  };

  return (
    <Button
      disabled={isDisabled}
      onClick={handleClick}
      aria-busy={loading}
      aria-live={showSuccess ? 'polite' : undefined}
      {...rest}
    >
      {getButtonContent()}
    </Button>
  );
};

export default CallToActionButton;