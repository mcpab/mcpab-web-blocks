import { type ThemeOptions } from '@mui/material/styles';
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
export declare function createSiteTheme(opts?: CreateSiteThemeOptions): import("@mui/material/styles").Theme;
