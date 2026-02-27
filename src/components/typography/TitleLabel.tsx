import * as React from 'react';
import Typography from '@mui/material/Typography';
import { variantLevels, type TitleTypes } from './Title';

/**
 * Heading-styled label component with non-heading semantics.
 *
 * Uses the same visual scale as `Title` (`h1`..`h4`) while restricting the
 * rendered element to `span`, `div`, or `p`.
 */
export interface TitleLabelProps
  extends Omit<React.ComponentProps<typeof Typography>, 'variant' | 'component'> {
  /** Visual hierarchy level mapped to `h1`..`h4` typography variants. */
  sectionType: TitleTypes;
  /** Restrict to non-heading tags to keep semantics clean. @defaultValue 'span' */
  component?: 'span' | 'div' | 'p';
}

/**
 * Non-semantic title text that mirrors `Title` visual hierarchy.
 */
export const TitleLabel: React.FC<TitleLabelProps> = ({ sectionType, component = 'span', sx, ...rest }) => {
  return (
    <Typography
      variant={variantLevels[sectionType]} // pulls h1..h4 sizing from theme
      component={component} // always non-heading
      sx={sx}
      {...rest}
    />
  );
};

TitleLabel.displayName = 'TitleLabel';

/** Non-heading wrapper using page-level visual style. */
export const PageTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => (
  <TitleLabel sectionType="page" {...p} />
);

/** Non-heading wrapper using section-level visual style. */
export const SectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => (
  <TitleLabel sectionType="section" {...p} />
);

/** Non-heading wrapper using subsection-level visual style. */
export const SubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => (
  <TitleLabel sectionType="subsection" {...p} />
);

/** Non-heading wrapper using subsubsection-level visual style. */
export const SubsubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => (
  <TitleLabel sectionType="subsubsection" {...p} />
);

export default TitleLabel;
