// ============================================================================
// UNIVERSAL SCRIPT SYSTEM EXPORTS
// ============================================================================

/**
 * @fileoverview Core Script Type Definitions and Component Interface
 * 
 * **Framework-Agnostic Script Component System**
 * 
 * Universal script component interfaces and type definitions that work across
 * React frameworks including Next.js and standard React applications. Designed
 * to provide consistent script loading behavior with framework-specific optimizations.
 * 
 * **Key Features:**
 * - Framework-agnostic script component abstraction
 * - Multiple loading strategies for performance optimization
 * - Type-safe props interface with lifecycle event handling
 * - Cross-origin and security attribute support
 * 
 * **Loading Strategies:**
 * - **beforeInteractive**: Critical scripts that must load before page interaction
 * - **afterInteractive**: Scripts that can load after page becomes interactive
 * - **lazyOnload**: Non-critical scripts loaded when browser is idle
 * - **worker**: Scripts executed in Web Workers for better performance
 * 
 * **Integration Support:**
 * - Next.js Script component with all optimization features
 * - Standard HTML script elements with manual optimization
 * - Custom script loading implementations
 * - Third-party script management libraries
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 1.1.0 - Enhanced strategy support and documentation
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/** Script loading strategy types for performance optimization */
export type { ScriptStrategy } from './script-types';

/** Universal script component props interface */
export type { UniversalScriptProps } from './script-types';

/** Framework-agnostic script component interface */
export type { ScriptComponentLike } from './script-types';