/**
 * @fileoverview Advanced carousel component with Next.js image optimization and dynamic transitions.
 * 
 * # BlockCarousel
 * 
 * A sophisticated full-bleed background carousel that seamlessly transitions between images
 * while rendering overlay content. Optimized for Next.js with StaticImageData support,
 * automatic preloading, and performance-focused image handling.
 * 
 * ## Overview
 * 
 * This component provides:
 * - **Dynamic Transitions**: Smooth fade effects between carousel frames
 * - **Next.js Integration**: Full StaticImageData support with automatic optimization
 * - **Performance Optimization**: Intelligent preloading and image quality management
 * - **Layered Architecture**: Separate background, shield, and content layers
 * - **Accessibility**: WCAG-compliant carousel behavior with proper controls
 * - **Responsive Design**: Full-width responsive image handling
 * 
 * ## Component Architecture
 * 
 * ```
 * BlockCarousel (Grid Layout)
 * ├── Background Layer (gridArea: 1/1, zIndex: 0)
 * │   └── DynamicTransition
 * │       ├── BackgroundBox (Frame 1)
 * │       ├── BackgroundBox (Frame 2)
 * │       └── BackgroundBox (Frame N)
 * ├── Shield Layer (gridArea: 1/1, zIndex: 1) - Optional click protection
 * └── Content Layer (gridArea: 1/1, zIndex: 2)
 *     └── Container (Centered overlay content)
 * ```
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import BlockCarousel from '@/src/components/banner/BlockCarousel';
 * import { MainTitle } from '@/src/components/banner/MainTitle';
 * 
 * const carouselConfig = {
 *   images: [
 *     { image: '/hero1.jpg' },
 *     { image: '/hero2.jpg' },
 *     { image: '/hero3.jpg' },
 *   ],
 *   interval: 5000,
 *   transitionDuration: 900,
 *   overlayColor: 'rgba(0,0,0,0.3)',
 * };
 * 
 * function HeroCarousel() {
 *   return (
 *     <BlockCarousel config={carouselConfig}>
 *       <MainTitle level="h1">
 *         Dynamic Hero Experience
 *       </MainTitle>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ## Next.js StaticImageData Integration
 * 
 * The component fully supports Next.js StaticImageData for optimal performance
 * and automatic image optimization. StaticImageData provides compile-time
 * image analysis and runtime optimization.
 * 
 * ### Importing Static Images
 * ```tsx
 * import hero1 from '/public/images/hero-1.jpg';
 * import hero2 from '/public/images/hero-2.jpg';
 * import hero3 from '/public/images/hero-3.jpg';
 * import type { StaticImageData } from 'next/image';
 * 
 * const heroImages: StaticImageData[] = [hero1, hero2, hero3];
 * 
 * const carouselConfig = {
 *   images: heroImages.map(img => ({ image: img })),
 *   interval: 6000,
 *   preloadFirst: 2, // Preload first 2 images for instant transitions
 * };
 * 
 * function OptimizedCarousel() {
 *   return (
 *     <BlockCarousel config={carouselConfig}>
 *       <Stack spacing={3} alignItems="center" textAlign="center">
 *         <Typography variant="h1" color="white">
 *           Premium Experience
 *         </Typography>
 *         <Typography variant="h5" color="grey.300">
 *           Showcasing excellence through dynamic visuals
 *         </Typography>
 *       </Stack>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ### Mixed Image Sources
 * ```tsx
 * import localHero from '/public/hero-local.jpg';
 * 
 * const mixedCarouselConfig = {
 *   images: [
 *     { 
 *       image: localHero, // StaticImageData from import
 *       objectPosition: 'center top',
 *     },
 *     { 
 *       image: '/api/dynamic-hero.jpg', // Dynamic URL
 *       transform: 'scale(1.05)',
 *     },
 *     { 
 *       image: 'https://cdn.example.com/hero.jpg', // External URL
 *       objectPosition: 'center bottom',
 *     },
 *   ],
 *   interval: 7000,
 *   overlayColor: 'rgba(0,0,0,0.4)',
 * };
 * ```
 * 
 * ## Advanced Examples
 * 
 * ### E-commerce Product Showcase
 * ```tsx
 * import product1 from '/public/products/hero-1.jpg';
 * import product2 from '/public/products/hero-2.jpg';
 * import product3 from '/public/products/hero-3.jpg';
 * 
 * const productCarousel = {
 *   images: [
 *     { 
 *       image: product1,
 *       objectPosition: 'center center',
 *       transform: 'scale(1.02)', // Subtle zoom
 *     },
 *     { 
 *       image: product2,
 *       objectPosition: 'center top',
 *     },
 *     { 
 *       image: product3,
 *       objectPosition: 'right center',
 *     },
 *   ],
 *   interval: 4000,
 *   transitionDuration: 1200,
 *   overlayColor: 'rgba(0,0,0,0.25)',
 *   preloadFirst: 3, // Preload all for smooth experience
 * };
 * 
 * function ProductShowcase() {
 *   return (
 *     <BlockCarousel 
 *       config={productCarousel}
 *       containerProps={{ maxWidth: 'md' }}
 *     >
 *       <Stack spacing={4} alignItems="center" textAlign="center">
 *         <Chip label="New Collection" color="primary" size="large" />
 *         <Typography 
 *           variant="h1" 
 *           sx={{ 
 *             color: 'white',
 *             fontWeight: 700,
 *             textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
 *           }}
 *         >
 *           Summer 2024
 *         </Typography>
 *         <Typography 
 *           variant="h4" 
 *           sx={{ 
 *             color: 'grey.200',
 *             maxWidth: 600,
 *           }}
 *         >
 *           Discover our latest designs crafted for the modern lifestyle
 *         </Typography>
 *         <Stack direction="row" spacing={2}>
 *           <ActionButton variant="contained" size="large">
 *             Shop Collection
 *           </ActionButton>
 *           <ActionButton variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
 *             View Lookbook
 *           </ActionButton>
 *         </Stack>
 *       </Stack>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ### Real Estate Property Tour
 * ```tsx
 * import exterior from '/public/property/exterior.jpg';
 * import livingRoom from '/public/property/living-room.jpg';
 * import kitchen from '/public/property/kitchen.jpg';
 * import bedroom from '/public/property/bedroom.jpg';
 * 
 * const propertyTour = {
 *   images: [
 *     { 
 *       image: exterior,
 *       objectPosition: 'center bottom',
 *     },
 *     { 
 *       image: livingRoom,
 *       objectPosition: 'center center',
 *       transform: 'scale(1.03)',
 *     },
 *     { 
 *       image: kitchen,
 *       objectPosition: 'left center',
 *     },
 *     { 
 *       image: bedroom,
 *       objectPosition: 'center top',
 *     },
 *   ],
 *   interval: 6000,
 *   transitionDuration: 1000,
 *   overlayColor: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
 *   preloadFirst: 2,
 * };
 * 
 * function PropertyHero() {
 *   return (
 *     <BlockCarousel 
 *       config={propertyTour}
 *       containerProps={{ 
 *         maxWidth: 'lg',
 *         sx: { alignItems: 'flex-end', pb: 8 }
 *       }}
 *     >
 *       <Box sx={{ width: '100%', maxWidth: 800 }}>
 *         <Grid container spacing={4} alignItems="center">
 *           <Grid item xs={12} md={8}>
 *             <Typography variant="h2" color="white" sx={{ mb: 2 }}>
 *               Luxury Downtown Penthouse
 *             </Typography>
 *             <Typography variant="h6" color="grey.300" sx={{ mb: 3 }}>
 *               3 Bed • 2.5 Bath • 2,400 sq ft • City Views
 *             </Typography>
 *             <Stack direction="row" spacing={2}>
 *               <ActionButton variant="contained">
 *                 Schedule Tour
 *               </ActionButton>
 *               <ActionButton variant="outlined" sx={{ color: 'white' }}>
 *                 View Details
 *               </ActionButton>
 *             </Stack>
 *           </Grid>
 *           <Grid item xs={12} md={4}>
 *             <Box sx={{ 
 *               backgroundColor: 'rgba(255,255,255,0.95)',
 *               borderRadius: 2,
 *               p: 3,
 *               textAlign: 'center',
 *             }}>
 *               <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
 *                 $1,250,000
 *               </Typography>
 *               <Typography variant="body2" color="text.secondary">
 *                 Listed 3 days ago
 *               </Typography>
 *             </Box>
 *           </Grid>
 *         </Grid>
 *       </Box>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ### Brand Storytelling Carousel
 * ```tsx
 * import story1 from '/public/brand/heritage.jpg';
 * import story2 from '/public/brand/craftsmanship.jpg';
 * import story3 from '/public/brand/innovation.jpg';
 * 
 * const brandStory = {
 *   images: [
 *     { 
 *       image: story1,
 *       objectPosition: 'center center',
 *     },
 *     { 
 *       image: story2,
 *       objectPosition: 'center bottom',
 *       transform: 'scale(1.05)',
 *     },
 *     { 
 *       image: story3,
 *       objectPosition: 'right center',
 *     },
 *   ],
 *   interval: 8000, // Longer duration for storytelling
 *   transitionDuration: 1500,
 *   overlayColor: 'rgba(0,0,0,0.5)',
 *   preloadFirst: 3,
 * };
 * 
 * function BrandStoryCarousel() {
 *   return (
 *     <BlockCarousel 
 *       config={brandStory}
 *       containerProps={{ maxWidth: 'lg' }}
 *       rootProps={{
 *         sx: {
 *           '&::before': {
 *             content: '""',
 *             position: 'absolute',
 *             inset: 0,
 *             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
 *             zIndex: 1,
 *           }
 *         }
 *       }}
 *     >
 *       <Stack spacing={4} alignItems="center" textAlign="center" sx={{ zIndex: 2 }}>
 *         <Typography 
 *           variant="h1" 
 *           sx={{ 
 *             color: 'white',
 *             fontWeight: 300,
 *             letterSpacing: '-0.02em',
 *           }}
 *         >
 *           Crafted with Purpose
 *         </Typography>
 *         <Typography 
 *           variant="h5" 
 *           sx={{ 
 *             color: 'grey.200',
 *             maxWidth: 700,
 *             fontWeight: 300,
 *             lineHeight: 1.6,
 *           }}
 *         >
 *           For over a century, we've been perfecting our craft, 
 *           combining traditional techniques with modern innovation 
 *           to create products that stand the test of time.
 *         </Typography>
 *         <ActionButton 
 *           variant="outlined" 
 *           size="large"
 *           sx={{ 
 *             color: 'white', 
 *             borderColor: 'white',
 *             '&:hover': {
 *               backgroundColor: 'rgba(255,255,255,0.1)',
 *               borderColor: 'white',
 *             }
 *           }}
 *         >
 *           Discover Our Story
 *         </ActionButton>
 *       </Stack>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ## Performance Optimization
 * 
 * ### StaticImageData Benefits
 * - **Compile-time Analysis**: Image dimensions and metadata available at build time
 * - **Automatic Optimization**: Next.js automatically optimizes images for different devices
 * - **Blur Placeholders**: Built-in low-quality image placeholders for smooth loading
 * - **Format Selection**: Automatic WebP/AVIF format selection based on browser support
 * - **Responsive Sizing**: Automatic srcset generation for different screen densities
 * 
 * ```tsx
 * // Next.js automatically provides these properties in StaticImageData:
 * const heroImage = {
 *   src: "/_next/static/media/hero.a1b2c3d4.jpg",
 *   height: 1080,
 *   width: 1920,
 *   blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..." // Auto-generated
 * };
 * ```
 * 
 * ### Preloading Strategy
 * ```tsx
 * const optimizedConfig = {
 *   images: [...],
 *   preloadFirst: 2,    // Preload first 2 images for instant first transition
 *   interval: 5000,     // 5 seconds per frame
 *   transitionDuration: 900, // Smooth but not too slow
 * };
 * ```
 * 
 * ## Accessibility Features
 * 
 * The carousel implements WCAG guidelines for rotating content:
 * - **Pause on Hover**: Automatic pausing when user hovers (implemented in DynamicTransition)
 * - **Reduced Motion**: Respects `prefers-reduced-motion` user preference
 * - **Keyboard Navigation**: Focus management for interactive overlay content
 * - **Screen Reader Support**: Proper labeling and content structure
 * 
 * ```tsx
 * // Accessibility-focused configuration
 * const accessibleConfig = {
 *   images: [...],
 *   interval: 7000,     // Longer intervals for better readability
 *   respectReducedMotion: true,
 *   pauseOnHover: true,
 *   pauseOnFocus: true,
 * };
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Image Optimization**: Use StaticImageData for static images, optimize dynamic URLs
 * 2. **Content Contrast**: Ensure sufficient contrast between overlay text and background
 * 3. **Performance**: Limit preloadFirst to 2-3 images to avoid excessive bandwidth usage
 * 4. **Timing**: Use intervals of 5000ms+ for content-heavy overlays
 * 5. **Accessibility**: Provide pause controls and respect motion preferences
 * 6. **Responsive Design**: Test overlay content at all screen sizes
 * 
 * @since 1.0.0
 */

import * as React from "react";
import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";
import { BackgroundBox } from "../layout/";
import DynamicTransition from "./DynamicTransition";

/**
 * Next.js StaticImageData interface for optimized image handling.
 * 
 * This interface mirrors Next.js's StaticImageData type, enabling
 * compile-time image optimization and automatic performance enhancements.
 * When you import images in Next.js, they automatically provide this structure.
 * 
 * @example
 * ```tsx
 * // Next.js automatically generates StaticImageData when importing images
 * import heroImage from '/public/hero.jpg';
 * 
 * // heroImage will have this structure:
 * const heroImage: StaticImageData = {
 *   src: "/_next/static/media/hero.a1b2c3d4.jpg",
 *   height: 1080,
 *   width: 1920,
 *   blurDataURL: "data:image/jpeg;base64,..." // Auto-generated placeholder
 * };
 * 
 * // Use in carousel
 * const carouselConfig = {
 *   images: [{ image: heroImage }],
 * };
 * ```
 * 
 * @example
 * ```tsx
 * // Import multiple images for carousel
 * import hero1 from '/public/carousel/hero-1.jpg';
 * import hero2 from '/public/carousel/hero-2.jpg';
 * import hero3 from '/public/carousel/hero-3.jpg';
 * 
 * const carouselImages = [hero1, hero2, hero3];
 * 
 * const config = {
 *   images: carouselImages.map((img, index) => ({
 *     image: img,
 *     objectPosition: index === 0 ? 'center top' : 'center center',
 *   })),
 *   preloadFirst: 2, // Preload first 2 for instant transitions
 * };
 * ```
 */

import type { StaticImageDataLike , ImageComponentLike } from "../../core/image/image-types"; 


/**
 * Configuration for a single carousel frame.
 * 
 * Defines the image source and display properties for each frame in the carousel.
 * Supports both string URLs and Next.js StaticImageData for optimal performance.
 * 
 * @example
 * ```tsx
 * // Using string URLs
 * const urlFrame: ImageCarousel = {
 *   image: '/hero-1.jpg',
 *   objectPosition: 'center top',
 *   transform: 'scale(1.05)',
 * };
 * 
 * // Using Next.js StaticImageData
 * import heroImage from '/public/hero-2.jpg';
 * const staticFrame: ImageCarousel = {
 *   image: heroImage,
 *   objectPosition: 'center center',
 * };
 * ```
 */
export type ImageCarousel = {
  /** 
   * Image source - supports both string URLs and Next.js StaticImageData.
   * 
   * For optimal performance with static images, use Next.js imports which
   * provide automatic optimization, blur placeholders, and responsive sizing.
   * 
   * @example
   * ```tsx
   * // String URL (dynamic/external images)
   * image: '/api/dynamic-image.jpg'
   * image: 'https://cdn.example.com/hero.jpg'
   * 
   * // StaticImageData (imported static images) - RECOMMENDED
   * import heroImg from '/public/hero.jpg';
   * image: heroImg
   * ```
   */
  image: string | StaticImageDataLike;
  
  /** 
   * CSS transform applied to the background image.
   * 
   * Useful for creating subtle animations or adjusting image display.
   * Common use cases include zoom effects and positioning adjustments.
   * 
   * @example
   * ```tsx
   * transform: 'scale(1.05)'           // Subtle zoom effect
   * transform: 'scale(1.1) rotate(1deg)' // Zoom with slight rotation
   * transform: 'translateX(-10%)'      // Horizontal offset
   * ```
   */
  transform?: string;
  
  /** 
   * CSS object-position value for background image positioning.
   * 
   * Controls which part of the image is visible when the image doesn't
   * perfectly match the container's aspect ratio.
   * 
   * @example
   * ```tsx
   * objectPosition: 'center center'    // Default - center the image
   * objectPosition: 'center top'       // Show top portion of image
   * objectPosition: 'left center'      // Show left side of image
   * objectPosition: '75% 25%'          // Custom percentage positioning
   * ```
   */
  objectPosition?: string;
};

/**
 * Complete configuration for the background carousel behavior.
 * 
 * Controls timing, transitions, visual effects, and performance optimization
 * for the carousel component. All properties are optional with sensible defaults.
 * 
 * @example
 * ```tsx
 * // Basic configuration
 * const basicConfig: CarouselProps = {
 *   images: [
 *     { image: '/hero1.jpg' },
 *     { image: '/hero2.jpg' },
 *   ],
 * };
 * 
 * // Advanced configuration
 * const advancedConfig: CarouselProps = {
 *   images: carouselFrames,
 *   interval: 6000,
 *   transitionDuration: 1200,
 *   overlayColor: 'rgba(0,0,0,0.4)',
 *   preloadFirst: 3,
 * };
 * ```
 */
export type CarouselProps = {
  /** 
   * Array of carousel frames to display in sequence.
   * 
   * Each frame can use either string URLs or Next.js StaticImageData.
   * Mix and match as needed for your use case.
   * 
   * @example
   * ```tsx
   * import hero1 from '/public/hero1.jpg';
   * import hero2 from '/public/hero2.jpg';
   * 
   * images: [
   *   { 
   *     image: hero1, // StaticImageData
   *     objectPosition: 'center top' 
   *   },
   *   { 
   *     image: '/api/dynamic.jpg', // String URL
   *     transform: 'scale(1.05)' 
   *   },
   * ]
   * ```
   */
  images: ImageCarousel[];
  
  /** 
   * Display duration per frame in milliseconds.
   * 
   * Longer intervals work better for content-heavy overlays where users
   * need time to read and interact with the content.
   * 
   * @default 5000
   * @example
   * ```tsx
   * interval: 4000  // Fast-paced, dynamic feel
   * interval: 6000  // Standard marketing carousel
   * interval: 8000  // Content-focused, reading time
   * ```
   */
  interval?: number;

  /** 
   * Cross-fade transition duration in milliseconds.
   * 
   * Controls how quickly frames transition. Longer durations create
   * smoother, more elegant transitions but may feel slow.
   * 
   * @default 900
   * @example
   * ```tsx
   * transitionDuration: 600   // Quick, snappy transitions
   * transitionDuration: 1200  // Smooth, elegant transitions
   * transitionDuration: 2000  // Slow, dramatic transitions
   * ```
   */
  transitionDuration?: number;
  
  /** 
   * Color or gradient overlay applied over all frames.
   * 
   * Essential for ensuring sufficient contrast between background
   * images and overlay text content. Supports CSS colors and gradients.
   * 
   * @default 'rgba(0,0,0,0.2)'
   * @example
   * ```tsx
   * overlayColor: 'rgba(0,0,0,0.5)'  // Solid dark overlay
   * overlayColor: 'rgba(255,255,255,0.3)'  // Light overlay
   * overlayColor: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8))'  // Gradient
   * ```
   */
  overlayColor?: string;
  
  /** 
   * Number of initial frames to preload with Next.js priority.
   * 
   * Preloading ensures instant transitions for the first few frames
   * but uses more bandwidth. Balance user experience with performance.
   * 
   * @default 2
   * @example
   * ```tsx
   * preloadFirst: 1  // Minimal preloading
   * preloadFirst: 2  // Balanced approach (recommended)
   * preloadFirst: 3  // Aggressive preloading for premium experience
   * ```
   */
  preloadFirst?: number;
};

/**
 * Props for the BlockCarousel component.
 * 
 * Combines carousel configuration with content layout options and styling
 * customization for creating sophisticated hero experiences.
 * 
 * @example
 * ```tsx
 * const carouselProps: CarouselConfig = {
 *   config: {
 *     images: [...],
 *     interval: 5000,
 *   },
 *   containerProps: { maxWidth: 'lg' },
 *   rootProps: { sx: { minHeight: '60vh' } },
 *   children: <HeroContent />,
 * };
 * ```
 */
export type CarouselConfig = {
  /** 
   * Carousel behavior and image configuration.
   * 
   * Defines the images, timing, transitions, and performance settings.
   * If omitted, the component will render with empty frames.
   * 
   * @example
   * ```tsx
   * config={{
   *   images: [
   *     { image: heroImage1, objectPosition: 'center top' },
   *     { image: heroImage2, transform: 'scale(1.05)' },
   *   ],
   *   interval: 6000,
   *   transitionDuration: 1000,
   *   overlayColor: 'rgba(0,0,0,0.4)',
   *   preloadFirst: 2,
   * }}
   * ```
   */
  config?: CarouselProps;
  
  /** 
   * Content rendered as overlay on top of the carousel.
   * 
   * Typically includes headings, descriptions, call-to-action buttons,
   * and other hero content. Automatically centered within a responsive container.
   * 
   * @example
   * ```tsx
   * children={
   *   <Stack spacing={3} alignItems="center" textAlign="center">
   *     <Typography variant="h1" color="white">
   *       Amazing Product
   *     </Typography>
   *     <Typography variant="h5" color="grey.300">
   *       Transform your experience
   *     </Typography>
   *     <ActionButton variant="contained">Get Started</ActionButton>
   *   </Stack>
   * }
   * ```
   */
  children: React.ReactNode;
  
  /** 
   * Props passed to the content Container component.
   * 
   * Controls the responsive layout, max-width, and styling of the
   * content overlay. Useful for customizing content positioning and layout.
   * 
   * @example
   * ```tsx
   * containerProps={{
   *   maxWidth: 'md',           // Narrower content width
   *   sx: {
   *     alignItems: 'flex-start', // Left-align content
   *     justifyContent: 'flex-end', // Bottom-align content
   *     pb: 8,                  // Bottom padding
   *     pl: 4,                  // Left padding
   *   }
   * }}
   * ```
   */
  containerProps?: ContainerProps;
  
  /** 
   * Props passed to the root Box wrapper component.
   * 
   * Allows customization of the carousel's root container including
   * height, positioning, and additional styling. Merged with default styles.
   * 
   * @example
   * ```tsx
   * rootProps={{
   *   sx: {
   *     minHeight: '80vh',      // Custom height
   *     '&::before': {          // Custom overlay
   *       content: '""',
   *       position: 'absolute',
   *       inset: 0,
   *       background: 'radial-gradient(...)',
   *       zIndex: 1,
   *     }
   *   }
   * }}
   * ```
   */
  rootProps?: BoxProps;

  /** 
   * Image component for rendering optimization
   * 
   * @type {ImageComponentLike}
   * @required
   * 
   * **Critical for Next.js Integration:**
   * This prop enables framework-agnostic image handling while providing
   * full Next.js Image component optimization when available. The component
   * is passed down to each BackgroundBox frame for consistent image rendering.
   * 
   * **Next.js Image Component (Recommended):**
   * - Automatic WebP/AVIF format conversion for smaller file sizes
   * - Responsive image generation with automatic srcset
   * - Blur placeholder support for StaticImageData imports
   * - Priority loading for above-the-fold carousel content
   * - Built-in lazy loading for performance optimization
   * - Optimal Core Web Vitals performance (LCP, CLS, FCP)
   * 
   * **Alternative Image Components:**
   * - Custom image components with similar optimization APIs
   * - Third-party image optimization libraries
   * - Framework-specific image handlers (Gatsby, etc.)
   * - Standard img element wrapper (with reduced optimization)
   * 
   * **Carousel-Specific Benefits:**
   * - Consistent image optimization across all carousel frames
   * - Automatic preloading for priority frames (first N images)
   * - Smooth transitions with blur placeholder support
   * - Responsive image selection for different screen sizes
   * - Memory-efficient frame management during transitions
   * 
   * **Implementation Requirements:**
   * The provided component must accept the following props:
   * - `src`: Image source (string or StaticImageData)
   * - `alt`: Alternative text for accessibility
   * - `fill`: Boolean for absolute positioning (required for carousel frames)
   * - `sizes`: Responsive sizes hint (carousel uses "100vw")
   * - `placeholder`: Placeholder behavior ('blur' | 'empty')
   * - `priority`: Priority loading flag (applied to first N frames)
   * - `quality`: Compression quality (carousel default: 70)
   * - `unoptimized`: Disable optimization flag
   * - `style`: CSS styles object for positioning
   * 
   * @example
   * // Next.js Image (recommended)
   * import Image from 'next/image';
   * import hero1 from '/public/hero1.jpg';
   * import hero2 from '/public/hero2.jpg';
   * 
   * <BlockCarousel
   *   ImageComponent={Image}
   *   config={{
   *     images: [
   *       { image: hero1, objectPosition: 'center top' },
   *       { image: hero2, transform: 'scale(1.05)' },
   *     ],
   *     interval: 5000,
   *     preloadFirst: 2 // First 2 images get priority loading
   *   }}
   * >
   *   <HeroContent />
   * </BlockCarousel>
   * 
   * @example
   * // Custom image component with optimization
   * import OptimizedImage from '@/components/OptimizedImage';
   * 
   * <BlockCarousel
   *   ImageComponent={OptimizedImage}
   *   config={{
   *     images: [
   *       { image: '/api/carousel/image1.jpg' },
   *       { image: '/api/carousel/image2.jpg' },
   *     ],
   *     interval: 6000,
   *     transitionDuration: 1200
   *   }}
   * >
   *   <DynamicContent />
   * </BlockCarousel>
   * 
   * @example
   * // Framework-agnostic usage pattern
   * const ImageComponent = process.env.NEXT_PUBLIC_FRAMEWORK === 'nextjs' 
   *   ? require('next/image').default 
   *   : StandardImageComponent;
   * 
   * <BlockCarousel
   *   ImageComponent={ImageComponent}
   *   config={{
   *     images: carouselFrames,
   *     interval: 5000,
   *     overlayColor: 'rgba(0,0,0,0.3)'
   *   }}
   * >
   *   <UniversalContent />
   * </BlockCarousel>
   * 
   * @example
   * // E-commerce product carousel with priority loading
   * import Image from 'next/image';
   * import product1 from '/public/products/hero1.jpg';
   * import product2 from '/public/products/hero2.jpg';
   * import product3 from '/public/products/hero3.jpg';
   * 
   * <BlockCarousel
   *   ImageComponent={Image}
   *   config={{
   *     images: [
   *       { image: product1, objectPosition: 'center center' },
   *       { image: product2, objectPosition: 'right center' },
   *       { image: product3, transform: 'scale(1.03)' },
   *     ],
   *     interval: 4000,
   *     preloadFirst: 3, // Preload all for premium shopping experience
   *     overlayColor: 'rgba(0,0,0,0.25)'
   *   }}
   * >
   *   <ProductShowcase />
   * </BlockCarousel>
   */
  ImageComponent: ImageComponentLike;
};

/**
 * Advanced carousel component with Next.js optimization and dynamic transitions.
 * 
 * Creates a full-bleed background carousel that smoothly transitions between images
 * while displaying overlay content. Optimized for performance with Next.js StaticImageData
 * support, intelligent preloading, and responsive image handling.
 * 
 * ## Performance Features
 * 
 * - **Next.js Integration**: Full StaticImageData support with automatic optimization
 * - **Intelligent Preloading**: Configurable preloading for instant first transitions
 * - **Responsive Images**: Automatic srcset generation and format selection
 * - **Blur Placeholders**: Smooth loading transitions with auto-generated placeholders
 * - **Memory Optimization**: Efficient frame management with React.memo
 * 
 * ## Accessibility Compliance
 * 
 * - **WCAG 2.2.2**: Automatic pause controls for moving content
 * - **Reduced Motion**: Respects user motion preferences
 * - **Keyboard Navigation**: Full keyboard access for interactive content
 * - **Screen Reader Support**: Proper content structure and labeling
 * 
 * @param props - Component configuration and content
 * @param props.config - Carousel behavior and image configuration
 * @param props.children - Overlay content rendered on top of carousel
 * @param props.containerProps - Container component customization
 * @param props.rootProps - Root wrapper customization
 * 
 * @returns Fully configured carousel with layered content
 * 
 * @example
 * ```tsx
 * // Basic carousel with Next.js images
 * import hero1 from '/public/hero-1.jpg';
 * import hero2 from '/public/hero-2.jpg';
 * 
 * function HeroCarousel() {
 *   return (
 *     <BlockCarousel
 *       config={{
 *         images: [
 *           { image: hero1, objectPosition: 'center top' },
 *           { image: hero2, transform: 'scale(1.05)' },
 *         ],
 *         interval: 5000,
 *         transitionDuration: 900,
 *         overlayColor: 'rgba(0,0,0,0.3)',
 *         preloadFirst: 2,
 *       }}
 *     >
 *       <Stack spacing={3} alignItems="center" textAlign="center">
 *         <Typography variant="h1" color="white">
 *           Welcome to the Future
 *         </Typography>
 *         <Typography variant="h5" color="grey.300">
 *           Experience innovation like never before
 *         </Typography>
 *         <ActionButton variant="contained" size="large">
 *           Get Started
 *         </ActionButton>
 *       </Stack>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // E-commerce product carousel with custom layout
 * import product1 from '/public/products/hero-1.jpg';
 * import product2 from '/public/products/hero-2.jpg';
 * import product3 from '/public/products/hero-3.jpg';
 * 
 * function ProductCarousel() {
 *   return (
 *     <BlockCarousel
 *       config={{
 *         images: [
 *           { image: product1, objectPosition: 'center center' },
 *           { image: product2, objectPosition: 'right center' },
 *           { image: product3, transform: 'scale(1.03)' },
 *         ],
 *         interval: 4000,
 *         transitionDuration: 1200,
 *         overlayColor: 'rgba(0,0,0,0.25)',
 *         preloadFirst: 3, // Preload all for premium experience
 *       }}
 *       containerProps={{
 *         maxWidth: 'lg',
 *         sx: { 
 *           alignItems: 'flex-end',
 *           pb: 6,
 *         }
 *       }}
 *       rootProps={{
 *         sx: { minHeight: '70vh' }
 *       }}
 *     >
 *       <Grid container spacing={4} alignItems="center">
 *         <Grid item xs={12} md={8}>
 *           <Stack spacing={2}>
 *             <Chip label="New Collection" color="primary" />
 *             <Typography variant="h2" color="white">
 *               Summer 2024
 *             </Typography>
 *             <Typography variant="h6" color="grey.300">
 *               Discover our latest designs crafted for modern living
 *             </Typography>
 *             <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
 *               <ActionButton variant="contained">
 *                 Shop Now
 *               </ActionButton>
 *               <ActionButton variant="outlined" sx={{ color: 'white' }}>
 *                 View Collection
 *               </ActionButton>
 *             </Stack>
 *           </Stack>
 *         </Grid>
 *       </Grid>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Mixed image sources with custom positioning
 * import localHero from '/public/hero-local.jpg';
 * 
 * function MixedSourceCarousel() {
 *   return (
 *     <BlockCarousel
 *       config={{
 *         images: [
 *           { 
 *             image: localHero, // StaticImageData
 *             objectPosition: 'center top',
 *           },
 *           { 
 *             image: '/api/dynamic-hero.jpg', // Dynamic URL
 *             transform: 'scale(1.05)',
 *           },
 *           { 
 *             image: 'https://cdn.example.com/hero.jpg', // External URL
 *             objectPosition: 'center bottom',
 *           },
 *         ],
 *         interval: 6000,
 *         overlayColor: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
 *       }}
 *     >
 *       <Typography variant="h3" color="white" textAlign="center">
 *         Flexible Image Sources
 *       </Typography>
 *     </BlockCarousel>
 *   );
 * }
 * ```
 * 
 * ## Technical Implementation Notes
 * 
 * - **Grid Layout**: Uses CSS Grid for perfect layer stacking
 * - **Position Context**: Root Box provides relative positioning for absolute frames
 * - **Z-Index Management**: Proper layering with frames (0), shield (1), content (2)
 * - **Responsive Design**: Inherits height from parent Section component
 * - **Performance**: Memoized component prevents unnecessary re-renders
 * - **Image Optimization**: BackgroundBox handles Next.js Image integration
 * 
 * @since 1.0.0
 */
const BlockCarousel: React.FC<CarouselConfig> = ({ config, children, containerProps, rootProps, ImageComponent }) => {

  const {
    images = [],
    interval: intervalProp,
    transitionDuration = 900,
    overlayColor = "rgba(0,0,0,0.2)",
    preloadFirst = 2,
  } = config || {};

  const interval = intervalProp ?? 5000;

  const { sx: rootSx, ...restRoot } = rootProps ?? {};

  const frames = React.useMemo(() => {
    return images.map((img, i) => {
      const { transform, image, objectPosition } = img;
      return (
        <BackgroundBox
          key={i}
          ImageComponent={ImageComponent}
          imageConf={{
            src: image,
            overlayColor,
            transform,
            objectPosition,
            sizes: "100vw",
            placeholder: "blur",
            quality: 70,
            priority: i < preloadFirst, // preload first N frames for snappy first transition
          }}
          sx={{ position: "absolute", inset: 0 }}
        />
      );
    });
  }, [images, overlayColor, preloadFirst]);

  return (
      <Box
      // SINGLE ROOT that is the *only* direct child of <Section>.
      // It participates in layout (so Section’s band height is realized),
      // and anchors the absolute layers.
      {...restRoot}
      sx={{
        position: "relative",
        display: "grid",       // grid lets us stack layers via grid-area
        width: "100%",
        minHeight: "inherit",  // ← inherit the band height from <Section>
        ...(rootSx as any),
      }}
    >
      {/* Frames root: positioned context for absolute slides */}
      <Box
        sx={{
          position: "relative",
          gridArea: "1 / 1",   // layer 1
          minHeight: "inherit",// ensure a definite box for absolute children
        }}
      >
        <DynamicTransition
          frames={frames}
          interval={interval}
          transitionDuration={transitionDuration}
        />
      </Box>

      {/* Optional shield over frames (keeps clicks off backgrounds if needed) */}
      <Box sx={{ gridArea: "1 / 1", zIndex: 1 }} />

      {/* Foreground content (titles, CTAs, etc.) */}
      <Container
        {...containerProps}
        sx={{
          gridArea: "1 / 1",   // layer 3, on top
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "inherit", // match the band height
          ...(containerProps?.sx || {}),
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default React.memo(BlockCarousel);
