/**
 * @fileoverview Core Grid System Utilities
 * 
 * **Foundation Grid Calculation and Ratio Management**
 * 
 * Low-level utilities for grid system calculations, ratio management,
 * and responsive layout foundations. These core functions provide the
 * mathematical foundation for higher-level grid components.
 * 
 * **Key Features:**
 * - Mathematical ratio and proportion calculations
 * - Grid bucket distribution algorithms
 * - Responsive type definitions
 * - Debugging and description utilities
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 2.1.0 - Enhanced exports and documentation
 */

// ============================================================================
// MATHEMATICAL UTILITIES
// ============================================================================

/** Core mathematical functions for ratio calculations */
export { clamp, ratioToBuckets } from './ratio';

// ============================================================================
// DESCRIPTION AND DEBUGGING
// ============================================================================

/** Grid description and debugging utilities */
export { describeSplit } from './describe';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Core responsive type definitions */
export type { Responsive } from './types';
