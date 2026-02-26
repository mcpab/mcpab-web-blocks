 
import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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

const StandardStack = styled(BaseStack)(({ /* theme */ }) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'visible',
}));

export default StandardStack;
