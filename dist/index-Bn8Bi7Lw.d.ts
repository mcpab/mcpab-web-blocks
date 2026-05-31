import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { ReactNode } from 'react';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { TypographyProps } from '@mui/material/Typography';
import { ListItemIconProps } from '@mui/material/ListItemIcon';
import { BoxProps } from '@mui/material/Box';
import { ListProps } from '@mui/material/List';
import { DrawerProps } from '@mui/material/Drawer';
import { DividerProps } from '@mui/material/Divider';
import { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import { ImageComponentLike, StaticImageDataLike } from './image.js';
import { Theme as Theme$1 } from '@emotion/react';
import { SxProps as SxProps$1 } from '@mui/system';

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

type DrawerMenuLinkKind = 'link';
type DrawerMenuGroupKind = 'group';
type DrawerMenuRootKind = 'root';
type DrawerMenuNodeKind = DrawerMenuGroupKind | DrawerMenuLinkKind;
type DrawerMenuLinkNode = {
    id: string;
    type: DrawerMenuLinkKind;
    label: string;
    href: string;
    iconKey?: string;
};
type DrawerMenuGroupNode = {
    id: string;
    type: DrawerMenuGroupKind;
    label: string;
    children: DrawerMenuTreeNode[];
};
type DrawerMenuTreeNode = DrawerMenuLinkNode | DrawerMenuGroupNode;
type DrawerMenuTree = {
    id: 'root';
    type: DrawerMenuRootKind;
    children: DrawerMenuTreeNode[];
};
type DrawerMenuNodeMap = {
    link: DrawerMenuLinkNode;
    group: DrawerMenuGroupNode;
};
type AnyDrawerMenuNode = DrawerMenuNodeMap[DrawerMenuNodeKind];

type DrawerMenuLinkProps = {
    href: string;
    label: string;
    id: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    buttonProps?: ListItemButtonProps;
    labelTypographyProps?: TypographyProps;
    iconProps?: ListItemIconProps;
};
declare function DrawerMenuLink({ href, label, id, disabled, icon, buttonProps, iconProps, labelTypographyProps, }: DrawerMenuLinkProps): react_jsx_runtime.JSX.Element;

type DrawerMenuGroupProps = {
    id: string;
    label: string;
    items: AnyDrawerMenuNode[];
    headerProps?: BoxProps;
    labelTypographyProps?: TypographyProps;
    listProps?: ListProps;
};
declare function DrawerMenuGroup({ id, label, items, headerProps, labelTypographyProps, listProps, }: DrawerMenuGroupProps): react_jsx_runtime.JSX.Element;

type DefaultDrawerMenuRenderingProps = {
    link: DrawerMenuLinkProps;
    group: DrawerMenuGroupProps;
};
type RenderedDrawerMenuRegistryEntry<K extends DrawerMenuNodeKind> = {
    type: K;
    rendering: ({ node, overrides, }: {
        node: DrawerMenuNodeMap[K];
        overrides?: Partial<DefaultDrawerMenuRenderingProps[K]>;
    }) => ReactNode;
};
type RenderedDrawerMenuRegistry = {
    [K in DrawerMenuNodeKind]: RenderedDrawerMenuRegistryEntry<K>;
};
type IdsOfType<T, I> = I extends {
    type: T;
    id: string;
} ? I['id'] : I extends readonly (infer C)[] ? IdsOfType<T, C> : I extends Record<string, infer C> ? IdsOfType<T, C> : never;
type DrawerMenuTreeOverrides<T extends DrawerMenuTree> = {
    [K in DrawerMenuNodeKind]?: Partial<{
        [ID in Extract<IdsOfType<K, T>, string>]: Partial<DefaultDrawerMenuRenderingProps[K]>;
    }>;
};
type RuntimeDrawerMenuTreeOverrides = {
    [K in DrawerMenuNodeKind]?: Record<string, Partial<DefaultDrawerMenuRenderingProps[K]>>;
};
declare const defaultDrawerMenuRegistry: RenderedDrawerMenuRegistry;
type RenderDrawerMenuNode = (args: {
    node: AnyDrawerMenuNode;
}) => {
    rendered: ReactNode;
};
declare function defaultRenderDrawerMenuNode({ renderedRegistry, runtimeOverrides, }: {
    renderedRegistry?: RenderedDrawerMenuRegistry;
    runtimeOverrides?: RuntimeDrawerMenuTreeOverrides;
}): RenderDrawerMenuNode;

type DrawerMenuRootProps = {
    currentPath: string;
    menuTree: DrawerMenuTree;
    treeOverrides?: RuntimeDrawerMenuTreeOverrides;
    openIndicator?: React.ReactNode;
    closeIndicator?: React.ReactNode;
    basePadding?: number;
    LinkComponent?: LinkTypeComponent;
    anchor?: DrawerProps['anchor'];
};
declare function DrawerMenuRoot({ currentPath, menuTree, treeOverrides, closeIndicator, openIndicator, basePadding, LinkComponent, anchor, }: DrawerMenuRootProps): react_jsx_runtime.JSX.Element;

type NavigationLinkKind = 'link';
type NavigationGroupKind = 'group';
type NavigationRootKind = 'root';
type NavigationBarGroupKind = 'navGroup';
type NavigationNodeKind = NavigationLinkKind | NavigationGroupKind | NavigationBarGroupKind;
type NavigationLinkNode = {
    id: string;
    type: NavigationLinkKind;
    label: string;
    href: string;
    iconKey?: string;
};
type NavigationGroupNode = {
    id: string;
    type: NavigationGroupKind;
    label: string;
    children: NavigationTreeNode[];
};
type NavigationTreeNode = NavigationLinkNode | NavigationGroupNode;
type NavigationBarGroupNode = {
    id: string;
    type: NavigationBarGroupKind;
    label: string;
    children: NavigationTreeNode[];
};
type NavigationTree = {
    id: 'root';
    type: NavigationRootKind;
    children: NavigationBarGroupNode[];
};
type NavigationNodeMap = {
    link: NavigationLinkNode;
    group: NavigationGroupNode;
    navGroup: NavigationBarGroupNode;
};
type AnyNavigationNode = NavigationNodeMap[NavigationNodeKind];
type RenderedNavigationRegistryEntry<K extends NavigationNodeKind, P extends object> = {
    type: K;
    rendering: ({ node, overrides, }: {
        node: NavigationNodeMap[K];
        overrides?: Partial<P>;
    }) => ReactNode;
};
type NavigationRenderingPropsMap = {
    [K in NavigationNodeKind]: object;
};
type RenderedNavigationRegistry<PropsMap extends NavigationRenderingPropsMap> = {
    [K in NavigationNodeKind]: RenderedNavigationRegistryEntry<K, PropsMap[K]>;
};
type RuntimeNavigationTreeOverrides<PropsMap extends NavigationRenderingPropsMap> = {
    [K in NavigationNodeKind]?: Record<string, Partial<PropsMap[K]>>;
};

type DropDownMenuSelectors = {
    isSelected: (nodeId: string) => boolean;
    isAncestorSelected: (nodeId: string) => boolean;
    selectedId: string | null;
    selectedPathIds: string[];
};
declare function getDropDownMenuSelectors({ navigationTree, currentPath, }: {
    navigationTree: NavigationTree;
    currentPath: string;
}): DropDownMenuSelectors;

type DropDownGroupProps = {
    id: string;
    label: string;
    items: NavigationTreeNode[];
    headerProps?: BoxProps;
    labelTypographyProps?: TypographyProps;
    hasDivider?: boolean;
    dividerProps?: DividerProps;
};
declare function DropDownGroup({ id, items, label, headerProps, labelTypographyProps, hasDivider, dividerProps, }: DropDownGroupProps): react_jsx_runtime.JSX.Element;

type DropDownLinkProps = {
    href: string;
    label: string;
    id: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    buttonProps?: ButtonProps;
    labelTypographyProps?: TypographyProps;
};
declare function DropDownLink({ href, id, label, buttonProps, disabled, icon, labelTypographyProps, }: DropDownLinkProps): react_jsx_runtime.JSX.Element;

type DropDownNavGroupProps = {
    id: string;
    label: string;
    items: NavigationTreeNode[];
    headerProps?: ButtonProps;
    labelTypographyProps?: TypographyProps;
    megaMenuProps?: BoxProps;
};

type DefaultDropDownMenuRenderingProps = {
    link: DropDownLinkProps;
    group: DropDownGroupProps;
    navGroup: DropDownNavGroupProps;
};
declare const defaultDropDownMenuRegistry: {
    link: {
        type: "link";
        rendering({ node, overrides }: {
            node: NavigationLinkNode;
            overrides?: Partial<DropDownLinkProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    group: {
        type: "group";
        rendering({ node, overrides }: {
            node: NavigationGroupNode;
            overrides?: Partial<DropDownGroupProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
    navGroup: {
        type: "navGroup";
        rendering({ node, overrides }: {
            node: NavigationBarGroupNode;
            overrides?: Partial<DropDownNavGroupProps> | undefined;
        }): react_jsx_runtime.JSX.Element;
    };
};
type RenderDropDownMenuNode = (args: {
    node: AnyNavigationNode;
}) => {
    rendered: ReactNode;
};
declare function defaultRenderDropDownMenuNode({ renderedRegistry, runtimeOverrides, }: {
    renderedRegistry?: RenderedNavigationRegistry<DefaultDropDownMenuRenderingProps>;
    runtimeOverrides?: RuntimeNavigationTreeOverrides<DefaultDropDownMenuRenderingProps>;
}): RenderDropDownMenuNode;

type DropDownMenuRenderContextType = {
    nodesRenderer: RenderDropDownMenuNode;
    LinkComponent: LinkTypeComponent;
    basePadding: number;
};
declare const DropDownMenuRenderContext: React$1.Context<DropDownMenuRenderContextType | null>;
declare function useDropDownMenuRenderContext(): DropDownMenuRenderContextType;

/** Props for the {@link DropDown} component. Extends the shared {@link MenuPropsRendering}. */
type DropDownMenuProps = {
    navigationTree: NavigationTree;
    selectors: DropDownMenuSelectors;
    rendererContext: DropDownMenuRenderContextType;
};
declare function DropDown({ navigationTree, selectors, rendererContext }: DropDownMenuProps): react_jsx_runtime.JSX.Element;

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
    sx?: SxProps<Theme>;
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
    sx?: SxProps$1<Theme$1>;
};
declare function HeaderLogo({ ImageComponent, src, subtitle, alt, sx, height, width, }: HeaderLogoProps): react_jsx_runtime.JSX.Element;

type HeaderProps = {
    drawerProps: DrawerMenuRootProps;
    menuProps: DropDownMenuProps;
    logoProps: HeaderLogoProps;
    breadMenuProps: BreadMenuProps;
};
declare function Header({ breadMenuProps, drawerProps, logoProps, menuProps }: HeaderProps): react_jsx_runtime.JSX.Element;

type HeaderDrawerProps = {
    drawerProps: DrawerMenuRootProps;
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

export { type NavigationTreeNode as $, type AnyDrawerMenuNode as A, DropDown as B, type DropDownMenuProps as C, type DrawerMenuTree as D, DropDownGroup as E, type DropDownGroupProps as F, DropDownLink as G, Header as H, type DropDownLinkProps as I, defaultDropDownMenuRegistry as J, defaultRenderDropDownMenuNode as K, type LinkTypeComponent as L, type DefaultDropDownMenuRenderingProps as M, type RenderDropDownMenuNode as N, DropDownMenuRenderContext as O, useDropDownMenuRenderContext as P, type DropDownMenuRenderContextType as Q, type RenderDrawerMenuNode as R, getDropDownMenuSelectors as S, type DropDownMenuSelectors as T, type AnyNavigationNode as U, type NavigationBarGroupNode as V, type NavigationGroupNode as W, type NavigationLinkNode as X, type NavigationNodeKind as Y, type NavigationNodeMap as Z, type NavigationTree as _, type HeaderProps as a, BreadMenu as a0, type BreadMenuProps as a1, DefaultLinkLike as a2, HeaderDrawer as b, type HeaderDrawerProps as c, HeaderMenu as d, type HeaderMenuProps as e, HeaderLogo as f, type HeaderLogoProps as g, HeaderMinimal as h, type HeaderMinimalProps as i, DrawerMenuLink as j, type DrawerMenuLinkProps as k, DrawerMenuRoot as l, type DrawerMenuRootProps as m, DrawerMenuGroup as n, type DrawerMenuGroupProps as o, defaultDrawerMenuRegistry as p, defaultRenderDrawerMenuNode as q, type DefaultDrawerMenuRenderingProps as r, type DrawerMenuTreeOverrides as s, type RenderedDrawerMenuRegistry as t, type RuntimeDrawerMenuTreeOverrides as u, type DrawerMenuGroupNode as v, type DrawerMenuLinkNode as w, type DrawerMenuNodeKind as x, type DrawerMenuNodeMap as y, type DrawerMenuTreeNode as z };
