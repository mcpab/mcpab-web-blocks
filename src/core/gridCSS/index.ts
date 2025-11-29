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

export * from './core/domainTypes';

// ============================================================================
// CORE SYSTEM - Layout Types and Management
// ============================================================================

export * from './core/gridNodeTypes';
export * from './core/gridErrorShape';
export * from './core/idManagers/idManagerTypes';
export * from './core/idManagers/defaultIDManager';
export * from './core/absoluteGridTypes';
export * from './core/nodeViewOptions';
export * from './core/gridOptionsTypes';

// ============================================================================
// DEFAULTS AND CONFIGURATION
// ============================================================================

export * from './templates/presets/defaultUniformGridOptions';

// ============================================================================
// ID MANAGEMENT AND NODE IDENTIFICATION
// ============================================================================

export * from './templates/layoutIDs';

// ============================================================================
// UTILITIES AND HELPER FUNCTIONS
// ============================================================================

export * from './core/utils/utils';
export * from './core/gridBuilder';
export * from './core/absoluteGridChecker';




// ============================================================================
// FACTORIES - Predefined Grid Configurations
// ============================================================================

export * from './geometry/boxFlowBuilder';
export * from './geometry/gridPathTypes';
export * from '../patterns/threeBandMultiColumnPattern';

// ============================================================================
// RENDERERS - Framework Integration
// ============================================================================

// Material-UI Integration
export * from './integration/mui/GridCssMuiRenderer';
export * from './integration/mui/muiLayoutsRegistry';

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

export {logDiagnostics} from './core/debug/logDiagnostics';

// ============================================================================
// ADDITIONAL EXPORTS
// ============================================================================
export * from './core/breakpoints';
export type {
  // Domain types
  CssLength as GridCssLength,
  TrackBreadth as GridTrackBreadth,
  GridUnitValue as GridUnit,
  GapValue as GridGap
} from './core/domainTypes';

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