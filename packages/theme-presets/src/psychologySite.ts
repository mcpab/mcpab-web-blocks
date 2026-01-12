import type { ThemeOptions } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { generateTypographyVariant } from '../../mui-theme/src/typography/generateTypographyVariant';

export const psychologyOrlandoPreset: ThemeOptions = {
  palette: {
    primary: { main: '#33808C', contrastText: '#fff' },
    secondary: { main: '#F1A9A7', contrastText: '#111' },
    text: { primary: grey[900], secondary: grey[700], disabled: grey[400] },
    background: { default: '#fff', paper: '#fff' },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: { borderRadius: 16 },
  typography: {

    fontFamily: 'var(--font-ysabeau), sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    // body text
    body1: generateTypographyVariant({
      fontSize: '1.0625rem',
      fontWeight: 400,                // ← add
      letterSpacing: '0.02em',
      lineHeight: 1.75,
      breakpoints: { sm: '1.09375rem', md: '1.125rem' },
    }),
    body2: generateTypographyVariant({
      fontSize: '0.9375rem',
      fontWeight: 400,                // ← add
      letterSpacing: '0.02em',
      lineHeight: 1.6,
    }),

    // (double-check the rest; typical weights shown)
    h1: generateTypographyVariant({ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.1, breakpoints: { sm: '3rem', md: '3.75rem', lg: '4.5rem' } }),
    h2: generateTypographyVariant({ fontSize: '2rem', fontWeight: 600, lineHeight: 1.15, breakpoints: { sm: '2.5rem', md: '3rem', lg: '3.5rem' } }),
    h3: generateTypographyVariant({ fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.2, breakpoints: { sm: '2rem', md: '2.5rem' } }),
    h4: generateTypographyVariant({ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.25, breakpoints: { sm: '1.75rem', md: '2rem' } }),
    h5: generateTypographyVariant({ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.3, breakpoints: { sm: '1.5rem' } }),
    h6: generateTypographyVariant({ fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.35, breakpoints: { sm: '1.25rem' } }),

    lead: generateTypographyVariant({ fontSize: '1.1875rem', fontWeight: 400, lineHeight: 1.85, breakpoints: { sm: '1.21875rem', md: '1.25rem' } }),
    narrative: generateTypographyVariant({ fontSize: '1.0625rem', fontWeight: 400, lineHeight: 1.75, breakpoints: { sm: '1.09375rem', md: '1.125rem' } }),
    strapline: generateTypographyVariant({ fontSize: '1rem', fontWeight: 400, lineHeight: 1.6, breakpoints: { sm: '1.03125rem' } }),
    eyebrow: generateTypographyVariant({ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', lineHeight: 1.4 }),
    finePrint: generateTypographyVariant({ fontSize: '0.8125rem', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 1.55 }),
    quote: generateTypographyVariant({ fontSize: '1.125rem', fontWeight: 400, lineHeight: 1.9, breakpoints: { sm: '1.15625rem' } }),
    button: generateTypographyVariant({ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.4 }),
    caption: generateTypographyVariant({ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1.4 }),
    overline: generateTypographyVariant({ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', lineHeight: 1.4 }),
    subtitle1: generateTypographyVariant({ fontSize: '1rem', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.5 }),
    subtitle2: generateTypographyVariant({ fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.45 }),
  },
  components: {
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          textUnderlineOffset: '0.2em',
          textDecorationThickness: 'from-font',
          textDecorationColor: theme.palette.primary.light,
          transition: 'color .15s ease, text-decoration-color .15s ease',
          '&:hover': { textDecorationColor: theme.palette.primary.main },
          '&:visited': { color: theme.palette.primary.dark },
          '&:focus-visible': { outline: `2px solid ${theme.palette.primary.main}`, outlineOffset: 2 },
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
          body1: 'p', body2: 'p', subtitle1: 'p', subtitle2: 'p',
          lead: 'p', narrative: 'p', strapline: 'p', eyebrow: 'p',
          finePrint: 'p', quote: 'blockquote', caption: 'span', overline: 'span', button: 'span',
        },
      },
      variants: [
        { props: { variant: 'narrative' }, style: { maxWidth: '70ch' } },
        { props: { variant: 'lead' }, style: { maxWidth: '68ch' } },
        { props: { variant: 'quote' }, style: { maxWidth: '62ch', fontStyle: 'italic' } },
        {
          props: { variant: 'strapline' }, style: ({ theme }) => ({
            color: theme.palette.primary.main, letterSpacing: '0.1em', fontWeight: 700,
          })
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
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: { root: { paddingInline: 'var(--container-pad)' } },
    },
  },
};
