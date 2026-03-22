export type VariantScale = {
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
export declare function generateTypographyVariant({ fontSize, fontWeight, letterSpacing, lineHeight, breakpoints, }: VariantScale): {
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
