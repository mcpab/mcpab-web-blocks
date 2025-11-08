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
 * ├── Core Types
 * │   ├── GridNode definitions (identity, coordinates, options)
 * │   ├── Grid configuration (tracks, gaps, auto behavior)
 * │   ├── Absolute positioning and layout computation
 * │   └── Error reporting and validation types
 * ├── ID Management
 * │   ├── Position and alignment types
 * │   ├── Row and column number constraints
 * │   ├── Grid and section ID generation
 * │   └── Type-safe identifier patterns
 * ├── CSS Types
 * │   ├── CSS length units and track definitions
 * │   ├── Grid unit values and gap specifications
 * │   └── Track breadth and sizing constraints
 * ├── Defaults
 * │   ├── Node default configurations
 * │   └── Uniform grid generation utilities
 * └── Utility Libraries
 *     ├── Grid template parsing and analysis
 *     ├── Grid options resolution
 *     └── Layout transformation utilities
 * ```
 * 
 * **Grid Layout Concepts:**
 * - **GridNode**: Individual items with identity, coordinates, and options
 * - **GridOptions**: Container configuration with tracks, gaps, and behavior
 * - **AbsoluteGrid**: Computed layout with absolute positioning
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
 * @version 2.0.0 - Reorganized architecture with enhanced type system
 */

// ============================================================================
// CORE TYPE DEFINITIONS
// ============================================================================

/** Grid node identity with type-safe ID management */
export type { GridNodeIdentity } from './core/layoutTypes';

/** Grid node relative positioning and coordinates */
export type { GridNodeRelativeCoordinates } from './core/layoutTypes';

/** Grid node configuration options and styling */
export type { GridNodeOptions } from './core/layoutTypes';

/** Grid node absolute positioning coordinates */
export type { GridNodeAbsoluteCoordinates } from './core/layoutTypes';

/** Grid track list with unit values */
export type { TrackList } from './core/layoutTypes';

/** Grid tracks configuration (rows and columns) */
export type { GridTracks } from './core/layoutTypes';

/** Grid gaps configuration */
export type { GridGaps } from './core/layoutTypes';

/** Grid auto-sizing behavior configuration */
export type { GridAuto } from './core/layoutTypes';

/** Complete grid options configuration */
export type { GridOptions } from './core/layoutTypes';

/** Computed absolute grid node with positioning */
export type { AbsoluteNode } from './core/layoutTypes';

/** Complete absolute grid layout with computed positions */
export type { AbsoluteGrid } from './core/layoutTypes';

/** Grid validation error reporting shape */
export type { GridErrorShape } from './core/layoutTypes';

/** Grid options input with partial configuration */
export type { GridOptionsInput } from './core/layoutTypes';

/** Responsive layouts by breakpoint mapping */
export type { LayoutsByBP } from './core/layoutTypes';

/** Layout factory for grid generation */
export type { LayoutFactory } from './core/layoutTypes';

// ============================================================================
// CSS TYPE DEFINITIONS
// ============================================================================

/** CSS length units with value and unit specification */
export type { CssLength } from './domainTypes';

/** CSS Grid track breadth specifications */
export type { TrackBreadth } from './domainTypes';

/** Grid unit values for track sizing */
export type { GridUnitValue } from './domainTypes';

/** Gap values for grid spacing */
export type { GapValue } from './domainTypes';

// ============================================================================
// ID AND POSITION TYPES
// ============================================================================

/** Alignment options for grid items */
export type { Align } from './ids/kinds';

/** Axis specifications for grid positioning */
export type { Axis } from './ids/kinds';

/** Axis position types for grid alignment */
export type { AxisPos } from './ids/kinds';

/** Corner position specifications */
export type { Corner } from './ids/kinds';

/** Combined position types */
export type { Position } from './ids/kinds';

/** Row number constraints (1-20) */
export type { RowNumbers } from './ids/kinds';

/** Column number constraints (1-12) */
export type { ColNumbers } from './ids/kinds';

/** Label types for grid identification */
export type { Label } from './ids/kinds';

/** Section core identification patterns */
export type { SectionCore } from './ids/kinds';

/** Section ID template literals */
export type { SectionId } from './ids/kinds';

/** Grid ID template literals */
export type { GridId } from './ids/kinds';

/** Combined ID types */
export type { IDS } from './ids/kinds';

// ============================================================================
// UTILITY FUNCTIONS AND DEFAULTS
// ============================================================================

/** Grid layout checker with overlap and constraint validation */
export { gridChecker } from './gridChecker';

/** Template derivation information for grid units */
export type { TemplateDeriveInfo } from './lib/gridUnitsHelpers';

/** Derive automatic unit from grid template string */
export { deriveAutoUnitFromTemplate } from './lib/gridUnitsHelpers';

/** Derive unit and count information from grid template */
export { deriveAutoUnitAndCountFromTemplate } from './lib/gridUnitsHelpers';

/** Grid options resolution utility */
export { resolveGridOptions } from './lib/resolveGridOptions';

/** Default node configuration options */
export { nodeDefaults } from './defaults/defaults';

/** Uniform grid generation utility */
export { uniformGrid } from './defaults/defaults';