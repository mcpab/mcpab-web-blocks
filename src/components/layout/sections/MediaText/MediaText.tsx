'use client';
/**
 * @fileoverview MediaText - Responsive Media and Text Layout Component
 * 
 * **Flexible Media-Text Split Section for Modern Web Layouts**
 *
 * A sophisticated layout component that creates responsive media and text combinations
 * with configurable column ratios, media type support (images and videos), and
 * professional layout options. Perfect for content sections, feature highlights,
 * and storytelling layouts.
 *
 * **Key Features:**
 * - **Flexible Column Ratios**: Named presets (40-60, 50-50, 60-40, etc.) or custom ratios
 * - **Media Type Support**: Images with Next.js optimization and YouTube video embeds
 * - **Responsive Design**: Automatic stacking on mobile devices with optimized layouts
 * - **Layout Flexibility**: Reversible column order and customizable background colors
 * - **Performance Optimized**: Efficient grid system with proper aspect ratio handling
 * - **Accessibility Compliant**: Semantic HTML structure with proper video controls
 *
 * **Layout System:**
 * ```
 * MediaText (Box Container)
 * └── Grid Container (spacing: 0, alignItems: stretch)
 *     ├── Grid Item (Media Column) - Image or Video
 *     │   └── Box (Aspect Ratio Container)
 *     │       └── BackgroundBox (Images) | iframe (Videos)
 *     └── Grid Item (Text Column) - Content
 *         └── Box (Full Width Container)
 *             └── message (React.ReactNode content)
 * ```
 *
 * **Responsive Behavior:**
 * - **Mobile (xs/sm)**: Both columns stack vertically (12/12 width)
 * - **Desktop (md+)**: Side-by-side layout with configurable ratios
 * - **Aspect Ratio**: 16:9 on mobile, flexible on desktop
 * - **Min Heights**: Inherits from parent or uses fallback values
 *
 * ## Usage Examples
 *
 * **Basic Image Layout:**
 * ```tsx
 * <MediaText
 *   message={<Typography variant="h4">Feature Title</Typography>}
 *   image="/images/hero.jpg"
 *   ImageComponent={Image}
 *   textSplit={{ preset: '60-40' }}
 * />
 * ```
 *
 * **YouTube Video with Reverse Layout:**
 * ```tsx
 * <MediaText
 *   message={<Stack spacing={2}>...</Stack>}
 *   video="dQw4w9WgXcQ"
 *   ImageComponent={Image}
 *   reverse
 *   textSplit={{ preset: '45-55' }}
 * />
 * ```
 *
 * **Custom Ratio with Background:**
 * ```tsx
 * <MediaText
 *   message={content}
 *   image={staticAsset}
 *   ImageComponent={Image}
 *   textSplit={{ ratio: 0.58 }}
 *   backgroundColor="background.paper"
 * />
 * ```
 *
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and utility extraction
 */

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BackgroundBox from '../../BackgroundBox';
import type { ImageConf } from '../../BackgroundBox';
import type { SxProps, Theme } from '@mui/material/styles';
import type { StaticImageDataLike , ImageComponentLike } from '../../../../core/images/image-types';
import {Size} from '../../grids/types';
import { TEXT_PRESETS , PresetName} from '../../grids/presets';
import { clampCols , ratioToCols } from '../../grids/math'; 
 

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Text column configuration options
 * 
 * Defines how to calculate the text column width using either
 * named presets or custom ratios for maximum layout flexibility.
 * 
 * @interface TextProps
 */
export type TextProps = {
  /** 
   * Named preset for common layouts or custom ratio string
   * 
   * @type {PresetName | string}
   * 
   * **Named Presets:**
   * Use predefined ratios for common layout patterns:
   * - '40-60': Text-focused layout
   * - '45-55': Slightly text-focused  
   * - '50-50': Equal split (default)
   * - '55-45': Slightly media-focused
   * - '60-40': Media-focused layout
   * 
   * **Custom Ratio Strings:**
   * Define custom ratios using "text-media" format:
   * - '70-30': 70% text, 30% media
   * - '25-75': 25% text, 75% media
   * 
   * @example
   * preset: '60-40'    // Named preset
   * preset: '58-42'    // Custom ratio string
   */
  preset?: PresetName | string;
  
  /** 
   * Fine-tune with decimal ratio (0-1 representing text column share)
   * 
   * @type {number}
   * 
   * Provides precise control over column width using decimal values.
   * The ratio represents the text column's share of the total width.
   * 
   * **Ratio Guidelines:**
   * - 0.4 = 40% text, 60% media
   * - 0.5 = 50% text, 50% media (equal split)
   * - 0.6 = 60% text, 40% media
   * - 0.75 = 75% text, 25% media
   * 
   * @example
   * ratio: 0.58  // 58% text, 42% media
   * ratio: 0.33  // 33% text, 67% media
   * ratio: 0.67  // 67% text, 33% media
   */
  ratio?: number;
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
  /** 
   * React content for the text column
   * 
   * @type {React.ReactNode}
   * 
   * Accepts any valid React content including JSX elements, strings,
   * numbers, or complex component trees. Typically used for headings,
   * paragraphs, buttons, and interactive content.
   * 
   * **Content Guidelines:**
   * - Use semantic HTML structure for accessibility
   * - Consider responsive text sizing with Material-UI Typography
   * - Include proper heading hierarchy for SEO
   * - Optimize content length for readability
   * 
   * @example
   * // Simple text content
   * message="Simple text content for the layout"
   * 
   * @example
   * // Rich JSX content
   * message={
   *   <Stack spacing={2}>
   *     <Typography variant="h4" component="h2">
   *       Feature Headline
   *     </Typography>
   *     <Typography variant="body1">
   *       Detailed description with multiple paragraphs...
   *     </Typography>
   *     <Button variant="contained">Learn More</Button>
   *   </Stack>
   * }
   */
  message: React.ReactNode;
  
  /** 
   * Background color for the text column
   * 
   * @type {string}
   * 
   * Sets the background color of the text column container. Accepts
   * any valid CSS color value including Material-UI theme colors,
   * hex codes, RGB values, or named colors.
   * 
   * **Theme Integration:**
   * - Use Material-UI theme colors: 'background.paper', 'primary.main'
   * - Supports palette color variants: 'primary.light', 'secondary.dark'
   * - Responsive to dark/light mode when using theme colors
   * 
   * **Design Guidelines:**
   * - Ensure adequate contrast with text content
   * - Consider accessibility standards (WCAG 2.1)
   * - Use transparent or theme colors for consistency
   * 
   * @example
   * // Theme colors (recommended)
   * backgroundColor="background.paper"
   * backgroundColor="primary.main"
   * 
   * @example
   * // Custom colors
   * backgroundColor="#f5f5f5"
   * backgroundColor="rgba(255, 255, 255, 0.8)"
   * backgroundColor="transparent"
   */
  backgroundColor?: string;
  
  /** 
   * Reverse column order (media first, then text)
   * 
   * @type {boolean}
   * 
   * Controls the visual order of media and text columns at desktop
   * breakpoints. Mobile devices always stack text above media for
   * optimal readability and user experience.
   * 
   * **Layout Behavior:**
   * - false (default): Text left, media right
   * - true: Media left, text right
   * - Mobile: Always text above media (regardless of reverse setting)
   * 
   * **Use Cases:**
   * - Alternating layouts in content sections
   * - Emphasizing visual content over text
   * - Creating visual rhythm in long-form pages
   * 
   * @example
   * // Standard layout (text left, media right)
   * reverse={false}
   * 
   * @example
   * // Reversed layout (media left, text right)
   * reverse={true}
   */
  reverse?: boolean;
  
  /** 
   * Text column sizing configuration
   * 
   * @type {TextProps}
   * 
   * Controls how the available horizontal space is divided between
   * text and media columns. Supports both named presets and custom
   * ratios for maximum layout flexibility.
   * 
   * **Named Presets:**
   * - '40-60': Text-focused (40% text, 60% media)
   * - '45-55': Slightly text-focused  
   * - '50-50': Equal split (default)
   * - '55-45': Slightly media-focused
   * - '60-40': Media-focused (60% text, 40% media)
   * 
   * **Custom Options:**
   * - Custom ratio strings: '58-42', '70-30'
   * - Decimal ratios: 0.33 (33% text), 0.67 (67% text)
   * 
   * **Responsive Behavior:**
   * - Mobile (xs): Always full-width stacking
   * - Desktop (md+): Configured ratio side-by-side
   * 
   * @example
   * // Named preset
   * textSplit={{ preset: '60-40' }}
   * 
   * @example
   * // Custom ratio string
   * textSplit={{ preset: '58-42' }}
   * 
   * @example
   * // Decimal ratio
   * textSplit={{ ratio: 0.33 }}
   */
  textSplit?: TextProps;
  
  /** 
   * Reserved padding hint (currently unused)
   * 
   * @type {boolean}
   * @deprecated This prop is reserved for future use and currently has no effect
   * 
   * Reserved for potential future padding/spacing enhancements.
   * Currently not implemented in the component logic.
   */
  pad?: boolean;
  
  /** 
   * Additional styling props
   * 
   * @type {SxProps<Theme>}
   * 
   * Material-UI sx prop for advanced styling customization of the
   * root container. Provides access to the full Material-UI styling
   * system including responsive breakpoints and theme integration.
   * 
   * **Styling Capabilities:**
   * - Responsive design with breakpoint objects
   * - Theme-aware color and spacing values  
   * - CSS properties with Material-UI enhancements
   * - Pseudo-selectors and advanced CSS features
   * 
   * **Common Use Cases:**
   * - Custom spacing and padding adjustments
   * - Border and shadow customizations
   * - Responsive behavior modifications
   * - Integration with custom design systems
   * 
   * @example
   * // Responsive padding
   * sx={{
   *   py: { xs: 2, md: 4 },
   *   px: { xs: 1, md: 3 }
   * }}
   * 
   * @example
   * // Theme integration
   * sx={{
   *   bgcolor: 'background.default',
   *   borderRadius: 1,
   *   boxShadow: 1
   * }}
   */
  sx?: SxProps<Theme>;

  /** 
   * Image component for rendering
   * 
   * @type {ImageComponentLike}
   * 
   * Framework-agnostic image component interface that supports
   * Next.js Image, standard img elements, or custom image components.
   * Provides flexibility across different React frameworks.
   * 
   * **Component Support:**
   * - Next.js Image: Recommended for Next.js applications
   * - Standard img: Basic HTML image element
   * - Custom components: Any component matching the interface
   * - Framework flexibility: Works across React environments
   * 
   * **Interface Requirements:**
   * Components must accept: src, width, height, alt, and optional
   * properties like priority, placeholder, and styling props.
   * 
   * @example
   * // Next.js Image component (recommended)
   * import Image from 'next/image';
   * ImageComponent={Image}
   * 
   * @example
   * // Custom image component
   * ImageComponent={({ src, alt, ...props }) => (
   *   <img src={src} alt={alt} {...props} />
   * )}
   */
  ImageComponent: ImageComponentLike
};

// ============================================================================
// MEDIA TYPE DISCRIMINATED UNION
// ============================================================================

/**
 * Image media configuration
 * 
 * Specifies that the component should display an image.
 * When this type is used, the video property is explicitly never allowed.
 * 
 * @interface ImageMedia
 */
type ImageMedia = { 
  /** 
   * Image source data
   * 
   * @type {string | StaticImageDataLike}
   * 
   * Supports both URL strings and Next.js StaticImageData objects
   * for flexible image sourcing and optimization.
   * 
   * @example
   * // URL string
   * image: "/images/hero.jpg"
   * 
   * @example
   * // Static import
   * import heroImage from './hero.jpg';
   * image: heroImage
   */
  image: string | StaticImageDataLike; 
  
  /** Explicitly prevent video when using image */
  video?: never; 
};

/**
 * Video media configuration
 * 
 * Specifies that the component should display a YouTube video.
 * When this type is used, the image property is explicitly never allowed.
 * 
 * @interface VideoMedia
 */
type VideoMedia = { 
  /** 
   * YouTube video identifier
   * 
   * @type {string}
   * 
   * YouTube video ID for embedding. The component automatically
   * constructs the proper embed URL and iframe configuration.
   * 
   * **Supported Formats:**
   * - Video ID only: 'dQw4w9WgXcQ'
   * - Full YouTube URLs are not supported (extract ID manually)
   * 
   * **Features Included:**
   * - Autoplay, clipboard-write, encrypted-media permissions
   * - Picture-in-picture and web-share support
   * - Strict origin referrer policy for security
   * - Full-screen capability
   * 
   * @example
   * // YouTube video ID
   * video: "dQw4w9WgXcQ"
   */
  video: string; 
  
  /** Explicitly prevent image when using video */
  image?: never; 
};

// ============================================================================
// EXPORTED COMPONENT PROP TYPES
// ============================================================================

/**
 * Complete MediaText component props
 * 
 * Combines base props with discriminated union for media types.
 * Ensures type safety by requiring exactly one media type (image OR video).
 * 
 * @type MediaAndTextProps
 */
export type MediaAndTextProps = BaseProps & (ImageMedia | VideoMedia);

/**
 * MediaText props without message (for specialized use cases)
 * 
 * Similar to MediaAndTextProps but with the message prop omitted.
 * Useful for creating wrapper components or specialized layouts.
 * 
 * @type MediaAndTextNoMessage
 */
export type MediaAndTextNoMessage = Omit<BaseProps, 'message'> & (ImageMedia | VideoMedia);

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Convert text column configuration to Material-UI Grid size object
 * 
 * Processes textSplit configuration and returns grid column sizing
 * that works across Material-UI's responsive breakpoints.
 * 
 * **Processing Priority:**
 * 1. Named presets (e.g., '50-50', '60-40')
 * 2. Custom ratio strings (e.g., '70-30')  
 * 3. Decimal ratios (e.g., 0.58)
 * 4. Default to '50-50' if no valid config provided
 * 
 * **Grid Behavior:**
 * - **xs/sm breakpoints**: Always 12 (full width stacking on mobile)
 * - **md+ breakpoints**: Calculated from preset/ratio
 * - **Responsive**: Automatically derives media column size (12 - text columns)
 * 
 * @param {object} [props] - Text column configuration object
 * @param {PresetName | string} [props.preset] - Named preset or custom ratio string
 * @param {number} [props.ratio] - Decimal ratio between 0 and 1
 * @returns {Size} Material-UI Grid size object with responsive breakpoints
 * 
 * @example
 * // Named preset
 * getTextSplit({ preset: '60-40' })
 * // Returns: { xs: 12, sm: 12, md: 8 }
 * 
 * @example
 * // Custom ratio string  
 * getTextSplit({ preset: '58-42' })
 * // Returns: { xs: 12, sm: 12, md: 7 }
 * 
 * @example
 * // Decimal ratio
 * getTextSplit({ ratio: 0.33 })
 * // Returns: { xs: 12, sm: 12, md: 4 }
 * 
 * @example
 * // No configuration (uses default)
 * getTextSplit()
 * // Returns: { xs: 12, sm: 12, md: 6 }
 * 
 * @internal
 */
function getTextSplit(props?: { preset?: PresetName | string; ratio?: number }): Size {
  const { preset, ratio } = props || {};

  // Handle named presets from TEXT_PRESETS
  if (preset && TEXT_PRESETS[preset as PresetName]) {
    const s = TEXT_PRESETS[preset as PresetName];
    return { xs: 12, sm: 12, md: s.md, lg: s.lg, xl: s.xl };
  }

  // Handle custom ratio strings (e.g., "70-30")
  if (typeof preset === 'string') {
    const m = preset.match(/^(\d{1,2})\s*-\s*(\d{1,2})$/);
    if (m) {
      const a = parseInt(m[1], 10), b = parseInt(m[2], 10);
      return { xs: 12, sm: 12, md: ratioToCols(a / (a + b)) };
    }
  }

  // Handle decimal ratios
  if (typeof ratio === 'number') {
    return { xs: 12, sm: 12, md: ratioToCols(ratio) };
  }

  // Default fallback to 50-50 split
  return { xs: 12, sm: 12, md: 6 };
}

/**
 * Calculate complementary media column size from text column configuration
 * 
 * Determines the media column grid sizing by calculating the remaining
 * columns after text column allocation. Ensures both columns always
 * sum to 12 for proper Material-UI Grid behavior.
 * 
 * **Grid Math:**
 * - Media columns = 12 - Text columns (at each breakpoint)
 * - Mobile (xs/sm): Always returns 12 for full-width stacking
 * - Desktop (md+): Calculates complementary size with validation
 * - Maintains responsive behavior across all breakpoints
 * 
 * @param {Size} text - Text column grid configuration from getTextSplit()
 * @returns {Size} Complementary media column grid configuration
 * 
 * @example
 * const textSize = { xs: 12, sm: 12, md: 8 };      // 60-40 text layout
 * const mediaSize = computeMedia(textSize);
 * // Returns: { xs: 12, sm: 12, md: 4 }
 * 
 * @example
 * const textSize = { xs: 12, sm: 12, md: 6 };      // 50-50 equal split  
 * const mediaSize = computeMedia(textSize);
 * // Returns: { xs: 12, sm: 12, md: 6 }
 * 
 * @internal
 */
function computeMedia(text: Size): Size {
  const out: Size = { xs: 12, sm: 12, md: 12 };
  
  // Calculate complementary sizes for desktop breakpoints
  (['md', 'lg', 'xl'] as const).forEach(bp => {
    const t = text[bp];
    if (typeof t === 'number') {
      out[bp] = clampCols(12 - t);
    }
  });
  
  return out;
}

// ============================================================================
// MAIN COMPONENT IMPLEMENTATION
// ============================================================================

/**
 * MediaText - Responsive Media and Text Layout Component
 * 
 * A sophisticated layout component that creates professional media-text combinations
 * with configurable column ratios, multiple media types, and responsive design.
 * Perfect for feature sections, about pages, testimonials, and content marketing.
 * 
 * **Core Functionality:**
 * - **Flexible Ratios**: Named presets (40-60 through 60-40) or custom decimal ratios
 * - **Media Support**: Images with Next.js optimization or YouTube video embeds
 * - **Responsive Design**: Mobile stacking with desktop side-by-side layouts
 * - **Layout Control**: Reversible column order and customizable backgrounds
 * - **Performance**: Optimized rendering with proper aspect ratios and lazy loading
 * 
 * **Architecture:**
 * - Uses Material-UI Grid system for responsive layout
 * - Implements discriminated unions for type-safe media handling
 * - Provides fallback dimensions for standalone usage
 * - Inherits container dimensions when used within Section components
 * 
 * @param {MediaAndTextProps} props - Component configuration and content
 * @returns {React.ReactElement} Rendered MediaText layout component
 * 
 * @example
 * // Image layout with 60-40 ratio
 * <MediaText
 *   message={<Typography variant="h4">Feature Title</Typography>}
 *   image="/hero.jpg"
 *   ImageComponent={Image}
 *   textSplit={{ preset: '60-40' }}
 * />
 * 
 * @example
 * // YouTube video with reverse layout
 * <MediaText
 *   message={contentJSX}
 *   video="dQw4w9WgXcQ"
 *   ImageComponent={Image}
 *   reverse
 *   backgroundColor="background.paper"
 * />
 */
const MediaText: React.FC<MediaAndTextProps> = (props) => {
  // ========================================================================
  // GRID CALCULATIONS
  // ========================================================================
  
  /** Calculate text column grid sizes based on textSplit configuration */
  const textSplit = getTextSplit(props.textSplit);
  
  /** Calculate complementary media column sizes */
  const mediaSplit = computeMedia(textSplit);
  
  /** Extract image component for type safety */
  const ImageComponent = props.ImageComponent;

  // ========================================================================
  // MEDIA CONTENT GENERATION
  // ========================================================================
  
  /** 
   * Generate media content based on prop configuration
   * Uses discriminated union to ensure type safety between image and video
   */
  let media: React.ReactNode = null;
  
  // Handle image media type
  if ('image' in props && props.image) {
    /** Configure image for BackgroundBox component */
    const imageConf: ImageConf = {
      src: props.image,
      mode: 'cover',           // Fill container while maintaining aspect ratio
      objectPosition: '50% 50%', // Center the image within container
    };
    
    media = (
      <BackgroundBox 
        ImageComponent={ImageComponent} 
        imageConf={imageConf} 
        sx={{ 
          position: 'absolute', 
          inset: 0 // Fill entire container
        }} 
      />
    );
  }
  
  // Handle video media type (YouTube embed)
  if ('video' in props && props.video) {
    media = (
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${props.video}`}
          title="YouTube video player"
          // Comprehensive permissions for modern YouTube features
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            border: 0 // Remove default iframe border
          }}
        />
      </Box>
    );
  }

  // ========================================================================
  // COMPONENT RENDER
  // ========================================================================
  
  return (
    <Box
      id="mediaText"
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'inherit',   // Inherit from parent Section when available
        flex: 1,                // Grow to fill available space
        ...props.sx,            // Allow style overrides
      }}
    >
      {/* Main content wrapper with z-index for proper layering */}
      <Box sx={{ position: 'relative', zIndex: 1, flex: 1, minHeight: 'inherit' }}>
        <Grid
          container
          spacing={0}  // No gaps between columns for seamless layout
          sx={{
            alignItems: 'stretch',  // Equal height columns
            minHeight: { 
              xs: 240,              // Fallback height on mobile
              md: 'inherit'         // Inherit from parent on desktop
            },
            display: 'flex',
          }}
        >
          {/* ================================================================
              MEDIA COLUMN
              ================================================================ */}
          <Grid
            size={mediaSplit}
            sx={{ 
              display: 'flex', 
              // Responsive column ordering
              order: { 
                xs: 0,                                    // Always first on mobile
                md: props.reverse ? 1 : 0                 // Configurable on desktop
              }, 
              minHeight: 'inherit' 
            }}
          >
            <Box
              sx={{
                position: 'relative',
                flex: 1,                                  // Fill available width
                minHeight: { 
                  xs: 240,                                // Minimum height on mobile
                  md: 'inherit'                           // Inherit parent height on desktop
                },
                aspectRatio: { 
                  xs: '16 / 9',                           // Fixed aspect ratio on mobile
                  md: 'auto'                              // Flexible on desktop
                },
              }}
            >
              {media}
            </Box>
          </Grid>

          {/* ================================================================
              TEXT COLUMN
              ================================================================ */}
          <Grid
            size={textSplit}
            sx={{
              display: 'flex',
              alignItems: 'stretch',                      // Fill vertical space
              // Responsive column ordering
              order: { 
                xs: 1,                                    // Always second on mobile
                md: props.reverse ? 0 : 1                 // Configurable on desktop
              },
              minHeight: 'inherit',
              bgcolor: props.backgroundColor || 'transparent', // Optional background
            }}
          >
            <Box sx={{ width: '100%', height: '100%' }}>
              {/* Render message content with type safety check */}
              {'message' in props ? props.message : null}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// ============================================================================
// COMPONENT EXPORT
// ============================================================================

/**
 * MediaText Component Export
 * 
 * Professional media-text layout component for Next.js and React applications.
 * Provides responsive media-text combinations with configurable ratios, multiple
 * media types (images/videos), and flexible layout options.
 * 
 * **Key Features:**
 * - Framework-agnostic image component support
 * - YouTube video embed integration
 * - Responsive grid-based layouts
 * - Customizable column ratios and backgrounds
 * - Mobile-first responsive design
 * - TypeScript type safety with discriminated unions
 * 
 * **Performance Optimizations:**
 * - Lazy loading for images through Next.js Image component
 * - Proper aspect ratio maintenance for responsive media
 * - Minimal re-renders through optimized prop structure
 * - CSS Grid and Flexbox for efficient layouts
 * 
 * @see {@link MediaAndTextProps} for complete prop interface
 * @see {@link TextSplitConfig} for ratio configuration options
 * @see {@link ImageConf} for image configuration patterns
 */
export default MediaText;
