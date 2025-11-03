/**
 * @fileoverview PageLayout - Consistent Page Structure with Vertical Rhythm
 * 
 * **Enterprise-Grade Page Layout Component for React Applications**
 * 
 * A sophisticated page wrapper component that provides consistent vertical rhythm,
 * theme integration, and flexible background rendering for modern web applications.
 * Built on top of Material-UI and StandardStack, this component ensures uniform
 * spacing and layout across all page structures.
 * 
 * **Key Features:**
 * - **Consistent Vertical Rhythm**: Automatic spacing between page sections using StandardStack
 * - **Theme Integration**: Full Material-UI theme support with background.default fallback
 * - **Transparent Mode**: Overlay capability for hero sections and background imagery
 * - **React 18 Compatible**: Supports Server Components (RSC) and Client Components
 * - **Performance Optimized**: Child normalization with key preservation for efficient rendering
 * - **Responsive Design**: Inherits StandardStack responsive spacing capabilities
 * 
 * **Design System Integration:**
 * - Uses StandardStack "large" spacing preset for optimal visual hierarchy
 * - Respects theme background colors and Material-UI design tokens
 * - Maintains consistent spacing across different screen sizes
 * - Supports both light and dark theme variations
 * 
 * **Performance Considerations:**
 * - Children are normalized with React.Children.toArray for key preservation
 * - Object-form sx props recommended for RSC/CSR boundary safety
 * - Minimal re-renders through strategic prop design
 * - Optimized for large page structures with multiple sections
 * 
 * **Accessibility Features:**
 * - Semantic HTML structure for screen readers
 * - Maintains proper document flow and focus management
 * - Supports high contrast mode through theme integration
 * - Keyboard navigation friendly layout structure
 * 
 * **Usage Patterns:**
 * - **Standard Pages**: Content pages with theme background
 * - **Hero Overlays**: Transparent mode for background image content
 * - **Landing Pages**: Multi-section layouts with consistent spacing
 * - **Dashboard Layouts**: Structured content areas with proper rhythm
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and RSC compatibility
 * 
 * @example
 * // Standard page layout with theme background
 * <PageLayout>
 *   <Section size="md">
 *     <HeroBlock title="Welcome" subtitle="Your journey starts here" />
 *   </Section>
 *   <Section size="sm">
 *     <FeatureGrid features={features} />
 *   </Section>
 *   <Section size="sm">
 *     <CallToAction />
 *   </Section>
 * </PageLayout>
 * 
 * @example
 * // Transparent overlay for background imagery
 * <BackgroundBox imageConf={{ src: heroImage }} ImageComponent={Image}>
 *   <PageLayout transparent>
 *     <Section size="lg">
 *       <HeroContent />
 *     </Section>
 *     <Section size="md">
 *       <IntroContent />
 *     </Section>
 *   </PageLayout>
 * </BackgroundBox>
 * 
 * @example
 * // Custom styling with responsive spacing
 * <PageLayout
 *   sx={{
 *     minHeight: '100vh',
 *     pt: { xs: 2, md: 4 },
 *     pb: { xs: 4, md: 8 }
 *   }}
 * >
 *   <DashboardHeader />
 *   <DashboardContent />
 *   <DashboardFooter />
 * </PageLayout>
 */

import * as React from 'react';
import StandardStack from '../styled/StandardStack';
import { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';


/**
 * Props interface for PageLayout component
 * 
 * Defines the configuration options for the PageLayout component, providing
 * type-safe prop handling for background rendering, content structure, and
 * Material-UI theme integration.
 * 
 * @interface PageLayoutProps
 */
export type PageLayoutProps = {
  /** 
   * Child content rendered within the page layout
   * 
   * @type {React.ReactNode}
   * 
   * Content elements that will be rendered within the page structure with
   * consistent vertical rhythm spacing. Children are automatically normalized
   * using React.Children.toArray to preserve React keys for optimal rendering
   * performance.
   * 
   * **Content Organization:**
   * - Typically contains Section components with varying sizes
   * - Supports any React elements or components
   * - Maintains proper spacing through StandardStack integration
   * - Preserves component keys for efficient re-rendering
   * 
   * **Common Patterns:**
   * - Hero sections with large spacing
   * - Content sections with medium spacing
   * - Call-to-action sections with small spacing
   * - Footer content with appropriate spacing
   * 
   * @example
   * // Multi-section page structure
   * <PageLayout>
   *   <Section size="lg">
   *     <HeroBlock 
   *       title="Welcome to Our Platform"
   *       subtitle="Build amazing experiences"
   *     />
   *   </Section>
   *   <Section size="md">
   *     <FeatureGrid 
   *       features={[
   *         { title: "Fast", description: "Lightning speed" },
   *         { title: "Secure", description: "Bank-grade security" }
   *       ]}
   *     />
   *   </Section>
   *   <Section size="sm">
   *     <CallToAction 
   *       title="Get Started Today"
   *       buttonText="Sign Up"
   *     />
   *   </Section>
   * </PageLayout>
   * 
   * @example
   * // Simple content layout
   * <PageLayout>
   *   <Container>
   *     <Typography variant="h1">Page Title</Typography>
   *     <Typography variant="body1">Page content...</Typography>
   *   </Container>
   * </PageLayout>
   */
  children: React.ReactNode;

  /** 
   * Enable transparent background mode for overlay layouts
   * 
   * @type {boolean}
   * @default false
   * 
   * Controls whether the page layout renders with a theme background or
   * transparent background. When true, removes background fill to allow
   * underlying content (like hero images) to show through while maintaining
   * proper content spacing and layout structure.
   * 
   * **Transparent Mode Benefits:**
   * - Perfect for hero sections with background images
   * - Enables overlay layouts without visual conflicts
   * - Maintains spacing and structure while removing background
   * - Compatible with BackgroundBox and other image containers
   * 
   * **Theme Mode Benefits:**
   * - Provides consistent theme background (background.default)
   * - Ensures proper contrast for content readability
   * - Supports light/dark theme variations automatically
   * - Ideal for standard content pages
   * 
   * **Usage Guidelines:**
   * - Use `true` when placing PageLayout over background imagery
   * - Use `false` (default) for standard content pages
   * - Consider contrast and accessibility when using transparent mode
   * - Test with both light and dark themes
   * 
   * @example
   * // Transparent mode for hero overlay
   * <BackgroundBox 
   *   imageConf={{ src: heroImage, priority: true }}
   *   ImageComponent={Image}
   * >
   *   <PageLayout transparent>
   *     <Section size="xl">
   *       <HeroContent color="white" />
   *     </Section>
   *   </PageLayout>
   * </BackgroundBox>
   * 
   * @example
   * // Theme background for content pages
   * <PageLayout transparent={false}>
   *   <Section size="md">
   *     <ArticleContent />
   *   </Section>
   *   <Section size="sm">
   *     <RelatedArticles />
   *   </Section>
   * </PageLayout>
   * 
   * @example
   * // Dynamic transparent mode based on page type
   * const isHeroPage = pathname === '/' || pathname.startsWith('/hero');
   * 
   * <PageLayout transparent={isHeroPage}>
   *   {isHeroPage ? <HeroContent /> : <StandardContent />}
   * </PageLayout>
   */
  transparent?: boolean;

  /** 
   * Material-UI sx prop for custom styling
   * 
   * @type {SxProps<Theme>}
   * 
   * Provides Material-UI's powerful sx styling system for responsive design,
   * theme integration, and advanced CSS-in-JS functionality. Object-form sx
   * is recommended for Server Component (RSC) and Client Component boundary
   * safety in Next.js applications.
   * 
   * **Styling Capabilities:**
   * - Responsive breakpoint styling with theme breakpoints
   * - Theme-aware colors, spacing, and typography
   * - Advanced CSS properties and pseudo-selectors
   * - Custom properties and CSS variables
   * - Performance-optimized style application
   * 
   * **Common Styling Patterns:**
   * - Container dimensions (minHeight, maxHeight, height)
   * - Padding and margin adjustments for different screen sizes
   * - Background customizations (gradients, patterns)
   * - Layout properties (display, flexDirection, alignItems)
   * - Border and shadow effects for visual separation
   * 
   * **RSC/CSR Compatibility:**
   * - Use object-form sx for better hydration safety
   * - Avoid function-form sx in mixed server/client environments
   * - Prefer static values over dynamic calculations when possible
   * - Test across different rendering strategies
   * 
   * @example
   * // Responsive layout dimensions
   * sx={{
   *   minHeight: '100vh',
   *   pt: { xs: 2, sm: 4, md: 6 },
   *   pb: { xs: 4, sm: 6, md: 8 },
   *   px: { xs: 1, sm: 2 }
   * }}
   * 
   * @example
   * // Custom background with theme integration
   * sx={{
   *   background: (theme) => 
   *     `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
   *   color: 'primary.contrastText',
   *   minHeight: '100vh'
   * }}
   * 
   * @example
   * // Dashboard-style layout with borders
   * sx={{
   *   border: 1,
   *   borderColor: 'divider',
   *   borderRadius: 2,
   *   boxShadow: 1,
   *   overflow: 'hidden',
   *   backgroundColor: 'background.paper'
   * }}
   * 
   * @example
   * // Performance-optimized static styles
   * sx={{
   *   display: 'flex',
   *   flexDirection: 'column',
   *   gap: 3,
   *   maxWidth: 1200,
   *   mx: 'auto',
   *   px: 2
   * }}
   */
  sx?: SxProps<Theme>;
};

/**
 * PageLayout - Enterprise-Grade Page Structure Component
 * 
 * A sophisticated React component that provides consistent page structure with
 * vertical rhythm, theme integration, and flexible background rendering for
 * modern web applications. Built on StandardStack for optimal spacing and
 * Material-UI integration for comprehensive theme support.
 * 
 * **Core Functionality:**
 * - **Vertical Rhythm**: Automatic spacing between sections using StandardStack "large" preset
 * - **Background Control**: Theme-aware background rendering with transparent overlay support
 * - **Child Normalization**: React.Children.toArray for key preservation and efficient rendering
 * - **Theme Integration**: Full Material-UI theme support with background.default fallback
 * - **Responsive Design**: Inherits StandardStack responsive spacing capabilities
 * 
 * **Performance Features:**
 * - Optimized child handling with key preservation for minimal re-renders
 * - Object-form sx props for RSC/CSR boundary safety in Next.js
 * - Efficient background rendering with conditional theme application
 * - Minimal DOM manipulation through strategic component composition
 * 
 * **Accessibility Considerations:**
 * - Maintains semantic HTML structure for screen readers
 * - Preserves proper document flow and focus management
 * - Supports high contrast themes through Material-UI integration
 * - Ensures keyboard navigation compatibility across all content
 * 
 * **Design System Integration:**
 * - Follows Material-UI design principles and spacing tokens
 * - Supports light/dark theme variations automatically
 * - Integrates with StandardStack spacing presets
 * - Maintains consistent visual hierarchy across applications
 * 
 * @param props - Component props configuration
 * @param props.children - Content to render within the page structure
 * @param props.transparent - Enable transparent background for overlay layouts
 * @param props.sx - Material-UI sx prop for custom styling
 * 
 * @returns React functional component rendering structured page layout
 * 
 * @example
 * // Standard content page with theme background
 * function AboutPage() {
 *   return (
 *     <PageLayout>
 *       <Section size="lg">
 *         <Container>
 *           <Typography variant="h1" gutterBottom>
 *             About Our Company
 *           </Typography>
 *           <Typography variant="h4" color="text.secondary" paragraph>
 *             Building the future of web development
 *           </Typography>
 *         </Container>
 *       </Section>
 *       
 *       <Section size="md">
 *         <Container>
 *           <Grid container spacing={4}>
 *             <Grid item xs={12} md={6}>
 *               <TeamSection />
 *             </Grid>
 *             <Grid item xs={12} md={6}>
 *               <MissionSection />
 *             </Grid>
 *           </Grid>
 *         </Container>
 *       </Section>
 *       
 *       <Section size="sm">
 *         <Container>
 *           <CallToAction 
 *             title="Join Our Team"
 *             description="We're looking for talented individuals"
 *             buttonText="View Openings"
 *             href="/careers"
 *           />
 *         </Container>
 *       </Section>
 *     </PageLayout>
 *   );
 * }
 * 
 * @example
 * // Hero page with transparent overlay layout
 * import heroBackground from '@/assets/hero-bg.jpg';
 * 
 * function HomePage() {
 *   return (
 *     <BackgroundBox
 *       ImageComponent={Image}
 *       imageConf={{
 *         src: heroBackground,
 *         mode: 'cover',
 *         priority: true,
 *         overlayColor: 'rgba(0, 0, 0, 0.4)',
 *         alt: 'Hero background showing modern cityscape'
 *       }}
 *     >
 *       <PageLayout transparent>
 *         <Section size="xl">
 *           <Container>
 *             <Stack 
 *               spacing={4} 
 *               alignItems="center" 
 *               textAlign="center"
 *               sx={{ minHeight: '100vh', justifyContent: 'center' }}
 *             >
 *               <Typography 
 *                 variant="h1" 
 *                 color="white"
 *                 sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}
 *               >
 *                 Transform Your Business
 *               </Typography>
 *               <Typography 
 *                 variant="h5" 
 *                 color="grey.200"
 *                 sx={{ maxWidth: 600 }}
 *               >
 *                 Cutting-edge solutions for the modern enterprise
 *               </Typography>
 *               <Stack direction="row" spacing={2}>
 *                 <Button 
 *                   variant="contained" 
 *                   size="large"
 *                   color="primary"
 *                 >
 *                   Get Started
 *                 </Button>
 *                 <Button 
 *                   variant="outlined" 
 *                   size="large"
 *                   sx={{ color: 'white', borderColor: 'white' }}
 *                 >
 *                   Learn More
 *                 </Button>
 *               </Stack>
 *             </Stack>
 *           </Container>
 *         </Section>
 *       </PageLayout>
 *     </BackgroundBox>
 *   );
 * }
 * 
 * @example
 * // Dashboard layout with custom styling
 * function DashboardPage() {
 *   return (
 *     <PageLayout
 *       sx={{
 *         minHeight: '100vh',
 *         backgroundColor: 'grey.50',
 *         pt: { xs: 2, md: 3 },
 *         pb: { xs: 3, md: 4 }
 *       }}
 *     >
 *       <Section size="sm">
 *         <Container>
 *           <DashboardHeader />
 *         </Container>
 *       </Section>
 *       
 *       <Section size="md">
 *         <Container>
 *           <Grid container spacing={3}>
 *             <Grid item xs={12} lg={8}>
 *               <MainDashboardContent />
 *             </Grid>
 *             <Grid item xs={12} lg={4}>
 *               <DashboardSidebar />
 *             </Grid>
 *           </Grid>
 *         </Container>
 *       </Section>
 *     </PageLayout>
 *   );
 * }
 * 
 * @example
 * // Responsive layout with conditional transparency
 * function LandingPage({ hasHeroImage }: { hasHeroImage: boolean }) {
 *   const isTransparent = hasHeroImage;
 *   
 *   const layoutContent = (
 *     <PageLayout 
 *       transparent={isTransparent}
 *       sx={{
 *         minHeight: '100vh',
 *         display: 'flex',
 *         flexDirection: 'column'
 *       }}
 *     >
 *       <Section size="xl">
 *         <HeroSection />
 *       </Section>
 *       
 *       <Section size="lg">
 *         <FeaturesSection />
 *       </Section>
 *       
 *       <Section size="md">
 *         <TestimonialsSection />
 *       </Section>
 *       
 *       <Section size="sm">
 *         <CTASection />
 *       </Section>
 *     </PageLayout>
 *   );
 *   
 *   if (hasHeroImage) {
 *     return (
 *       <BackgroundBox 
 *         ImageComponent={Image}
 *         imageConf={{ src: '/hero.jpg', mode: 'cover' }}
 *       >
 *         {layoutContent}
 *       </BackgroundBox>
 *     );
 *   }
 *   
 *   return layoutContent;
 * }
 * 
 * @since 1.0.0
 * @version 2.1.0 - Enhanced documentation and RSC compatibility improvements
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  transparent = false,
  sx,
}) => {
  const list = React.Children.toArray(children);

  return (
    <StandardStack
      size="large"
      sx={{
        background: transparent ? 'none' : undefined,
        backgroundColor: transparent ? 'transparent' : 'background.default',
        ...sx,
      }}
    >
      {list}
    </StandardStack>
  );
};

export default PageLayout;
