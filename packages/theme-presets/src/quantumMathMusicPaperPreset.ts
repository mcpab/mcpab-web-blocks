import "@mcpab/mui-theme";

// src/theme/presets/quantumMathMusic.paper.ts
import { generateTypographyVariant } from "@mcpab/mui-theme";
import { blueGrey, grey } from '@mui/material/colors';
import type { ThemeOptions } from '@mui/material/styles';
/**
 * Paper / textbook preset (serif body + clean sans UI)
 *
 * Fonts (pick ONE install path):
 *  A) Next.js (recommended): use next/font/google
 *     - Crimson_Pro (body) + Inter (UI)
 *  B) NPM: @fontsource/*
 *     - @fontsource/crimson-pro + @fontsource/inter
 *
 * Then set CSS variables in your app/layout and this theme will use them:
 *   --font-textbook (serif body)
 *   --font-ui (sans UI)
 */
export const quantumMathMusicPaperPreset: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#1E3A8A', contrastText: '#FFFFFF' },
    secondary: { main: '#C026D3', contrastText: '#FFFFFF' },
    info: { main: '#06B6D4', contrastText: '#002b36' },
    text: { primary: blueGrey[900], secondary: blueGrey[700], disabled: blueGrey[300] },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    divider: blueGrey[100],
    contrastThreshold: 3,
    tonalOffset: 0.08,
  },

  shape: { borderRadius: 14 },

  typography: {
    /**
     * Paper feel:
     * - serif body with true italics
     * - slightly smaller, denser defaults than “marketing” sites
     * - UI still uses a clean sans for buttons/menus
     */
    fontFamily: "var(--font-textbook), Crimson Pro, Charter, Georgia, 'Times New Roman', serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    body1: generateTypographyVariant({
      fontSize: '1.0rem',
      fontWeight: 400,
      letterSpacing: '0.005em',
      lineHeight: 1.8,
      breakpoints: { sm: '1.0625rem', md: '1.09375rem' },
    }),
    body2: generateTypographyVariant({
      fontSize: '0.9375rem',
      fontWeight: 400,
      letterSpacing: '0.005em',
      lineHeight: 1.7,
    }),

    // keep the names; tweak sizes/spacing for “paper”
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

    // headings: less “display”, more “book chapter”
    h1: generateTypographyVariant({
      fontSize: '2.4rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.12,
      breakpoints: { sm: '2.9rem', md: '3.3rem', lg: '3.6rem' },
    }),
    h2: generateTypographyVariant({
      fontSize: '1.95rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.18,
      breakpoints: { sm: '2.25rem', md: '2.6rem' },
    }),
    h3: generateTypographyVariant({
      fontSize: '1.55rem',
      fontWeight: 700,
      lineHeight: 1.22,
      breakpoints: { sm: '1.75rem', md: '1.95rem' },
    }),
    h4: generateTypographyVariant({
      fontSize: '1.3rem',
      fontWeight: 700,
      lineHeight: 1.25,
      breakpoints: { sm: '1.45rem', md: '1.6rem' },
    }),
    h5: generateTypographyVariant({
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.3,
      breakpoints: { sm: '1.25rem' },
    }),
    h6: generateTypographyVariant({
      fontSize: '1.0rem',
      fontWeight: 700,
      lineHeight: 1.35,
      breakpoints: { sm: '1.125rem' },
    }),

    // UI bits: use the sans variable (menus/buttons should feel “UI”, not “book”)
    subtitle1: generateTypographyVariant({
      fontSize: '0.95rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    }),
    subtitle2: generateTypographyVariant({
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
      lineHeight: 1.45,
    }),
    button: generateTypographyVariant({
      fontSize: '0.9rem',
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: 1.3,
    }),
    caption: generateTypographyVariant({
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.4,
    }),
    overline: generateTypographyVariant({
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.14em',
      lineHeight: 1.35,
    }),
  },

  components: {
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          textUnderlineOffset: '0.22em',
          textDecorationThickness: 'from-font',
          textDecorationColor: theme.palette.secondary.light,
          transition: 'color .15s ease, text-decoration-color .15s ease',
          '&:hover': { textDecorationColor: theme.palette.secondary.main },
          '&:visited': { color: theme.palette.secondary.dark },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.info.main}`,
            outlineOffset: 2,
          },
        }),
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'p',
          subtitle1: 'p',
          subtitle2: 'p',
          lead: 'p',
          narrative: 'p',
          strapline: 'p',
          eyebrow: 'p',
          finePrint: 'p',
          quote: 'blockquote',
          caption: 'span',
          overline: 'span',
          button: 'span',
        },
      },
      variants: [
        { props: { variant: 'narrative' }, style: { maxWidth: '72ch' } },
        { props: { variant: 'lead' }, style: { maxWidth: '70ch' } },
        { props: { variant: 'quote' }, style: { maxWidth: '64ch', fontStyle: 'italic' } },
        {
          props: { variant: 'strapline' },
          style: ({ theme }) => ({
            color: theme.palette.info.main,
            letterSpacing: '0.08em',
            fontWeight: 700,
            fontFamily:
              "var(--font-ui), Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
          }),
        },
      ],
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          const v = ownerState.variant;
          const base = { marginTop: 0 };
          if (v === 'h1') return { ...base, marginBottom: theme.spacing(3) };
          if (v === 'h2') return { ...base, marginBottom: theme.spacing(2.5) };
          if (v === 'h3' || v === 'h4') return { ...base, marginBottom: theme.spacing(2) };
          if (v === 'h5' || v === 'h6') return { ...base, marginBottom: theme.spacing(1.5) };
          return base;
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          borderRadius: 999,
          fontFamily:
            "var(--font-ui), Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
          letterSpacing: theme.typography.button.letterSpacing,
        }),
        sizeLarge: { paddingInline: '1.25rem', paddingBlock: '0.75rem' },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: { root: { paddingInline: 'var(--container-pad)' } },
    },

    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ':root': {
          '--block-h': 'clamp(420px, 35vh, 620px)',
          '--section-gap': 'clamp(32px, 5vh, 72px)',
          '--container-pad': 'clamp(16px, 3vw, 32px)',
        },
        '::selection': { backgroundColor: '#D0F4FF' },
        html: { scrollBehavior: 'smooth' },
        body: { colorScheme: 'light' },

        // Make the “paper” feel more like print
        'p, li': { hyphens: 'auto' },
        blockquote: {
          borderLeft: `4px solid ${theme.palette.info.main}`,
          margin: '1rem 0',
          padding: '0.5rem 1rem',
          color: blueGrey[700],
          background: '#F5FAFB',
          borderRadius: 8,
        },

        // Code still mono; keep from looking “webby”
        code: {
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          fontSize: '0.9375rem',
          background: '#F7FBFF',
          padding: '0.125rem 0.4rem',
          borderRadius: 6,
          border: `1px solid ${grey[200]}`,
        },
        pre: {
          overflowX: 'auto',
          borderRadius: 10,
          padding: '1rem',
          background: '#F7FBFF',
          border: `1px solid ${grey[200]}`,
        },
      }),
    },
  },
};
