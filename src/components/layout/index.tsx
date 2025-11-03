/**
 * @fileoverview Layout Components Index
 * 
 * **Comprehensive Layout System for Modern Web Applications**
 * 
 * Centralized exports for all layout-related components, utilities, and types
 * including foundational layout components, responsive grid systems, and
 * specialized section patterns for building sophisticated web layouts.
 * 
 * **Component Categories:**
 * - **Foundation Components**: BackgroundBox, PageLayout for core layout needs
 * - **Grid System**: Responsive grid components and utilities for complex layouts
 * - **Section Components**: Specialized components for hero blocks and media-text layouts
 * 
 * **Key Features:**
 * - Framework-agnostic design patterns
 * - Responsive grid calculation utilities
 * - Professional section components
 * - Type-safe component interfaces
 * - Accessibility-compliant implementations
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Comprehensive layout system exports
 */

// ============================================================================
// FOUNDATION LAYOUT COMPONENTS
// ============================================================================

/** Flexible background image container with dual rendering modes */
export { default as BackgroundBox } from './BackgroundBox';
export type { BackgroundBoxProps, ImageConf } from './BackgroundBox';

/** Enterprise-grade page structure component with vertical rhythm */
export { default as PageLayout } from './PageLayout';
export type { PageLayoutProps } from './PageLayout';

// ============================================================================
// RESPONSIVE GRID SYSTEM
// ============================================================================

/** Grid components and calculation utilities */
export {
  // Grid Components
  AlternateGrid,
  GridElement,
  // Grid Utilities
  clampCols,
  ratioToCols,
  getTextSplit,
  computeMediaSplit,
  normalizeTextSplit,
  describeRatio,
  // Grid Presets
  TEXT_PRESETS,
} from './grids';

export type {
  // Grid Component Types
  AlternateGridProps,
  GridElementProps,
  // Grid Calculation Types
  Size,
  TextSplitProps,
  PresetName,
} from './grids';

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

/** Professional section components for content layouts */
export {
  // Hero Sections
  HeroBlock,
  // Media-Text Layouts
  MediaText,
} from './sections';

export type {
  // Hero Section Types
  HeroBlockProps,
  // Media-Text Layout Types
  MediaAndTextProps,
  MediaAndTextNoMessage,
  TextProps,
} from './sections';