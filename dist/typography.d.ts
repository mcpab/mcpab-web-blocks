import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { StackProps } from '@mui/material/Stack';

type SansVariantProps = Omit<TypographyProps, 'variant' | 'component'>;
type BodyTextProps = SansVariantProps;

declare const variantLevels: {
    readonly page: "h1";
    readonly section: "h2";
    readonly subsection: "h3";
    readonly subsubsection: "h4";
};
type TitleTypes = keyof typeof variantLevels;
interface TitleProps extends BodyTextProps {
    /** Semantic level (maps to h1…h4). */
    sectionType: TitleTypes;
}
/** Base component that locks the variant based on `sectionType`. */
declare const Title: React.FC<TitleProps>;
/** h1 wrapper */
declare const PageTitle: React.FC<Omit<TitleProps, 'sectionType'>>;
/** h2 wrapper */
declare const SectionTitle: React.FC<Omit<TitleProps, 'sectionType'>>;
/** h3 wrapper */
declare const SubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>>;
/** h4 wrapper */
declare const SubsubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>>;

type TitleLocalProps = Omit<TitleProps, 'sectionType'>;
/** A single title or subtitle block rendered by {@link MainTitle}. */
type MainTitleBlock = {
    /** Text content. Strings are auto-capitalised when `autoCapitalize` is `true`. Accepts React nodes for rich content. */
    title: string | React.ReactNode;
    /**
     * Visual hierarchy level.
     * - `'primary'` — renders as `PageTitle` (h1-equivalent, large).
     * - `'secondary'` — renders as `SectionTitle` (h2-equivalent, smaller).
     * @defaultValue `'primary'`
     */
    type?: 'primary' | 'secondary';
    /** Per-block typography overrides, merged on top of `slotProps.title` / `slotProps.subtitle`. */
    titleProps?: TitleLocalProps;
};
/** Props for {@link MainTitle}. */
type MainTitleProps = {
    /** Ordered list of title/subtitle blocks to render. */
    blocks: MainTitleBlock[];
    /**
     * When `true`, string titles are passed through `toTitleCase` before rendering.
     * Has no effect on React node titles.
     * @defaultValue `true`
     */
    autoCapitalize?: boolean;
    /** Slot-level prop overrides applied as defaults to all blocks of each type. */
    slotProps?: {
        /** Props forwarded to the `Stack` wrapper. */
        stack?: StackProps;
        /** Default typography props for all `'primary'` blocks. */
        title?: TitleLocalProps;
        /** Default typography props for all `'secondary'` blocks. */
        subtitle?: TitleLocalProps;
    };
};
declare const _default: React.NamedExoticComponent<MainTitleProps>;

/**
 * Heading-styled label component with non-heading semantics.
 *
 * Uses the same visual scale as `Title` (`h1`..`h4`) while restricting the
 * rendered element to `span`, `div`, or `p`.
 */
interface TitleLabelProps extends Omit<React.ComponentProps<typeof Typography>, 'variant' | 'component'> {
    /** Visual hierarchy level mapped to `h1`..`h4` typography variants. */
    sectionType: TitleTypes;
    /** Restrict to non-heading tags to keep semantics clean. @defaultValue 'span' */
    component?: 'span' | 'div' | 'p';
}
/**
 * Non-semantic title text that mirrors `Title` visual hierarchy.
 */
declare const TitleLabel: React.FC<TitleLabelProps>;
/** Non-heading wrapper using page-level visual style. */
declare const PageTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using section-level visual style. */
declare const SectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using subsection-level visual style. */
declare const SubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>>;
/** Non-heading wrapper using subsubsection-level visual style. */
declare const SubsubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>>;

export { type BodyTextProps, _default as MainTitle, type MainTitleBlock, type MainTitleProps, PageTitle, PageTitleLabel, SectionTitle, SectionTitleLabel, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, Title, TitleLabel, type TitleLabelProps, type TitleProps, type TitleTypes };
