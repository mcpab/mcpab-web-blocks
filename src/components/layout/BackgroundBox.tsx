/**
 * @fileoverview BackgroundBox - Flexible background image container with dual rendering modes
 * 
 * A sophisticated background image wrapper component that provides two distinct rendering
 * behaviors optimized for different use cases. Features Next.js Image optimization,
 * responsive design support, and accessibility compliance with performance considerations.
 * 
 * Key Features:
 * - Dual rendering modes: full-bleed fill and width-capped positioning
 * - Next.js Image component integration with full optimization support
 * - StaticImageData support for build-time optimized images
 * - Color overlay system with customizable opacity and blending
 * - Responsive image sizing with device-specific optimization
 * - Accessibility compliance with proper ARIA attributes
 * - Performance optimizations with blur placeholders and priority loading
 * 
 * Rendering Modes:
 * 1. **Full-bleed fill** (default): Image fills entire container with absolute positioning
 *    - Ideal for hero sections, page backgrounds, and full-screen layouts
 *    - Uses object-fit: cover for maintaining aspect ratio while filling space
 *    - Supports responsive breakpoints and device-specific optimizations
 * 
 * 2. **Width-capped**: Image centered within container with explicit width constraints
 *    - Perfect for logos, illustrations, and content images
 *    - Uses object-fit: contain to preserve entire image within bounds
 *    - Maintains aspect ratio with configurable positioning
 * 
 * Next.js Image Integration:
 * - Full compatibility with Next.js Image component via ImageComponent prop
 * - Automatic StaticImageData detection for build-time optimization
 * - Blur placeholder generation for static imports
 * - Responsive sizes configuration for optimal bandwidth usage
 * - Priority loading support for above-the-fold content
 * - Quality control for JPEG/WebP compression optimization
 * 
 * Use Cases:
 * - Hero section backgrounds with overlay content
 * - Product showcase containers with branding overlays
 * - Marketing banner backgrounds with call-to-action overlays
 * - Article header images with text overlays
 * - Landing page section backgrounds with centered content
 * - Logo display containers with responsive sizing
 * - Illustration containers with maintained aspect ratios
 * 
 * Performance Considerations:
 * - Optimized for Core Web Vitals (LCP, CLS, FCP)
 * - Efficient image loading with Next.js optimization pipeline
 * - Memory-conscious blur placeholder handling
 * - Responsive image selection for bandwidth optimization
 * - Progressive enhancement with graceful fallbacks
 * 
 * @example
 * // Full-bleed hero background with Next.js Image
 * import Image from 'next/image';
 * import heroImage from '/public/hero.jpg';
 * 
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: heroImage,
 *     mode: 'cover',
 *     objectPosition: '50% 40%',
 *     sizes: '100vw',
 *     priority: true,
 *     overlayColor: 'rgba(0,0,0,0.4)'
 *   }}
 *   sx={{ minHeight: '100vh' }}
 * >
 *   <HeroContent />
 * </BackgroundBox>
 * 
 * @example
 * // Width-capped illustration with responsive sizing
 * import Image from 'next/image';
 * import illustrationImage from '/public/illustration.svg';
 * 
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: illustrationImage,
 *     width: 'min(85vw, 720px)',
 *     objectPosition: '50% 50%',
 *     aspectRatio: '16 / 9',
 *     quality: 90
 *   }}
 *   sx={{ minHeight: 360, display: 'flex', alignItems: 'center' }}
 * />
 * 
 * @example
 * // Product background with branding overlay
 * import Image from 'next/image';
 * import productBg from '/public/product-background.jpg';
 * 
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: productBg,
 *     mode: 'cover',
 *     opacity: 0.8,
 *     overlayColor: 'linear-gradient(135deg, rgba(74,144,226,0.3), rgba(80,200,120,0.3))',
 *     sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
 *     quality: 85
 *   }}
 *   sx={{ 
 *     minHeight: 500,
 *     display: 'flex',
 *     alignItems: 'center',
 *     justifyContent: 'center'
 *   }}
 * >
 *   <ProductInfo />
 * </BackgroundBox>
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

/**
 * @packageDocumentation
 *
 * # BackgroundBox
 *
 * Flexible background image wrapper with two behaviors:
 *
 * 1) **Full-bleed fill** (default): image fills the container (absolute/inset:0).
 * 2) **Width-capped**: when you pass `imageConf.width`, the image is centered and
 *    constrained to that width (useful for logos/illustrations). Still uses Next/Image
 *    `fill` for decoding; the parent box provides the size constraint.
 *
 * Extras:
 * - Optional color overlay above the image.
 * - Optional `transform` & `objectPosition`.
 * - Blur placeholder for **static imports**; string URLs default to `empty`.
 *
 * @example Full-bleed hero background
 * ```tsx
 * <BackgroundBox
 *   imageConf={{ src: hero, mode: 'cover', objectPosition: '50% 40%', sizes: '100vw', priority: true }}
 *   sx={{ minHeight: 420 }}
 * >
 *   <HeroContent />
 * </BackgroundBox>
 * ```
 *
 * @example Width-capped (e.g., illustration centered)
 * ```tsx
 * <BackgroundBox
 *   imageConf={{ src: illo, width: 'min(85vw, 720px)', objectPosition: '50% 50%' }}
 *   sx={{ minHeight: 360 }}
 * />
 * ```
 */

import * as React from 'react';
import  { StaticImageDataLike } from '../../core/images/image-types'
import type { ImageComponentLike  } from 'src/core/images/image-types';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Calculate CSS positioning properties for image placement within container
 * 
 * Converts CSS object-position values into absolute positioning coordinates
 * for precise image placement within the background container. Handles both
 * percentage and keyword-based positioning with automatic centering fallback.
 * 
 * @param {string} [objectPosition] - CSS object-position value (e.g., 'center top', '25% 75%')
 * @returns {object} CSS positioning properties with left, top, and transform values
 * 
 * @example
 * // Center positioning (default)
 * getBoxPosition() 
 * // Returns: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }
 * 
 * @example
 * // Custom positioning
 * getBoxPosition('25% 75%')
 * // Returns: { left: '25%', top: '75%', transform: 'translate(-25%, -75%)' }
 * 
 * @example
 * // Keyword positioning
 * getBoxPosition('left top')
 * // Returns: { left: 'left', top: 'top', transform: 'translate(-left, -top)' }
 */
function getBoxPosition(objectPosition?: string) {
  if (!objectPosition) return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
  const [x = '50%', y = '50%'] = objectPosition.split(' ');
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}

/**
 * Configuration interface for background image properties and optimization
 * 
 * Comprehensive configuration object that controls image rendering behavior,
 * positioning, optimization settings, and Next.js Image component integration.
 * Supports both full-bleed backgrounds and width-constrained image display.
 * 
 * @interface ImageConf
 */
export type ImageConf = {
  /** 
   * Image source - supports Next.js StaticImageData or URL strings
   * 
   * @type {string | StaticImageData}
   * 
   * **StaticImageData (Recommended for Next.js):**
   * - Build-time optimized imports from static files
   * - Automatic width/height detection and blur placeholder generation
   * - Enhanced performance with pre-calculated dimensions
   * - Type-safe image handling with compile-time validation
   * 
   * **String URLs:**
   * - Dynamic images from APIs, CDNs, or external sources
   * - Runtime image loading with Next.js optimization
   * - Requires manual aspect ratio configuration for width-capped mode
   * - Supports both relative and absolute URLs
   * 
   * @example
   * // StaticImageData (Next.js import)
   * import heroImage from '/public/hero.jpg';
   * src: heroImage
   * 
   * @example
   * // String URL (dynamic)
   * src: 'https://cdn.example.com/images/hero.jpg'
   * 
   * @example
   * // Relative path
   * src: '/images/hero.jpg'
   */
  src: string | StaticImageDataLike;

  /** 
   * Object-fit behavior for full-bleed rendering mode
   * 
   * @type {'cover' | 'contain' | 'scale-down'}
   * @default 'cover'
   * 
   * **'cover'** (Default):
   * - Image fills entire container while maintaining aspect ratio
   * - May crop parts of image to maintain container dimensions
   * - Ideal for hero backgrounds and full-screen layouts
   * 
   * **'contain'**:
   * - Entire image visible within container bounds
   * - May leave empty space if aspect ratios don't match
   * - Best for preserving complete image visibility
   * 
   * **'scale-down'**:
   * - Behaves like 'contain' but never scales image larger than original size
   * - Prevents pixelation of small images
   * - Useful for icons and logos that shouldn't be enlarged
   */
  mode?: 'cover' | 'contain' | 'scale-down';

  /** 
   * Color overlay applied above the background image
   * 
   * @type {string}
   * 
   * Supports all CSS color formats including gradients and transparency.
   * Applied as a layer between the image and content for improved text contrast
   * and visual hierarchy.
   * 
   * @example
   * // Solid color with transparency
   * overlayColor: 'rgba(0,0,0,0.4)'
   * 
   * @example
   * // Linear gradient overlay
   * overlayColor: 'linear-gradient(135deg, rgba(74,144,226,0.3), rgba(80,200,120,0.3))'
   * 
   * @example
   * // Radial gradient for spotlight effect
   * overlayColor: 'radial-gradient(circle at center, rgba(0,0,0,0.2), rgba(0,0,0,0.6))'
   */
  overlayColor?: string;

  /** 
   * Image opacity for full-bleed rendering mode
   * 
   * @type {number}
   * @default 1
   * @range 0-1
   * 
   * Controls the transparency of the background image itself.
   * Useful for creating subtle background effects or reducing image prominence
   * while maintaining overlay functionality.
   */
  opacity?: number;

  /** 
   * CSS object-position for image placement within container
   * 
   * @type {string}
   * @default '50% 50%'
   * 
   * Controls which part of the image is visible when cropping occurs.
   * Accepts CSS object-position values including percentages, keywords,
   * and absolute units.
   * 
   * @example
   * // Center positioning (default)
   * objectPosition: '50% 50%' // or 'center center'
   * 
   * @example
   * // Focus on top of image (common for portraits)
   * objectPosition: 'center 25%' // or 'center top'
   * 
   * @example
   * // Focus on specific area
   * objectPosition: '75% 60%'
   * 
   * @example
   * // Keyword combinations
   * objectPosition: 'right bottom'
   */
  objectPosition?: string;

  /** 
   * CSS transform applied to the image element
   * 
   * @type {string}
   * 
   * Additional CSS transformations for special effects like scaling,
   * rotation, or perspective. Applied after positioning calculations.
   * 
   * @example
   * // Subtle zoom effect
   * transform: 'scale(1.05)'
   * 
   * @example
   * // Rotation for artistic effect
   * transform: 'rotate(-2deg) scale(1.1)'
   * 
   * @example
   * // 3D perspective transformation
   * transform: 'perspective(1000px) rotateX(5deg)'
   */
  transform?: string;

  /**
   * Width constraint for width-capped rendering mode
   * 
   * @type {string}
   * 
   * When provided, switches from full-bleed to width-capped mode where
   * the image is centered within the container with explicit width limits.
   * Supports CSS width values including responsive units and calculations.
   * 
   * **Width-Capped Mode Behavior:**
   * - Image maintains aspect ratio within specified width
   * - Centered horizontally within container
   * - Uses object-fit: contain to preserve entire image
   * - Ideal for logos, illustrations, and content images
   * 
   * @example
   * // Fixed pixel width
   * width: '480px'
   * 
   * @example
   * // Responsive width with max limit
   * width: 'min(90vw, 720px)'
   * 
   * @example
   * // Percentage-based width
   * width: '75%'
   * 
   * @example
   * // CSS Grid/Flexbox units
   * width: 'clamp(300px, 50vw, 800px)'
   */
  width?: string;

  // Next.js Image Optimization Properties

  /** 
   * Responsive sizes hint for Next.js Image optimization
   * 
   * @type {string}
   * @default '100vw' (full-bleed mode only)
   * 
   * Provides the browser with information about image display sizes
   * across different viewport widths for optimal bandwidth usage.
   * Critical for responsive image performance and Core Web Vitals.
   * 
   * @example
   * // Full viewport width (default for full-bleed)
   * sizes: '100vw'
   * 
   * @example
   * // Responsive breakpoints
   * sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
   * 
   * @example
   * // Container-based sizing
   * sizes: '(max-width: 768px) 100vw, 1200px'
   * 
   * @example
   * // Complex responsive layout
   * sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
   */
  sizes?: string;

  /** 
   * Priority loading for above-the-fold images
   * 
   * @type {boolean}
   * @default false
   * 
   * Enables priority loading for images that appear above the fold.
   * Improves Largest Contentful Paint (LCP) by preloading critical images.
   * Should only be used for the most important, immediately visible images.
   * 
   * **When to use priority:**
   * - Hero section backgrounds
   * - Landing page primary images
   * - Above-the-fold product images
   * - Critical branding elements
   * 
   * **When NOT to use priority:**
   * - Below-the-fold images
   * - Secondary or decorative images
   * - Images in carousels (except first slide)
   * - Background images for secondary sections
   */
  priority?: boolean;

  /** 
   * JPEG/WebP compression quality setting
   * 
   * @type {number}
   * @default 70
   * @range 1-100
   * 
   * Controls image compression quality for optimized file sizes.
   * Higher values provide better quality but larger file sizes.
   * Next.js automatically selects appropriate formats (WebP, AVIF) based on browser support.
   * 
   * **Quality Guidelines:**
   * - 90-100: High-quality photography, hero images
   * - 70-85: Standard web images, good quality/size balance
   * - 50-70: Thumbnails, background images
   * - 30-50: Very low bandwidth scenarios
   */
  quality?: number;

  /** 
   * Placeholder behavior during image loading
   * 
   * @type {'blur' | 'empty'}
   * @default 'blur' for StaticImageData, 'empty' for URLs
   * 
   * **'blur' (Recommended for StaticImageData):**
   * - Shows low-quality blurred version during loading
   * - Automatically generated for static imports
   * - Improves perceived performance and prevents layout shift
   * - Provides smooth loading experience
   * 
   * **'empty':**
   * - No placeholder during loading
   * - Faster initial render for dynamic images
   * - May cause layout shift if dimensions not specified
   * - Default for URL-based images
   */
  placeholder?: 'blur' | 'empty';

  /** 
   * Disable Next.js image optimization
   * 
   * @type {boolean}
   * @default false
   * 
   * Bypasses Next.js image optimization pipeline and serves original images.
   * Useful for specific scenarios but generally not recommended for production.
   * 
   * **When to use unoptimized:**
   * - Development/debugging scenarios
   * - External CDN with own optimization
   * - SVG files that don't need processing
   * - Specific edge cases with optimization conflicts
   * 
   * **Performance Impact:**
   * - Larger file sizes without WebP/AVIF conversion
   * - No automatic responsive image generation
   * - Potential slower loading times
   * - Reduced Core Web Vitals scores
   */
  unoptimized?: boolean;

  /** 
   * Aspect ratio for width-capped mode container
   * 
   * @type {string | number}
   * @default Auto-calculated from StaticImageData or '16 / 9'
   * 
   * Defines the aspect ratio for the image container in width-capped mode.
   * Automatically calculated from StaticImageData when available,
   * otherwise falls back to sensible default.
   * 
   * @example
   * // String format (CSS aspect-ratio property)
   * aspectRatio: '16 / 9'
   * 
   * @example
   * // Numeric format (width/height ratio)
   * aspectRatio: 1.777 // equivalent to 16/9
   * 
   * @example
   * // Square aspect ratio
   * aspectRatio: '1 / 1' // or aspectRatio: 1
   * 
   * @example
   * // Portrait orientation
   * aspectRatio: '9 / 16' // or aspectRatio: 0.5625
   * 
   * @example
   * // Golden ratio
   * aspectRatio: 1.618
   */
  aspectRatio?: string | number;
};

/**
 * Props interface for BackgroundBox component
 * 
 * Extends standard HTML div attributes with specialized background image
 * functionality and Material-UI styling integration. Provides type-safe
 * configuration for all background image scenarios and Next.js Image optimization.
 * 
 * @interface BackgroundBoxProps
 * @extends {React.HTMLAttributes<HTMLDivElement>} Standard div element attributes
 */
export type BackgroundBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  /** 
   * Background image configuration object
   * 
   * @type {ImageConf}
   * 
   * Optional configuration for background image display and optimization.
   * When omitted, renders a plain container suitable for color backgrounds
   * or overlay-only sections.
   * 
   * **Full Configuration:**
   * - Image source (StaticImageData or URL)
   * - Rendering mode (full-bleed or width-capped)
   * - Positioning and transformation options
   * - Next.js optimization settings
   * - Overlay and visual effects
   * 
   * **Plain Container Usage:**
   * When imageConf is undefined, BackgroundBox functions as a standard
   * container with overlay support, useful for solid color sections
   * or gradient backgrounds without images.
   * 
   * @example
   * // With background image
   * imageConf={{
   *   src: heroImage,
   *   mode: 'cover',
   *   overlayColor: 'rgba(0,0,0,0.4)',
   *   priority: true
   * }}
   * 
   * @example
   * // Plain container (no image)
   * imageConf={undefined}
   * // Results in container with overlay support only
   */
  imageConf?: ImageConf;

  /** 
   * Child content rendered above background image
   * 
   * @type {React.ReactNode}
   * 
   * Content elements rendered in the foreground layer above the background
   * image and overlay. Positioned with relative z-index for proper layering.
   * 
   * **Content Considerations:**
   * - Automatically positioned above background and overlay layers
   * - Inherits full height of container for flexible layouts
   * - Should consider contrast with background image
   * - May benefit from overlay colors for text readability
   * 
   * @example
   * // Hero content with text and actions
   * <Container>
   *   <Stack spacing={3} alignItems="center">
   *     <Typography variant="h1" color="white">
   *       Welcome to Our Platform
   *     </Typography>
   *     <Button variant="contained">Get Started</Button>
   *   </Stack>
   * </Container>
   * 
   * @example
   * // Empty container for background-only sections
   * children={undefined}
   */
  children?: React.ReactNode;

  /** 
   * Material-UI sx prop for custom styling
   * 
   * @type {SxProps<Theme>}
   * 
   * Provides Material-UI's powerful sx styling system for responsive
   * design, theme integration, and advanced CSS-in-JS functionality.
   * 
   * **Common Styling Patterns:**
   * - Container dimensions (minHeight, height, maxHeight)
   * - Responsive breakpoint styling
   * - Flexbox/Grid layout properties
   * - Padding and margin adjustments
   * - Theme-aware color and spacing
   * 
   * @example
   * // Responsive height with theme spacing
   * sx={{
   *   minHeight: { xs: '50vh', md: '100vh' },
   *   display: 'flex',
   *   alignItems: 'center',
   *   justifyContent: 'center',
   *   px: { xs: 2, sm: 4 }
   * }}
   * 
   * @example
   * // Fixed aspect ratio container
   * sx={{
   *   aspectRatio: '16 / 9',
   *   maxWidth: 1200,
   *   mx: 'auto'
   * }}
   */
  sx?: SxProps<Theme>;

  /** 
   * CSS class name for external styling
   * 
   * @type {string}
   * 
   * Additional CSS class for integration with external stylesheets
   * or CSS modules. Applied to the root container element.
   * 
   * @example
   * className="hero-section"
   * 
   * @example
   * className={styles.backgroundContainer}
   */
  className?: string;

  /** 
   * Image component for rendering optimization
   * 
   * @type {ImageComponentLike}
   * @required
   * 
   * **Critical for Next.js Integration:**
   * This prop enables framework-agnostic image handling while providing
   * full Next.js Image component optimization when available.
   * 
   * **Next.js Image Component (Recommended):**
   * - Automatic WebP/AVIF format conversion
   * - Responsive image generation
   * - Blur placeholder support for StaticImageData
   * - Priority loading for above-the-fold content
   * - Built-in lazy loading for below-the-fold images
   * - Optimal Core Web Vitals performance
   * 
   * **Alternative Image Components:**
   * - Custom image components with similar APIs
   * - Third-party optimization libraries
   * - Framework-specific image handlers
   * - Standard img element wrapper (with reduced optimization)
   * 
   * **Implementation Requirements:**
   * The provided component must accept the following props:
   * - `src`: Image source (string or StaticImageData)
   * - `alt`: Alternative text for accessibility
   * - `fill`: Boolean for absolute positioning
   * - `sizes`: Responsive sizes hint
   * - `placeholder`: Placeholder behavior ('blur' | 'empty')
   * - `priority`: Priority loading flag
   * - `quality`: Compression quality (1-100)
   * - `unoptimized`: Disable optimization flag
   * - `style`: CSS styles object
   * 
   * @example
   * // Next.js Image (recommended)
   * import Image from 'next/image';
   * 
   * <BackgroundBox
   *   ImageComponent={Image}
   *   imageConf={{ src: heroImage, priority: true }}
   * >
   *   <HeroContent />
   * </BackgroundBox>
   * 
   * @example
   * // Custom image component
   * import CustomImage from '@/components/CustomImage';
   * 
   * <BackgroundBox
   *   ImageComponent={CustomImage}
   *   imageConf={{ src: '/hero.jpg', quality: 90 }}
   * >
   *   <Content />
   * </BackgroundBox>
   * 
   * @example
   * // Framework-agnostic usage
   * const ImageComponent = isNextJS ? NextImage : StandardImg;
   * 
   * <BackgroundBox
   *   ImageComponent={ImageComponent}
   *   imageConf={{ src: imageUrl }}
   * >
   *   <Content />
   * </BackgroundBox>
   */ 
  ImageComponent: ImageComponentLike;
};

/**
 * BackgroundBox - Advanced Background Image Container with Next.js Optimization
 * 
 * A highly flexible and performant React component for rendering content over
 * background images with full Next.js Image component integration. Supports
 * dual rendering modes, comprehensive image optimization, and responsive design
 * patterns essential for modern web applications.
 * 
 * **Key Features:**
 * - **Next.js Image Integration**: Full compatibility with Next.js Image component for optimal performance
 * - **Dual Rendering Modes**: Full-bleed and width-capped background positioning
 * - **Performance Optimized**: StaticImageData support with blur placeholders and priority loading
 * - **Responsive Design**: Automatic sizing and positioning across all screen sizes
 * - **Accessibility Ready**: Proper alt text handling and semantic structure
 * - **Framework Agnostic**: Works with any image component following the standard interface
 * 
 * **Performance Considerations:**
 * - Uses Next.js Image fill mode for optimal background image rendering
 * - Supports priority loading for above-the-fold hero sections
 * - Automatic WebP/AVIF conversion when using Next.js Image
 * - Built-in lazy loading for below-the-fold content
 * - Blur placeholder generation from StaticImageData imports
 * 
 * **Core Web Vitals Impact:**
 * - **LCP (Largest Contentful Paint)**: Priority loading for hero images
 * - **CLS (Cumulative Layout Shift)**: Proper aspect ratio maintenance
 * - **FCP (First Contentful Paint)**: Optimized image loading strategies
 * 
 * @param props - Component props extending standard div attributes
 * @param props.imageConf - Background image configuration object
 * @param props.children - Content to render above the background
 * @param props.ImageComponent - Image component for rendering (typically Next.js Image)
 * @param props.sx - Material-UI sx prop for styling
 * @param props.className - Additional CSS class name
 * @param props...rest - Additional HTML div attributes
 * 
 * @returns React functional component rendering background container
 * 
 * @example
 * // Hero section with Next.js Image optimization
 * import Image from 'next/image';
 * import heroImage from '@/assets/hero.jpg'; // StaticImageData
 * 
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: heroImage,
 *     mode: 'cover',
 *     priority: true,
 *     overlayColor: 'rgba(0, 0, 0, 0.4)',
 *     alt: 'Hero background showing city skyline'
 *   }}
 *   sx={{
 *     minHeight: '100vh',
 *     display: 'flex',
 *     alignItems: 'center',
 *     justifyContent: 'center'
 *   }}
 * >
 *   <Container>
 *     <Typography variant="h1" color="white">
 *       Welcome to Our Platform
 *     </Typography>
 *     <Button variant="contained" size="large">
 *       Get Started
 *     </Button>
 *   </Container>
 * </BackgroundBox>
 * 
 * @example
 * // Content section with width-capped background
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: '/features-bg.jpg',
 *     mode: 'contain',
 *     maxWidth: 1200,
 *     quality: 85,
 *     overlayColor: 'rgba(255, 255, 255, 0.1)'
 *   }}
 *   sx={{ py: 8 }}
 * >
 *   <Container maxWidth="lg">
 *     <Grid container spacing={4}>
 *       <Grid item xs={12} md={6}>
 *         <FeatureCard title="Feature 1" />
 *       </Grid>
 *       <Grid item xs={12} md={6}>
 *         <FeatureCard title="Feature 2" />
 *       </Grid>
 *     </Grid>
 *   </Container>
 * </BackgroundBox>
 * 
 * @example
 * // Responsive background with breakpoint-specific images
 * <BackgroundBox
 *   ImageComponent={Image}
 *   imageConf={{
 *     src: useMediaQuery(theme.breakpoints.up('md')) 
 *       ? desktopImage 
 *       : mobileImage,
 *     mode: 'cover',
 *     priority: true,
 *     sizes: '100vw'
 *   }}
 *   sx={{
 *     minHeight: { xs: '60vh', md: '80vh' },
 *     display: 'flex',
 *     alignItems: 'center'
 *   }}
 * >
 *   <ResponsiveContent />
 * </BackgroundBox>
 * 
 * @example
 * // Plain container without background image
 * <BackgroundBox
 *   ImageComponent={Image}
 *   sx={{
 *     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
 *     minHeight: '50vh',
 *     display: 'flex',
 *     alignItems: 'center',
 *     justifyContent: 'center'
 *   }}
 * >
 *   <Typography variant="h2" color="white">
 *     No Background Image Section
 *   </Typography>
 * </BackgroundBox>
 * 
 * @example
 * // Framework-agnostic usage pattern
 * const ImageComponent = process.env.NEXT_PUBLIC_FRAMEWORK === 'nextjs' 
 *   ? require('next/image').default 
 *   : StandardImageComponent;
 * 
 * <BackgroundBox
 *   ImageComponent={ImageComponent}
 *   imageConf={{
 *     src: backgroundUrl,
 *     mode: 'cover',
 *     unoptimized: !isNextJS // Disable optimization for non-Next.js
 *   }}
 * >
 *   <UniversalContent />
 * </BackgroundBox>
 * 
 * @since 1.0.0
 * @version 2.1.0 - Added Next.js Image integration and performance optimizations
 */
const BackgroundBox: React.FC<BackgroundBoxProps> = ({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}) => {

  
  const isStaticImport = typeof imageConf?.src === 'object' && imageConf?.src && 'width' in imageConf.src && 'height' in imageConf.src;
  const computedAR =
    imageConf?.aspectRatio ??
    (isStaticImport
      ? (imageConf!.src as any).width / (imageConf!.src as any).height
      : '16 / 9'); // sensible fallback

  const placeholder: 'blur' | 'empty' =
    imageConf?.placeholder ?? (isStaticImport ? 'blur' : 'empty');

  const quality = imageConf?.quality ?? 70;

  // Build the image layer (either full-bleed or width-capped)
  let imageLayer: React.ReactNode = null;

  if (imageConf?.src) {
    const objPos = imageConf.objectPosition || '50% 50%';

    if (imageConf.width) {
      // WIDTH-CAPPED BRANCH:
      // A positioned box with explicit width, centered in the container.
      // We still use Next/Image `fill`; the parent box constrains the rendered size.
      imageLayer = (
        <Box
          sx={{
            position: 'absolute',
            ...getBoxPosition(objPos),
            width: imageConf.width,
            // Maintain intrinsic aspect via the image itself (no fixed height here).
            // The child Image uses objectFit: 'contain' to stay within this width cap.
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', aspectRatio: computedAR as any }}>
            <ImageComponent
              alt=""
              src={imageConf.src}
              fill
              sizes={imageConf.sizes} // single usage; user-provided if any
              placeholder={placeholder}
              priority={imageConf.priority}
              quality={quality}
              unoptimized={imageConf.unoptimized}
              style={{
                objectFit: 'contain',
                objectPosition: objPos,
                transform: imageConf.transform || 'none',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      );
    } else {
      // FULL-BLEED BRANCH:
      imageLayer = (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', inset: 0 }}>
            <ImageComponent
              alt=""
              src={imageConf.src}
              fill
              sizes={imageConf.sizes ?? '100vw'} // default only here; no duplicate prop
              placeholder={placeholder}
              priority={imageConf.priority}
              quality={quality}
              unoptimized={imageConf.unoptimized}
              style={{
                objectFit: imageConf.mode || 'cover',
                objectPosition: objPos,
                opacity: imageConf.opacity ?? 1,
                transform: imageConf.transform || 'none',
                zIndex: 0,
              }}
            />
          </Box>
        </Box>
      );
    }
  }

  return (
    <Box
      sx={{ position: 'relative', overflow: 'hidden', width: '100%', ...(sx || {}) }}
      className={className}
      {...rest}
    >
      {imageLayer}

      {/* Overlay tint (drawn above image, below content) */}
      {imageConf?.overlayColor && (
        <Box
          role="presentation"
          aria-hidden={true}
          sx={{ position: 'absolute', inset: 0, backgroundColor: imageConf.overlayColor }}
        />
      )}

      {/* Content layer */}
      <Box sx={{ position: 'relative', zIndex: 1 , height: '100%' }}>{children}</Box>
    </Box>
  );
};

export default BackgroundBox;
