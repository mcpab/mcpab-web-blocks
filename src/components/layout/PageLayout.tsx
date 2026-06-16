import * as React from 'react';
import StandardStack, { StandardStackProps } from '../styled/StandardStack';
import type { SxProps, Theme } from '@mui/material/styles';

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
  size? : StandardStackProps['size'];
  transparent?: boolean;

  sx?: SxProps<Theme>;
};

export function PageLayout  ({ children, size='large', transparent = false, sx }:PageLayoutProps) {
  return (
    <StandardStack
      size= {size}
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
