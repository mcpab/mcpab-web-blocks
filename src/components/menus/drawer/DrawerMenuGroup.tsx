'use client';

import Box, { type BoxProps } from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List, { type ListProps } from '@mui/material/List';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import { Fragment } from 'react';

import { MenuDepthContext, useMenuDepthContext } from '../tree/MenuDepthContext';
import { useDrawerMenuControllerContext } from './DrawerMenuControllerContext';
import { useDrawerMenuRenderContext } from './DrawerMenuRenderContext';
import { setDrawerMenuNodeOpen, useDrawerMenuNodeOpen } from './drawerMenuStore';
import type { AnyDrawerMenuNode } from './DrawerMenuTreeTypes';

export type DrawerMenuGroupProps = {
  id: string;
  label: string;
  items: AnyDrawerMenuNode[];
  headerProps?: BoxProps;
  labelTypographyProps?: TypographyProps;
  listProps?: ListProps;
};

export function DrawerMenuGroup({
  id,
  label,
  items,
  headerProps,
  labelTypographyProps,
  listProps,
}: DrawerMenuGroupProps) {
  //

  const { closeIndicator, openIndicator, nodesRenderer, basePadding } =
    useDrawerMenuRenderContext();

  const { depth } = useMenuDepthContext();
  const { drawerMenuStore } = useDrawerMenuControllerContext();
  const openGroup = useDrawerMenuNodeOpen(drawerMenuStore, id);

  const toggleOpen = () => {
    setDrawerMenuNodeOpen(drawerMenuStore, id)(!openGroup);
  };

  const indicator = openGroup ? openIndicator : closeIndicator;

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        onClick={toggleOpen}
        paddingLeft={basePadding * depth}
        sx={{ cursor: 'pointer' }}
        {...headerProps}
      >
        {indicator}
        <Typography variant="narrative" fontWeight="bold" {...labelTypographyProps}>
          {label}
        </Typography>
      </Box>

      <Collapse in={openGroup} timeout="auto" unmountOnExit>
        <MenuDepthContext.Provider value={{ depth: depth + 1 }}>
          <List
            dense
            disablePadding
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            {...listProps}
          >
            {items.map((item) => {
              return <Fragment key={item.id}>{nodesRenderer({ node: item }).rendered}</Fragment>;
            })}
          </List>
        </MenuDepthContext.Provider>
      </Collapse>
    </Box>
  );
}
