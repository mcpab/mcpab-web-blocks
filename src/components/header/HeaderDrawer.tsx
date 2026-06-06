'use client';


import {DrawerMenuRoot,type  DrawerMenuRootProps } from '../menus/drawer/DrawerMenuRoot';
import BreadMenu from '../navigation/Breadcrumbs/BreadMenu';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import HeaderLogo from './HeaderLogo';
import type { HeaderLogoProps } from './HeaderLogo';
import HeaderMinimal from './HeaderMinimal';

export type HeaderDrawerProps = {
  drawerProps: DrawerMenuRootProps;
  logoProps: HeaderLogoProps;
  breadMenuProps: BreadMenuProps;
};

export function HeaderDrawer({ drawerProps, logoProps, breadMenuProps }: HeaderDrawerProps) {
  return (
    <HeaderMinimal
      left={<HeaderLogo {...logoProps} />}
      centerUp={<BreadMenu {...breadMenuProps} />}
      right={<DrawerMenuRoot {...drawerProps} />}
    />
  );
}

export default HeaderDrawer;
