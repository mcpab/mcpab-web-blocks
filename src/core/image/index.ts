/**
 * Image abstraction exports used across framework adapters.
 */

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
