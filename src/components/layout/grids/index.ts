/**
 * @fileoverview Grid Components and Utilities Index
 * 
 * **Comprehensive Grid System for Responsive Layouts**
 * 
 * Exports all grid-related components, utilities, types, and functions
 * for creating sophisticated responsive layout systems. Includes both
 * React components and utility functions for grid calculations.
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0
 */

// ============================================================================
// REACT COMPONENTS
// ============================================================================

/** Two-column alternating layout component */
export { default as AlternateGrid } from './AlternateGrid';
export type { AlternateGridProps } from './AlternateGrid';

/** Flexible grid element wrapper component */
export { default as GridElement } from './GridElement';
export type { GridElementProps } from './GridElement';

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

/** Grid sizing and layout types */
export type { Size, TextSplitProps } from './types';

/** Preset configuration types */
export type { PresetName } from './presets';

// ============================================================================
// GRID CALCULATION UTILITIES
// ============================================================================

/** Mathematical utilities for grid calculations */
export { clampCols, ratioToCols } from './math';

/** Grid splitting and layout functions */
export { getTextSplit, computeMediaSplit, normalizeTextSplit } from './split';

/** Grid description and debugging utilities */
export { describeRatio } from './describe';

// ============================================================================
// PRESET CONFIGURATIONS
// ============================================================================

/** Predefined grid layout presets */
export { TEXT_PRESETS } from './presets';