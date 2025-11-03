/**
 * @fileoverview Site theme creation utility with responsive typography scaling.
 * 
 * # Create Site Theme
 * 
 * Advanced theme factory that combines base theme options with custom presets
 * and overrides, automatically applying responsive font scaling for optimal
 * readability across all screen sizes.
 * 
 * ## Overview
 * 
 * This utility provides:
 * - **Base Theme Integration**: Starts with consistent foundation styling
 * - **Preset Support**: Apply pre-configured theme variations (dark mode, brand themes, etc.)
 * - **Custom Overrides**: Fine-tune specific theme properties
 * - **Responsive Typography**: Automatic font scaling based on screen size
 * - **Deep Merging**: Intelligent combination of theme configurations
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import { ThemeProvider } from '@mui/material/styles';
 * import { createSiteTheme } from '@/src/theme/createSiteTheme';
 * 
 * // Use default configuration
 * const theme = createSiteTheme();
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
 * ## Advanced Examples
 * 
 * ### Custom Brand Theme
 * ```tsx
 * const brandTheme = createSiteTheme({
 *   overrides: {
 *     palette: {
 *       primary: { main: '#0066cc' },
 *       secondary: { main: '#ff6b35' },
 *     },
 *     typography: {
 *       fontFamily: '"Inter", "Roboto", sans-serif',
 *     },
 *   },
 * });
 * ```
 * 
 * ### Dark Mode Theme
 * ```tsx
 * const darkModePreset = {
 *   palette: {
 *     mode: 'dark' as const,
 *     background: { default: '#121212', paper: '#1e1e1e' },
 *     text: { primary: '#ffffff', secondary: '#b3b3b3' },
 *   },
 * };
 * 
 * const darkTheme = createSiteTheme({
 *   preset: darkModePreset,
 *   responsiveFactor: 2.8, // More aggressive scaling for dark mode
 * });
 * ```
 * 
 * ### Complete Typography System
 * ```tsx
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 * 
 * const typographyTheme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       h1: generateTypographyVariant({
 *         fontSize: '2rem',
 *         fontWeight: 700,
 *         lineHeight: 1.1,
 *         breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' },
 *       }),
 *       h2: generateTypographyVariant({
 *         fontSize: '1.75rem',
 *         fontWeight: 600,
 *         breakpoints: { sm: '2rem', md: '2.5rem' },
 *       }),
 *       body1: {
 *         fontSize: '1rem',
 *         lineHeight: 1.6,
 *         '@media (min-width:900px)': {
 *           fontSize: '1.125rem',
 *         },
 *       },
 *     },
 *   },
 * });
 * ```
 * 
 * ## Theme Layering System
 * 
 * The function applies themes in this order (left→right):
 * 1. **Base Theme**: Foundation styling from `baseThemeOptions`
 * 2. **Preset**: Pre-configured theme variation (optional)
 * 3. **Overrides**: Custom modifications (optional)
 * 4. **Responsive Scaling**: Automatic font size adjustments
 * 
 * ```tsx
 * // Example of layering
 * const layeredTheme = createSiteTheme({
 *   preset: darkModePreset,        // Applied second
 *   overrides: {                   // Applied third (highest priority)
 *     palette: {
 *       primary: { main: '#custom-color' },
 *     },
 *   },
 *   responsiveFactor: 2.6,         // Applied last
 * });
 * ```
 * 
 * ## Responsive Typography Scaling
 * 
 * The `responsiveFactor` controls how aggressively typography scales:
 * - **1.0-2.0**: Conservative scaling (minimal changes)
 * - **2.4**: Default balanced scaling
 * - **2.8-3.5**: Aggressive scaling (dramatic size changes)
 * - **4.0+**: Very aggressive (use with caution)
 * 
 * ```tsx
 * // Conservative scaling for content-heavy sites
 * const contentTheme = createSiteTheme({
 *   responsiveFactor: 2.0,
 * });
 * 
 * // Aggressive scaling for marketing sites
 * const marketingTheme = createSiteTheme({
 *   responsiveFactor: 3.2,
 * });
 * ```
 * 
 * ## Integration with Design System
 * 
 * ```tsx
 * import { createSiteTheme } from '@/src/theme/createSiteTheme';
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 * 
 * // Define reusable presets
 * export const lightThemePreset = {
 *   palette: {
 *     mode: 'light' as const,
 *     primary: { main: '#1976d2' },
 *     secondary: { main: '#9c27b0' },
 *   },
 * };
 * 
 * export const darkThemePreset = {
 *   palette: {
 *     mode: 'dark' as const,
 *     primary: { main: '#90caf9' },
 *     secondary: { main: '#ce93d8' },
 *     background: { default: '#121212', paper: '#1e1e1e' },
 *   },
 * };
 * 
 * // Create themed instances
 * export const lightTheme = createSiteTheme({
 *   preset: lightThemePreset,
 *   overrides: {
 *     typography: {
 *       h1: generateTypographyVariant({
 *         fontSize: '2rem',
 *         fontWeight: 700,
 *         breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' },
 *       }),
 *     },
 *   },
 * });
 * 
 * export const darkTheme = createSiteTheme({
 *   preset: darkThemePreset,
 *   responsiveFactor: 2.8,
 * });
 * ```
 * 
 * ## Next.js Font Integration
 * 
 * For optimal performance and reduced layout shift, use Next.js font optimization
 * with Google Fonts or other web fonts. The theme function works seamlessly with
 * Next.js font loading strategies.
 * 
 * ### Basic Google Fonts Setup
 * ```tsx
 * // app/layout.tsx or pages/_app.tsx
 * import { Inter, Roboto_Slab } from 'next/font/google';
 * import { createSiteTheme } from '@/src/theme/createSiteTheme';
 * 
 * // Configure fonts
 * const inter = Inter({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-inter',
 * });
 * 
 * const robotoSlab = Roboto_Slab({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-roboto-slab',
 * });
 * 
 * // Create theme with Next.js fonts
 * const theme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       fontFamily: `${inter.style.fontFamily}, system-ui, sans-serif`,
 *     },
 *   },
 * });
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
 *       <body>
 *         <ThemeProvider theme={theme}>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 * 
 * ### Advanced Font Configuration
 * ```tsx
 * import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
 * 
 * // Primary font for body text
 * const inter = Inter({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-inter',
 * });
 * 
 * // Display font for headings
 * const playfair = Playfair_Display({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-playfair',
 * });
 * 
 * // Monospace font for code
 * const jetbrains = JetBrains_Mono({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-mono',
 * });
 * 
 * const theme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       // Default body font
 *       fontFamily: `${inter.style.fontFamily}, system-ui, sans-serif`,
 *       
 *       // Heading fonts
 *       h1: {
 *         fontFamily: `${playfair.style.fontFamily}, serif`,
 *         fontWeight: 600,
 *       },
 *       h2: {
 *         fontFamily: `${playfair.style.fontFamily}, serif`,
 *         fontWeight: 500,
 *       },
 *       
 *       // Code font
 *       code: {
 *         fontFamily: `${jetbrains.style.fontFamily}, 'Courier New', monospace`,
 *       },
 *     },
 *     components: {
 *       MuiCode: {
 *         styleOverrides: {
 *           root: {
 *             fontFamily: `${jetbrains.style.fontFamily}, 'Courier New', monospace`,
 *           },
 *         },
 *       },
 *     },
 *   },
 * });
 * ```
 * 
 * ### CSS Variables with Next.js Fonts
 * ```tsx
 * // Using CSS variables for dynamic font switching
 * const inter = Inter({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-sans',
 * });
 * 
 * const playfair = Playfair_Display({
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-serif',
 * });
 * 
 * const theme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       fontFamily: 'var(--font-sans), system-ui, sans-serif',
 *       h1: {
 *         fontFamily: 'var(--font-serif), serif',
 *       },
 *       h2: {
 *         fontFamily: 'var(--font-serif), serif',
 *       },
 *     },
 *   },
 * });
 * 
 * // In your HTML
 * <html className={`${inter.variable} ${playfair.variable}`}>
 *   <body>
 *     <ThemeProvider theme={theme}>
 *       {children}
 *     </ThemeProvider>
 *   </body>
 * </html>
 * ```
 * 
 * ### Integration with Typography Scale
 * ```tsx
 * import { generateTypographyVariant } from '@/src/theme/typographyScale';
 * 
 * const theme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       fontFamily: `${inter.style.fontFamily}, system-ui, sans-serif`,
 *       
 *       h1: generateTypographyVariant({
 *         fontSize: '2rem',
 *         fontWeight: 700,
 *         fontFamily: `${playfair.style.fontFamily}, serif`,
 *         breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' },
 *       }),
 *       
 *       h2: generateTypographyVariant({
 *         fontSize: '1.75rem',
 *         fontWeight: 600,
 *         fontFamily: `${playfair.style.fontFamily}, serif`,
 *         breakpoints: { sm: '2rem', md: '2.5rem' },
 *       }),
 *       
 *       body1: generateTypographyVariant({
 *         fontSize: '1rem',
 *         fontWeight: 400,
 *         lineHeight: 1.6,
 *         breakpoints: { md: '1.125rem' },
 *       }),
 *     },
 *   },
 * });
 * ```
 * 
 * ### Font Loading Best Practices
 * 
 * 1. **Use `display: 'swap'`**: Prevents invisible text during font loading
 * 2. **Subset Selection**: Only load character sets you need (e.g., 'latin')
 * 3. **Weight Optimization**: Specify only required font weights
 * 4. **Variable Fonts**: Consider variable fonts for weight flexibility
 * 5. **Fallback Fonts**: Always provide system font fallbacks
 * 
 * ```tsx
 * // Optimized font configuration
 * const inter = Inter({
 *   subsets: ['latin'],           // Only Latin characters
 *   weight: ['400', '500', '600'], // Only needed weights
 *   display: 'swap',              // Show fallback during load
 *   preload: true,               // Preload for critical text
 * });
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Preset Organization**: Create reusable preset objects for common theme variations
 * 2. **Override Specificity**: Use overrides for site-specific customizations only
 * 3. **Responsive Factor**: Test different values to find optimal scaling for your content
 * 4. **Performance**: Avoid creating themes in render functions - create once and reuse
 * 5. **Testing**: Verify themes across different screen sizes and accessibility requirements
 * 6. **Consistency**: Maintain consistent spacing and color relationships across presets
 * 
 * ## Common Patterns
 * 
 * ### Theme Switching (Light/Dark)
 * ```tsx
 * const [isDark, setIsDark] = useState(false);
 * 
 * const currentTheme = useMemo(() => {
 *   return createSiteTheme({
 *     preset: isDark ? darkThemePreset : lightThemePreset,
 *   });
 * }, [isDark]);
 * ```
 * 
 * ### Conditional Responsive Scaling
 * ```tsx
 * const isMobile = useMediaQuery('(max-width:600px)');
 * 
 * const responsiveTheme = useMemo(() => {
 *   return createSiteTheme({
 *     responsiveFactor: isMobile ? 2.0 : 2.8,
 *   });
 * }, [isMobile]);
 * ```
 * 
 * @since 1.0.0
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { baseThemeOptions } from './baseThemeOptions';

/**
 * Configuration options for creating a customized site theme.
 * 
 * Provides flexible theme composition through layered configurations
 * and responsive typography scaling controls.
 * 
 * @example
 * ```tsx
 * const options: CreateSiteThemeOptions = {
 *   preset: darkModePreset,
 *   overrides: {
 *     palette: { primary: { main: '#custom-blue' } }
 *   },
 *   responsiveFactor: 2.8
 * };
 * ```
 */
export type CreateSiteThemeOptions = {
  /** 
   * Pre-configured theme variation to apply as a base layer.
   * 
   * Presets are applied after the base theme but before overrides,
   * making them ideal for reusable theme variations like dark mode,
   * brand themes, or component library presets.
   * 
   * @example
   * ```tsx
   * const darkPreset = {
   *   palette: {
   *     mode: 'dark' as const,
   *     background: { default: '#121212', paper: '#1e1e1e' }
   *   }
   * };
   * ```
   */
  preset?: ThemeOptions;
  
  /** 
   * Site-specific theme customizations with highest priority.
   * 
   * Overrides are applied last in the theme layering system,
   * allowing for fine-tuned customizations that take precedence
   * over both base theme and preset configurations.
   * 
   * @example
   * ```tsx
   * const overrides = {
   *   typography: {
   *     fontFamily: '"Custom Font", sans-serif'
   *   },
   *   components: {
   *     MuiButton: {
   *       styleOverrides: { root: { borderRadius: 8 } }
   *     }
   *   }
   * };
   * ```
   */
  overrides?: ThemeOptions;
  
  /** 
   * Controls the aggressiveness of responsive font scaling.
   * 
   * Higher values create more dramatic font size changes between
   * breakpoints. Lower values provide more conservative scaling.
   * 
   * @default 2.4
   * @example
   * ```tsx
   * // Conservative scaling for content sites
   * responsiveFactor: 2.0
   * 
   * // Aggressive scaling for marketing sites  
   * responsiveFactor: 3.2
   * ```
   */
  responsiveFactor?: number;
};

/**
 * Create a fully configured Material-UI theme with responsive typography.
 * 
 * Combines base theme options with optional presets and overrides using
 * Material-UI's deep merge strategy, then applies responsive font scaling
 * for optimal readability across all screen sizes.
 * 
 * ## Theme Layering Order
 * 
 * 1. **Base Theme**: Foundation from `baseThemeOptions`
 * 2. **Preset**: Pre-configured variation (if provided)
 * 3. **Overrides**: Custom modifications (if provided)
 * 4. **Responsive Scaling**: Applied to final merged theme
 * 
 * Each layer is deep-merged with the previous, allowing for precise
 * control over theme inheritance and customization.
 * 
 * @param opts - Configuration options for theme creation
 * @param opts.preset - Pre-configured theme variation to apply
 * @param opts.overrides - Site-specific customizations with highest priority
 * @param opts.responsiveFactor - Controls font scaling aggressiveness (default: 2.4)
 * 
 * @returns Complete Material-UI theme with responsive typography
 * 
 * @example
 * ```tsx
 * // Basic usage with defaults
 * const theme = createSiteTheme();
 * ```
 * 
 * @example
 * ```tsx
 * // Dark mode with custom branding
 * const darkTheme = createSiteTheme({
 *   preset: {
 *     palette: {
 *       mode: 'dark',
 *       primary: { main: '#90caf9' },
 *       background: { default: '#121212', paper: '#1e1e1e' }
 *     }
 *   },
 *   overrides: {
 *     typography: {
 *       fontFamily: '"Inter", "Roboto", sans-serif'
 *     }
 *   },
 *   responsiveFactor: 2.8
 * });
 * ```
 * 
 * @example
 * ```tsx
 * // Integration with typography scale utility
 * import { generateTypographyVariant } from './typographyScale';
 * 
 * const scaledTheme = createSiteTheme({
 *   overrides: {
 *     typography: {
 *       h1: generateTypographyVariant({
 *         fontSize: '2rem',
 *         fontWeight: 700,
 *         breakpoints: { sm: '2.5rem', md: '3rem', lg: '4rem' }
 *       }),
 *       h2: generateTypographyVariant({
 *         fontSize: '1.75rem',
 *         fontWeight: 600,
 *         breakpoints: { sm: '2rem', md: '2.5rem' }
 *       })
 *     }
 *   }
 * });
 * ```
 * 
 * @example
 * ```tsx
 * // Complete theme system with presets
 * const brandPreset = {
 *   palette: {
 *     primary: { main: '#0066cc', contrastText: '#ffffff' },
 *     secondary: { main: '#ff6b35', contrastText: '#ffffff' }
 *   },
 *   shape: { borderRadius: 8 }
 * };
 * 
 * const theme = createSiteTheme({
 *   preset: brandPreset,
 *   overrides: {
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: {
 *             textTransform: 'uppercase',
 *             fontWeight: 600
 *           }
 *         }
 *       }
 *     }
 *   },
 *   responsiveFactor: 2.6
 * });
 * ```
 * 
 * ## Responsive Factor Guidelines
 * 
 * - **1.0-2.0**: Conservative scaling, minimal size changes
 * - **2.4**: Default balanced scaling (recommended)
 * - **2.8-3.5**: Aggressive scaling for marketing/landing pages
 * - **4.0+**: Very aggressive, use sparingly
 * 
 * ## Performance Considerations
 * 
 * - Create themes once and reuse them to avoid unnecessary re-computations
 * - Use `useMemo` when creating themes conditionally in React components
 * - Consider theme caching for applications with multiple theme variations
 * 
 * @since 1.0.0
 */
export function createSiteTheme(opts: CreateSiteThemeOptions = {}) {
  const { preset, overrides, responsiveFactor = 2.4 } = opts;

  // createTheme will deep-merge left→right
  let theme = createTheme(
    baseThemeOptions,
    preset ?? {},
    overrides ?? {}
  );

  theme = responsiveFontSizes(theme, { factor: responsiveFactor });
  return theme;
}
