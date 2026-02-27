import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';

type StackSize = 'compact' | 'standard' | 'relaxed' | 'large' | 'extraLarge';

const STACK_SPACING: Record<StackSize, number> = {
  compact: 2,
  standard: 4,
  relaxed: 6,
  large: 8,
  extraLarge: 10,
};

export interface StandardStackProps extends StackProps {
  /** Semantic spacing preset. @defaultValue 'standard' */
  size?: StackSize;
}

const BaseStack: React.FC<StandardStackProps> = ({ size = 'standard', ...props }) => {
  const spacing = STACK_SPACING[size];
  return <Stack spacing={spacing} {...props} />;
};

const StandardStack: React.FC<StandardStackProps> = ({ sx, ...props }) => {
  return (
    <BaseStack
      {...props}
      sx={[
        {
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};

export default StandardStack;
