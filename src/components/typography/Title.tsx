 

import * as React from 'react';
import Typography from '@mui/material/Typography';
import {BodyTextProps} from './types';

export const variantLevels = {
  page: 'h1',
  section: 'h2',
  subsection: 'h3',
  subsubsection: 'h4',
} as const;

export type TitleTypes = keyof typeof variantLevels;

export interface TitleProps extends BodyTextProps {
  /** Semantic level (maps to h1…h4). */
  sectionType: TitleTypes;
}

/** Base component that locks the variant based on `sectionType`. */
export const Title: React.FC<TitleProps> = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return (
    <Typography
      variant={variantLevels[role]}
      sx={sx}
      color='primary'
      {...rest}
    />  
  );
};

Title.displayName = 'Title';

/** h1 wrapper */
export const PageTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="page" {...props} />
);
/** h2 wrapper */
export const SectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="section" {...props} />
);
/** h3 wrapper */
export const SubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="subsection" {...props} />
);
/** h4 wrapper */
export const SubsubsectionTitle: React.FC<Omit<TitleProps, 'sectionType'>> = (props) => (
  <Title sectionType="subsubsection" {...props} />
);

export default Title;
