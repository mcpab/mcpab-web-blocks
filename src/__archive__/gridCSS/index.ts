// ============================================================================
// GRID CSS SYSTEM EXPORTS
// ============================================================================

/**
 * @fileoverview Advanced Grid CSS System with Layout Management
 * 
 * **Comprehensive CSS Grid Layout System**
 * 
 * A sophisticated CSS Grid management system that provides declarative grid
 * layout definitions, automatic conflict detection, responsive breakpoint
 * support, and CSS generation utilities. Perfect for complex layout systems
 * that require precise grid control and validation.
 * 
 * **Key Features:**
 * - Declarative grid layout definitions with type safety
 * - Automatic overlap detection and conflict resolution
 * - Responsive breakpoint management (xs, sm, md, lg, xl)
 * - CSS Grid property generation and optimization
 * - Grid element positioning and spanning controls
 * - Layout validation with detailed error reporting
 * 
 * **System Architecture:**
 * ```
 * Grid CSS System
 * ├── Type Definitions
 * │   ├── GridElement (positioning and properties)
 * │   ├── GridLayout (container configuration)
 * │   ├── AbsoluteGridLayout (computed absolute positions)
 * │   └── LayoutsByBP (responsive breakpoint layouts)
 * ├── Grid Builder
 * │   ├── Layout compilation and validation
 * │   ├── Absolute position calculation
 * │   └── Error detection and reporting
 * ├── Grid Checker
 * │   ├── Overlap detection algorithms
 * │   ├── Constraint validation
 * │   └── Layout integrity verification
 * └── Utility Functions
 *     ├── Grid template parsing
 *     ├── Unit derivation helpers
 *     └── Layout transformation utilities
 * ```
 * 
 * **Grid Layout Concepts:**
 * - **GridElement**: Individual items with row/column positioning
 * - **GridLayout**: Container with rows, columns, and element definitions
 * - **AbsoluteGridLayout**: Computed layout with absolute grid positions
 * - **Responsive Layouts**: Breakpoint-specific layout variations
 * 
 * **Validation Features:**
 * - Element overlap detection with z-index consideration
 * - Out-of-bounds positioning validation
 * - Constraint violation checking
 * - Duplicate ID detection
 * - Grid template consistency verification
 * 
 * **Performance Optimizations:**
 * - Efficient overlap detection algorithms
 * - Optimized CSS property generation
 * - Minimal layout recalculation
 * - Tree-shakeable utility functions
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 1.0.0 - Initial advanced grid system
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Core grid element definition with positioning and styling */
export type { GridElement } from './types';

/** Computed grid element with absolute positioning */
export type { AbsoluteGridElement } from './types';

/** Column definition with count/unit or template string */
export type { columnDef } from './types';

/** Row definition with count/unit or template string */
export type { rowDef } from './types';

/** Complete grid layout configuration */
export type { GridLayout } from './types';

/** Computed absolute grid layout with positioning */
export type { AbsoluteGridLayout } from './types';

/** Grid validation error shape with details */
export type { GridErrorShape } from './types';

/** Responsive layouts by breakpoint */
export type { LayoutsByBP } from './types';

/** Template derivation information for grid units */
export type { TemplateDeriveInfo } from './gridUnitsHelpers';

// ============================================================================
// GRID BUILDER FUNCTIONS
// ============================================================================

/** Main grid layout builder with validation and compilation */
export { gridBuilder } from './gridBuilder';

// ============================================================================
// GRID VALIDATION FUNCTIONS
// ============================================================================

/** Grid layout checker with overlap and constraint validation */
export { gridChecker } from './gridChecker';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/** Convert grid element to absolute positioning */
export { convertGridElementToAbsolute } from './helpers';

/** Convert grid layout to absolute positioning */
export { convertGridLayoutToAbsolute } from './helpers';

/** Derive automatic grid units from layout configuration */
export { deriveAutoGridUnits } from './helpers';

/** Derive automatic unit from grid template string */
export { deriveAutoUnitFromTemplate } from './gridUnitsHelpers';

/** Derive unit and count information from grid template */
export { deriveAutoUnitAndCountFromTemplate } from './gridUnitsHelpers';