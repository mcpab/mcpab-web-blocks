 
import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { PageTitle, SectionTitle, type TitleProps } from '../typography/Title';
import { toTitleCase } from '../../lib/text/transform';
type TitleLocalProps = Omit<TitleProps, 'sectionType'>;
 
export type MainTitleBlock = {
   
  title: string | React.ReactNode;
  
   
  type?: 'primary' | 'secondary';
  
   
  titleProps?: TitleLocalProps;
};

 
export type MainTitleProps = {
  
  blocks: MainTitleBlock[];
   
  autoCapitalize?: boolean;
 
  slotProps?: {
    
    stack?: StackProps;
    
  
    title?: TitleLocalProps;
   
    subtitle?: TitleLocalProps;
  };
};

 
const MainTitle: React.FC<MainTitleProps> = ({
  blocks,
  autoCapitalize = true,
  slotProps,
}) => {
  return (
    <Stack spacing={4} {...slotProps?.stack} >
      {blocks.map((block, index) => {
        const content =
          typeof block.title === 'string' && autoCapitalize
            ? toTitleCase(block.title)
            : block.title;

        const isPrimary = (block.type ?? 'primary') === 'primary';

        const Component = isPrimary ? PageTitle : SectionTitle;
        const defaults = isPrimary ? slotProps?.title : slotProps?.subtitle;

        const componentProps = { ...defaults, ...block?.titleProps };

        return (
          <Component key={`main-title-${index}`} {...componentProps}>
            {content}
          </Component>
        );
      })}
    </Stack>
  );
};

export default React.memo(MainTitle);
