// src/theme/types/typography-aug.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    lead: React.CSSProperties;
    narrative: React.CSSProperties;
    strapline: React.CSSProperties;
    eyebrow: React.CSSProperties;
    finePrint: React.CSSProperties;
    quote: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    lead?: React.CSSProperties;
    narrative?: React.CSSProperties;
    strapline?: React.CSSProperties;
    eyebrow?: React.CSSProperties;
    finePrint?: React.CSSProperties;
    quote?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    lead: true;
    narrative: true;
    strapline: true;
    eyebrow: true;
    finePrint: true;
    quote: true;
  }
}

// make this a module (prevents global augmentation weirdness)
export {};
