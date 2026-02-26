import type { SxProps, Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';

/**
 * Subset of MUI `TypographyProps` used to style the label text inside a menu row.
 * Passed from {@link RowPlan} into {@link ElementLabel}.
 */
export type MenuLabelTypographyProps = Pick<
  TypographyProps,
  | 'variant'
  | 'color'
  | 'fontWeight'
  | 'sx'
  | 'noWrap'
  | 'align'
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'textTransform'
>;

/**
 * Inputs passed to a {@link RowPolicy} function for a single menu node.
 * Conveys depth, data, open/selected states, and whether the node has children.
 */
export type RowPolicyProps = {
  /** Zero-based nesting depth (0 = top-level bar or drawer root). */
  depth: number;
  /** Data payload of the node. */
  menuTreeElement: MenuTreeElement;
  /** UI overrides for the node, if any. */
  menuTreeElementUI: MenuTreeElementUI | undefined;
  /** Whether the node's children are currently visible (open). */
  isOpen?: boolean;
  /** Whether this node is the currently active/selected item. */
  isSelected?: boolean;
  /** Whether this node is an ancestor of the selected item. */
  isAncestorSelected?: boolean;
  /** Whether the node has at least one child. */
  hasChildren: boolean;
};

/**
 * Computed visual plan for a single menu row.
 * Produced by {@link RowPolicy} and consumed by {@link ElementButton} / {@link ElementLabel}.
 */
export type RowPlan = {
  /** Label text (or a custom React node). */  
  text: string | React.ReactNode;
  /** Typography props forwarded to the `<Typography>` wrapping the label. */
  typographyProps?: MenuLabelTypographyProps;
  /** Icon rendered to the left of the label (inside `ListItemIcon`). */
  icon?: React.ReactNode;
  /** Indicator icon (e.g. chevron) rendered beside the label. Position set by `indicatorPlacement`. */
  indicator?: React.ReactNode;
  /** Whether the indicator appears before or after the label. @defaultValue `"end"` */
  indicatorPlacement?: 'start' | 'end';
  /**
   * Logical (RTL-safe) inline-start padding for the row.
   *
   * **Note**: `DrawerMenu` policies express this in MUI spacing units (×8 px).
   * `DropDown` policies use raw pixel values. Both are passed directly into `sx.paddingInlineStart`.
   */
  paddingInlineStart: number;
  /** Additional `sx` styles applied to the row wrapper (`ListItemButton` or `ListItem`). */
  rowSx?: SxProps<Theme>;
};

/**
 * A function that maps a node's context ({@link RowPolicyProps}) to its visual plan ({@link RowPlan}).
 *
 * Pass a custom implementation via {@link MenuRenderContext} to restyle a menu
 * without modifying any component.
 *
 * @see {@link defaultDropDownPolicy} — default policy for the horizontal dropdown.
 * @see {@link defaultDrawerRowPolicy} — default policy for the slide-in drawer.
 */
export type RowPolicy = (props: RowPolicyProps) => RowPlan;

/**
 * Layout and styling policy for the mega menu panel in the dropdown navigation bar.
 *
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in presets.
 */
export type MegaMenuPolicy = {
  /** Render vertical `<Divider>` elements between columns. */
  showColumnDividers: boolean;
  /** Render a horizontal `<Divider>` below each column header (depth-1 item). */
  showItemDivider: boolean;
  /** Minimum width (px) for each column. */
  columnMinWidth: number;
  /** Padding around the whole panel in MUI spacing units. */
  outerPadding: number;
};
