/**
 * @fileoverview Base Material-UI theme configuration for the web blocks library.
 * 
 * # Base Theme Options
 * 
 * Foundation theme configuration that establishes design system defaults for
 * Material-UI components. Provides consistent styling, spacing, and component
 * behavior across the entire application.
 * 
 * ## Overview
 * 
 * This base theme defines:
 * - **Color Palette**: Primary, secondary, and background colors
 * - **Typography**: System font stack with optimal fallbacks
 * - **Shape**: Consistent border radius values
 * - **CSS Variables**: Global layout and spacing tokens
 * - **Component Overrides**: Default styling for MUI components
 * 
 * ## Usage
 * 
 * ```tsx
 * import { createTheme, ThemeProvider } from '@mui/material/styles';
 * import { baseThemeOptions } from '@/src/theme/baseThemeOptions';
 * 
 * // Use as-is
 * const theme = createTheme(baseThemeOptions);
 * 
 * // Extend with custom options
 * const customTheme = createTheme({
 *   ...baseThemeOptions,
 *   palette: {
 *     ...baseThemeOptions.palette,
 *     primary: { main: '#2563eb' }, // Override primary color
 *   },
 * });
 * 
 * function App() {
 *   return (
 *     <ThemeProvider theme={theme}>
 *       <YourApplication />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * ## Integration with Typography Scale
 * 
 * ```tsx
 * import { createTheme } from '@mui/material/styles';
 * import { baseThemeOptions } from '@/src/theme/baseThemeOptions';
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 * 
 * const theme = createTheme({
 *   ...baseThemeOptions,
 *   typography: {
 *     ...baseThemeOptions.typography,
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
 * ```
 * 
 * ## CSS Custom Properties
 * 
 * The theme defines global CSS variables for consistent layout:
 * 
 * ```css
 * :root {
 *   --block-h: clamp(420px, 35vh, 600px);     // Block height constraint
 *   --section-gap: clamp(32px, 5vh, 64px);   // Section spacing
 *   --container-pad: clamp(16px, 3vw, 32px); // Container padding
 * }
 * ```
 * 
 * These can be used in styled components:
 * 
 * ```tsx
 * import { styled } from '@mui/material/styles';
 * 
 * const Section = styled('section')({
 *   minHeight: 'var(--block-h)',
 *   marginBottom: 'var(--section-gap)',
 *   padding: 'var(--container-pad)',
 * });
 * ```
 * 
 * ## Customization Examples
 * 
 * ### Dark Mode Support
 * ```tsx
 * const darkThemeOptions = {
 *   ...baseThemeOptions,
 *   palette: {
 *     ...baseThemeOptions.palette,
 *     mode: 'dark' as const,
 *     background: { default: '#121212', paper: '#1e1e1e' },
 *   },
 * };
 * ```
 * 
 * ### Custom Brand Colors
 * ```tsx
 * const brandThemeOptions = {
 *   ...baseThemeOptions,
 *   palette: {
 *     ...baseThemeOptions.palette,
 *     primary: { 
 *       main: '#0066cc', 
 *       contrastText: '#ffffff' 
 *     },
 *     secondary: { 
 *       main: '#ff6b35', 
 *       contrastText: '#ffffff' 
 *     },
 *   },
 * };
 * ```
 * 
 * ### Enhanced Typography
 * ```tsx
 * const typographyThemeOptions = {
 *   ...baseThemeOptions,
 *   typography: {
 *     ...baseThemeOptions.typography,
 *     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
 *     h1: { fontSize: '2.5rem', fontWeight: 700 },
 *     h2: { fontSize: '2rem', fontWeight: 600 },
 *     body1: { fontSize: '1rem', lineHeight: 1.6 },
 *   },
 * };
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Extension Over Replacement**: Extend the base theme rather than replacing it entirely
 * 2. **Consistent Spacing**: Use the provided CSS variables for layout consistency
 * 3. **Accessibility**: Maintain sufficient contrast ratios when customizing colors
 * 4. **Performance**: Avoid deep theme mutations that could impact render performance
 * 5. **Testing**: Verify theme changes across light/dark modes and different screen sizes
 * 
 * @since 1.0.0
 */

import type { ThemeOptions } from '@mui/material/styles';

/**
 * Base Material-UI theme configuration object.
 * 
 * Provides foundation styling and design tokens for consistent application theming.
 * This configuration can be used directly or extended with additional customizations.
 * 
 * @example
 * ```tsx
 * import { createTheme } from '@mui/material/styles';
 * import { baseThemeOptions } from '@/src/theme/baseThemeOptions';
 * 
 * const theme = createTheme(baseThemeOptions);
 * ```
 */
export const baseThemeOptions: ThemeOptions = {
  /**
   * Color palette configuration.
   * 
   * Defines the primary color scheme, background colors, and contrast ratios
   * for optimal accessibility and brand consistency.
   */
  palette: {
    /** Theme mode - supports 'light' or 'dark' */
    mode: 'light',
    
    /** 
     * Primary brand color used for main actions and emphasis.
     * Uses Material Design Blue 600 (#1976d2) with white contrast text.
     */
    primary: { main: '#1976d2', contrastText: '#fff' },
    
    /** 
     * Secondary accent color for supporting actions and highlights.
     * Uses Material Design Purple 600 (#9c27b0) with white contrast text.
     */
    secondary: { main: '#9c27b0', contrastText: '#fff' },
    
    /** 
     * Background colors for surfaces and default page background.
     * Both default and paper surfaces use pure white for clean appearance.
     */
    background: { default: '#fff', paper: '#fff' },
  },
  
  /**
   * Global shape configuration.
   * 
   * Sets consistent border radius for cards, buttons, and other components.
   * 12px provides a modern, friendly appearance without being too rounded.
   */
  shape: { borderRadius: 12 },
  
  /**
   * Typography configuration.
   * 
   * Uses system font stack for optimal performance and platform consistency.
   * Falls back gracefully across different operating systems.
   */
  typography: {
    /**
     * Font family stack prioritizing system fonts.
     * - system-ui: Uses the OS default UI font
     * - -apple-system: macOS San Francisco font
     * - Segoe UI: Windows system font
     * - Roboto: Android/Chrome OS font
     * - sans-serif: Generic fallback
     */
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  },
  
  /**
   * Component-specific style overrides.
   * 
   * Customizes default Material-UI component behavior and appearance
   * to match design system requirements.
   */
  components: {
    /**
     * CSS Baseline overrides.
     * 
     * Injects global CSS variables into the document root for consistent
     * layout spacing and responsive design patterns.
     */
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          /**
           * Block height constraint using fluid sizing.
           * Min: 420px, Preferred: 35vh, Max: 600px
           * Ensures consistent section heights across screen sizes.
           */
          '--block-h': 'clamp(420px, 35vh, 600px)',
          
          /**
           * Section gap spacing using fluid sizing.
           * Min: 32px, Preferred: 5vh, Max: 64px
           * Provides consistent vertical rhythm between sections.
           */
          '--section-gap': 'clamp(32px, 5vh, 64px)',
          
          /**
           * Container padding using fluid sizing.
           * Min: 16px, Preferred: 3vw, Max: 32px
           * Ensures consistent horizontal spacing in containers.
           */
          '--container-pad': 'clamp(16px, 3vw, 32px)',
        },
      },
    },
    
    /**
     * Button component overrides.
     * 
     * Removes uppercase text transformation and applies pill-shaped
     * border radius for modern, friendly button appearance.
     */
    MuiButton: {
      styleOverrides: { 
        root: { 
          /** Preserves original button text casing */
          textTransform: 'none', 
          /** Creates pill-shaped buttons with maximum border radius */
          borderRadius: 999 
        } 
      },
    },
  },
};
