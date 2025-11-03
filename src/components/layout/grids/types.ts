// src/layout/grid/types.ts
/** Grid size config across MUI-like breakpoints (12-column grid) */
export type Size = {
  xs: number;
  sm?: number;
  md: number;
  lg?: number;
  xl?: number;
};

/** Text column configuration */
export type TextSplitProps = {
  /** Named preset (e.g., '60-40') or custom ratio string ('58-42') */
  preset?: string;
  /** Decimal ratio 0–1 for text column share (e.g., 0.6 → 60% text) */
  ratio?: number;
};
