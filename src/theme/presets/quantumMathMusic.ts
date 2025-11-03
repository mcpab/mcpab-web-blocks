// src/theme/presets/quantumMathMusic.ts
import type { ThemeOptions } from '@mui/material/styles';
import { grey, blueGrey } from '@mui/material/colors';
import { generateTypographyVariant } from '../typographyScale';

/**
 * Quantum / Math / Music preset
 * - Palette: deep space blues + math-lab cyan + musical magenta
 * - Typography: readable body, expressive headings, code-friendly defaults
 * - Components: links, code, blockquotes, container paddings
 *
 * Use with:
 *   import { createSiteTheme } from '@mcpab/web-blocks';
 *   import { quantumMathMusicPreset } from '@mcpab/web-blocks/theme';
 *   const theme = createSiteTheme({ preset: quantumMathMusicPreset });
 */
export const quantumMathMusicPreset: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#1E3A8A', contrastText: '#FFFFFF' }, // deep blue (indigo-800-ish)
    secondary: { main: '#C026D3', contrastText: '#FFFFFF' }, // magenta/violet
    info: { main: '#06B6D4', contrastText: '#002b36' }, // cyan (lab / math accent)
    text: { primary: blueGrey[900], secondary: blueGrey[700], disabled: blueGrey[300] },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    divider: blueGrey[100],
    contrastThreshold: 3,
    tonalOffset: 0.08,
  },

  shape: { borderRadius: 14 },

  typography: {
    // Swap fonts as you like in the app; these are sane defaults.
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, " +
      "'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    // Body – a touch larger for long-form readability
    body1: generateTypographyVariant({
      fontSize: '1.0625rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.75,
      breakpoints: { sm: '1.09375rem', md: '1.125rem' },
    }),
    body2: generateTypographyVariant({
      fontSize: '0.9375rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    }),

    // Custom reading voices
    lead: generateTypographyVariant({
      fontSize: '1.1875rem',
      fontWeight: 400,
      letterSpacing: '0.005em',
      lineHeight: 1.85,
      breakpoints: { sm: '1.21875rem', md: '1.25rem' },
    }),
    narrative: generateTypographyVariant({
      fontSize: '1.0625rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.75,
      breakpoints: { sm: '1.09375rem', md: '1.125rem' },
    }),
    strapline: generateTypographyVariant({
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.6,
      breakpoints: { sm: '1.03125rem' },
    }),
    eyebrow: generateTypographyVariant({
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      lineHeight: 1.4,
    }),
    finePrint: generateTypographyVariant({
      fontSize: '0.8125rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.55,
    }),
    quote: generateTypographyVariant({
      fontSize: '1.125rem',
      fontWeight: 400,
      letterSpacing: '0.005em',
      lineHeight: 1.9,
      breakpoints: { sm: '1.15625rem' },
    }),

    // Headings – precise but musical (slightly tighter tracking)
    h1: generateTypographyVariant({
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      breakpoints: { sm: '3.25rem', md: '3.75rem', lg: '4.25rem' },
    }),
    h2: generateTypographyVariant({
      fontSize: '2.125rem',
      fontWeight: 650 as unknown as number, // keep as numeric if your helper enforces number
      letterSpacing: '-0.015em',
      lineHeight: 1.12,
      breakpoints: { sm: '2.5rem', md: '3rem' },
    }),
    h3: generateTypographyVariant({
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.16,
      breakpoints: { sm: '2rem', md: '2.25rem' },
    }),
    h4: generateTypographyVariant({
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      breakpoints: { sm: '1.75rem', md: '2rem' },
    }),
    h5: generateTypographyVariant({
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.28,
      breakpoints: { sm: '1.5rem' },
    }),
    h6: generateTypographyVariant({
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.34,
      breakpoints: { sm: '1.25rem' },
    }),

    // UI bits
    subtitle1: generateTypographyVariant({
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    }),
    subtitle2: generateTypographyVariant({
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.01em',
      lineHeight: 1.45,
    }),
    button: generateTypographyVariant({
      fontSize: '0.95rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      lineHeight: 1.4,
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
      letterSpacing: '0.12em',
      lineHeight: 1.4,
    }),
  },

  components: {
    // Link tone (music-magenta on hover underline)
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

    // Typography semantics (keep customs mapped)
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
          body1: 'p', body2: 'p', subtitle1: 'p', subtitle2: 'p',
          lead: 'p', narrative: 'p', strapline: 'p', eyebrow: 'p',
          finePrint: 'p', quote: 'blockquote',
          caption: 'span', overline: 'span', button: 'span',
        },
      },
      variants: [
        { props: { variant: 'narrative' }, style: { maxWidth: '70ch' } },
        { props: { variant: 'lead' }, style: { maxWidth: '68ch' } },
        { props: { variant: 'quote' }, style: { maxWidth: '62ch', fontStyle: 'italic' } },
        { props: { variant: 'strapline' }, style: ({ theme }) => ({
          color: theme.palette.info.main,
          letterSpacing: '0.08em',
          fontWeight: 700,
        })},
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

    // Buttons a bit pill-shaped but not too loud
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 999 },
        sizeLarge: { paddingInline: '1.25rem', paddingBlock: '0.75rem' },
      },
    },

    // Container paddings (shared with sections)
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: { root: { paddingInline: 'var(--container-pad)' } },
    },

    // Baseline: code, math, selection, keyboard cues
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

        // Code & math-friendly defaults
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
        kbd: {
          fontFamily: "Menlo, Consolas, monospace",
          fontSize: '0.8rem',
          padding: '0.1rem 0.35rem',
          borderRadius: 6,
          border: `1px solid ${grey[300]}`,
          background: '#FCFEFF',
          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.06)',
        },
        blockquote: {
          borderLeft: `4px solid ${theme.palette.info.main}`,
          margin: '1rem 0',
          padding: '0.5rem 1rem',
          color: blueGrey[700],
          background: '#F5FAFB',
          borderRadius: 8,
        },
        table: {
          borderCollapse: 'separate',
          borderSpacing: 0,
        },
        'th, td': {
          padding: '0.625rem 0.75rem',
          borderBottom: `1px solid ${grey[200]}`,
        },
        th: {
          background: '#F4F7FB',
          textAlign: 'left',
          fontWeight: 600,
        },
      }),
    },
  },
};
