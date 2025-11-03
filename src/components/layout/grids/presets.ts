// src/layout/grid/presets.ts
import type { Size } from './types';

export const TEXT_PRESETS: Record<string, Size> = {
  '40-60': { xs: 12, md: 4 },
  '45-55': { xs: 12, md: 5 },
  '50-50': { xs: 12, md: 6 },
  '55-45': { xs: 12, md: 7 },
  '60-40': { xs: 12, md: 8 },
};

export type PresetName = keyof typeof TEXT_PRESETS;
