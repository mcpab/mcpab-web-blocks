'use client';

// ============================================================================
// ALTERNATING GRID LAYOUT COMPONENT
// ============================================================================

/**
 * @fileoverview AlternateGrid - Dynamic Two-Column Layout with Alternating Pattern
 * 
 * A sophisticated grid component that creates visually engaging zig-zag layouts
 * by alternating the left/right placement of content blocks across rows. Perfect
 * for feature showcases, timeline layouts, comparison sections, and content that
 * benefits from visual rhythm and flow.
 * 
 * **Core Architecture:**
 * - Processes flat array of React nodes into paired rows
 * - Alternates column order on every other row for zig-zag effect
 * - Responsive design with configurable breakpoints
 * - Built on Material-UI Grid v7 system with container/size pattern
 * 
 * **Key Features:**
 * - **Smart Pairing**: Automatically chunks flat arrays into row pairs
 * - **Flexible Alternation**: Toggle alternating behavior with single prop
 * - **Responsive Breakpoints**: Configurable mobile-to-desktop transition points
 * - **Content Alignment**: Intelligent justification for optimal visual balance
 * - **Performance Optimized**: Memoized chunk processing for large content sets
 * 
 * **Design Patterns:**
 * - Content flows naturally in reading order on mobile
 * - Desktop creates engaging zig-zag visual rhythm
 * - Optional header with smart capitalization
 * - Consistent spacing system with responsive scaling
 * 
 * @author MCPAB Web Blocks
 * @version 1.0.0
 * @since 2024
 */

// ============================================================================
// IMPORTS AND DEPENDENCIES
// ============================================================================

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { SectionTitle } from '../../typography';
import StandardStack from '../../styled/StandardStack';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Capitalizes the first letter of each word in a string
 * 
 * Transforms strings like "my section title" into "My Section Title"
 * for consistent header formatting across the application.
 * 
 * @param {string} str - Input string to capitalize
 * @returns {string} String with each word capitalized
 * 
 * @example
 * capitalizeWords("feature showcase") // "Feature Showcase"
 * capitalizeWords("about our team") // "About Our Team"
 */
function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ============================================================================
// TYPE DEFINITIONS AND INTERFACES
// ============================================================================

/**
 * Configuration props for the AlternateGrid component
 * 
 * Provides comprehensive control over layout behavior, spacing, responsive
 * breakpoints, and content presentation for alternating grid layouts.
 * 
 * @interface AlternateGridProps
 */
export type AlternateGridProps = {
  /** 
   * Optional section header displayed above the grid
   * 
   * When provided, renders as a SectionTitle component with optional
   * capitalization. Useful for categorizing content sections.
   * 
   * @example
   * header="our features" // Renders: "Our Features" (if capitalizeHeader=true)
   */
  header?: string;

  /** 
   * Flat array of React nodes to display in alternating grid layout
   * 
   * Content is automatically paired into rows. Each pair forms a row with
   * left and right columns. Odd-numbered rows can be reversed for zig-zag effect.
   * 
   * @example
   * blocks={[<FeatureCard />, <FeatureCard />, <FeatureCard />, <FeatureCard />]}
   * // Results in: Row 1: [Card1, Card2], Row 2: [Card4, Card3] (if alternate=true)
   */
  blocks: React.ReactNode[];

  /** 
   * Enable alternating row reversal for zig-zag layout pattern
   * 
   * When true, odd-numbered rows (0-indexed) swap their left/right content
   * placement, creating visually engaging alternating layouts.
   * 
   * @defaultValue true
   * 
   * @example
   * // alternate=true:  [A,B], [D,C], [E,F], [H,G]
   * // alternate=false: [A,B], [C,D], [E,F], [G,H]
   */
  alternate?: boolean;

  /** Material-UI sx prop for custom styling and layout overrides */
  sx?: SxProps<Theme>;

  /** 
   * Vertical spacing between grid rows
   * 
   * Supports responsive values for different screen sizes. Higher values
   * create more visual separation between content rows.
   * 
   * @defaultValue { xs: 2, md: 4 }
   * 
   * @example
   * rowSpacing={3} // Fixed spacing
   * rowSpacing={{ xs: 1, sm: 2, md: 3 }} // Responsive spacing
   */
  rowSpacing?: number | { xs?: number; sm?: number; md?: number };

  /** 
   * Horizontal spacing between grid columns
   * 
   * Controls the gap between left and right content within each row.
   * Responsive values allow tighter spacing on mobile devices.
   * 
   * @defaultValue { xs: 2, md: 5 }
   * 
   * @example
   * columnSpacing={4} // Fixed spacing
   * columnSpacing={{ xs: 2, lg: 6 }} // Responsive spacing
   */
  columnSpacing?: number | { xs?: number; sm?: number; md?: number };

  /** 
   * Responsive breakpoint for two-column layout activation
   * 
   * Determines at which screen size the layout transitions from single-column
   * (mobile) to two-column (desktop) display. Below this breakpoint, content
   * stacks vertically in natural order.
   * 
   * @defaultValue 'md'
   * 
   * @example
   * breakpoint="sm" // Two columns from small screens up
   * breakpoint="lg" // Two columns only on large screens up
   */
  breakpoint?: 'sm' | 'md' | 'lg';

  /** 
   * Apply automatic capitalization to header text
   * 
   * When true, transforms header text using capitalizeWords function
   * for consistent title case formatting across sections.
   * 
   * @defaultValue true
   * 
   * @example
   * capitalizeHeader={true}  // "our team" → "Our Team"
   * capitalizeHeader={false} // "our team" → "our team"
   */
  capitalizeHeader?: boolean;
};

// ============================================================================
// RESPONSIVE GRID CONFIGURATION
// ============================================================================

/**
 * Predefined responsive grid size configurations for different breakpoints
 * 
 * Maps breakpoint names to Material-UI Grid size objects that control
 * when content transitions from single-column to two-column layouts.
 * 
 * @constant bpSizes
 * 
 * @example
 * // 'md' breakpoint: Single column on xs, two columns from md up
 * bpSizes.md // { xs: 12, md: 6 }
 * 
 * // 'sm' breakpoint: Single column on xs, two columns from sm up  
 * bpSizes.sm // { xs: 12, sm: 6 }
 */
const bpSizes = {
  sm: { xs: 12, sm: 6 },   // Two columns from small screens up
  md: { xs: 12, md: 6 },   // Two columns from medium screens up (default)
  lg: { xs: 12, lg: 6 },   // Two columns from large screens up
} as const;

// ============================================================================
// MAIN COMPONENT IMPLEMENTATION
// ============================================================================

/**
 * AlternateGrid - Dynamic Zig-Zag Layout Component
 * 
 * Creates sophisticated alternating two-column layouts perfect for showcasing
 * features, timelines, comparisons, or any content that benefits from visual
 * rhythm and engaging zig-zag patterns.
 * 
 * **Key Behaviors:**
 * - **Mobile-First**: Single column stacking below breakpoint for optimal mobile UX
 * - **Desktop Alternation**: Automatic left-right alternation creates visual interest
 * - **Smart Pairing**: Flat content arrays automatically chunk into logical rows
 * - **Flexible Content**: Supports any React nodes with automatic key generation
 * - **Performance Optimized**: Memoized processing prevents unnecessary re-computations
 * 
 * **Layout Logic:**
 * 1. Content chunks into pairs: [A,B], [C,D], [E,F]...
 * 2. Even rows maintain order: [A,B], [E,F]...
 * 3. Odd rows reverse when alternate=true: [D,C], [H,G]...
 * 4. Mobile always maintains natural reading order
 * 
 * @param {AlternateGridProps} props - Component configuration and content
 * @returns {React.ReactElement} Rendered alternating grid layout
 * 
 * @example
 * // Basic feature showcase with alternating layout
 * <AlternateGrid
 *   header="Our Key Features"
 *   blocks={[
 *     <FeatureCard title="Fast" />,
 *     <FeatureCard title="Secure" />,
 *     <FeatureCard title="Scalable" />,
 *     <FeatureCard title="Reliable" />
 *   ]}
 * />
 * 
 * @example
 * // Timeline layout with custom spacing
 * <AlternateGrid
 *   blocks={timelineEvents}
 *   breakpoint="lg"
 *   rowSpacing={{ xs: 3, lg: 6 }}
 *   alternate={false}
 * />
 */
export default function AlternateGrid({
  header,
  blocks,
  alternate = true,
  sx,
  rowSpacing = { xs: 2, md: 4 },
  columnSpacing = { xs: 2, md: 5 },
  breakpoint = 'md',
  capitalizeHeader = true,
}: AlternateGridProps) {

  // ========================================================================
  // CONTENT PROCESSING
  // ========================================================================
  
  /** 
   * Memoized content pairing for performance optimization
   * 
   * Converts flat block array into paired rows only when blocks change,
   * preventing unnecessary re-computations on parent re-renders.
   */
  const pairs = React.useMemo(() => chunkPairs(React.Children.toArray(blocks)), [blocks]);
  
  /** Extract responsive grid sizes for current breakpoint */
  const sizes = bpSizes[breakpoint];

  // ========================================================================
  // COMPONENT RENDER
  // ========================================================================
  
  return (
    <Container>
      <StandardStack size="compact" sx={sx}>
        {/* ================================================================
            OPTIONAL HEADER SECTION
            ================================================================ */}
        {header ? (
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <SectionTitle>
              {capitalizeHeader ? capitalizeWords(header) : header}
            </SectionTitle>
          </Box>
        ) : null}

        {/* ================================================================
            ALTERNATING GRID CONTENT
            ================================================================ */}
        <Box sx={{ width: '100%' }}>
          {pairs.map(([left, right], rowIdx) => {
            /** Determine if current row should be reversed for alternation */
            const reverse = alternate && rowIdx % 2 === 1;
            
            /** Apply alternation by swapping cell order */
            const cells = reverse ? [right, left] : [left, right];

            return (
              <Grid
                key={`row-${rowIdx}`}
                container
                columnSpacing={columnSpacing}
                rowSpacing={rowSpacing}
                sx={{ mb: { xs: 2, md: 3 } }}
              >
                {cells.map((node, colIdx) => {
                  // Skip rendering null/undefined content
                  if (node == null) return null;
                  
                  /** Generate stable keys for React reconciliation */
                  const key =
                    React.isValidElement(node) && node.key != null
                      ? String(node.key)
                      : `cell-${rowIdx}-${colIdx}`;

                  return (
                    <Grid
                      key={key}
                      size={sizes} // Material-UI v7 Grid size prop
                      sx={{
                        display: 'flex',
                        alignItems: 'stretch',              // Equal height columns
                        // Intelligent column justification for visual balance
                        justifyContent: colIdx === 0 ? 'flex-end' : 'flex-start',
                      }}
                    >
                      {/* Content wrapper with max-width constraint */}
                      <Box sx={{ width: '100%', maxWidth: 720 }}>
                        {node}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Box>
      </StandardStack>
    </Container>
  );
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Chunks a flat array into pairs for row-based grid layout
 * 
 * Transforms linear content arrays into paired tuples suitable for two-column
 * grid rendering. Handles odd-length arrays by padding with null values.
 * 
 * **Algorithm:**
 * - Processes array in steps of 2
 * - Creates tuples [left, right] for each row
 * - Fills missing values with null for incomplete pairs
 * - Maintains type safety with generic constraints
 * 
 * @template T - Type of array elements
 * @param {T[]} arr - Flat array of content elements to pair
 * @returns {Array<[T | null, T | null]>} Array of paired tuples for grid rows
 * 
 * @example
 * // Even-length array
 * chunkPairs(['A', 'B', 'C', 'D'])
 * // Returns: [['A', 'B'], ['C', 'D']]
 * 
 * @example
 * // Odd-length array with padding
 * chunkPairs(['A', 'B', 'C'])
 * // Returns: [['A', 'B'], ['C', null]]
 * 
 * @example
 * // React components
 * chunkPairs([<Card1 />, <Card2 />, <Card3 />])
 * // Returns: [[<Card1 />, <Card2 />], [<Card3 />, null]]
 */
function chunkPairs<T>(arr: T[]): Array<[T | null, T | null]> {
  const out: Array<[T | null, T | null]> = [];
  
  // Process array in steps of 2, creating paired tuples
  for (let i = 0; i < arr.length; i += 2) {
    out.push([
      arr[i] ?? null,      // Left column content (or null if missing)
      arr[i + 1] ?? null   // Right column content (or null if missing)
    ]);
  }
  
  return out;
}

