/**
 * ShareButton
 *
 * “Share this” button that prefers the Web Share API when available and falls
 * back to configurable platform options (and copy-to-clipboard).
 *
 * @example
 * ```tsx
 * <ShareButton url={location.href} title="My page">
 *   Share
 * </ShareButton>
 * ```
 */

'use client';
import * as React from 'react';
import { 
  Button, 
  type ButtonProps, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText,
  Snackbar,
  Alert
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

/**
 * Share data interface matching Web Share API
 * 
 * @interface ShareData
 */
export interface ShareData {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
}

/**
 * Fallback platform options for sharing
 * 
 * @enum {string}
 */
export type FallbackPlatform = 'twitter' | 'linkedin' | 'facebook' | 'email' | 'copy';

/**
 * Props interface for ShareButton component
 * 
 * Extends Material-UI ButtonProps with Web Share API functionality
 * and progressive enhancement features for cross-platform sharing.
 * 
 * @interface ShareButtonProps
 * @extends {Omit<ButtonProps, 'onClick'>} ButtonProps without onClick conflict
 * 
 * @property {string} [url] - URL to share
 *   - Current page URL if not provided
 *   - Should be absolute URL for social platform compatibility
 *   - Used in all sharing methods (native and fallback)
 *   - Required for most sharing scenarios
 * 
 * @property {string} [title] - Content title for sharing
 *   - Page title or content headline
 *   - Used in social media post templates
 *   - Enhances sharing context and engagement
 *   - Falls back to document title if not provided
 * 
 * @property {string} [text] - Descriptive text content
 *   - Additional context or description
 *   - Used in social media post body
 *   - Helps with content discovery and engagement
 *   - Optional but recommended for better sharing
 * 
 * @property {File[]} [files] - Files to share (native API only)
 *   - Images, documents, or media files
 *   - Only works with native Web Share API
 *   - Falls back to URL sharing if files not supported
 *   - Subject to browser and platform limitations
 * 
 * @property {boolean} [showFallbackOptions=true] - Show fallback menu when native unavailable
 *   - Displays social platform options in menu
 *   - Provides broader sharing options
 *   - Can be disabled for native-only sharing
 *   - Recommended for better user experience
 * 
 * @property {FallbackPlatform[]} [fallbackPlatforms] - Custom fallback platform list
 *   - Override default platforms: ['twitter', 'linkedin', 'facebook', 'email', 'copy']
 *   - Customize based on target audience
 *   - Control available sharing options
 *   - Maintain brand consistency
 * 
 * @property {(success: boolean, platform?: string) => void} [onShare] - Share event callback
 *   - Analytics tracking for sharing events
 *   - Custom handling after share completion
 *   - Success/failure feedback
 *   - Platform-specific tracking
 * 
 * @example
 * // Comprehensive sharing configuration
 * const shareProps: ShareButtonProps = {
 *   url: "https://example.com/article",
 *   title: "Amazing Article Title",
 *   text: "This article changed my perspective on web development",
 *   showFallbackOptions: true,
 *   fallbackPlatforms: ['twitter', 'linkedin', 'copy'],
 *   onShare: (success, platform) => {
 *     analytics.track('content_shared', { success, platform });
 *   },
 *   variant: "contained",
 *   color: "primary"
 * };
 */
/** Props for {@link ShareButton}. */
export interface ShareButtonProps extends Omit<ButtonProps, 'onClick'> {
  url?: string;
  title?: string;
  text?: string;
  files?: File[];
  showFallbackOptions?: boolean;
  fallbackPlatforms?: FallbackPlatform[];
  onShare?: (success: boolean, platform?: string) => void;
}

/**
 * Default fallback platforms with comprehensive coverage
 */
const DEFAULT_FALLBACK_PLATFORMS: FallbackPlatform[] = [
  'twitter',
  'linkedin', 
  'facebook',
  'email',
  'copy'
];

/**
 * Platform configuration for fallback sharing
 */
const PLATFORM_CONFIG = {
  twitter: {
    icon: <TwitterIcon />,
    label: 'Share on Twitter',
    getUrl: (data: ShareData) => 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text || '')}&url=${encodeURIComponent(data.url || '')}`
  },
  linkedin: {
    icon: <LinkedInIcon />,
    label: 'Share on LinkedIn', 
    getUrl: (data: ShareData) =>
      `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url || '')}`
  },
  facebook: {
    icon: <FacebookIcon />,
    label: 'Share on Facebook',
    getUrl: (data: ShareData) =>
      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url || '')}`
  },
  email: {
    icon: <EmailIcon />,
    label: 'Share via Email',
    getUrl: (data: ShareData) =>
      `mailto:?subject=${encodeURIComponent(data.title || '')}&body=${encodeURIComponent(`${data.text || ''}\n\n${data.url || ''}`)}`
  },
  copy: {
    icon: <ContentCopyIcon />,
    label: 'Copy Link',
    getUrl: () => '' // Handled separately with Clipboard API
  }
};

/**
 * ShareButton - Progressive Web Share API button with fallbacks
 * 
 * A sophisticated sharing component that provides the best possible sharing
 * experience across all devices and browsers. Uses native Web Share API
 * when available and provides comprehensive fallback options.
 * 
 * Progressive Enhancement Strategy:
 * 1. Detect native Web Share API support
 * 2. Use native sharing for supported content types
 * 3. Fall back to social platform URLs for broader support
 * 4. Provide copy-to-clipboard as ultimate fallback
 * 5. Show appropriate success/error feedback
 * 
 * Accessibility Features:
 * - Semantic sharing context with proper ARIA labels
 * - Keyboard navigation for fallback menu
 * - Screen reader support with meaningful descriptions
 * - High contrast support for visual clarity
 * 
 * Performance Considerations:
 * - Efficient native API detection
 * - Lazy loading of fallback menu
 * - Minimal bundle impact with selective platform imports
 * - Optimized for both mobile and desktop interactions
 * 
 * @param {ShareButtonProps} props - Component props
 * @returns {React.ReactElement} Enhanced sharing button
 * 
 * @example
 * // Blog post sharing
 * <ShareButton
 *   url={`https://blog.example.com/posts/${postId}`}
 *   title={post.title}
 *   text={post.excerpt}
 *   onShare={(success, platform) => {
 *     if (success) {
 *       setShareCount(prev => prev + 1);
 *       analytics.track('post_shared', { postId, platform });
 *     }
 *   }}
 *   variant="outlined"
 *   sx={{ ml: 2 }}
 * >
 *   Share Post
 * </ShareButton>
 * 
 * @example
 * // E-commerce product sharing
 * <ShareButton
 *   url={`https://store.example.com/products/${product.id}`}
 *   title={`Check out ${product.name}`}
 *   text={`${product.description} - Starting at $${product.price}`}
 *   fallbackPlatforms={['twitter', 'facebook', 'copy']}
 *   variant="contained"
 *   color="secondary"
 *   startIcon={<ShareIcon />}
 * >
 *   Share Product
 * </ShareButton>
 * 
 * @example
 * // Event sharing with custom styling
 * <ShareButton
 *   url={event.url}
 *   title={event.name}
 *   text={`Join us for ${event.name} on ${formatDate(event.date)}`}
 *   sx={{
 *     background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
 *     color: 'white',
 *     '&:hover': {
 *       background: 'linear-gradient(45deg, #FF5252, #26C6DA)',
 *     }
 *   }}
 * >
 *   Share Event
 * </ShareButton>
 */
const ShareButton: React.FC<ShareButtonProps> = ({
  url,
  title,
  text,
  files,
  showFallbackOptions = true,
  fallbackPlatforms = DEFAULT_FALLBACK_PLATFORMS,
  onShare,
  children = "Share",
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  // Prepare share data
  const shareData: ShareData = React.useMemo(() => ({
    url: url || (typeof window !== 'undefined' ? window.location.href : ''),
    title: title || (typeof document !== 'undefined' ? document.title : ''),
    text,
    files
  }), [url, title, text, files]);

  // Check if native sharing is available
  const canUseNativeShare = React.useMemo(() => {
    if (typeof navigator === 'undefined' || !navigator.share) return false;
    
    // Check if files are supported if files provided
    if (files && files.length > 0) {
      return navigator.canShare && navigator.canShare({ files });
    }
    
    return true;
  }, [files]);

  const handleNativeShare = async () => {
    if (!canUseNativeShare) return false;

    try {
      await navigator.share(shareData);
      onShare?.(true, 'native');
      setSuccessMessage('Content shared successfully!');
      setShowSuccess(true);
      return true;
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== 'AbortError') {
        console.warn('Native share failed:', error);
        onShare?.(false, 'native');
      }
      return false;
    }
  };

  const handleFallbackShare = async (platform: FallbackPlatform) => {
    setAnchorEl(null);

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareData.url || '');
        onShare?.(true, 'copy');
        setSuccessMessage('Link copied to clipboard!');
        setShowSuccess(true);
      } catch (error) {
        console.warn('Copy failed:', error);
        onShare?.(false, 'copy');
      }
      return;
    }

    const config = PLATFORM_CONFIG[platform];
    if (config) {
      const shareUrl = config.getUrl(shareData);
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
      onShare?.(true, platform);
      setSuccessMessage(`Opened ${config.label.replace('Share on ', '').replace('Share via ', '')}`);
      setShowSuccess(true);
    }
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Try native share first
    if (canUseNativeShare) {
      const success = await handleNativeShare();
      if (success) return;
    }

    // Fall back to platform options if enabled
    if (showFallbackOptions) {
      setAnchorEl(event.currentTarget);
    } else {
      // If no fallbacks enabled, try copy as last resort
      await handleFallbackShare('copy');
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<ShareIcon />}
        aria-label={`Share: ${shareData.title || 'content'}`}
        {...rest}
      >
        {children}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {fallbackPlatforms.map((platform) => {
          const config = PLATFORM_CONFIG[platform];
          return (
            <MenuItem
              key={platform}
              onClick={() => handleFallbackShare(platform)}
            >
              <ListItemIcon>
                {config.icon}
              </ListItemIcon>
              <ListItemText primary={config.label} />
            </MenuItem>
          );
        })}
      </Menu>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
          icon={<CheckIcon />}
          sx={{ width: '100%' }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShareButton;