// ============================================================================
// UNIVERSAL LINK SYSTEM EXPORTS
// ============================================================================

/**
 * @fileoverview Core Link Type Definitions and Component Interface
 * 
 * **Framework-Agnostic Link Component System**
 * 
 * Universal link component interfaces and type definitions that work across
 * React frameworks including Next.js, React Router, and standard React
 * applications. Enables consistent navigation handling while supporting
 * framework-specific optimizations.
 * 
 * **Key Features:**
 * - Framework-agnostic link component abstraction
 * - Internal and external link type discrimination
 * - Type-safe navigation props interface
 * - Accessibility-compliant link patterns
 * 
 * **Navigation Types:**
 * - **Internal Links**: Same-origin navigation with SPA routing
 * - **External Links**: Cross-origin navigation with security considerations
 * - **Anchor Links**: Same-page section navigation
 * - **Download Links**: File download with proper MIME handling
 * 
 * **Integration Support:**
 * - Next.js Link component with optimized navigation
 * - React Router Link with client-side routing
 * - Standard HTML anchor elements
 * - Custom navigation implementations
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 1.1.0 - Enhanced type safety and documentation
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Framework-agnostic link component interface */
export type { LinkTypeComponent } from './link-types';

/** Link reference and forwarding support */
export type { LinkRef } from './link-types';

/** External link type definition with security considerations */
export type { ExternalLink } from './link-types';

/** Internal link type definition for SPA navigation */
export type { InternalLink } from './link-types';