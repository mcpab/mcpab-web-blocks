
import * as React from 'react';
import StandardStack from '../styled/StandardStack';
import type { SxProps } from '@mui/material';
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
  return (
    <StandardStack
      size="large"
      sx={[
        {
          background: transparent ? 'none' : undefined,
          backgroundColor: transparent ? 'transparent' : 'background.default',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </StandardStack>
  );
};

export default PageLayout;
