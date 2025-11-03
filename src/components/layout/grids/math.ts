// src/layout/grid/math.ts
import { clamp, ratioToBuckets } from '../../../core/layout/grid';

export const clampCols = (n: number) => clamp(n, 1, 11);
export const ratioToCols = (r: number) => clampCols(ratioToBuckets(r, 12));
