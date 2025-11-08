'use client';

// ============================================================================
// INTERACTIVE CLICK-TO-REVEAL CARD COMPONENT
// ============================================================================

/**
 * @fileoverview ClickTextImage - Interactive Expandable Image Card
 * 
 * A sophisticated interactive card component that transforms from a visual teaser
 * into a detailed content panel. Perfect for feature showcases, portfolio items,
 * service descriptions, or any content that benefits from progressive disclosure.
 * 
 * **Core Functionality:**
 * - **Visual Teaser**: Displays title over background image with dark overlay
 * - **Smooth Transitions**: Elegant fade transitions between states with overlay changes
 * - **Content Reveal**: Click/tap to reveal detailed scrollable content panel
 * - **Layout Stability**: Fixed minimum height prevents layout shifts during transitions
 * - **Accessibility First**: Full keyboard navigation and screen reader support
 * 
 * **Design Patterns:**
 * - **Progressive Disclosure**: Show overview first, details on demand
 * - **Visual Hierarchy**: Clear distinction between teaser and detailed states
 * - **Mobile Optimized**: Touch-friendly interactions with proper scroll handling
 * - **Performance Conscious**: Efficient rendering with CSS Grid and minimal DOM updates
 * 
 * **Architecture:**
 * - Built on Material-UI Paper foundation for consistent elevation
 * - CSS Grid layout for precise overlay positioning
 * - BackgroundBox integration for optimized image handling
 * - React state management for smooth open/close transitions
 * 
 * @author MCPAB Web Blocks
 * @version 1.0.0
 * @since 2024
 * 
 * @example
 * // Basic service card with expandable details
 * <ClickTextImage
 *   title="Compassionate, Evidence-Based Care"
 *   image="/images/healthcare-hero.jpg"
 *   text="We combine warmth with scientific rigor to help you move forward..."
 *   ImageComponent={Image}
 * />
 * 
 * @example
 * // Portfolio item with rich content
 * <ClickTextImage
 *   title={<Typography variant="h5">Project Showcase</Typography>}
 *   image={portfolioImage}
 *   text={
 *     <Box>
 *       <Typography variant="body1">Detailed project description...</Typography>
 *       <List>
 *         <ListItem>Feature one</ListItem>
 *         <ListItem>Feature two</ListItem>
 *       </List>
 *     </Box>
 *   }
 *   ImageComponent={NextImage}
 * />
 */

// ============================================================================
// IMPORTS AND DEPENDENCIES
// ============================================================================

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useId } from 'react';
import type { StaticImageDataLike, ImageComponentLike } from '../../core/image/image-types';
import BackgroundBox from '../layout/BackgroundBox';

// ============================================================================
// TYPE DEFINITIONS AND INTERFACES
// ============================================================================

/**
 * Props configuration for ClickTextImage component
 * 
 * Defines the interface for creating interactive expandable image cards with
 * progressive disclosure patterns. Supports both static and dynamic content
 * with framework-agnostic image handling.
 * 
 * @interface ClickTextImageProps
 */
export type ClickTextImageProps = {
  /** 
   * Short teaser title displayed over the background image in closed state
   * 
   * This content is shown prominently over the image with a dark overlay
   * to ensure readability. Can be simple text or rich React elements for
   * complex formatting needs.
   * 
   * @example
   * title="Our Amazing Service"
   * 
   * @example
   * title={
   *   <Box>
   *     <Typography variant="h5">Premium Feature</Typography>
   *     <Typography variant="subtitle2">New & Improved</Typography>
   *   </Box>
   * }
   */
  title: React.ReactNode;

  /** 
   * Background image for the card display
   * 
   * Supports both static image imports (with blur placeholders) and string
   * paths for dynamic images. Images are displayed using BackgroundBox with
   * optimized loading and responsive behavior.
   * 
   * @example
   * image="/images/service-hero.jpg"
   * 
   * @example
   * // Static import with automatic optimization
   * import heroImage from '/public/images/hero.jpg';
   * image={heroImage}
   */
  image: StaticImageDataLike | string;

  /** 
   * Detailed content revealed when card is expanded
   * 
   * This content appears in a scrollable white overlay panel when the card
   * is clicked. Can include any React content including text, lists, buttons,
   * or complex layouts. Long content automatically becomes scrollable.
   * 
   * @example
   * text="Detailed description of our service offering..."
   * 
   * @example
   * text={
   *   <Box>
   *     <Typography variant="body1">Service details...</Typography>
   *     <Button variant="contained">Get Started</Button>
   *   </Box>
   * }
   */
  text: React.ReactNode | string;

  /**
   * Framework-agnostic image component for optimized rendering
   * 
   * Allows integration with any image optimization library (Next.js Image,
   * Gatsby Image, etc.) while maintaining consistent component behavior.
   * 
   * @example
   * ImageComponent={NextImage}      // Next.js Image component
   * ImageComponent="img"            // Standard HTML img element
   * ImageComponent={CustomImage}    // Custom image component
   */
  ImageComponent: ImageComponentLike;
};

// ============================================================================
// MAIN COMPONENT IMPLEMENTATION
// ============================================================================

/**
 * ClickTextImage - Interactive Expandable Image Card
 * 
 * Creates engaging interactive cards that transform from visual teasers into
 * detailed content panels. Perfect for progressive disclosure patterns where
 * you want to show an overview first and reveal details on user interaction.
 * 
 * **Interaction Patterns:**
 * - **Click/Tap**: Toggle between closed and open states
 * - **Keyboard**: Enter or Space keys for accessibility
 * - **Visual Feedback**: Smooth fade transitions with overlay changes
 * - **Content Management**: Automatic scrolling for long content
 * 
 * **State Management:**
 * - **Closed State**: Dark overlay (45% opacity) with title and "Learn more" button
 * - **Open State**: White overlay (100% opacity) with detailed content and "Close" button
 * - **Transitions**: 200ms fade transition between states
 * - **Layout Stability**: Fixed minimum height prevents layout shifts
 * 
 * **Accessibility Features:**
 * - ARIA attributes for screen reader compatibility
 * - Keyboard navigation support (Enter/Space)
 * - Focus indicators for keyboard users
 * - Semantic button roles and labels
 * - Content structure with proper heading hierarchy
 * 
 * @param {ClickTextImageProps} props - Component configuration and content
 * @returns {React.ReactElement} Rendered interactive card component
 * 
 * @example
 * // Service showcase card
 * <ClickTextImage
 *   title="Expert Consultation"
 *   image="/services/consultation.jpg"
 *   text="Our expert team provides personalized consultation..."
 *   ImageComponent={Image}
 * />
 * 
 * @example
 * // Portfolio item with rich content
 * <ClickTextImage
 *   title="Award-Winning Design"
 *   image={portfolioImage}
 *   text={
 *     <Box>
 *       <Typography variant="h6">Project Overview</Typography>
 *       <Typography>Detailed project description...</Typography>
 *       <Button variant="outlined">View Case Study</Button>
 *     </Box>
 *   }
 *   ImageComponent={NextImage}
 * />
 */
const ClickTextImage: React.FC<ClickTextImageProps> = ({ title, image, text, ImageComponent }) => {

  // ========================================================================
  // STATE MANAGEMENT
  // ========================================================================
  
  /** Track open/closed state for content reveal */
  const [open, setOpen] = React.useState(false);
  
  /** Generate unique ID for ARIA relationships */
  const contentId = useId();

  // ========================================================================
  // CONFIGURATION AND STYLING
  // ========================================================================
  
  /** 
   * Dynamic image configuration with overlay transitions
   * 
   * Changes overlay color based on open state:
   * - Closed: Dark overlay (45% black) for text readability
   * - Open: White overlay (100% white) for content background
   */
  const imageConf = React.useMemo(
    () => ({
      src: image,
      overlayColor: open ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0.45)',
    }),
    [image, open]
  );

  /** 
   * Responsive minimum height configuration
   * 
   * Ensures consistent card dimensions across breakpoints to prevent
   * layout shifts during state transitions. Scales appropriately for
   * different screen sizes and content density.
   */
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 } as const;

  // ========================================================================
  // INTERACTION HANDLERS
  // ========================================================================
  
  /** Toggle between open and closed states */
  const toggleOpen = () => setOpen((v) => !v);
  
  /** Explicitly open the content panel */
  const openPanel = () => setOpen(true);
  
  /** Explicitly close the content panel */
  const closePanel = () => setOpen(false);

  /** 
   * Keyboard accessibility handler
   * 
   * Enables keyboard interaction following ARIA guidelines:
   * - Enter key: Activate the card toggle
   * - Space key: Activate the card toggle (prevents page scroll)
   * - Other keys: No action (maintain normal browser behavior)
   */
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent page scroll on Space key
      toggleOpen();
    }
  };

  // ========================================================================
  // COMPONENT RENDER
  // ========================================================================
  
  return (
    <Paper
      onClick={toggleOpen}
      onKeyDown={onKeyDown}
      tabIndex={0}                    // Make focusable for keyboard users
      role="button"                   // Semantic role for screen readers
      aria-expanded={open}            // Current expansion state
      aria-controls={contentId}       // Link to controlled content
      aria-label="Toggle card details" // Accessible label
      sx={{
        position: 'relative',
        display: 'grid',              // CSS Grid for precise overlay positioning
        gridTemplateRows: '1fr',      // Single row that fills available space
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',           // Clip overlays to card boundaries
        cursor: 'pointer',
        minHeight: TILE_MIN_H,        // Consistent dimensions for layout stability
        appearance: 'none',           // Remove default button appearance
        border: 0,
        background: 'inherit',
        textAlign: 'inherit',
        transition: 'transform 0.2s ease-in-out', // Subtle hover feedback
        '&:hover': {
          transform: 'translateY(-2px)', // Gentle lift effect on hover
        },
        '&:focus-visible': (theme) => ({
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        }),
      }}
    >
      {/* ================================================================
          BACKGROUND IMAGE WITH DYNAMIC OVERLAY
          ================================================================ */}
      <BackgroundBox 
        ImageComponent={ImageComponent} 
        imageConf={imageConf} 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          pointerEvents: 'none'  // Allow clicks to pass through to parent
        }} 
      />

      {/* ================================================================
          CLOSED STATE - TITLE AND TEASER
          ================================================================ */}
      {!open && (
        <Box
          sx={{
            gridRow: '1 / -1',        // Occupy the entire grid cell
            gridColumn: '1 / -1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Position content at bottom
            p: 3,
            zIndex: 1,                // Above background but below open content
          }}
        >
          {/* Main title with text shadow for readability */}
          <Typography
            variant="narrative"
            color="common.white"
            sx={{ 
              textShadow: '0 2px 6px rgba(0,0,0,0.35)',
              mb: 1 
            }}
          >
            {title}
          </Typography>

          {/* Learn more button */}
          <Box sx={{ pt: 1 }}>
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent click handler
                openPanel();
              }}
              sx={{ 
                fontWeight: 'bold', 
                color: 'common.white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      )}

      {/* ================================================================
          OPEN STATE - DETAILED CONTENT PANEL
          ================================================================ */}
      <Fade in={open} unmountOnExit timeout={200}>
        <Box
          id={contentId}
          aria-label="Card details"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          sx={{
            gridRow: '1 / -1',        // Fill the entire card area
            gridColumn: '1 / -1',
            overflowY: 'auto',        // Enable vertical scrolling for long content
            p: 3,
            bgcolor: 'common.white',
            color: 'text.primary',
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
            overscrollBehavior: 'contain',    // Prevent parent page scroll
            zIndex: 2,                // Above all other content
            maxHeight: '100%',        // Ensure proper scrolling behavior
          }}
        >
          {/* Main content area */}
          <Typography variant="narrative" sx={{ mb: 2 }}>
            {text}
          </Typography>

          {/* Close button */}
          <Button
            variant="text"
            size="small"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click handler
              closePanel();
            }}
            sx={{ 
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Paper>
  );
};

// ============================================================================
// COMPONENT EXPORT
// ============================================================================

/**
 * ClickTextImage Component Export
 * 
 * Interactive expandable image card component for progressive content disclosure.
 * Perfect for feature showcases, portfolio items, service descriptions, and any
 * content that benefits from visual teaser-to-detail revelation patterns.
 * 
 * **Key Features:**
 * - Smooth state transitions with fade effects
 * - Framework-agnostic image optimization support
 * - Full accessibility with keyboard navigation
 * - Layout-stable design prevents content shifting
 * - Mobile-optimized touch interactions
 * - Scrollable content panels for long-form text
 * 
 * **Use Cases:**
 * - Service offering cards with detailed descriptions
 * - Portfolio items with project details
 * - Feature highlights with expanded explanations
 * - Team member profiles with biography reveals
 * - Product showcases with specification details
 * 
 * **Performance Benefits:**
 * - CSS Grid-based layout for efficient rendering
 * - Memoized image configuration for minimal re-renders
 * - Optimized event handling with proper propagation control
 * - Lightweight DOM structure with minimal nesting
 * 
 * @see {@link ClickTextImageProps} for complete props interface
 * @see {@link BackgroundBox} for image optimization patterns
 * @see {@link StaticImageDataLike} for supported image types
 */
export default ClickTextImage;
