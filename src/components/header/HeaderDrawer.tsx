import { AppBarProps } from '@mui/material/AppBar';
import { DrawerMenuRoot, type DrawerMenuRootProps } from '../menus/drawer/DrawerMenuRoot';
import BreadMenu from '../navigation/Breadcrumbs/BreadMenu';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import HeaderLogo from './HeaderLogo';
import type { HeaderLogoProps } from './HeaderLogo';
import HeaderMinimal, { HeaderMinimalProps } from './HeaderMinimal';

export type HeaderDrawerProps = {
  drawerProps: DrawerMenuRootProps;
  logoProps: HeaderLogoProps;
  breadMenuProps: BreadMenuProps;
  appBarProps?: AppBarProps;
};

export function HeaderDrawer({
  drawerProps,
  logoProps,
  breadMenuProps,
  appBarProps,
}: HeaderDrawerProps) {
  return (
    <HeaderMinimal
      left={<HeaderLogo {...logoProps} />}
      centerUp={<BreadMenu {...breadMenuProps} />}
      right={<DrawerMenuRoot {...drawerProps} />}
      appBarProps={appBarProps}
    />
  );
}

export default HeaderDrawer;
