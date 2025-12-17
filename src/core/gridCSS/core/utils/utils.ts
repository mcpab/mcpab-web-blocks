import { TrackBreadth, CssLength, GridUnitValue } from "../cssStringify";

 

function isCssLength(b: TrackBreadth): b is CssLength {
  return b.unit === 'px' || b.unit === 'em' || b.unit === 'rem' || b.unit === '%';
}

export function formatCssLength(len: CssLength): string {
  return `${len.value}${len.unit}`;
}

export function formatTrackBreadth(b: TrackBreadth): string {
  // CssLength branch
  if (isCssLength(b)) {
    return formatCssLength(b);
  }

  // All the non-CssLength variants
  switch (b.unit) {
    case 'fr':
      return `${b.value}fr`;

    case 'min-content':
    case 'max-content':
    case 'auto':
      return b.unit;

    case 'fit-content':
      return `fit-content(${formatCssLength(b.value)})`;
  }
  // No default: if you later add a new variant, TS will complain that
  // the switch is not exhaustive.
}

export function formatGridUnitValue(v: GridUnitValue): string {
  if (v.unit === 'minmax') {
    const min = formatTrackBreadth(v.min);
    const max = formatTrackBreadth(v.max);
    return `minmax(${min}, ${max})`;
  }

  return formatTrackBreadth(v);
}

 