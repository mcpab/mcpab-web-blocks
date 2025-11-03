/*
 * Section Tokens - Design System Height Standards
 *
 * A comprehensive set of responsive minimum height tokens for creating consistent section layouts
 * across different screen sizes. These tokens provide a standardized approach to section sizing,
 * ensuring visual hierarchy and proper content spacing throughout your application.
 *
 * Philosophy:
 * Section height consistency is crucial for creating professional, polished layouts. These tokens
 * eliminate guesswork by providing predetermined height values that work harmoniously together,
 * creating a cohesive visual rhythm across pages and components.
 *
 * Features:
 * - Responsive height values for xs, md, and lg breakpoints
 * - Semantic size naming (micro, compact, sm, md, lg, xl)
 * - Progressive scaling that maintains proportional relationships
 * - Type-safe token consumption with TypeScript
 * - Helper function for easy MUI sx integration
 * - Consistent design system foundation
 * - Mobile-first responsive approach
 *
 * Size Scale Philosophy:
 * - micro: Minimal sections for compact content (banners, alerts, small CTAs)
 * - compact: Small sections for brief content (feature highlights, stats)
 * - sm: Standard small sections (testimonials, brief descriptions)
 * - md: Medium sections (hero areas, feature blocks)
 * - lg: Large sections (full feature showcases, about sections)
 * - xl: Extra large sections (landing heroes, major content areas)
 *
 * Responsive Scaling Pattern:
 * Each size tier scales proportionally across breakpoints:
 * - xs (mobile): Base sizing optimized for mobile content
 * - md (tablet): ~25-30% increase for comfortable tablet viewing
 * - lg (desktop): Additional 12-18% increase for desktop layouts
 *
 * Height Reference Chart:
 * 
 * Size      | xs (mobile) | md (tablet) | lg (desktop) | Use Cases
 * ----------|-------------|-------------|--------------|------------------
 * micro     | 160px       | 200px       | 240px        | Banners, alerts
 * compact   | 300px       | 360px       | 400px        | Stats, highlights
 * sm        | 420px       | 520px       | 560px        | Testimonials
 * md        | 520px       | 640px       | 720px        | Hero sections
 * lg        | 600px       | 760px       | 880px        | Feature showcases
 * xl        | 720px       | 880px       | 1040px       | Landing heroes
 *
 * Usage Patterns:
 * 
 * Direct Token Access:
 * const heroHeight = SECTION_MIN_H.md; // { xs: '520px', md: '640px', lg: '720px' }
 * 
 * With Helper Function:
 * const heroSx = sectionMinHeightSx('md'); // Returns SxProps for minHeight
 * 
 * MUI Component Integration:
 * Box with minHeight: SECTION_MIN_H.lg
 * Box with sectionMinHeightSx('sm')
 *
 * Examples:
 *
 * Landing Page Hero Section:
 * Use sectionMinHeightSx('xl') with primary background, centered content,
 * typography variants h2 and h6, and call-to-action button
 *
 * Feature Showcase Section:
 * Apply sectionMinHeightSx('lg') with Container maxWidth="lg",
 * Grid layout for feature cards, centered typography
 *
 * Testimonial Section:
 * Use SECTION_MIN_H.sm with grey background, centered content,
 * testimonial quote and attribution
 *
 * Statistics Banner:
 * Apply sectionMinHeightSx('compact') with Grid container,
 * statistics display with large numbers and labels
 *
 * Alert/Announcement Banner:
 * Use SECTION_MIN_H.micro with warning background,
 * centered Alert component with announcement text
 *
 * About Us Section:
 * Apply sectionMinHeightSx('md') with Grid layout,
 * text content and image in balanced columns
 *
 * Contact Form Section:
 * Use sectionMinHeightSx('lg') with primary background,
 * form fields in Grid layout with Paper container
 *
 * Progressive Section Layout:
 * Structure pages with descending section sizes:
 * xl (hero) → lg (features) → md (about) → sm (testimonials) → compact (stats)
 *
 * Custom Section with Background:
 * Combine sectionMinHeightSx('md') with gradient background,
 * overlay effects, and positioned content
 *
 * Section Size Selection Guide:
 * 
 * Choose 'micro' for:
 * - Alert banners and notifications
 * - Cookie consent bars
 * - Promotional strips
 * - Quick announcement areas
 * 
 * Choose 'compact' for:
 * - Statistics displays
 * - Client logos
 * - Brief feature highlights
 * - Social proof sections
 * 
 * Choose 'sm' for:
 * - Single testimonials
 * - Contact information
 * - Newsletter signup
 * - Brief company info
 * 
 * Choose 'md' for:
 * - Hero sections (standard)
 * - About us content
 * - Service descriptions
 * - Team introductions
 * 
 * Choose 'lg' for:
 * - Feature showcases
 * - Product demonstrations
 * - Detailed content sections
 * - Portfolio displays
 * 
 * Choose 'xl' for:
 * - Landing page heroes
 * - Major call-to-action areas
 * - Full-screen experiences
 * - Immersive content sections
 *
 * Implementation Patterns:
 * 
 * 1. Landing Page Structure:
 *    xl (hero) → lg (features) → md (about) → sm (testimonials) → compact (stats)
 * 
 * 2. Product Page Structure:
 *    lg (product hero) → md (features) → sm (specs) → compact (reviews summary)
 * 
 * 3. Blog Layout Structure:
 *    md (article header) → content → sm (author bio) → compact (related posts)
 * 
 * 4. Dashboard Structure:
 *    compact (stats bar) → md (main content) → sm (recent activity)
 *
 * Best Practices:
 * 1. Use consistent size progression for visual hierarchy
 * 2. Combine with appropriate padding for content breathing room
 * 3. Consider content density when selecting sizes
 * 4. Test responsive behavior across actual devices
 * 5. Use helper function for cleaner code organization
 * 6. Maintain proportional relationships between adjacent sections
 * 7. Consider user scrolling behavior and viewport sizes
 * 8. Use semantic sizing based on content importance
 *
 * Accessibility:
 * - Provides adequate space for touch targets on mobile
 * - Ensures content remains readable across screen sizes
 * - Supports proper content hierarchy and navigation
 * - Compatible with screen reader navigation patterns
 * - Maintains consistent visual rhythm for better UX
 * - Respects user's motion and scaling preferences
 *
 * Performance:
 * - Compile-time constants for optimal performance
 * - Type-safe token consumption prevents runtime errors
 * - Minimal CSS output with responsive breakpoints
 * - No JavaScript runtime overhead for token resolution
 * - Efficient MUI sx integration
 */
import type { SxProps, Theme } from '@mui/material/styles';

export const SECTION_MIN_H = {
  micro:  { xs: '160px', md: '200px', lg: '240px' },
  compact:{ xs: '300px', md: '360px', lg: '400px' }, // ← new in-between
  sm:     { xs: '420px', md: '520px', lg: '560px' },
  md:     { xs: '520px', md: '640px', lg: '720px' },
  lg:     { xs: '600px', md: '760px', lg: '880px' },
  xl:     { xs: '720px', md: '880px', lg: '1040px' },
} as const;

export type SectionSize = keyof typeof SECTION_MIN_H;

// Optional helper if you like to consume as sx:
export const sectionMinHeightSx = (size: SectionSize): SxProps<Theme> => ({
  minHeight: SECTION_MIN_H[size],
});
