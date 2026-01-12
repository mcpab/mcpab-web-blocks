

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';

export type PadProps = {
  reverse?: boolean;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};

const PadRoot = styled(Box, { shouldForwardProp: (p) => p !== 'reverse' })<PadProps>(
  ({ reverse, theme }) => ({
    // small screens: symmetric padding
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      paddingInline: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: theme.spacing(3),
      paddingLeft: reverse ? undefined : theme.spacing(4),
      paddingRight: reverse ? theme.spacing(4) : undefined,
    },
  })
);

export default function Pad({ reverse = false, children, sx }: PadProps) {
  return (
    <PadRoot reverse={reverse} sx={sx}>
      {children}
    </PadRoot>
  );
}
