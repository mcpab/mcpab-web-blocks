'use client';

import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';

/** Props for {@link DynamicTransition}. */
export type DynamicTransitionProps = {
  /** Ordered list of React nodes to cycle through as slides. */
  frames: React.ReactNode[];
  /** Time each slide is fully visible, in milliseconds. @defaultValue 2000 */
  interval?: number;
  /** Crossfade duration in milliseconds. @defaultValue 1000 */
  transitionDuration?: number;
  /** Index of the slide shown first. Clamped to valid range. @defaultValue 0 */
  startIndex?: number;
  /** Props forwarded to the root `Box` wrapper. */
  boxProps?: BoxProps;
};

/**
 * Tracks the current and outgoing frame indices for the crossfade cycle.
 * Maintains `fadeInKey` (next slide) and `fadeOutKey` (current slide) separately
 * so both `<Fade>` elements can be keyed independently.
 *
 * @internal
 */
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
 * Client-side carousel engine that crossfades between an array of React nodes.
 *
 * Renders three cases:
 * - **0 frames** — returns `null`.
 * - **1 frame** — renders the single frame statically (no timer, no transitions).
 * - **2+ frames** — starts an interval timer (`interval + transitionDuration` ms period)
 *   and crossfades between the outgoing and incoming frames using MUI `<Fade>`.
 *
 * Frame content is kept in a `ref` (`FrameArray`) so the timer closure never goes stale.
 * The `tick` state counter is the only re-render trigger.
 *
 * @example
 * ```tsx
 * <DynamicTransition
 *   frames={slides}
 *   interval={5000}
 *   transitionDuration={900}
 * />
 * ```
 *
 * @see {@link BlockCarousel} which builds the frame array from `BackgroundBox` slides.
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
      setTick((t) => t + 1);
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
