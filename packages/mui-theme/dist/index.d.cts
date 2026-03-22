import * as _mui_material_styles from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

type VariantScale = {
    fontSize: string;
    fontWeight: number;
    letterSpacing?: string;
    lineHeight?: string | number;
    breakpoints?: Partial<{
        sm: string;
        md: string;
        lg: string;
    }>;
};
declare function generateTypographyVariant({ fontSize, fontWeight, letterSpacing, lineHeight, breakpoints, }: VariantScale): {
    readonly fontSize: string;
    readonly fontWeight: number;
    readonly letterSpacing: string;
    readonly lineHeight: string | number;
    readonly '@media (min-width:600px)': {
        readonly fontSize: string;
    };
    readonly '@media (min-width:900px)': {
        readonly fontSize: string;
    };
    readonly '@media (min-width:1200px)': {
        readonly fontSize: string;
    };
};

declare const baseThemeOptions: ThemeOptions;

type CreateSiteThemeOptions = {
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
declare function createSiteTheme(opts?: CreateSiteThemeOptions): _mui_material_styles.Theme;

export { type CreateSiteThemeOptions, baseThemeOptions, createSiteTheme, generateTypographyVariant };
