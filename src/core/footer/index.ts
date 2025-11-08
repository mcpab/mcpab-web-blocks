// ============================================================================
// FOOTER TYPE DEFINITIONS EXPORTS
// ============================================================================

/**
 * @fileoverview Core Footer Type Definitions
 * 
 * **Universal Footer Component Type System**
 * 
 * Type definitions for flexible footer components that support both internal
 * and external navigation patterns. Designed to work with Material-UI icons
 * and framework-agnostic link systems for maximum compatibility.
 * 
 * **Key Features:**
 * - Discriminated union types for internal/external links
 * - Material-UI icon integration support
 * - Type-safe footer item configurations
 * - Flexible column-based footer layouts
 * 
 * **Footer Architecture:**
 * ```
 * Footer Structure
 * ├── FooterColumn (with title)
 * │   └── FooterItem[]
 * │       ├── FooterItemInternal (SPA navigation)
 * │       └── FooterItemExternal (external links)
 * └── Shared Properties
 *     ├── label: string (display text)
 *     └── icon?: SvgIconComponent (optional icon)
 * ```
 * 
 * **Type Safety Benefits:**
 * - Compile-time validation of link types
 * - Proper icon component type checking
 * - Consistent footer item structure
 * - Framework-agnostic navigation patterns
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 1.0.0 - Initial footer type system
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Base footer item properties shared across all item types */
export type { FooterItemBase } from './types';

/** External footer link item with external navigation properties */
export type { FooterItemExternal } from './types';

/** Internal footer link item with SPA navigation properties */
export type { FooterItemInternal } from './types';

/** Union type for all footer item variations */
export type { FooterItem } from './types';

/** Footer column configuration with title and items */
export type { FooterColumnType } from './types';