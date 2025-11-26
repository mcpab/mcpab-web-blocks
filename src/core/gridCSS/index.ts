/**
 * @fileoverview GridCSS System - Advanced CSS Grid Layout Management
 * 
 * Comprehensive grid system providing declarative CSS Grid configuration with:
 * - Type-safe grid definitions and validation
 * - Responsive breakpoint management
 * - Framework-agnostic rendering architecture
 * - Advanced positioning and auto-placement algorithms
 * - Professional error handling and diagnostics
 * 
 * @module GridCSS
 * @version 1.0.0
 * @author McPab Web Blocks
 */

// ============================================================================
// DOMAIN TYPES - Core CSS Grid Types and Values
// ============================================================================

export * from './domainTypes';

// ============================================================================
// CORE SYSTEM - Layout Types and Management
// ============================================================================

export * from './core/layoutTypes';
export * from './core/GridNodeTypes';
export * from './core/gridErrorShape';
export * from './core/nodeManagerTypes';
export * from './core/DefaultNodeManager';

// ============================================================================
// DEFAULTS AND CONFIGURATION
// ============================================================================

export * from './defaults/defaults';

// ============================================================================
// ID MANAGEMENT AND NODE IDENTIFICATION
// ============================================================================

export * from './ids/kinds';

// ============================================================================
// UTILITIES AND HELPER FUNCTIONS
// ============================================================================

export * from './lib/utils';

// ============================================================================
// BUILDERS - Grid Construction and Validation
// ============================================================================

export * from '../../__archive__/uniformGridBuilder';

// ============================================================================
// FACTORIES - Predefined Grid Configurations
// ============================================================================

export * from './factories/uniformGrids/createPatternLayoutFactory';
export * from './factories/uniformGrids/defaultPatterns';
export * from './builders/types';

// ============================================================================
// RENDERERS - Framework Integration
// ============================================================================

// Material-UI Integration
export * from './renderers/mui/GridCssMuiRenderer';

/**
 * Primary GridCSS exports for common usage patterns
 * 
 * @example
 * ```typescript
 * import { 
 *   GridOptions, 
 *   AbsoluteGrid, 
 *   LayoutFactory,
 *   uniformGridBuilder,
 *   createPatternLayoutFactory,
 *   defaultPatterns,
 *   GridCssMuiRenderer
 * } from '@/core/gridCSS';
 * 
 * // Create a uniform grid
 * const uniformFactory = uniformGridBuilder(12, 6);
 * const layouts = uniformFactory.createLayoutByBp(gridOptions, nodeIntents);
 * 
 * // Or create a pattern-based grid
 * const patternFactory = createPatternLayoutFactory(defaultPatterns.twoColumn);
 * 
 * // Render with Material-UI
 * <GridCssMuiRenderer 
 *   layouts={layouts.grids}
 *   breakpoint="md"
 * >
 *   {children}
 * </GridCssMuiRenderer>
 * ```
 */

export type {
  // Domain types
  CssLength as GridCssLength,
  TrackBreadth as GridTrackBreadth,
  GridUnitValue as GridUnit,
  GapValue as GridGap
} from './domainTypes';

/**
 * GridCSS System Information
 */
export const GRIDCSS_VERSION = '1.1.0' as const; // Updated to include new pattern factories
export const GRIDCSS_NAME = 'McPab GridCSS System' as const;

/**
 * Supported CSS Grid features
 */
export const GRIDCSS_FEATURES = {
  RESPONSIVE_BREAKPOINTS: true,
  AUTO_PLACEMENT: true,
  SUBGRID_SUPPORT: true,
  MATERIAL_UI_INTEGRATION: true,
  TYPE_SAFETY: true,
  ERROR_DIAGNOSTICS: true
} as const;