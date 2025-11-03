
/*
 * Section Component
 *
 * A flexible, semantic section component that provides consistent height management and layout structure
 * for page sections. Built on top of the section token system, it offers preset responsive heights,
 * flexible content alignment, and support for absolute positioning scenarios.
 *
 * Purpose:
 * The Section component bridges the gap between raw HTML sections and fully styled page layouts.
 * It provides semantic structure while handling common layout challenges like consistent heights,
 * content centering, and absolute positioning contexts for overlays and backgrounds.
 *
 * Features:
 * - Semantic HTML section element for proper document structure
 * - Responsive preset heights using section token system
 * - Optional content centering (horizontal and vertical)
 * - CSS custom property exposure for descendant access
 * - Definite height mode for absolute positioning scenarios
 * - Anchor support for table of contents and jump links
 * - Flexible content layout with inheritance
 * - Full MUI Box props support for customization
 * - TypeScript support with comprehensive prop typing
 *
 * Size Integration:
 * Uses the section token system (SECTION_MIN_H) for consistent heights:
 * - micro: 160px → 200px → 240px (alerts, banners)
 * - compact: 300px → 360px → 400px (stats, highlights)
 * - sm: 420px → 520px → 560px (testimonials, brief content)
 * - md: 520px → 640px → 720px (standard sections, default)
 * - lg: 600px → 760px → 880px (feature showcases)
 * - xl: 720px → 880px → 1040px (hero sections)
 *
 * Layout Architecture:
 * - Renders as semantic <section> element
 * - Establishes containing block for absolute children
 * - Uses flexbox for content layout
 * - Exposes height as CSS custom property (--section-h)
 * - Children inherit minimum height for full section usage
 *
 * Props:
 * - size: Section height preset (micro | compact | sm | md | lg | xl)
 * - center: Centers content both horizontally and vertically
 * - id: Element ID for anchor links and navigation
 * - lockHeight: Sets definite height equal to size token (for absolute positioning)
 * - children: Section content
 * - All other MUI Box props (sx, bgcolor, etc.)
 *
 * Examples:
 *
 * Basic Section Usage:
 * <Section size="lg">
 *   <Container maxWidth="lg" sx={{ py: 8 }}>
 *     <Typography variant="h3" gutterBottom>Our Features</Typography>
 *     <Grid container spacing={4}>
 *       {features.map(feature => (
 *         <Grid item xs={12} md={4} key={feature.id}>
 *           <FeatureCard {...feature} />
 *         </Grid>
 *       ))}
 *     </Grid>
 *   </Container>
 * </Section>
 *
 * Centered Hero Section:
 * <Section 
 *   size="xl" 
 *   center 
 *   sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
 * >
 *   <Container maxWidth="md" sx={{ textAlign: 'center' }}>
 *     <Typography variant="h2" gutterBottom>Welcome to Our Platform</Typography>
 *     <Typography variant="h5" paragraph>Revolutionary solutions for modern businesses</Typography>
 *     <Button variant="contained" size="large" color="secondary">Get Started Today</Button>
 *   </Container>
 * </Section>
 *
 * Anchored Section for Navigation:
 * <Section id="about-us" size="md">
 *   <Container maxWidth="lg" sx={{ py: 6 }}>
 *     <Typography variant="h3" gutterBottom>About Our Company</Typography>
 *     <Grid container spacing={6} alignItems="center">
 *       <Grid item xs={12} md={6}>
 *         <Typography variant="body1" paragraph>
 *           Founded in 2020, our company has been at the forefront of digital innovation...
 *         </Typography>
 *       </Grid>
 *       <Grid item xs={12} md={6}>
 *         <img src="/about-team.jpg" alt="Our team" style={{ width: '100%', borderRadius: 8 }} />
 *       </Grid>
 *     </Grid>
 *   </Container>
 * </Section>
 *
 * Background Image with Overlay:
 * <Section 
 *   size="lg" 
 *   lockHeight 
 *   sx={{
 *     backgroundImage: 'url(/hero-bg.jpg)',
 *     backgroundSize: 'cover',
 *     backgroundPosition: 'center',
 *     '&::before': {
 *       content: '""',
 *       position: 'absolute',
 *       top: 0, left: 0, right: 0, bottom: 0,
 *       bgcolor: 'rgba(0,0,0,0.5)',
 *       zIndex: 1
 *     }
 *   }}
 * >
 *   <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
 *     <Box>
 *       <Typography variant="h3" color="white" gutterBottom>Innovation Starts Here</Typography>
 *       <Typography variant="body1" color="grey.100">
 *         Discover the future of technology with our cutting-edge solutions.
 *       </Typography>
 *     </Box>
 *   </Container>
 * </Section>
 *
 * Statistics Section:
 * <Section size="compact" sx={{ bgcolor: 'grey.100', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
 *   <Container maxWidth="lg">
 *     <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
 *       <Grid item xs={6} md={3}>
 *         <Box textAlign="center">
 *           <Typography variant="h3" color="primary.main">10M+</Typography>
 *           <Typography variant="body1">Users Worldwide</Typography>
 *         </Box>
 *       </Grid>
 *       <Grid item xs={6} md={3}>
 *         <Box textAlign="center">
 *           <Typography variant="h3" color="primary.main">99.9%</Typography>
 *           <Typography variant="body1">Uptime</Typography>
 *         </Box>
 *       </Grid>
 *     </Grid>
 *   </Container>
 * </Section>
 *
 * Progressive Page Layout:
 * <main>
 *   <Section size="xl" center sx={{ bgcolor: 'primary.main', color: 'white' }}>
 *     <HeroContent />
 *   </Section>
 *   <Section size="lg" id="features">
 *     <FeaturesShowcase />
 *   </Section>
 *   <Section size="md" sx={{ bgcolor: 'grey.50' }}>
 *     <AboutContent />
 *   </Section>
 * </main>
 *
 * Use Cases:
 * - Landing page sections with consistent heights
 * - Hero areas with background images or videos
 * - Feature showcases with grid layouts
 * - Testimonial and review sections
 * - Contact forms and call-to-action areas
 * - Statistics and metrics displays
 * - About us and company information sections
 *
 * Best Practices:
 * 1. Use semantic section elements for proper document structure
 * 2. Combine sizes thoughtfully to create visual rhythm
 * 3. Use lockHeight sparingly, only when absolute positioning is needed
 * 4. Include proper padding within Container components
 * 5. Use anchors (id prop) for navigation and accessibility
 * 6. Test center prop with various content types and lengths
 * 7. Consider mobile viewport height when choosing sizes
 * 8. Use CSS custom property (--section-h) for advanced layouts
 *
 * Accessibility:
 * - Uses semantic <section> element for proper document structure
 * - Supports screen reader navigation between sections
 * - Anchor IDs enable keyboard navigation and skip links
 * - Maintains proper heading hierarchy within sections
 * - Responsive heights ensure content remains accessible on mobile
 * - Color contrast considerations for background styling
 * - Compatible with assistive technologies
 *
 * Performance:
 * - Lightweight wrapper around MUI Box component
 * - CSS custom properties for efficient descendant access
 * - Responsive height tokens prevent layout shifts
 * - Minimal runtime overhead with compile-time optimizations
 * - Efficient flexbox layout for content distribution
 */


import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
import { SECTION_MIN_H, type SectionSize } from '../design/sectionTokens';

export type SectionProps = BoxProps & {
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
  children: React.ReactNode;
};

export default function Section({
  size = 'md',
  lockHeight = false,
  sx,
  children,
  id,
  ...rest
}: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        // Put the token into a CSS var so descendants can reference it if needed.
        '--section-h': SECTION_MIN_H[size] as any,
        minHeight: 'var(--section-h)',
        ...(lockHeight ? { height: 'var(--section-h)' } : null), // ← makes height *definite*
        position: 'relative',           // establish containing block for abs children
        display: 'flex',
        '& > *': { flex: 1, minHeight: 'inherit' },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
