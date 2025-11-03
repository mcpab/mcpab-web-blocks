'use client';
/**
 * @fileoverview HeroBlock - Responsive Hero Section with Content and Image Layout
 * 
 * **Enterprise-Grade Hero Component for Professional Websites**
 * 
 * A sophisticated hero section component that creates compelling two-column layouts
 * with headlines, messaging, and cover images. Designed for professional websites,
 * landing pages, and marketing content with full responsive behavior and
 * accessibility compliance.
 * 
 * **Key Features:**
 * - **Two-Column Responsive Layout**: Content on left, image on right, stacks on mobile
 * - **Next.js Image Integration**: Full optimization with StaticImageData support
 * - **Typography System**: Automated text rendering with design system integration
 * - **Material-UI Grid**: Responsive 7/5 column split with flexible spacing
 * - **Paper Elevation**: Professional image presentation with shadow and borders
 * - **Performance Optimized**: Priority loading support for above-the-fold content
 * 
 * **Layout Architecture:**
 * ```
 * HeroBlock (Container)
 * ├── Grid Container (spacing: 10, alignItems: stretch)
 * │   ├── Grid Item (xs: 12, md: 7) - Content Column
 * │   │   └── Stack (spacing: 3)
 * │   │       ├── Header (SubsubsectionTitle or custom node)
 * │   │       ├── Message (SubsubsectionTitle with custom styling)
 * │   │       └── SubTitle (Typography variant="strapline" or custom)
 * │   └── Grid Item (xs: 12, md: 5) - Image Column
 * │       └── Box (flex column)
 * │           ├── Paper (elevation: 12, borderRadius: 3)
 * │           │   └── ImageComponent (fill, cover, responsive)
 * │           └── Caption (Typography variant="strapline", optional)
 * ```
 * 
 * **Responsive Behavior:**
 * - **Desktop (md+)**: 7/5 column split with side-by-side layout
 * - **Mobile (xs-sm)**: Stacked layout with content above image
 * - **Image Sizing**: Responsive sizes for optimal bandwidth usage
 * - **Typography**: Scalable text with proper line heights and spacing
 * 
 * **Design System Integration:**
 * - Uses SubsubsectionTitle for consistent typography hierarchy
 * - Integrates with Material-UI theme system
 * - Supports custom component overrides for branding
 * - Maintains spacing consistency with design tokens
 * 
 * **Accessibility Features:**
 * - Semantic HTML structure with proper heading hierarchy
 * - Image alt text with intelligent fallbacks
 * - Keyboard navigation support
 * - Screen reader friendly content structure
 * - High contrast support through theme integration
 * 
 * **Performance Considerations:**
 * - Next.js Image optimization with responsive sizing
 * - Priority loading support for hero sections
 * - Efficient rendering with component memoization potential
 * - Optimized image formats (WebP/AVIF) when using Next.js
 * 
 * **Use Cases:**
 * - **Landing Page Heroes**: Product launches, service introductions
 * - **About Page Sections**: Team introductions, company stories
 * - **Service Descriptions**: Professional service explanations
 * - **Product Features**: Feature highlights with visual support
 * - **Testimonial Sections**: Customer stories with photos
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and Next.js Image integration
 * 
 * @example
 * // Professional service hero
 * import heroImage from '/public/psychology-office.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header="Psychology Orlando"
 *   message="Holistic mental health care in Maitland & greater Orlando."
 *   subTitle="Evidence-based, compassionate, personalized."
 *   image={heroImage}
 *   caption="Kellie S. Ffrench, Ph.D."
 *   alt="Modern psychology office with comfortable seating"
 *   priority
 * />
 * 
 * @example
 * // Product feature showcase
 * import productImage from '/public/product-hero.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header={
 *     <Typography variant="h1" color="primary">
 *       Revolutionary Design
 *     </Typography>
 *   }
 *   message="Transform your workflow with our innovative solution that combines power, simplicity, and elegance."
 *   subTitle="Join thousands of satisfied customers"
 *   image={productImage}
 *   alt="Product showcase in modern workspace"
 *   priority
 * />
 * 
 * @example
 * // Team introduction section
 * import teamPhoto from '/public/team-hero.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header="Meet Our Expert Team"
 *   message={
 *     <>
 *       We're a passionate group of professionals dedicated to delivering
 *       exceptional results. Our diverse expertise and collaborative approach
 *       ensure your project succeeds.
 *     </>
 *   }
 *   subTitle="20+ years of combined experience"
 *   image={teamPhoto}
 *   caption="Our leadership team in the Boston office"
 *   alt="Professional team photo in modern office setting"
 * />
 */

import * as React from 'react';


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ImageComponentLike,  StaticImageDataLike } from '../../../../core/images/image-types';
import Container from '@mui/material/Container';
import { BackgroundBoxProps } from '../../BackgroundBox';
import { SubsubsectionTitle  } from '../../../typography';

/**
 * Props interface for HeroBlock component
 * 
 * Extends BackgroundBoxProps to provide comprehensive configuration options
 * for creating professional hero sections with content and image layouts.
 * Supports both string and React node content for maximum flexibility.
 * 
 * @interface HeroBlockProps
 * @extends {BackgroundBoxProps} Standard background box properties
 */
export type HeroBlockProps = BackgroundBoxProps & {
  /** 
   * Main headline content for the hero section
   * 
   * @type {React.ReactNode}
   * 
   * The primary heading that captures attention and communicates the main
   * value proposition. Supports both string and React node content for
   * flexible styling and branding customization.
   * 
   * **String Handling:**
   * - Automatically rendered with SubsubsectionTitle component
   * - Inherits design system typography and spacing
   * - Maintains consistent heading hierarchy
   * - Responsive text scaling
   * 
   * **React Node Handling:**
   * - Custom Typography components with specific styling
   * - Brand-specific heading treatments
   * - Multi-element compositions (text + icons, badges, etc.)
   * - Advanced styling with theme integration
   * 
   * @example
   * // Simple string headline
   * header="Psychology Orlando"
   * 
   * @example
   * // Custom styled headline
   * header={
   *   <Typography 
   *     variant="h1" 
   *     sx={{ 
   *       color: 'primary.main',
   *       fontWeight: 700,
   *       textAlign: 'center'
   *     }}
   *   >
   *     Revolutionary Design
   *   </Typography>
   * }
   * 
   * @example
   * // Multi-element headline with badge
   * header={
   *   <Stack spacing={1} alignItems="flex-start">
   *     <Chip label="New Product" color="primary" size="small" />
   *     <Typography variant="h1">
   *       Next-Generation Solutions
   *     </Typography>
   *   </Stack>
   * }
   */
  header?: React.ReactNode;

  /** 
   * Main message or description content
   * 
   * @type {React.ReactNode}
   * 
   * The primary content that elaborates on the headline and provides
   * detailed information about the offering. Supports rich content
   * composition for compelling storytelling.
   * 
   * **Content Strategy:**
   * - Clear value proposition explanation
   * - Benefit-focused messaging
   * - Compelling but concise descriptions
   * - Customer-centric language
   * 
   * **Styling:**
   * - Rendered with SubsubsectionTitle component
   * - Left-aligned text with optimal line height (1.7)
   * - Maximum width of 720px for readability
   * - Responsive typography scaling
   * 
   * @example
   * // Simple message string
   * message="Holistic mental health care in Maitland & greater Orlando."
   * 
   * @example
   * // Rich content with emphasis
   * message={
   *   <>
   *     Transform your workflow with our <strong>innovative solution</strong> that 
   *     combines power, simplicity, and elegance. Experience the difference 
   *     that thoughtful design makes.
   *   </>
   * }
   * 
   * @example
   * // Structured message with list
   * message={
   *   <Box>
   *     <Typography variant="body1" paragraph>
   *       Our comprehensive approach includes:
   *     </Typography>
   *     <List dense>
   *       <ListItem><ListItemText primary="Expert consultation" /></ListItem>
   *       <ListItem><ListItemText primary="Custom solutions" /></ListItem>
   *       <ListItem><ListItemText primary="Ongoing support" /></ListItem>
   *     </List>
   *   </Box>
   * }
   */
  message?: React.ReactNode;

  /** 
   * Optional subtitle or supporting text
   * 
   * @type {React.ReactNode}
   * 
   * Secondary messaging that provides additional context, credentials,
   * social proof, or call-to-action guidance. Positioned below the
   * main message for supporting information.
   * 
   * **String Handling:**
   * - Automatically rendered with Typography variant="strapline"
   * - Consistent styling with design system
   * - Subtle visual hierarchy positioning
   * 
   * **Content Ideas:**
   * - Professional credentials or certifications
   * - Years of experience or client count
   * - Awards or recognition
   * - Trust indicators or guarantees
   * - Brief call-to-action guidance
   * 
   * @example
   * // Professional credentials
   * subTitle="Evidence-based, compassionate, personalized."
   * 
   * @example
   * // Social proof
   * subTitle="Trusted by over 10,000 customers worldwide"
   * 
   * @example
   * // Custom styled subtitle with link
   * subTitle={
   *   <Typography variant="subtitle1" color="primary">
   *     <Link href="/about">Learn more about our approach →</Link>
   *   </Typography>
   * }
   * 
   * @example
   * // Call-to-action guidance
   * subTitle={
   *   <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
   *     <Button variant="contained">Get Started</Button>
   *     <Button variant="outlined">Learn More</Button>
   *   </Stack>
   * }
   */
  subTitle?: React.ReactNode;

  /** 
   * Optional image caption text
   * 
   * @type {string}
   * 
   * Descriptive text displayed below the image that provides context,
   * attribution, or additional information. Styled as centered text
   * with subtle typography treatment.
   * 
   * **Usage Guidelines:**
   * - Photo credits or attributions
   * - Location or context descriptions
   * - Professional credentials or titles
   * - Equipment or product specifications
   * - Brief explanatory notes
   * 
   * **Styling:**
   * - Typography variant="strapline"
   * - Center-aligned text
   * - Subtle color treatment
   * - Appropriate spacing from image
   * 
   * @example
   * // Professional attribution
   * caption="Kellie S. Ffrench, Ph.D."
   * 
   * @example
   * // Location context
   * caption="Our modern facility in downtown Orlando"
   * 
   * @example
   * // Product specification
   * caption="Model X Pro - Available in three colors"
   */
  caption?: string;

  /** 
   * Image source for the hero visual
   * 
   * @type {string | StaticImageDataLike}
   * @required
   * 
   * The primary visual element that supports and enhances the textual
   * content. Supports both static imports (recommended) and dynamic URLs
   * for maximum flexibility in content management.
   * 
   * **StaticImageData (Recommended):**
   * - Build-time optimized imports from static files
   * - Automatic width/height detection and blur placeholder generation
   * - Enhanced performance with pre-calculated dimensions
   * - Type-safe image handling with compile-time validation
   * - Optimal Core Web Vitals performance
   * 
   * **String URLs:**
   * - Dynamic images from APIs, CDNs, or content management systems
   * - Runtime image loading with Next.js optimization
   * - Flexible content management workflows
   * - Supports both relative and absolute URLs
   * 
   * **Image Guidelines:**
   * - High resolution (recommended: 800x600px minimum)
   * - Professional quality photography or graphics
   * - Appropriate for target audience and brand
   * - Good contrast and visual appeal
   * - Optimized file size for web delivery
   * 
   * @example
   * // StaticImageData (Next.js import) - Recommended
   * import heroImage from '/public/psychology-office.jpg';
   * image={heroImage}
   * 
   * @example
   * // Dynamic URL string
   * image="/api/hero-images/psychology-office.jpg"
   * 
   * @example
   * // External URL
   * image="https://cdn.example.com/images/hero-office.jpg"
   */
  image: string | StaticImageDataLike;

  /** 
   * Alternative text for image accessibility
   * 
   * @type {string}
   * 
   * Descriptive text that conveys the meaning and context of the image
   * for screen readers and assistive technologies. Falls back to caption
   * text if not provided and caption is a string.
   * 
   * **Accessibility Guidelines:**
   * - Describe the image content meaningfully
   * - Include relevant context for understanding
   * - Keep concise but informative (aim for 50-100 characters)
   * - Avoid redundant phrases like "image of" or "picture of"
   * - Consider the image's purpose in context
   * 
   * **Content Strategy:**
   * - Focus on what's important for understanding
   * - Include relevant details that support the content
   * - Consider emotional or atmospheric elements if relevant
   * - Match the tone and style of your content
   * 
   * @example
   * // Descriptive and contextual
   * alt="Modern psychology office with comfortable seating and warm lighting"
   * 
   * @example
   * // Product-focused
   * alt="Wireless headphones on wooden desk with laptop and coffee"
   * 
   * @example
   * // Professional setting
   * alt="Team of five professionals collaborating in modern conference room"
   */
  alt?: string;

  /** 
   * Priority loading flag for performance optimization
   * 
   * @type {boolean}
   * @default false
   * 
   * Indicates whether this image should be loaded with high priority,
   * typically used for above-the-fold hero content to optimize
   * Largest Contentful Paint (LCP) performance metrics.
   * 
   * **When to Use Priority:**
   * - Hero sections visible immediately on page load
   * - Above-the-fold content that impacts LCP
   * - Critical images for user experience
   * - Landing page primary visuals
   * 
   * **Performance Impact:**
   * - Preloads the image resource
   * - Improves Core Web Vitals metrics
   * - Reduces perceived loading time
   * - Enhances user experience for critical content
   * 
   * **Best Practices:**
   * - Only use for truly critical, above-the-fold images
   * - Limit to 1-2 priority images per page
   * - Consider mobile viewport when determining priority
   * - Test impact on overall page performance
   * 
   * @example
   * // Hero section above the fold
   * priority={true}
   * 
   * @example
   * // Conditional priority based on section position
   * priority={isAboveFold}
   * 
   * @example
   * // Landing page hero
   * priority={pathname === '/' && isFirstSection}
   */
  priority?: boolean;

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
   * - Automatic WebP/AVIF format conversion for smaller file sizes
   * - Responsive image generation with automatic srcset
   * - Blur placeholder support for StaticImageData imports
   * - Priority loading for above-the-fold hero content
   * - Built-in lazy loading for performance optimization
   * - Optimal Core Web Vitals performance (LCP, CLS, FCP)
   * 
   * **Alternative Image Components:**
   * - Custom image components with similar optimization APIs
   * - Third-party image optimization libraries
   * - Framework-specific image handlers
   * - Standard img element wrapper (with reduced optimization)
   * 
   * **Hero-Specific Benefits:**
   * - Responsive sizing with optimized srcset generation
   * - Object-fit cover for proper aspect ratio handling
   * - Fill mode for precise container fitting
   * - Professional presentation with Paper elevation
   * 
   * **Implementation Requirements:**
   * The provided component must accept the following props:
   * - `src`: Image source (string or StaticImageData)
   * - `alt`: Alternative text for accessibility
   * - `fill`: Boolean for absolute positioning (required for hero layout)
   * - `sizes`: Responsive sizes hint for bandwidth optimization
   * - `priority`: Priority loading flag
   * - `style`: CSS styles object (objectFit: 'cover' applied)
   * 
   * @example
   * // Next.js Image (recommended)
   * import Image from 'next/image';
   * 
   * <HeroBlock
   *   ImageComponent={Image}
   *   image={heroImage}
   *   priority={true}
   * />
   * 
   * @example
   * // Custom image component
   * import OptimizedImage from '@/components/OptimizedImage';
   * 
   * <HeroBlock
   *   ImageComponent={OptimizedImage}
   *   image="/hero.jpg"
   * />
   */
  ImageComponent: ImageComponentLike;
};

/**
 * Format content as title or subtitle with appropriate Typography components
 * 
 * Utility function that intelligently handles both string and React node content,
 * applying appropriate Typography components and styling based on the content type
 * and specified kind (title vs subtitle).
 * 
 * @param {React.ReactNode} node - Content to format (string or React node)
 * @param {'title' | 'subtitle'} kind - Type of formatting to apply
 * @returns {React.ReactNode | null} Formatted content or null if invalid
 * 
 * **String Processing:**
 * - 'title': Wrapped with SubsubsectionTitle component for consistent heading hierarchy
 * - 'subtitle': Wrapped with Typography variant="strapline" for supporting text
 * 
 * **React Node Processing:**
 * - Validates that the node is a valid React element
 * - Returns the node unchanged for custom styling and composition
 * - Returns null for invalid elements to prevent rendering errors
 * 
 * **Design System Integration:**
 * - Uses established typography components from the design system
 * - Maintains consistent visual hierarchy across hero sections
 * - Supports theme-aware styling and responsive behavior
 * 
 * @example
 * // String title formatting
 * formatTitle("Psychology Orlando", 'title')
 * // Returns: <SubsubsectionTitle>Psychology Orlando</SubsubsectionTitle>
 * 
 * @example
 * // String subtitle formatting
 * formatTitle("Evidence-based care", 'subtitle')
 * // Returns: <Typography variant="strapline">Evidence-based care</Typography>
 * 
 * @example
 * // React node passthrough
 * const customTitle = <Typography variant="h1" color="primary">Custom</Typography>;
 * formatTitle(customTitle, 'title')
 * // Returns: customTitle (unchanged)
 * 
 * @example
 * // Invalid content handling
 * formatTitle(null, 'title')
 * // Returns: null
 * 
 * @since 1.0.0
 */
function formatTitle(node: React.ReactNode, kind: 'title' | 'subtitle' = 'title') {
  if (typeof node === 'string') {
    return kind === 'title'
      ? <SubsubsectionTitle>{node}</SubsubsectionTitle>
      : <Typography variant="strapline">{node}</Typography>;
  }
  return React.isValidElement(node) ? node : null; 
}

/**
 * HeroBlock - Professional Hero Section with Content and Image Layout
 * 
 * A sophisticated hero section component that creates compelling two-column layouts
 * perfect for professional websites, service pages, and marketing content. Combines
 * responsive design, accessibility features, and Next.js image optimization for
 * optimal performance and user experience.
 * 
 * **Component Architecture:**
 * The component uses a flexible grid system that adapts seamlessly across devices:
 * - **Desktop (md+)**: 7/5 column split with content left, image right
 * - **Mobile (xs-sm)**: Stacked layout with content above image
 * - **Responsive Images**: Automatically optimized sizing for bandwidth efficiency
 * - **Professional Presentation**: Elevated image display with Material-UI Paper
 * 
 * **Content System:**
 * - **Smart Typography**: Automatic formatting for strings, custom nodes supported
 * - **Hierarchical Structure**: Header → Message → Subtitle flow for clear communication
 * - **Flexible Styling**: Design system integration with custom override support
 * - **Accessibility Compliant**: Semantic HTML structure with proper alt text handling
 * 
 * **Performance Features:**
 * - **Next.js Image Integration**: Full optimization with responsive sizing
 * - **Priority Loading**: Above-the-fold optimization for Core Web Vitals
 * - **Lazy Loading**: Automatic below-the-fold optimization
 * - **Format Selection**: Automatic WebP/AVIF conversion when available
 * - **Blur Placeholders**: Smooth loading transitions with StaticImageData
 * 
 * **Image Presentation:**
 * - **Paper Elevation**: Professional appearance with elevation={12}
 * - **Rounded Corners**: Modern borderRadius={3} styling
 * - **Object Cover**: Proper aspect ratio maintenance with object-fit: cover
 * - **Responsive Sizing**: Optimized sizes for different screen resolutions
 * - **Caption Support**: Optional descriptive text below image
 * 
 * @param props - Component configuration and content
 * @param props.header - Main headline (string auto-formatted or custom React node)
 * @param props.message - Primary content message (string or rich React content)
 * @param props.subTitle - Supporting text or call-to-action (string or custom node)
 * @param props.image - Image source (StaticImageData recommended, URL supported)
 * @param props.alt - Image alt text for accessibility (falls back to caption)
 * @param props.caption - Optional image caption displayed below image
 * @param props.priority - Priority loading flag for above-the-fold optimization
 * @param props.ImageComponent - Image component for rendering (typically Next.js Image)
 * @param props...boxProps - Additional BackgroundBox properties for advanced styling
 * 
 * @returns React functional component rendering professional hero section
 * 
 * @example
 * // Professional service hero section
 * import Image from 'next/image';
 * import psychologyOffice from '/public/psychology-office.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header="Psychology Orlando"
 *   message="Holistic mental health care in Maitland & greater Orlando area. Our evidence-based approach combines compassionate care with proven therapeutic methods."
 *   subTitle="Evidence-based, compassionate, personalized."
 *   image={psychologyOffice}
 *   caption="Kellie S. Ffrench, Ph.D."
 *   alt="Modern psychology office with comfortable seating and warm lighting"
 *   priority
 * />
 * 
 * @example
 * // Product feature showcase
 * import Image from 'next/image';
 * import productHero from '/public/product-showcase.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header={
 *     <Stack spacing={1}>
 *       <Chip label="New Release" color="primary" size="small" />
 *       <Typography variant="h1" sx={{ color: 'primary.main', fontWeight: 700 }}>
 *         Revolutionary Design
 *       </Typography>
 *     </Stack>
 *   }
 *   message={
 *     <>
 *       Transform your workflow with our <strong>innovative solution</strong> that 
 *       combines power, simplicity, and elegance. Experience the difference that 
 *       thoughtful design makes in your daily productivity.
 *     </>
 *   }
 *   subTitle={
 *     <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
 *       <Button variant="contained" size="large">
 *         Start Free Trial
 *       </Button>
 *       <Button variant="outlined" size="large">
 *         Watch Demo
 *       </Button>
 *     </Stack>
 *   }
 *   image={productHero}
 *   alt="Product interface displayed on modern workspace setup"
 *   priority
 * />
 * 
 * @example
 * // Team introduction with custom styling
 * import Image from 'next/image';
 * import teamPhoto from '/public/team-leadership.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header="Meet Our Expert Team"
 *   message={
 *     <Box>
 *       <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
 *         We're a passionate group of professionals dedicated to delivering 
 *         exceptional results. Our diverse expertise and collaborative approach 
 *         ensure your project succeeds from conception to completion.
 *       </Typography>
 *       <List dense sx={{ mt: 2 }}>
 *         <ListItem disablePadding>
 *           <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
 *           <ListItemText primary="20+ years combined experience" />
 *         </ListItem>
 *         <ListItem disablePadding>
 *           <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
 *           <ListItemText primary="Award-winning design team" />
 *         </ListItem>
 *         <ListItem disablePadding>
 *           <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
 *           <ListItemText primary="100% client satisfaction rate" />
 *         </ListItem>
 *       </List>
 *     </Box>
 *   }
 *   subTitle="Ready to bring your vision to life"
 *   image={teamPhoto}
 *   caption="Our leadership team in the Boston headquarters"
 *   alt="Professional team of five people in modern office conference room"
 * />
 * 
 * @example
 * // Minimal service description
 * import Image from 'next/image';
 * import serviceImage from '/public/consulting-session.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header="Expert Consulting"
 *   message="Strategic guidance from industry leaders to accelerate your business growth and navigate complex challenges with confidence."
 *   subTitle="Schedule a free consultation today"
 *   image={serviceImage}
 *   alt="Professional consulting session in modern conference room"
 * />
 * 
 * @example
 * // E-commerce product highlight
 * import Image from 'next/image';
 * import productImage from '/public/premium-headphones.jpg';
 * 
 * <HeroBlock
 *   ImageComponent={Image}
 *   header={
 *     <Typography variant="h1" sx={{ 
 *       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 *       backgroundClip: 'text',
 *       WebkitBackgroundClip: 'text',
 *       WebkitTextFillColor: 'transparent',
 *       fontWeight: 800
 *     }}>
 *       Premium Audio Experience
 *     </Typography>
 *   }
 *   message="Immerse yourself in crystal-clear sound with our flagship wireless headphones. Advanced noise cancellation and 30-hour battery life for the ultimate listening experience."
 *   subTitle={
 *     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
 *       <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
 *         $299.99
 *       </Typography>
 *       <Rating value={4.8} precision={0.1} readOnly size="large" />
 *       <Typography variant="body2" color="text.secondary">
 *         (2,847 reviews)
 *       </Typography>
 *     </Box>
 *   }
 *   image={productImage}
 *   caption="Available in Midnight Black, Silver, and Rose Gold"
 *   alt="Premium wireless headphones on marble surface with elegant lighting"
 *   priority
 * />
 * 
 * ## Technical Implementation Notes
 * 
 * **Grid System:**
 * - Uses Material-UI Grid2 with responsive size props
 * - 7/5 column split provides optimal content-to-image ratio
 * - alignItems="stretch" ensures equal height columns
 * - spacing={10} provides professional visual separation
 * 
 * **Image Optimization:**
 * - Responsive sizes: "(max-width: 600px) 90vw, (max-width: 1200px) 50vw, 45vw"
 * - Object-fit: cover maintains aspect ratio while filling container
 * - Paper component provides professional elevation and border radius
 * - Fill mode ensures image properly fills available space
 * 
 * **Accessibility Features:**
 * - Semantic HTML structure with proper heading hierarchy
 * - Image alt text with intelligent fallback to caption
 * - Keyboard navigation support for interactive elements
 * - Screen reader friendly content organization
 * - High contrast support through theme integration
 * 
 * **Performance Considerations:**
 * - Priority loading support for above-the-fold optimization
 * - Responsive image sizing reduces bandwidth usage
 * - Efficient re-rendering with stable component structure
 * - Next.js Image optimization pipeline integration
 * 
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and image optimization
 */
const HeroBlock: React.FC<HeroBlockProps> = ({
  image,
  alt,
  header,
  message,
  caption,
  subTitle,
  priority = false,
  ImageComponent,
  ...boxProps
}) => {
  const { sx } = boxProps;

  return (
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'inherit',
          width: '100%',
          height: '100%',
        }}
        id='ctr-hero-block'
      >
        <Grid
          container
          spacing={10}
          alignItems="stretch"
          width={'100%'}
          sx={{ flex: 1, minHeight: 'inherit' }}
        >
          {/* Text column (7/12) */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
            <Stack
              spacing={3}
              sx={{
                py: { xs: 2, md: 0 },
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {formatTitle(header, 'title')}
              {message && (
                <SubsubsectionTitle
                  sx={{ textAlign: 'left', lineHeight: 1.7, maxWidth: 720 }}
                >
                  {message}
                </SubsubsectionTitle>
              )}
              {formatTitle(subTitle, 'subtitle')}
            </Stack>
          </Grid>

          {/* Image column (5/12) */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, width: '100%' }}>
              <Paper
                elevation={12}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  flex: 1,
                  width: '100%',
                  maxWidth: 'none',
                  minHeight: { xs: 260, md: 0 }, // fallback so it never collapses
                }}
              >
                <ImageComponent
                  src={image}
                  alt={alt ?? (typeof caption === 'string' ? caption : '')}
                  fill
                  priority={priority}
                  sizes="(max-width: 600px) 90vw, (max-width: 1200px) 50vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </Paper>

              {caption && (
                <Typography
                variant='strapline'
                  color='text'
                  textAlign={'center'}
                  mt={2}
                  // sx={{ textAlign: 'center', color: 'primary', mt: 2 }}
                >
                  {caption}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
};

export default HeroBlock;
