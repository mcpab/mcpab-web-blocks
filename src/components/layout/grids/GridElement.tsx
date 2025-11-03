'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

export type GridElementProps = Omit<
    BoxProps,
    'display' | 'flexDirection' | 'justifyContent' | 'alignItems'
> & {
    /** Flex direction for the cell. @defaultValue 'column' */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Center horizontally (keeps alignItems:'center'). @defaultValue true */
    center?: boolean;
};

/**
 * Minimal cell wrapper for grid items.
 * Use when you repeat the same centering/flex pattern across cells.
 */
const GridElement = React.forwardRef<HTMLDivElement, GridElementProps>(
    ({ direction = 'column', center = true, sx, ...rest }, ref) => (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                alignItems: 'center',
                justifyContent: center ? 'center' : 'flex-start',
                flexDirection: direction,
                ...sx,
            }}
            {...rest}
        />
    )
);

GridElement.displayName = 'GridElement';
export default React.memo(GridElement);
