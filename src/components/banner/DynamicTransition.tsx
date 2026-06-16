'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
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

type FrameItem = { frame: React.ReactNode; key: number };

type TransitionState = {
  activeIndex: number;
  previousIndex: number;
  hasTransitioned: boolean;
};

function clampFrameIndex(index: number, length: number): number {
  return Math.max(0, Math.min(index, Math.max(length - 1, 0)));
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
 * Frame content is memoized, while active/outgoing frame indices are kept in state.
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
export function DynamicTransition({
  frames,
  interval = 2000,
  transitionDuration = 1000,
  startIndex = 0,
  boxProps,
}: DynamicTransitionProps) {
  const frameItems = React.useMemo<FrameItem[]>(
    () => (frames ?? []).map((frame, index) => ({ frame, key: index })),
    [frames],
  );

  return (
    <DynamicTransitionInner
      frameItems={frameItems}
      interval={interval}
      transitionDuration={transitionDuration}
      startIndex={startIndex}
      boxProps={boxProps}
      key={`${frameItems.length}:${startIndex}`}
    />
  );
}

type DynamicTransitionInnerProps = Omit<DynamicTransitionProps, 'frames'> & {
  frameItems: FrameItem[];
};

function DynamicTransitionInner({
  frameItems,
  interval = 2000,
  transitionDuration = 1000,
  startIndex = 0,
  boxProps,
}: DynamicTransitionInnerProps) {
  const initialIndex = clampFrameIndex(startIndex, frameItems.length);
  const [transitionState, setTransitionState] = React.useState<TransitionState>({
    activeIndex: initialIndex,
    previousIndex: initialIndex,
    hasTransitioned: false,
  });

  // Timer only when 2+ frames
  React.useEffect(() => {
    const hasCycle = frameItems.length >= 2;
    if (!hasCycle) return;

    const period = Math.max(0, interval) + Math.max(0, transitionDuration);
    const id = window.setInterval(() => {
      setTransitionState((current) => {
        const nextIndex = (current.activeIndex + 1) % frameItems.length;
        return {
          activeIndex: nextIndex,
          previousIndex: current.activeIndex,
          hasTransitioned: true,
        };
      });
    }, period);

    return () => window.clearInterval(id);
  }, [frameItems.length, interval, transitionDuration]);

  // --- Now branch the render safely -----------------------------------------
  const len = frameItems.length;
  if (len === 0) return null;

  if (len === 1) {
    return (
      <Box
        {...boxProps}
        sx={{
          position: 'relative',
          inset: 0,
          width: '100%',
          height: '100%',
          ...(boxProps?.sx || {}),
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>{frameItems[0]?.frame}</div>
      </Box>
    );
  }

  const inFrame = frameItems[transitionState.activeIndex];
  const outFrame = frameItems[transitionState.previousIndex];

  return (
    <Box
      {...boxProps}
      sx={{
        position: 'relative',
        inset: 0,
        width: '100%',
        height: '100%',
        ...(boxProps?.sx || {}),
      }}
    >
      {!transitionState.hasTransitioned ? (
        <div style={{ position: 'absolute', inset: 0 }}>{inFrame?.frame}</div>
      ) : (
        <>
          <Fade in={false} timeout={transitionDuration} key={`out-${outFrame?.key}`}>
            <div style={{ position: 'absolute', inset: 0, willChange: 'opacity' }}>
              {outFrame?.frame}
            </div>
          </Fade>
          <Fade in timeout={transitionDuration} key={`in-${inFrame?.key}`}>
            <div style={{ position: 'absolute', inset: 0, willChange: 'opacity' }}>
              {inFrame?.frame}
            </div>
          </Fade>
        </>
      )}
    </Box>
  );
}

export default React.memo(DynamicTransition);
