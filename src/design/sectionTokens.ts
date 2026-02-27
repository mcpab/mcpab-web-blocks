/**
 * Responsive minimum-height design tokens for section-sized layout blocks.
 *
 * Values are keyed by semantic size and map to MUI breakpoint values (`xs`, `md`, `lg`).
 */
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Section min-height tokens by semantic size.
 */
export const SECTION_MIN_H = {
  micro: { xs: '160px', md: '200px', lg: '240px' },
  compact: { xs: '300px', md: '360px', lg: '400px' },
  sm: { xs: '420px', md: '520px', lg: '560px' },
  md: { xs: '520px', md: '640px', lg: '720px' },
  lg: { xs: '600px', md: '760px', lg: '880px' },
  xl: { xs: '720px', md: '880px', lg: '1040px' },
} as const;

/** Semantic size keys for {@link SECTION_MIN_H}. */
export type SectionSize = keyof typeof SECTION_MIN_H;

/** Convenience helper for MUI `sx` usage. */
export const sectionMinHeightSx = (size: SectionSize): SxProps<Theme> => ({
  minHeight: SECTION_MIN_H[size],
});
