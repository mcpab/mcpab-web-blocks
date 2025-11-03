/**
 * @fileoverview MediaText Section Component Exports
 * 
 * **Responsive Media and Text Layout Component**
 * 
 * Exports the MediaText component and its associated type definitions
 * for creating flexible media-text layouts with configurable column
 * ratios and responsive behavior.
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Updated exports and documentation
 */

// ============================================================================
// COMPONENT EXPORTS
// ============================================================================

/** MediaText component for responsive media-text layouts */
export { default as MediaText } from './MediaText';

// ============================================================================
// TYPE EXPORTS
// ============================================================================

/** MediaText component prop types */
export type {
  MediaAndTextProps,
  MediaAndTextNoMessage,
  TextProps,
} from './MediaText';
