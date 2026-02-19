import { MenuProps } from '../MenuTypes';

/**
 * Props for the {@link DrawerMenu} component.
 * Extends the shared {@link MenuProps} with drawer-specific layout options.
 */
export type DrawerMenuProps = MenuProps & {
  /** Which edge of the screen the drawer slides in from. @defaultValue `'left'` */
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Base indentation multiplier (MUI spacing units) applied per depth level.
   * Each depth-N item receives `indent * (N + 2)` spacing units of inline-start padding,
   * which is designed to clear the icon width present at depth 0.
   * @defaultValue `0`
   */
  indent?: number;
};
