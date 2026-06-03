import './mui-augment.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { SxProps, Theme } from '@mui/material/styles';
import * as React$1 from 'react';
import { ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';
import { S as SectionSize, B as BackgroundBoxProps } from './banner-BqQKO_bT.js';
export { b as BackgroundBox, _ as BannerStatic, a as BannerStaticProps, I as ImageConf, c as SECTION_MIN_H, s as sectionMinHeightSx } from './banner-BqQKO_bT.js';
import { ContainerProps } from '@mui/material/Container';
import { StaticImageDataLike, ImageComponentLike } from './image.js';
export { HtmlImage, UniversalImageProps, isStaticImageDataLike, toImgAttrs } from './image.js';
export { BodyTextProps, MainTitle, MainTitleBlock, MainTitleProps, PageTitle, PageTitleLabel, SectionTitle, SectionTitleLabel, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, Title, TitleLabel, TitleLabelProps, TitleProps, TitleTypes } from './typography.js';
import Button, { ButtonProps } from '@mui/material/Button';
import { IconButtonProps } from '@mui/material/IconButton';
import { L as LinkTypeComponent, D as DrawerMenuTree, R as RenderDrawerMenuNode } from './index-Bn8Bi7Lw.js';
export { A as AnyDrawerMenuNode, U as AnyNavigationNode, a0 as BreadMenu, a1 as BreadMenuProps, r as DefaultDrawerMenuRenderingProps, M as DefaultDropDownMenuRenderingProps, a2 as DefaultLinkLike, n as DrawerMenuGroup, v as DrawerMenuGroupNode, o as DrawerMenuGroupProps, j as DrawerMenuLink, w as DrawerMenuLinkNode, k as DrawerMenuLinkProps, x as DrawerMenuNodeKind, y as DrawerMenuNodeMap, l as DrawerMenuRoot, m as DrawerMenuRootProps, z as DrawerMenuTreeNode, s as DrawerMenuTreeOverrides, B as DropDown, E as DropDownGroup, F as DropDownGroupProps, G as DropDownLink, I as DropDownLinkProps, C as DropDownMenuProps, O as DropDownMenuRenderContext, Q as DropDownMenuRenderContextType, T as DropDownMenuSelectors, H as Header, b as HeaderDrawer, c as HeaderDrawerProps, f as HeaderLogo, g as HeaderLogoProps, d as HeaderMenu, e as HeaderMenuProps, h as HeaderMinimal, i as HeaderMinimalProps, a as HeaderProps, V as NavigationBarGroupNode, W as NavigationGroupNode, X as NavigationLinkNode, Y as NavigationNodeKind, Z as NavigationNodeMap, _ as NavigationTree, $ as NavigationTreeNode, N as RenderDropDownMenuNode, t as RenderedDrawerMenuRegistry, u as RuntimeDrawerMenuTreeOverrides, p as defaultDrawerMenuRegistry, J as defaultDropDownMenuRegistry, q as defaultRenderDrawerMenuNode, K as defaultRenderDropDownMenuNode, S as getDropDownMenuSelectors, P as useDropDownMenuRenderContext } from './index-Bn8Bi7Lw.js';
import { TextFieldProps } from '@mui/material/TextField';
import { StackProps } from '@mui/material/Stack';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material_SvgIcon from '@mui/material/SvgIcon';
import '@mui/material/Typography';
import '@mui/material/ListItemButton';
import '@mui/material/ListItemIcon';
import '@mui/material/List';
import '@mui/material/Drawer';
import '@mui/material/Divider';
import '@emotion/react';
import '@mui/system';

/**
 * Horizontal/vertical padding wrapper with responsive spacing.
 */
type PadProps = {
    /** When true, shifts larger-screen horizontal emphasis to the right side. */
    reverse?: boolean;
    /** Content rendered inside the padded container. */
    children?: React.ReactNode;
    /** Optional style overrides for the root box. */
    sx?: SxProps<Theme>;
};
declare function Pad({ reverse, children, sx }: PadProps): react_jsx_runtime.JSX.Element;

type SectionProps$1 = BoxProps & {
    /** Preset minimum heights (responsive). Defaults to 'md'. */
    size?: SectionSize;
    /** Center content both vertically and horizontally. Defaults to false. */
    center?: boolean;
    /** Optional id for in-page anchors (TOC / jump links). */
    id?: string;
    /**
     * If true, also sets a *definite* height equal to the size token.
     * Useful for heroes/carousels where absolute layers must fill exactly.
     */
    lockHeight?: boolean;
    children: React$1.ReactNode;
};
/**
 * Structural section wrapper for page composition.
 */
declare function Section({ size, center, lockHeight, sx, children, id, ...rest }: SectionProps$1): react_jsx_runtime.JSX.Element;

/** A single slide in the background carousel. */
type ImageCarousel = {
    /** Image source — a URL string or a Next.js `StaticImageData`-compatible object. */
    image: string | StaticImageDataLike;
    /** CSS `transform` applied to the image (e.g. `'scale(1.05)'` for a Ken Burns effect). */
    transform?: string;
    /** CSS `object-position` for focal-point control (e.g. `'center top'`). */
    objectPosition?: string;
};
/** Carousel timing and appearance configuration passed to {@link BlockCarousel}. */
type CarouselProps = {
    /** Ordered list of slides. */
    images: ImageCarousel[];
    /** Time each slide is fully visible, in milliseconds. @defaultValue 5000 */
    interval?: number;
    /** Crossfade duration in milliseconds. @defaultValue 900 */
    transitionDuration?: number;
    /** CSS color string for the overlay tint (e.g. `'rgba(0,0,0,0.2)'`). @defaultValue `'rgba(0,0,0,0.2)'` */
    overlayColor?: string;
    /** Number of slides to mark `priority` for eager loading. @defaultValue 2 */
    preloadFirst?: number;
};
/** Props for {@link BlockCarousel}. */
type CarouselConfig = {
    /** Carousel timing and image list. Omit to render no background. */
    config?: CarouselProps;
    /** Foreground content rendered on top of the carousel (titles, CTAs, etc.). */
    children: React$1.ReactNode;
    /** Props forwarded to the foreground `Container`. */
    containerProps?: ContainerProps;
    /** Props forwarded to the outermost `Box` wrapper. */
    rootProps?: BoxProps;
    /** Image rendering component (e.g. Next.js `Image`). */
    ImageComponent: ImageComponentLike;
};
declare const _default$3: React$1.NamedExoticComponent<CarouselConfig>;

/** Props for {@link BannerCarousel}. */
type BannerCarouselProps = {
    /**
     * Carousel configuration (image list, timing, overlay).
     * This is the full {@link CarouselProps} object, not just an image array.
     */
    images: CarouselProps;
    /** Band height token. @defaultValue `'micro'` */
    size?: SectionSize;
    /** HTML `id` on the `Section` root. Omit to avoid duplicate IDs when multiple banners appear on one page. */
    id?: string;
    /** Foreground content rendered over the carousel (titles, CTAs, etc.). */
    children: React$1.ReactNode;
    /** Image rendering component (e.g. Next.js `Image`). */
    ImageComponent: ImageComponentLike;
};
declare const _default$2: React$1.NamedExoticComponent<BannerCarouselProps>;

/** Props for {@link DynamicTransition}. */
type DynamicTransitionProps = {
    /** Ordered list of React nodes to cycle through as slides. */
    frames: React$1.ReactNode[];
    /** Time each slide is fully visible, in milliseconds. @defaultValue 2000 */
    interval?: number;
    /** Crossfade duration in milliseconds. @defaultValue 1000 */
    transitionDuration?: number;
    /** Index of the slide shown first. Clamped to valid range. @defaultValue 0 */
    startIndex?: number;
    /** Props forwarded to the root `Box` wrapper. */
    boxProps?: BoxProps;
};
declare const _default$1: React$1.NamedExoticComponent<DynamicTransitionProps>;

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
interface ActionButtonProps extends ButtonProps {
    icon?: React$1.ReactNode;
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
declare const ActionButton: React$1.FC<ActionButtonProps>;

/**
 * GetInTouch
 *
 * Standard contact CTA that bundles common “contact us” actions (e.g. phone/email)
 * into a single component.
 *
 * Exact behavior depends on your project conventions (routes, email/phone targets),
 * but the intent is to centralize the UX so every page uses the same contact affordance.
 */
/**
 * GetInTouch - Standardized contact call-to-action button component
 *
 * A pre-built contact button that provides consistent styling and behavior
 * across the application. Built on ActionButton with optimized defaults for
 * contact scenarios, featuring a phone icon and standardized sizing.
 *
 * Component Features:
 * - Pre-configured PhoneIcon for universal contact recognition
 * - Small size optimization for secondary action contexts
 * - Semantic link to "/contact" route for proper navigation
 * - Zero-configuration implementation for rapid deployment
 * - Consistent styling that integrates with any theme
 * - Accessibility-compliant with clear action intent
 *
 * Technical Implementation:
 * - Built on ActionButton for consistent behavior and security
 * - Uses Material-UI PhoneIcon for cross-platform compatibility
 * - Leverages internal routing (no external link attributes)
 * - Minimal bundle impact with shared component dependencies
 * - Server-side rendering compatible
 *
 * Design Philosophy:
 * - Follows established UX patterns for contact actions
 * - Non-intrusive sizing suitable for various layout contexts
 * - Clear visual hierarchy as secondary call-to-action
 * - Universal phone icon provides immediate recognition
 * - Complements primary action buttons without competition
 *
 * Customization:
 * While this component uses standard defaults, it can be easily customized
 * by creating a new component based on ActionButton with different props:
 *
 * @returns {React.ReactElement} Pre-configured contact button
 *
 * @example
 * // Basic usage in navigation
 * <AppBar>
 *   <Toolbar>
 *     <Logo />
 *     <Box sx={{ flexGrow: 1 }} />
 *     <GetInTouch />
 *   </Toolbar>
 * </AppBar>
 *
 * @example
 * // Footer contact section
 * <Footer>
 *   <Container>
 *     <Grid container spacing={4}>
 *       <Grid item xs={12} md={3}>
 *         <Typography variant="h6" gutterBottom>
 *           Contact
 *         </Typography>
 *         <Stack spacing={2}>
 *           <Typography variant="body2">
 *             Ready to discuss your project?
 *           </Typography>
 *           <GetInTouch />
 *         </Stack>
 *       </Grid>
 *     </Grid>
 *   </Container>
 * </Footer>
 *
 * @example
 * // Product card secondary action
 * <Card>
 *   <CardContent>
 *     <Typography variant="h5">Premium Service</Typography>
 *     <Typography variant="body2">
 *       Custom solutions for your business needs.
 *     </Typography>
 *   </CardContent>
 *   <CardActions>
 *     <Button variant="contained" fullWidth>
 *       Learn More
 *     </Button>
 *     <GetInTouch />
 *   </CardActions>
 * </Card>
 *
 * @example
 * // Hero section with dual actions
 * <HeroSection>
 *   <Container>
 *     <Stack spacing={4} alignItems="center">
 *       <Typography variant="h1">
 *         Transform Your Business
 *       </Typography>
 *       <Typography variant="h5" color="text.secondary">
 *         Professional solutions tailored to your needs
 *       </Typography>
 *       <Stack direction="row" spacing={2}>
 *         <Button variant="contained" size="large">
 *           Get Started
 *         </Button>
 *         <GetInTouch />
 *       </Stack>
 *     </Stack>
 *   </Container>
 * </HeroSection>
 *
 * @example
 * // Mobile-optimized contact trigger
 * <Box sx={{
 *   position: 'fixed',
 *   bottom: 16,
 *   right: 16,
 *   display: { xs: 'block', md: 'none' } // Mobile only
 * }}>
 *   <GetInTouch />
 * </Box>
 *
 * @example
 * // Service page consultation request
 * <ServiceDescription>
 *   <Typography variant="h4" gutterBottom>
 *     Web Development Services
 *   </Typography>
 *   <Typography variant="body1" paragraph>
 *     We build modern, responsive websites that drive results.
 *   </Typography>
 *   <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
 *     <Button variant="contained" color="primary">
 *       View Portfolio
 *     </Button>
 *     <GetInTouch />
 *   </Stack>
 * </ServiceDescription>
 *
 * @example
 * // About page team contact
 * <TeamSection>
 *   <Typography variant="h3" gutterBottom>
 *     Meet Our Team
 *   </Typography>
 *   <Typography variant="body1" paragraph>
 *     Our experienced professionals are ready to help you succeed.
 *   </Typography>
 *   <GetInTouch />
 * </TeamSection>
 */
declare const GetInTouch: () => react_jsx_runtime.JSX.Element;

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

/** Props for {@link CallToActionButton}. */
interface CallToActionButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
    /** Shows spinner content and disables clicks. */
    loading?: boolean;
    /** Shows temporary success content. The caller controls when this becomes true. */
    success?: boolean;
    /** Milliseconds to keep success content visible before falling back to normal content. */
    successDuration?: number;
    /** Content shown next to the spinner while loading. Falls back to children. */
    loadingText?: React$1.ReactNode;
    /** Content shown next to the check icon while successful. Falls back to children. */
    successText?: React$1.ReactNode;
    /** Icon rendered before children in the normal state. */
    startIcon?: React$1.ReactNode;
    /** Icon rendered after children in the normal state. */
    endIcon?: React$1.ReactNode;
}
/** Button with built-in loading and temporary success presentation. */
declare const CallToActionButton: React$1.FC<CallToActionButtonProps>;

/**
 * DownloadButton
 *
 * File download button with optional “file meta” UI and lightweight progress
 * feedback.
 *
 * This component triggers a browser download for `href` and can display file type
 * and size hints. It also provides callbacks for “start” and “complete” to hook
 * into analytics.
 *
 * @example
 * ```tsx
 * <DownloadButton href="/docs/report.pdf" fileName="report.pdf" fileType="pdf" />
 * ```
 */

/**
 * File type enumeration for icon and styling selection
 *
 * @enum {string}
 */
type FileType = 'pdf' | 'doc' | 'image' | 'video' | 'audio' | 'zip' | 'app' | 'data' | 'unknown';
/**
 * Props interface for DownloadButton component
 *
 * Extends Material-UI ButtonProps with download-specific functionality
 * including file metadata, progress tracking, and user experience enhancements.
 *
 * @interface DownloadButtonProps
 * @extends {ButtonProps} All Material-UI Button properties
 *
 * @property {string} href - Download URL or file path
 *   - Direct file URLs for immediate downloads
 *   - API endpoints for generated/dynamic files
 *   - External URLs with proper CORS handling
 *   - Relative paths for internal file assets
 *
 * @property {string} [fileName] - Display name for the file
 *   - User-friendly file description
 *   - Shown in download UI and metadata
 *   - Used for accessibility context
 *   - Falls back to URL filename if not provided
 *
 * @property {string} [fileSize] - Human-readable file size
 *   - Formatted size string (e.g., "2.3 MB", "1.5 GB")
 *   - Helps users plan download bandwidth
 *   - Displayed as chip or secondary text
 *   - Optional but recommended for user experience
 *
 * @property {FileType} [fileType] - File type for icon selection
 *   - Auto-detects from file extension if not provided
 *   - Determines appropriate icon and styling
 *   - Supports common file categories
 *   - Falls back to generic download icon
 *
 * @property {boolean} [showProgress=false] - Enable download progress tracking
 *   - Shows linear progress bar during download
 *   - Requires browser support for download progress
 *   - Enhances UX for large file downloads
 *   - Automatically handles progress states
 *
 * @property {boolean} [showFileSize=true] - Display file size chip
 *   - Shows file size as visual indicator
 *   - Helps users understand download commitment
 *   - Can be hidden for cleaner presentation
 *   - Responsive display based on button size
 *
 * @property {() => void} [onDownloadStart] - Callback when download begins
 *   - Analytics tracking for download events
 *   - Custom handling before download starts
 *   - User notification or confirmation
 *   - Download preparation logic
 *
 * @property {() => void} [onDownloadComplete] - Callback when download finishes
 *   - Success analytics and user feedback
 *   - Post-download actions or instructions
 *   - Download completion notifications
 *   - Follow-up action triggers
 *
 * @example
 * // Comprehensive download button configuration
 * const downloadProps: DownloadButtonProps = {
 *   href: "/files/annual-report-2024.pdf",
 *   fileName: "Annual Report 2024",
 *   fileSize: "4.7 MB",
 *   fileType: "pdf",
 *   showProgress: true,
 *   showFileSize: true,
 *   variant: "contained",
 *   color: "primary",
 *   onDownloadStart: () => analytics.track('download_started'),
 *   onDownloadComplete: () => showSuccessNotification()
 * };
 */
/** Props for {@link DownloadButton}. */
interface DownloadButtonProps extends Omit<ButtonProps, 'href' | 'startIcon'> {
    href: string;
    fileName?: string;
    fileSize?: string;
    fileType?: FileType;
    showProgress?: boolean;
    showFileSize?: boolean;
    onDownloadStart?: () => void;
    onDownloadComplete?: () => void;
}
/**
 * DownloadButton - Enhanced file download button with progress and metadata
 *
 * A comprehensive download button component that provides file information,
 * download progress tracking, and success feedback. Optimized for various
 * file types with appropriate icons and user experience enhancements.
 *
 * Download Process:
 * 1. User clicks button triggering onDownloadStart callback
 * 2. Progress bar shows (if enabled) during download
 * 3. Browser handles file download with proper attribution
 * 4. Success state shows with completion callback
 * 5. Button returns to normal state after feedback period
 *
 * Accessibility Features:
 * - Semantic download context with proper ARIA labels
 * - File size and type information for screen readers
 * - Keyboard navigation and focus management
 * - High contrast support for progress indicators
 *
 * Performance Considerations:
 * - Efficient file type detection using extension parsing
 * - Minimal re-renders with proper state management
 * - Optimized icon selection with selective imports
 * - Progressive enhancement for download progress
 *
 * @param {DownloadButtonProps} props - Component props
 * @returns {React.ReactElement} Enhanced download button
 *
 * @example
 * // Document library download
 * <DownloadButton
 *   href="/documents/user-guide.pdf"
 *   fileName="User Guide"
 *   fileSize="3.2 MB"
 *   variant="outlined"
 *   fullWidth
 *   onDownloadStart={() => {
 *     analytics.track('guide_downloaded');
 *     setDownloadCount(prev => prev + 1);
 *   }}
 * >
 *   Download User Guide
 * </DownloadButton>
 *
 * @example
 * // Mobile app download
 * <DownloadButton
 *   href="https://releases.myapp.com/mobile-app.apk"
 *   fileName="Mobile App"
 *   fileSize="28.5 MB"
 *   fileType="app"
 *   showProgress
 *   variant="contained"
 *   color="success"
 *   size="large"
 *   sx={{
 *     background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
 *     '&:hover': {
 *       background: 'linear-gradient(45deg, #45a049, #7CB342)',
 *     }
 *   }}
 * >
 *   Download for Android
 * </DownloadButton>
 *
 * @example
 * // Data export with custom handling
 * <DownloadButton
 *   href="/api/export/user-data.csv"
 *   fileName="My Data Export"
 *   fileSize="892 KB"
 *   fileType="data"
 *   showFileSize={false}
 *   startIcon={<GetAppIcon />}
 *   onDownloadStart={() => {
 *     toast.info('Preparing your data export...');
 *   }}
 *   onDownloadComplete={() => {
 *     toast.success('Data exported successfully!');
 *   }}
 * >
 *   Export My Data
 * </DownloadButton>
 */
declare const DownloadButton: React$1.FC<DownloadButtonProps>;

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

/**
 * Supported social media platforms
 *
 * @enum {string}
 */
type SocialPlatform = 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'github' | 'whatsapp' | 'email' | 'generic';
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
interface SocialButtonProps extends Omit<ActionButtonProps, 'icon'> {
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
declare const SocialButton: React$1.FC<SocialButtonProps>;

/**
 * BackButton
 *
 * Framework-agnostic “go back” button with graceful fallbacks.
 *
 * Routing options (in priority order):
 * 1) `router` prop (per-instance)
 * 2) {@link RouterProvider} context (app-wide)
 * 3) browser history (`window.history.back()`), optionally followed by `fallbackHref`
 *
 * Use this to keep UI code independent of Next.js / React Router while still
 * supporting both.
 *
 * @example
 * ```tsx
 * <RouterProvider router={{ back: () => router.back(), push: router.push }}>
 *   <BackButton fallbackHref="/products">Back</BackButton>
 * </RouterProvider>
 * ```
 */

/**
 * Router interface for framework-agnostic navigation
 *
 * @interface Router
 */
interface Router {
    back: () => void;
    push: (path: string) => void;
}
/**
 * Router provider component
 * Use this to provide router implementation to BackButton components
 *
 * @example
 * // Next.js App Router
 * import { useRouter } from 'next/navigation';
 *
 * function App() {
 *   const nextRouter = useRouter();
 *   const router = {
 *     back: () => nextRouter.back(),
 *     push: (path: string) => nextRouter.push(path)
 *   };
 *
 *   return (
 *     <RouterProvider router={router}>
 *       <YourApp />
 *     </RouterProvider>
 *   );
 * }
 *
 * @example
 * // React Router v6
 * import { useNavigate } from 'react-router-dom';
 *
 * function App() {
 *   const navigate = useNavigate();
 *   const router = {
 *     back: () => navigate(-1),
 *     push: (path: string) => navigate(path)
 *   };
 *
 *   return (
 *     <RouterProvider router={router}>
 *       <YourApp />
 *     </RouterProvider>
 *   );
 * }
 */
declare const RouterProvider: React$1.FC<{
    router: Router;
    children: React$1.ReactNode;
}>;
/**
 * Props interface for BackButton component
 *
 * Extends Material-UI ButtonProps with navigation-specific functionality
 * including router integration, fallback options, and custom handlers.
 *
 * @interface BackButtonProps
 * @extends {Omit<ButtonProps, 'startIcon' | 'onClick'>} ButtonProps without conflicting props
 *
 * @property {() => void} [onBack] - Custom back navigation handler
 *   - Override default browser/router navigation
 *   - Useful for multi-step forms and complex navigation flows
 *   - Receives no parameters, should handle navigation internally
 *   - Takes precedence over automatic navigation methods
 *
 * @property {string} [fallbackHref] - Fallback URL when no history available
 *   - Used when browser history is empty or unavailable
 *   - Provides safe navigation destination for direct page access
 *   - Should be a valid route within the application
 *   - Commonly used for listing pages or home routes
 *
 * @property {boolean} [useHistory=true] - Use browser history for navigation
 *   - Leverages browser's back() method for natural navigation
 *   - Preserves scroll position and form state
 *   - Recommended for most navigation scenarios
 *   - Can be disabled for custom routing behavior
 *
 * @property {boolean} [showIcon=true] - Display back arrow icon
 *   - Shows Material-UI ArrowBackIcon before text
 *   - Provides visual navigation context
 *   - Can be hidden for text-only navigation
 *   - Maintains accessibility regardless of icon visibility
 *
 * @property {string} [ariaLabel] - Accessibility label for screen readers
 *   - Describes navigation destination or context
 *   - Enhances screen reader experience
 *   - Falls back to button text if not provided
 *   - Important for icon-only buttons
 *
 * @property {Router} [router] - Custom router instance
 *   - Override the context router with a specific instance
 *   - Useful for component-specific routing logic
 *   - Falls back to context router or browser history
 *   - Allows per-component router customization
 *
 * @example
 * // Comprehensive back button configuration
 * const backButtonProps: BackButtonProps = {
 *   onBack: handleCustomNavigation,
 *   fallbackHref: "/dashboard",
 *   useHistory: true,
 *   showIcon: true,
 *   ariaLabel: "Return to product listing",
 *   variant: "outlined",
 *   size: "medium",
 *   disabled: isFormDirty
 * };
 */
/** Props for {@link BackButton}. */
interface BackButtonProps extends Omit<ButtonProps, 'startIcon' | 'onClick'> {
    onBack?: () => void;
    fallbackHref?: string;
    useHistory?: boolean;
    showIcon?: boolean;
    ariaLabel?: string;
    router?: Router;
}
/**
 * BackButton - Framework-agnostic navigation back button
 *
 * A comprehensive navigation button that provides intelligent back navigation
 * with multiple fallback strategies. Works with any React router or falls back
 * to browser history while supporting custom navigation flows.
 *
 * Navigation Priority:
 * 1. Custom onBack handler (if provided)
 * 2. Custom router instance (if provided via props)
 * 3. Context router (if provided via RouterProvider)
 * 4. Browser history navigation (universal fallback)
 * 5. Fallback URL navigation (if provided)
 * 6. Default to home page ("/")
 *
 * Framework Integration Examples:
 * - Next.js: Use RouterProvider with Next.js router
 * - React Router: Use RouterProvider with React Router hooks
 * - Custom routers: Implement Router interface
 * - Static sites: Works with browser history only
 *
 * Accessibility Features:
 * - Semantic navigation context with proper ARIA labels
 * - Keyboard navigation and focus management
 * - Screen reader support with meaningful descriptions
 * - High contrast support for visual clarity
 *
 * Performance Considerations:
 * - Efficient router integration with context pattern
 * - Minimal re-renders with proper dependency management
 * - Optimized for both mobile and desktop interactions
 * - Progressive enhancement with graceful fallbacks
 *
 * @param {BackButtonProps} props - Component props
 * @param {() => void} [props.onBack] - Custom navigation handler
 * @param {string} [props.fallbackHref] - Fallback navigation URL
 * @param {boolean} [props.useHistory=true] - Enable browser history navigation
 * @param {boolean} [props.showIcon=true] - Display back arrow icon
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {Router} [props.router] - Custom router instance
 * @param {React.ReactNode} props.children - Button text content
 * @param {ButtonProps} ...rest - All other Material-UI Button props
 *
 * @returns {React.ReactElement} Enhanced navigation back button
 *
 * @example
 * // Basic usage (works with any framework)
 * <BackButton fallbackHref="/products">
 *   Back to Products
 * </BackButton>
 *
 * @example
 * // With Next.js RouterProvider setup
 * import { useRouter } from 'next/navigation';
 * import { RouterProvider } from '@/components/buttons/BackButton';
 *
 * function App() {
 *   const nextRouter = useRouter();
 *   const router = {
 *     back: () => nextRouter.back(),
 *     push: (path: string) => nextRouter.push(path)
 *   };
 *
 *   return (
 *     <RouterProvider router={router}>
 *       <BackButton>Back</BackButton>
 *     </RouterProvider>
 *   );
 * }
 *
 * @example
 * // With React Router v6
 * import { useNavigate } from 'react-router-dom';
 * import { RouterProvider } from '@/components/buttons/BackButton';
 *
 * function App() {
 *   const navigate = useNavigate();
 *   const router = {
 *     back: () => navigate(-1),
 *     push: (path: string) => navigate(path)
 *   };
 *
 *   return (
 *     <RouterProvider router={router}>
 *       <BackButton>Back</BackButton>
 *     </RouterProvider>
 *   );
 * }
 *
 * @example
 * // Custom navigation handler
 * <BackButton
 *   onBack={() => {
 *     // Custom logic (form validation, state cleanup, etc.)
 *     if (formIsDirty) {
 *       showConfirmDialog();
 *     } else {
 *       navigateBack();
 *     }
 *   }}
 * >
 *   Back
 * </BackButton>
 */
declare const BackButton: React$1.FC<BackButtonProps>;

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

/**
 * Share data interface matching Web Share API
 *
 * @interface ShareData
 */
interface ShareData {
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
type FallbackPlatform = 'twitter' | 'linkedin' | 'facebook' | 'email' | 'copy';
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
interface ShareButtonProps extends Omit<ButtonProps, 'onClick'> {
    url?: string;
    title?: string;
    text?: string;
    files?: File[];
    showFallbackOptions?: boolean;
    fallbackPlatforms?: FallbackPlatform[];
    onShare?: (success: boolean, platform?: string) => void;
}
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
declare const ShareButton: React$1.FC<ShareButtonProps>;

/**
 * SubscribeButton
 *
 * Email subscription button with optional inline input + validation.
 * You provide `onSubscribe(email)`; the component manages the small UI state
 * machine (idle → loading → success/error).
 *
 * @example
 * ```tsx
 * <SubscribeButton onSubscribe={(email) => api.subscribe(email)}>
 *   Subscribe
 * </SubscribeButton>
 * ```
 */

/** Props for {@link SubscribeButton}. */
interface SubscribeButtonProps extends Omit<ButtonProps, 'onClick'> {
    onSubscribe: (email: string) => Promise<boolean>;
    placeholder?: string;
    successMessage?: string;
    errorMessage?: string;
    requireEmail?: boolean;
    showInlineForm?: boolean;
}
declare const SubscribeButton: React$1.FC<SubscribeButtonProps>;

/**
 * BookingButton
 *
 * Opinionated booking CTA built on top of {@link ActionButton}. It defaults to a
 * sensible booking URL and adds an accessible `aria-label` derived from the
 * service type and duration.
 *
 * @example
 * ```tsx
 * <BookingButton bookingUrl="/book" serviceType="consultation" duration="30 min" />
 * ```
 */

/** Props for {@link BookingButton}. */
interface BookingButtonProps extends ActionButtonProps {
    bookingUrl?: string;
    serviceType?: string;
    duration?: string;
}
declare const BookingButton: React$1.FC<BookingButtonProps>;

/**
 * WhatsAppButton
 *
 * Convenience wrapper around {@link ActionButton} that constructs a WhatsApp
 * “click to chat” URL from a phone number and optional pre-filled message.
 *
 * @example
 * ```tsx
 * <WhatsAppButton phone="+15551234567" message="Hi! I have a question." />
 * ```
 */

/** Props for {@link WhatsAppButton}. */
interface WhatsAppButtonProps extends Omit<ActionButtonProps, 'href'> {
    phone: string;
    message?: string;
    countryCode?: string;
}
declare const WhatsAppButton: React$1.FC<WhatsAppButtonProps>;

/**
 * FavoriteButton
 *
 * Toggle-style icon button for “favorite / bookmark / like” interactions.
 * The parent owns the state; this component simply renders the UI and reports
 * toggles via `onToggle`.
 *
 * @example
 * ```tsx
 * <FavoriteButton
 *   isFavorited={isSaved}
 *   onToggle={(next) => setIsSaved(next)}
 *   favoriteType="bookmark"
 * />
 * ```
 */

type FavoriteType = 'heart' | 'bookmark' | 'like';
/** Props for {@link FavoriteButton}. */
interface FavoriteButtonProps extends Omit<IconButtonProps, 'onClick'> {
    isFavorited?: boolean;
    onToggle: (isFavorited: boolean, itemId?: string) => void;
    itemId?: string;
    favoriteType?: FavoriteType;
    showTooltip?: boolean;
    tooltipText?: {
        favorited: string;
        unfavorited: string;
    };
}
declare const FavoriteButton: React$1.FC<FavoriteButtonProps>;

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

/** Props for {@link CopyButton}. */
interface CopyButtonProps extends Omit<ButtonProps, 'onClick' | 'onCopy'> {
    text: string;
    successMessage?: string;
    showTooltip?: boolean;
    iconOnly?: boolean;
    onCopy?: (success: boolean) => void;
}
declare const CopyButton: React$1.FC<CopyButtonProps>;

/** Props for {@link ClickTextImage}. */
type ClickTextImageProps = {
    /**
     * Teaser title shown on top of the image when the card is closed.
     * Accepts rich React content (e.g. multiple Typography lines).
     */
    title: React$1.ReactNode;
    /**
     * Background image source for the card.
     * Supports either a URL string or a Next.js `StaticImageData`-compatible object.
     */
    image: StaticImageDataLike | string;
    /**
     * Detail content shown when the card is opened.
     * The content area is scrollable to support long text.
     */
    text: React$1.ReactNode | string;
    /**
     * Image renderer (e.g. Next.js `Image`), passed through to {@link BackgroundBox}.
     */
    ImageComponent: ImageComponentLike;
};
declare const _default: React$1.NamedExoticComponent<ClickTextImageProps>;

type InlineTextProps = {
    body: string;
};
declare function InlineText({ body }: InlineTextProps): react_jsx_runtime.JSX.Element;

type InlineStrongProps = {
    body: string;
};
declare function InlineStrong({ body }: InlineStrongProps): react_jsx_runtime.JSX.Element;

type InlineEmphasisProps = {
    body: string;
};
declare function InlineEmphasis({ body }: InlineEmphasisProps): react_jsx_runtime.JSX.Element;

type InlineStrongEmphasisProps = {
    body: string;
};
declare function InlineStrongEmphasis({ body }: InlineStrongEmphasisProps): react_jsx_runtime.JSX.Element;

type InlineCodeProps = {
    body: string;
};
declare function InlineCode({ body }: InlineCodeProps): react_jsx_runtime.JSX.Element;

type InlineLinkProps = {
    body: string;
    href: string;
};
declare function InlineLink({ body, href }: InlineLinkProps): react_jsx_runtime.JSX.Element;

type RichTextProps = {
    inlineNodes: AnyInlineTextNode[];
};
declare function RichText({ inlineNodes }: RichTextProps): react_jsx_runtime.JSX.Element;

type SubSectionProps = {
    title: RichTextBlock;
    content: RichTextBlock[];
    hasDivider?: boolean;
    contentGap?: BoxProps['gap'];
    collapsible?: boolean;
    defaultOpen?: boolean;
};
declare function SubSection({ title, content: richTextBlocks, hasDivider, contentGap, collapsible, defaultOpen, }: SubSectionProps): react_jsx_runtime.JSX.Element;

type SectionProps = {
    title: RichTextBlock;
    content: (RichTextBlock | SubSectionBlock)[];
    collapsible?: boolean;
    defaultOpen: boolean;
    hasDivider?: boolean;
    contentGap?: BoxProps['gap'];
};

type SectionKind = 'section';
type SubSectionKind = 'subSection';
type RichTextKind = 'richText';
type TextKind = 'text';
type StrongKind = 'strong';
type EmphasisKind = 'emphasis';
type StrongEmphasisKind = 'strongEmphasis';
type CodeKind = 'code';
type LinkKind = 'link';
type InlineTextKind = TextKind | StrongKind | EmphasisKind | StrongEmphasisKind | CodeKind | LinkKind;
type TextNodeKind = InlineTextKind | RichTextKind | SubSectionKind | SectionKind;
type BlockTextKind = SectionKind | SubSectionKind;
type SingleTextNode<K extends InlineTextKind> = {
    id: string;
    type: K;
    body: string;
};
type InlineTextNodesMap = {
    text: SingleTextNode<TextKind>;
    strong: SingleTextNode<StrongKind>;
    emphasis: SingleTextNode<EmphasisKind>;
    strongEmphasis: SingleTextNode<StrongEmphasisKind>;
    code: SingleTextNode<CodeKind>;
    link: SingleTextNode<LinkKind> & {
        href: string;
    };
};
type AnyInlineTextNode = InlineTextNodesMap[InlineTextKind];
type RichTextBlock = {
    id: string;
    type: RichTextKind;
    content: AnyInlineTextNode[];
};
type SubSectionBlock = {
    id: string;
    title: RichTextBlock;
    type: SubSectionKind;
    content: RichTextBlock[];
};
type SectionBlock = {
    id: string;
    type: SectionKind;
    title: RichTextBlock;
    content: (RichTextBlock | SubSectionBlock)[];
};
type TextNodesMap = InlineTextNodesMap & {
    richText: RichTextBlock;
    subSection: SubSectionBlock;
    section: SectionBlock;
};
type ContentTreeNode = RichTextBlock | SectionBlock | SubSectionBlock;
type ContentTree = {
    type: 'root';
    id: 'root';
    children: ContentTreeNode[];
};
type OverridableTypes = SectionKind | SubSectionKind;
type NonOverridableContentProps = 'title' | 'content';
type IdsOfType<T, I> = I extends {
    type: T;
    id: string;
} ? I['id'] : I extends readonly (infer C)[] ? IdsOfType<T, C> : I extends Record<string, infer C> ? IdsOfType<T, C> : never;
type TextTreeOverrides<T extends ContentTree> = {
    [K in OverridableTypes]?: Partial<{
        [ID in Extract<IdsOfType<K, T>, string>]: Partial<Omit<DefaultRenderingPropsMap[K], NonOverridableContentProps>>;
    }>;
};
type AnyTextNode = TextNodesMap[TextNodeKind];
type DefaultRenderingPropsMap = {
    text: InlineTextProps;
    strong: InlineStrongProps;
    emphasis: InlineEmphasisProps;
    strongEmphasis: InlineStrongEmphasisProps;
    code: InlineCodeProps;
    link: InlineLinkProps;
    richText: RichTextProps;
    subSection: SubSectionProps;
    section: SectionProps;
};
type RenderedTextRegistryEntry<K extends TextNodeKind> = {
    type: K;
    rendering: ({ node, overrides, }: {
        node: TextNodesMap[K];
        overrides?: Partial<DefaultRenderingPropsMap[K]>;
    }) => ReactNode;
};
type RenderedTextRegistry = {
    [K in TextNodeKind]: RenderedTextRegistryEntry<K>;
};
declare const defaultRenderedRegistry: {
    text: {
        type: "text";
        rendering({ node, overrides }: {
            node: SingleTextNode<"text">;
            overrides?: Partial<InlineTextProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    strong: {
        type: "strong";
        rendering({ node, overrides }: {
            node: SingleTextNode<"strong">;
            overrides?: Partial<InlineStrongProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    emphasis: {
        type: "emphasis";
        rendering({ node, overrides }: {
            node: SingleTextNode<"emphasis">;
            overrides?: Partial<InlineEmphasisProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    strongEmphasis: {
        type: "strongEmphasis";
        rendering({ node, overrides }: {
            node: SingleTextNode<"strongEmphasis">;
            overrides?: Partial<InlineStrongEmphasisProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    code: {
        type: "code";
        rendering({ node, overrides }: {
            node: SingleTextNode<"code">;
            overrides?: Partial<InlineCodeProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    link: {
        type: "link";
        rendering({ node, overrides }: {
            node: SingleTextNode<"link"> & {
                href: string;
            };
            overrides?: Partial<InlineLinkProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    richText: {
        type: "richText";
        rendering({ node, overrides }: {
            node: RichTextBlock;
            overrides?: Partial<RichTextProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    subSection: {
        type: "subSection";
        rendering({ node, overrides }: {
            node: SubSectionBlock;
            overrides?: Partial<SubSectionProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    section: {
        type: "section";
        rendering({ node, overrides }: {
            node: SectionBlock;
            overrides?: Partial<SectionProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
};
type RenderTextNode = (args: {
    node: AnyTextNode;
}) => {
    rendered: React.ReactNode;
};
declare function defaultRenderTextNode<T extends ContentTree>({ contentTree, renderedRegistry, textOverrides, }: {
    contentTree: T;
    renderedRegistry?: RenderedTextRegistry;
    textOverrides?: TextTreeOverrides<T>;
}): RenderTextNode;

type ContentTreeViewProps = {
    tree: ContentTree;
};
declare function ContentTreeView({ tree }: ContentTreeViewProps): react_jsx_runtime.JSX.Element;

/**
 * Shape of the value provided by {@link TextTreeRendererContext}.
 *
 * @remarks
 * This context carries *rendering* configuration — visual indicators, the
 * active renderer registry, and the indent strategy.  State management lives
 * separately in {@link TextControllerContext} / {@link TreeTextStore}.
 *
 * Created once per `TextDrawer_Client` mount with values supplied by the
 * parent `TextDrawer` component via props.
 */
type TextTreeRendererContextType = {
    /**
     * React node rendered as the toggle indicator when a section is **open**.
     * Typically `<ExpandLess />` from MUI icons.
     */
    openIndicator: React.ReactNode;
    /**
     * React node rendered as the toggle indicator when a section is **closed**.
     * Typically `<ExpandMore />` from MUI icons.
     */
    closeIndicator: React.ReactNode;
    nodesRenderer: RenderTextNode;
    LinkComponent: LinkTypeComponent;
};
/**
 * React context that carries renderer configuration down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer_Client`.  Consumed by `TextElement` and
 * `TextOpenClose` via {@link useTextTreeRendererContext}.
 *
 * Do **not** consume this context directly — use the hook instead.
 */
declare const TextTreeRendererContext: React$1.Context<TextTreeRendererContextType | null>;
/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
declare function useTextTreeRendererContext(): TextTreeRendererContextType;

type ParseInlineTextOptions = {
    /** Prefix used to generate deterministic inline node ids. */
    idPrefix?: string;
};
/**
 * Parses a small markdown-ish inline syntax into renderable inline nodes.
 *
 * Supported syntax:
 * - `plain text`
 * - `` `code` ``
 * - `***strong emphasis***`
 * - `**strong**`
 * - `*emphasis*`
 * - `[label](href)`
 *
 * This parser is intentionally flat: markup inside markup is kept as literal
 * text. Unclosed or malformed markers are emitted as plain text.
 */
declare function parseInlineText(source: string, { idPrefix }?: ParseInlineTextOptions): AnyInlineTextNode[];

/** Props for {@link TwoColumnsFooter}. All slots are optional. */
type TwoColumnsFooterProps = {
    /** Content rendered in the top header band of the footer. */
    header?: React.ReactNode;
    /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
    footer?: React.ReactNode;
    /** First column content. */
    column_1?: React.ReactNode;
    /** Second column content. */
    column_2?: React.ReactNode;
};
/**
 * A footer divided into two content columns, with an optional header band at
 * the top and a footer strip at the bottom.
 *
 * Uses the `header2colFooter` GridCSS catalog entry — a minimal layout suited
 * for simple comparison or side-by-side content (e.g. brand info + contact).
 *
 * @example
 * ```tsx
 * <TwoColumnsFooter
 *   header={<Logo />}
 *   column_1={<BrandInfo />}
 *   column_2={<ContactDetails />}
 *   footer={<Copyright />}
 * />
 * ```
 */
declare function TwoColumnsFooter(props: TwoColumnsFooterProps): react_jsx_runtime.JSX.Element;

/** Props for {@link ThreeColumnsFooter}. All slots are optional. */
type ThreeColumnsFooterProps = {
    /** Content rendered in the top header band of the footer. */
    header?: React.ReactNode;
    /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
    footer?: React.ReactNode;
    /** First column content. */
    column_1?: React.ReactNode;
    /** Second column content. */
    column_2?: React.ReactNode;
    /** Third column content. */
    column_3?: React.ReactNode;
};
/**
 * A footer divided into three equal content columns, with an optional header
 * band at the top and a footer strip at the bottom.
 *
 * The layout is driven by the `footerHeader3Columns` entry in the secondary
 * GridCSS catalog. Pass any React node into each slot — typically navigation
 * link lists, contact details, or a brand logo.
 *
 * @example
 * ```tsx
 * <ThreeColumnsFooter
 *   header={<Logo />}
 *   column_1={<NavList title="Company" links={companyLinks} />}
 *   column_2={<NavList title="Services" links={serviceLinks} />}
 *   column_3={<SocialLinks />}
 *   footer={<Copyright />}
 * />
 * ```
 */
declare function ThreeColumnsFooter(props: ThreeColumnsFooterProps): react_jsx_runtime.JSX.Element;

/** Props for {@link FeaturedColumnsFooter}. All slots are optional. */
type FeaturedColumnsFooterProps = {
    /** Content rendered in the top header band of the footer. */
    header?: React.ReactNode;
    /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
    footer?: React.ReactNode;
    /** First column content. */
    column_1?: React.ReactNode;
    /** Second column content. */
    column_2?: React.ReactNode;
    /** Third column content. */
    column_3?: React.ReactNode;
};
/**
 * A footer with three content columns optimised for feature showcases or
 * service presentations, with an optional header band and footer strip.
 *
 * Uses the `header3colFooter` GridCSS catalog entry. This differs from
 * {@link ThreeColumnsFooter} (`footerHeader3Columns`) in its responsive grid
 * spans — prefer this variant when the three columns represent discrete
 * features, services, or highlights rather than navigation link groups.
 *
 * @example
 * ```tsx
 * <FeaturedColumnsFooter
 *   header={<Logo />}
 *   column_1={<ServiceCard title="Design" />}
 *   column_2={<ServiceCard title="Development" />}
 *   column_3={<ServiceCard title="Support" />}
 *   footer={<Copyright />}
 * />
 * ```
 */
declare function FeaturedColumnsFooter(props: FeaturedColumnsFooterProps): react_jsx_runtime.JSX.Element;

/** Props for {@link FiveColumnsFooter}. All slots are optional. */
type FiveColumnsFooterProps = {
    /** Content rendered in the top header band of the footer. */
    header?: React.ReactNode;
    /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
    footer?: React.ReactNode;
    /** First column content. */
    column_1?: React.ReactNode;
    /** Second column content. */
    column_2?: React.ReactNode;
    /** Third column content. */
    column_3?: React.ReactNode;
    /** Fourth column content. */
    column_4?: React.ReactNode;
    /** Fifth column content. */
    column_5?: React.ReactNode;
};
/**
 * A footer divided into five equal content columns, with an optional header
 * band at the top and a footer strip at the bottom.
 *
 * The layout is driven by the `footerHeader5Columns` entry in the secondary
 * GridCSS catalog. Pass any React node into each slot — typically navigation
 * link lists, contact details, or a brand logo.
 *
 * @example
 * ```tsx
 * <FiveColumnsFooter
 *   header={<Logo />}
 *   column_1={<NavList title="Company" links={companyLinks} />}
 *   column_2={<NavList title="Services" links={serviceLinks} />}
 *   column_3={<NavList title="Support" links={supportLinks} />}
 *   column_4={<NavList title="Legal" links={legalLinks} />}
 *   column_5={<SocialLinks />}
 *   footer={<Copyright />}
 * />
 * ```
 */
declare function FiveColumnsFooter(props: FiveColumnsFooterProps): react_jsx_runtime.JSX.Element;

/**
 * Props for {@link DebouncedTextField}.
 *
 * Extends MUI `TextFieldProps` and adds delayed value notifications.
 */
type DebouncedTextFieldProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
    /**
     * Controlled input value.
     *
     * When provided, the component behaves as a controlled input.
     */
    value?: string;
    /**
     * Initial input value for uncontrolled mode.
     */
    defaultValue?: string;
    /**
     * Delay in milliseconds before invoking {@link DebouncedTextFieldProps.onDebouncedChange}.
     *
     * @defaultValue 500
     */
    debounceMs?: number;
    /**
     * Immediate change handler forwarded from the native input event.
     */
    onChange?: (e: React$1.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Called after the user stops typing for {@link DebouncedTextFieldProps.debounceMs}.
     */
    onDebouncedChange?: (value: string) => void;
    /**
     * Emits latest value on blur when it differs from the last debounced emission.
     *
     * @defaultValue true
     */
    flushOnBlur?: boolean;
};
/**
 * MUI `TextField` wrapper that supports debounced value callbacks.
 *
 * @remarks
 * - Supports controlled (`value`) and uncontrolled (`defaultValue`) modes.
 * - Respects IME composition and defers debounced emits until composition ends.
 * - Optionally flushes pending value on blur.
 */
declare const DebouncedTextField: React$1.FC<DebouncedTextFieldProps>;

/**
 * Props interface for PageLayout component
 *
 * Defines the configuration options for the PageLayout component, providing
 * type-safe prop handling for background rendering, content structure, and
 * Material-UI theme integration.
 *
 * @interface PageLayoutProps
 */
type PageLayoutProps = {
    children: React$1.ReactNode;
    transparent?: boolean;
    sx?: SxProps<Theme>;
};
declare const PageLayout: React$1.FC<PageLayoutProps>;

/**
 * Props for {@link HeroBlock}.
 */
type HeroBlockProps = Omit<BackgroundBoxProps, 'children' | 'imageConf'> & {
    /**
     * Primary heading content shown in the text column.
     */
    header?: React$1.ReactNode;
    /**
     * Main supporting copy beneath the heading.
     */
    message?: React$1.ReactNode;
    /**
     * Secondary strapline beneath `message`.
     */
    subTitle?: React$1.ReactNode;
    /**
     * Optional image caption rendered below the media.
     */
    caption?: string;
    /**
     * Hero image source.
     */
    image: string | StaticImageDataLike;
    /**
     * Accessible alternative text for `image`.
     */
    alt?: string;
    /**
     * Marks the image as high-priority for above-the-fold loading.
     */
    priority?: boolean;
};
/**
 * Two-column hero section with heading/copy on the left and responsive media on the right.
 */
declare const HeroBlock: React$1.FC<HeroBlockProps>;

type PresetName = '40-60' | '45-55' | '50-50' | '55-45' | '60-40';
type TextProps = {
    /**q
     * Named preset for common text/media split layouts.
     *
     * @type {PresetName}
     *
     * Presets:
     * Use predefined ratios for common layout patterns:
     * - '40-60': Text-focused layout
     * - '45-55': Slightly text-focused
     * - '50-50': Equal split (default)
     * - '55-45': Slightly media-focused
     * - '60-40': Media-focused layout
     */
    preset?: PresetName;
};
/**
 * Base props shared by all MediaText variants
 *
 * Common properties that apply regardless of media type (image or video).
 * Defines layout behavior, styling, and content structure.
 *
 * @interface BaseProps
 */
type BaseProps = {
    message: React$1.ReactNode;
    backgroundColor?: string;
    reverse?: boolean;
    textSplit?: TextProps;
    pad?: boolean;
    sx?: SxProps<Theme>;
    ImageComponent: ImageComponentLike;
};
type ImageMedia = {
    image: string | StaticImageDataLike;
    /** Explicitly prevent video when using image */
    video?: never;
};
type VideoMedia = {
    video: string;
    /** Explicitly prevent image when using video */
    image?: never;
};
type MediaAndTextProps = BaseProps & (ImageMedia | VideoMedia);
/**
 * MediaText props without message (for specialized use cases)
 *
 * Similar to MediaAndTextProps but with the message prop omitted.
 * Useful for creating wrapper components or specialized layouts.
 *
 * @type MediaAndTextNoMessage
 */
type MediaAndTextNoMessage = Omit<BaseProps, 'message'> & (ImageMedia | VideoMedia);
declare const MediaText: React$1.FC<MediaAndTextProps>;

/**
 * Props for {@link VideoModal}.
 */
type VideoModalProps = {
    /** YouTube video ID, e.g. `dQw4w9WgXcQ`. If provided, `src` is ignored. */
    videoId?: string;
    /** Full iframe `src` (e.g., Vimeo or a YouTube URL with params). */
    src?: string;
    /** Title for the modal header/iframe accessibility. */
    title?: string;
    /** Custom trigger; if omitted, a default Avatar + Button is rendered. */
    trigger?: React$1.ReactNode;
    /** Default trigger: avatar image (string URL or static import). */
    avatarSrc?: string | StaticImageDataLike;
    /** Default trigger: button label. @default "Learn More" */
    buttonLabel?: string;
    /** Default trigger alignment. @default 'flex-end' */
    align?: 'flex-start' | 'center' | 'flex-end';
    /** Modal width in %, clamped 40–100. @default 80 */
    widthPercent?: number;
    /** Style overrides for the modal surface. */
    modalSx?: SxProps<Theme>;
};
/**
 * Trigger (default avatar+button or custom node) that opens a modal with responsive iframe media.
 */
declare function VideoModal({ videoId, src, title, trigger, avatarSrc, buttonLabel, align, widthPercent, modalSx, }: VideoModalProps): react_jsx_runtime.JSX.Element;

type MenuDepthContextType = {
    depth: number;
};
declare const MenuDepthContext: React$1.Context<MenuDepthContextType | null>;
declare function useMenuDepthContext(): MenuDepthContextType;

type MenuSelectionContextType = {
    isSelected: (nodeId: string) => boolean;
    isAncestorSelected: (nodeId: string) => boolean;
    selectedId: string | null;
    selectedPathIds: string[];
};
/**
 * React context that carries renderer configuration down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer_Client`.  Consumed by `TextElement` and
 * `TextOpenClose` via {@link useTextTreeRendererContext}.
 *
 * Do **not** consume this context directly — use the hook instead.
 */
declare const MenuSelectionContext: React$1.Context<MenuSelectionContextType | null>;
/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
declare function useMenuSelectionContext(): MenuSelectionContextType;

type DrawerMenuSelectors = {
    isSelected: (nodeId: string) => boolean;
    isAncestorSelected: (nodeId: string) => boolean;
    selectedId: string | null;
    selectedPathIds: string[];
};
declare function getDrawerMenuSelectors({ drawerMenuTree, currentPath, }: {
    drawerMenuTree: DrawerMenuTree;
    currentPath: string;
}): DrawerMenuSelectors;

type DrawerMenuState = Record<string, boolean>;
type DrawerMenuStore = {
    /** Returns the current state snapshot. */
    getState: () => DrawerMenuState;
    /** Replaces the state or applies a functional update. Notifies all subscribers. */
    setState: (next: DrawerMenuState | ((prev: DrawerMenuState) => DrawerMenuState)) => void;
    /** Subscribes a listener that is called on every state change. Returns an unsubscribe function. */
    subscribe: (listener: () => void) => () => void;
};
declare function createDrawerMenuStore(initialState: DrawerMenuState): DrawerMenuStore;
declare function getInitialDrawerMenuStoreState({ selectors, }: {
    selectors: DrawerMenuSelectors;
}): DrawerMenuState;
declare function useDrawerMenuNodeOpen(store: DrawerMenuStore, nodeId: string): boolean;
declare function setDrawerMenuNodeOpen(store: DrawerMenuStore, nodeId: string): (open: boolean) => void;

type DrawerMenuControllerContextType = {
    drawerMenuStore: DrawerMenuStore;
};
declare const DrawerMenuControllerContext: React$1.Context<DrawerMenuControllerContextType | null>;
declare function useDrawerMenuControllerContext(): DrawerMenuControllerContextType;

type DrawerMenuRenderContextType = {
    /**
     * React node rendered as the toggle indicator when a section is **open**.
     * Typically `<ExpandLess />` from MUI icons.
     */
    openIndicator: React.ReactNode;
    /**
     * React node rendered as the toggle indicator when a section is **closed**.
     * Typically `<ExpandMore />` from MUI icons.
     */
    closeIndicator: React.ReactNode;
    nodesRenderer: RenderDrawerMenuNode;
    LinkComponent: LinkTypeComponent;
    basePadding: number;
};
/**
 * React context that carries renderer configuration down the component tree.
 *
 * @remarks
 * Provided by `TextDrawer_Client`.  Consumed by `TextElement` and
 * `TextOpenClose` via {@link useTextTreeRendererContext}.
 *
 * Do **not** consume this context directly — use the hook instead.
 */
declare const DrawerMenuRenderContext: React$1.Context<DrawerMenuRenderContextType | null>;
/**
 * Hook — returns the {@link TextTreeRendererContextType} for the nearest
 * `TextDrawer_Client` ancestor.
 *
 * @throws {Error} If called outside of a `TextTreeRendererContext.Provider` tree.
 */
declare function useDrawerMenuRenderContext(): DrawerMenuRenderContextType;

/**
 * Vertical spacing primitive based on `theme.spacing`.
 *
 * Renders a block with configurable height so layouts can keep spacing
 * consistent with the theme scale.
 */

type SpacerProps = {
    /** Spacing multiplier for `theme.spacing`. @defaultValue 4 */
    size?: number;
};
declare const Spacer: React$1.FC<SpacerProps>;

type StackSize = 'compact' | 'standard' | 'relaxed' | 'large' | 'extraLarge';
interface StandardStackProps extends StackProps {
    /** Semantic spacing preset. @defaultValue 'standard' */
    size?: StackSize;
}
declare const StandardStack: React$1.FC<StandardStackProps>;

/**
 * Touch-friendly button style built on top of MUI `Button`.
 *
 * Keeps full MUI button API while applying house defaults:
 * - 40px height
 * - no uppercase transform
 * - primary background with darker hover
 */

declare const TouchButton: typeof Button;

/** Subset/superset of Next.js Script strategies */
type ScriptStrategy = 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker';
/** Reasonable value types for data-* attributes */
type DataAttrValue = string | number | boolean | null | undefined;
type DataAttributes = {
    [K in `data-${string}`]?: DataAttrValue;
};
/** Common script attributes (framework-agnostic) */
type UniversalScriptBaseProps = {
    id?: string;
    strategy?: ScriptStrategy;
    async?: boolean;
    defer?: boolean;
    type?: string;
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    integrity?: string;
    nonce?: string;
    noModule?: boolean;
    referrerPolicy?: React$1.HTMLAttributeReferrerPolicy;
    fetchPriority?: 'high' | 'low' | 'auto';
    onLoad?: React$1.ReactEventHandler<HTMLScriptElement>;
    onError?: React$1.ReactEventHandler<HTMLScriptElement>;
} & DataAttributes;
/**
 * Source vs inline is modeled as a union so callers can't pass both.
 * - External script: `src`
 * - Inline script: `dangerouslySetInnerHTML` OR `children` (string)
 */
type UniversalScriptProps = (UniversalScriptBaseProps & {
    src: string;
    dangerouslySetInnerHTML?: never;
    children?: never;
}) | (UniversalScriptBaseProps & {
    src?: never;
    dangerouslySetInnerHTML: {
        __html: string;
    };
    children?: never;
}) | (UniversalScriptBaseProps & {
    src?: never;
    dangerouslySetInnerHTML?: never;
    /** Optional ergonomic inline form */
    children: string;
});
/** Any React component that can render a script with these props */
type ScriptComponentLike = React$1.ComponentType<UniversalScriptProps>;

/**
 * Lightweight inline text formatters for React rendering.
 *
 * Supported syntax:
 * - `**bold**`
 * - `*italic*`
 * - `[label](url)` for `http(s)`, `mailto:`, `tel:`, `/path`, and `#hash`
 * - line breaks (`\r\n`, `\r`, `\n`, and literal `\\n`) to `<br />`
 */

/**
 * Convert a string containing **bold** markers into React nodes.
 *
 * A simple utility for processing text with bold formatting. Useful when you only
 * need bold text support without full markdown parsing.
 *
 * @param input - The string containing **bold** markers
 * @param keyScope - Prefix for React keys to avoid conflicts (default: 'b')
 * @returns Array of React nodes with <strong> elements for bold text
 *
 * @example
 * const nodes = boldToNodes("Welcome to **our platform**!");
 * // Returns: ["Welcome to ", <strong key="b-0">our platform</strong>, "!"]
 *
 * @example
 * // In a component
 * function Title({ text }: { text: string }) {
 *   return <Typography variant="h4">{boldToNodes(text, 'title')}</Typography>;
 * }
 */
declare function boldToNodes(input: string, keyScope?: string): React$1.ReactNode[];
/**
 * Parse inline markdown-like content into React nodes.
 *
 * @param input - The string containing Markdown syntax
 * @param Link - Link component used for internal `/path` links
 * @param keyScope - Prefix for React keys to avoid conflicts (default: 'md')
 * @returns Array of React nodes with processed formatting
 */
declare function parseInlineMarkdown(input: string, Link: LinkTypeComponent, keyScope?: string): React$1.ReactNode[] | React$1.ReactNode;

/** Convert `kebab-case` to `Title Case`. */
/**
 * Capitalize each word boundary unless the value looks like an email address.
 *
 * @remarks
 * This uppercases initial letters but does not lowercase the rest of each word.
 */
declare function toTitleCase(str: string): string;

/**
 * Text utilities for inline formatting and simple case transformations.
 */

declare const index$1_boldToNodes: typeof boldToNodes;
declare const index$1_parseInlineMarkdown: typeof parseInlineMarkdown;
declare const index$1_toTitleCase: typeof toTitleCase;
declare namespace index$1 {
  export { index$1_boldToNodes as boldToNodes, index$1_parseInlineMarkdown as parseInlineMarkdown, index$1_toTitleCase as toTitleCase };
}

/**
 * Renders a Material icon resolved from a normalized semantic key.
 *
 * Returns `null` when no key match exists.
 */
type IconPickerProps = {
    /** Prefer a semantic key (e.g. "home", "settings", "privacy-policy") over display label. */
    name: string;
    /** Optional icon size override (falls back to MUI default). */
    fontSize?: 'inherit' | 'small' | 'medium' | 'large';
};
/** Central mapping: add synonyms by pointing multiple keys to the same icon. */
declare const ICONS_BY_KEY: {
    readonly home: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly settings: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly profile: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly account: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly contact: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly help: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly support: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly dashboard: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly notifications: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly alerts: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly logout: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'log-out': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly signout: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'sign-out': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly login: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'log-in': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly signin: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'sign-in': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly info: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly information: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly about: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'about-us': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly team: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly privacy: _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'privacy-policy': _mui_material_OverridableComponent.OverridableComponent<_mui_material_SvgIcon.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};
/** Union of normalized keys accepted by {@link IconPicker}. */
type IconName = keyof typeof ICONS_BY_KEY;
/** Backward-compatible alias for existing imports. */
type ICONS_NAMES = IconName;
/** Icon renderer from semantic names. */
declare const IconPicker: React$1.FC<IconPickerProps>;

/**
 * Icon utility exports.
 */

type index_ICONS_NAMES = ICONS_NAMES;
type index_IconName = IconName;
declare const index_IconPicker: typeof IconPicker;
type index_IconPickerProps = IconPickerProps;
declare namespace index {
  export { type index_ICONS_NAMES as ICONS_NAMES, type index_IconName as IconName, index_IconPicker as IconPicker, type index_IconPickerProps as IconPickerProps };
}

declare function camelCase(input: string): string;
declare function safeTitleCase(label: string): string;

export { ActionButton, type ActionButtonProps, type AnyInlineTextNode, type AnyTextNode, BackButton, type BackButtonProps, BackgroundBoxProps, _default$2 as BannerCarousel, type BannerCarouselProps, _default$3 as BlockCarousel, type BlockTextKind, BookingButton, type BookingButtonProps, CallToActionButton, type CallToActionButtonProps, type CarouselConfig, type CarouselProps, _default as ClickTextImage, type ClickTextImageProps, type CodeKind, type ContentTree, type ContentTreeNode, ContentTreeView, type ContentTreeViewProps, CopyButton, type CopyButtonProps, DebouncedTextField, type DebouncedTextFieldProps, type DefaultRenderingPropsMap, DownloadButton, type DownloadButtonProps, DrawerMenuControllerContext, type DrawerMenuControllerContextType, MenuDepthContext as DrawerMenuDepthContext, type MenuDepthContextType as DrawerMenuDepthContextType, DrawerMenuRenderContext, type DrawerMenuRenderContextType, MenuSelectionContext as DrawerMenuSelectionContext, type MenuSelectionContextType as DrawerMenuSelectionContextType, type DrawerMenuSelectors, type DrawerMenuState, type DrawerMenuStore, DrawerMenuTree, _default$1 as DynamicTransition, type DynamicTransitionProps, type EmphasisKind, type FallbackPlatform, FavoriteButton, type FavoriteButtonProps, type FavoriteType, FeaturedColumnsFooter, type FeaturedColumnsFooterProps, type FileType, FiveColumnsFooter, type FiveColumnsFooterProps, GetInTouch, HeroBlock, type HeroBlockProps, IconPicker, type IdsOfType, type ImageCarousel, ImageComponentLike, InlineCode, type InlineCodeProps, InlineEmphasis, type InlineEmphasisProps, InlineLink, type InlineLinkProps, InlineStrong, InlineStrongEmphasis, type InlineStrongEmphasisProps, type InlineStrongProps, InlineText, type InlineTextKind, type InlineTextNodesMap, type InlineTextProps, type LinkKind, LinkTypeComponent, type MediaAndTextNoMessage, type MediaAndTextProps, MediaText, type OverridableTypes, Pad, type PadProps, PageLayout, type PageLayoutProps, type ParseInlineTextOptions, RenderDrawerMenuNode, type RenderTextNode, type RenderedTextRegistry, RichText, type RichTextBlock, type RichTextKind, type RichTextProps, RouterProvider, type ScriptComponentLike, type ScriptStrategy, Section, type SectionBlock, type SectionKind, type SectionProps$1 as SectionProps, SectionSize, ShareButton, type ShareButtonProps, type ShareData, SocialButton, type SocialButtonProps, type SocialPlatform, Spacer, type SpacerProps, StandardStack, type StandardStackProps, StaticImageDataLike, type StrongEmphasisKind, type StrongKind, SubSection, type SubSectionBlock, type SubSectionKind, type SubSectionProps, SubscribeButton, type SubscribeButtonProps, type TextKind, type TextNodeKind, type TextNodesMap, type TextProps, type TextTreeOverrides, TextTreeRendererContext, type TextTreeRendererContextType, ThreeColumnsFooter, type ThreeColumnsFooterProps, TouchButton, TwoColumnsFooter, type TwoColumnsFooterProps, type UniversalScriptProps, VideoModal, type VideoModalProps, WhatsAppButton, type WhatsAppButtonProps, boldToNodes, camelCase, createDrawerMenuStore, defaultRenderTextNode, defaultRenderedRegistry, getDrawerMenuSelectors, getInitialDrawerMenuStoreState, index as icon, parseInlineMarkdown, parseInlineText, safeTitleCase, setDrawerMenuNodeOpen, index$1 as text, toTitleCase, useDrawerMenuControllerContext, useMenuDepthContext as useDrawerMenuDepthContext, useDrawerMenuNodeOpen, useDrawerMenuRenderContext, useMenuSelectionContext as useDrawerMenuSelectionContext, useTextTreeRendererContext };
