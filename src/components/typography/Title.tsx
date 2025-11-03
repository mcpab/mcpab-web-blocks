/*
 * Title Component & Semantic Wrappers
 *
 * A semantic typography system built on top of MUI Typography that enforces proper document structure
 * and heading hierarchy. The Title component locks heading levels via semantic types, ensuring consistent
 * document outlines and centralizing typography styling through the theme system.
 *
 * Philosophy:
 * This component prioritizes semantic HTML structure over visual styling preferences. By mapping
 * semantic roles to specific heading levels, it prevents common accessibility issues like skipped
 * heading levels or inconsistent document structure.
 *
 * Features:
 * - Semantic heading level mapping (page → h1, section → h2, etc.)
 * - Enforced document structure and accessibility compliance
 * - Centralized typography styling through MUI theme
 * - Convenient wrapper components for common use cases
 * - Type-safe props with omitted variant/component to prevent misuse
 * - Full MUI Typography prop support (color, align, gutterBottom, sx, etc.)
 * - Consistent primary color theming by default
 *
 * Semantic Mapping:
 * - page          → h1 (variant="h1") - Main page title
 * - section       → h2 (variant="h2") - Major section headings
 * - subsection    → h3 (variant="h3") - Subsection headings
 * - subsubsection → h4 (variant="h4") - Minor subsection headings
 *
 * Architecture:
 * The component intentionally omits the `variant` and `component` props from the public API
 * to prevent developers from breaking the semantic heading hierarchy. All other Typography
 * props remain available for styling and behavior customization.
 *
 * Wrapper Components:
 * For convenience and clarity, use the provided semantic wrappers:
 * - PageTitle          → h1 (page-level title)
 * - SectionTitle       → h2 (section-level title)
 * - SubsectionTitle    → h3 (subsection-level title)
 * - SubsubsectionTitle → h4 (subsubsection-level title)
 *
 * Examples:
 *
 * Basic Usage with Base Component:
 * <Title sectionType="page">Welcome to Our Platform</Title>
 * <Title sectionType="section">Getting Started</Title>
 * <Title sectionType="subsection">Installation</Title>
 *
 * Preferred Usage with Wrapper Components:
 * <PageTitle>Welcome to Our Platform</PageTitle>
 * <SectionTitle>Getting Started</SectionTitle>
 * <SubsectionTitle>Installation</SubsectionTitle>
 * <SubsubsectionTitle>Prerequisites</SubsubsectionTitle>
 *
 * Complete Page Structure:
 * <main>
 *   <PageTitle>User Dashboard</PageTitle>
 *   
 *   <section>
 *     <SectionTitle>Recent Activity</SectionTitle>
 *     <ActivityList />
 *   </section>
 *   
 *   <section>
 *     <SectionTitle>Account Settings</SectionTitle>
 *     
 *     <SubsectionTitle>Profile Information</SubsectionTitle>
 *     <ProfileForm />
 *     
 *     <SubsectionTitle>Security Settings</SubsectionTitle>
 *     <SubsubsectionTitle>Password</SubsubsectionTitle>
 *     <PasswordForm />
 *     
 *     <SubsubsectionTitle>Two-Factor Authentication</SubsubsectionTitle>
 *     <TwoFactorSettings />
 *   </section>
 * </main>
 *
 * With Custom Styling:
 * <PageTitle 
 *   align="center" 
 *   gutterBottom 
 *   sx={{ mb: 4, fontWeight: 'bold' }}
 * >
 *   Product Launch
 * </PageTitle>
 *
 * <SectionTitle 
 *   color="secondary" 
 *   sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}
 * >
 *   Features Overview
 * </SectionTitle>
 *
 * Color Variations:
 * <PageTitle color="primary">Primary Title</PageTitle>
 * <SectionTitle color="secondary">Secondary Title</SectionTitle>
 * <SubsectionTitle color="text.secondary">Muted Title</SubsectionTitle>
 * <SubsubsectionTitle sx={{ color: 'error.main' }}>Error Title</SubsubsectionTitle>
 *
 * Blog Post Structure:
 * <article>
 *   <PageTitle>How to Build Accessible React Components</PageTitle>
 *   <Typography variant="subtitle1" color="text.secondary" gutterBottom>
 *     Published on March 15, 2024
 *   </Typography>
 *   
 *   <SectionTitle>Introduction</SectionTitle>
 *   <Typography variant="body1">...</Typography>
 *   
 *   <SectionTitle>Core Principles</SectionTitle>
 *   <SubsectionTitle>Semantic HTML</SubsectionTitle>
 *   <Typography variant="body1">...</Typography>
 *   
 *   <SubsectionTitle>ARIA Attributes</SubsectionTitle>
 *   <SubsubsectionTitle>When to Use ARIA</SubsubsectionTitle>
 *   <Typography variant="body1">...</Typography>
 *   
 *   <SubsubsectionTitle>Common Patterns</SubsubsectionTitle>
 *   <Typography variant="body1">...</Typography>
 * </article>
 *
 * Landing Page Structure:
 * <PageTitle align="center" gutterBottom sx={{ mb: 6 }}>
 *   Revolutionary Design System
 * </PageTitle>
 * 
 * <SectionTitle align="center" sx={{ mb: 4 }}>
 *   Key Features
 * </SectionTitle>
 * 
 * <Grid container spacing={4}>
 *   <Grid item xs={12} md={4}>
 *     <SubsectionTitle>Accessibility First</SubsectionTitle>
 *     <Typography>Built with WCAG compliance...</Typography>
 *   </Grid>
 *   <Grid item xs={12} md={4}>
 *     <SubsectionTitle>Developer Experience</SubsectionTitle>
 *     <Typography>TypeScript support and...</Typography>
 *   </Grid>
 * </Grid>
 *
 * Use Cases:
 * - Blog posts and articles with proper heading hierarchy
 * - Documentation pages with nested sections
 * - Landing pages with clear content structure
 * - Dashboard interfaces with organized sections
 * - Forms with grouped sections and subsections
 * - Product pages with feature breakdowns
 * - Help and support pages with categorized content
 *
 * Theming:
 * Typography styles are controlled through theme.typography.h1-h4:
 * - Font sizes, weights, and line heights come from the theme
 * - Spacing should be handled in theme.components.MuiTypography.styleOverrides
 * - Default color is 'primary' but can be overridden with color prop
 * - Use palette roles like 'primary', 'secondary', 'text.secondary'
 * - For specific shades, use sx prop: sx={{ color: 'primary.main' }}
 *
 * Best Practices:
 * 1. Always start with PageTitle (h1) for main page content
 * 2. Don't skip heading levels (h1 → h3 without h2)
 * 3. Use semantic wrappers instead of base Title component
 * 4. Keep heading hierarchy logical and meaningful
 * 5. Use color prop for semantic meaning, sx for custom styling
 * 6. Consider gutterBottom for automatic spacing
 * 7. Test heading structure with screen readers
 * 8. Limit h1 usage to one per page
 *
 * Accessibility:
 * - Maintains proper document outline for screen readers
 * - Supports keyboard navigation through headings
 * - Provides semantic structure for assistive technologies
 * - Follows WCAG guidelines for heading hierarchy
 * - Supports focus management and skip navigation
 * - Compatible with screen reader heading navigation shortcuts
 * - Proper color contrast with theme-based colors
 *
 * SEO Benefits:
 * - Proper heading structure improves search engine understanding
 * - Semantic HTML enhances content discoverability
 * - Consistent hierarchy helps search engines parse content importance
 * - Supports rich snippets and structured data extraction
 *
 * ## Theming
 * - Sizes/weights/line-heights come from `theme.typography.h1…h4`.
 * - Spacing for headings should be handled in
 *   `components.MuiTypography.styleOverrides` (as you've done).
 * - `color` prop accepts palette **roles** like `"primary"` or `"text.secondary"`.
 *   If you need a specific shade, use `sx={{ color: 'primary.main' }}`.
 */

import * as React from 'react';
import Typography from '@mui/material/Typography';
import {BodyTextProps} from './types';

export const variantLevels = {
  page: 'h1',
  section: 'h2',
  subsection: 'h3',
  subsubsection: 'h4',
} as const;

export type TitleTypes = keyof typeof variantLevels;

export interface TitleProps extends BodyTextProps {
  /** Semantic level (maps to h1…h4). */
  sectionType: TitleTypes;
}

/** Base component that locks the variant based on `sectionType`. */
export const Title: React.FC<TitleProps> = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return (
    <Typography
      variant={variantLevels[role]}
      sx={sx}
      color='primary'
      {...rest}
    />  
  );
};

Title.displayName = 'Title';

/** h1 wrapper */
export const PageTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="page" {...props} />
);
/** h2 wrapper */
export const SectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="section" {...props} />
);
/** h3 wrapper */
export const SubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="subsection" {...props} />
);
/** h4 wrapper */
export const SubsubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="subsubsection" {...props} />
);

export default Title;
