import { ThemeOptions } from '@mui/material/styles';

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
declare const quantumMathMusicPaperPreset: ThemeOptions;

export { quantumMathMusicPaperPreset };
