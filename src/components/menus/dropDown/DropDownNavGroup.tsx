'use client';

import '../../../mui-augment';
import Box , {type BoxProps } from '@mui/material/Box';
import Button, { type ButtonProps } from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import { MenuDepthContext } from '../tree/MenuDepthContext';
import { useMenuSelectionContext } from '../tree/MenuSelectionContext';
import { useDropDownMenuRenderContext } from './DropDownMenuRendererContext';
import { Fragment, useState, type MouseEvent } from 'react';
import type { NavigationTreeNode } from './DropDownMenuTreeTypes';
 

export type DropDownNavGroupProps = {
  id: string;
  label: string;
  items: NavigationTreeNode[];
  headerProps?: ButtonProps;
  labelTypographyProps?: TypographyProps;
  megaMenuProps?: BoxProps;
};

export function DropDownNavGroup({
  id,
  items,
  label,
  headerProps,
  labelTypographyProps,
  megaMenuProps,
}: DropDownNavGroupProps) {
  //
  //

  const { isAncestorSelected } = useMenuSelectionContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const ancestorSelected = isAncestorSelected(id);
  const isOpen = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const childDepth = 1;

  return (
    <>
      <Button
        color={ancestorSelected ? 'primary' : 'inherit'}
        variant="text"
        onClick={handleClick}
        {...headerProps}
      >
        <Typography
          variant="narrative"
          fontWeight={ancestorSelected ? 700 : 600}
          color="inherit"
          {...labelTypographyProps}
        >
          {label}
        </Typography>
      </Button>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MegaMenu childDepth={childDepth} items={items} megaMenuProps={megaMenuProps} />
      </Popover>
    </>
  );

  //
}

export default DropDownNavGroup;

function MegaMenu({
  items,
  childDepth,
  megaMenuProps,
}: {
  items: NavigationTreeNode[];
  childDepth: number;
  megaMenuProps?: BoxProps;
}) {
  //

  const { nodesRenderer } = useDropDownMenuRenderContext();

  return (
    <Box
      display="grid"
      gridAutoFlow="column"
      gridAutoColumns="minmax(180px, 1fr)"
      columnGap={3}
      rowGap={2}
      padding={3}
      {...megaMenuProps}
    >
      <MenuDepthContext.Provider value={{ depth: childDepth }}>
        {items.map((item) => {
          return <Fragment key={item.id}>{nodesRenderer({ node: item }).rendered}</Fragment>;
        })}
      </MenuDepthContext.Provider>
    </Box>
  );
}
