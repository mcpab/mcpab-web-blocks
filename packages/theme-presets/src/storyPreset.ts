import { createSiteTheme } from '@mcpab/mui-theme';
import { generateTypographyVariant } from '@mcpab/mui-theme';

export const storyPresets = createSiteTheme({
  overrides: {
    typography: {
      lead: generateTypographyVariant({
        fontSize: '1.125rem',
        fontWeight: 400,
        letterSpacing: '0.002em',
        lineHeight: 1.9,
        breakpoints: { sm: '1.1875rem', md: '1.21875rem' },
      }),
      narrative: generateTypographyVariant({
        fontSize: '1.0rem',
        fontWeight: 400,
        letterSpacing: '0.005em',
        lineHeight: 1.8,
        breakpoints: { sm: '1.0625rem', md: '1.09375rem' },
      }),
      strapline: generateTypographyVariant({
        fontSize: '0.9375rem',
        fontWeight: 400,
        letterSpacing: '0.02em',
        lineHeight: 1.6,
        breakpoints: { sm: '1.0rem' },
      }),
      eyebrow: generateTypographyVariant({
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        lineHeight: 1.35,
      }),
      finePrint: generateTypographyVariant({
        fontSize: '0.8125rem',
        fontWeight: 400,
        letterSpacing: '0.015em',
        lineHeight: 1.6,
      }),
      quote: generateTypographyVariant({
        fontSize: '1.0625rem',
        fontWeight: 400,
        letterSpacing: '0.002em',
        lineHeight: 1.95,
        breakpoints: { sm: '1.125rem' },
      }),
    },
  },
});
