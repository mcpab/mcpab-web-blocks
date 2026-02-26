/**
 * ActionButton
 *
 * A small convenience wrapper around {@link TouchButton} that standardizes “action”
 * style buttons and handles anchor/link ergonomics:
 *
 * - Renders as an <a> element when `href` is provided.
 * - Detects external links (http/https) and automatically applies `target="_blank"`
 *   + `rel="noopener noreferrer"`.
 * - Supports an optional leading `icon` mapped to MUI’s `startIcon`.
 *
 * Use this for buttons that may point to either internal routes or external URLs.
 *
 * @example
 * ```tsx
 * <ActionButton href="/contact">Contact</ActionButton>
 *
 * <ActionButton href="https://example.com" icon={<OpenInNewIcon />}>
 *   External link
 * </ActionButton>
 * ```
 */

// src/components/buttons/ActionButton.tsx
'use client';
import * as React from 'react';
import TouchButton from '../styled/TouchButton';
import type { ButtonProps } from '@mui/material/Button';

/**
 * Props interface for ActionButton component
 *
 * Extends Material-UI ButtonProps with additional functionality for icons and href handling.
 * Provides type safety for all Material-UI button properties while adding custom features
 * for icon display and link navigation.
 *
 * @interface ActionButtonProps
 * @extends {ButtonProps} All Material-UI Button properties (variant, color, size, etc.)
 *
 * @property {React.ReactNode} [icon] - Optional icon element displayed at the start of the button
 *   - Accepts any React component (Material-UI icons, custom SVGs, etc.)
 *   - Automatically positioned using Material-UI's startIcon pattern
 *   - Maintains proper spacing and alignment with button text
 *   - Supports icon-only buttons when no children provided
 *
 * @property {string} [href] - Optional URL for link destination
 *   - Internal links: relative paths like "/contact", "/about"
 *   - External links: full URLs starting with "http" or "https"
 *   - File downloads: direct file paths like "/files/document.pdf"
 *   - Email links: "mailto:user@example.com"
 *   - Phone links: "tel:+1234567890"
 *   - Automatically applies security attributes for external URLs
 *
 * @example
 * // Type-safe prop usage
 * const buttonProps: ActionButtonProps = {
 *   icon: <LaunchIcon />,
 *   href: "https://external-site.com",
 *   variant: "contained",
 *   color: "primary",
 *   size: "large",
 *   onClick: (event) => console.log('Button clicked', event),
 * };
 *
 * @example
 * // Icon-only button
 * const iconButtonProps: ActionButtonProps = {
 *   icon: <ShareIcon />,
 *   href: "/share",
 *   "aria-label": "Share this page",
 *   sx: { minWidth: 'auto', p: 1 }
 * };
 */
/** Props for {@link ActionButton}. */
export interface ActionButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  href?: string;
}

/**
 * ActionButton - Semantic action button with intelligent link handling
 *
 * A sophisticated button component that automatically handles external link security,
 * icon positioning, and semantic HTML generation. Built on top of TouchButton for
 * consistent styling and behavior across the application.
 *
 * Security Features:
 * - Automatically detects external links (starting with "http")
 * - Applies target="_blank" for external URLs to open in new tab
 * - Adds rel="noopener noreferrer" to prevent security vulnerabilities
 * - Maintains internal navigation without additional attributes
 *
 * Accessibility Features:
 * - Semantic anchor element generation for proper screen reader support
 * - Maintains focus management for keyboard navigation
 * - Preserves all ARIA attributes passed through props
 * - Icon integration with proper text alternatives
 *
 * Technical Implementation:
 * - Uses TouchButton as base for consistent touch interactions
 * - Leverages Material-UI's component prop system for semantic HTML
 * - Efficient external link detection with string.startsWith()
 * - Spread operator for clean prop forwarding
 *
 * @param {ActionButtonProps} props - Component props extending ButtonProps
 * @param {React.ReactNode} [props.icon] - Icon element for button start position
 * @param {string} [props.href] - Link destination URL or path
 * @param {ButtonProps} ...rest - All other Material-UI Button properties
 *
 * @returns {React.ReactElement} Rendered anchor button element
 *
 * @example
 * // External link with security handling
 * <ActionButton
 *   href="https://docs.example.com"
 *   icon={<HelpIcon />}
 *   variant="outlined"
 *   color="info"
 * >
 *   View Documentation
 * </ActionButton>
 * // Renders: <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">
 *
 * @example
 * // Internal navigation
 * <ActionButton
 *   href="/dashboard"
 *   icon={<DashboardIcon />}
 *   variant="contained"
 * >
 *   Go to Dashboard
 * </ActionButton>
 * // Renders: <a href="/dashboard"> (no target or rel attributes)
 *
 * @example
 * // Email link
 * <ActionButton
 *   href="mailto:support@company.com"
 *   icon={<EmailIcon />}
 *   variant="text"
 *   color="secondary"
 * >
 *   Email Support
 * </ActionButton>
 *
 * @example
 * // File download
 * <ActionButton
 *   href="/downloads/product-guide.pdf"
 *   icon={<GetAppIcon />}
 *   variant="contained"
 *   color="success"
 *   sx={{ mb: 2 }}
 * >
 *   Download Guide
 * </ActionButton>
 *
 * @example
 * // Custom styling with Material-UI props
 * <ActionButton
 *   href="https://github.com/company/repo"
 *   icon={<GitHubIcon />}
 *   variant="outlined"
 *   sx={{
 *     borderColor: 'grey.800',
 *     color: 'grey.800',
 *     '&:hover': {
 *       borderColor: 'grey.900',
 *       backgroundColor: 'grey.50',
 *     }
 *   }}
 * >
 *   View on GitHub
 * </ActionButton>
 */
const ActionButton: React.FC<ActionButtonProps> = ({ icon, href, ...rest }) => {
  const isExternal = href?.startsWith('http');
  return (
    <TouchButton
      component="a"
      href={href}
      startIcon={icon}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...rest}
    />
  );
};

export default ActionButton;
