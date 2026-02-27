/**
 * Semantic page section with responsive height tokens.
 *
 * Exposes `--section-h` for descendants, supports optional centered content,
 * and can lock to a definite height for absolute-positioned layers.
 */

import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
import { SECTION_MIN_H, type SectionSize } from '../design/sectionTokens';

export type SectionProps = BoxProps & {
  /** Preset minimum heights (responsive). Defaults to 'md'. */
  size?: SectionSize;
  /** Center content both vertically and horizontally. Defaults to false. */
  center?: boolean;
  /** Optional id for in-page anchors (TOC / jump links). */
  id?: string;
  /**
   * If true, also sets a *definite* height equal to the size token.
   * Useful for heroes/carousels where absolute layers must fill exactly.
   */
  lockHeight?: boolean; 
  children: React.ReactNode;
};

/**
 * Structural section wrapper for page composition.
 */
export default function Section({
  size = 'md',
  center = false,
  lockHeight = false,
  sx,
  children,
  id,
  ...rest
}: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={[
        {
          // Put the token into a CSS var so descendants can reference it if needed.
          '--section-h': SECTION_MIN_H[size] as any,
          minHeight: 'var(--section-h)',
          ...(lockHeight ? { height: 'var(--section-h)' } : null), // makes height definite
          position: 'relative', // establish containing block for abs children
          display: 'flex',
          ...(center ? { alignItems: 'center', justifyContent: 'center' } : null),
          '& > *': { flex: 1, minHeight: 'inherit' },
        },
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
}
