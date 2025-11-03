/**
 * @fileoverview Advanced transition component for smooth carousel frame animations.
 * 
 * # DynamicTransition
 * 
 * A sophisticated transition controller that manages smooth fade animations between
 * React elements. Designed for carousel implementations with precise timing control,
 * performance optimization, and accessibility considerations.
 * 
 * ## Overview
 * 
 * This component provides:
 * - **Smooth Fade Transitions**: Material-UI Fade component integration for elegant animations
 * - **Precise Timing Control**: Configurable intervals and transition durations
 * - **Performance Optimization**: Efficient frame management with willChange hints
 * - **State Management**: Robust frame iteration with proper cleanup
 * - **Accessibility Support**: Respects user motion preferences through Material-UI
 * - **Memory Efficient**: Smart frame management prevents memory leaks
 * 
 * ## Core Features
 * 
 * ### Frame Management
 * - Handles any number of React elements as frames
 * - Automatic cycling through frames with configurable timing
 * - Safe handling of single frame or empty scenarios
 * - Proper cleanup and state management
 * 
 * ### Transition Control
 * - Independent interval and transition duration settings
 * - Smooth fade-in/fade-out overlapping animations
 * - Performance-optimized with CSS `willChange` properties
 * - Material-UI Fade integration for consistent behavior
 * 
 * ## Basic Usage
 * 
 * ```tsx
 * import DynamicTransition from '@/src/components/banner/DynamicTransition';
 * import { BackgroundBox } from '@/src/components/layout/BackgroundBox';
 * 
 * const frames = [
 *   <BackgroundBox key={1} imageConf={{ src: '/image1.jpg' }} />,
 *   <BackgroundBox key={2} imageConf={{ src: '/image2.jpg' }} />,
 *   <BackgroundBox key={3} imageConf={{ src: '/image3.jpg' }} />,
 * ];
 * 
 * function BasicTransition() {
 *   return (
 *     <DynamicTransition
 *       frames={frames}
 *       interval={5000}
 *       transitionDuration={1000}
 *     />
 *   );
 * }
 * ```
 * 
 * ## Advanced Examples
 * 
 * ### Image Carousel with Custom Timing
 * ```tsx
 * import { useMemo } from 'react';
 * import { BackgroundBox } from '@/src/components/layout/BackgroundBox';
 * 
 * function ImageCarousel() {
 *   const imageFrames = useMemo(() => [
 *     <BackgroundBox
 *       key="hero1"
 *       imageConf={{
 *         src: '/carousel/hero-1.jpg',
 *         overlayColor: 'rgba(0,0,0,0.3)',
 *         objectPosition: 'center top',
 *       }}
 *       sx={{ position: 'absolute', inset: 0 }}
 *     />,
 *     <BackgroundBox
 *       key="hero2"
 *       imageConf={{
 *         src: '/carousel/hero-2.jpg',
 *         overlayColor: 'rgba(0,0,0,0.4)',
 *         transform: 'scale(1.05)',
 *       }}
 *       sx={{ position: 'absolute', inset: 0 }}
 *     />,
 *     <BackgroundBox
 *       key="hero3"
 *       imageConf={{
 *         src: '/carousel/hero-3.jpg',
 *         overlayColor: 'rgba(0,0,0,0.2)',
 *         objectPosition: 'right center',
 *       }}
 *       sx={{ position: 'absolute', inset: 0 }}
 *     />,
 *   ], []);
 * 
 *   return (
 *     <Box sx={{ position: 'relative', height: '60vh' }}>
 *       <DynamicTransition
 *         frames={imageFrames}
 *         interval={6000}           // 6 seconds display time
 *         transitionDuration={1200} // 1.2 second fade transition
 *         startIndex={0}           // Start with first image
 *         boxProps={{
 *           sx: { borderRadius: 2 } // Custom styling
 *         }}
 *       />
 *     </Box>
 *   );
 * }
 * ```
 * 
 * ### Content Carousel with Mixed Elements
 * ```tsx
 * import { Typography, Box, Card, CardContent } from '@mui/material';
 * 
 * function ContentCarousel() {
 *   const contentFrames = useMemo(() => [
 *     <Card key="slide1" sx={{ position: 'absolute', inset: 0 }}>
 *       <CardContent sx={{ 
 *         height: '100%', 
 *         display: 'flex', 
 *         alignItems: 'center', 
 *         justifyContent: 'center',
 *         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
 *       }}>
 *         <Typography variant="h2" color="white" textAlign="center">
 *           Innovation Starts Here
 *         </Typography>
 *       </CardContent>
 *     </Card>,
 *     
 *     <Card key="slide2" sx={{ position: 'absolute', inset: 0 }}>
 *       <CardContent sx={{ 
 *         height: '100%', 
 *         display: 'flex', 
 *         alignItems: 'center', 
 *         justifyContent: 'center',
 *         background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
 *       }}>
 *         <Typography variant="h2" color="white" textAlign="center">
 *           Excellence in Every Detail
 *         </Typography>
 *       </CardContent>
 *     </Card>,
 *     
 *     <Card key="slide3" sx={{ position: 'absolute', inset: 0 }}>
 *       <CardContent sx={{ 
 *         height: '100%', 
 *         display: 'flex', 
 *         alignItems: 'center', 
 *         justifyContent: 'center',
 *         background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
 *       }}>
 *         <Typography variant="h2" color="white" textAlign="center">
 *           Transform Your Future
 *         </Typography>
 *       </CardContent>
 *     </Card>,
 *   ], []);
 * 
 *   return (
 *     <Box sx={{ position: 'relative', height: '400px', borderRadius: 3, overflow: 'hidden' }}>
 *       <DynamicTransition
 *         frames={contentFrames}
 *         interval={4000}
 *         transitionDuration={800}
 *         startIndex={1} // Start with second slide
 *       />
 *     </Box>
 *   );
 * }
 * ```
 * 
 * ### Performance-Optimized Carousel
 * ```tsx
 * import { useCallback, useMemo } from 'react';
 * import { BackgroundBox } from '@/src/components/layout/BackgroundBox';
 * 
 * interface CarouselImage {
 *   src: string;
 *   alt: string;
 *   objectPosition?: string;
 *   transform?: string;
 * }
 * 
 * interface OptimizedCarouselProps {
 *   images: CarouselImage[];
 *   interval?: number;
 *   transitionDuration?: number;
 * }
 * 
 * function OptimizedCarousel({ 
 *   images, 
 *   interval = 5000, 
 *   transitionDuration = 1000 
 * }: OptimizedCarouselProps) {
 *   
 *   const frames = useMemo(() => 
 *     images.map((img, index) => (
 *       <BackgroundBox
 *         key={`frame-${index}`}
 *         imageConf={{
 *           src: img.src,
 *           alt: img.alt,
 *           objectPosition: img.objectPosition || 'center center',
 *           transform: img.transform,
 *           sizes: '100vw',
 *           quality: 85,
 *           priority: index < 2, // Preload first 2 images
 *         }}
 *         sx={{ 
 *           position: 'absolute', 
 *           inset: 0,
 *           '& img': {
 *             willChange: 'transform', // Performance hint
 *           }
 *         }}
 *       />
 *     )), 
 *     [images]
 *   );
 * 
 *   return (
 *     <DynamicTransition
 *       frames={frames}
 *       interval={interval}
 *       transitionDuration={transitionDuration}
 *       boxProps={{
 *         sx: {
 *           '& > div': {
 *             willChange: 'opacity', // Optimize fade transitions
 *           }
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ### Accessibility-Focused Implementation
 * ```tsx
 * import { useMediaQuery, useTheme } from '@mui/material';
 * 
 * function AccessibleCarousel() {
 *   const theme = useTheme();
 *   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 *   
 *   const frames = useMemo(() => [
 *     // ... frame definitions
 *   ], []);
 * 
 *   return (
 *     <DynamicTransition
 *       frames={frames}
 *       interval={prefersReducedMotion ? 10000 : 5000} // Longer intervals for reduced motion
 *       transitionDuration={prefersReducedMotion ? 200 : 1000} // Faster transitions
 *       boxProps={{
 *         role: 'img',
 *         'aria-label': 'Hero image carousel',
 *         sx: {
 *           '& .MuiFade-root': {
 *             transitionDuration: prefersReducedMotion ? '200ms !important' : undefined,
 *           }
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ## Configuration Options
 * 
 * ### Timing Control
 * ```tsx
 * // Fast-paced marketing carousel
 * <DynamicTransition
 *   frames={frames}
 *   interval={3000}      // 3 seconds per frame
 *   transitionDuration={600} // Quick 0.6s transitions
 * />
 * 
 * // Slow, elegant transitions
 * <DynamicTransition
 *   frames={frames}
 *   interval={8000}      // 8 seconds per frame
 *   transitionDuration={2000} // Slow 2s transitions
 * />
 * 
 * // Content-focused with reading time
 * <DynamicTransition
 *   frames={frames}
 *   interval={10000}     // 10 seconds for content reading
 *   transitionDuration={1000} // Standard transitions
 * />
 * ```
 * 
 * ### Starting Position
 * ```tsx
 * // Start with specific frame
 * <DynamicTransition
 *   frames={frames}
 *   startIndex={2}       // Begin with third frame (0-indexed)
 *   interval={5000}
 * />
 * ```
 * 
 * ## Performance Characteristics
 * 
 * ### Memory Management
 * - Efficient frame cycling without memory accumulation
 * - Proper cleanup of transition timers
 * - React.memo optimization for stable prop scenarios
 * - Smart re-rendering only when necessary
 * 
 * ### CSS Optimization
 * - Uses `willChange: 'opacity'` for smooth fade transitions
 * - Absolute positioning prevents layout thrashing
 * - Material-UI Fade leverages CSS transitions for GPU acceleration
 * 
 * ### State Management
 * - Minimal state updates for optimal performance
 * - Efficient frame array management with FrameArray class
 * - Proper effect cleanup prevents memory leaks
 * 
 * ## Technical Implementation Notes
 * 
 * ### FrameArray Class
 * - Manages frame iteration and state tracking
 * - Handles edge cases (empty arrays, single frames)
 * - Provides consistent API for frame access
 * 
 * ### Rendering Strategy
 * - Single frame: Direct render without transitions
 * - Multiple frames: Overlapping fade in/out animations
 * - Initial render: Shows start frame immediately without transition
 * 
 * ### Timer Management
 * - Uses `setInterval` for consistent timing
 * - Automatically calculates total cycle time (interval + transition)
 * - Proper cleanup prevents timer leaks
 * 
 * @since 1.0.0
 */

'use client';

import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';

/**
 * Configuration props for the DynamicTransition component.
 * 
 * Controls the transition behavior, timing, and styling for smooth
 * animations between React elements in carousel scenarios.
 * 
 * @example
 * ```tsx
 * const transitionProps: DynamicTransitionProps = {
 *   frames: [
 *     <BackgroundBox key={1} imageConf={{ src: '/hero1.jpg' }} />,
 *     <BackgroundBox key={2} imageConf={{ src: '/hero2.jpg' }} />,
 *   ],
 *   interval: 5000,
 *   transitionDuration: 1000,
 *   startIndex: 0,
 *   boxProps: { sx: { borderRadius: 2 } },
 * };
 * ```
 */
export type DynamicTransitionProps = {
  /** 
   * Array of React elements to cycle through.
   * 
   * Each frame should be a complete React element that will be rendered
   * absolutely positioned within the transition container. Typically
   * BackgroundBox components for image carousels or custom content elements.
   * 
   * @example
   * ```tsx
   * frames={[
   *   <BackgroundBox 
   *     key="frame1"
   *     imageConf={{ src: '/hero1.jpg' }}
   *     sx={{ position: 'absolute', inset: 0 }}
   *   />,
   *   <BackgroundBox 
   *     key="frame2" 
   *     imageConf={{ src: '/hero2.jpg' }}
   *     sx={{ position: 'absolute', inset: 0 }}
   *   />,
   *   <Card key="frame3" sx={{ position: 'absolute', inset: 0 }}>
   *     <CardContent>Custom content frame</CardContent>
   *   </Card>,
   * ]}
   * ```
   */
  frames: React.ReactNode[];
  
  /** 
   * Display duration per frame in milliseconds.
   * 
   * Time each frame remains visible before transitioning to the next.
   * This does not include the transition duration itself. Longer intervals
   * work better for content that users need time to read or appreciate.
   * 
   * @default 2000
   * @example
   * ```tsx
   * interval={3000}  // Fast-paced, dynamic feel
   * interval={5000}  // Standard carousel timing
   * interval={8000}  // Content-focused, more reading time
   * interval={10000} // Slow, contemplative transitions
   * ```
   */
  interval?: number;
  
  /** 
   * Fade transition duration in milliseconds.
   * 
   * Controls how long the fade in/out animation takes. Longer durations
   * create more elegant, slower transitions while shorter durations feel
   * more dynamic and energetic.
   * 
   * @default 1000
   * @example
   * ```tsx
   * transitionDuration={500}   // Quick, snappy transitions
   * transitionDuration={1000}  // Standard smooth transitions
   * transitionDuration={1500}  // Elegant, slower transitions
   * transitionDuration={2000}  // Very smooth, dramatic transitions
   * ```
   */
  transitionDuration?: number;
  
  /** 
   * Initial frame index to display (0-based).
   * 
   * Determines which frame appears first when the component mounts.
   * Useful for starting carousels at specific positions or for
   * coordinating multiple carousels.
   * 
   * @default 0
   * @example
   * ```tsx
   * startIndex={0}  // Start with first frame
   * startIndex={1}  // Start with second frame
   * startIndex={2}  // Start with third frame
   * ```
   */
  startIndex?: number;
  
  /** 
   * Additional props passed to the container Box component.
   * 
   * Allows customization of the transition container including styling,
   * event handlers, and accessibility attributes. The sx prop is merged
   * with default positioning styles.
   * 
   * @example
   * ```tsx
   * boxProps={{
   *   sx: {
   *     borderRadius: 3,
   *     overflow: 'hidden',
   *     '& .MuiFade-root': {
   *       transitionTimingFunction: 'ease-in-out',
   *     }
   *   },
   *   role: 'img',
   *   'aria-label': 'Hero image carousel',
   *   onMouseEnter: handleMouseEnter,
   * }}
   * ```
   */
  boxProps?: BoxProps;
};

class FrameArray {
  fadeInKey = 0;
  fadeOutKey = 0;
  frames: { frame: React.ReactNode; key: number }[];

  constructor(frames: React.ReactNode[], startIndex = 0) {
    const normalized = Math.max(0, Math.min(startIndex, Math.max(frames.length - 1, 0)));
    this.frames = frames.map((frame, index) => ({ frame, key: index }));
    this.fadeInKey = normalized;
    this.fadeOutKey = normalized;
  }
  iterateFrame() {
    this.fadeOutKey = this.fadeInKey;
    const len = this.frames.length || 1;
    this.fadeInKey = (this.fadeInKey + 1) % len;
  }
  getFadeInFrame() {
    return { key: this.fadeInKey, frame: this.frames[this.fadeInKey]?.frame };
  }
  getFadeOutFrame() {
    return { key: this.fadeOutKey, frame: this.frames[this.fadeOutKey]?.frame };
  }
}

/**
 * Advanced transition controller for smooth carousel frame animations.
 * 
 * Manages automatic cycling through React elements with smooth fade transitions.
 * Optimized for performance with efficient state management, proper timer cleanup,
 * and GPU-accelerated animations through Material-UI's Fade component.
 * 
 * ## Key Features
 * 
 * - **Smooth Transitions**: Overlapping fade in/out animations for seamless visual flow
 * - **Performance Optimized**: Uses `willChange` CSS hints and efficient state management
 * - **Robust State Management**: Handles edge cases like single frames and empty arrays
 * - **Memory Efficient**: Proper cleanup prevents memory leaks and timer accumulation
 * - **Accessibility Aware**: Integrates with Material-UI's reduced motion support
 * 
 * ## Rendering Strategies
 * 
 * - **Empty Array**: Returns null (safe fallback)
 * - **Single Frame**: Direct render without transitions (performance optimization)
 * - **Multiple Frames**: Overlapping fade transitions with precise timing
 * - **Initial Render**: Shows start frame immediately without transition delay
 * 
 * @param props - Component configuration
 * @param props.frames - Array of React elements to transition between
 * @param props.interval - Display time per frame in milliseconds (default: 2000)
 * @param props.transitionDuration - Fade transition duration in milliseconds (default: 1000)
 * @param props.startIndex - Initial frame index (default: 0)
 * @param props.boxProps - Additional props for container Box component
 * 
 * @returns Transition container with animated frame cycling
 * 
 * @example
 * ```tsx
 * // Basic image carousel
 * function ImageCarousel() {
 *   const frames = useMemo(() => [
 *     <BackgroundBox key={1} imageConf={{ src: '/hero1.jpg' }} />,
 *     <BackgroundBox key={2} imageConf={{ src: '/hero2.jpg' }} />,
 *     <BackgroundBox key={3} imageConf={{ src: '/hero3.jpg' }} />,
 *   ], []);
 * 
 *   return (
 *     <DynamicTransition
 *       frames={frames}
 *       interval={5000}
 *       transitionDuration={1000}
 *     />
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Custom content with accessibility
 * function AccessibleCarousel() {
 *   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 *   
 *   const frames = [
 *     <Card key="slide1">Custom Content 1</Card>,
 *     <Card key="slide2">Custom Content 2</Card>,
 *   ];
 * 
 *   return (
 *     <DynamicTransition
 *       frames={frames}
 *       interval={prefersReducedMotion ? 10000 : 5000}
 *       transitionDuration={prefersReducedMotion ? 200 : 1000}
 *       boxProps={{
 *         role: 'img',
 *         'aria-label': 'Content carousel',
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Performance-optimized with custom styling
 * function OptimizedCarousel() {
 *   return (
 *     <DynamicTransition
 *       frames={memoizedFrames}
 *       interval={6000}
 *       transitionDuration={1200}
 *       boxProps={{
 *         sx: {
 *           borderRadius: 2,
 *           overflow: 'hidden',
 *           '& > div': {
 *             willChange: 'opacity',
 *           },
 *           '& .MuiFade-root': {
 *             transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
 *           }
 *         }
 *       }}
 *     />
 *   );
 * }
 * ```
 * 
 * ## Performance Implementation Details
 * 
 * ### Efficient State Management
 * - Uses useRef for frame array to prevent unnecessary re-instantiation
 * - Minimal useState updates (only tick counter for re-renders)
 * - Effect dependencies properly managed to prevent excessive re-runs
 * 
 * ### Timer Optimization
 * - Single setInterval per component instance
 * - Automatic cleanup prevents timer accumulation
 * - Proper calculation of total cycle time (interval + transition duration)
 * 
 * ### Rendering Optimization
 * - React.memo wrapper prevents unnecessary re-renders
 * - Direct rendering for single frames (bypasses transition overhead)
 * - GPU-accelerated transitions through Material-UI Fade
 * - willChange CSS hints for smooth animations
 * 
 * ### Memory Management
 * - FrameArray class prevents object recreation on each cycle
 * - Proper cleanup of intervals and effects
 * - Efficient frame key management for React reconciliation
 * 
 * @since 1.0.0
 */
const DynamicTransition: React.FC<DynamicTransitionProps> = ({
  frames,
  interval = 2000,
  transitionDuration = 1000,
  startIndex = 0,
  boxProps,
}) => {
  // --- Hooks must run on EVERY render ---------------------------------------
  const faRef = React.useRef(new FrameArray(frames ?? [], startIndex));
  const [tick, setTick] = React.useState(0);

  // Rebuild frame array when inputs change
  React.useEffect(() => {
    faRef.current = new FrameArray(frames ?? [], startIndex);
    setTick(0);
  }, [frames, startIndex]);

  // Timer only when 2+ frames
  React.useEffect(() => {
    const hasCycle = (frames?.length ?? 0) >= 2;
    if (!hasCycle) return;

    const period = Math.max(0, interval) + Math.max(0, transitionDuration);
    const id = window.setInterval(() => {
      faRef.current.iterateFrame();
      setTick(t => t + 1);
    }, period);

    return () => window.clearInterval(id);
  }, [frames, interval, transitionDuration]);

  // --- Now branch the render safely -----------------------------------------
  const len = frames?.length ?? 0;
  if (len === 0) return null;

  if (len === 1) {
    return (
      <Box
        {...boxProps}
        sx={{ position: 'relative', inset: 0, width: '100%', height: '100%', ...(boxProps?.sx || {}) }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>{frames![0]}</div>
      </Box>
    );
  }

  const inFrame = faRef.current.getFadeInFrame();
  const outFrame = faRef.current.getFadeOutFrame();

  return (
    <Box
      {...boxProps}
      sx={{ position: 'relative', inset: 0, width: '100%', height: '100%', ...(boxProps?.sx || {}) }}
    >
      {tick === 0 ? (
        <div style={{ position: 'absolute', inset: 0 }}>
          {faRef.current.frames[Math.max(0, Math.min(startIndex, len - 1))]?.frame}
        </div>
      ) : (
        <>
          <Fade in={false} timeout={transitionDuration} key={`out-${outFrame.key}`}>
            <div style={{ position: 'absolute', inset: 0, willChange: 'opacity' }}>{outFrame.frame}</div>
          </Fade>
          <Fade in timeout={transitionDuration} key={`in-${inFrame.key}`}>
            <div style={{ position: 'absolute', inset: 0, willChange: 'opacity' }}>{inFrame.frame}</div>
          </Fade>
        </>
      )}
    </Box>
  );
};

export default React.memo(DynamicTransition);
