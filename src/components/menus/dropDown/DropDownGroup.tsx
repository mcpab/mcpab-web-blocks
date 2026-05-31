'use client';

import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import Divider, { type DividerProps } from '@mui/material/Divider';
import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import { MenuDepthContext, useMenuDepthContext } from '../tree/MenuDepthContext';
import { useDropDownMenuRenderContext } from './DropDownMenuRendererContext';
import { Fragment } from 'react';
import { useMenuSelectionContext } from '../tree/MenuSelectionContext';
import type { NavigationTreeNode } from './DropDownMenuTreeTypes';

export type DropDownGroupProps = {
  id: string;
  label: string;
  items: NavigationTreeNode[];
  headerProps?: BoxProps;
  labelTypographyProps?: TypographyProps;
  hasDivider?: boolean;
  dividerProps?: DividerProps;
};
export function DropDownGroup({
  id,
  items,
  label,
  headerProps,
  labelTypographyProps,
  hasDivider = true,
  dividerProps,
}: DropDownGroupProps) {
  //

  const { depth } = useMenuDepthContext();
  const { nodesRenderer, basePadding } = useDropDownMenuRenderContext();
  const { isAncestorSelected } = useMenuSelectionContext();
  const ancestorSelected = isAncestorSelected(id);

  const padding = Math.max(depth - 1, 0) * basePadding;
  const shouldShowDivider = hasDivider && depth > 0;

  const childDepth = depth + 1;

  return (
    <Box display="flex" flexDirection="column" paddingLeft={padding}>
      <Box display="flex" flexDirection="column" {...headerProps}>
        <Typography
          variant="narrative"
          fontWeight={ancestorSelected ? 700 : 600}
          color={ancestorSelected ? 'primary.main' : 'text.primary'}
          {...labelTypographyProps}
        >
          {label}
        </Typography>
        {shouldShowDivider && <Divider {...dividerProps} />}
      </Box>
      <MenuDepthContext.Provider value={{ depth: childDepth }}>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              {nodesRenderer({ node: item }).rendered}
            </Fragment>
          );
        })}
      </MenuDepthContext.Provider>
    </Box>
  );
}
