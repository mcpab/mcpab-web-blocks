
import * as React from 'react';
import StandardStack from '../styled/StandardStack';
import { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';


/**
 * Props interface for PageLayout component
 * 
 * Defines the configuration options for the PageLayout component, providing
 * type-safe prop handling for background rendering, content structure, and
 * Material-UI theme integration.
 * 
 * @interface PageLayoutProps
 */
export type PageLayoutProps = {
  
  children: React.ReactNode;
 
  transparent?: boolean;

   
  sx?: SxProps<Theme>;
};
 
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  transparent = false,
  sx,
}) => {
  const list = React.Children.toArray(children);

  return (
    <StandardStack
      size="large"
      sx={{
        background: transparent ? 'none' : undefined,
        backgroundColor: transparent ? 'transparent' : 'background.default',
        ...sx,
      }}
    >
      {list}
    </StandardStack>
  );
};

export default PageLayout;
