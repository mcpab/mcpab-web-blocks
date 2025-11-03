// src/layout/grid/split.ts
import type { Size, TextSplitProps } from './types';
import type { PresetName } from './presets';
import { TEXT_PRESETS } from './presets';
import { ratioToCols, clampCols } from './math';

/** Calculate text column grid sizing */
export function getTextSplit(props?: TextSplitProps): Size {
  const { preset, ratio } = props ?? {};

  // 1) Named preset
  if (preset && (preset as PresetName) in TEXT_PRESETS) {
    const s = TEXT_PRESETS[preset as PresetName];
    return { xs: 12, sm: 12, md: s.md, lg: s.lg, xl: s.xl };
  }

  // 2) Custom ratio string, e.g. "58-42"
  if (typeof preset === 'string') {
    const m = preset.match(/^(\d{1,2})\s*-\s*(\d{1,2})$/);
    if (m) {
      const text = parseInt(m[1], 10);
      const media = parseInt(m[2], 10);
      return { xs: 12, sm: 12, md: ratioToCols(text / (text + media)) };
    }
  }

  // 3) Decimal ratio
  if (typeof ratio === 'number') {
    return { xs: 12, sm: 12, md: ratioToCols(ratio) };
  }

  // 4) Default 50–50
  return { xs: 12, sm: 12, md: 6 };
}

/** Complementary media column sizing */
export function computeMediaSplit(text: Size): Size {
  const out: Size = { xs: 12, sm: 12, md: 12 };
  (['md', 'lg', 'xl'] as const).forEach((bp) => {
    const t = text[bp];
    if (typeof t === 'number') out[bp] = clampCols(12 - t);
  });
  return out;
}

/** Validate and normalize text split config */
export function normalizeTextSplit(config?: TextSplitProps): TextSplitProps {
  if (!config) return { preset: '50-50' };

  const normalized: TextSplitProps = { ...config };

  if (typeof normalized.ratio === 'number') {
    normalized.ratio = Math.min(0.95, Math.max(0.05, normalized.ratio));
  }

  if (typeof normalized.preset === 'string' && normalized.preset.includes('-')) {
    const ok = normalized.preset.match(/^(\d{1,2})\s*-\s*(\d{1,2})$/);
    if (!ok) normalized.preset = '50-50';
  }

  return normalized;
}
