import "@mui/material/styles";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    narrative: CSSProperties;
    lead: CSSProperties;
    strapline: CSSProperties;
    eyebrow: CSSProperties;
    finePrint: CSSProperties;
    quote: CSSProperties;
  }

  interface TypographyVariantsOptions {
    narrative?: CSSProperties;
    lead?: CSSProperties;
    strapline?: CSSProperties;
    eyebrow?: CSSProperties;
    finePrint?: CSSProperties;
    quote?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    narrative: true;
    lead: true;
    strapline: true;
    eyebrow: true;
    finePrint: true;
    quote: true;
  }
}

export {};
