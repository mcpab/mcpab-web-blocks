import { useMemo } from 'react';
import { getSelectors, IsSelectedMenuElement } from '../drawer/pathSelectors';
import { MenuSelectorContext } from '../MenuSelectorContext';
import { MenuPropsRendering } from '../MenuTypes';
import { DropDown_Client } from './DropDown_Client';
import { MegaMenuPolicy } from '../RowPolicyTypes';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system';

/** Props for the {@link DropDown} component. Extends the shared {@link MenuPropsRendering}. */
export type DropDownMenuProps = MenuPropsRendering & {
  /**
   * Callback that identifies the currently active menu item (e.g. the current page).
   * Drives selected and ancestor-selected visual states via {@link MenuSelectorContext}.
   * If omitted, no item is highlighted.
   */
  selector?: IsSelectedMenuElement;
  /**
   * Layout and styling policy for the mega menu panels.
   * Controls column dividers, item dividers, column min-width, and outer padding.
   * @defaultValue {@link standardMegaMenuPolicy}
   */
  megaMenuPolicy?: MegaMenuPolicy;
  /** Optional `sx` overrides for the dropdown `AppBar`. */
  appBarSx?: SxProps<Theme>;
  /** Optional `sx` overrides for the dropdown `Toolbar`. */
  toolbarSx?: SxProps<Theme>;
};

/**
 * Top-level entry point for the horizontal dropdown (mega menu) navigation bar.
 *
 * Sets up {@link MenuSelectorContext} from the `selector` callback, then delegates
 * rendering to {@link DropDown_Client} which mounts a sticky MUI `AppBar`.
 *
 * Top-level items are rendered at depth 0. Items with children open a MUI `Popover`
 * containing a {@link DropDownMegaMenu} panel laid out as columns.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerProps({ hierarchy, overrides });
 * if (result.ok) {
 *   return (
 *     <DropDown
 *       {...result}
 *       selector={(id) => id === currentPageId}
 *       megaMenuPolicy={compactMegaMenuPolicy}
 *     />
 *   );
 * }
 * ```
 *
 * @see {@link hierarchyToDrawerProps} to build the required props from a hierarchy definition.
 * @see {@link defaultDropDownPolicy} for the default row styling policy.
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in mega menu policies.
 */
export function DropDown({
  root,
  treeFromRoot,
  rootOverrides,
  selector,
  megaMenuPolicy,
  appBarSx,
  toolbarSx,
}: DropDownMenuProps) {
  //
  //

  const selectors = useMemo(
    () =>
      getSelectors({
        treeFromRoot,
        selector: selector,
      }),
    [treeFromRoot, selector],
  );

  return (
    <MenuSelectorContext.Provider value={selectors}>
      <DropDown_Client
        root={root}
        treeFromRoot={treeFromRoot}
        rootOverrides={rootOverrides}
        megaMenuPolicy={megaMenuPolicy}
        appBarSx={appBarSx}
        toolbarSx={toolbarSx}
      />
    </MenuSelectorContext.Provider>
  );

  //
}
