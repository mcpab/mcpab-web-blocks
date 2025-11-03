/**
 * @fileoverview Image Types - Framework-Agnostic Image Component Interface
 * 
 * **Universal Image Component System for React Applications**
 * 
 * This module provides a comprehensive, framework-agnostic image component interface
 * that seamlessly works across different React environments including Next.js, 
 * vanilla React, and other frameworks. Designed to eliminate vendor lock-in while
 * maintaining compatibility with modern image optimization features.
 * 
 * **Key Features:**
 * - **Framework Agnostic**: Works with Next.js Image, standard img, or custom components
 * - **Type Safety**: Full TypeScript support with comprehensive type definitions
 * - **Static Import Support**: Compatible with bundler-optimized static image imports
 * - **Performance Optimized**: Supports modern features like blur placeholders and priority loading
 * - **SSR Compatible**: Server-side rendering safe with proper hydration handling
 * - **Flexible API**: Accommodates various image component interfaces and props
 * 
 * **Architecture Overview:**
 * ```
 * StaticImageDataLike (Interface)
 * ├── src: string (required)
 * ├── width?: number (optional dimensions)
 * ├── height?: number (optional dimensions)
 * └── blurDataURL?: string (LQIP placeholder)
 * 
 * UniversalImageProps (Interface)
 * ├── Standard HTML img attributes
 * ├── Next.js-style optimization props
 * ├── Framework-agnostic styling support
 * └── Flexible src handling (string | StaticImageDataLike)
 * 
 * ImageComponentLike (Type)
 * └── React.ComponentType<UniversalImageProps>
 * 
 * Utility Functions
 * ├── isStaticImageDataLike() - Type guard function
 * ├── toImgAttrs() - Props normalization utility
 * └── HtmlImage - Default SSR-safe image component
 * ```
 * 
 * **Use Cases:**
 * - Building component libraries that work across React frameworks
 * - Creating image components that support both URLs and static imports
 * - Implementing consistent image handling in multi-framework projects
 * - Developing reusable UI components with flexible image support
 * 
 * **Framework Compatibility:**
 * - ✅ Next.js (with full Image component support)
 * - ✅ Create React App (with static asset optimization)
 * - ✅ Vite (with asset pipeline integration)
 * - ✅ Webpack-based builds (with file-loader/url-loader)
 * - ✅ Server-side rendering frameworks
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and type safety
 */

import * as React from 'react';

/**
 * Static image data interface for framework-agnostic image handling
 * 
 * **Framework-Independent Image Asset Interface**
 * 
 * Defines a standardized interface for static image assets that works across
 * different React frameworks and build systems. Designed to be compatible with
 * Next.js StaticImageData while remaining framework-agnostic.
 * 
 * **Key Design Principles:**
 * - **Non-Colliding**: Avoids conflicts with Next.js built-in StaticImageData type
 * - **Build System Agnostic**: Works with Webpack, Vite, Rollup, and other bundlers
 * - **Performance Oriented**: Supports modern optimization features like LQIP
 * - **Type Safe**: Comprehensive TypeScript support with proper type guards
 * 
 * **Static Asset Integration:**
 * This interface supports various static asset import patterns:
 * 
 * ```typescript
 * // Next.js static imports
 * import heroImage from '/public/images/hero.jpg';
 * 
 * // Webpack file-loader imports  
 * import logoSrc from './assets/logo.png';
 * 
 * // Vite asset imports
 * import backgroundUrl from './images/bg.webp?url';
 * 
 * // All work with StaticImageDataLike interface
 * const imageData: StaticImageDataLike = {
 *   src: heroImage.src || heroImage,
 *   width: 1920,
 *   height: 1080,
 *   blurDataURL: 'data:image/jpeg;base64,/9j/4AAQ...'
 * };
 * ```
 * 
 * **Performance Features:**
 * - **LQIP Support**: Low Quality Image Placeholder for progressive loading
 * - **Dimension Awareness**: Width/height for proper aspect ratio calculation
 * - **Optimization Ready**: Compatible with image optimization pipelines
 * 
 * @interface StaticImageDataLike
 * @since 1.0.0
 */
export interface StaticImageDataLike {
  /** 
   * Optimized image URL from bundler/asset pipeline
   * 
   * @type {string}
   * 
   * The processed URL for the image after going through the build system's
   * asset pipeline. This could be a hashed filename, CDN URL, or optimized
   * path depending on the framework and build configuration.
   * 
   * **URL Formats:**
   * - Static asset URLs: `/_next/static/media/image.hash.jpg`
   * - CDN URLs: `https://cdn.example.com/images/optimized.webp`
   * - Relative paths: `./assets/processed/image.png`
   * - Data URLs: `data:image/jpeg;base64,/9j/4AAQ...` (for small images)
   * 
   * @example
   * // Next.js optimized asset
   * src: "/_next/static/media/hero.a1b2c3d4.jpg"
   * 
   * @example
   * // CDN-hosted optimized image
   * src: "https://cdn.example.com/hero-1920w.webp"
   */
  src: string;

  /** 
   * Intrinsic pixel width of the image
   * 
   * @type {number}
   * 
   * The natural width of the image in pixels. Used for aspect ratio
   * calculation, responsive sizing, and layout optimization. While optional,
   * providing dimensions significantly improves performance and prevents
   * layout shift during image loading.
   * 
   * **Performance Benefits:**
   * - Prevents Cumulative Layout Shift (CLS) 
   * - Enables proper aspect ratio containers
   * - Supports responsive image sizing calculations
   * - Allows for skeleton loading states
   * 
   * @example
   * width: 1920  // Full HD width
   * width: 800   // Typical content image
   * width: 400   // Thumbnail or mobile-optimized
   */
  width?: number;

  /** 
   * Intrinsic pixel height of the image
   * 
   * @type {number}
   * 
   * The natural height of the image in pixels. Works in conjunction with
   * width to maintain proper aspect ratios across different display sizes
   * and viewport configurations.
   * 
   * **Layout Applications:**
   * - Aspect ratio preservation: `aspect-ratio: ${width}/${height}`
   * - Container sizing: `padding-bottom: ${(height/width) * 100}%`
   * - Responsive breakpoints: Calculate optimal display sizes
   * - Grid layout planning: Determine item proportions
   * 
   * @example
   * height: 1080  // Full HD height (16:9 ratio with width: 1920)
   * height: 600   // Common content ratio (4:3 with width: 800)
   * height: 400   // Square or portrait orientation
   */
  height?: number;

  /** 
   * Base64-encoded Low Quality Image Placeholder (LQIP)
   * 
   * @type {string}
   * 
   * A tiny, highly compressed version of the image encoded as a data URL.
   * Used for progressive loading experiences where a blurred placeholder
   * is shown while the full-resolution image loads.
   * 
   * **Implementation Strategies:**
   * - **Tiny JPEG**: 20-50 byte highly compressed version
   * - **SVG Blur**: Vector-based blur effect representation  
   * - **Solid Color**: Average color of the image as fallback
   * - **Gradient**: Two-color gradient representing dominant colors
   * 
   * **Performance Considerations:**
   * - Keep under 100 bytes for optimal performance
   * - Inline directly in HTML to avoid additional requests
   * - Use consistent encoding across the application
   * - Consider build-time generation for automation
   * 
   * @example
   * // Tiny JPEG placeholder
   * blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
   * 
   * @example
   * // SVG blur placeholder
   * blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAw..."
   * 
   * @example
   * // Solid color fallback
   * blurDataURL: "data:image/svg+xml,%3Csvg%20fill%3D'%23f0f0f0'..."
   */
  blurDataURL?: string;
}

/**
 * Type guard function for StaticImageDataLike objects
 * 
 * **Runtime Type Validation for Static Image Assets**
 * 
 * Provides runtime type checking to determine if an unknown value conforms
 * to the StaticImageDataLike interface. Essential for handling dynamic image
 * data where the source type is not known at compile time.
 * 
 * **Use Cases:**
 * - **API Response Validation**: Checking image data from external APIs
 * - **Dynamic Import Handling**: Validating dynamically imported assets
 * - **User Input Processing**: Verifying uploaded or user-provided image data
 * - **Configuration Parsing**: Validating image objects from config files
 * - **Migration Support**: Converting between different image data formats
 * 
 * **Validation Logic:**
 * Performs minimal validation to ensure the object has the required `src`
 * property as a string. Additional properties (width, height, blurDataURL)
 * are optional and not validated for existence, allowing for flexible
 * usage patterns.
 * 
 * **Type Safety Benefits:**
 * - Provides TypeScript type narrowing after successful validation
 * - Enables safe property access without runtime errors
 * - Supports defensive programming patterns
 * - Facilitates gradual migration between image systems
 * 
 * @param {unknown} x - Value to check for StaticImageDataLike conformance
 * @returns {boolean} True if the value is a valid StaticImageDataLike object
 * 
 * @example
 * // API response validation
 * const apiResponse = await fetch('/api/images/hero');
 * const imageData = await apiResponse.json();
 * 
 * if (isStaticImageDataLike(imageData)) {
 *   // TypeScript now knows imageData is StaticImageDataLike
 *   console.log(`Image URL: ${imageData.src}`);
 *   console.log(`Dimensions: ${imageData.width}x${imageData.height}`);
 * }
 * 
 * @example
 * // Dynamic import validation
 * const dynamicAsset = await import('./dynamic-image.jpg');
 * 
 * if (isStaticImageDataLike(dynamicAsset.default)) {
 *   // Safe to use as StaticImageDataLike
 *   setImageData(dynamicAsset.default);
 * }
 * 
 * @example
 * // Configuration parsing
 * const config = JSON.parse(configString);
 * const heroImage = config.images?.hero;
 * 
 * if (isStaticImageDataLike(heroImage)) {
 *   // Validated image configuration
 *   renderHeroSection(heroImage);
 * } else {
 *   // Fallback or error handling
 *   renderDefaultHero();
 * }
 * 
 * @since 1.0.0
 */
export function isStaticImageDataLike(x: unknown): x is StaticImageDataLike {
  return !!x && typeof x === 'object' && typeof (x as any).src === 'string';
}

/**
 * Extended props for Next.js-style image optimization features
 * 
 * **Modern Image Optimization Properties**
 * 
 * Defines additional properties that enhance image performance and user
 * experience, primarily inspired by Next.js Image component but designed
 * to work across different frameworks and image components.
 * 
 * **Performance Features:**
 * - **Fill Mode**: Absolute positioning for container-based sizing
 * - **Responsive Images**: Automatic srcset generation with sizes attribute
 * - **Progressive Loading**: Blur placeholder support for smooth loading
 * - **Priority Loading**: Above-the-fold optimization for critical images
 * - **Quality Control**: Compression level configuration
 * - **Optimization Toggle**: Ability to bypass optimization when needed
 * 
 * @type NextishExtras
 * @since 1.0.0
 */
type NextishExtras = {
  /** 
   * Fill parent container with absolute positioning
   * 
   * @type {boolean}
   * 
   * When true, the image fills its parent container using absolute positioning.
   * Useful for creating responsive image containers with known aspect ratios
   * or when the image should cover the entire available space.
   * 
   * **CSS Behavior:**
   * ```css
   * position: absolute;
   * top: 0;
   * left: 0;
   * right: 0;
   * bottom: 0;
   * width: 100%;
   * height: 100%;
   * ```
   * 
   * **Common Use Cases:**
   * - Hero section backgrounds
   * - Card image overlays
   * - Full-screen image galleries
   * - Responsive image containers
   * 
   * @example
   * // Fill container for hero background
   * <ImageComponent
   *   src={heroImage}
   *   alt="Hero background"
   *   fill={true}
   * />
   */
  fill?: boolean;

  /** 
   * Responsive image sizes attribute for srcset optimization
   * 
   * @type {string}
   * 
   * Provides hints to the browser about how large the image will be displayed
   * across different viewport sizes. Used in conjunction with responsive
   * image generation to serve appropriately sized images.
   * 
   * **Format:** CSS media query and viewport width specification
   * 
   * **Performance Impact:**
   * - Reduces bandwidth usage on smaller devices
   * - Improves loading speed with appropriately sized images
   * - Enables automatic WebP/AVIF format selection
   * - Supports high-DPI display optimization
   * 
   * @example
   * // Mobile-first responsive sizing
   * sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   * 
   * @example
   * // Fixed width at different breakpoints
   * sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
   * 
   * @example
   * // Single size for all viewports
   * sizes="800px"
   */
  sizes?: string;

  /** 
   * Progressive loading placeholder strategy
   * 
   * @type {'blur' | 'empty'}
   * 
   * Defines how the image should appear while loading the full-resolution
   * version. Enhances user experience by providing visual feedback during
   * the loading process.
   * 
   * **Placeholder Types:**
   * - **'blur'**: Shows blurred low-quality placeholder (requires blurDataURL)
   * - **'empty'**: Transparent/empty space until image loads
   * 
   * **User Experience Benefits:**
   * - Reduces perceived loading time
   * - Prevents layout shift during loading
   * - Provides smooth visual transitions
   * - Maintains visual hierarchy while loading
   * 
   * @example
   * // Blur placeholder for smooth loading
   * <ImageComponent
   *   src={image}
   *   placeholder="blur"
   *   blurDataURL="data:image/jpeg;base64,..."
   * />
   */
  placeholder?: 'blur' | 'empty';

  /** 
   * Priority loading for above-the-fold images
   * 
   * @type {boolean}
   * 
   * Marks the image as high priority for loading optimization. Should be
   * used sparingly for images that are immediately visible when the page
   * loads (above-the-fold content).
   * 
   * **Optimization Effects:**
   * - Preloads the image resource early in page load
   * - Bypasses lazy loading for immediate rendering
   * - Prioritizes network requests for critical images
   * - May use `<link rel="preload">` for early fetching
   * 
   * **Best Practices:**
   * - Use only for 1-2 most important images per page
   * - Apply to hero images, logos, or critical visual content
   * - Avoid for below-the-fold or decorative images
   * - Monitor Core Web Vitals impact
   * 
   * @example
   * // Hero image with priority loading
   * <ImageComponent
   *   src={heroImage}
   *   alt="Main hero"
   *   priority={true}
   * />
   */
  priority?: boolean;

  /** 
   * Image compression quality level
   * 
   * @type {number}
   * 
   * Controls the compression quality for optimized images. Typically ranges
   * from 1 (lowest quality, smallest file) to 100 (highest quality, largest file).
   * The optimal value balances visual quality with file size.
   * 
   * **Quality Guidelines:**
   * - **75-85**: Default range for most content images
   * - **85-95**: High quality for important visuals
   * - **60-75**: Acceptable for thumbnails or secondary images
   * - **95-100**: Maximum quality for critical images
   * 
   * **Format Considerations:**
   * - JPEG: Quality affects compression artifacts
   * - WebP: Generally better quality at same file size
   * - AVIF: Excellent quality with aggressive compression
   * 
   * @example
   * // High quality for hero image
   * quality={90}
   * 
   * @example
   * // Standard quality for content
   * quality={75}
   */
  quality?: number;

  /** 
   * Bypass image optimization pipeline
   * 
   * @type {boolean}
   * 
   * When true, serves the original image without any optimization processing.
   * Useful for images that are already optimized, SVGs, or when optimization
   * causes unwanted artifacts.
   * 
   * **Use Cases:**
   * - Pre-optimized images from CDNs
   * - SVG graphics and icons
   * - Animated GIFs that shouldn't be processed
   * - Third-party hosted images
   * - Images with specific compression requirements
   * 
   * **Trade-offs:**
   * - ✅ Preserves original image exactly
   * - ✅ Faster build times (no processing)
   * - ❌ No automatic format conversion (WebP/AVIF)
   * - ❌ No responsive image generation
   * - ❌ Potentially larger file sizes
   * 
   * @example
   * // Skip optimization for SVG logo
   * <ImageComponent
   *   src="/logo.svg"
   *   alt="Company logo"
   *   unoptimized={true}
   * />
   */
  unoptimized?: boolean;
};

/**
 * Universal image component props interface
 * 
 * **Framework-Agnostic Image Component Interface**
 * 
 * Combines standard HTML image attributes with modern optimization features
 * to create a universal interface that works across different React frameworks
 * and image components. Designed to be compatible with both standard `<img>`
 * elements and advanced components like Next.js Image.
 * 
 * **Design Philosophy:**
 * - **Maximum Compatibility**: Works with any image component implementation
 * - **Progressive Enhancement**: Graceful degradation for unsupported features
 * - **Type Safety**: Full TypeScript support with proper attribute handling
 * - **Flexible Source**: Supports both URL strings and static asset objects
 * - **Modern Features**: Includes cutting-edge optimization capabilities
 * 
 * **Supported Image Components:**
 * - Next.js `<Image>` component (full feature support)
 * - Standard HTML `<img>` element (basic features)
 * - Gatsby `<StaticImage>` component (most features)
 * - Custom image components (configurable support)
 * - Third-party optimization libraries
 * 
 * **Attribute Inheritance:**
 * Extends React's standard img element attributes while excluding conflicting
 * properties that are handled by the interface. This ensures compatibility
 * with existing HTML image patterns while adding modern capabilities.
 * 
 * @type UniversalImageProps
 * @since 1.0.0
 */
export type UniversalImageProps =
  Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'width' | 'height' | 'sizes' | 'placeholder'
  > & {
    /** 
     * Image source - URL string or static asset object
     * 
     * @type {string | StaticImageDataLike}
     * 
     * Flexible source handling that accommodates different image sourcing
     * strategies. Can be a simple URL string or a rich static asset object
     * with optimization metadata.
     * 
     * **Source Types:**
     * - **URL Strings**: Direct HTTP/HTTPS URLs or relative paths
     * - **Static Assets**: Imported image objects with optimization data
     * - **Data URLs**: Base64-encoded images for small graphics
     * - **CDN URLs**: External image service URLs
     * 
     * **Framework Integration:**
     * - Next.js: Supports both imported assets and URL strings
     * - Standard React: URL strings work universally
     * - Static Site Generators: Asset objects provide build-time optimization
     * 
     * @example
     * // URL string
     * src="/images/hero.jpg"
     * src="https://cdn.example.com/hero.webp"
     * 
     * @example
     * // Static asset import
     * import heroImage from './hero.jpg';
     * src={heroImage}
     * 
     * @example
     * // Static asset object
     * src={{
     *   src: "/optimized/hero-800w.webp",
     *   width: 800,
     *   height: 600,
     *   blurDataURL: "data:image/jpeg;base64,..."
     * }}
     */
    src: string | StaticImageDataLike;

    /** 
     * Alternative text for accessibility
     * 
     * @type {string}
     * 
     * **Required accessibility attribute** that provides alternative text
     * description for screen readers and other assistive technologies.
     * Critical for web accessibility compliance and SEO.
     * 
     * **Writing Guidelines:**
     * - Describe the image content and context
     * - Keep concise but descriptive (under 125 characters)
     * - Avoid "image of" or "picture of" prefixes
     * - Include relevant context for understanding
     * - Use empty string ("") for decorative images
     * 
     * **SEO Benefits:**
     * - Improves search engine image indexing
     * - Provides context for image search results
     * - Enhances content accessibility scoring
     * - Supports voice search optimization
     * 
     * @example
     * // Descriptive alt text
     * alt="Solar panels on residential rooftop with blue sky background"
     * 
     * @example
     * // Contextual alt text
     * alt="Jane Smith, CEO of TechCorp, speaking at conference"
     * 
     * @example
     * // Decorative image (empty alt)
     * alt=""
     */
    alt: string;

    /** 
     * Display width - pixel number or CSS string
     * 
     * @type {number | string}
     * 
     * Specifies the display width of the image. Can be a pixel value for
     * fixed sizing or a CSS string for responsive behavior. When undefined,
     * the component may use intrinsic image dimensions.
     * 
     * **Value Types:**
     * - **Numbers**: Interpreted as pixels (e.g., 800 = "800px")
     * - **CSS Strings**: Any valid CSS width value
     * - **Responsive Units**: rem, em, %, vw, etc.
     * - **Auto**: Let the browser determine optimal size
     * 
     * **Responsive Considerations:**
     * - Use percentage values for fluid layouts
     * - Consider max-width constraints for large images
     * - Combine with CSS for responsive behavior
     * - Maintain aspect ratio with corresponding height
     * 
     * @example
     * // Fixed pixel width
     * width={800}
     * width="800px"
     * 
     * @example
     * // Responsive width
     * width="100%"
     * width="50vw"
     * width="clamp(300px, 50vw, 800px)"
     */
    width?: number | string;

    /** 
     * Display height - pixel number or CSS string
     * 
     * @type {number | string}
     * 
     * Specifies the display height of the image. Works in conjunction with
     * width to control image dimensions and aspect ratio. When undefined,
     * height is typically determined by aspect ratio preservation.
     * 
     * **Aspect Ratio Considerations:**
     * - Specify both width and height for fixed aspect ratios
     * - Omit height to preserve natural aspect ratio
     * - Use CSS aspect-ratio property for modern browsers
     * - Consider object-fit for different scaling behaviors
     * 
     * **Layout Impact:**
     * - Prevents Cumulative Layout Shift (CLS)
     * - Enables skeleton loading states
     * - Supports container query sizing
     * - Facilitates responsive grid layouts
     * 
     * @example
     * // Fixed dimensions (16:9 ratio)
     * width={800}
     * height={450}
     * 
     * @example
     * // Responsive height with aspect ratio
     * width="100%"
     * height="auto"
     * style={{ aspectRatio: "16/9" }}
     */
    height?: number | string;

    /** 
     * Inline CSS styling
     * 
     * @type {React.CSSProperties}
     * 
     * Standard React inline styling for the image element. Useful for
     * component-specific styling that doesn't warrant separate CSS classes.
     * Commonly used for positioning, sizing, and visual effects.
     * 
     * **Common Style Properties:**
     * - Layout: position, display, margin, padding
     * - Sizing: width, height, maxWidth, aspectRatio
     * - Visual: borderRadius, opacity, filter, transform
     * - Responsive: object-fit, object-position
     * 
     * **Performance Notes:**
     * - Inline styles have higher specificity than CSS classes
     * - Consider CSS classes for reusable styling
     * - Use CSS custom properties for dynamic values
     * - Prefer CSS-in-JS libraries for complex styling
     * 
     * @example
     * // Rounded image with shadow
     * style={{
     *   borderRadius: '8px',
     *   boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
     * }}
     * 
     * @example
     * // Cover image with positioning
     * style={{
     *   objectFit: 'cover',
     *   objectPosition: 'center top'
     * }}
     */
    style?: React.CSSProperties;
  } & NextishExtras;

/**
 * Image component type interface
 * 
 * **Framework-Agnostic Image Component Contract**
 * 
 * Defines the interface that image components must implement to be compatible
 * with the universal image system. This type enables component libraries to
 * work across different React frameworks without vendor lock-in.
 * 
 * **Component Compatibility:**
 * Any React component that accepts UniversalImageProps can be used as an
 * ImageComponentLike, enabling seamless switching between different image
 * implementations based on framework or requirements.
 * 
 * **Supported Implementations:**
 * - Next.js Image component (recommended for Next.js apps)
 * - Standard HTML img element (universal compatibility)
 * - Gatsby StaticImage (for Gatsby applications)
 * - Custom optimization components (library-specific)
 * - Third-party image services (Cloudinary, ImageKit, etc.)
 * 
 * **Implementation Examples:**
 * ```typescript
 * // Next.js Image component
 * import Image from 'next/image';
 * const NextImage: ImageComponentLike = Image;
 * 
 * // Standard img wrapper
 * const StandardImage: ImageComponentLike = (props) => (
 *   <img {...toImgAttrs(props)} />
 * );
 * 
 * // Custom optimization component
 * const OptimizedImage: ImageComponentLike = (props) => (
 *   <picture>
 *     <source srcSet={generateWebP(props.src)} type="image/webp" />
 *     <img {...toImgAttrs(props)} />
 *   </picture>
 * );
 * ```
 * 
 * @type ImageComponentLike
 * @since 1.0.0
 */
export type ImageComponentLike = React.ComponentType<UniversalImageProps>;

/**
 * Normalize image props for standard HTML img element
 * 
 * **Props Transformation Utility for HTML Compatibility**
 * 
 * Converts UniversalImageProps into standard HTML img attributes, handling
 * the transformation between static asset objects and simple URL strings.
 * Essential for compatibility with standard HTML img elements and legacy
 * image components.
 * 
 * **Transformation Logic:**
 * 1. **Source Resolution**: Extracts URL from StaticImageDataLike objects
 * 2. **Dimension Handling**: Preserves explicit dimensions or uses asset metadata
 * 3. **Attribute Passthrough**: Maintains all other valid HTML img attributes
 * 4. **Type Safety**: Ensures output matches HTML img element expectations
 * 
 * **Use Cases:**
 * - Creating wrapper components for standard img elements
 * - Building custom image components with HTML fallbacks
 * - Migrating from framework-specific to universal image handling
 * - Server-side rendering with standard HTML output
 * - Testing image components with simplified implementations
 * 
 * **Dimension Priority:**
 * 1. Explicitly provided width/height props (highest priority)
 * 2. Dimensions from StaticImageDataLike object (if src is object)
 * 3. Undefined (browser determines from image metadata)
 * 
 * @param {UniversalImageProps} p - Universal image props to normalize
 * @returns {React.ImgHTMLAttributes<HTMLImageElement>} Standard HTML img attributes
 * 
 * @example
 * // URL string input
 * const props = {
 *   src: "/images/hero.jpg",
 *   alt: "Hero image",
 *   width: 800,
 *   height: 600
 * };
 * 
 * const imgAttrs = toImgAttrs(props);
 * // Result: { src: "/images/hero.jpg", alt: "Hero image", width: 800, height: 600 }
 * 
 * @example
 * // StaticImageDataLike input
 * const staticAsset = {
 *   src: "/optimized/hero-800w.webp",
 *   width: 800,
 *   height: 600,
 *   blurDataURL: "data:image/jpeg;base64,..."
 * };
 * 
 * const props = {
 *   src: staticAsset,
 *   alt: "Hero image"
 * };
 * 
 * const imgAttrs = toImgAttrs(props);
 * // Result: { src: "/optimized/hero-800w.webp", alt: "Hero image", width: 800, height: 600 }
 * 
 * @example
 * // Custom image component using toImgAttrs
 * const CustomImage: ImageComponentLike = (props) => {
 *   const imgAttrs = toImgAttrs(props);
 *   return (
 *     <div className="image-container">
 *       <img {...imgAttrs} loading="lazy" />
 *     </div>
 *   );
 * };
 * 
 * @since 1.0.0
 */
export function toImgAttrs(p: UniversalImageProps) {
  const { src, width, height, ...rest } = p;
  const url = isStaticImageDataLike(src) ? src.src : src;
  const w = width ?? (isStaticImageDataLike(src) ? src.width : undefined);
  const h = height ?? (isStaticImageDataLike(src) ? src.height : undefined);
  return { src: url, width: w, height: h, ...rest };
}

/**
 * Default SSR-safe HTML image component with fill mode support
 * 
 * **Universal Image Component Implementation**
 * 
 * A production-ready image component that provides a solid foundation for
 * applications that need image handling without framework-specific dependencies.
 * Designed to be SSR-safe while supporting modern image optimization features.
 * 
 * **Key Features:**
 * - **SSR Compatibility**: Works in server-side rendering environments
 * - **Fill Mode Support**: Implements absolute positioning for container-based sizing
 * - **Universal Compatibility**: Works in any React environment
 * - **Performance Optimized**: Includes lazy loading and proper attribute handling
 * - **Accessibility Compliant**: Maintains all accessibility attributes
 * - **Type Safe**: Full TypeScript support with proper type checking
 * 
 * **Fill Mode Implementation:**
 * When `fill={true}` is specified, the component applies CSS styling that
 * makes the image fill its parent container using absolute positioning.
 * This mimics Next.js Image component behavior for universal compatibility.
 * 
 * **CSS Properties Applied in Fill Mode:**
 * ```css
 * position: absolute;
 * top: 0;
 * left: 0;
 * right: 0;
 * bottom: 0;
 * width: 100%;
 * height: 100%;
 * ```
 * 
 * **Use Cases:**
 * - Default image component for component libraries
 * - Fallback implementation for frameworks without optimized image components
 * - Testing environment where complex image optimization isn't needed
 * - Server-side rendering where Next.js Image isn't available
 * - Progressive enhancement starting point
 * 
 * **Customization:**
 * This component serves as a reference implementation. Applications can
 * extend it with additional features like:
 * - Lazy loading intersection observers
 * - Progressive image loading
 * - Error handling and fallback images
 * - Performance monitoring
 * - Custom optimization pipelines
 * 
 * @param {UniversalImageProps} props - Universal image component props
 * @param {boolean} [props.fill] - Fill parent container with absolute positioning
 * @param {React.CSSProperties} [props.style] - Additional CSS styling
 * @returns {React.ReactElement} Rendered HTML img element with enhanced styling
 * 
 * @example
 * // Basic usage
 * <HtmlImage
 *   src="/images/hero.jpg"
 *   alt="Hero section background"
 *   width={1200}
 *   height={600}
 * />
 * 
 * @example
 * // Fill mode for container-based sizing
 * <div style={{ position: 'relative', width: '100%', height: '400px' }}>
 *   <HtmlImage
 *     src="/images/background.jpg"
 *     alt="Section background"
 *     fill={true}
 *   />
 * </div>
 * 
 * @example
 * // With custom styling
 * <HtmlImage
 *   src={staticAsset}
 *   alt="Product image"
 *   style={{
 *     borderRadius: '8px',
 *     objectFit: 'cover'
 *   }}
 * />
 * 
 * @example
 * // As a component library default
 * const ImageComponent = HtmlImage; // Use as default implementation
 * 
 * // Can be swapped with Next.js Image in Next.js apps
 * // const ImageComponent = NextImage;
 * 
 * @since 1.0.0
 */
export const HtmlImage: ImageComponentLike = ({ fill, style, ...rest }) => {
  const merged: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }
    : style ?? {};
  const attrs = toImgAttrs(rest as UniversalImageProps);
  return <img {...(attrs as React.ImgHTMLAttributes<HTMLImageElement>)} style={merged} />;
};
