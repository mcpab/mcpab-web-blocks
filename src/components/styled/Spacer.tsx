/**
 * Vertical spacing primitive based on `theme.spacing`.
 *
 * Renders a block with configurable height so layouts can keep spacing
 * consistent with the theme scale.
 */

import * as React from 'react';
import Box from '@mui/material/Box';

export type SpacerProps = { 
  /** Spacing multiplier for `theme.spacing`. @defaultValue 4 */
  size?: number;
};

const Spacer: React.FC<SpacerProps> = ({ size = 4 }) => {
  return (
    <Box
      sx={(theme) => ({
        height: theme.spacing(size),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    />
  );
};

export default Spacer;
