/**
 * @packageDocumentation
 *
 * # Menus module
 * Entry point for navigation components:
 *
 * - {@link DirMenu} — Drawer-based, collapsible menu with nested items.
 * - {@link DropDown} — Top navigation with optional submenus.
 *
 * ## Types
 * - {@link MenuElement} — menu node shape
 * - {@link MenuProps} — common component props
 * - {@link MenuPosition} — alignment options
 *
 * ## Usage
 * ```tsx
 * import { DirMenu, DropDown, type MenuElement } from '@/src/components/menus';
 *
 * const menus: MenuElement[] = [{ name: 'home', path: '/', isPage: true, children: [] }];
 *
 * <DropDown menus={menus} position="center" />
 * <DirMenu   menus={menus} position="left" />
 * ```
 */

export { default as DirMenu } from './DirMenu';
export { default as DropDown } from './DropDown';

// Re-export types so consumers can import from the module root
export type { MenuElement, MenuPosition, MenuProps } from './types';

// (Optional) re-export the icon mapper if you want it available to consumers.
// If you prefer to keep it private, delete the line below.
// export { default as IconPicker } from './IconPicker';
