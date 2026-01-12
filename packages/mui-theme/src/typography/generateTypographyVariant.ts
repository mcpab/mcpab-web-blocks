export type VariantScale = {
  fontSize: string;
  fontWeight: number;
  letterSpacing?: string;
  lineHeight?: string | number;
  breakpoints?: Partial<{
    sm: string; // ≥600px
    md: string; // ≥900px
    lg: string; // ≥1200px
  }>;
};

export function generateTypographyVariant({
  fontSize,
  fontWeight,
  letterSpacing = '0em',
  lineHeight = 1.2,
  breakpoints = {},
}: VariantScale) {
  return {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    '@media (min-width:600px)': {
      fontSize: breakpoints.sm ?? fontSize,
    },
    '@media (min-width:900px)': {
      fontSize: breakpoints.md ?? breakpoints.sm ?? fontSize,
    },
    '@media (min-width:1200px)': {
      fontSize: breakpoints.lg ?? breakpoints.md ?? fontSize,
    },
  } as const;
}
