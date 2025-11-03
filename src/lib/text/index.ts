/*
 * Text Processing Utilities
 *
 * A collection of text processing functions for common formatting and parsing tasks.
 * These utilities handle inline markdown parsing, text transformations, and string
 * manipulations commonly needed in React applications.
 *
 * Modules:
 * - inline: Markdown parsing for bold, italic, links, and line breaks
 * - transform: Text transformation utilities (case conversion, formatting)
 *
 * Examples:
 * 
 * Inline Markdown Processing:
 * import { parseInlineMarkdown, boldToNodes } from '@/lib/text';
 * 
 * const richText = parseInlineMarkdown("Visit **our site** at [example.com](https://example.com)", Link);
 * const boldText = boldToNodes("This is **important** information");
 *
 * Text Transformations:
 * import { toTitleCase } from '@/lib/text';
 * 
 * const title = toTitleCase("hello world"); // "Hello World"
 */

// Inline markdown processing utilities
export {
  parseInlineMarkdown,
  boldToNodes,
  type LinkRef
} from './inline';

// Text transformation utilities
export {
  toTitleCase
} from './transform';

// Re-export everything for convenience
export * from './inline';
export * from './transform';