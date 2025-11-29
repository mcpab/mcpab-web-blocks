/*
 * Library Utilities
 *
 * A collection of utility functions and modules for common development tasks.
 * These utilities provide text processing, data transformation, and other
 * helper functions used throughout the application.
 *
 * Modules:
 * - text: Text processing utilities (markdown parsing, transformations)
 *
 * Future modules may include:
 * - data: Data manipulation and validation utilities
 * - format: Formatting utilities for dates, numbers, currency
 * - validation: Form and data validation helpers
 * - api: API utilities and helpers
 * - storage: Local storage and session storage utilities
 *
 * Examples:
 * 
 * Text Processing:
 * import { parseInlineMarkdown, toTitleCase } from '@/lib/text';
 * 
 * const formatted = parseInlineMarkdown("Hello **world**!", Link);
 * const title = toTitleCase("product name"); // "Product Name"
 *
 * Direct Module Import:
 * import { text } from '@/lib';
 * 
 * const nodes = text.parseInlineMarkdown(content, Link);
 * const title = text.toTitleCase(name);
 */

// Text processing utilities
export * as text from './text';

// Re-export commonly used text utilities for convenience
export {
  parseInlineMarkdown,
  boldToNodes,
  toTitleCase,
} from './text';