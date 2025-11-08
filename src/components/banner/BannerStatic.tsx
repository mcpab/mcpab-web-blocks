/**
 * @fileoverview Static hero banner component with single background image and overlay content.
 * 
 * # BannerStatic
 * 
 * A performant hero banner component that displays content over a single background image.
 * Unlike BannerCarousel, this component focuses on simplicity and fast loading times,
 * making it ideal for landing pages, product showcases, and content-focused layouts.
 * 
 * ## Overview
 * 
 * This component provides:
 * - **Single Background**: High-performance static image display
 * - **Overlay Content**: Centered content with flexible layout options
 * - **Responsive Sizing**: Configurable height presets from micro to extraLarge
 * - **Container Management**: Built-in responsive container with max-width controls
 * - **Accessibility**: Semantic HTML structure with proper heading hierarchy
 * - **Performance**: Optimized with React.memo and efficient background handling
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import BannerStatic from '@/src/components/banner/BannerStatic';
 * import { MainTitle } from '@/src/components/banner/MainTitle';
 * import { ActionButton } from '@/src/components/buttons/ActionButton';
 * 
 * const heroImage = {
 *   src: '/hero-background.jpg',
 *   alt: 'Modern office workspace',
 *   priority: true,
 * };
 * 
 * function HeroBanner() {
 *   return (
 *     <BannerStatic image={heroImage} size="standard">
 *       <MainTitle level="h1">
 *         Welcome to Our Platform
 *       </MainTitle>
 *       <ActionButton variant="contained" size="large">
 *         Get Started
 *       </ActionButton>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ## Advanced Examples
 * 
 * ### Product Landing Page
 * ```tsx
 * import { Typography, Stack, Box, Chip } from '@mui/material';
 * 
 * const productHeroImage = {
 *   src: '/products/hero-laptop.jpg',
 *   alt: 'Premium laptop showcase',
 *   overlay: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text contrast
 *   position: 'center',
 *   quality: 90,
 * };
 * 
 * function ProductHero() {
 *   return (
 *     <BannerStatic 
 *       image={productHeroImage} 
 *       size="large"
 *       boxProps={{ id: 'product-hero' }}
 *     >
 *       <Stack spacing={3} alignItems="center" textAlign="center">
 *         <Chip 
 *           label="New Release" 
 *           color="primary" 
 *           sx={{ fontSize: '1rem', px: 2, py: 1 }}
 *         />
 *         <Typography 
 *           variant="h1" 
 *           sx={{ 
 *             color: 'white',
 *             fontWeight: 700,
 *             textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
 *           }}
 *         >
 *           MacBook Pro M3
 *         </Typography>
 *         <Typography 
 *           variant="h4" 
 *           sx={{ 
 *             color: 'grey.200',
 *             maxWidth: 600,
 *             lineHeight: 1.4,
 *           }}
 *         >
 *           Mind-blowing. Head-turning. Pro-defining.
 *         </Typography>
 *         <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
 *           <ActionButton variant="contained" size="large">
 *             Learn More
 *           </ActionButton>
 *           <ActionButton variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
 *             Buy Now
 *           </ActionButton>
 *         </Stack>
 *       </Stack>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ### About Page Hero
 * ```tsx
 * const aboutHeroImage = {
 *   src: '/about/team-photo.jpg',
 *   alt: 'Our diverse team working together',
 *   position: 'top center',
 *   overlay: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
 * };
 * 
 * function AboutHero() {
 *   return (
 *     <BannerStatic 
 *       image={aboutHeroImage} 
 *       size="standard"
 *       boxProps={{ 
 *         id: 'about-hero',
 *         sx: { 
 *           '& .MuiContainer-root': { 
 *             alignItems: 'flex-start',
 *             pt: 8,
 *           }
 *         }
 *       }}
 *     >
 *       <Box sx={{ maxWidth: 600 }}>
 *         <Typography 
 *           variant="h2" 
 *           sx={{ 
 *             color: 'white',
 *             mb: 3,
 *             fontWeight: 600,
 *           }}
 *         >
 *           Building the Future Together
 *         </Typography>
 *         <Typography 
 *           variant="h6" 
 *           sx={{ 
 *             color: 'grey.300',
 *             lineHeight: 1.6,
 *             mb: 4,
 *           }}
 *         >
 *           We're a passionate team of innovators, designers, and engineers 
 *           committed to creating technology that makes a difference.
 *         </Typography>
 *         <ActionButton variant="contained" color="primary">
 *           Meet Our Team
 *         </ActionButton>
 *       </Box>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ### Service Page Banner
 * ```tsx
 * const serviceHeroImage = {
 *   src: '/services/consulting.jpg',
 *   alt: 'Professional consulting session',
 *   blur: 2, // Subtle blur for better text readability
 * };
 * 
 * function ServiceHero() {
 *   return (
 *     <BannerStatic 
 *       image={serviceHeroImage} 
 *       size="compact"
 *       boxProps={{ id: 'consulting-hero' }}
 *     >
 *       <Stack spacing={2} alignItems="center" textAlign="center">
 *         <Typography 
 *           variant="h3" 
 *           sx={{ 
 *             color: 'white',
 *             fontWeight: 600,
 *           }}
 *         >
 *           Expert Consulting Services
 *         </Typography>
 *         <Typography 
 *           variant="subtitle1" 
 *           sx={{ 
 *             color: 'grey.300',
 *             maxWidth: 500,
 *           }}
 *         >
 *           Transform your business with strategic guidance from industry experts
 *         </Typography>
 *       </Stack>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ### Minimal Text-Only Banner
 * ```tsx
 * const gradientBackground = {
 *   gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
 *   alt: '', // No alt needed for CSS gradients
 * };
 * 
 * function MinimalHero() {
 *   return (
 *     <BannerStatic 
 *       image={gradientBackground} 
 *       size="micro"
 *       boxProps={{ id: 'minimal-hero' }}
 *     >
 *       <Typography 
 *         variant="h4" 
 *         sx={{ 
 *           color: 'white',
 *           fontWeight: 500,
 *           textAlign: 'center',
 *         }}
 *       >
 *         Simple. Elegant. Effective.
 *       </Typography>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ## Size Variants
 * 
 * Control banner height using section size tokens:
 * 
 * ```tsx
 * // Micro - Compact banner for announcements (420px min)
 * <BannerStatic size="micro" image={image}>
 *   <Typography variant="h4">Quick Announcement</Typography>
 * </BannerStatic>
 * 
 * // Standard - Default hero size (35vh, 420-600px range) 
 * <BannerStatic size="standard" image={image}>
 *   <MainTitle level="h1">Main Headline</MainTitle>
 * </BannerStatic>
 * 
 * // Large - Full hero experience (50vh+)
 * <BannerStatic size="large" image={image}>
 *   <Stack spacing={4}>
 *     <MainTitle level="h1">Epic Statement</MainTitle>
 *     <Typography variant="h5">Supporting message</Typography>
 *     <ActionButton>Call to Action</ActionButton>
 *   </Stack>
 * </BannerStatic>
 * 
 * // Extra Large - Maximum impact (60vh+)
 * <BannerStatic size="extraLarge" image={image}>
 *   <Container maxWidth="md">
 *     <CompleteHeroContent />
 *   </Container>
 * </BannerStatic>
 * ```
 * 
 * ## Background Image Configuration
 * 
 * The `image` prop supports comprehensive configuration:
 * 
 * ```tsx
 * // Basic image
 * const basicImage = {
 *   src: '/hero.jpg',
 *   alt: 'Hero background',
 * };
 * 
 * // Advanced configuration
 * const advancedImage = {
 *   src: '/hero.jpg',
 *   alt: 'Advanced hero background',
 *   position: 'center top',     // CSS background-position
 *   overlay: 'rgba(0,0,0,0.5)', // Dark overlay for contrast
 *   blur: 0,                    // Background blur effect
 *   quality: 85,                // Image quality (Next.js)
 *   priority: true,             // Preload for LCP optimization
 *   sizes: '100vw',             // Responsive sizing
 * };
 * 
 * // Gradient backgrounds
 * const gradientImage = {
 *   gradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 *   alt: '', // Empty alt for decorative gradients
 * };
 * ```
 * 
 * ## Accessibility Features
 * 
 * The component follows accessibility best practices:
 * - **Semantic Structure**: Uses proper section and container hierarchy
 * - **Heading Levels**: Supports MainTitle for correct heading hierarchy
 * - **Image Alt Text**: Proper alt text handling through BackgroundBox
 * - **Color Contrast**: Overlay support for sufficient text contrast
 * - **Focus Management**: Proper focus order for interactive elements
 * 
 * ```tsx
 * // Accessibility example
 * function AccessibleHero() {
 *   return (
 *     <BannerStatic
 *       image={{
 *         src: '/hero.jpg',
 *         alt: 'Team collaborating in modern office space', // Descriptive alt text
 *         overlay: 'rgba(0,0,0,0.6)', // Ensure text contrast
 *       }}
 *       size="standard"
 *       boxProps={{ 
 *         id: 'main-hero', // Unique ID for navigation
 *         'aria-label': 'Main hero section'
 *       }}
 *     >
 *       <MainTitle level="h1">
 *         Accessible Hero Content
 *       </MainTitle>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ## Performance Optimization
 * 
 * - **Memoization**: Component uses `React.memo` for efficient re-rendering
 * - **Image Optimization**: Leverages Next.js Image optimization when available
 * - **LCP Optimization**: Use `priority: true` for above-the-fold images
 * - **Efficient Background**: BackgroundBox handles image loading efficiently
 * 
 * ```tsx
 * // Performance-optimized hero
 * const optimizedImage = {
 *   src: '/hero-1920w.jpg',
 *   alt: 'Hero background',
 *   priority: true,        // Preload for LCP
 *   quality: 85,          // Balance quality/size
 *   sizes: '100vw',       // Responsive sizing
 *   placeholder: 'blur',   // Smooth loading transition
 * };
 * 
 * function OptimizedHero() {
 *   return (
 *     <BannerStatic image={optimizedImage} size="standard">
 *       <HeroContent />
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Image Quality**: Use high-resolution images (1920px+ width) with proper compression
 * 2. **Text Contrast**: Always ensure sufficient contrast between text and background
 * 3. **Content Hierarchy**: Use proper heading levels and content structure
 * 4. **Loading Optimization**: Set `priority: true` for above-the-fold banners
 * 5. **Responsive Design**: Test content at all breakpoints and screen sizes
 * 6. **Alt Text**: Provide meaningful alt text for background images
 * 
 * @since 1.0.0
 */

import * as React from "react";
import { BoxProps } from "@mui/material/Box";
import BackgroundBox from "../layout/BackgroundBox";
// import MainTitle, { MainTitlesProps } from "./MainTitles";
import type { ImageConf } from "../layout/BackgroundBox";
import Section from "../Section";
import Container from "@mui/material/Container";
import { SectionSize } from "../../design/sectionTokens";
import {ImageComponentLike} from 'src/core/image/image-types';

/**
 * Configuration options for the BannerStatic component.
 * 
 * Defines the background image, sizing, styling, and content structure
 * for creating compelling static hero banner experiences.
 * 
 * @example
 * ```tsx
 * const bannerProps: BannerStaticProps = {
 *   image: {
 *     src: '/hero.jpg',
 *     alt: 'Hero background',
 *     overlay: 'rgba(0,0,0,0.4)',
 *   },
 *   size: 'standard',
 *   boxProps: { id: 'main-hero' },
 *   children: <MainTitle level="h1">Welcome</MainTitle>,
 * };
 * ```
 */
export type BannerStaticProps = {
  /**
   * Background image configuration passed to BackgroundBox.
   * 
   * Supports comprehensive image configuration including positioning,
   * overlays, quality settings, and accessibility features. Can also
   * handle CSS gradients for non-photographic backgrounds.
   * 
   * @example
   * ```tsx
   * // Basic image
   * image={{
   *   src: '/hero.jpg',
   *   alt: 'Hero background description',
   * }}
   * 
   * // Advanced configuration
   * image={{
   *   src: '/hero.jpg',
   *   alt: 'Team working in modern office',
   *   position: 'center top',
   *   overlay: 'rgba(0,0,0,0.5)',
   *   quality: 90,
   *   priority: true,
   * }}
   * 
   * // Gradient background
   * image={{
   *   gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
   *   alt: '',
   * }}
   * ```
   */
  image: ImageConf;

  /**
   * Additional props applied to the outer Section component.
   * 
   * Allows customization of the section container including ID,
   * className, styling, and event handlers. The `sx` prop is
   * merged last, enabling consumer overrides of default styles.
   * 
   * @example
   * ```tsx
   * boxProps={{
   *   id: 'hero-section',
   *   className: 'custom-hero',
   *   onClick: handleHeroClick,
   *   sx: {
   *     '& .MuiContainer-root': {
   *       alignItems: 'flex-start',
   *       pt: 8,
   *     }
   *   }
   * }}
   * ```
   */
  boxProps?: BoxProps;

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
   * Content rendered as overlay on top of the background.
   * 
   * Automatically centered within a responsive container with
   * proper vertical alignment. Typically includes headings,
   * descriptions, and call-to-action elements.
   * 
   * @example
   * ```tsx
   * children={
   *   <>
   *     <MainTitle level="h1">Amazing Product</MainTitle>
   *     <Typography variant="h5" sx={{ mb: 3 }}>
   *       Transform your workflow with our solution
   *     </Typography>
   *     <ActionButton variant="contained">
   *       Get Started
   *     </ActionButton>
   *   </>
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
   * is passed to BackgroundBox for optimized background image rendering.
   * 
   * **Next.js Image Component (Recommended):**
   * - Automatic WebP/AVIF format conversion for smaller file sizes
   * - Responsive image generation with automatic srcset
   * - Blur placeholder support for StaticImageData imports
   * - Priority loading for above-the-fold hero banners
   * - Built-in lazy loading for below-the-fold content
   * - Optimal Core Web Vitals performance (LCP, CLS, FCP)
   * 
   * **Alternative Image Components:**
   * - Custom image components with similar optimization APIs
   * - Third-party image optimization libraries (Cloudinary, ImageKit, etc.)
   * - Framework-specific image handlers (Gatsby Image, etc.)
   * - Standard img element wrapper (with reduced optimization)
   * 
   * **Static Banner Benefits:**
   * - Single image optimization for fast loading times
   * - Priority loading support for hero sections
   * - Blur placeholder for smooth loading transitions
   * - Responsive image selection for different screen sizes
   * - Memory-efficient single image handling
   * 
   * **Implementation Requirements:**
   * The provided component must accept the following props:
   * - `src`: Image source (string or StaticImageData)
   * - `alt`: Alternative text for accessibility
   * - `fill`: Boolean for absolute positioning (required for background images)
   * - `sizes`: Responsive sizes hint (typically "100vw" for full-width banners)
   * - `placeholder`: Placeholder behavior ('blur' | 'empty')
   * - `priority`: Priority loading flag (recommended for hero banners)
   * - `quality`: Compression quality (1-100)
   * - `unoptimized`: Disable optimization flag
   * - `style`: CSS styles object for positioning
   * 
   * @example
   * // Next.js Image (recommended)
   * import Image from 'next/image';
   * import heroImage from '/public/hero.jpg';
   * 
   * <BannerStatic
   *   ImageComponent={Image}
   *   image={{
   *     src: heroImage,
   *     alt: 'Modern workspace showcase',
   *     priority: true,
   *     overlay: 'rgba(0,0,0,0.4)'
   *   }}
   *   size="standard"
   * >
   *   <HeroContent />
   * </BannerStatic>
   * 
   * @example
   * // Product landing page with custom image component
   * import OptimizedImage from '@/components/OptimizedImage';
   * 
   * <BannerStatic
   *   ImageComponent={OptimizedImage}
   *   image={{
   *     src: '/products/hero-laptop.jpg',
   *     alt: 'Premium laptop showcase',
   *     quality: 90,
   *     position: 'center top'
   *   }}
   *   size="large"
   * >
   *   <ProductShowcase />
   * </BannerStatic>
   * 
   * @example
   * // Framework-agnostic usage pattern
   * const ImageComponent = process.env.NEXT_PUBLIC_FRAMEWORK === 'nextjs' 
   *   ? require('next/image').default 
   *   : StandardImageComponent;
   * 
   * <BannerStatic
   *   ImageComponent={ImageComponent}
   *   image={{
   *     src: '/about/team-photo.jpg',
   *     alt: 'Our diverse team working together',
   *     overlay: 'rgba(0,0,0,0.5)'
   *   }}
   *   size="standard"
   * >
   *   <AboutContent />
   * </BannerStatic>
   * 
   * @example
   * // E-commerce hero with priority loading
   * import Image from 'next/image';
   * import heroProduct from '/public/products/featured.jpg';
   * 
   * <BannerStatic
   *   ImageComponent={Image}
   *   image={{
   *     src: heroProduct,
   *     alt: 'Featured product showcase',
   *     priority: true, // Critical for LCP optimization
   *     quality: 85,
   *     position: 'center center'
   *   }}
   *   size="large"
   *   boxProps={{ id: 'product-hero' }}
   * >
   *   <Stack spacing={3} alignItems="center" textAlign="center">
   *     <Chip label="Best Seller" color="primary" />
   *     <Typography variant="h1" color="white">
   *       Premium Collection
   *     </Typography>
   *     <Typography variant="h5" color="grey.300">
   *       Discover our most popular products
   *     </Typography>
   *     <ActionButton variant="contained" size="large">
   *       Shop Now
   *     </ActionButton>
   *   </Stack>
   * </BannerStatic>
   * 
   * @example
   * // Service page with gradient fallback
   * import Image from 'next/image';
   * 
   * <BannerStatic
   *   ImageComponent={Image}
   *   image={{
   *     src: '/services/consulting.jpg',
   *     alt: 'Professional consulting session',
   *     overlay: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
   *     position: 'center bottom'
   *   }}
   *   size="compact"
   * >
   *   <Typography variant="h3" color="white" textAlign="center">
   *     Expert Consulting Services
   *   </Typography>
   * </BannerStatic>
   */
  ImageComponent: ImageComponentLike;
};

/**
 * Render a static hero banner with background image and centered overlay content.
 * 
 * Combines the Section primitive for consistent height management with BackgroundBox
 * for optimized image display and Container for responsive content layout. Designed
 * for performance and accessibility with single-image backgrounds.
 * 
 * ## Component Architecture
 * 
 * ```
 * BannerStatic
 * ├── Section (height management, positioning context)
 * │   └── BackgroundBox (background image, overlays)
 * │       └── Container (responsive content layout)
 * │           └── children (overlay content)
 * ```
 * 
 * ## Key Features
 * 
 * - **Performance Optimized**: Single image loading with Next.js optimization
 * - **Responsive Layout**: Container with max-width constraints and flexible content
 * - **Accessibility Compliant**: Semantic HTML structure with proper image alt handling
 * - **Customizable Styling**: Comprehensive styling options through boxProps
 * - **Design System Integration**: Uses section tokens for consistent height management
 * 
 * @param props - Component configuration options
 * @param props.image - Background image configuration for BackgroundBox
 * @param props.boxProps - Additional Section component props (id, sx, className, etc.)
 * @param props.size - Section height preset (default: "micro")
 * @param props.children - Overlay content rendered in centered container
 * 
 * @returns JSX element representing the complete static banner
 * 
 * @example
 * ```tsx
 * // Basic hero banner
 * function BasicHero() {
 *   return (
 *     <BannerStatic
 *       image={{
 *         src: '/hero.jpg',
 *         alt: 'Modern workspace',
 *         priority: true,
 *       }}
 *       size="standard"
 *       boxProps={{ id: 'main-hero' }}
 *     >
 *       <Stack spacing={3} alignItems="center" textAlign="center">
 *         <MainTitle level="h1">Welcome to Our Platform</MainTitle>
 *         <Typography variant="h5" color="white">
 *           Innovative solutions for modern businesses
 *         </Typography>
 *         <ActionButton variant="contained" size="large">
 *           Get Started
 *         </ActionButton>
 *       </Stack>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Product showcase with custom positioning
 * function ProductShowcase() {
 *   return (
 *     <BannerStatic
 *       image={{
 *         src: '/product-hero.jpg',
 *         alt: 'Premium headphones showcase',
 *         overlay: 'rgba(0,0,0,0.4)',
 *         position: 'center right',
 *       }}
 *       size="large"
 *       boxProps={{
 *         id: 'product-hero',
 *         sx: {
 *           '& .MuiContainer-root': {
 *             justifyContent: 'flex-start',
 *             alignItems: 'center',
 *             pl: 8,
 *           }
 *         }
 *       }}
 *     >
 *       <Box sx={{ maxWidth: 500 }}>
 *         <Chip label="Premium Audio" color="primary" sx={{ mb: 2 }} />
 *         <Typography variant="h2" color="white" sx={{ mb: 2 }}>
 *           Wireless Freedom
 *         </Typography>
 *         <Typography variant="h6" color="grey.300" sx={{ mb: 4 }}>
 *           Experience crystal-clear sound with our latest wireless technology
 *         </Typography>
 *         <ActionButton variant="contained">
 *           Shop Now
 *         </ActionButton>
 *       </Box>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Minimal announcement banner
 * function AnnouncementBanner() {
 *   return (
 *     <BannerStatic
 *       image={{
 *         gradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 *         alt: '',
 *       }}
 *       size="micro"
 *       boxProps={{ id: 'announcement' }}
 *     >
 *       <Typography variant="h4" color="white" textAlign="center">
 *         🎉 Limited Time: 50% Off All Products!
 *       </Typography>
 *     </BannerStatic>
 *   );
 * }
 * ```
 * 
 * ## Accessibility Implementation
 * 
 * - **Semantic Structure**: Section element provides proper document outline
 * - **Image Accessibility**: BackgroundBox handles alt text and decorative image patterns
 * - **Content Hierarchy**: Container ensures proper content flow and reading order
 * - **Focus Management**: Maintains logical focus order for interactive elements
 * - **Contrast Considerations**: Overlay support ensures sufficient text contrast
 * 
 * ## Technical Implementation Notes
 * 
 * - **Positioning Context**: Section provides relative positioning for BackgroundBox
 * - **Container Management**: Built-in responsive container with lg max-width
 * - **Flex Layout**: Container uses flexbox for content centering and alignment
 * - **Style Merging**: boxProps.sx is applied last for consumer style overrides
 * - **Memoization**: Component is memoized for performance optimization
 * - **ID Management**: Explicit id handling prevents duplicate ID spreading
 * 
 * @since 1.0.0
 */
const BannerStatic: React.FC<BannerStaticProps> = ({ image, boxProps, size = 'micro',children, ImageComponent}) => {
  const { id, sx: boxSx, ...restBox } = boxProps ?? {};

  return (
    <Section
      id={id}                    // explicit, avoids duplicate id spreading
      size={size}
      {...restBox}               // other BoxProps (className, onClick, etc.)
      sx={{
        position: 'relative',
        width: '100%',
        ...(boxSx as any),       // consumer overrides last
      }}
    >
      <BackgroundBox imageConf={image} ImageComponent={ImageComponent}>
        <Container
          id='cljh' 
          maxWidth="lg"
          disableGutters
          sx={{
            position: 'relative', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </Container>
      </BackgroundBox>
    </Section>
  );
};


// Good to memo; prop identity is stable enough here.
// If headers/boxProps are recreated often, parent can wrap them in useMemo to avoid re-renders.
export default React.memo(BannerStatic);
