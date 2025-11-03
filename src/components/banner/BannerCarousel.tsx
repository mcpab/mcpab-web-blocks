/**
 * @fileoverview Carousel-based hero banner component with overlay content support.
 * 
 * # BannerCarousel
 * 
 * A sophisticated hero banner component that combines image carousels with overlay content.
 * Built on top of the Section primitive for consistent height management and BlockCarousel
 * for advanced carousel functionality with accessibility features.
 * 
 * ## Overview
 * 
 * This component provides:
 * - **Image Carousel**: Rotating background images with smooth transitions
 * - **Overlay Content**: Centered content over the carousel (titles, CTAs, etc.)
 * - **Responsive Sizing**: Configurable height presets from micro to extraLarge
 * - **Accessibility**: Built-in WCAG compliance through BlockCarousel
 * - **Performance**: Optimized with React.memo and lazy-loading support
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import BannerCarousel from '@/src/components/banner/BannerCarousel';
 * import { MainTitle } from '@/src/components/banner/MainTitle';
 * import { ActionButton } from '@/src/components/buttons/ActionButton';
 * 
 * const heroImages = {
 *   slides: [
 *     { src: '/hero1.jpg', alt: 'Modern workspace' },
 *     { src: '/hero2.jpg', alt: 'Team collaboration' },
 *     { src: '/hero3.jpg', alt: 'Innovation lab' },
 *   ],
 *   autoPlay: true,
 *   interval: 5000,
 *   pauseOnHover: true,
 * };
 * 
 * function HeroBanner() {
 *   return (
 *     <BannerCarousel images={heroImages} size="standard">
 *       <MainTitle level="h1">
 *         Transform Your Business
 *       </MainTitle>
 *       <ActionButton variant="contained" size="large">
 *         Get Started
 *       </ActionButton>
 *     </BannerCarousel>
 *   );
 * }
 * ```
 * 
 * ## Advanced Examples
 * 
 * ### Marketing Landing Page
 * ```tsx
 * import { Container, Typography, Stack } from '@mui/material';
 * 
 * const marketingImages = {
 *   slides: [
 *     { 
 *       src: '/marketing/hero-1.jpg', 
 *       alt: 'Product showcase',
 *       caption: 'Revolutionary Design'
 *     },
 *     { 
 *       src: '/marketing/hero-2.jpg', 
 *       alt: 'Customer success',
 *       caption: 'Proven Results'
 *     },
 *   ],
 *   autoPlay: true,
 *   interval: 6000,
 *   showIndicators: true,
 *   showArrows: true,
 * };
 * 
 * function MarketingHero() {
 *   return (
 *     <BannerCarousel 
 *       images={marketingImages} 
 *       size="large"
 *       id="marketing-hero"
 *     >
 *       <Container maxWidth="md">
 *         <Stack spacing={3} alignItems="center" textAlign="center">
 *           <Typography variant="h1" color="white">
 *             Next-Generation Solutions
 *           </Typography>
 *           <Typography variant="h5" color="grey.200">
 *             Empowering businesses with cutting-edge technology
 *           </Typography>
 *           <Stack direction="row" spacing={2}>
 *             <ActionButton variant="contained" color="primary">
 *               Start Free Trial
 *             </ActionButton>
 *             <ActionButton variant="outlined" color="inherit">
 *               Watch Demo
 *             </ActionButton>
 *           </Stack>
 *         </Stack>
 *       </Container>
 *     </BannerCarousel>
 *   );
 * }
 * ```
 * 
 * ### E-commerce Product Showcase
 * ```tsx
 * import { Box, Chip, Rating } from '@mui/material';
 * 
 * const productImages = {
 *   slides: [
 *     { src: '/products/hero-angle1.jpg', alt: 'Product front view' },
 *     { src: '/products/hero-angle2.jpg', alt: 'Product side view' },
 *     { src: '/products/hero-action.jpg', alt: 'Product in use' },
 *   ],
 *   autoPlay: false, // Manual control for product viewing
 *   showThumbnails: true,
 *   transition: 'fade',
 * };
 * 
 * function ProductHero() {
 *   return (
 *     <BannerCarousel images={productImages} size="standard">
 *       <Box sx={{ 
 *         position: 'absolute',
 *         bottom: 32,
 *         left: 32,
 *         backgroundColor: 'rgba(255, 255, 255, 0.95)',
 *         borderRadius: 2,
 *         p: 3,
 *         maxWidth: 400,
 *       }}>
 *         <Stack spacing={2}>
 *           <Chip label="Best Seller" color="primary" size="small" />
 *           <Typography variant="h4">
 *             Premium Wireless Headphones
 *           </Typography>
 *           <Rating value={4.8} precision={0.1} readOnly />
 *           <Typography variant="h3" color="primary">
 *             $299.99
 *           </Typography>
 *         </Stack>
 *       </Box>
 *     </BannerCarousel>
 *   );
 * }
 * ```
 * 
 * ### Testimonial Carousel
 * ```tsx
 * const testimonialImages = {
 *   slides: [
 *     { src: '/customers/office1.jpg', alt: 'Customer office' },
 *     { src: '/customers/office2.jpg', alt: 'Another customer' },
 *     { src: '/customers/office3.jpg', alt: 'Success story' },
 *   ],
 *   autoPlay: true,
 *   interval: 8000,
 *   transition: 'slide',
 * };
 * 
 * function TestimonialHero() {
 *   return (
 *     <BannerCarousel images={testimonialImages} size="compact">
 *       <Container maxWidth="lg">
 *         <Stack spacing={4} alignItems="center" textAlign="center">
 *           <Typography variant="h2" color="white">
 *             "This solution transformed our business"
 *           </Typography>
 *           <Typography variant="h6" color="grey.300">
 *             Sarah Johnson, CEO at TechCorp
 *           </Typography>
 *           <Box sx={{ display: 'flex', gap: 1 }}>
 *             {[1, 2, 3, 4, 5].map((star) => (
 *               <Box key={star} sx={{ color: 'gold', fontSize: '2rem' }}>⭐</Box>
 *             ))}
 *           </Box>
 *         </Stack>
 *       </Container>
 *     </BannerCarousel>
 *   );
 * }
 * ```
 * 
 * ## Size Variants
 * 
 * Control banner height using section size tokens:
 * 
 * ```tsx
 * // Micro - Compact banner (420px min-height)
 * <BannerCarousel size="micro" images={images}>
 *   <Typography variant="h3">Quick Message</Typography>
 * </BannerCarousel>
 * 
 * // Standard - Default hero size (35vh, 420-600px range)
 * <BannerCarousel size="standard" images={images}>
 *   <MainTitle level="h1">Main Headline</MainTitle>
 * </BannerCarousel>
 * 
 * // Large - Full hero experience (50vh+)
 * <BannerCarousel size="large" images={images}>
 *   <Container>
 *     <Stack spacing={4}>
 *       <MainTitle level="h1">Epic Headline</MainTitle>
 *       <Typography variant="h5">Supporting message</Typography>
 *       <ActionButton>Call to Action</ActionButton>
 *     </Stack>
 *   </Container>
 * </BannerCarousel>
 * ```
 * 
 * ## Accessibility Features
 * 
 * The component includes comprehensive accessibility support:
 * - **WCAG 2.2.2 Compliance**: Pause/play controls for auto-advancing content
 * - **Reduced Motion**: Respects `prefers-reduced-motion` user preference
 * - **Keyboard Navigation**: Full keyboard control support
 * - **Screen Readers**: Proper ARIA labels and role descriptions
 * - **Focus Management**: Logical focus order and visible focus indicators
 * 
 * ```tsx
 * // Accessibility configuration is handled by BlockCarousel
 * const accessibleImages = {
 *   slides: [...],
 *   autoPlay: true,
 *   pauseOnHover: true,    // Pause when user hovers
 *   pauseOnFocus: true,    // Pause when focused
 *   ariaLabel: "Product showcase carousel",
 *   reducedMotionOverrides: {
 *     respectsReducedMotion: true,
 *     fallbackToStatic: true,
 *   },
 * };
 * ```
 * 
 * ## Performance Considerations
 * 
 * - **Memoization**: Component is wrapped with `React.memo` for optimal re-rendering
 * - **Lazy Loading**: Consider code-splitting BlockCarousel for routes that don't use it
 * - **Image Optimization**: Use Next.js Image component in carousel slides
 * - **Preloading**: First carousel image should be optimized for LCP
 * 
 * ```tsx
 * // Lazy loading example
 * const LazyBlockCarousel = dynamic(() => import('./BlockCarousel'), {
 *   loading: () => <Skeleton variant="rectangular" height="100%" />,
 *   ssr: false,
 * });
 * 
 * // Image optimization
 * const optimizedImages = {
 *   slides: [
 *     { 
 *       src: '/hero.jpg',
 *       alt: 'Hero image',
 *       priority: true,        // Preload first image
 *       quality: 85,           // Optimize quality/size balance
 *       sizes: '100vw',        // Responsive sizing
 *     },
 *   ],
 * };
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Content Strategy**: Keep overlay content concise and action-oriented
 * 2. **Image Quality**: Use high-resolution images with proper compression
 * 3. **Contrast**: Ensure sufficient contrast between overlay text and background
 * 4. **Loading**: Optimize first image for fastest LCP (Largest Contentful Paint)
 * 5. **Animation**: Respect user motion preferences and provide pause controls
 * 6. **Responsive**: Test overlay content at all screen sizes
 * 
 * ## Integration with Design System
 * 
 * ```tsx
 * import { useTheme } from '@mui/material/styles';
 * import { MainTitle } from '@/src/components/banner/MainTitle';
 * import { ActionButton } from '@/src/components/buttons/ActionButton';
 * 
 * function ThemedBanner() {
 *   const theme = useTheme();
 *   
 *   return (
 *     <BannerCarousel images={images} size="standard">
 *       <Stack 
 *         spacing={3} 
 *         alignItems="center"
 *         sx={{
 *           textAlign: 'center',
 *           color: 'white',
 *           textShadow: '0 2px 4px rgba(0,0,0,0.5)',
 *         }}
 *       >
 *         <MainTitle 
 *           level="h1" 
 *           sx={{ 
 *             fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
 *             fontWeight: 700,
 *           }}
 *         >
 *           Your Amazing Headline
 *         </MainTitle>
 *         <Typography 
 *           variant="h5" 
 *           sx={{ 
 *             maxWidth: 600,
 *             opacity: 0.95,
 *           }}
 *         >
 *           Supporting message that explains the value proposition clearly
 *         </Typography>
 *         <ActionButton 
 *           variant="contained" 
 *           size="large"
 *           sx={{
 *             mt: 2,
 *             px: 4,
 *             py: 1.5,
 *           }}
 *         >
 *           Get Started Today
 *         </ActionButton>
 *       </Stack>
 *     </BannerCarousel>
 *   );
 * }
 * ```
 * 
 * @since 1.0.0
 */

import * as React from "react";
import Section from "../../components/Section";
import BlockCarousel, { CarouselProps } from "./BlockCarousel";
import type { SectionSize } from "../../design/sectionTokens";
import { ImageComponentLike } from "src/core/images/image-types";

/**
 * Configuration options for the BannerCarousel component.
 * 
 * Defines the carousel behavior, sizing, and content structure for
 * creating compelling hero banner experiences.
 * 
 * @example
 * ```tsx
 * const bannerProps: BannerCarouselProps = {
 *   images: {
 *     slides: [
 *       { src: '/hero1.jpg', alt: 'Hero image 1' },
 *       { src: '/hero2.jpg', alt: 'Hero image 2' },
 *     ],
 *     autoPlay: true,
 *     interval: 5000,
 *   },
 *   size: 'standard',
 *   id: 'main-hero',
 *   children: <MainTitle level="h1">Welcome</MainTitle>,
 * };
 * ```
 */
export type BannerCarouselProps = {
  /** 
   * Carousel configuration including images, timing, and behavior.
   * 
   * Passed directly to BlockCarousel for handling image rotation,
   * transitions, accessibility features, and user controls.
   * 
   * @example
   * ```tsx
   * images={{
   *   slides: [
   *     { 
   *       src: '/hero1.jpg', 
   *       alt: 'Product showcase',
   *       caption: 'Optional caption'
   *     },
   *     { 
   *       src: '/hero2.jpg', 
   *       alt: 'Team collaboration' 
   *     },
   *   ],
   *   autoPlay: true,
   *   interval: 6000,
   *   pauseOnHover: true,
   *   showIndicators: true,
   *   transition: 'fade',
   * }}
   * ```
   */
  images: CarouselProps;

  /** 
   * Section height preset using design system tokens.
   * 
   * Controls the minimum height of the banner using predefined
   * size tokens that ensure consistent spacing across the application.
   * 
   * @default "micro"
   * @example
   * ```tsx
   * size="micro"      // Compact banner (420px min)
   * size="standard"   // Default hero (35vh, 420-600px)
   * size="large"      // Full hero (50vh+)
   * size="extraLarge" // Maximum impact (60vh+)
   * ```
   */
  size?: SectionSize;

  /**
   * Unique identifier for the banner section.
   * 
   * Important for accessibility, analytics, and avoiding duplicate
   * IDs when multiple banners exist on the same page.
   * 
   * @example
   * ```tsx
   * id="hero-banner"     // Main page hero
   * id="product-showcase" // Product page banner
   * id="testimonial-hero" // Testimonials section
   * ```
   */
  id?: string;

  /**
   * Overlay content rendered on top of the carousel.
   * 
   * Typically includes headings, descriptions, and call-to-action
   * buttons. Content is automatically centered and positioned
   * relative to the carousel background.
   * 
   * @example
   * ```tsx
   * children={
   *   <Stack spacing={3} alignItems="center">
   *     <MainTitle level="h1">Amazing Product</MainTitle>
   *     <Typography variant="h5">Transform your workflow</Typography>
   *     <ActionButton variant="contained">Get Started</ActionButton>
   *   </Stack>
   * }
   * ```
   */
  children: React.ReactNode;

  /** 
   * Image component for rendering optimization
   * 
   * @type {ImageComponentLike}
   * @required
   * 
   * **Critical for Next.js Integration:**
   * This prop enables framework-agnostic image handling while providing
   * full Next.js Image component optimization when available. The component
   * is passed down to BlockCarousel for optimized carousel image rendering.
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
   * - Third-party image optimization libraries (Cloudinary, ImageKit, etc.)
   * - Framework-specific image handlers (Gatsby Image, etc.)
   * - Standard img element wrapper (with reduced optimization)
   * 
   * **Carousel-Specific Benefits:**
   * - Consistent image optimization across all carousel frames
   * - Automatic preloading for priority frames (first N images)
   * - Smooth transitions with blur placeholder support
   * - Responsive image selection for different screen sizes
   * - Memory-efficient frame management during transitions
   * - Performance optimization for rotating background images
   * 
   * **Implementation Requirements:**
   * The provided component must accept the following props:
   * - `src`: Image source (string or StaticImageData)
   * - `alt`: Alternative text for accessibility
   * - `fill`: Boolean for absolute positioning (required for carousel frames)
   * - `sizes`: Responsive sizes hint (carousel uses "100vw")
   * - `placeholder`: Placeholder behavior ('blur' | 'empty')
   * - `priority`: Priority loading flag (applied to first N frames)
   * - `quality`: Compression quality (1-100)
   * - `unoptimized`: Disable optimization flag
   * - `style`: CSS styles object for positioning
   * 
   * @example
   * // Next.js Image (recommended)
   * import Image from 'next/image';
   * import hero1 from '/public/hero1.jpg';
   * import hero2 from '/public/hero2.jpg';
   * 
   * <BannerCarousel
   *   ImageComponent={Image}
   *   images={{
   *     slides: [
   *       { src: hero1, alt: 'Modern workspace' },
   *       { src: hero2, alt: 'Team collaboration' },
   *     ],
   *     autoPlay: true,
   *     interval: 5000,
   *     preloadFirst: 2 // First 2 images get priority loading
   *   }}
   *   size="standard"
   * >
   *   <HeroContent />
   * </BannerCarousel>
   * 
   * @example
   * // Marketing campaign with custom image component
   * import OptimizedImage from '@/components/OptimizedImage';
   * 
   * <BannerCarousel
   *   ImageComponent={OptimizedImage}
   *   images={{
   *     slides: [
   *       { src: '/campaigns/summer-1.jpg', alt: 'Summer collection' },
   *       { src: '/campaigns/summer-2.jpg', alt: 'Beach lifestyle' },
   *       { src: '/campaigns/summer-3.jpg', alt: 'Outdoor adventure' },
   *     ],
   *     autoPlay: true,
   *     interval: 6000,
   *     pauseOnHover: true,
   *     transition: 'fade'
   *   }}
   *   size="large"
   * >
   *   <MarketingContent />
   * </BannerCarousel>
   * 
   * @example
   * // Framework-agnostic usage pattern
   * const ImageComponent = process.env.NEXT_PUBLIC_FRAMEWORK === 'nextjs' 
   *   ? require('next/image').default 
   *   : StandardImageComponent;
   * 
   * <BannerCarousel
   *   ImageComponent={ImageComponent}
   *   images={{
   *     slides: carouselSlides,
   *     autoPlay: true,
   *     interval: 5000,
   *     showIndicators: true
   *   }}
   *   size="standard"
   * >
   *   <UniversalContent />
   * </BannerCarousel>
   * 
   * @example
   * // E-commerce product showcase with priority loading
   * import Image from 'next/image';
   * import product1 from '/public/products/hero1.jpg';
   * import product2 from '/public/products/hero2.jpg';
   * import product3 from '/public/products/hero3.jpg';
   * 
   * <BannerCarousel
   *   ImageComponent={Image}
   *   images={{
   *     slides: [
   *       { src: product1, alt: 'Featured product angle 1' },
   *       { src: product2, alt: 'Featured product angle 2' },
   *       { src: product3, alt: 'Featured product in use' },
   *     ],
   *     autoPlay: false, // Manual control for product viewing
   *     showThumbnails: true,
   *     showArrows: true,
   *     preloadFirst: 3 // Preload all for premium shopping experience
   *   }}
   *   size="large"
   *   id="product-showcase"
   * >
   *   <Box sx={{ position: 'absolute', bottom: 32, left: 32 }}>
   *     <ProductInfo />
   *   </Box>
   * </BannerCarousel>
   * 
   * @example
   * // Testimonial carousel with gradient overlays
   * import Image from 'next/image';
   * 
   * <BannerCarousel
   *   ImageComponent={Image}
   *   images={{
   *     slides: [
   *       { 
   *         src: '/testimonials/office1.jpg', 
   *         alt: 'Customer success story office',
   *         overlay: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
   *       },
   *       { 
   *         src: '/testimonials/office2.jpg', 
   *         alt: 'Another customer testimonial',
   *         overlay: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
   *       },
   *     ],
   *     autoPlay: true,
   *     interval: 8000, // Longer for reading testimonials
   *     transition: 'slide'
   *   }}
   *   size="compact"
   * >
   *   <TestimonialContent />
   * </BannerCarousel>
   */
  ImageComponent: ImageComponentLike;
};

/**
 * Render a carousel hero banner with centered overlay content.
 * 
 * Combines the Section primitive for consistent height management with
 * BlockCarousel for advanced image rotation and accessibility features.
 * The component creates a full-width hero area with automatic content
 * centering and responsive height scaling.
 * 
 * ## Component Architecture
 * 
 * ```
 * BannerCarousel
 * ├── Section (height management, positioning context)
 * │   └── BlockCarousel (image rotation, accessibility)
 * │       └── children (overlay content)
 * ```
 * 
 * ## Accessibility Features
 * 
 * Implements WCAG guidelines through BlockCarousel:
 * - **2.2.2 Pause, Stop, Hide**: Provides pause/play controls for auto-advancing content
 * - **Reduced Motion**: Respects `prefers-reduced-motion` user preference
 * - **Keyboard Navigation**: Full keyboard control support
 * - **Screen Reader Support**: Uses `role="region"`, `aria-roledescription="carousel"`, and descriptive labels
 * - **Focus Management**: Proper focus handling for interactive elements
 * 
 * @param props - Component configuration options
 * @param props.images - Carousel configuration passed to BlockCarousel
 * @param props.size - Section height preset (default: "micro")
 * @param props.id - Unique identifier for the banner section
 * @param props.children - Overlay content rendered on top of carousel
 * 
 * @returns JSX element representing the complete banner carousel
 * 
 * @example
 * ```tsx
 * // Basic marketing hero
 * <BannerCarousel
 *   images={{
 *     slides: [
 *       { src: '/hero1.jpg', alt: 'Modern workspace' },
 *       { src: '/hero2.jpg', alt: 'Team collaboration' },
 *     ],
 *     autoPlay: true,
 *     interval: 5000,
 *     pauseOnHover: true,
 *   }}
 *   size="standard"
 *   id="marketing-hero"
 * >
 *   <Container maxWidth="md">
 *     <Stack spacing={3} alignItems="center" textAlign="center">
 *       <MainTitle level="h1">Transform Your Business</MainTitle>
 *       <Typography variant="h5" color="white">
 *         Innovative solutions for modern challenges
 *       </Typography>
 *       <ActionButton variant="contained" size="large">
 *         Get Started
 *       </ActionButton>
 *     </Stack>
 *   </Container>
 * </BannerCarousel>
 * ```
 * 
 * @example
 * ```tsx
 * // Product showcase with manual controls
 * <BannerCarousel
 *   images={{
 *     slides: productImages,
 *     autoPlay: false,
 *     showThumbnails: true,
 *     showArrows: true,
 *     transition: 'fade',
 *   }}
 *   size="large"
 *   id="product-showcase"
 * >
 *   <Box sx={{ position: 'absolute', bottom: 32, left: 32 }}>
 *     <ProductInfo product={selectedProduct} />
 *   </Box>
 * </BannerCarousel>
 * ```
 * 
 * @example
 * ```tsx
 * // Compact announcement banner
 * <BannerCarousel
 *   images={{
 *     slides: [{ src: '/announcement.jpg', alt: 'Special offer' }],
 *     autoPlay: false,
 *   }}
 *   size="micro"
 *   id="announcement-banner"
 * >
 *   <Typography variant="h4" color="white" textAlign="center">
 *     Limited Time Offer - 50% Off!
 *   </Typography>
 * </BannerCarousel>
 * ```
 * 
 * ## Technical Implementation Notes
 * 
 * - **Positioning**: Section provides `position: relative` context for BlockCarousel
 * - **Height Management**: Uses `lockHeight` to create definite height for absolute children
 * - **Flex Layout**: Section's flex properties ensure BlockCarousel fills available space
 * - **Memoization**: Component is memoized to prevent unnecessary re-renders
 * - **Performance**: Consider lazy-loading BlockCarousel for better initial page load
 * 
 * @since 1.0.0
 */
const BannerCarousel: React.FC<BannerCarouselProps> = ({  
  images,
  id,
  size = "micro",
  children,
  ImageComponent,
}) => {
  // Unpack and place consumer overrides LAST in `sx` while keeping other BoxProps intact.
  // const { id, sx: boxSx, ...restBox } = boxProps ?? {};

  return (
    <Section
      id={id as string | undefined}  // Don’t hardcode "banner" to avoid duplicate IDs on pages with multiple banners.
      size={size}                    // Establishes minHeight via tokens and sets display:flex.     
      position={"relative"}        // Ensure Section is the positioning context for BlockCarousel.
      width={"100%"}
      lockHeight               // Make height definite for absolute children (BlockCarousel).      
    >
      {/*
        Section applies: `& > * { flex: 1; min-height: inherit }`
        → BlockCarousel fills the band’s height automatically.
      */} 
      <BlockCarousel
        // If your BlockCarousel supports a11y props, thread them here:
        // ariaLabel="Homepage highlights"
        // autoPlay
        // pauseOnHover
        // pauseOnFocus 
        // reducedMotionOverrides
        // intervalMs={6000}
        config={images}
        ImageComponent={ImageComponent}
      >
        {/* Overlay content. Keep it lean; wrap with a Container upstream if you need maxWidth constraints. */}
        {children}
      </BlockCarousel>
    </Section>
  );
};

export default React.memo(BannerCarousel);
