import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default from 'react';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system';
import { SxProps as SxProps$1, Theme as Theme$1 } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';
import { ImageComponentLike, StaticImageDataLike } from './image.cjs';

/**
 * Payload stored on each `d3-hierarchy` node after stratification.
 *
 * @remarks
 * - `node` is the original node payload (or `null` for the synthetic `"root"` anchor).
 * - `overrides` optionally stores a per-node override payload.
 * - `children` is only populated for `"root"` during conversion (as a convenience).
 */
type StratifyPayload<Node, NodeOverrides> = {
    node: Node | null;
    overrides?: NodeOverrides;
    children?: Record<string, StratifyPayload<Node, NodeOverrides>>;
};
/**
 * Row format passed into `d3.stratify()`.
 *
 * @remarks
 * `d3.stratify()` expects an array of objects where each object has:
 * - `id`: unique identifier
 * - `parentId`: parent identifier (or `null` for the root)
 */
type D3StratifyData<Node, NodeOverrides> = {
    id: string;
    parentId: string | null;
    payload: StratifyPayload<Node, NodeOverrides>;
};

/**
 * Framework-agnostic link component contract.
 *
 * Uses the anchor element prop surface so adapters can map to
 * framework-specific link primitives (e.g. Next.js Link wrappers).
 */
type LinkTypeComponent = React$1.ComponentType<React$1.ComponentPropsWithoutRef<'a'>> | React$1.ForwardRefExoticComponent<React$1.ComponentPropsWithoutRef<'a'> & React$1.RefAttributes<HTMLAnchorElement>>;
/**
 * Default link implementation backed by a plain `<a>` element.
 */
declare const DefaultLinkLike: LinkTypeComponent;

/** Data payload for a single menu node. Stored in the hierarchy tree. */
type MenuTreeElement = {
    /** Display label shown in the UI. */
    label: string;
    /** Navigation target. Omit for toggle-only (non-link) nodes. */
    link?: string;
    /** Sort order among siblings. Lower values appear first. */
    order?: number;
};
/** Data payload for the invisible root node of the tree. */
type RootTreeElement = {
    label: string;
};
/** Per-node UI overrides applied on top of the default {@link RowPolicy} output. */
type MenuTreeElementUI = {
    /** Click handler — attached to the row wrapper instead of (or in addition to) navigation. */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /** Set to `false` to hide the node entirely. Defaults to `true`. */
    display?: boolean;
    /** Render a divider below this node. */
    divider?: boolean;
};
/** Root-level overrides that apply to the whole menu, not to individual nodes. */
type RootOverridesUI = {
    /** Custom link component (e.g. Next.js `Link`). Falls back to a plain `<a>` when omitted. */
    linkComponent?: LinkTypeComponent;
};
/**
 * Base props shared by all menu variants (DrawerMenu, DropDown).
 *
 * Build these props with {@link hierarchyToDrawerInput} rather than constructing them by hand.
 */
type MenuPropsRendering = {
    root: RootTreeElement;
    treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    rootOverrides?: RootOverridesUI;
};

/**
 * Callback used to determine whether a menu node is the currently active (selected) item.
 *
 * @param id - The node's unique string key in the hierarchy.
 * @param menuTreeElement - The node's data payload, or `null` if the node has no data.
 * @returns `true` if this node should be treated as the selected item.
 *
 * @example
 * ```ts
 * const selector: IsSelectedMenuElement = (id) => id === currentPageId;
 * ```
 */
type IsSelectedMenuElement = (id: string, menuTreeElement: MenuTreeElement | null) => boolean;
type GetSelectedPathProps = {
    nodeId: string;
    menuNode: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    selector: IsSelectedMenuElement;
    path: string[];
};
type GetselectorsProps = {
    treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
    selector: IsSelectedMenuElement | undefined;
};
/**
 * Derived selection state computed from a single {@link IsSelectedMenuElement} callback.
 * Consumed by {@link MenuSelectorContext} throughout the menu tree.
 */
type GetSelectorsReturnType = {
    /** Returns `true` if the given node is the selected item. */
    isSelected: (nodeId: string) => boolean;
    /** Returns `true` if the given node is an ancestor of the selected item (but not selected itself). */
    isAncestorSelected: (nodeId: string) => boolean;
    /** The id of the selected node, or `null` if nothing is selected. */
    selectedId: string | null;
    /** Set of all node ids on the path from root to the selected node (inclusive). */
    selectedPathIds: Set<string>;
};
/**
 * Walks the menu tree using a depth-first search to find the selected node and
 * records the full ancestor path along the way.
 *
 * Returns {@link GetSelectorsReturnType} with stable function references for
 * `isSelected` and `isAncestorSelected`, suitable for passing into React context.
 * If no node matches the selector, all functions return `false`/`null`.
 */
declare function getSelectors({ treeFromRoot, selector, }: GetselectorsProps): GetSelectorsReturnType;
declare function getSelectedAndPath({ nodeId, menuNode, selector, path }: GetSelectedPathProps): {
    selectedId: string;
} | null;

/**
 * Props for the {@link DrawerMenu} component.
 * Extends the shared {@link MenuPropsRendering} with drawer-specific layout options.
 */
type DrawerMenuPropsRendering = MenuPropsRendering & {
    /** Which edge of the screen the drawer slides in from. @defaultValue `'left'` */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Base indentation multiplier (MUI spacing units) applied per depth level.
     * Each depth-N item receives `indent * (N + 2)` spacing units of inline-start padding,
     * which is designed to clear the icon width present at depth 0.
     * @defaultValue `0`
     */
    indent?: number;
    /** Optional `sx` overrides for the MUI Drawer paper slot. */
    drawerPaperSx?: SxProps<Theme>;
    /** Optional `sx` overrides for the root navigation list inside the drawer. */
    listSx?: SxProps<Theme>;
    /** Optional `sx` overrides for the menu trigger IconButton. */
    triggerButtonSx?: SxProps<Theme>;
};

/** Props for the public {@link DrawerMenu} component. */
type DrawerMenuProps = DrawerMenuPropsRendering & {
    /**
     * Callback that identifies the currently active menu item (e.g. the current page).
     * If omitted, no item is selected and all ancestor highlighting is disabled.
     */
    selector?: IsSelectedMenuElement;
};
/**
 * Top-level entry point for the collapsible sidebar (drawer) navigation.
 *
 * Orchestrates three React contexts before rendering the interactive client component:
 * - **MenuSelectorContext** — derives `isSelected` / `isAncestorSelected` from the `selector` callback.
 * - **MenuControllerContext** — a Zustand store tracking which nodes are expanded,
 *   pre-opened along the path to the selected item.
 *
 * Renders a hamburger `IconButton` that opens a MUI `Drawer` containing the menu tree.
 * Each top-level item shows an icon resolved by name via `IconPicker`.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
 * if (result.ok) {
 *   return (
 *     <DrawerMenu
 *       {...result}
 *       anchor="left"
 *       indent={2}
 *       selector={(id) => id === currentPageId}
 *     />
 *   );
 * }
 * ```
 *
 * @see {@link hierarchyToDrawerInput} to build the required props from a hierarchy definition.
 * @see {@link defaultDrawerRowPolicy} for the default row styling policy.
 */
declare function DrawerMenu({ root: root, treeFromRoot: treeFromRoot, rootOverrides, anchor, indent, drawerPaperSx, listSx, triggerButtonSx, selector, }: DrawerMenuProps): react_jsx_runtime.JSX.Element;

/**
 * Subset of MUI `TypographyProps` used to style the label text inside a menu row.
 * Passed from {@link RowPlan} into {@link ElementLabel}.
 */
type MenuLabelTypographyProps = Pick<TypographyProps, 'variant' | 'color' | 'fontWeight' | 'sx' | 'noWrap' | 'align' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textTransform'>;
/**
 * Inputs passed to a {@link RowPolicy} function for a single menu node.
 * Conveys depth, data, open/selected states, and whether the node has children.
 */
type RowPolicyProps = {
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
 * Produced by {@link RowPolicy} and consumed by menu row render components.
 */
type RowPlan = {
    /** Label text (or a custom React node). */
    text: string | React__default.ReactNode;
    /** Typography props forwarded to the `<Typography>` wrapping the label. */
    typographyProps?: MenuLabelTypographyProps;
    /** Icon rendered to the left of the label (inside `ListItemIcon`). */
    icon?: React__default.ReactNode;
    /** Indicator icon (e.g. chevron) rendered beside the label. Position set by `indicatorPlacement`. */
    indicator?: React__default.ReactNode;
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
    rowSx?: SxProps$1<Theme$1>;
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
type RowPolicy = (props: RowPolicyProps) => RowPlan;
/**
 * Layout and styling policy for the mega menu panel in the dropdown navigation bar.
 *
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in presets.
 */
type MegaMenuPolicy = {
    /** Render vertical `<Divider>` elements between columns. */
    showColumnDividers: boolean;
    /** Render a horizontal `<Divider>` below each column header (depth-1 item). */
    showItemDivider: boolean;
    /** Minimum width (px) for each column. */
    columnMinWidth: number;
    /** Padding around the whole panel in MUI spacing units. */
    outerPadding: number;
};

/** Props for the {@link DropDown} component. Extends the shared {@link MenuPropsRendering}. */
type DropDownMenuProps = MenuPropsRendering & {
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
 * rendering to the client dropdown renderer that mounts a sticky MUI `AppBar`.
 *
 * Top-level items are rendered at depth 0. Items with children open a MUI `Popover`
 * containing a mega menu panel laid out as columns.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerInput({ hierarchy, overrides });
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
 * @see {@link hierarchyToDrawerInput} to build the required props from a hierarchy definition.
 * @see {@link defaultDropDownPolicy} for the default row styling policy.
 * @see {@link standardMegaMenuPolicy} / {@link compactMegaMenuPolicy} for built-in mega menu policies.
 */
declare function DropDown({ root, treeFromRoot, rootOverrides, selector, megaMenuPolicy, appBarSx, toolbarSx, }: DropDownMenuProps): react_jsx_runtime.JSX.Element;

/**
 * Props for {@link BreadMenu}.
 */
type BreadMenuProps = {
    /**
     * Optional explicit pathname (useful for stories and SSR).
     * Falls back to `window.location.pathname` when omitted.
     */
    pathname?: string;
    /** Optional custom link component (e.g., Next.js Link). */
    linkComponent?: LinkTypeComponent;
    /** Hide the “Home” root link. @defaultValue false */
    hideRoot?: boolean;
    /** Map segment -> label (e.g., { 'about-us': 'About Us' }). */
    segmentLabels?: Record<string, string>;
    /** Exclude these segments entirely (e.g., ['blog']). */
    exclude?: string[];
    /** Collapse long trails. See MUI Breadcrumbs `maxItems`. */
    maxItems?: number;
    /** Typography font size (applies via sx). */
    fontSize?: string | number;
    /** Extra styles for the Breadcrumbs root. */
    sx?: SxProps$1<Theme$1>;
    /** Capitalize segments (kebab-case → Title Case). @defaultValue true */
    titleCase?: boolean;
};
/**
 * Breadcrumb navigation derived from a pathname.
 */
declare const BreadMenu: {
    ({ pathname, linkComponent, hideRoot, segmentLabels, exclude, maxItems, fontSize, sx, titleCase, }: BreadMenuProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type HeaderLogoProps = {
    ImageComponent: ImageComponentLike;
    src: string | StaticImageDataLike;
    width?: string | number;
    height?: string | number;
    subtitle?: string;
    alt?: string;
    sx?: SxProps<Theme>;
};
declare function HeaderLogo({ ImageComponent, src, subtitle, alt, sx, height, width, }: HeaderLogoProps): react_jsx_runtime.JSX.Element;

type HeaderProps = {
    drawerProps: DrawerMenuProps;
    menuProps: DropDownMenuProps;
    logoProps: HeaderLogoProps;
    breadMenuProps: BreadMenuProps;
};
declare function Header({ breadMenuProps, drawerProps, logoProps, menuProps }: HeaderProps): react_jsx_runtime.JSX.Element;

type HeaderDrawerProps = {
    drawerProps: DrawerMenuProps;
    logoProps: HeaderLogoProps;
    breadMenuProps: BreadMenuProps;
};
declare function HeaderDrawer({ drawerProps, logoProps, breadMenuProps }: HeaderDrawerProps): react_jsx_runtime.JSX.Element;

type HeaderMenuProps = {
    menuProps: DropDownMenuProps;
    logoProps: HeaderLogoProps;
    breadMenuProps: BreadMenuProps;
};
declare function HeaderMenu({ menuProps, logoProps, breadMenuProps }: HeaderMenuProps): react_jsx_runtime.JSX.Element;

type HeaderMinimalProps = {
    left?: React.ReactNode;
    centerUp?: React.ReactNode;
    centerDown?: React.ReactNode;
    right?: React.ReactNode;
};
declare function HeaderMinimal({ centerDown, centerUp, left, right }: HeaderMinimalProps): react_jsx_runtime.JSX.Element;

export { BreadMenu as B, type D3StratifyData as D, type GetSelectorsReturnType as G, Header as H, type IsSelectedMenuElement as I, type LinkTypeComponent as L, type MenuTreeElement as M, type RootTreeElement as R, type StratifyPayload as S, type RootOverridesUI as a, type MenuTreeElementUI as b, type RowPlan as c, type MenuLabelTypographyProps as d, type RowPolicy as e, type MegaMenuPolicy as f, type HeaderProps as g, HeaderDrawer as h, type HeaderDrawerProps as i, HeaderMenu as j, type HeaderMenuProps as k, HeaderLogo as l, type HeaderLogoProps as m, HeaderMinimal as n, type HeaderMinimalProps as o, type MenuPropsRendering as p, type RowPolicyProps as q, DrawerMenu as r, type DrawerMenuProps as s, type DrawerMenuPropsRendering as t, getSelectors as u, getSelectedAndPath as v, DropDown as w, type DropDownMenuProps as x, type BreadMenuProps as y, DefaultLinkLike as z };
