import type { MegaMenuPolicy } from '../RowPolicyTypes';

/**
 * Standard {@link MegaMenuPolicy} preset.
 *
 * Vertical dividers between columns, horizontal divider below each column header,
 * generous column width and outer padding. Suitable for most navigation bars.
 */
export const standardMegaMenuPolicy: MegaMenuPolicy = {
  showColumnDividers: true,
  showItemDivider: true,
  columnMinWidth: 160,
  outerPadding: 3,
};

/**
 * Compact {@link MegaMenuPolicy} preset.
 *
 * No dividers, narrower columns, tighter outer padding.
 * Useful for secondary navigation or space-constrained layouts.
 */
export const compactMegaMenuPolicy: MegaMenuPolicy = {
  showColumnDividers: false,
  showItemDivider: false,
  columnMinWidth: 120,
  outerPadding: 1,
};
