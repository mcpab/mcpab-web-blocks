'use client';

import Box from '@mui/material/Box';
import type { DrawerMenuRootProps } from '../menus/drawer/DrawerMenuRoot';
import type { DropDownMenuProps } from '../menus/dropDown/DropDown';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import type { HeaderLogoProps } from './HeaderLogo';
import { HeaderDrawer } from './HeaderDrawer';
import { HeaderMenu } from './HeaderMenu';

export type HeaderProps = {
  drawerProps: DrawerMenuRootProps;
  menuProps: DropDownMenuProps;
  logoProps: HeaderLogoProps;
  breadMenuProps: BreadMenuProps;
};

export function Header({breadMenuProps,drawerProps,logoProps,menuProps}:HeaderProps) {

    return( <>
    
        <Box sx={{display: {
            xs: 'block',
            sm:'none'
        }}} >
            <HeaderDrawer breadMenuProps={breadMenuProps} drawerProps={drawerProps} logoProps={logoProps} />
        </Box>
        <Box sx={{display: {
            xs:'none',
            sm:'block',
        }}}>
            <HeaderMenu breadMenuProps={breadMenuProps} logoProps={logoProps} menuProps={menuProps} />
        </Box>
    
    </>)

}

export default Header;
