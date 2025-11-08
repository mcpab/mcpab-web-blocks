// ============================================================================
// UNIVERSAL IMAGE SYSTEM EXPORTS
// ============================================================================

/**
 * @fileoverview Core Image Type Definitions and Utilities
 * 
 * **Framework-Agnostic Image Component System**
 * 
 * Universal image component interfaces and type definitions that work across
 * React frameworks including Next.js, Gatsby, and standard React applications.
 * Provides consistent image handling with optimization support.
 * 
 * **Key Features:**
 * - Framework-agnostic image component abstraction
 * - Static image data type definitions with blur support
 * - Type guards for safe image data validation
 * - Universal props interface for consistent usage
 * 
 * **Integration Support:**
 * - Next.js Image component with StaticImageData
 * - Gatsby Image with blur placeholders
 * - Standard HTML img elements
 * - Custom image optimization libraries
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 1.2.0 - Enhanced type safety and documentation
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Universal image component interface for framework abstraction */
export type { ImageComponentLike } from './image-types';

/** Static image data interface with optimization support */
export type { StaticImageDataLike } from './image-types';

/** Universal image props for consistent component usage */
export type { UniversalImageProps } from './image-types';

// ============================================================================
// TYPE GUARDS AND UTILITIES
// ============================================================================

/** Type guard function for safe StaticImageDataLike validation */
export { isStaticImageDataLike } from './image-types';

/** Props transformation utility for HTML img compatibility */
export { toImgAttrs } from './image-types';

// ============================================================================
// COMPONENT IMPLEMENTATIONS
// ============================================================================

/** Default SSR-safe HTML image component with fill mode support */
export { HtmlImage } from './image-types';