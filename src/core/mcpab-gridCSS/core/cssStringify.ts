// --- Types (as you defined) ---
export type CssLength = { unit: "px" | "em" | "rem" | "%"; value: number };

export type TrackBreadth =
  | CssLength
  | { unit: "fr"; value: number }
  | { unit: "min-content" }
  | { unit: "max-content" }
  | { unit: "fit-content"; value: CssLength }
  | { unit: "auto" };

export type GridUnitValue =
  | TrackBreadth
  | { unit: "minmax"; min: TrackBreadth; max: TrackBreadth };

export type GapValue = CssLength;

// --- Converters (domain -> CSS string) ---

export function cssLengthToString(len: CssLength): string {
  return `${len.value}${len.unit}`;
}

// Type guard: is this object a CssLength?
function isCssLength(v: unknown): v is CssLength {
  return (
    typeof v === "object" &&
    v !== null &&
    "unit" in v &&
    "value" in v &&
    (v as any).unit &&
    typeof (v as any).value === "number"
  );
}

export function trackBreadthToString(b: TrackBreadth): string {
  // CssLength case
  if (isCssLength(b)) return cssLengthToString(b);

  switch (b.unit) {
    case "fr":
      return `${b.value}fr`;
    case "auto":
      return "auto";
    case "min-content":
      return "min-content";
    case "max-content":
      return "max-content";
    case "fit-content":
      return `fit-content(${cssLengthToString(b.value)})`;
    default: {
      // Exhaustiveness guard: if you add units later, TS should complain here.
      const _never: never = b;
      return String(_never);
    }
  }
}

export function gridUnitValueToString(v: GridUnitValue): string {
  // "minmax" wrapper case
  if (typeof v === "object" && v !== null && "unit" in v && (v as any).unit === "minmax") {
    const mm = v as Extract<GridUnitValue, { unit: "minmax" }>;
    return `minmax(${trackBreadthToString(mm.min)}, ${trackBreadthToString(mm.max)})`;
  }

  // Otherwise it's a TrackBreadth
  return trackBreadthToString(v as TrackBreadth);
}

export function gapValueToString(g: GapValue): string {
  return cssLengthToString(g);
}
