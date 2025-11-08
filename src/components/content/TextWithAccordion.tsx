// ============================================================================
// FLEXIBLE CONTENT RENDERER WITH ACCORDION SUPPORT
// ============================================================================

/**
 * @fileoverview TextWithAccordion - Flexible Multi-Block Content Renderer
 * 
 * A sophisticated content composition system that renders structured content blocks
 * including paragraphs, headings, lists, and collapsible accordion sections. Perfect
 * for documentation, FAQ sections, feature descriptions, and any content that benefits
 * from hierarchical organization with progressive disclosure.
 * 
 * **Core Architecture:**
 * - **Block-Based System**: Composable content blocks with type safety
 * - **Markdown Integration**: Inline markdown parsing for rich text formatting
 * - **Accordion Support**: Collapsible sections for content organization
 * - **List Management**: Flexible bullet lists with customizable styling
 * - **Typography Integration**: Seamless integration with design system typography
 * 
 * **Key Features:**
 * - **Type-Safe Blocks**: Discriminated unions ensure correct prop usage
 * - **Accessibility First**: ARIA attributes and semantic HTML structure
 * - **Performance Optimized**: React.memo and efficient re-render patterns
 * - **Framework Agnostic**: Link component abstraction for any routing system
 * - **Responsive Design**: Mobile-first approach with consistent spacing
 * 
 * **Design Patterns:**
 * - **Progressive Disclosure**: Accordions reveal details on demand
 * - **Content Hierarchy**: Clear heading levels with proper semantic structure
 * - **Visual Consistency**: Standardized spacing and typography scaling
 * - **Flexible Composition**: Mix and match content types as needed
 * 
 * @author MCPAB Web Blocks
 * @version 1.0.0
 * @since 2024
 */

'use client';

// ============================================================================
// IMPORTS AND DEPENDENCIES
// ============================================================================

import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { StandardStack, type StandardStackProps } from '../styled';
import {
    SectionTitle,
    SubsubsectionTitle,
    type TitleProps,
    type BodyTextProps,
} from '../typography';
import type { LinkTypeComponent} from '../../core/link';
import {parseInlineMarkdown} from '../../lib/text';

// ============================================================================
// BLOCK TYPE DEFINITIONS
// ============================================================================

/**
 * Paragraph block configuration for text content rendering
 * 
 * Supports both plain text processing through inline markdown parsing
 * and custom React node rendering for complex content requirements.
 * 
 * @interface PType
 */

/**
 * @packageDocumentation
 *
 * # TextWithAccordion
 *
 * A tiny “copy + FAQs” renderer that understands four block types:
 * - `p`          → paragraph (string processed via `mdInlineToNodes`, or pass a custom `node`)
 * - `h`          → heading (uses your `<SectionTitle>` / `<SubsubsectionTitle>` wrappers)
 * - `list`       → bullet list (items can be strings, React nodes, or `{ text, props }` objects)
 * - `accordion`  → collapsible group of nested blocks
 *
 * ## Typing highlights
 * - Paragraph props use **BodyTextProps** (Typography sans `variant`/`component`).
 * - Heading props use **Omit<TitleProps, 'sectionType'>** (semantic level is locked by the wrapper).
 * - List item bullets use `bgcolor` tokens (typed as `BoxProps['bgcolor']`).
 *
 * ## Accessibility
 * - Accordion summary uses **SectionTitleLabel** (visual size mapped to heading level) to avoid
 *   rendering an actual `<h*>` inside a button. Your document outline remains clean.
 */

type PType = {
    /** Block type identifier for paragraph content */
    type: 'p';
    
    /** 
     * Plain text content to be processed through inline markdown parser
     * 
     * Supports standard markdown formatting like **bold**, *italic*, 
     * and [links](url) for rich text presentation.
     * 
     * @example
     * text: "This is **bold** text with a [link](https://example.com)"
     */
    text: string;
    
    /** 
     * Optional typography props for paragraph styling
     * 
     * Extends BodyTextProps while excluding variant and component props
     * which are controlled by the component for consistency.
     * 
     * @example
     * props: { color: 'text.secondary', sx: { fontStyle: 'italic' } }
     */
    props?: BodyTextProps;
    
    /** 
     * Custom React node to render instead of processed text
     * 
     * When provided, bypasses text processing and renders the custom
     * content directly. Useful for complex layouts or embedded components.
     * 
     * @example
     * node: <CustomAlert severity="info">Important notice</CustomAlert>
     */
    node?: React.ReactNode;
};

/**
 * Heading block configuration for section titles and subtitles
 * 
 * Renders semantic headings using the design system's typography components
 * with proper heading hierarchy and consistent visual styling.
 * 
 * @interface HType
 */
type HType = {
    /** Block type identifier for heading content */
    type: 'h';
    
    /** 
     * Heading text content with inline markdown support
     * 
     * Processed through inline markdown parser to support formatting
     * like **bold** and *italic* text within headings.
     * 
     * @example
     * text: "**Important** Section Title"
     */
    text: string;
    
    /** 
     * Heading hierarchy level for semantic structure
     * 
     * Controls both visual appearance and semantic HTML heading level:
     * - 'title': Renders as SectionTitle (typically h2)
     * - 'subtitle': Renders as SubsubsectionTitle (typically h4)
     * 
     * @defaultValue 'title'
     * 
     * @example
     * variant: 'title'    // Primary section heading
     * variant: 'subtitle' // Secondary section heading
     */
    variant?: 'title' | 'subtitle';
    
    /** 
     * Additional props for heading component styling
     * 
     * Extends TitleProps while excluding sectionType which is controlled
     * by the variant selection for proper semantic structure.
     * 
     * @example
     * props: { color: 'primary.main', sx: { textAlign: 'center' } }
     */
    props?: Omit<TitleProps, 'sectionType'>;
};

/**
 * Flexible list item type supporting multiple content patterns
 * 
 * Provides ergonomic API for different list item content types while
 * maintaining type safety and consistent rendering behavior.
 * 
 * @typedef ListItem
 * 
 * @example
 * // Simple string items
 * items: ["First item", "Second item"]
 * 
 * @example
 * // Mixed content with custom components
 * items: [
 *   "Simple text",
 *   <CustomComponent />,
 *   { text: "Styled text", props: { color: 'primary.main' } }
 * ]
 * 
 * @example
 * // Tuple syntax for styled items
 * items: [
 *   ["Important item", { fontWeight: 'bold' }],
 *   ["Secondary item", { color: 'text.secondary' }]
 * ]
 */
type ListItem =
    | string                                          // Simple text content
    | React.ReactNode                                 // Custom React components
    | { text: string; props?: BodyTextProps }        // Object with text and styling
    | [text: string, props: BodyTextProps];          // Tuple syntax for convenience

/**
 * Unified content block type for flexible content composition
 * 
 * Discriminated union supporting all content block types with type safety.
 * Each block type has specific props and rendering behavior while maintaining
 * a consistent interface for content management.
 * 
 * @typedef TextWithAccordionBlock
 * 
 * @example
 * // Mixed content structure
 * const blocks: TextWithAccordionBlock[] = [
 *   { type: 'h', text: 'Section Title', variant: 'title' },
 *   { type: 'p', text: 'Introduction paragraph with **formatting**' },
 *   { type: 'list', items: ['Item 1', 'Item 2'], bulletColor: 'primary.main' },
 *   { 
 *     type: 'accordion', 
 *     title: 'FAQ Section',
 *     blocks: [
 *       { type: 'p', text: 'Answer content...' }
 *     ]
 *   }
 * ]
 */
export type TextWithAccordionBlock =
    | PType
    | HType
    | { 
        /** Block type identifier for list content */
        type: 'list'; 
        
        /** Array of list items in various supported formats */
        items: ListItem[]; 
        
        /** 
         * Custom bullet color using Material-UI theme tokens
         * 
         * Supports theme palette colors, system colors, and custom hex values
         * for flexible visual customization of list bullets.
         * 
         * @defaultValue 'text.primary'
         * 
         * @example
         * bulletColor: 'primary.main'     // Theme primary color
         * bulletColor: 'success.light'    // Theme success light variant
         * bulletColor: '#ff5722'          // Custom hex color
         */
        bulletColor?: BoxProps['bgcolor']; 
      }
    | { 
        /** Block type identifier for accordion content */
        type: 'accordion'; 
        
        /** 
         * Accordion section title displayed in the summary
         * 
         * Text content for the clickable accordion header that controls
         * expansion/collapse of the nested content blocks.
         * 
         * @example
         * title: "Frequently Asked Questions"
         */
        title: string; 
        
        /** 
         * Heading level for accordion title styling
         * 
         * Controls visual hierarchy of the accordion title within the
         * document structure for proper semantic organization.
         * 
         * @defaultValue 'title'
         */
        variant?: 'title' | 'subtitle'; 
        
        /** Additional styling props for accordion title */
        props?: Omit<TitleProps, 'sectionType'>; 
        
        /** 
         * Nested content blocks within the accordion
         * 
         * Supports all block types including nested accordions for
         * complex hierarchical content organization.
         * 
         * @example
         * blocks: [
         *   { type: 'p', text: 'Answer to the question...' },
         *   { type: 'list', items: ['Point 1', 'Point 2'] }
         * ]
         */
        blocks: TextWithAccordionBlock[] 
      };

// ============================================================================
// MAIN COMPONENT PROPS INTERFACE
// ============================================================================

/**
 * Props configuration for TextWithAccordion component
 * 
 * Defines the interface for creating flexible content compositions with
 * structured blocks, consistent spacing, and framework-agnostic linking.
 * 
 * @interface TextWithAccordionProps
 */
export type TextWithAccordionProps = {
    /** 
     * Spacing configuration from StandardStack component
     * 
     * Controls vertical spacing between content blocks for visual hierarchy
     * and reading flow optimization.
     * 
     * @defaultValue 'compact'
     * 
     * @example
     * size: 'compact'  // Tight spacing for dense content
     * size: 'regular'  // Standard spacing for most content
     * size: 'loose'    // Generous spacing for emphasis
     */
    size?: StandardStackProps['size'];
    
    /** 
     * Array of content blocks to render in sequence
     * 
     * Each block is processed according to its type with appropriate
     * styling and behavior. Supports nesting for complex layouts.
     * 
     * @example
     * blocks: [
     *   { type: 'h', text: 'Main Title' },
     *   { type: 'p', text: 'Introduction content...' },
     *   { type: 'accordion', title: 'Details', blocks: [...] }
     * ]
     */
    blocks: TextWithAccordionBlock[];
    
    /** 
     * Optional prefix for stable React keys
     * 
     * Used when embedding multiple TextWithAccordion components to
     * ensure unique keys and proper React reconciliation.
     * 
     * @example
     * path: 'section-1'  // Keys become 'section-1.0', 'section-1.1', etc.
     */
    path?: string;

    /**
     * Framework-agnostic link component for URL handling
     * 
     * Enables integration with any routing system (Next.js Link, React Router,
     * etc.) while maintaining consistent link behavior across the application.
     * 
     * @example
     * LinkComponent: NextLink      // Next.js Link component
     * LinkComponent: ReactLink     // React Router Link
     * LinkComponent: CustomLink    // Custom link implementation
     */
    LinkComponent: LinkTypeComponent;
};

// ============================================================================
// CONTENT RENDERING UTILITIES
// ============================================================================

/**
 * Renders a paragraph block with optional markdown processing
 * 
 * Handles both plain text with inline markdown formatting and custom
 * React node rendering for complex content requirements.
 * 
 * @param {PType} p - Paragraph block configuration
 * @param {LinkTypeComponent} LinkComponent - Framework-agnostic link component
 * @param {string} [key] - Optional React key for list rendering
 * @returns {React.ReactNode} Rendered paragraph element
 * 
 * @example
 * // Plain text with markdown
 * PTypeToNode({ type: 'p', text: 'This is **bold** text' }, NextLink)
 * 
 * @example
 * // Custom React node
 * PTypeToNode({ type: 'p', node: <CustomAlert /> }, NextLink)
 */
function PTypeToNode(p: PType,  LinkComponent: LinkTypeComponent, key?: string): React.ReactNode {
    // Render custom node if provided, bypassing text processing
    if (p.node) return <React.Fragment key={key}>{p.node}</React.Fragment>;
    
    // Process text through inline markdown parser with link component
    return (
        <Typography key={key} variant="narrative" {...p.props}>
            {parseInlineMarkdown(p.text, LinkComponent)}
        </Typography>
    );
}

/**
 * Normalizes various list item formats to React nodes
 * 
 * Handles the flexible ListItem type system by converting all supported
 * formats (strings, React nodes, objects, tuples) into renderable content.
 * 
 * @param {ListItem} item - List item in any supported format
 * @param {LinkTypeComponent} LinkComponent - Framework-agnostic link component
 * @returns {React.ReactNode} Normalized React node for rendering
 * 
 * @example
 * // String item
 * ListItemToNode('Simple text', NextLink)
 * 
 * @example
 * // Object with props
 * ListItemToNode({ text: 'Styled text', props: { color: 'primary.main' } }, NextLink)
 * 
 * @example
 * // Tuple format
 * ListItemToNode(['Bold text', { fontWeight: 'bold' }], NextLink)
 */
function ListItemToNode(item: ListItem, LinkComponent: LinkTypeComponent): React.ReactNode {
    // Handle null/undefined items gracefully
    if (item == null) return null;

    // Simple string case - most common usage
    if (typeof item === 'string') {
        return PTypeToNode({ type: 'p', text: item }, LinkComponent);
    }
    
    // React element case - render directly
    if (React.isValidElement(item)) {
        return <>{item}</>;
    }
    
    // Tuple format case - [text, props]
    if (Array.isArray(item) && item.length === 2) {
        const [text, props] = item;
        return PTypeToNode({ type: 'p', text, props }, LinkComponent);
    }
    
    // Object format case - { text, props }
    if (typeof item === 'object' && 'text' in item) {
        return PTypeToNode({ type: 'p', text: item.text, props: item.props }, LinkComponent);
    }

    // Fallback for unrecognized formats
    return null;
}

// ============================================================================
// MAIN COMPONENT IMPLEMENTATION
// ============================================================================

/**
 * TextWithAccordion - Flexible Multi-Block Content Renderer
 * 
 * A sophisticated content composition system that renders structured content
 * blocks with support for paragraphs, headings, lists, and collapsible accordions.
 * Perfect for documentation, FAQ sections, feature descriptions, and complex
 * content layouts that require hierarchical organization.
 * 
 * **Architecture:**
 * - **Block-Based System**: Each content type is a discrete, configurable block
 * - **Type Safety**: Discriminated unions ensure correct prop usage for each block type
 * - **Recursive Rendering**: Supports nested content including accordions within accordions
 * - **Framework Agnostic**: Link component abstraction works with any routing system
 * 
 * **Content Types:**
 * - **Paragraphs**: Rich text with inline markdown and custom React nodes
 * - **Headings**: Semantic titles with proper hierarchy (h2/h4) and visual styling
 * - **Lists**: Flexible bullet lists with customizable styling and mixed content
 * - **Accordions**: Collapsible sections for progressive disclosure patterns
 * 
 * **Performance Features:**
 * - React.memo optimization for efficient re-renders
 * - Stable key generation for proper React reconciliation
 * - Minimal DOM structure with semantic HTML
 * 
 * @param {TextWithAccordionProps} props - Component configuration and content blocks
 * @returns {React.ReactElement} Rendered content composition
 * 
 * @example
 * // FAQ section with mixed content
 * <TextWithAccordion
 *   blocks={[
 *     { type: 'h', text: 'Frequently Asked Questions' },
 *     { type: 'p', text: 'Find answers to common questions below.' },
 *     {
 *       type: 'accordion',
 *       title: 'Getting Started',
 *       blocks: [
 *         { type: 'p', text: 'Here\'s how to begin...' },
 *         { type: 'list', items: ['Step 1', 'Step 2', 'Step 3'] }
 *       ]
 *     }
 *   ]}
 *   LinkComponent={NextLink}
 * />
 * 
 * @example
 * // Feature documentation with custom styling
 * <TextWithAccordion
 *   size="loose"
 *   path="features"
 *   blocks={featureBlocks}
 *   LinkComponent={ReactRouterLink}
 * />
 */
const TextWithAccordion: React.FC<TextWithAccordionProps> = ({
    blocks,
    path,
    size = 'compact',
    LinkComponent,
}) => {
    return <StandardStack size={size}>{renderBlocks(blocks,  path, LinkComponent)}</StandardStack>;
};

// ============================================================================
// SPECIALIZED COMPONENT IMPLEMENTATIONS
// ============================================================================

/**
 * BulletList - Custom Bullet List with Theme Integration
 * 
 * Renders a semantic unordered list with custom CSS bullets that align
 * properly with the first line of text. Supports mixed content types
 * and theme-integrated bullet colors.
 * 
 * **Features:**
 * - Custom CSS bullets positioned at text baseline
 * - Theme color integration for consistent styling
 * - Mixed content support through ListItem normalization
 * - Proper spacing and alignment across font sizes
 * 
 * @param {Object} props - Component configuration
 * @param {ListItem[]} props.items - Array of list items in various formats
 * @param {LinkTypeComponent} props.LinkComponent - Framework-agnostic link component
 * @param {BoxProps['bgcolor']} [props.bulletColor='primary.main'] - Bullet color from theme
 * @returns {React.ReactElement} Rendered bullet list component
 * 
 * @example
 * <BulletList
 *   items={['Item 1', 'Item 2', { text: 'Styled item', props: { fontWeight: 'bold' } }]}
 *   bulletColor="success.main"
 *   LinkComponent={NextLink}
 * />
 */
function BulletList({
    items,
    LinkComponent,
    bulletColor = 'primary.main',
}: {
    items: ListItem[];
    LinkComponent: LinkTypeComponent;
    bulletColor?: BoxProps['bgcolor'];
}) {
    return (
        <Box component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
            {items.map((it, i) => (
                <Box
                    key={i}
                    component="li"
                    position="relative"
                    pl={2.5}                    // Left padding for bullet space
                    mb={0.75}                   // Consistent vertical spacing
                    sx={{
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 'calc(0.5lh - 3px)',  // Center bullet on first text line
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: bulletColor ?? 'text.primary',  // Theme-integrated color
                        },
                    }}
                >
                    {ListItemToNode(it, LinkComponent)}
                </Box>
            ))}
        </Box>
    );
}

// ============================================================================
// BLOCK RENDERING ENGINE
// ============================================================================

/**
 * Recursive block rendering engine for content composition
 * 
 * Processes arrays of content blocks and renders them according to their type
 * with proper React keys, semantic HTML, and accessibility features. Supports
 * nested rendering for complex content hierarchies.
 * 
 * **Rendering Logic:**
 * - **Paragraphs**: Text processing with inline markdown support
 * - **Headings**: Semantic hierarchy with proper heading levels
 * - **Lists**: Custom bullet styling with theme integration
 * - **Accordions**: Collapsible sections with accessibility attributes
 * 
 * **Accessibility Features:**
 * - Proper ARIA attributes for accordions
 * - Semantic HTML structure preservation
 * - Keyboard navigation support
 * - Screen reader compatibility
 * 
 * @param {TextWithAccordionBlock[]} blocks - Array of content blocks to render
 * @param {string} [path=''] - Key prefix for React reconciliation
 * @param {LinkTypeComponent} LinkTypeComponent - Framework-agnostic link component
 * @returns {React.ReactNode} Rendered content blocks
 * 
 * @example
 * // Basic rendering
 * renderBlocks([
 *   { type: 'h', text: 'Title' },
 *   { type: 'p', text: 'Content...' }
 * ], '', NextLink)
 * 
 * @example
 * // Nested accordion rendering
 * renderBlocks([
 *   { 
 *     type: 'accordion', 
 *     title: 'Section',
 *     blocks: [{ type: 'p', text: 'Nested content' }]
 *   }
 * ], 'section-1', NextLink)
 */
function renderBlocks(
    blocks: TextWithAccordionBlock[],
    path = '',
    LinkTypeComponent: LinkTypeComponent,
): React.ReactNode {
    return blocks.map((b, i) => {
        // Generate stable keys for React reconciliation
        const key = path ? `${path}.${i}` : `${i}`;

        switch (b.type) {
            // ================================================================
            // PARAGRAPH BLOCK RENDERING
            // ================================================================
            case 'p':
                return PTypeToNode(b, LinkTypeComponent, key);

            // ================================================================
            // HEADING BLOCK RENDERING
            // ================================================================
            case 'h': {
                // Select appropriate heading component based on variant
                const Component = b?.variant === 'subtitle' ? SubsubsectionTitle : SectionTitle;
                return (
                    <Component key={key} {...b.props}>
                        {parseInlineMarkdown(b.text, LinkTypeComponent)}
                    </Component>
                );
            }

            // ================================================================
            // LIST BLOCK RENDERING
            // ================================================================
            case 'list':
                return <BulletList key={key} items={b.items} bulletColor={b.bulletColor ?? 'text.primary'} LinkComponent={LinkTypeComponent} />;

            // ================================================================
            // ACCORDION BLOCK RENDERING
            // ================================================================
            case 'accordion': {
                // Select heading component for accordion title
                const Component = b?.variant === 'subtitle' ? SubsubsectionTitle : SectionTitle;
                
                // Generate unique IDs for accessibility
                const summaryId = `acc-s-${key}`;
                const panelId = `acc-p-${key}`;
                
                return (
                    <Accordion
                        key={key}
                        disableGutters                              // Remove default padding
                        square                                      // Remove border radius
                        slotProps={{ transition: { unmountOnExit: true } }}  // Optimize performance
                        sx={{
                            bgcolor: 'transparent',                 // Inherit background
                            boxShadow: 'none',                      // Remove elevation
                            '&::before': { display: 'none' },       // Remove default top divider
                        }}
                    >
                        {/* Accordion Header */}
                        <AccordionSummary
                            id={summaryId}
                            aria-controls={panelId}
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                px: 0,                              // Remove horizontal padding
                                minHeight: 0,                       // Remove minimum height
                                '&.Mui-expanded': { minHeight: 0 }, // Maintain no min height when expanded
                                '& .MuiAccordionSummary-content': {
                                    my: 0.5,                        // Consistent vertical margins
                                    '&.Mui-expanded': { my: 0.5 },  // Maintain margins when expanded
                                },
                            }}
                        >
                            {/* 
                              Accordion title rendered as visual heading without affecting
                              document outline (button cannot contain heading elements)
                            */}
                            <Component {...b.props}>{b.title}</Component>
                        </AccordionSummary>

                        {/* Accordion Content Panel */}
                        <AccordionDetails id={panelId} aria-labelledby={summaryId}>
                            {/* Recursive rendering for nested content blocks */}
                            {renderBlocks(b.blocks,  key, LinkTypeComponent)}
                        </AccordionDetails>
                    </Accordion>
                );
            }

            // ================================================================
            // FALLBACK FOR UNKNOWN BLOCK TYPES
            // ================================================================
            default:
                return null;
        }
    });
}

// ============================================================================
// COMPONENT EXPORT
// ============================================================================

/**
 * TextWithAccordion Component Export
 * 
 * Flexible multi-block content renderer optimized for structured content
 * composition including documentation, FAQ sections, feature descriptions,
 * and complex layouts requiring hierarchical organization.
 * 
 * **Key Features:**
 * - Type-safe block system with discriminated unions
 * - Recursive content rendering with nested accordion support
 * - Framework-agnostic link integration for universal compatibility
 * - Accessibility-first design with proper ARIA attributes
 * - Performance optimized with React.memo and efficient rendering
 * - Theme-integrated styling with consistent design system usage
 * 
 * **Content Block Types:**
 * - **Paragraphs**: Rich text with inline markdown and custom nodes
 * - **Headings**: Semantic titles with proper hierarchy (SectionTitle/SubsubsectionTitle)
 * - **Lists**: Flexible bullet lists with theme-integrated styling
 * - **Accordions**: Collapsible sections for progressive disclosure
 * 
 * **Use Cases:**
 * - Documentation pages with hierarchical content
 * - FAQ sections with expandable answers
 * - Feature descriptions with mixed content types
 * - Help articles with structured information
 * - Product specifications with organized details
 * 
 * **Performance Benefits:**
 * - React.memo optimization prevents unnecessary re-renders
 * - Efficient key generation for stable React reconciliation
 * - Minimal DOM structure with semantic HTML elements
 * - Lazy accordion content loading with unmountOnExit
 * 
 * @see {@link TextWithAccordionProps} for complete props interface
 * @see {@link TextWithAccordionBlock} for supported block types
 * @see {@link parseInlineMarkdown} for markdown processing details
 */
export default React.memo(TextWithAccordion);
