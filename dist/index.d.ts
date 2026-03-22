import * as react_jsx_runtime from 'react/jsx-runtime';
import { SxProps, Theme } from '@mui/material/styles';
import * as React$1 from 'react';
import React__default from 'react';
import { BoxProps } from '@mui/material/Box';
import { ContainerProps } from '@mui/material/Container';
import { StackProps } from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1, IconButtonProps, SxProps as SxProps$1, Theme as Theme$1 } from '@mui/material';
import { Theme as Theme$2 } from '@emotion/react';
import { SxProps as SxProps$2 } from '@mui/system';
import { TextFieldProps } from '@mui/material/TextField';
import { HierarchyNode } from 'd3-hierarchy';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';

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

/**
 * Responsive minimum-height design tokens for section-sized layout blocks.
 *
 * Values are keyed by semantic size and map to MUI breakpoint values (`xs`, `md`, `lg`).
 */

/**
 * Section min-height tokens by semantic size.
 */
declare const SECTION_MIN_H: {
    readonly micro: {
        readonly xs: "160px";
        readonly md: "200px";
        readonly lg: "240px";
    };
    readonly compact: {
        readonly xs: "300px";
        readonly md: "360px";
        readonly lg: "400px";
    };
    readonly sm: {
        readonly xs: "420px";
        readonly md: "520px";
        readonly lg: "560px";
    };
    readonly md: {
        readonly xs: "520px";
        readonly md: "640px";
        readonly lg: "720px";
    };
    readonly lg: {
        readonly xs: "600px";
        readonly md: "760px";
        readonly lg: "880px";
    };
    readonly xl: {
        readonly xs: "720px";
        readonly md: "880px";
        readonly lg: "1040px";
    };
};
/** Semantic size keys for {@link SECTION_MIN_H}. */
type SectionSize = keyof typeof SECTION_MIN_H;
/** Convenience helper for MUI `sx` usage. */
declare const sectionMinHeightSx: (size: SectionSize) => SxProps<Theme>;

type SectionProps = BoxProps & {
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
declare function Section({ size, center, lockHeight, sx, children, id, ...rest }: SectionProps): react_jsx_runtime.JSX.Element;

/**
 * Matches the common shape of `StaticImageData` (e.g., Next.js) without importing Next types.
 * You can broaden this later if your build pipeline produces different fields.
 */
interface StaticImageDataLike {
    src: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
}
declare function isStaticImageDataLike(x: unknown): x is StaticImageDataLike;
/**
 * "Next-ish" extras your app might use. These are NOT valid <img> attributes.
 * They exist so callers can write one prop object and you can adapt to different renderers.
 */
type NextishExtras = {
    fill?: boolean;
    sizes?: string;
    placeholder?: 'blur' | 'empty';
    priority?: boolean;
    quality?: number;
    unoptimized?: boolean;
};
/**
 * A universal image prop type:
 * - accepts either a URL string or StaticImageDataLike
 * - keeps `alt` required
 * - excludes conflicting DOM props so we can redefine them
 */
type UniversalImageProps = Omit<React$1.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'sizes'> & {
    src: string | StaticImageDataLike;
    alt: string;
    width?: number | string;
    height?: number | string;
} & NextishExtras;
/**
 * A component type that can render using UniversalImageProps.
 * (e.g., HtmlImage, NextImageAdapter, etc.)
 */
type ImageComponentLike = React$1.ComponentType<UniversalImageProps>;
/**
 * Convert UniversalImageProps into <img> attributes safely:
 * - strips Next-ish props (fill/priority/quality/placeholder/unoptimized)
 * - resolves src/url and default width/height when src is StaticImageDataLike
 */
declare function toImgAttrs(p: UniversalImageProps): React$1.ImgHTMLAttributes<HTMLImageElement>;
/**
 * Default renderer: plain <img>.
 * Supports `fill` by applying absolute positioning, similar to Next Image.
 *
 * Important: for `fill` to behave, the parent should be position: relative
 * and have an explicit size.
 */
declare const HtmlImage: React$1.ForwardRefExoticComponent<Omit<React$1.ImgHTMLAttributes<HTMLImageElement>, "height" | "width" | "alt" | "src" | "sizes"> & {
    src: string | StaticImageDataLike;
    alt: string;
    width?: number | string;
    height?: number | string;
} & NextishExtras & React$1.RefAttributes<HTMLImageElement>>;

/**
 * Background image configuration for {@link BackgroundBox}.
 */
type ImageConf = {
    /** Image source. Supports URL strings and static imports. */
    src: string | StaticImageDataLike;
    /**
     * `object-fit` mode used in full-bleed rendering.
     *
     * @default 'cover'
     */
    mode?: 'cover' | 'contain' | 'scale-down';
    /**
     * Optional overlay color rendered between image and content.
     */
    overlayColor?: string;
    /**
     * Image opacity for full-bleed rendering.
     *
     * @default 1
     */
    opacity?: number;
    /**
     * CSS `object-position` used to place the image focal point.
     *
     * @default '50% 50%'
     */
    objectPosition?: string;
    /**
     * CSS transform applied to the image element.
     */
    transform?: string;
    /**
     * Optional width constraint that enables width-capped mode.
     */
    width?: string;
    /**
     * `sizes` hint forwarded to the image component.
     *
     * @defaultValue '100vw' in full-bleed mode
     */
    sizes?: string;
    /**
     * Enables priority loading for critical, above-the-fold images.
     *
     * @default false
     */
    priority?: boolean;
    /**
     * Image quality passed to the image component.
     *
     * @default 70
     */
    quality?: number;
    /**
     * Placeholder behavior while image loads.
     *
     * @defaultValue 'blur' for static imports, otherwise 'empty'
     */
    placeholder?: 'blur' | 'empty';
    /**
     * Disables built-in image optimization when true.
     *
     * @default false
     */
    unoptimized?: boolean;
    /**
     * Aspect ratio used by width-capped mode (`number` or CSS ratio string).
     *
     * @defaultValue inferred from static image dimensions, otherwise '16 / 9'
     */
    aspectRatio?: string | number;
};
/**
 * Props for {@link BackgroundBox}.
 */
type BackgroundBoxProps = React$1.HTMLAttributes<HTMLDivElement> & {
    /**
     * Optional background image configuration.
     */
    imageConf?: ImageConf;
    /**
     * Foreground content rendered above image and overlay layers.
     */
    children?: React$1.ReactNode;
    /**
     * Additional styles applied to the root MUI `Box`.
     */
    sx?: SxProps<Theme>;
    /**
     * Class name applied to the root element.
     */
    className?: string;
    /** Image renderer compatible with Next.js Image-like props. */
    ImageComponent: ImageComponentLike;
};
/**
 * Container that renders an optional background image, optional overlay, and foreground content.
 *
 * @remarks
 * - If `imageConf.width` is set, image is rendered in width-capped mode.
 * - Without `imageConf.width`, image is rendered full-bleed.
 */
declare const BackgroundBox: React$1.FC<BackgroundBoxProps>;

/** Props for {@link BannerStatic}. */
type BannerStaticProps = {
    /** Background image configuration (src, overlay, transform, etc.). */
    image: ImageConf;
    /**
     * MUI `BoxProps` forwarded to the `Section` root.
     * `id` and `sx` are extracted and handled explicitly to avoid spreading conflicts.
     */
    boxProps?: BoxProps;
    /** Band height token. @defaultValue `'micro'` */
    size?: SectionSize;
    /** Foreground content rendered over the background image. */
    children: React$1.ReactNode;
    /** Image rendering component (e.g. Next.js `Image`). */
    ImageComponent: ImageComponentLike;
};
declare const _default$6: React$1.NamedExoticComponent<BannerStaticProps>;

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
declare const _default$5: React$1.NamedExoticComponent<CarouselConfig>;

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
declare const _default$4: React$1.NamedExoticComponent<BannerCarouselProps>;

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
declare const _default$3: React$1.NamedExoticComponent<DynamicTransitionProps>;

type SansVariantProps = Omit<TypographyProps, 'variant' | 'component'>;
type BodyTextProps = SansVariantProps;

declare const variantLevels: {
    readonly page: "h1";
    readonly section: "h2";
    readonly subsection: "h3";
    readonly subsubsection: "h4";
};
type TitleTypes = keyof typeof variantLevels;
interface TitleProps extends BodyTextProps {
    /** Semantic level (maps to h1…h4). */
    sectionType: TitleTypes;
}
/** Base component that locks the variant based on `sectionType`. */
declare const Title: React$1.FC<TitleProps>;
/** h1 wrapper */
declare const PageTitle: React$1.FC<Omit<TitleProps, 'sectionType'>>;
/** h2 wrapper */
declare const SectionTitle: React$1.FC<Omit<TitleProps, 'sectionType'>>;
/** h3 wrapper */
declare const SubsectionTitle: React$1.FC<Omit<TitleProps, 'sectionType'>>;
/** h4 wrapper */
declare const SubsubsectionTitle: React$1.FC<Omit<TitleProps, 'sectionType'>>;

type TitleLocalProps = Omit<TitleProps, 'sectionType'>;
/** A single title or subtitle block rendered by {@link MainTitle}. */
type MainTitleBlock = {
    /** Text content. Strings are auto-capitalised when `autoCapitalize` is `true`. Accepts React nodes for rich content. */
    title: string | React$1.ReactNode;
    /**
     * Visual hierarchy level.
     * - `'primary'` — renders as `PageTitle` (h1-equivalent, large).
     * - `'secondary'` — renders as `SectionTitle` (h2-equivalent, smaller).
     * @defaultValue `'primary'`
     */
    type?: 'primary' | 'secondary';
    /** Per-block typography overrides, merged on top of `slotProps.title` / `slotProps.subtitle`. */
    titleProps?: TitleLocalProps;
};
/** Props for {@link MainTitle}. */
type MainTitleProps = {
    /** Ordered list of title/subtitle blocks to render. */
    blocks: MainTitleBlock[];
    /**
     * When `true`, string titles are passed through `toTitleCase` before rendering.
     * Has no effect on React node titles.
     * @defaultValue `true`
     */
    autoCapitalize?: boolean;
    /** Slot-level prop overrides applied as defaults to all blocks of each type. */
    slotProps?: {
        /** Props forwarded to the `Stack` wrapper. */
        stack?: StackProps;
        /** Default typography props for all `'primary'` blocks. */
        title?: TitleLocalProps;
        /** Default typography props for all `'secondary'` blocks. */
        subtitle?: TitleLocalProps;
    };
};
declare const _default$2: React$1.NamedExoticComponent<MainTitleProps>;

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
interface CallToActionButtonProps extends Omit<ButtonProps$1, 'startIcon' | 'endIcon'> {
    loading?: boolean;
    success?: boolean;
    successDuration?: number;
    loadingText?: React$1.ReactNode;
    successText?: React$1.ReactNode;
    startIcon?: React$1.ReactNode;
    endIcon?: React$1.ReactNode;
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
interface DownloadButtonProps extends Omit<ButtonProps$1, 'href' | 'startIcon'> {
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
interface BackButtonProps extends Omit<ButtonProps$1, 'startIcon' | 'onClick'> {
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
interface ShareButtonProps extends Omit<ButtonProps$1, 'onClick'> {
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
interface SubscribeButtonProps extends Omit<ButtonProps$1, 'onClick'> {
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
interface CopyButtonProps extends Omit<ButtonProps$1, 'onClick' | 'onCopy'> {
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
declare const _default$1: React$1.NamedExoticComponent<ClickTextImageProps>;

/**
 * Payload stored on each `d3-hierarchy` node after stratification.
 *
 * @remarks
 * - `node` is the original node payload (or `null` for the synthetic `"root"` anchor).
 * - `overrides` optionally stores a per-node override payload.
 * - `children` is only populated for `"root"` during conversion (as a convenience).
 */
type StratifyPayload<Node, NodeOverrides> = {
    node: Node | null;
    overrides?: NodeOverrides;
    children?: Record<string, StratifyPayload<Node, NodeOverrides>>;
};
/**
 * Row format passed into `d3.stratify()`.
 *
 * @remarks
 * `d3.stratify()` expects an array of objects where each object has:
 * - `id`: unique identifier
 * - `parentId`: parent identifier (or `null` for the root)
 */
type D3StratifyData<Node, NodeOverrides> = {
    id: string;
    parentId: string | null;
    payload: StratifyPayload<Node, NodeOverrides>;
};

/**
 * Serializable data for a single node in the text drawer tree.
 *
 * @remarks
 * `renderer` is a key into the active {@link Registry} and must match one of its
 * registered entries.  The fields consumed by each renderer vary — see
 * `textNodeRenderers/defaultTextPolicyRegister` for the built-in mapping.
 *
 * `type` must agree with `renderer`'s declared `type` in the registry; the
 * `TextDrawerElement_Rg` utility type enforces this correlation at compile time
 * when building hierarchy payloads.
 */
type TextDrawerElement = {
    /** Primary label — shown in every renderer as the summary row or heading. */
    title: string;
    /**
     * Registry key that selects the renderer and `type` for this node.
     * Must be a key of the active {@link Registry}.
     */
    renderer: string;
    /**
     * Semantic category that the chosen renderer belongs to.
     * Matches `RegistryEntry.type` for the corresponding `renderer` key.
     * Values: `'plainText'` | `'section'` | `'paragraph'`.
     */
    type: string;
    /** Optional second line shown in header renderers (`titleAndSubStd`, `titleAndSubDepth`, `titledText`). */
    subtitle?: string;
    /** Header icon identifier — reserved for future icon-picker integration. */
    icon?: string;
    /** Body text used by content renderers (`simpleText`, `titledText`). Falls back to `title` when absent. */
    content?: string;
    /**
     * Navigation target for link renderers (`linkedLabel`).
     * Falls back to `'#'` when the renderer is `linkedLabel` and this field is missing.
     */
    href?: string;
    /** Relative sort order among siblings — lower numbers render first. */
    order?: number;
};
/**
 * UI-only overrides for a single node, merged from `HierarchyTreeOverrides`.
 *
 * @remarks
 * These fields are kept separate from {@link TextDrawerElement} because they
 * are UI concerns (open state, visual tweaks) that are not part of the data
 * model and must not influence hierarchy processing.
 */
type TextDrawerElementUI = {
    /**
     * When `true`, a visual separator is drawn above this node.
     * Consumed by layout wrappers; not yet forwarded by any built-in renderer.
     */
    divider?: boolean;
    /**
     * When `true`, the collapsible section starts expanded.
     * Seeded into {@link TreeTextStore} initial state by `TextDrawer`.
     * Safe to set on leaf nodes — the store tracks the value but it has no
     * visual effect when there are no children to collapse.
     */
    defaultOpen?: boolean;
    /**
     * Arbitrary MUI `sx` forwarded to the renderer's root element.
     * The renderer must explicitly accept and forward `sx` — all built-in
     * renderers except `titleAndSubStd` / `titleAndSubDepth` do so.
     */
    sx?: SxProps$1<Theme>;
};
/**
 * Props for the public-facing `TextDrawer` component.
 *
 * @remarks
 * Obtain `treeFromRoot` by calling {@link hierarchyToTextDrawerProps} with a
 * typed `HierarchyTree` literal.  The result is a pre-sorted `StratifyPayload`
 * ready to be passed directly here.
 */
type TextDrawerProps$1 = {
    /** Pre-built tree produced by {@link hierarchyToTextDrawerProps}. */
    treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
};
/**
 * Root-level metadata for the text drawer hierarchy.
 *
 * @remarks
 * Passed as the second type parameter to `HierarchyTree<P, RootTextElement>`.
 * Currently only carries an `id` for future root-level addressing; the field
 * is not consumed by any renderer.
 */
type RootTextElement = {
    /** Identifier for the root node — not rendered, reserved for future use. */
    id: string;
};
/**
 * Root-level UI overrides (mirrors `TextDrawerElementUI` for the root node).
 * Currently empty; provided so `HierarchyTreeOverrides` receives a concrete type.
 */
type RootTextElementUI = {};

/**
 * Props for the `TextDrawer` component.
 *
 * @remarks
 * Obtain `treeFromRoot` by calling {@link hierarchyToTextDrawerProps} with a
 * typed `HierarchyTree` literal and checking `result.ok` before use.
 */
type TextDrawerProps = {
    /** Pre-built, sorted tree produced by {@link hierarchyToTextDrawerProps}. */
    treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
    /**
     * Base indent unit (MUI spacing) applied to each depth level.
     * The actual padding is computed as `indent * depth` by the default
     * `indentPolicy` in `TextDrawer_Client`.
     * @defaultValue 0
     */
    indent?: number;
};
/**
 * Public-facing accordion/collapsible text tree component.
 *
 * @remarks
 * `TextDrawer` is the **only** component consumers should mount directly.
 * It is responsible for:
 * - Building the {@link TreeTextStore} from the tree's `defaultOpen` overrides.
 * - Providing the store via an internal context provider.
 * - Delegating rendering to `TextDrawer_Client` (a `'use client'` boundary).
 *
 * The store is memoised on `treeFromRoot` — it is only rebuilt when the tree
 * reference changes, so the open/closed state survives parent re-renders.
 *
 * @example
 * ```tsx
 * const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
 * if (result.ok) {
 *   return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
 * }
 * ```
 */
declare function TextDrawer({ treeFromRoot, indent }: TextDrawerProps): react_jsx_runtime.JSX.Element;

/**
 * Map of node IDs to their payload types.
 *
 * @remarks
 * - Keys are node IDs.
 * - `"root"` may exist on the payload map as an anchor payload key.
 * - `"root"` is excluded from node ids in {@link HierarchyRelations}.
 *
 * @typeParam NodePayload - Default payload type when using a uniform payload map.
 */
type PayloadMap<NodePayload = unknown> = Record<string, NodePayload>;
type ForbidRootKey<P extends Record<string, any>> = 'root' extends keyof P ? never : P;
type NodeId<P extends PayloadMap> = Extract<keyof ForbidRootKey<P>, string>;
type AllowedParents<N extends string, P extends PayloadMap> = Exclude<Extract<keyof P, string>, N>;
/**
 * Parent relation model for a hierarchy.
 *
 * @remarks
 * This is a **normalized** hierarchy representation: each node explicitly stores its parent.
 *
 * ### Type-level guarantees
 * - Parent id must be a known node id or `"root"`.
 * - No self-parenting.
 *
 * ### Runtime invariants (not enforced by types)
 * - No cycles.
 *
 * @example
 * ```ts
 * const payloads = {
 *   a: { name: "a" },
 *   b: { name: "b" },
 *   c: { name: "c" },
 *   root: { name: "root" }, // allowed as an anchor payload
 * } as const satisfies PayloadMap;
 *
 * const relations = {
 *   a: { payload: { name: "a" }, parent: "b" },
 *   b: { payload: { name: "b" }, parent: "root" },
 *   c: { payload: { name: "c" }, parent: "b" },
 * } as const satisfies HierarchyRelations<typeof payloads>;
 * ```
 *
 * @typeParam P - Node ID → payload type map. `"root"` may be present as an anchor key.
 */
type HierarchyRelations<P extends PayloadMap> = {
    [K in NodeId<P>]: {
        /** Payload associated with this node key. */
        payload: P[K];
        /**
         * Parent ID.
         *
         * @remarks
         * - Can be `"root"` (anchor)
         * - Can be any other node id in {@link P}
         * - Cannot be the same node key (self-parenting forbidden)
         */
        parent: AllowedParents<K & string, P> | 'root';
    };
};
/**
 * A hierarchy tree wrapper that includes a root payload plus node relations.
 *
 * @remarks
 * The `"root"` entry is treated as an **anchor**, not a node in {@link HierarchyRelations}.
 *
 * @typeParam P - Node ID → payload type map.
 * @typeParam RootPayLoad - Payload type stored at the `"root"` anchor.
 */
type HierarchyTree<P extends PayloadMap, RootPayLoad = unknown> = {
    /** Payload at the `"root"` anchor. */
    root: RootPayLoad;
    /** Normalized node relations (child → parent). */
    nodes: HierarchyRelations<P>;
};
/**
 * Payload overrides for a hierarchy relations map.
 *
 * @remarks
 * Useful for producing “view-model” payloads (e.g. adding UI fields) while keeping the same structure.
 *
 * @typeParam P - Original payload universe.
 * @typeParam H - Relations map being overridden.
 * @typeParam PN - New payload type for overridden entries.
 */
type HierarchyRelationsOverrides<P extends PayloadMap, H extends HierarchyRelations<P>, PN> = {
    [K in Extract<keyof H, string>]?: {
        payload: PN;
    };
};
/**
 * Overrides for an entire hierarchy tree (root + nodes).
 *
 * @typeParam P - Original payload universe.
 * @typeParam H - Tree being overridden.
 * @typeParam RootOverridePayload - New payload type for the root anchor.
 * @typeParam PN - New payload type for overridden nodes.
 */
type HierarchyTreeOverrides<P extends PayloadMap, H extends HierarchyTree<P>, RootOverridePayload = unknown, PN = unknown> = {
    root?: {
        payload: RootOverridePayload;
    };
    nodes?: HierarchyRelationsOverrides<P, H['nodes'], PN>;
};
/**
 * @example
 * ```ts
 * const ex = {
 *   a: { name: "a" },
 *   b: { name: "b", other: "aa" },
 *   c: { name: "c", jk: "b" },
 *   root: { name: "root", pp: "c" }, // allowed as an anchor payload
 * } as const satisfies PayloadMap;
 *
 * const rt = {
 *   a: { payload: { name: "a" }, parent: "b" },
 *   b: { payload: { name: "b", other: "aa" }, parent: "a" },
 *   c: { payload: { name: "c", jk: "b" }, parent: "b" },
 *   // root: { payload: { name: "root", pp: "c" }, parent: "c" }, // not allowed (root isn't a node)
 * } as const satisfies HierarchyRelations<typeof ex>;
 *
 * const ov = {
 *   a: { payload: { id: "aaa" } },
 *   b: { payload: { id: "bbb" } },
 *   c: { payload: { id: "ccc" } },
 * } as const satisfies HierarchyRelationsOverrides<typeof ex, typeof rt, { id: string }>;
 * ```
 */
type NodeInferred<P> = P extends PayloadMap<infer NodeType> ? NodeType : never;

type DiagnosticSeverity = 'error' | 'warning' | 'info';
type DiagnosticOrigin = 'resolver';
declare const errorCodeBrand: unique symbol;
type ErrorCodeBrand = {
    readonly [errorCodeBrand]: true;
};
type ErrorCode = string & ErrorCodeBrand;
declare const HIERARCHY_ERROR_CODE: {
    readonly MISSING_PARENT: ErrorCode;
    readonly INVALID_PARENT: ErrorCode;
    readonly INVALID_HIERARCHY: ErrorCode;
    readonly MISSING_ROOT_ATTACHMENT: ErrorCode;
    readonly D3_STRATIFY_ERROR: ErrorCode;
    readonly NULL_NODE: ErrorCode;
    readonly INVALID_CYCLE: ErrorCode;
};
type HierarchyIssue = {
    code: ErrorCode;
    message: string;
    details?: unknown;
};

/**
 * Input props for {@link hierarchyToTextDrawerProps}.
 *
 * @typeParam P - The payload map literal type inferred from the `hierarchy`
 *   constant.  Must satisfy `PayloadMap<TextDrawerElement>`.
 */
type HierachyToTextDrawerProps<P extends PayloadMap<TextDrawerElement>> = {
    /**
     * Compile-time–validated tree literal.
     * Use `as const satisfies HierarchyTree<P, RootTextElement>` at the
     * definition site to get full TypeScript narrowing.
     */
    hierarchy: HierarchyTree<P, RootTextElement>;
    /**
     * UI-only overrides keyed by node ID.
     * Each node's overrides are merged with its base payload at render time.
     * All node IDs in `overrides.nodes` must exist in `hierarchy.nodes`.
     */
    overrides: HierarchyTreeOverrides<P, HierarchyTree<P, RootTextElement>, RootTextElementUI, TextDrawerElementUI>;
};
/**
 * Discriminated-union return type from {@link hierarchyToTextDrawerProps}.
 *
 * Check `ok` before accessing `treeFromRoot`.
 */
type HierachyToTextDrawerPropsReturn = {
    ok: false;
    issues: HierarchyIssue[];
} | {
    ok: true;
    /** Pre-built, sorted tree ready to pass directly to `<TextDrawer treeFromRoot={…} />`. */
    treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
};
/**
 * Public entry point — converts a typed hierarchy literal into the prop
 * expected by `TextDrawer`.
 *
 * @remarks
 * This is the **only** function consumers should call.  Internally it delegates
 * to `prepareTextTree` which runs the full pipeline:
 * 1. `resolver` — validates parent references and detects cycles.
 * 2. `convertToD3Stratify` — flattens the hierarchy into D3-compatible records.
 * 3. `sortD3Stratify` — applies `order` fields for stable sibling ordering.
 * 4. `buildTreeFromStratify` — reconstructs the recursive `StratifyPayload` tree.
 *
 * All validation errors are collected into `issues` and returned as
 * `{ ok: false, issues }` so the caller can decide how to surface them.
 *
 * @typeParam P - Inferred payload map from the `hierarchy` literal.
 *
 * @example
 * ```ts
 * const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
 * if (!result.ok) {
 *   console.error(result.issues);
 * } else {
 *   return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
 * }
 * ```
 */
declare function hierarchyToTextDrawerProps<P extends PayloadMap<TextDrawerElement>>({ hierarchy, overrides, }: HierachyToTextDrawerProps<P>): HierachyToTextDrawerPropsReturn;

/**
 * Flat map of node-id → open/closed boolean for the entire text drawer tree.
 *
 * @remarks
 * Every node (parent and leaf) has an entry so that `defaultOpen` overrides can
 * be seeded uniformly.  Leaf nodes retain their state in the store even though
 * they have no visible collapse effect — this keeps the API surface consistent
 * and allows future controlled-open scenarios without schema changes.
 */
type TreeTextState = Record<string, boolean>;
/**
 * Minimal external store compatible with React's `useSyncExternalStore`.
 *
 * @remarks
 * Deliberately framework-agnostic — no React imports, no context coupling.
 * The store is created once per `TextDrawer` mount (via `useMemo`) and shared
 * downward through the `TextDrawer` context provider.
 *
 * @typeParam TreeTextState - Shape of the state slice managed by this store.
 */
type TreeTextStore<TreeTextState> = {
    /** Returns the current state snapshot. */
    getState: () => TreeTextState;
    /**
     * Replaces the state or applies a functional update.
     * Skips notification if the new reference is identical to the current one.
     * Notifies all subscribers after every accepted update.
     */
    setState: (next: TreeTextState | ((prev: TreeTextState) => TreeTextState)) => void;
    /**
     * Registers a listener called after every state change.
     * @returns An unsubscribe function — call it to remove the listener.
     */
    subscribe: (listener: () => void) => () => void;
};
/**
 * Creates a new {@link TreeTextStore} initialised with `initialState`.
 *
 * @remarks
 * The store uses a `Set` of listeners for O(1) subscribe/unsubscribe.
 * Reference equality is checked in `setState` to avoid spurious re-renders
 * when the same state object is returned from a functional update.
 *
 * @param initialState - Seed state; typically produced by walking the tree and
 *   collecting each node's `defaultOpen` override.
 * @returns A fully wired store instance.
 *
 * @example
 * ```ts
 * const store = createTreeTextStore({ 'section-a': true, 'section-b': false });
 * ```
 */
declare function createTreeTextStore(initialState: TreeTextState): TreeTextStore<TreeTextState>;
/**
 * React hook — subscribes to a single node's open/closed state.
 *
 * @remarks
 * Uses `useSyncExternalStore` for concurrent-safe granular subscriptions.
 * Each node only re-renders when its own boolean flips; sibling toggles are
 * invisible to it.  The server-side snapshot always returns `false` (collapsed).
 *
 * @param store - The shared store from `TextDrawer`.
 * @param nodeId - The node whose open state to observe.
 * @returns `true` when the node is open, `false` when closed or not found.
 */
declare function useTreeTextOpen(store: TreeTextStore<TreeTextState>, nodeId: string): boolean;
/**
 * Returns a stable setter that toggles a single node's open state in the store.
 *
 * @remarks
 * Curried so callers (typically `TextElement`) can create the setter once and
 * pass it down as a stable callback without re-creating it on every render.
 *
 * @param store - The shared store from `TextDrawer`.
 * @param nodeId - The node to mutate.
 * @returns A setter `(open: boolean) => void` that merges the new value into
 *   the existing state via a functional update.
 *
 * @example
 * ```ts
 * const onToggle = setTreeTextOpen(store, 'section-a');
 * onToggle(true);  // opens section-a
 * onToggle(false); // closes section-a
 * ```
 */
declare function setTreeTextOpen(store: TreeTextStore<TreeTextState>, nodeId: string): (open: boolean) => void;

/**
 * Semantic category of a text drawer node.
 *
 * - `'plainText'` — a leaf node that renders static content (text, label, link).
 * - `'paragraph'`— a leaf node that pairs a heading with body text.
 * - `'section'` — a parent node with collapsible children; must display an
 *   open/close indicator and handle `onClick` to toggle the `Collapse`.
 */
type TextTypes = 'plainText' | 'section' | 'paragraph';
/**
 * Fixed input type for every renderer's `props` factory function.
 *
 * @remarks
 * All available context is passed in one go so that each registry entry can
 * destructure only what it needs without having to declare a narrower input
 * type.  The **output** is what varies per entry (captured by `RendererProps`
 * in {@link RegistryEntry}); the input is always this type.
 *
 * Keeping the input fixed (not generic) avoids the "unknown at call site"
 * problem that would arise if the input type were also a type parameter.
 */
type TextPolicyProps = {
    /** The node's serialised data payload. */
    textDrawerElement: TextDrawerElement;
    /** Merged UI overrides for this node; `undefined` when none were provided. */
    textDrawerElementUI: TextDrawerElementUI | undefined;
    /** Zero-based nesting depth; passed to depth-aware renderers. */
    depth: number;
    /** Whether the node is currently in the open/expanded state. */
    isOpen: boolean;
    /** Whether the node has child nodes (always `true` for `section` renderers). */
    hasChildren: boolean;
    /** React node to display when the section is expanded (e.g. `<ExpandLess />`). */
    openIndicator: React__default.ReactNode;
    /** React node to display when the section is collapsed (e.g. `<ExpandMore />`). */
    closeIndicator: React__default.ReactNode;
    /**
     * Callback to toggle this node's collapsed/expanded state.
     * Must be wired to the `TreeTextStore` setter by the calling component.
     * Passed as a no-op for leaf nodes.
     */
    onClick: () => void;
};
/**
 * A single renderer entry in a {@link Registry}.
 *
 * @remarks
 * The existential pattern here is intentional:
 * - `RendererProps` is the **only** generic — it ties `props` output to
 *   `renderer` input so TypeScript can catch mismatches.
 * - The `Registry` type erases `RendererProps` to `any` (existential) so that
 *   a heterogeneous map of entries can be stored.  Type safety is enforced
 *   **per entry** via the {@link defineEntry} helper, not at the map level.
 *
 * @typeParam RendererProps - The prop type of the associated React component.
 */
type RegistryEntry<RendererProps extends unknown> = {
    /**
     * Semantic category; must match `TextDrawerElement.type` for payloads that
     * use this renderer key.
     */
    type: TextTypes;
    /**
     * Pure factory that maps the comprehensive {@link TextPolicyProps} onto the
     * narrower props expected by `renderer`.  Destructure only what is needed.
     */
    props: (props: TextPolicyProps) => RendererProps;
    /** The React component that receives the output of `props`. */
    renderer: React__default.ComponentType<RendererProps>;
};
/**
 * A map of renderer keys to their {@link RegistryEntry} definitions.
 *
 * @remarks
 * `RegistryEntry<any>` is the correct existential type here — using `unknown`
 * breaks spread at the call sites in `TextElement` and `TextOpenClose`.
 * Type correctness per entry is guaranteed by {@link defineEntry}.
 */
type Registry = Record<string, RegistryEntry<any>>;
/**
 * Derive a discriminated-union element type from a registry `R`.
 *
 * @remarks
 * Distributes over all keys `K` in `R` and produces a union where each
 * member has `renderer: K` and `type: R[K]['type']` correlated at compile
 * time.  This prevents assigning a `renderer` key whose `type` disagrees with
 * the node's `type` field.
 *
 * Use this when defining a payload map for `HierarchyTree`:
 *
 * @example
 * ```ts
 * const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
 * ```
 *
 * @typeParam R - The concrete registry (e.g. `DefaultRendersRegistry`).
 */
type TextDrawerElement_Rg<R extends Registry> = {
    [K in keyof R]: {
        title: string;
        renderer: K;
        type: R[K]['type'];
        subtitle?: string;
        icon?: string;
        content?: string;
        href?: string;
        order?: number;
    };
}[keyof R];
/**
 * A record of named payloads where every value is a valid element for registry `R`.
 *
 * @remarks
 * Convenience alias for `Record<string, TextDrawerElement_Rg<R>>` — use it
 * as the `satisfies` target when declaring a hierarchy's payload constants.
 *
 * @typeParam R - The concrete registry (e.g. `DefaultRendersRegistry`).
 */
type Payload_Rg<R extends Registry> = Record<string, TextDrawerElement_Rg<R>>;
/**
 * Extracts the subset of renderer keys in `R` whose `type` matches `T`.
 *
 * @example
 * ```ts
 * type SectionRenderers = FilterTypesInRegistry<'section', DefaultRendersRegistry>;
 * // → 'titleAndSubStd' | 'titleAndSubDepth'
 * ```
 *
 * @typeParam T - The `TextTypes` value to filter by.
 * @typeParam R - The registry to search.
 */
type FilterTypesInRegistry<T extends TextTypes, R extends Registry> = {
    [K in keyof R]: R[K]['type'] extends T ? K : never;
}[keyof R];
/**
 * Extracts the union of all `type` values present in registry `R`.
 *
 * @typeParam R - The registry to inspect.
 */
type GetTypesInRegistry<R extends Registry> = {
    [K in keyof R]: R[K]['type'];
}[keyof R];
/**
 * Identity helper that forces TypeScript to infer `RendererProps` concretely
 * for a single registry entry, catching `props`/`renderer` mismatches that
 * `satisfies Registry` (which erases to `any`) would miss.
 *
 * @remarks
 * Without this helper, `renderer: MyComponent` and `props: () => wrongShape`
 * would compile silently because `Registry` uses `RegistryEntry<any>`.
 * Wrapping each entry in `defineEntry({...})` gives TypeScript enough
 * information to infer `RP` and validate that `props` returns a type
 * assignable to `MyComponent`'s props.
 *
 * @example
 * ```ts
 * titleAndSubStd: defineEntry({
 *   type: 'section',
 *   props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick }) => ({
 *     title: textDrawerElement.title,
 *     indicator: isOpen ? openIndicator : closeIndicator,
 *     onClick,
 *   }),
 *   renderer: TitleAndSubStd, // TS verifies the shape matches TitleAndSubStdProps
 * }),
 * ```
 */
declare function defineEntry<RP>(e: RegistryEntry<RP>): RegistryEntry<RP>;

/**
 * Props for the `SimpleText` renderer.
 *
 * @remarks
 * Populated by the `simpleText` entry in {@link defaultRendersRegistry}:
 * `text` is `content ?? title`; `sx` comes from `TextDrawerElementUI.sx`.
 */
type SimpleTextProps = {
    /** The text content to display. */
    text: string;
    /** Optional MUI sx overrides forwarded from the node's UI overrides. */
    sx?: SxProps$1<Theme$1>;
};
/**
 * Leaf renderer — displays a single block of narrative text.
 *
 * @remarks
 * Renders a MUI `Typography` with `variant="narrative"`.  No heading, no
 * label — just prose.  Suitable for answer text in FAQ patterns or any node
 * where the content speaks for itself without a separate title row.
 *
 * Registry key: `"simpleText"` | Type: `"plainText"`
 */
declare function SimpleText({ text, sx }: SimpleTextProps): react_jsx_runtime.JSX.Element;

/**
 * Default renderer registry — the set of renderers available to every
 * `TextDrawer` out of the box.
 *
 * @remarks
 * Each key is a `renderer` value that can appear in a `TextDrawerElement`
 * payload.  The registry is passed to `TextDrawer_Client` via
 * the render context's `rendersRegistry` field.
 *
 * ## Available renderers
 *
 * | Key | Type | Component | Description |
 * |---|---|---|---|
 * | `simpleText` | `plainText` | `SimpleText` | Bare narrative text; uses `content` or falls back to `title`. |
 * | `titledText` | `paragraph` | `TitledText` | Label + optional subtitle + body text. |
 * | `labelOnly` | `plainText` | `LabelOnly` | Title rendered as a non-link label with no body. |
 * | `titleAndSubStd` | `section` | `TitleAndSubStd` | Collapsible section header at a fixed size. |
 * | `titleAndSubDepth` | `section` | `TitleAndSubDepth` | Collapsible section header that shrinks from h3→h4 at depth > 0. |
 * | `linkedLabel` | `plainText` | `LinkedLabel` | Clickable MUI link; requires `href` in the payload. |
 *
 * All entries are wrapped in {@link defineEntry} (except `simpleText` which is
 * inlined as a plain object — both approaches are valid) to ensure that the
 * `props` return shape is validated against the renderer's prop type at
 * compile time.
 *
 * @example
 * ```ts
 * // Using the default registry (automatic — no action needed)
 * <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />
 *
 * // Referencing the type for payload type-checking:
 * const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
 * ```
 */
declare const defaultRendersRegistry: {
    /** Bare narrative text. Uses `content`; falls back to `title` when absent. Supports `sx`. */
    readonly simpleText: {
        readonly type: "plainText";
        readonly props: ({ textDrawerElement, textDrawerElementUI }: TextPolicyProps) => {
            text: string;
            sx: _mui_material.SxProps<_mui_material.Theme> | undefined;
        };
        readonly renderer: typeof SimpleText;
    };
    /** Label + optional subtitle + body paragraph. Uses `content`; falls back to `title`. Supports `sx`. */
    readonly titledText: RegistryEntry<{
        title: string;
        subtitle: string | undefined;
        text: string;
        sx: _mui_material.SxProps<_mui_material.Theme> | undefined;
    }>;
    /** Title-only label with no body content. Supports `sx`. */
    readonly labelOnly: RegistryEntry<{
        title: string;
        sx: _mui_material.SxProps<_mui_material.Theme> | undefined;
    }>;
    /**
     * Collapsible section header — fixed heading size (h3 / `SubsectionTitle`).
     * Use when the section is always at the top level and heading size must not vary.
     */
    readonly titleAndSubStd: RegistryEntry<{
        title: string;
        subtitle: string | undefined;
        indicator: React$1.ReactNode;
        onClick: () => void;
    }>;
    /**
     * Collapsible section header — depth-aware heading size.
     * Renders `SubsectionTitleLabel` (h3) at depth 0 and `SubsubsectionTitleLabel` (h4)
     * at depth > 0.  Prefer this over `titleAndSubStd` for sections that may be nested.
     */
    readonly titleAndSubDepth: RegistryEntry<{
        title: string;
        subtitle: string | undefined;
        indicator: React$1.ReactNode;
        onClick: () => void;
        depth: number;
    }>;
    /**
     * Clickable link leaf node.  Requires `href` in the payload; falls back to `'#'`
     * if missing.  Supports `sx`.
     */
    readonly linkedLabel: RegistryEntry<{
        title: string;
        href: string;
        sx: _mui_material.SxProps<_mui_material.Theme> | undefined;
    }>;
};
/**
 * Convenience type alias for the default registry — use as the type argument
 * to `Payload_Rg<DefaultRendersRegistry>` when defining payload constants.
 */
type DefaultRendersRegistry = typeof defaultRendersRegistry;

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
 * Framework-agnostic link component contract.
 *
 * Uses the anchor element prop surface so adapters can map to
 * framework-specific link primitives (e.g. Next.js Link wrappers).
 */
type LinkTypeComponent = React$1.ComponentType<React$1.ComponentPropsWithoutRef<'a'>> | React$1.ForwardRefExoticComponent<React$1.ComponentPropsWithoutRef<'a'> & React$1.RefAttributes<HTMLAnchorElement>>;
/**
 * Default link implementation backed by a plain `<a>` element.
 */
declare const DefaultLinkLike: LinkTypeComponent;

/** Data payload for a single menu node. Stored in the hierarchy tree. */
type MenuTreeElement = {
    /** Display label shown in the UI. */
    label: string;
    /** Navigation target. Omit for toggle-only (non-link) nodes. */
    link?: string;
    /** Sort order among siblings. Lower values appear first. */
    order?: number;
};
/** Data payload for the invisible root node of the tree. */
type RootTreeElement = {
    label: string;
};
/** Per-node UI overrides applied on top of the default {@link RowPolicy} output. */
type MenuTreeElementUI = {
    /** Click handler — attached to the row wrapper instead of (or in addition to) navigation. */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /** Set to `false` to hide the node entirely. Defaults to `true`. */
    display?: boolean;
    /** Render a divider below this node. */
    divider?: boolean;
};
/** Root-level overrides that apply to the whole menu, not to individual nodes. */
type RootOverridesUI = {
    /** Custom link component (e.g. Next.js `Link`). Falls back to a plain `<a>` when omitted. */
    linkComponent?: LinkTypeComponent;
};
/**
 * Base props shared by all menu variants (DrawerMenu, DropDown).
 *
 * Build these props with {@link hierarchyToDrawerInput} rather than constructing them by hand.
 */
type MenuPropsRendering = {
    root: RootTreeElement;
    treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    rootOverrides?: RootOverridesUI;
};

/**
 * Callback used to determine whether a menu node is the currently active (selected) item.
 *
 * @param id - The node's unique string key in the hierarchy.
 * @param menuTreeElement - The node's data payload, or `null` if the node has no data.
 * @returns `true` if this node should be treated as the selected item.
 *
 * @example
 * ```ts
 * const selector: IsSelectedMenuElement = (id) => id === currentPageId;
 * ```
 */
type IsSelectedMenuElement = (id: string, menuTreeElement: MenuTreeElement | null) => boolean;
type GetSelectedPathProps = {
    nodeId: string;
    menuNode: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    selector: IsSelectedMenuElement;
    path: string[];
};
type GetselectorsProps = {
    treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    selector: IsSelectedMenuElement | undefined;
};
/**
 * Derived selection state computed from a single {@link IsSelectedMenuElement} callback.
 * Consumed by {@link MenuSelectorContext} throughout the menu tree.
 */
type GetSelectorsReturnType = {
    /** Returns `true` if the given node is the selected item. */
    isSelected: (nodeId: string) => boolean;
    /** Returns `true` if the given node is an ancestor of the selected item (but not selected itself). */
    isAncestorSelected: (nodeId: string) => boolean;
    /** The id of the selected node, or `null` if nothing is selected. */
    selectedId: string | null;
    /** Set of all node ids on the path from root to the selected node (inclusive). */
    selectedPathIds: Set<string>;
};
/**
 * Walks the menu tree using a depth-first search to find the selected node and
 * records the full ancestor path along the way.
 *
 * Returns {@link GetSelectorsReturnType} with stable function references for
 * `isSelected` and `isAncestorSelected`, suitable for passing into React context.
 * If no node matches the selector, all functions return `false`/`null`.
 */
declare function getSelectors({ treeFromRoot, selector, }: GetselectorsProps): GetSelectorsReturnType;
declare function getSelectedAndPath({ nodeId, menuNode, selector, path }: GetSelectedPathProps): {
    selectedId: string;
} | null;

/**
 * @packageDocumentation
 *
 * # Header
 * Sticky site header with brand (logo + subtitle), optional breadcrumbs, and either:
 * - a top **DropDown** menu, or
 * - a drawer-based **DirMenu**.
 *
 * Menus default to `src/data/menu.json` but can be injected via props.
 */
/** Where to place the menu in the header row. */
type HeaderMenuPosition = 'left' | 'center' | 'right';
/** Drawer anchor used when `menuType="drawer"`. */
type HeaderDrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
/** Responsive viewport settings used when `navigation.menuType` is omitted. */
type HeaderResponsiveMenuProps = {
    /** Breakpoint at and below which mobile behavior applies. @defaultValue 'md' */
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Menu variant used for small viewports. @defaultValue 'drawer' */
    mobileType?: 'drawer';
    /** Menu variant used for large viewports. @defaultValue 'dropDown' */
    desktopType?: 'dropDown';
};
/** Responsive breadcrumb visibility settings. */
type HeaderResponsiveBreadcrumbsProps = {
    /** Breakpoint at and below which mobile breadcrumb visibility applies. @defaultValue 'md' */
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Show breadcrumbs on small viewports. @defaultValue false */
    mobile?: boolean;
    /** Show breadcrumbs on large viewports. @defaultValue true */
    desktop?: boolean;
};
/** Header-level menu style passthrough to menu components. */
type HeaderMenuStylesProps = {
    dropDown?: {
        appBarSx?: SxProps$2<Theme$2>;
        toolbarSx?: SxProps$2<Theme$2>;
    };
    drawer?: {
        drawerPaperSx?: SxProps$2<Theme$2>;
        listSx?: SxProps$2<Theme$2>;
        triggerButtonSx?: SxProps$2<Theme$2>;
    };
};
/**
 * Brand/logo configuration for {@link Header}.
 *
 * This group controls only the left visual brand block.
 */
type HeaderBrandProps = {
    /** Brand logo (static import or URL string). */
    logo: StaticImageDataLike | string;
    /** Alt text for the logo image. */
    altLogo?: string;
    /** Subtitle under the logo (optional). */
    logoSubtitle?: string;
    /** Image renderer used for logo output (for example Next.js `Image`). */
    ImageComponent: ImageComponentLike;
};
/**
 * Header layout options that do not affect menu data.
 */
type HeaderLayoutProps = {
    /** Show breadcrumbs in the middle slot. @defaultValue true */
    showBreadcrumbs?: boolean;
    /**
     * Responsive breadcrumb behavior.
     * Defaults to hidden on mobile and visible on desktop.
     */
    responsiveBreadcrumbs?: HeaderResponsiveBreadcrumbsProps;
    /** Optional `sx` overrides for the outer AppBar. */
    appBarSx?: SxProps$2<Theme$2>;
    /** Optional `sx` overrides for the inner Toolbar. */
    toolbarSx?: SxProps$2<Theme$2>;
};
/**
 * Breadcrumb/routing configuration used by {@link BreadMenu}.
 */
type HeaderRoutingProps = {
    /** Link component used by breadcrumbs/menu items. */
    linkComponent: LinkTypeComponent;
    /** Explicit pathname used to mark current route. */
    pathname: string;
};
/**
 * Menu data and behavior for {@link Header}.
 */
type HeaderNavigationProps<P extends PayloadMap<MenuTreeElement>> = {
    /**
     * Explicit menu flavor to render.
     * When omitted, `responsiveMenu` decides between mobile and desktop menu types.
     */
    menuType?: 'dropDown' | 'drawer';
    /**
     * Responsive menu policy used only when `menuType` is omitted.
     * @defaultValue { breakpoint: 'md', mobileType: 'drawer', desktopType: 'dropDown' }
     */
    responsiveMenu?: HeaderResponsiveMenuProps;
    /** Visual `sx` passthrough for the rendered menu variant. */
    styles?: HeaderMenuStylesProps;
    /** Where to place the menu in the header row. @defaultValue 'right' */
    menuPosition?: HeaderMenuPosition;
    /**
     * Drawer anchor used only when `menuType="drawer"`.
     * Defaults to `'right'` when `menuPosition="right"`, otherwise `'left'`.
     */
    drawerAnchor?: HeaderDrawerAnchor;
    /** Typed hierarchy tree defining the menu structure. */
    hierarchy: HierarchyTree<P, RootTreeElement>;
    /** Per-node and root UI overrides (link component, dividers, display flags, etc.). */
    overrides: HierarchyTreeOverrides<P, HierarchyTree<P, RootTreeElement>, RootOverridesUI, MenuTreeElementUI>;
    /** Active-item selector used to compute selected/ancestor-selected states. */
    selector: IsSelectedMenuElement;
    /** Drawer indentation step passed to `DrawerMenu`. @defaultValue 2 */
    indent?: number;
};
/**
 * Grouped modern API for {@link Header}. Prefer this shape.
 */
type HeaderPropsGrouped<P extends PayloadMap<MenuTreeElement>> = {
    /** Brand/logo block options. */
    brand: HeaderBrandProps;
    /** Breadcrumb route and link behavior. */
    routing: HeaderRoutingProps;
    /** Menu data and behavior. */
    navigation: HeaderNavigationProps<P>;
    /** Optional visual layout overrides. */
    layout?: HeaderLayoutProps;
};
/**
 * Legacy flat API for {@link Header}.
 *
 * @deprecated Use grouped props via `brand`, `routing`, `navigation`, and `layout`.
 */
type HeaderPropsLegacy<P extends PayloadMap<MenuTreeElement>> = HeaderBrandProps & HeaderRoutingProps & HeaderNavigationProps<P> & HeaderLayoutProps;
/**
 * Props accepted by {@link Header}.
 *
 * Supports the grouped API and legacy flat API for backwards compatibility.
 */
type HeaderProps<P extends PayloadMap<MenuTreeElement>> = HeaderPropsGrouped<P> | HeaderPropsLegacy<P>;
type HeaderComponent = <P extends PayloadMap<MenuTreeElement>>(props: HeaderProps<P>) => React__default.JSX.Element;
declare const _default: HeaderComponent;

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
    sx?: SxProps$1<Theme>;
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
    /**
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

/**
 * Subset of MUI `TypographyProps` used to style the label text inside a menu row.
 * Passed from {@link RowPlan} into {@link ElementLabel}.
 */
type MenuLabelTypographyProps = Pick<TypographyProps, 'variant' | 'color' | 'fontWeight' | 'sx' | 'noWrap' | 'align' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textTransform'>;
/**
 * Inputs passed to a {@link RowPolicy} function for a single menu node.
 * Conveys depth, data, open/selected states, and whether the node has children.
 */
type RowPolicyProps = {
    /** Zero-based nesting depth (0 = top-level bar or drawer root). */
    depth: number;
    /** Data payload of the node. */
    menuTreeElement: MenuTreeElement;
    /** UI overrides for the node, if any. */
    menuTreeElementUI: MenuTreeElementUI | undefined;
    /** Whether the node's children are currently visible (open). */
    isOpen?: boolean;
    /** Whether this node is the currently active/selected item. */
    isSelected?: boolean;
    /** Whether this node is an ancestor of the selected item. */
    isAncestorSelected?: boolean;
    /** Whether the node has at least one child. */
    hasChildren: boolean;
};
/**
 * Computed visual plan for a single menu row.
 * Produced by {@link RowPolicy} and consumed by menu row render components.
 */
type RowPlan = {
    /** Label text (or a custom React node). */
    text: string | React__default.ReactNode;
    /** Typography props forwarded to the `<Typography>` wrapping the label. */
    typographyProps?: MenuLabelTypographyProps;
    /** Icon rendered to the left of the label (inside `ListItemIcon`). */
    icon?: React__default.ReactNode;
    /** Indicator icon (e.g. chevron) rendered beside the label. Position set by `indicatorPlacement`. */
    indicator?: React__default.ReactNode;
    /** Whether the indicator appears before or after the label. @defaultValue `"end"` */
    indicatorPlacement?: 'start' | 'end';
    /**
     * Logical (RTL-safe) inline-start padding for the row.
     *
     * **Note**: `DrawerMenu` policies express this in MUI spacing units (×8 px).
     * `DropDown` policies use raw pixel values. Both are passed directly into `sx.paddingInlineStart`.
     */
    paddingInlineStart: number;
    /** Additional `sx` styles applied to the row wrapper (`ListItemButton` or `ListItem`). */
    rowSx?: SxProps<Theme>;
};
/**
 * A function that maps a node's context ({@link RowPolicyProps}) to its visual plan ({@link RowPlan}).
 *
 * Pass a custom implementation via {@link MenuRenderContext} to restyle a menu
 * without modifying any component.
 *
 * @see {@link defaultDropDownPolicy} — default policy for the horizontal dropdown.
 * @see {@link defaultDrawerRowPolicy} — default policy for the slide-in drawer.
 */
type RowPolicy = (props: RowPolicyProps) => RowPlan;
/**
 * Layout and styling policy for the mega menu panel in the dropdown navigation bar.
 *
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in presets.
 */
type MegaMenuPolicy = {
    /** Render vertical `<Divider>` elements between columns. */
    showColumnDividers: boolean;
    /** Render a horizontal `<Divider>` below each column header (depth-1 item). */
    showItemDivider: boolean;
    /** Minimum width (px) for each column. */
    columnMinWidth: number;
    /** Padding around the whole panel in MUI spacing units. */
    outerPadding: number;
};

/**
 * State shape for a menu store: a map of node id → open/closed boolean.
 * Only nodes that have been explicitly toggled appear in the map;
 * absent nodes default to `false` (closed).
 */
type MenuState = Record<string, boolean>;
/**
 * Minimal observable store for menu open/close state.
 *
 * Compatible with React's `useSyncExternalStore`. Supports both direct
 * state replacement and functional updates to avoid stale closures.
 *
 * @see {@link createMenuStore} to create an instance.
 * @see {@link useNodeOpen} / {@link setOpen} for component-level helpers.
 */
type MenuStore<MenuState> = {
    /** Returns the current state snapshot. */
    getState: () => MenuState;
    /** Replaces the state or applies a functional update. Notifies all subscribers. */
    setState: (next: MenuState | ((prev: MenuState) => MenuState)) => void;
    /** Subscribes a listener that is called on every state change. Returns an unsubscribe function. */
    subscribe: (listener: () => void) => () => void;
};
/**
 * Creates a new {@link MenuStore} with the given initial state.
 *
 * @example
 * ```ts
 * const store = createMenuStore({});
 * ```
 */
declare function createMenuStore(initialState: MenuState): MenuStore<MenuState>;
/**
 * React hook that subscribes to the open/closed state of a single node.
 *
 * Returns `false` for nodes that have never been explicitly toggled.
 * Safe for server rendering (snapshot always returns `false`).
 *
 * @param store - The store created by {@link createMenuStore}.
 * @param nodeId - The node whose open state to read.
 */
declare function useNodeOpen(store: MenuStore<MenuState>, nodeId: string): boolean;
/**
 * Returns a stable setter that toggles the open state of a single node.
 *
 * @param store - The store created by {@link createMenuStore}.
 * @param nodeId - The node whose open state to update.
 * @returns A function `(open: boolean) => void` to call on toggle events.
 */
declare function setOpen(store: MenuStore<MenuState>, nodeId: string): (open: boolean) => void;

/** Input shape for {@link hierarchyToDrawerInput}. */
type HierachyToDrawerinputProps<P extends PayloadMap<MenuTreeElement>> = {
    /** Typed hierarchy tree defining the menu structure. */
    hierarchy: HierarchyTree<P, RootTreeElement>;
    /** Per-node and root UI overrides (link component, dividers, display flags, etc.). */
    overrides: HierarchyTreeOverrides<P, HierarchyTree<P, RootTreeElement>, RootOverridesUI, MenuTreeElementUI>;
};
/**
 * Return type of {@link hierarchyToDrawerInput}.
 * Either a validated prop set ready to pass to {@link DrawerMenu}, or a list of validation issues.
 */
type HierachyToDrawerPropsReturn = {
    ok: false;
    issues: HierarchyIssue[];
} | {
    ok: true;
    root: RootTreeElement;
    treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    rootOverrides?: RootOverridesUI;
};
/**
 * Converts a typed hierarchy tree into the prop shape expected by {@link DrawerMenu}.
 *
 * Validates the hierarchy and flattens it into a stratified tree. Returns `ok: false`
 * with a list of {@link HierarchyIssue}s if validation fails.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
 * if (!result.ok) {
 *   console.error(result.issues);
 *   return null;
 * }
 * return <DrawerMenu {...result} selector={(id) => id === currentPageId} />;
 * ```
 */
declare function hierarchyToDrawerInput<P extends PayloadMap<MenuTreeElement>>({ hierarchy, overrides, }: HierachyToDrawerinputProps<P>): HierachyToDrawerPropsReturn;

/** @internal Input shape for {@link prepareMenuTree} — `MenuProps` minus display-only fields. */
type PrepareMenuTreeProps<P extends PayloadMap<MenuTreeElement>> = HierachyToDrawerinputProps<P> & {
    issues: HierarchyIssue[];
};
/**
 * Validates, converts, sorts, and builds a typed menu tree from a raw hierarchy definition.
 *
 * Runs the full hierarchy pipeline:
 * 1. `resolver` — validates node references and detects cycles.
 * 2. `convertToD3Stratify` — maps node + override payloads to the stratify format.
 * 3. `sortD3Stratify` — orders siblings by `MenuTreeElement.order`.
 * 4. `buildTreeFromStratify` — assembles the nested {@link StratifyPayload} tree.
 *
 * Returns `{ ok: false, issues }` at the first pipeline failure so callers can
 * surface validation errors rather than rendering broken trees.
 *
 * @returns `{ ok: true, root }` on success, or `{ ok: false, issues }` on failure.
 *
 * @internal Called by {@link hierarchyToDrawerInput}.
 */
declare function prepareMenuTree<P extends PayloadMap<MenuTreeElement>>({ hierarchy, overrides, }: PrepareMenuTreeProps<P>): {
    ok: false;
    issues: HierarchyIssue[];
} | {
    ok: true;
    root: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};

/** @internal Props for {@link useRowPlan}. */
type UseRowPlanProps = {
    id: string;
    node: MenuTreeElement;
    children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
    overrides: MenuTreeElementUI | undefined;
};
/**
 * Computes the {@link RowPlan} for a single menu node by combining depth,
 * selection state, and the active {@link RowPolicy} from context.
 *
 * Reads from {@link MenuDepthContext}, {@link MenuSelectorContext}, and
 * {@link MenuRenderContext} — all three must be provided by an ancestor.
 *
 * @returns The computed `rowPlan`, the current `depth`, and a `hasChildren` flag.
 *
 * @internal Used by leaf and column elements that do not manage open/close state themselves.
 */
declare function useRowPlan({ id, node, children, overrides }: UseRowPlanProps): {
    rowPlan: RowPlan;
    depth: number;
    hasChildren: boolean;
};

/**
 * Props for {@link ElementButton}.
 * @internal
 */
type ElementButtonProps = {
    /** UI overrides for this node (display flag, click handler). */
    overrides: MenuTreeElementUI | undefined;
    /** Visual plan produced by the active {@link RowPolicy}. */
    rowPlan: RowPlan;
    /** Link component used for navigation (e.g. Next.js `Link`). Required when `link` is set. */
    linkComponent?: LinkTypeComponent;
    /**
     * Indicator icon (e.g. chevron) rendered after the label.
     * Sourced from `rowPlan.indicator` by the caller — passed separately so toggle
     * components can intercept the click without wrapping the whole button.
     */
    indicator?: React__default.ReactNode;
    /** Navigation href. When set (with `linkComponent`), renders a `ListItemButton` link. */
    link?: string;
};
/**
 * Lowest-level interactive row element. Renders one of three variants:
 *
 * - **Link** (`link` + `linkComponent` provided) — `ListItemButton` with `component={linkComponent}`.
 * - **Button** (`overrides.onClick` provided) — `ListItemButton` with an `onClick` handler.
 * - **Plain item** — non-interactive `ListItem`.
 *
 * Inner content is always {@link ElementLabel} (icon + text) followed by the optional `indicator`.
 *
 * @internal Used by {@link DrawerElement}, {@link DrawerOpenClose}, {@link DropDownElement}, and {@link DropDownOpenClose}.
 */
declare function ElementButton({ link, overrides, rowPlan, indicator, linkComponent, }: ElementButtonProps): react_jsx_runtime.JSX.Element | null;

/** @internal Props for {@link ElementLabel}. */
type ElementLabelProps = {
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
declare function ElementLabel({ typographyProps, icon, text }: ElementLabelProps): react_jsx_runtime.JSX.Element;

/**
 * Provides selection state derived from the active page selector callback.
 *
 * Holds stable `isSelected` and `isAncestorSelected` functions computed once
 * by {@link getSelectors} and distributed to all menu elements without re-renders.
 *
 * @see {@link GetSelectorsReturnType} for the full shape of the context value.
 */
type MenuSelectorContextType = GetSelectorsReturnType;
declare const MenuSelectorContext: React$1.Context<GetSelectorsReturnType | null>;

/** Returns {@link MenuSelectorContextType} from {@link MenuSelectorContext}. Throws if missing. */
declare function useMenuSelectorContext(): GetSelectorsReturnType;

/**
 * Shared rendering configuration passed down through a menu tree.
 *
 * Provides the {@link RowPolicy} (per-row styling), the {@link MegaMenuPolicy}
 * (mega menu panel layout), and the link component used for navigation items.
 * Set once at the top of each menu variant (DrawerMenu, DropDown) and consumed
 * by every element and label component below it.
 */
type MenuRenderContextType = {
    /** Component used to render navigation links (e.g. Next.js `Link`). */
    linkLikeComp: LinkTypeComponent;
    /** Determines visual styling for each row based on depth and selection state. */
    rowPolicy: RowPolicy;
    /** Layout policy for the mega menu panel (dropdown only). */
    megaMenuPolicy?: MegaMenuPolicy;
};
declare const MenuRenderContext: React$1.Context<MenuRenderContextType | null>;

/** Returns {@link MenuRenderContextType} from {@link MenuRenderContext}. Throws if missing. */
declare function useMenuRenderContext(): MenuRenderContextType;

/**
 * Props for the {@link DrawerMenu} component.
 * Extends the shared {@link MenuPropsRendering} with drawer-specific layout options.
 */
type DrawerMenuPropsRendering = MenuPropsRendering & {
    /** Which edge of the screen the drawer slides in from. @defaultValue `'left'` */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Base indentation multiplier (MUI spacing units) applied per depth level.
     * Each depth-N item receives `indent * (N + 2)` spacing units of inline-start padding,
     * which is designed to clear the icon width present at depth 0.
     * @defaultValue `0`
     */
    indent?: number;
    /** Optional `sx` overrides for the MUI Drawer paper slot. */
    drawerPaperSx?: SxProps$2<Theme$2>;
    /** Optional `sx` overrides for the root navigation list inside the drawer. */
    listSx?: SxProps$2<Theme$2>;
    /** Optional `sx` overrides for the menu trigger IconButton. */
    triggerButtonSx?: SxProps$2<Theme$2>;
};

/** Props for the public {@link DrawerMenu} component. */
type DrawerMenuProps = DrawerMenuPropsRendering & {
    /**
     * Callback that identifies the currently active menu item (e.g. the current page).
     * If omitted, no item is selected and all ancestor highlighting is disabled.
     */
    selector?: IsSelectedMenuElement;
};
/**
 * Top-level entry point for the collapsible sidebar (drawer) navigation.
 *
 * Orchestrates three React contexts before rendering the interactive client component:
 * - **MenuSelectorContext** — derives `isSelected` / `isAncestorSelected` from the `selector` callback.
 * - **MenuControllerContext** — a Zustand store tracking which nodes are expanded,
 *   pre-opened along the path to the selected item.
 *
 * Renders a hamburger `IconButton` that opens a MUI `Drawer` containing the menu tree.
 * Each top-level item shows an icon resolved by name via `IconPicker`.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
 * if (result.ok) {
 *   return (
 *     <DrawerMenu
 *       {...result}
 *       anchor="left"
 *       indent={2}
 *       selector={(id) => id === currentPageId}
 *     />
 *   );
 * }
 * ```
 *
 * @see {@link hierarchyToDrawerInput} to build the required props from a hierarchy definition.
 * @see {@link defaultDrawerRowPolicy} for the default row styling policy.
 */
declare function DrawerMenu({ root: root, treeFromRoot: treeFromRoot, rootOverrides, anchor, indent, drawerPaperSx, listSx, triggerButtonSx, selector, }: DrawerMenuProps): react_jsx_runtime.JSX.Element;

/** Configuration for {@link defaultDrawerRowPolicy}. */
type DefaultRowPolicyProps = {
    /**
     * Base indentation multiplier in MUI spacing units.
     * Depth-N items receive `baseIndent * (N + 2)` units of inline-start padding,
     * designed to clear the icon width present at depth 0.
     * Should match the `indent` prop passed to {@link DrawerMenu}.
     */
    baseIndent: number;
    /** Icon shown next to a node when its children are expanded. */
    openIndicator: React.ReactNode;
    /** Icon shown next to a node when its children are collapsed. */
    closeIndicator: React.ReactNode;
};
/**
 * Default {@link RowPolicy} for the drawer menu.
 *
 * Styling rules:
 * - **depth 0** — semibold (`fontWeight: 600`), `text.primary`, icon resolved by label name via `IconPicker`.
 * - **depth 1+** — `0.875rem` font, `text.secondary`, no icon.
 * - **selected** — `primary.main` colour, semibold, 3px inline-start accent border + `action.hover` background.
 * - **ancestor of selected** — promoted to `text.primary` and semibold to trace the active path.
 *
 * Pass a custom `RowPolicy` via {@link MenuRenderContext} to restyle without modifying components.
 */
declare const defaultDrawerRowPolicy: ({ baseIndent, openIndicator, closeIndicator, }: DefaultRowPolicyProps) => RowPolicy;

/** Props for the {@link DropDown} component. Extends the shared {@link MenuPropsRendering}. */
type DropDownMenuProps = MenuPropsRendering & {
    /**
     * Callback that identifies the currently active menu item (e.g. the current page).
     * Drives selected and ancestor-selected visual states via {@link MenuSelectorContext}.
     * If omitted, no item is highlighted.
     */
    selector?: IsSelectedMenuElement;
    /**
     * Layout and styling policy for the mega menu panels.
     * Controls column dividers, item dividers, column min-width, and outer padding.
     * @defaultValue {@link standardMegaMenuPolicy}
     */
    megaMenuPolicy?: MegaMenuPolicy;
    /** Optional `sx` overrides for the dropdown `AppBar`. */
    appBarSx?: SxProps$2<Theme$2>;
    /** Optional `sx` overrides for the dropdown `Toolbar`. */
    toolbarSx?: SxProps$2<Theme$2>;
};
/**
 * Top-level entry point for the horizontal dropdown (mega menu) navigation bar.
 *
 * Sets up {@link MenuSelectorContext} from the `selector` callback, then delegates
 * rendering to the client dropdown renderer that mounts a sticky MUI `AppBar`.
 *
 * Top-level items are rendered at depth 0. Items with children open a MUI `Popover`
 * containing a mega menu panel laid out as columns.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
 * if (result.ok) {
 *   return (
 *     <DropDown
 *       {...result}
 *       selector={(id) => id === currentPageId}
 *       megaMenuPolicy={compactMegaMenuPolicy}
 *     />
 *   );
 * }
 * ```
 *
 * @see {@link hierarchyToDrawerInput} to build the required props from a hierarchy definition.
 * @see {@link defaultDropDownPolicy} for the default row styling policy.
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in mega menu policies.
 */
declare function DropDown({ root, treeFromRoot, rootOverrides, selector, megaMenuPolicy, appBarSx, toolbarSx, }: DropDownMenuProps): react_jsx_runtime.JSX.Element;

/** Configuration for {@link defaultDropDownPolicy}. */
type DefaultDropDownProps = {
    /**
     * Reserved for future use. Currently unused — the dropdown does not apply
     * depth-based indentation to depth-0 items. Sub-items in the mega menu use
     * raw-pixel indentation: `(depth - 1) * 8px`.
     */
    baseIndent: number;
    /** Indicator icon shown on depth-0 items that have children (pointing downward). */
    downIndicator: React.ReactNode;
    /** Indicator icon shown on depth-2+ items that have children (pointing right). */
    rightIndicator: React.ReactNode;
};
/**
 * Default {@link RowPolicy} for the horizontal dropdown / mega menu navigation.
 *
 * Styling rules by depth:
 * - **depth 0** — nav bar items: `text.primary`, icon resolved by label name via `IconPicker`,
 *   down-chevron indicator. Label is title-cased.
 * - **depth 1** — mega menu column headers: uppercase, letter-spaced, small (`0.7rem`),
 *   `text.secondary`, bold (`700`). No icon.
 * - **depth 2+** — mega menu items: indented `(depth - 1) * 8px` (raw pixels). No icon.
 * - **selected** — `primary.main` colour, bold (`700`). No background change.
 * - **ancestor-selected at depth 0** — medium weight (`500`), `text.primary`.
 *
 * Pass a custom `RowPolicy` via {@link MenuRenderContext} to restyle without modifying components.
 */
declare const defaultDropDownPolicy: ({ baseIndent, downIndicator, rightIndicator, }: DefaultDropDownProps) => RowPolicy;

/**
 * Standard {@link MegaMenuPolicy} preset.
 *
 * Vertical dividers between columns, horizontal divider below each column header,
 * generous column width and outer padding. Suitable for most navigation bars.
 */
declare const standardMegaMenuPolicy: MegaMenuPolicy;
/**
 * Compact {@link MegaMenuPolicy} preset.
 *
 * No dividers, narrower columns, tighter outer padding.
 * Useful for secondary navigation or space-constrained layouts.
 */
declare const compactMegaMenuPolicy: MegaMenuPolicy;

/**
 * Props for {@link BreadMenu}.
 */
type BreadMenuProps = {
    /**
     * Optional explicit pathname (useful for stories and SSR).
     * Falls back to `window.location.pathname` when omitted.
     */
    pathname?: string;
    /** Optional custom link component (e.g., Next.js Link). */
    linkComponent?: LinkTypeComponent;
    /** Hide the “Home” root link. @defaultValue false */
    hideRoot?: boolean;
    /** Map segment -> label (e.g., { 'about-us': 'About Us' }). */
    segmentLabels?: Record<string, string>;
    /** Exclude these segments entirely (e.g., ['blog']). */
    exclude?: string[];
    /** Collapse long trails. See MUI Breadcrumbs `maxItems`. */
    maxItems?: number;
    /** Typography font size (applies via sx). */
    fontSize?: string | number;
    /** Extra styles for the Breadcrumbs root. */
    sx?: SxProps<Theme>;
    /** Capitalize segments (kebab-case → Title Case). @defaultValue true */
    titleCase?: boolean;
};
/**
 * Breadcrumb navigation derived from a pathname.
 */
declare const BreadMenu: {
    ({ pathname, linkComponent, hideRoot, segmentLabels, exclude, maxItems, fontSize, sx, titleCase, }: BreadMenuProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

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

/**
 * Heading-styled label component with non-heading semantics.
 *
 * Uses the same visual scale as `Title` (`h1`..`h4`) while restricting the
 * rendered element to `span`, `div`, or `p`.
 */
interface TitleLabelProps extends Omit<React$1.ComponentProps<typeof Typography>, 'variant' | 'component'> {
    /** Visual hierarchy level mapped to `h1`..`h4` typography variants. */
    sectionType: TitleTypes;
    /** Restrict to non-heading tags to keep semantics clean. @defaultValue 'span' */
    component?: 'span' | 'div' | 'p';
}
/**
 * Non-semantic title text that mirrors `Title` visual hierarchy.
 */
declare const TitleLabel: React$1.FC<TitleLabelProps>;
/** Non-heading wrapper using page-level visual style. */
declare const PageTitleLabel: React$1.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using section-level visual style. */
declare const SectionTitleLabel: React$1.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using subsection-level visual style. */
declare const SubsectionTitleLabel: React$1.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using subsubsection-level visual style. */
declare const SubsubsectionTitleLabel: React$1.FC<Omit<TitleLabelProps, 'sectionType'>>;

/**
 * @module HierarchyResolver
 * @remarks
 * Runtime validation for {@link HierarchyTree} / {@link HierarchyRelations}.
 *
 * Types prevent some invalid states (e.g. self-parenting), but runtime validation is still required for:
 * - missing parents / missing nodes
 * - invalid parent references
 * - cycle detection
 * - ensuring at least one node attaches to `"root"`
 */

/**
 * Result of {@link resolver}.
 *
 * @remarks
 * - When `ok: false`, `issues` contains one or more {@link HierarchyIssue} entries.
 * - When `ok: true`, `resolvedHierarchy` is the validated hierarchy tree.
 */
type ResolverReturn<H extends HierarchyTree<any, any>> = {
    ok: false;
    issues: HierarchyIssue[];
} | {
    ok: true;
    resolvedHierarchy: H;
};
/**
 * Validate a hierarchy tree and detect invalid relations.
 *
 * @remarks
 * Checks performed:
 * 1. No `"root"` key inside `nodes`
 * 2. No undefined node entries
 * 3. Every node has a parent (non-null/undefined)
 * 4. Parent must be `"root"` or an existing node id
 * 5. No self-parenting
 * 6. At least one node attaches to `"root"`
 * 7. No cycles (DFS)
 *
 * @example
 * ```ts
 * const result = resolver(tree);
 * if (!result.ok) {
 *   console.log(result.issues);
 * } else {
 *   const valid = result.resolvedHierarchy;
 * }
 * ```
 */
declare function resolver<H extends HierarchyTree<any, any>>(hierarchyTree: H): ResolverReturn<H>;

/**
 * @module HierarchyD3
 * @remarks
 * Utilities for converting this library’s hierarchy relations into a `d3-hierarchy` stratified tree.
 *
 * This module produces the `id/parentId` array required by `d3.stratify()` and returns a
 * {@link HierarchyNode} root containing a synthetic `"root"` anchor node.
 */

/**
 * The `d3-hierarchy` node type returned by {@link convertToD3Stratify}.
 */
type Stratify<Node, NodeOverrides> = HierarchyNode<D3StratifyData<Node, NodeOverrides>>;

declare function convertToD3Stratify<Node, NodeOverrides, P extends PayloadMap<Node>>(hierarchy: HierarchyRelations<P>, overridesNodes?: HierarchyRelationsOverrides<P, HierarchyRelations<P>, NodeOverrides>): {
    ok: true;
    root: Stratify<Node, NodeOverrides>;
} | {
    ok: false;
    issues: HierarchyIssue[];
};

/**
 * Helper that anchors generic inference for a hierarchy relations model.
 *
 * @remarks
 * `_payloadMap` is intentionally unused at runtime; it exists to drive
 * compile-time inference for `P`.
 */
declare const defineHierarchyModel: <P extends PayloadMap>(_payloadMap: P, model: HierarchyRelations<P>) => HierarchyRelations<P>;

/**
 * Sort a `d3-hierarchy` stratified tree by `payload.node.order`.
 *
 * @remarks
 * - Uses the `HierarchyNode.sort` method to order siblings.
 * - Primary key: `payload.node.order` (ascending).
 * - Fallback: `id` lexicographic compare when `order` is missing.
 *
 * Validation:
 * - Reports {@link HIERARCHY_ERROR_CODE.NULL_NODE} if it encounters a non-root node
 *   whose `payload.node` is `null`.
 *
 * ⚠️ Current behavior: issues are collected but sorting still proceeds.
 * If you want `ok:false` on any issue, return early when `issues.length > 0`.
 *
 * @typeParam Node - Node payload type. Must include `{ order: number }`.
 * @typeParam NodeOverrides - Optional override payload type embedded in {@link StratifyPayload}.
 */
declare function sortD3Stratify<Node extends {
    order?: number;
}, NodeOverrides>(stratify: Stratify<Node, NodeOverrides>): {
    ok: true;
    root: Stratify<Node, NodeOverrides>;
} | {
    ok: false;
    issues: HierarchyIssue[];
};

/**
 * Build a nested `{ children: Record<id, payload> }` tree from a `d3-hierarchy` stratified root.
 *
 * @remarks
 * This converts the `HierarchyNode` representation (where children are stored as arrays of nodes)
 * into a plain object tree of {@link StratifyPayload} values keyed by child id.
 *
 * ⚠️ **Mutation:** This function mutates `stratify.data.payload` objects by assigning/creating
 * `payload.children` on parents during traversal.
 *
 * The returned `root` is the payload object corresponding to the stratify root (often the synthetic `"root"` node),
 * with `root.children` set to the constructed children map.
 *
 * @param stratify - Root {@link Stratify} node returned by `d3.stratify()`.
 * @returns `{ root, issues }` where `root` is a plain {@link StratifyPayload} tree.
 *
 * @example
 * ```ts
 * const res = convertToD3Stratify(nodes, overrides);
 * if (!res.ok) throw new Error(res.issues[0]?.message);
 *
 * const built = buildTreeFromStratify(res.root);
 * console.log(built.root?.children);
 * ```
 */
declare function buildTreeFromStratify<Node, NodeOverrides>(stratify: Stratify<Node, NodeOverrides>): {
    root: StratifyPayload<Node, NodeOverrides>;
    issues: HierarchyIssue[];
};

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
    readonly home: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly settings: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly profile: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly account: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly contact: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly help: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly support: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly dashboard: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly notifications: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly alerts: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly logout: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'log-out': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly signout: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'sign-out': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly login: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'log-in': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly signin: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'sign-in': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly info: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly information: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly about: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'about-us': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly team: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly privacy: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    readonly 'privacy-policy': _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
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

export { ActionButton, type ActionButtonProps, BackButton, type BackButtonProps, BackgroundBox, type BackgroundBoxProps, _default$4 as BannerCarousel, type BannerCarouselProps, _default$6 as BannerStatic, type BannerStaticProps, _default$5 as BlockCarousel, type BodyTextProps, BookingButton, type BookingButtonProps, BreadMenu, type BreadMenuProps, CallToActionButton, type CallToActionButtonProps, type CarouselConfig, type CarouselProps, _default$1 as ClickTextImage, type ClickTextImageProps, CopyButton, type CopyButtonProps, type D3StratifyData, DebouncedTextField, type DebouncedTextFieldProps, DefaultLinkLike, type DefaultRendersRegistry, type DiagnosticOrigin, type DiagnosticSeverity, DownloadButton, type DownloadButtonProps, DrawerMenu, type DrawerMenuProps, type DrawerMenuPropsRendering, DropDown, type DropDownMenuProps, _default$3 as DynamicTransition, type DynamicTransitionProps, ElementButton, type ElementButtonProps, ElementLabel, type ElementLabelProps, type ErrorCode, type FallbackPlatform, FavoriteButton, type FavoriteButtonProps, type FavoriteType, FeaturedColumnsFooter, type FeaturedColumnsFooterProps, type FileType, type FilterTypesInRegistry, FiveColumnsFooter, type FiveColumnsFooterProps, GetInTouch, type GetSelectorsReturnType, type GetTypesInRegistry, HIERARCHY_ERROR_CODE, _default as Header, type HeaderBrandProps, type HeaderDrawerAnchor, type HeaderLayoutProps, type HeaderMenuPosition, type HeaderMenuStylesProps, type HeaderNavigationProps, type HeaderProps, type HeaderPropsGrouped, type HeaderPropsLegacy, type HeaderResponsiveBreadcrumbsProps, type HeaderResponsiveMenuProps, type HeaderRoutingProps, HeroBlock, type HeroBlockProps, type HierachyToDrawerPropsReturn, type HierachyToDrawerinputProps, type HierachyToTextDrawerProps, type HierachyToTextDrawerPropsReturn, type HierarchyIssue, type HierarchyRelations, type HierarchyRelationsOverrides, type HierarchyTree, type HierarchyTreeOverrides, HtmlImage, IconPicker, type ImageCarousel, type ImageComponentLike, type ImageConf, type IsSelectedMenuElement, type LinkTypeComponent, _default$2 as MainTitle, type MainTitleBlock, type MainTitleProps, type MediaAndTextNoMessage, type MediaAndTextProps, MediaText, type MegaMenuPolicy, type MenuPropsRendering, MenuRenderContext, type MenuRenderContextType, MenuSelectorContext, type MenuSelectorContextType, type MenuState, type MenuStore, type MenuTreeElement, type MenuTreeElementUI, type NodeId, type NodeInferred, Pad, type PadProps, PageLayout, type PageLayoutProps, PageTitle, PageTitleLabel, type PayloadMap, type Payload_Rg, type Registry, type RegistryEntry, type ResolverReturn, type RootOverridesUI, type RootTextElement, type RootTextElementUI, type RootTreeElement, RouterProvider, type RowPlan, type RowPolicy, type RowPolicyProps, SECTION_MIN_H, type ScriptComponentLike, type ScriptStrategy, Section, type SectionProps, type SectionSize, SectionTitle, SectionTitleLabel, ShareButton, type ShareButtonProps, type ShareData, SocialButton, type SocialButtonProps, type SocialPlatform, Spacer, type SpacerProps, StandardStack, type StandardStackProps, type StaticImageDataLike, type Stratify, type StratifyPayload, SubscribeButton, type SubscribeButtonProps, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, TextDrawer, type TextDrawerElement, type TextDrawerElementUI, type TextDrawerElement_Rg, type TextDrawerProps$1 as TextDrawerProps, type TextPolicyProps, type TextProps, type TextTypes, ThreeColumnsFooter, type ThreeColumnsFooterProps, Title, TitleLabel, type TitleLabelProps, type TitleProps, type TitleTypes, TouchButton, type TreeTextState, type TreeTextStore, TwoColumnsFooter, type TwoColumnsFooterProps, type UniversalImageProps, type UniversalScriptProps, VideoModal, type VideoModalProps, WhatsAppButton, type WhatsAppButtonProps, boldToNodes, buildTreeFromStratify, camelCase, compactMegaMenuPolicy, convertToD3Stratify, createMenuStore, createTreeTextStore, defaultDrawerRowPolicy, defaultDropDownPolicy, defaultRendersRegistry, defineEntry, defineHierarchyModel, getSelectedAndPath, getSelectors, hierarchyToDrawerInput, hierarchyToTextDrawerProps, index as icon, isStaticImageDataLike, parseInlineMarkdown, prepareMenuTree, resolver, safeTitleCase, sectionMinHeightSx, setOpen, setTreeTextOpen, sortD3Stratify, standardMegaMenuPolicy, index$1 as text, toImgAttrs, toTitleCase, useMenuRenderContext, useMenuSelectorContext, useNodeOpen, useRowPlan, useTreeTextOpen };
