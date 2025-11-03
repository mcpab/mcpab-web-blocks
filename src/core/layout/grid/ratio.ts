// src/core/layout/grid/ratio.ts
export const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

/** Convert 0–1 ratio to a discrete bucket (e.g., 12-column grid) */
export const ratioToBuckets = (
  r: number,
  buckets: number,
  opts: { min?: number; max?: number } = {}
) => {
  const { min = 1, max = buckets - 1 } = opts;
  const c = Math.max(0.05, Math.min(0.95, r));
  return clamp(Math.round(c * buckets), min, max);
};
