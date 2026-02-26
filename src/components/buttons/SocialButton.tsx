/**
 * SocialButton
 *
 * Brand-aware social link button built on {@link ActionButton}. Maps a `platform`
 * to icon + optional brand coloring, and supports compact “icon only” mode.
 *
 * @example
 * ```tsx
 * <SocialButton platform="linkedin" href="https://linkedin.com/company/acme" />
 * ```
 */

'use client';
import * as React from 'react';
import ActionButton from './ActionButton';
import type { ActionButtonProps } from './ActionButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';

/**
 * Supported social media platforms
 * 
 * @enum {string}
 */
export type SocialPlatform = 
  | 'linkedin'
  | 'twitter' 
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'github'
  | 'whatsapp'
  | 'email'
  | 'generic';

/**
 * Platform configuration interface
 * 
 * @interface PlatformConfig
 */
interface PlatformConfig {
  icon: React.ReactElement;
  color: string;
  hoverColor: string;
  name: string;
  ariaLabel: string;
}

/**
 * Platform configurations with authentic brand styling
 */
const platformConfigs: Record<SocialPlatform, PlatformConfig> = {
  linkedin: {
    icon: <LinkedInIcon />,
    color: '#0077B5',
    hoverColor: '#005885',
    name: 'LinkedIn',
    ariaLabel: 'Connect on LinkedIn'
  },
  twitter: {
    icon: <TwitterIcon />,
    color: '#1DA1F2',
    hoverColor: '#0d8bd9',
    name: 'Twitter',
    ariaLabel: 'Follow on Twitter'
  },
  facebook: {
    icon: <FacebookIcon />,
    color: '#1877F2',
    hoverColor: '#166fe5',
    name: 'Facebook',
    ariaLabel: 'Follow on Facebook'
  },
  instagram: {
    icon: <InstagramIcon />,
    color: '#E4405F',
    hoverColor: '#d31447',
    name: 'Instagram',
    ariaLabel: 'Follow on Instagram'
  },
  youtube: {
    icon: <YouTubeIcon />,
    color: '#FF0000',
    hoverColor: '#cc0000',
    name: 'YouTube',
    ariaLabel: 'Subscribe on YouTube'
  },
  github: {
    icon: <GitHubIcon />,
    color: '#333333',
    hoverColor: '#24292e',
    name: 'GitHub',
    ariaLabel: 'View on GitHub'
  },
  whatsapp: {
    icon: <WhatsAppIcon />,
    color: '#25D366',
    hoverColor: '#1ebe57',
    name: 'WhatsApp',
    ariaLabel: 'Chat on WhatsApp'
  },
  email: {
    icon: <EmailIcon />,
    color: '#EA4335',
    hoverColor: '#d23f2d',
    name: 'Email',
    ariaLabel: 'Send email'
  },
  generic: {
    icon: <ShareIcon />,
    color: '#666666',
    hoverColor: '#555555',
    name: 'Social',
    ariaLabel: 'Social link'
  }
};

/**
 * Props interface for SocialButton component
 * 
 * Extends ActionButtonProps with social platform-specific functionality
 * including brand styling, platform detection, and social context.
 * 
 * @interface SocialButtonProps
 * @extends {Omit<ActionButtonProps, 'icon'>} ActionButton props without icon
 * 
 * @property {SocialPlatform} platform - Social media platform identifier
 *   - Determines icon, colors, and default styling
 *   - Provides platform-specific accessibility context
 *   - Enables authentic brand representation
 *   - Required for proper social media integration
 * 
 * @property {boolean} [useBrandColors=true] - Apply authentic platform colors
 *   - Uses official brand colors for each platform
 *   - Maintains brand recognition and authenticity
 *   - Can be disabled for custom color schemes
 *   - Recommended for social media buttons
 * 
 * @property {boolean} [iconOnly=false] - Show only icon without text
 *   - Compact representation for space-constrained layouts
 *   - Maintains accessibility with proper aria-label
 *   - Useful for social media toolbars and footers
 *   - Automatically adjusts button sizing
 * 
 * @property {string} [customAriaLabel] - Override default accessibility label
 *   - Custom description for screen readers
 *   - Overrides platform-specific default labels
 *   - Useful for specific action contexts (share vs follow)
 *   - Enhances accessibility for custom use cases
 * 
 * @example
 * // Professional LinkedIn connection
 * const linkedinProps: SocialButtonProps = {
 *   platform: "linkedin",
 *   href: "https://linkedin.com/in/johndoe",
 *   useBrandColors: true,
 *   variant: "contained",
 *   size: "medium",
 *   customAriaLabel: "Connect with John Doe on LinkedIn"
 * };
 * 
 * @example
 * // Icon-only social toolbar
 * const socialToolbarProps: SocialButtonProps = {
 *   platform: "github",
 *   href: "https://github.com/company/repo",
 *   iconOnly: true,
 *   variant: "text",
 *   sx: { minWidth: 'auto', p: 1 }
 * };
 */
/** Props for {@link SocialButton}. */
export interface SocialButtonProps extends Omit<ActionButtonProps, 'icon'> {
  platform: SocialPlatform;
  useBrandColors?: boolean;
  iconOnly?: boolean;
  customAriaLabel?: string;
}

/**
 * SocialButton - Multi-platform social media button with brand styling
 * 
 * A specialized button component that provides authentic social media
 * integration with platform-specific styling, icons, and accessibility.
 * Built on ActionButton for consistent behavior and external link safety.
 * 
 * Brand Authenticity:
 * - Official platform colors and styling
 * - Authentic icons from Material-UI's social icon set
 * - Hover states that maintain brand recognition
 * - Consistent sizing and typography
 * 
 * Accessibility Features:
 * - Platform-specific ARIA labels for context
 * - Proper external link handling with security
 * - Screen reader support with meaningful descriptions
 * - Keyboard navigation and focus management
 * 
 * Technical Implementation:
 * - Built on ActionButton for external link safety
 * - Dynamic styling based on platform configuration
 * - Efficient icon selection with selective imports
 * - Responsive design with mobile optimization
 * 
 * @param {SocialButtonProps} props - Component props
 * @param {SocialPlatform} props.platform - Target social platform
 * @param {boolean} [props.useBrandColors=true] - Apply platform brand colors
 * @param {boolean} [props.iconOnly=false] - Icon-only display mode
 * @param {string} [props.customAriaLabel] - Custom accessibility label
 * @param {string} props.href - Social media URL or profile link
 * @param {React.ReactNode} props.children - Button text content
 * @param {ActionButtonProps} ...rest - All other ActionButton properties
 * 
 * @returns {React.ReactElement} Styled social media button
 * 
 * @example
 * // Complete social media footer
 * <Stack direction="row" spacing={2}>
 *   <SocialButton 
 *     platform="linkedin" 
 *     href="https://linkedin.com/company/mycompany"
 *     variant="contained"
 *   >
 *     Follow on LinkedIn
 *   </SocialButton>
 *   <SocialButton 
 *     platform="twitter" 
 *     href="https://twitter.com/mycompany"
 *     variant="contained"
 *   >
 *     Follow on Twitter
 *   </SocialButton>
 *   <SocialButton 
 *     platform="github" 
 *     href="https://github.com/mycompany"
 *     variant="contained"
 *   >
 *     View on GitHub
 *   </SocialButton>
 * </Stack>
 * 
 * @example
 * // Compact social toolbar
 * <Paper sx={{ p: 1 }}>
 *   <Stack direction="row" spacing={1}>
 *     {['linkedin', 'twitter', 'facebook', 'instagram'].map(platform => (
 *       <SocialButton
 *         key={platform}
 *         platform={platform as SocialPlatform}
 *         href={`https://${platform}.com/mycompany`}
 *         iconOnly
 *         variant="text"
 *         size="small"
 *       />
 *     ))}
 *   </Stack>
 * </Paper>
 * 
 * @example
 * // Content sharing buttons
 * <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
 *   <SocialButton
 *     platform="twitter"
 *     href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`}
 *     variant="outlined"
 *     useBrandColors={false}
 *     sx={{ color: 'text.primary', borderColor: 'divider' }}
 *   >
 *     Share on Twitter
 *   </SocialButton>
 *   <SocialButton
 *     platform="linkedin"
 *     href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
 *     variant="outlined"
 *     useBrandColors={false}
 *     sx={{ color: 'text.primary', borderColor: 'divider' }}
 *   >
 *     Share on LinkedIn
 *   </SocialButton>
 * </Stack>
 * 
 * @example
 * // Team member social profiles
 * <Card>
 *   <CardContent>
 *     <Avatar src="/team/john.jpg" sx={{ width: 80, height: 80, mx: 'auto' }} />
 *     <Typography variant="h6" align="center" sx={{ mt: 2 }}>
 *       John Smith
 *     </Typography>
 *     <Typography variant="body2" color="text.secondary" align="center">
 *       Senior Developer
 *     </Typography>
 *     <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
 *       <SocialButton
 *         platform="linkedin"
 *         href="https://linkedin.com/in/johnsmith"
 *         iconOnly
 *         size="small"
 *       />
 *       <SocialButton
 *         platform="github"
 *         href="https://github.com/johnsmith"
 *         iconOnly
 *         size="small"
 *       />
 *       <SocialButton
 *         platform="email"
 *         href="mailto:john@company.com"
 *         iconOnly
 *         size="small"
 *       />
 *     </Stack>
 *   </CardContent>
 * </Card>
 * 
 * @example
 * // WhatsApp contact button
 * <SocialButton
 *   platform="whatsapp"
 *   href="https://wa.me/1234567890?text=Hi,%20I%20need%20help%20with..."
 *   variant="contained"
 *   size="large"
 *   sx={{
 *     position: 'fixed',
 *     bottom: 20,
 *     right: 20,
 *     borderRadius: '50%',
 *     minWidth: 60,
 *     height: 60,
 *     zIndex: 1000
 *   }}
 *   iconOnly
 *   customAriaLabel="Chat with us on WhatsApp"
 * />
 */
const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  useBrandColors = true,
  iconOnly = false,
  customAriaLabel,
  children,
  sx,
  ...rest
}) => {
  const config = platformConfigs[platform];
  
  const brandStyling = useBrandColors ? {
    backgroundColor: config.color,
    color: 'white',
    '&:hover': {
      backgroundColor: config.hoverColor,
    },
    '&:focus': {
      backgroundColor: config.hoverColor,
    }
  } : {};

  const iconOnlyStyling = iconOnly ? {
    minWidth: 'auto',
    padding: '8px',
    '& .MuiButton-startIcon': {
      margin: 0
    }
  } : {};

  return (
    <ActionButton
      icon={config.icon}
      aria-label={customAriaLabel || config.ariaLabel}
      sx={{
        ...brandStyling,
        ...iconOnlyStyling,
        ...sx
      }}
      {...rest}
    >
      {!iconOnly && (children || `Follow on ${config.name}`)}
    </ActionButton>
  );
};

export default SocialButton;