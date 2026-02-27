/**
 * Text utilities for inline formatting and simple case transformations.
 */

// Inline markdown processing utilities
export {
  parseInlineMarkdown,
  boldToNodes,
} from './inline';

// Text transformation utilities
export {
  toTitleCase
} from './transform';

// Re-export submodule members for convenience.
export * from './inline';
export * from './transform';
