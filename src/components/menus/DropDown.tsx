'use client';
/**
 * Dropdown (hover/click) top navigation with first-level triggers and optional
 * submenus using MUI `Menu`/`MenuItem`.
 */

import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { MenuElement, MenuProps } from './types';
import { Link } from '@mui/material';
import { toTitleCase } from 'src/lib';

/** Uppercase transformer. */
const upper = (s: string) => s.toUpperCase();

/** Stable, recursive sort by `order` (undefined => bottom). */
const sortMenus = (menus: MenuElement[]): MenuElement[] =>
  menus
    .map((m) => ({ ...m, children: sortMenus(m.children || []) }))
    .sort((a, b) => (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY));

const Gap = 10;

/*** Main Function */
const DropDown: React.FC<MenuProps> = ({ menus, position, capitalize = true }) => {
  //
  const sorted = React.useMemo(() => sortMenus(menus).filter((m) => m.display !== false), [menus]);
  const transform = capitalize ? upper : toTitleCase;

  const content = sorted.map((m) => (
    <TopItem key={`${m.path}-${m.name}`} menu={m} transform={transform} />
  ));

  switch (position) {
    case 'left':
      return (
        <Box sx={{ display: 'flex', gap: Gap, alignItems: 'center', justifyContent: 'flex-start' }}>
          {content}
        </Box>
      );
    case 'center':
      return (
        <Box sx={{ display: 'flex', gap: Gap, alignItems: 'center', justifyContent: 'center' }}>
          {content}
        </Box>
      );
    case 'right':
      return (
        <Box sx={{ display: 'flex', gap: Gap, alignItems: 'center', justifyContent: 'flex-end' }}>
          {content}
        </Box>
      );
    default:
      return (
        <Box sx={{ display: 'flex', gap: Gap, alignItems: 'center', justifyContent: 'center' }}>
          {content}
        </Box>
      );
  }
};

export default React.memo(DropDown);

/** First-level button. Decides link vs. submenu opener. */
function TopItem({ menu, transform }: { menu: MenuElement; transform: (s: string) => string }) {
  //
  const hasChildren = (menu.children?.length ?? 0) > 0;
  const label = transform(menu.name);

  if (!hasChildren && menu.isPage) {
    // Simple link (no submenu)
    return (
      <Button component={Link} href={menu.path} sx={{ textTransform: 'none' }}>
        <Typography variant="narrative">{label}</Typography>
      </Button>
    );
  }

  // Otherwise render a submenu trigger
  return <Opener menu={menu} label={label} />;
}

/** Submenu trigger + controlled MUI Menu. */
function Opener({ menu, label }: { menu: MenuElement; label: string }) {
  //
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const pathname = usePathname();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  // Close submenu on route change
  // React.useEffect(() => {
  //   if (anchorEl) setAnchorEl(null);
  // }, [pathname]);

  const id = `menu-${menu.name.replace(/\s+/g, '-')}`;

  const handleOpen = (el: HTMLElement) => setAnchorEl(el);
  const handleClose = () => {
    setAnchorEl(null);
    btnRef.current?.focus(); // return focus for a11y
  };

  const onTriggerKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleOpen(e.currentTarget);
    }
  };

  return (
    <>
      <Button
        ref={btnRef}
        aria-haspopup="menu"
        aria-controls={open ? id : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => handleOpen(e.currentTarget)}
        onKeyDown={onTriggerKeyDown}
        sx={{ textTransform: 'none' }}
      >
        <Typography variant="narrative">{label}</Typography>
      </Button>

      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        autoFocus
        aria-labelledby={id}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'ArrowLeft') {
            e.preventDefault();
            handleClose();
          }
        }}
      >
        {menu.children?.map((child) => (
          <MenuItem
            key={`${menu.name}-${child.path}`}
            component={Link}
            href={child.path}
            onClick={handleClose}
            sx={{ textDecoration: 'none' }}
          >
            <Typography variant="narrative">{toTitleCase(child.name)}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
