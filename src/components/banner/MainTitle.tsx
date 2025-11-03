/**
 * @fileoverview Semantic multi-line heading component for hero banners and carousels.
 * 
 * # MainTitle
 * 
 * A sophisticated heading component that renders multiple lines of semantically correct
 * headings for hero banners, carousels, and landing page headers. Provides automatic
 * text capitalization, flexible styling, and proper accessibility through semantic
 * heading hierarchy.
 * 
 * ## Overview
 * 
 * This component provides:
 * - **Semantic Heading Structure**: Uses PageTitle (h1) and SectionTitle (h2) for proper accessibility
 * - **Multi-line Support**: Renders multiple heading lines with independent styling
 * - **Automatic Capitalization**: Smart text formatting that preserves email addresses
 * - **Flexible Styling**: Per-line and global styling options through slotProps
 * - **Theme Integration**: Leverages typography theme settings and component overrides
 * - **Accessibility Compliance**: Follows WCAG heading hierarchy guidelines
 * 
 * ## Semantic Mapping
 * 
 * - **primary** → `PageTitle` → **h1** (page-level heading)
 * - **secondary** → `SectionTitle` → **h2** (section-level heading)
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import MainTitle from '@/src/components/banner/MainTitle';
 * 
 * function HeroBanner() {
 *   return (
 *     <MainTitle
 *       blocks={[
 *         {
 *           title: "welcome to the future",
 *           type: "primary",
 *         },
 *         {
 *           title: "innovative solutions for modern challenges",
 *           type: "secondary",
 *         },
 *       ]}
 *     />
 *   );
 * }
 * ```
 * 
 * ## Advanced Examples
 * 
 * ### Product Launch Hero
 * ```tsx
 * function ProductLaunchHero() {
 *   return (
 *     <MainTitle
 *       blocks={[
 *         {
 *           title: "iPhone 15 Pro",
 *           type: "primary",
 *           titleProps: {
 *             sx: {
 *               background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 *               backgroundClip: 'text',
 *               WebkitBackgroundClip: 'text',
 *               WebkitTextFillColor: 'transparent',
 *               fontWeight: 800,
 *               letterSpacing: '-0.02em',
 *             }
 *           }
 *         },
 *         {
 *           title: "Titanium. So strong. So light. So Pro.",
 *           type: "secondary",
 *           titleProps: {
 *             color: "text.secondary",
 *             sx: { fontWeight: 300, maxWidth: 600, mx: 'auto' }
 *           }
 *         },
 *         {
 *           title: "Starting at $999",
 *           type: "secondary",
 *           titleProps: {
 *             sx: { 
 *               color: 'primary.main',
 *               fontSize: '1.5rem',
 *               fontWeight: 600,
 *             }
 *           }
 *         },
 *       ]}
 *       slotProps={{
 *         stack: { 
 *           spacing: 3,
 *           alignItems: 'center',
 *           textAlign: 'center'
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ### Service Business Hero
 * ```tsx
 * function ServiceHero() {
 *   return (
 *     <MainTitle
 *       blocks={[
 *         {
 *           title: "expert consulting",
 *           type: "primary",
 *           titleProps: {
 *             sx: {
 *               fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
 *               fontWeight: 700,
 *               lineHeight: 1.1,
 *             }
 *           }
 *         },
 *         {
 *           title: "transform your business with strategic guidance",
 *           type: "secondary",
 *           titleProps: {
 *             sx: {
 *               fontSize: { xs: '1.25rem', md: '1.5rem' },
 *               fontWeight: 400,
 *               color: 'text.secondary',
 *               maxWidth: 700,
 *               lineHeight: 1.4,
 *             }
 *           }
 *         },
 *       ]}
 *       slotProps={{
 *         stack: { spacing: 4 },
 *         title: { 
 *           sx: { textTransform: 'none' } // Override auto-capitalization styling
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ### E-commerce Category Hero
 * ```tsx
 * function CategoryHero() {
 *   return (
 *     <MainTitle
 *       autoCapitalize={false} // Preserve original casing
 *       blocks={[
 *         {
 *           title: "Summer Collection 2024",
 *           type: "primary",
 *           titleProps: {
 *             sx: {
 *               fontFamily: 'serif',
 *               fontWeight: 400,
 *               letterSpacing: '0.05em',
 *               color: 'white',
 *               textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
 *             }
 *           }
 *         },
 *         {
 *           title: "Discover our latest designs crafted for warm weather adventures",
 *           type: "secondary",
 *           titleProps: {
 *             sx: {
 *               color: 'grey.200',
 *               fontWeight: 300,
 *               maxWidth: 600,
 *               textAlign: 'center',
 *               mx: 'auto',
 *             }
 *           }
 *         },
 *         {
 *           title: "Up to 40% Off",
 *           type: "secondary",
 *           titleProps: {
 *             sx: {
 *               backgroundColor: 'error.main',
 *               color: 'white',
 *               px: 3,
 *               py: 1,
 *               borderRadius: 2,
 *               fontSize: '1.25rem',
 *               fontWeight: 700,
 *               display: 'inline-block',
 *               textTransform: 'uppercase',
 *               letterSpacing: '0.1em',
 *             }
 *           }
 *         },
 *       ]}
 *       slotProps={{
 *         stack: { 
 *           spacing: 5,
 *           alignItems: 'center',
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ### About Page Hero with Contact
 * ```tsx
 * function AboutHero() {
 *   return (
 *     <MainTitle
 *       blocks={[
 *         {
 *           title: "building the future together",
 *           type: "primary",
 *         },
 *         {
 *           title: "We're a passionate team of innovators, designers, and engineers committed to creating technology that makes a difference.",
 *           type: "secondary",
 *         },
 *         {
 *           title: "Get in touch: hello@company.com", // Email preserved due to '@'
 *           type: "secondary",
 *           titleProps: {
 *             sx: {
 *               fontSize: '1rem',
 *               '& a': {
 *                 color: 'primary.main',
 *                 textDecoration: 'none',
 *                 '&:hover': {
 *                   textDecoration: 'underline',
 *                 }
 *               }
 *             }
 *           }
 *         },
 *       ]}
 *       slotProps={{
 *         stack: { spacing: 3 },
 *         title: {
 *           sx: { fontSize: { xs: '2rem', md: '3rem' } }
 *         },
 *         subtitle: {
 *           color: "text.secondary",
 *           sx: { maxWidth: 600, lineHeight: 1.6 }
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ### ReactNode Content with Icons
 * ```tsx
 * import { Stack, Chip, Typography } from '@mui/material';
 * import { Star, Verified, TrendingUp } from '@mui/icons-material';
 * 
 * function ReactNodeHero() {
 *   return (
 *     <MainTitle
 *       blocks={[
 *         {
 *           title: (
 *             <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
 *               <Star sx={{ color: 'gold', fontSize: '3rem' }} />
 *               <Typography variant="inherit" component="span">
 *                 Premium Service
 *               </Typography>
 *               <Verified sx={{ color: 'primary.main', fontSize: '3rem' }} />
 *             </Stack>
 *           ),
 *           type: "primary",
 *         },
 *         {
 *           title: (
 *             <Stack spacing={2} alignItems="center">
 *               <Typography variant="inherit" component="span">
 *                 Trusted by over 10,000 customers worldwide
 *               </Typography>
 *               <Stack direction="row" spacing={1}>
 *                 <Chip 
 *                   icon={<TrendingUp />} 
 *                   label="99.9% Uptime" 
 *                   color="success" 
 *                   variant="filled"
 *                 />
 *                 <Chip 
 *                   label="24/7 Support" 
 *                   color="primary" 
 *                   variant="outlined"
 *                 />
 *               </Stack>
 *             </Stack>
 *           ),
 *           type: "secondary",
 *         },
 *       ]}
 *       slotProps={{
 *         stack: { spacing: 4 }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ## Accessibility Features
 * 
 * ### Heading Hierarchy
 * The component enforces proper semantic heading structure:
 * - **primary** blocks use `PageTitle` (h1) for page-level headings
 * - **secondary** blocks use `SectionTitle` (h2) for section-level headings
 * - Only one h1 should appear per page (use secondary for additional lines)
 * 
 * ```tsx
 * // ✅ Correct: One primary (h1) with supporting secondary (h2) lines
 * <MainTitle
 *   blocks={[
 *     { title: "Main Page Heading", type: "primary" },    // h1
 *     { title: "Supporting Information", type: "secondary" }, // h2
 *     { title: "Additional Details", type: "secondary" },     // h2
 *   ]}
 * />
 * 
 * // ❌ Avoid: Multiple primary headings create multiple h1 elements
 * <MainTitle
 *   blocks={[
 *     { title: "First Heading", type: "primary" },   // h1
 *     { title: "Second Heading", type: "primary" },  // h1 - problematic
 *   ]}
 * />
 * ```
 * 
 * ### Text Processing
 * - **Email Preservation**: Addresses containing '@' are not auto-capitalized
 * - **Smart Capitalization**: Word-by-word capitalization for improved readability
 * - **ReactNode Support**: Full React element support for complex content
 * 
 * ## Styling Customization
 * 
 * ### Global Defaults via slotProps
 * ```tsx
 * <MainTitle
 *   blocks={[...]}
 *   slotProps={{
 *     stack: { 
 *       spacing: 5,
 *       alignItems: 'center',
 *       textAlign: 'center'
 *     },
 *     title: {  // Applied to all primary blocks
 *       sx: {
 *         fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
 *         fontWeight: 700,
 *         color: 'primary.main',
 *       }
 *     },
 *     subtitle: {  // Applied to all secondary blocks
 *       color: "text.secondary",
 *       sx: {
 *         fontSize: { xs: '1.25rem', md: '1.5rem' },
 *         fontWeight: 300,
 *         maxWidth: 600,
 *         mx: 'auto',
 *       }
 *     }
 *   }}
 * />
 * ```
 * 
 * ### Per-Line Overrides
 * ```tsx
 * <MainTitle
 *   blocks={[
 *     {
 *       title: "Special Heading",
 *       type: "primary",
 *       titleProps: {  // Overrides global title defaults
 *         sx: {
 *           background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
 *           backgroundClip: 'text',
 *           WebkitBackgroundClip: 'text',
 *           WebkitTextFillColor: 'transparent',
 *         }
 *       }
 *     }
 *   ]}
 * />
 * ```
 * 
 * ## Theme Integration
 * 
 * The component integrates with Material-UI theme system:
 * - Uses `theme.typography` settings for base font properties
 * - Respects `components.MuiTypography.styleOverrides` for global overrides
 * - Supports all Material-UI color tokens and theme values
 * 
 * ```tsx
 * // Theme integration example
 * const theme = createTheme({
 *   typography: {
 *     h1: {
 *       fontSize: '3rem',
 *       fontWeight: 700,
 *       lineHeight: 1.1,
 *     },
 *     h2: {
 *       fontSize: '1.5rem',
 *       fontWeight: 400,
 *       lineHeight: 1.4,
 *     },
 *   },
 *   components: {
 *     MuiTypography: {
 *       styleOverrides: {
 *         h1: {
 *           marginBottom: '1rem',
 *         },
 *         h2: {
 *           color: '#666',
 *         },
 *       },
 *     },
 *   },
 * });
 * ```
 * 
 * ## Best Practices
 * 
 * 1. **Heading Hierarchy**: Use one primary heading per page, secondary for supporting text
 * 2. **Content Length**: Keep primary headings concise, use secondary for longer descriptions
 * 3. **Responsive Design**: Use responsive typography with sx prop fontSize objects
 * 4. **Color Contrast**: Ensure sufficient contrast for accessibility compliance
 * 5. **Performance**: Use React.memo optimization for stable content
 * 6. **Email Handling**: Let auto-capitalization handle email preservation automatically
 * 
 * @since 1.0.0
 */

import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { PageTitle, SectionTitle, type TitleProps } from '../typography/Title';
import { toTitleCase } from '../../lib/text/transform';
type TitleLocalProps = Omit<TitleProps, 'sectionType'>;

/**
 * Configuration for a single heading line within MainTitle.
 * 
 * Defines the content, semantic type, and styling for individual heading blocks.
 * Supports both string content (with automatic capitalization) and React nodes
 * for complex content with icons, formatting, or interactive elements.
 * 
 * @example
 * ```tsx
 * // String content with auto-capitalization
 * const stringBlock: MainTitleBlock = {
 *   title: "welcome to our platform",  // → "Welcome To Our Platform"
 *   type: "primary",
 *   titleProps: {
 *     sx: { fontSize: '3rem', fontWeight: 700 }
 *   }
 * };
 * 
 * // React node content
 * const nodeBlock: MainTitleBlock = {
 *   title: (
 *     <Stack direction="row" spacing={1} alignItems="center">
 *       <Star sx={{ color: 'gold' }} />
 *       <span>Premium Service</span>
 *       <Chip label="New" color="primary" size="small" />
 *     </Stack>
 *   ),
 *   type: "primary",
 * };
 * 
 * // Email preservation example
 * const emailBlock: MainTitleBlock = {
 *   title: "contact us at hello@company.com",  // Email preserved from capitalization
 *   type: "secondary",
 *   titleProps: {
 *     sx: { fontSize: '1rem', color: 'text.secondary' }
 *   }
 * };
 * ```
 */
export type MainTitleBlock = {
  /** 
   * Content to render as the heading.
   * 
   * Supports both string content (which can be auto-capitalized) and React nodes
   * for complex layouts with icons, chips, or custom formatting. When using strings,
   * the component intelligently preserves email addresses during capitalization.
   * 
   * @example
   * ```tsx
   * // String content (auto-capitalized)
   * title: "innovative solutions for modern challenges"
   * 
   * // Email preservation
   * title: "reach us at support@company.com"
   * 
   * // React node with icons
   * title: (
   *   <Stack direction="row" spacing={2} alignItems="center">
   *     <CheckCircle sx={{ color: 'success.main' }} />
   *     <span>Verified Provider</span>
   *   </Stack>
   * )
   * 
   * // Complex formatted content
   * title: (
   *   <>
   *     <Typography variant="inherit" component="span" sx={{ fontWeight: 300 }}>
   *       Introducing
   *     </Typography>
   *     <br />
   *     <Typography variant="inherit" component="span" sx={{ fontWeight: 700 }}>
   *       Next Generation Platform
   *     </Typography>
   *   </>
   * )
   * ```
   */
  title: string | React.ReactNode;
  
  /** 
   * Semantic heading type determining the HTML element and accessibility role.
   * 
   * Maps to semantic wrapper components that render appropriate HTML elements:
   * - 'primary': Uses PageTitle component (renders h1 element)
   * - 'secondary': Uses SectionTitle component (renders h2 element)
   * 
   * For proper accessibility, use only one 'primary' heading per page.
   * 
   * @default 'primary'
   * @example
   * ```tsx
   * type: "primary"    // → PageTitle → h1 (page-level heading)
   * type: "secondary"  // → SectionTitle → h2 (section-level heading)
   * ```
   */
  type?: 'primary' | 'secondary';
  
  /** 
   * Typography component props for styling individual heading blocks.
   * 
   * Accepts all Material-UI Typography props except 'variant' and 'component'
   * (which are controlled by the semantic type). These props override any
   * defaults set via slotProps, providing per-block customization.
   * 
   * @example
   * ```tsx
   * titleProps: {
   *   color: "primary.main",
   *   align: "center",
   *   gutterBottom: true,
   *   sx: {
   *     fontSize: { xs: '2rem', md: '3rem' },
   *     fontWeight: 600,
   *     letterSpacing: '-0.02em',
   *     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
   *     backgroundClip: 'text',
   *     WebkitBackgroundClip: 'text',
   *     WebkitTextFillColor: 'transparent',
   *   }
   * }
   * ```
   */
  titleProps?: TitleLocalProps;
};

/**
 * Props for the MainTitle component.
 * 
 * Configures multi-line heading behavior, automatic text processing,
 * and global styling defaults for consistent hero banner presentations.
 * 
 * @example
 * ```tsx
 * const mainTitleProps: MainTitleProps = {
 *   blocks: [
 *     { title: "main heading", type: "primary" },
 *     { title: "supporting text", type: "secondary" },
 *   ],
 *   autoCapitalize: true,
 *   slotProps: {
 *     stack: { spacing: 4, alignItems: 'center' },
 *     title: { sx: { fontSize: '3rem' } },
 *     subtitle: { color: 'text.secondary' },
 *   },
 * };
 * ```
 */
export type MainTitleProps = {
  /** 
   * Array of heading blocks to render in vertical sequence.
   * 
   * Each block represents a line in the heading hierarchy, rendered from
   * top to bottom. Supports mixing primary and secondary heading types
   * for flexible content structure.
   * 
   * @example
   * ```tsx
   * blocks={[
   *   {
   *     title: "welcome to the future",
   *     type: "primary",
   *     titleProps: { sx: { fontSize: '4rem', fontWeight: 800 } }
   *   },
   *   {
   *     title: "innovative solutions for modern challenges",
   *     type: "secondary",
   *     titleProps: { color: 'text.secondary', sx: { maxWidth: 600 } }
   *   },
   *   {
   *     title: "Get started today",
   *     type: "secondary",
   *     titleProps: { sx: { color: 'primary.main', fontSize: '1.5rem' } }
   *   },
   * ]}
   * ```
   */
  blocks: MainTitleBlock[];
  
  /** 
   * Enable automatic word-by-word capitalization for string titles.
   * 
   * When enabled, string content is automatically converted to title case
   * with intelligent email preservation. Email addresses (containing '@')
   * are left unchanged to maintain proper formatting.
   * 
   * @default true
   * @example
   * ```tsx
   * // With autoCapitalize: true (default)
   * "hello world" → "Hello World"
   * "contact support@company.com" → "Contact Support@company.com"
   * 
   * // With autoCapitalize: false
   * "hello world" → "hello world" (preserved as-is)
   * "iPhone 15 Pro" → "iPhone 15 Pro" (preserved as-is)
   * ```
   */
  autoCapitalize?: boolean;

  /** 
   * Configuration for container and default heading styles.
   * 
   * Provides centralized control over the Stack container and default
   * styling for primary/secondary heading types. Individual block
   * titleProps override these defaults.
   * 
   * @example
   * ```tsx
   * slotProps={{
   *   // Stack container configuration
   *   stack: {
   *     spacing: 5,
   *     alignItems: 'center',
   *     textAlign: 'center',
   *     sx: {
   *       maxWidth: 800,
   *       mx: 'auto',
   *       px: 2,
   *     }
   *   },
   *   
   *   // Default props for all primary blocks (PageTitle/h1)
   *   title: {
   *     sx: {
   *       fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
   *       fontWeight: 700,
   *       lineHeight: 1.1,
   *       letterSpacing: '-0.02em',
   *       color: 'primary.main',
   *     }
   *   },
   *   
   *   // Default props for all secondary blocks (SectionTitle/h2)
   *   subtitle: {
   *     color: 'text.secondary',
   *     sx: {
   *       fontSize: { xs: '1.25rem', md: '1.5rem' },
   *       fontWeight: 400,
   *       lineHeight: 1.4,
   *       maxWidth: 600,
   *       mx: 'auto',
   *     }
   *   }
   * }}
   * ```
   */
  slotProps?: {
    /** 
     * Props for the wrapping Stack component.
     * 
     * Controls spacing, alignment, and layout of the heading blocks.
     * Useful for responsive design and consistent content positioning.
     */
    stack?: StackProps;
    
    /** 
     * Default props applied to all primary heading blocks.
     * 
     * These props are applied to PageTitle components (h1 elements)
     * and can be overridden by individual block titleProps.
     */
    title?: TitleLocalProps;
    
    /** 
     * Default props applied to all secondary heading blocks.
     * 
     * These props are applied to SectionTitle components (h2 elements)
     * and can be overridden by individual block titleProps.
     */
    subtitle?: TitleLocalProps;
  };
};


/**
 * Multi-line semantic heading component for hero banners and landing pages.
 * 
 * Renders a vertical stack of semantically correct headings with automatic text
 * processing, flexible styling, and proper accessibility support. Designed for
 * hero banners, carousels, and prominent page headers requiring multiple heading lines.
 * 
 * ## Semantic Structure
 * 
 * The component enforces proper heading hierarchy through semantic wrapper components:
 * - **primary** blocks → PageTitle → h1 elements (page-level headings)
 * - **secondary** blocks → SectionTitle → h2 elements (section-level headings)
 * 
 * This ensures WCAG-compliant document structure and proper screen reader navigation.
 * 
 * ## Text Processing Features
 * 
 * - **Smart Capitalization**: Automatic title case conversion with email preservation
 * - **ReactNode Support**: Full React element support for complex content layouts
 * - **Email Detection**: Addresses containing '@' bypass auto-capitalization
 * - **Flexible Content**: Mix strings and React nodes within the same component
 * 
 * ## Styling Architecture
 * 
 * Props are merged with the following precedence (highest to lowest):
 * 1. **Individual block titleProps** (highest priority)
 * 2. **slotProps defaults** (title/subtitle)
 * 3. **Component defaults** (lowest priority)
 * 
 * This allows global styling with per-block overrides for maximum flexibility.
 * 
 * @param props - Component configuration
 * @param props.blocks - Array of heading blocks to render top-to-bottom
 * @param props.autoCapitalize - Enable automatic title case conversion (default: true)
 * @param props.slotProps - Container and default styling configuration
 * 
 * @returns Stack of semantically correct heading elements
 * 
 * @since 1.0.0
 */
const MainTitle: React.FC<MainTitleProps> = ({
  blocks,
  autoCapitalize = true,
  slotProps,
}) => {
  return (
    <Stack spacing={4} {...slotProps?.stack} >
      {blocks.map((block, index) => {
        const content =
          typeof block.title === 'string' && autoCapitalize
            ? toTitleCase(block.title)
            : block.title;

        const isPrimary = (block.type ?? 'primary') === 'primary';

        const Component = isPrimary ? PageTitle : SectionTitle;
        const defaults = isPrimary ? slotProps?.title : slotProps?.subtitle;

        const componentProps = { ...defaults, ...block?.titleProps };

        return (
          <Component key={`main-title-${index}`} {...componentProps}>
            {content}
          </Component>
        );
      })}
    </Stack>
  );
};

export default React.memo(MainTitle);
