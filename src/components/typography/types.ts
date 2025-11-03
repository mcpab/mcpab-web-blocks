import { TypographyProps } from "@mui/material/Typography";

type SansVariantProps = Omit<TypographyProps, 'variant' | 'component'>;

export type BodyTextProps = SansVariantProps;



