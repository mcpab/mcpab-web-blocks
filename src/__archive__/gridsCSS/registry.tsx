import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';
import { AbsoluteGridElement, AbsoluteGridLayout } from 'src/core';
import { SxProps, Theme } from '@mui/material/styles';

type AbsoluteGridElementRendererProps = {
  element: AbsoluteGridElement;
  children?: React.ReactNode;
  boxProps?: BoxProps;
  sx?: SxProps<Theme>;
};

export const AbsoluteGridElementRenderer: React.FC<AbsoluteGridElementRendererProps> = ({ element, children, sx, boxProps }) => {

  const { id,
    zIndex,

    justifySelf,
    alignSelf,

    role,
    tags,
    order,

    visibility,
    gridRowStart,
    gridColumnStart,
    gridRowEnd,
    gridColumnEnd } = element;

  return (

    <Box id={id} {...boxProps} order={order} zIndex={zIndex} justifySelf={justifySelf} 
      alignSelf={alignSelf}
      role={role} data-tags={tags?.join(' ')} 

      sx={{  visibility: visibility ?? 'visible', gridRowStart:gridRowStart, 
        gridColumnStart:gridColumnStart, 
        gridRowEnd:gridRowEnd, 
        gridColumnEnd:gridColumnEnd,  
      ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
 }}
      >
      {children}
    </Box>

  );

} 