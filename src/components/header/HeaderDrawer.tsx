'use client';

import { DrawerMenu } from '../menus/drawer/DrawerMenu';
import type { DrawerMenuProps } from '../menus/drawer/DrawerMenu';
import BreadMenu from '../navigation/Breadcrumbs/BreadMenu';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import HeaderLogo from './HeaderLogo';
import type { HeaderLogoProps } from './HeaderLogo';
import HeaderMinimal from './HeaderMinimal';

export type HeaderDrawerProps = {
  drawerProps: DrawerMenuProps;
  logoProps: HeaderLogoProps;
  breadMenuProps: BreadMenuProps;
};

export function HeaderDrawer({ drawerProps, logoProps, breadMenuProps }: HeaderDrawerProps) {
  return (
    <HeaderMinimal
      left={<HeaderLogo {...logoProps} />}
      centerUp={<BreadMenu {...breadMenuProps} />}
      right={<DrawerMenu {...drawerProps} />}
    />
  );
}
