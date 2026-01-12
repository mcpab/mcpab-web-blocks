import { createTheme, responsiveFontSizes, type ThemeOptions } from '@mui/material/styles';
import { baseThemeOptions } from './base/baseThemeOptions';

export type CreateSiteThemeOptions = {
  /** Site/brand preset (palette, typography, component overrides, etc.) */
  preset?: ThemeOptions;

  /** Final overrides applied last */
  overrides?: ThemeOptions;

  /**
   * If a number: apply responsiveFontSizes with this factor.
   * If false: do not apply responsiveFontSizes.
   *
   * Default: 2.4
   */
  responsiveFactor?: number | false;
};

export function createSiteTheme(opts: CreateSiteThemeOptions = {}) {
  const { preset, overrides, responsiveFactor = 2.4 } = opts;

  // createTheme will deep-merge left → right
  let theme = createTheme(baseThemeOptions, preset ?? {}, overrides ?? {});

  if (responsiveFactor !== false) {
    theme = responsiveFontSizes(theme, { factor: responsiveFactor });
  }

  return theme;
}
