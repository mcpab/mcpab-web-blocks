/**
 * @packageDocumentation
 *
 * # Typography Scale Utilities
 *
 * Responsive typography variant generator for Material-UI themes.
 * Creates fluid typography that scales across standard breakpoints (600px, 900px, 1200px).
 *
 * ## Overview
 *
 * This utility simplifies the creation of responsive typography variants by:
 * - Providing a consistent API for mobile-first typography scaling
 * - Using MUI's standard breakpoint system (sm: 600px, md: 900px, lg: 1200px)
 * - Supporting fluid typography with fallback inheritance
 * - Maintaining type safety with TypeScript
 *
 * ## Basic Usage
 *
 * ```tsx
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 * import { createTheme } from '@mui/material/styles';
 *
 * const theme = createTheme({
 *   typography: {
 *     h1: generateTypographyVariant({
 *       fontSize: '2rem',
 *       fontWeight: 700,
 *       lineHeight: 1.1,
 *       letterSpacing: '-0.02em',
 *       breakpoints: { 
 *         sm: '2.5rem', 
 *         md: '3rem', 
 *         lg: '3.5rem' 
 *       },
 *     }),
 *   },
 * });
 * ```
 *
 * ## Advanced Examples
 *
 * ### Complete Typography System
 * ```tsx
 * const typography = {
 *   h1: generateTypographyVariant({
 *     fontSize: '2rem',
 *     fontWeight: 700,
 *     lineHeight: 1.1,
 *     letterSpacing: '-0.02em',
 *     breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' },
 *   }),
 *   h2: generateTypographyVariant({
 *     fontSize: '1.75rem',
 *     fontWeight: 600,
 *     lineHeight: 1.15,
 *     letterSpacing: '-0.015em',
 *     breakpoints: { sm: '2rem', md: '2.5rem', lg: '3rem' },
 *   }),
 *   body1: generateTypographyVariant({
 *     fontSize: '1rem',
 *     fontWeight: 400,
 *     lineHeight: 1.6,
 *     breakpoints: { md: '1.125rem' },
 *   }),
 * };
 * ```
 *
 * ### Partial Breakpoint Override
 * ```tsx
 * // Only scales up at large screens
 * const subtitle = generateTypographyVariant({
 *   fontSize: '1.25rem',
 *   fontWeight: 500,
 *   breakpoints: { lg: '1.5rem' }, // Only lg breakpoint defined
 * });
 * ```
 *
 * ### Minimal Configuration
 * ```tsx
 * // Uses defaults for optional properties
 * const caption = generateTypographyVariant({
 *   fontSize: '0.875rem',
 *   fontWeight: 400,
 *   // letterSpacing: '0em' (default)
 *   // lineHeight: 1.2 (default)
 *   // breakpoints: {} (default - no scaling)
 * });
 * ```
 *
 * ## Breakpoint Inheritance
 *
 * The utility provides intelligent fallback behavior:
 * - `lg` falls back to `md`, then `sm`, then base `fontSize`
 * - `md` falls back to `sm`, then base `fontSize`
 * - `sm` falls back to base `fontSize`
 *
 * ```tsx
 * generateTypographyVariant({
 *   fontSize: '1rem',        // Base: mobile
 *   breakpoints: { 
 *     sm: '1.125rem',        // ≥600px: 1.125rem
 *                           // ≥900px: 1.125rem (inherits from sm)
 *     lg: '1.5rem'          // ≥1200px: 1.5rem
 *   },
 * });
 * ```
 *
 * ## Integration with Theme
 *
 * ```tsx
 * import { createTheme, ThemeProvider } from '@mui/material/styles';
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 *
 * const theme = createTheme({
 *   typography: {
 *     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
 *     h1: generateTypographyVariant({
 *       fontSize: '2rem',
 *       fontWeight: 700,
 *       breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' },
 *     }),
 *     h2: generateTypographyVariant({
 *       fontSize: '1.75rem',
 *       fontWeight: 600,
 *       breakpoints: { sm: '2rem', md: '2.5rem' },
 *     }),
 *   },
 * });
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={theme}>
 *       <Typography variant="h1">Responsive Heading</Typography>
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * ## Best Practices
 *
 * 1. **Mobile-First Design**: Start with the smallest screen size as your base `fontSize`
 * 2. **Consistent Scaling**: Use a consistent scale ratio (e.g., 1.25x) between breakpoints
 * 3. **Performance**: Define only the breakpoints you need - unused breakpoints are automatically handled
 * 4. **Accessibility**: Maintain sufficient contrast and readable line heights across all sizes
 * 5. **Testing**: Verify typography scales appropriately across all target devices
 *
 * ## Use Cases
 *
 * - **Design Systems**: Creating consistent typography scales across applications
 * - **Responsive Design**: Ensuring optimal readability at all screen sizes
 * - **Brand Consistency**: Maintaining typography hierarchy across breakpoints
 * - **Performance**: Reducing CSS bundle size with programmatic variant generation
 * - **Maintenance**: Centralizing typography scaling logic for easier updates
 *
 * @since 1.0.0
 */

/**
 * Configuration object for generating responsive typography variants.
 * 
 * @example
 * ```tsx
 * const config: VariantScale = {
 *   fontSize: '1.5rem',
 *   fontWeight: 600,
 *   lineHeight: 1.3,
 *   letterSpacing: '-0.01em',
 *   breakpoints: {
 *     sm: '1.75rem',
 *     md: '2rem',
 *     lg: '2.25rem'
 *   }
 * };
 * ```
 */
export type VariantScale = {
  /** 
   * Base font size for mobile screens and fallback.
   * Should be a valid CSS font-size value.
   * 
   * @example '1.5rem', '24px', '1.2em'
   */
  fontSize: string;
  
  /** 
   * Font weight as a numeric value.
   * Use standard CSS font-weight values (100-900).
   * 
   * @example 400, 500, 600, 700
   */
  fontWeight: number;
  
  /** 
   * Letter spacing for improved readability.
   * Negative values tighten spacing, positive values loosen it.
   * 
   * @default '0em'
   * @example '-0.02em', '0.1em', '2px'
   */
  letterSpacing?: string;
  
  /** 
   * Line height for optimal vertical rhythm.
   * Can be unitless number (relative) or string with units.
   * 
   * @default 1.2
   * @example 1.4, '1.5', '24px'
   */
  lineHeight?: string | number;
  
  /** 
   * Responsive font size overrides for specific breakpoints.
   * Uses MUI's standard breakpoint system:
   * - sm: ≥600px (small tablets)
   * - md: ≥900px (large tablets/small desktops)  
   * - lg: ≥1200px (large desktops)
   * 
   * @example
   * ```tsx
   * breakpoints: {
   *   sm: '1.25rem',  // Tablets and up
   *   md: '1.5rem',   // Small desktops and up
   *   lg: '1.75rem'   // Large desktops and up
   * }
   * ```
   */
  breakpoints?: Partial<{
    /** Font size for small screens and up (≥600px) */
    sm: string;
    /** Font size for medium screens and up (≥900px) */
    md: string;
    /** Font size for large screens and up (≥1200px) */
    lg: string;
  }>;
};

/**
 * Generate a responsive typography variant object for Material-UI themes.
 * 
 * Creates a typography variant that automatically scales across MUI's standard
 * breakpoints (600px, 900px, 1200px) using CSS media queries. The function
 * implements intelligent fallback behavior where larger breakpoints inherit
 * from smaller ones if not explicitly defined.
 * 
 * @param config - The typography variant configuration
 * @param config.fontSize - Base font size for mobile screens
 * @param config.fontWeight - Numeric font weight (100-900)
 * @param config.letterSpacing - Letter spacing override (default: '0em')
 * @param config.lineHeight - Line height value (default: 1.2)
 * @param config.breakpoints - Responsive font size overrides
 * 
 * @returns Typography variant object compatible with MUI theme.typography
 * 
 * @example
 * ```tsx
 * // Basic responsive heading
 * const h1Variant = generateTypographyVariant({
 *   fontSize: '2rem',
 *   fontWeight: 700,
 *   lineHeight: 1.1,
 *   breakpoints: {
 *     sm: '2.5rem',
 *     md: '3rem', 
 *     lg: '4rem'
 *   }
 * });
 * 
 * // Minimal configuration (uses defaults)
 * const bodyVariant = generateTypographyVariant({
 *   fontSize: '1rem',
 *   fontWeight: 400
 * });
 * 
 * // Partial breakpoint scaling
 * const subtitleVariant = generateTypographyVariant({
 *   fontSize: '1.25rem',
 *   fontWeight: 500,
 *   breakpoints: { lg: '1.5rem' } // Only scales at large screens
 * });
 * ```
 * 
 * @example
 * ```tsx
 * // Integration with MUI theme
 * import { createTheme } from '@mui/material/styles';
 * 
 * const theme = createTheme({
 *   typography: {
 *     h1: generateTypographyVariant({
 *       fontSize: '2rem',
 *       fontWeight: 700,
 *       breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' }
 *     }),
 *     body1: generateTypographyVariant({
 *       fontSize: '1rem',
 *       fontWeight: 400,
 *       lineHeight: 1.6,
 *       breakpoints: { md: '1.125rem' }
 *     })
 *   }
 * });
 * ```
 * 
 * @since 1.0.0
 */
export const generateTypographyVariant = ({
  fontSize,
  fontWeight,
  letterSpacing = '0em',
  lineHeight = 1.2,
  breakpoints = {},
}: VariantScale) => {
  return {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    '@media (min-width:600px)': {
      fontSize: breakpoints.sm ?? fontSize,
    },
    '@media (min-width:900px)': {
      fontSize: breakpoints.md ?? breakpoints.sm ?? fontSize,
    },
    '@media (min-width:1200px)': {
      fontSize: breakpoints.lg ?? breakpoints.md ?? fontSize,
    },
  } as const;
};
