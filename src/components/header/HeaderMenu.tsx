'use client';

import { DropDown } from '../menus/dropDown/DropDown';
import type { DropDownMenuProps } from '../menus/dropDown/DropDown';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import BreadMenu from '../navigation/Breadcrumbs/BreadMenu';
import type { HeaderLogoProps } from './HeaderLogo';
import HeaderLogo from './HeaderLogo';
import HeaderMinimal from './HeaderMinimal';

export type HeaderMenuProps = {
  menuProps: DropDownMenuProps;
  logoProps: HeaderLogoProps;
  breadMenuProps: BreadMenuProps;
};

export function HeaderMenu({ menuProps, logoProps, breadMenuProps }: HeaderMenuProps) {
  return (
    <HeaderMinimal
      left={<HeaderLogo {...logoProps} />}
      centerUp={<BreadMenu {...breadMenuProps} />}
      centerDown={<DropDown {...menuProps} />}
    />
  );
}

export default HeaderMenu;
