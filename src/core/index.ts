// ============================================================================
// CORE SYSTEM EXPORTS
// ============================================================================

/**
 * @fileoverview Core System Components and Utilities
 * 
 * **Framework-Agnostic Foundation for React Component Libraries**
 * 
 * The core system provides universal interfaces, type definitions, and utilities
 * that enable component libraries to work across different React frameworks
 * without vendor lock-in. Designed for maximum compatibility and flexibility.
 * 
 * **System Overview:**
 * ```
 * Core System Architecture
 * ├── Image System
 * │   ├── Universal image component interfaces
 * │   ├── Static asset type definitions
 * │   ├── Framework-agnostic optimization support
 * │   └── SSR-safe image components
 * ├── Layout System
 * │   ├── Mathematical grid utilities
 * │   ├── Responsive type definitions
 * │   ├── Layout calculation functions
 * │   └── Grid debugging tools
 * ├── Grid CSS System
 * │   ├── Advanced CSS Grid layout management
 * │   ├── Declarative grid definitions with validation
 * │   ├── Responsive breakpoint support
 * │   └── Automatic conflict detection and resolution
 * ├── Footer System
 * │   ├── Footer component type definitions
 * │   ├── Internal/external link discrimination
 * │   ├── Material-UI icon integration
 * │   └── Column-based footer layouts
 * ├── Link System
 * │   ├── Universal link component interfaces
 * │   ├── Internal/external link type definitions
 * │   ├── Framework routing abstraction
 * │   └── Accessibility-compliant patterns
 * └── Script System
 *     ├── Universal script component interfaces
 *     ├── Loading strategy definitions
 *     ├── Performance optimization support
 *     └── Security attribute management
 * ```
 * 
 * **Design Principles:**
 * - **Framework Agnostic**: Works with Next.js, Gatsby, CRA, and vanilla React
 * - **Type Safety**: Comprehensive TypeScript support with strict type checking
 * - **Performance First**: Optimized for modern web performance best practices
 * - **Accessibility**: WCAG-compliant interfaces and semantic HTML support
 * - **Progressive Enhancement**: Graceful degradation across different environments
 * - **Developer Experience**: Intuitive APIs with comprehensive documentation
 * 
 * **Use Cases:**
 * - Building component libraries that work across React frameworks
 * - Creating design systems with universal compatibility
 * - Developing reusable UI components for multiple projects
 * - Implementing consistent patterns across different applications
 * - Migrating between React frameworks without breaking changes
 * 
 * **Integration Examples:**
 * ```typescript
 * // Next.js Application
 * import { ImageComponentLike } from '@/core/image';
 * import NextImage from 'next/image';
 * const ImageComponent: ImageComponentLike = NextImage;
 * 
 * // Standard React Application
 * import { HtmlImage } from '@/core/image';
 * const ImageComponent = HtmlImage;
 * 
 * // Component Library Usage
 * import { UniversalImageProps, LinkTypeComponent } from '@/core';
 * 
 * interface MyComponentProps {
 *   image: UniversalImageProps;
 *   LinkComponent: LinkTypeComponent;
 * }
 * ```
 * 
 * @author MCPAB Web Blocks
 * @since 1.0.0
 * @version 3.0.0 - Complete core system with advanced grid and footer systems
 */

// ============================================================================
// IMAGE SYSTEM
// ============================================================================

/** Universal image component interfaces and utilities */
export * from './image';

// ============================================================================
// LAYOUT SYSTEM  
// ============================================================================

/** Core layout utilities and grid mathematics */
export * from './layout';

// ============================================================================
// ADVANCED GRID SYSTEM
// ============================================================================


// ============================================================================
// LINK SYSTEM
// ============================================================================

/** Universal link component interfaces and type definitions */
export * from './link';

// ============================================================================
// SCRIPT SYSTEM
// ============================================================================

/** Universal script component interfaces and loading strategies */
export * from './script';