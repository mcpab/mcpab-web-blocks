'use client';

import { Theme } from '@emotion/react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps, Box } from '@mui/system';
import React from 'react';
import { BreadMenu } from '../navigation/Breadcrumbs';
import { StaticImageDataLike, ImageComponentLike } from '../../core/image/image-types';
import { LinkTypeComponent } from '../../core/link';
import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import {
  MenuTreeElement,
  MenuTreeElementUI,
  RootOverridesUI,
  RootTreeElement,
} from '../menus/MenuTypes';
import { hierarchyToDrawerInput } from '../menus/drawer/hierarchyToDrawerInput';
import { DrawerMenu } from '../menus/drawer/DrawerMenu';
import { DropDown } from '../menus/dropDown/DropDown';
import { IsSelectedMenuElement } from '../menus/drawer/pathSelectors';
/**
 * @packageDocumentation
 *
 * # Header
 * Sticky site header with brand (logo + subtitle), optional breadcrumbs, and either:
 * - a top **DropDown** menu, or
 * - a drawer-based **DirMenu**.
 *
 * Menus default to `src/data/menu.json` but can be injected via props.
 */

/** Where to place the menu in the header row. */
export type HeaderMenuPosition = 'left' | 'center' | 'right';
/** Drawer anchor used when `menuType="drawer"`. */
export type HeaderDrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
/** Responsive viewport settings used when `navigation.menuType` is omitted. */
export type HeaderResponsiveMenuProps = {
  /** Breakpoint at and below which mobile behavior applies. @defaultValue 'md' */
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Menu variant used for small viewports. @defaultValue 'drawer' */
  mobileType?: 'drawer';
  /** Menu variant used for large viewports. @defaultValue 'dropDown' */
  desktopType?: 'dropDown';
};
/** Responsive breadcrumb visibility settings. */
export type HeaderResponsiveBreadcrumbsProps = {
  /** Breakpoint at and below which mobile breadcrumb visibility applies. @defaultValue 'md' */
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Show breadcrumbs on small viewports. @defaultValue false */
  mobile?: boolean;
  /** Show breadcrumbs on large viewports. @defaultValue true */
  desktop?: boolean;
};
/** Header-level menu style passthrough to menu components. */
export type HeaderMenuStylesProps = {
  dropDown?: {
    appBarSx?: SxProps<Theme>;
    toolbarSx?: SxProps<Theme>;
  };
  drawer?: {
    drawerPaperSx?: SxProps<Theme>;
    listSx?: SxProps<Theme>;
    triggerButtonSx?: SxProps<Theme>;
  };
};

/**
 * Brand/logo configuration for {@link Header}.
 *
 * This group controls only the left visual brand block.
 */
export type HeaderBrandProps = {
  /** Brand logo (static import or URL string). */
  logo: StaticImageDataLike | string;
  /** Alt text for the logo image. */
  altLogo?: string;
  /** Subtitle under the logo (optional). */
  logoSubtitle?: string;
  /** Image renderer used for logo output (for example Next.js `Image`). */
  ImageComponent: ImageComponentLike;
};

/**
 * Header layout options that do not affect menu data.
 */
export type HeaderLayoutProps = {
  /** Show breadcrumbs in the middle slot. @defaultValue true */
  showBreadcrumbs?: boolean;
  /**
   * Responsive breadcrumb behavior.
   * Defaults to hidden on mobile and visible on desktop.
   */
  responsiveBreadcrumbs?: HeaderResponsiveBreadcrumbsProps;
  /** Optional `sx` overrides for the outer AppBar. */
  appBarSx?: SxProps<Theme>;
  /** Optional `sx` overrides for the inner Toolbar. */
  toolbarSx?: SxProps<Theme>;
};

/**
 * Breadcrumb/routing configuration used by {@link BreadMenu}.
 */
export type HeaderRoutingProps = {
  /** Link component used by breadcrumbs/menu items. */
  linkComponent: LinkTypeComponent;
  /** Explicit pathname used to mark current route. */
  pathname: string;
};

/**
 * Menu data and behavior for {@link Header}.
 */
export type HeaderNavigationProps<P extends PayloadMap<MenuTreeElement>> = {
  /**
   * Explicit menu flavor to render.
   * When omitted, `responsiveMenu` decides between mobile and desktop menu types.
   */
  menuType?: 'dropDown' | 'drawer';
  /**
   * Responsive menu policy used only when `menuType` is omitted.
   * @defaultValue { breakpoint: 'md', mobileType: 'drawer', desktopType: 'dropDown' }
   */
  responsiveMenu?: HeaderResponsiveMenuProps;
  /** Visual `sx` passthrough for the rendered menu variant. */
  styles?: HeaderMenuStylesProps;
  /** Where to place the menu in the header row. @defaultValue 'right' */
  menuPosition?: HeaderMenuPosition;
  /**
   * Drawer anchor used only when `menuType="drawer"`.
   * Defaults to `'right'` when `menuPosition="right"`, otherwise `'left'`.
   */
  drawerAnchor?: HeaderDrawerAnchor;
  /** Typed hierarchy tree defining the menu structure. */
  hierarchy: HierarchyTree<P, RootTreeElement>;
  /** Per-node and root UI overrides (link component, dividers, display flags, etc.). */
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTreeElement>,
    RootOverridesUI,
    MenuTreeElementUI
  >;
  /** Active-item selector used to compute selected/ancestor-selected states. */
  selector: IsSelectedMenuElement;
  /** Drawer indentation step passed to `DrawerMenu`. @defaultValue 2 */
  indent?: number;
};

/**
 * Grouped modern API for {@link Header}. Prefer this shape.
 */
export type HeaderPropsGrouped<P extends PayloadMap<MenuTreeElement>> = {
  /** Brand/logo block options. */
  brand: HeaderBrandProps;
  /** Breadcrumb route and link behavior. */
  routing: HeaderRoutingProps;
  /** Menu data and behavior. */
  navigation: HeaderNavigationProps<P>;
  /** Optional visual layout overrides. */
  layout?: HeaderLayoutProps;
};

/**
 * Legacy flat API for {@link Header}.
 *
 * @deprecated Use grouped props via `brand`, `routing`, `navigation`, and `layout`.
 */
export type HeaderPropsLegacy<P extends PayloadMap<MenuTreeElement>> = HeaderBrandProps &
  HeaderRoutingProps &
  HeaderNavigationProps<P> &
  HeaderLayoutProps;

/**
 * Props accepted by {@link Header}.
 *
 * Supports the grouped API and legacy flat API for backwards compatibility.
 */
export type HeaderProps<P extends PayloadMap<MenuTreeElement>> =
  | HeaderPropsGrouped<P>
  | HeaderPropsLegacy<P>;

/**
 * Internal normalized shape used by the render logic.
 */
type HeaderNormalizedProps<P extends PayloadMap<MenuTreeElement>> = {
  brand: HeaderBrandProps;
  routing: HeaderRoutingProps;
  navigation: Omit<HeaderNavigationProps<P>, 'menuPosition'> & {
    menuPosition: HeaderMenuPosition;
  };
  layout: Required<Pick<HeaderLayoutProps, 'showBreadcrumbs'>> & Omit<HeaderLayoutProps, 'showBreadcrumbs'>;
};

/**
 * Normalizes grouped and legacy Header APIs into one strongly typed internal shape.
 */
function normalizeHeaderProps<P extends PayloadMap<MenuTreeElement>>(
  props: HeaderProps<P>,
): HeaderNormalizedProps<P> {
  if ('brand' in props) {
    return {
      brand: props.brand,
      routing: props.routing,
      navigation: {
        menuType: props.navigation.menuType,
        responsiveMenu: props.navigation.responsiveMenu,
        styles: props.navigation.styles,
        menuPosition: props.navigation.menuPosition ?? 'right',
        drawerAnchor: props.navigation.drawerAnchor,
        hierarchy: props.navigation.hierarchy,
        overrides: props.navigation.overrides,
        selector: props.navigation.selector,
        indent: props.navigation.indent,
      },
      layout: {
        showBreadcrumbs: props.layout?.showBreadcrumbs ?? true,
        responsiveBreadcrumbs: props.layout?.responsiveBreadcrumbs,
        appBarSx: props.layout?.appBarSx,
        toolbarSx: props.layout?.toolbarSx,
      },
    };
  }

  return {
    brand: {
      logo: props.logo,
      altLogo: props.altLogo,
      logoSubtitle: props.logoSubtitle,
      ImageComponent: props.ImageComponent,
    },
    routing: {
      linkComponent: props.linkComponent,
      pathname: props.pathname,
    },
    navigation: {
      menuType: props.menuType,
      responsiveMenu: props.responsiveMenu,
      styles: props.styles,
      menuPosition: props.menuPosition ?? 'right',
      drawerAnchor: props.drawerAnchor,
      hierarchy: props.hierarchy,
      overrides: props.overrides,
      selector: props.selector,
      indent: props.indent,
    },
    layout: {
      showBreadcrumbs: props.showBreadcrumbs ?? true,
      responsiveBreadcrumbs: props.responsiveBreadcrumbs,
      appBarSx: props.appBarSx,
      toolbarSx: props.toolbarSx,
    },
  };
}

/**
 * Sticky header with brand, breadcrumb, and navigation menu.
 *
 * Prefers the grouped API (`brand`, `routing`, `navigation`, `layout`) to keep
 * concerns isolated and reduce top-level prop sprawl.
 *
 * @example
 * ```tsx
 * <Header
 *   brand={{
 *     logo: logoPng,
 *     ImageComponent: Image,
 *     logoSubtitle: 'Acme',
 *   }}
 *   routing={{
 *     linkComponent: Link,
 *     pathname,
 *   }}
  *   navigation={{
  *     hierarchy,
  *     overrides,
  *     selector: (id) => id === activeId,
  *     responsiveMenu: { breakpoint: 'md' },
 *     styles: {
 *       dropDown: { appBarSx: { bgcolor: 'common.white' } },
 *     },
  *   }}
  * />
  * ```
 *
 * @example Custom menus + drawer
 * ```tsx
 * <Header
 *   brand={{ logo: logoPng, ImageComponent: Image }}
 *   routing={{ linkComponent: Link, pathname }}
 *   navigation={{
 *     hierarchy,
 *     overrides,
 *     selector: (id) => id === activeId,
 *     menuType: 'drawer',
 *     menuPosition: 'right',
 *     drawerAnchor: 'right',
 *   }}
 *   layout={{ showBreadcrumbs: false }}
 * />
 * ```
 *
 * @example Responsive breadcrumb visibility
 * ```tsx
 * <Header
 *   brand={{ logo: logoPng, ImageComponent: Image }}
 *   routing={{ linkComponent: Link, pathname }}
 *   navigation={{ hierarchy, overrides, selector: (id) => id === activeId }}
 *   layout={{
 *     responsiveBreadcrumbs: {
 *       breakpoint: 'md',
 *       mobile: false,
 *       desktop: true,
 *     },
 *   }}
 * />
 * ```
 */
const Header = function <P extends PayloadMap<MenuTreeElement>>(props: HeaderProps<P>) {
  //
  const { brand, routing, navigation, layout } = normalizeHeaderProps(props);
  const { logo, altLogo = 'Site logo', logoSubtitle, ImageComponent } = brand;
  const { linkComponent, pathname } = routing;
  const { menuType, responsiveMenu, styles, menuPosition, drawerAnchor, hierarchy, overrides, selector, indent = 2 } =
    navigation;
  const { showBreadcrumbs, responsiveBreadcrumbs, appBarSx, toolbarSx } = layout;
  const theme = useTheme();

  const result = hierarchyToDrawerInput({ hierarchy, overrides });

  if (!result.ok) {
    console.error('Failed to prepare menu tree for story:', result.issues);
    return (
      <div style={{ color: 'red' }}>
        Menu preparation error: {result.issues[0]?.message ?? 'Unknown error'}
      </div>
    );
  }

  const { root, treeFromRoot, rootOverrides } = result;

  const resolvedDrawerAnchor: HeaderDrawerAnchor =
    drawerAnchor ?? (menuPosition === 'right' ? 'right' : 'left');
  const responsiveMode = {
    breakpoint: responsiveMenu?.breakpoint ?? 'md',
    mobileType: responsiveMenu?.mobileType ?? 'drawer',
    desktopType: responsiveMenu?.desktopType ?? 'dropDown',
  } as const;
  const isMobileViewport = useMediaQuery(theme.breakpoints.down(responsiveMode.breakpoint));
  const resolvedMenuType = menuType ?? (isMobileViewport ? responsiveMode.mobileType : responsiveMode.desktopType);
  const breadcrumbsMode = {
    breakpoint: responsiveBreadcrumbs?.breakpoint ?? 'md',
    mobile: responsiveBreadcrumbs?.mobile ?? false,
    desktop: responsiveBreadcrumbs?.desktop ?? true,
  } as const;
  const isMobileBreadcrumbViewport = useMediaQuery(theme.breakpoints.down(breadcrumbsMode.breakpoint));
  const shouldShowBreadcrumbs =
    showBreadcrumbs && (isMobileBreadcrumbViewport ? breadcrumbsMode.mobile : breadcrumbsMode.desktop);

  // For consistent spacing when breadcrumbs are hidden, we keep a middle placeholder.
  const BreadcrumbSlot = shouldShowBreadcrumbs ? (
    <BreadMenu linkComponent={linkComponent} pathname={pathname} />
  ) : (
    <Box aria-hidden sx={{ minWidth: 24 }} />
  );

  const menuNode =
    resolvedMenuType === 'drawer' ? (
      <DrawerMenu
        root={root}
        treeFromRoot={treeFromRoot}
        rootOverrides={rootOverrides}
        anchor={resolvedDrawerAnchor}
        indent={indent}
        drawerPaperSx={styles?.drawer?.drawerPaperSx}
        listSx={styles?.drawer?.listSx}
        triggerButtonSx={styles?.drawer?.triggerButtonSx}
        selector={selector}
      />
    ) : (
      <DropDown
        root={root}
        treeFromRoot={treeFromRoot}
        rootOverrides={rootOverrides}
        selector={selector}
        appBarSx={styles?.dropDown?.appBarSx}
        toolbarSx={styles?.dropDown?.toolbarSx}
      />
    );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#FFFFFF',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        ...appBarSx,
      }}
    >
      <Toolbar
        sx={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)',
          alignItems: 'center',
          py: 2,
          gap: 2,
          ...toolbarSx,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            justifySelf: 'start',
            minWidth: 0,
          }}
        >
          {/* Brand block: logo + subtitle */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', md: 'center' },
            }}
          >
            <ImageComponent src={logo as any} width={170} height={50} priority alt={altLogo} />
            {logoSubtitle ? (
              <Typography variant="eyebrow" sx={{ mt: 1 }}>
                {logoSubtitle}
              </Typography>
            ) : null}
          </Box>
          {menuPosition === 'left' ? menuNode : null}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            minWidth: 0,
          }}
        >
          {BreadcrumbSlot}
          {menuPosition === 'center' ? menuNode : null}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', minWidth: 0 }}>
          {menuPosition === 'right' ? menuNode : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

type HeaderComponent = <P extends PayloadMap<MenuTreeElement>>(props: HeaderProps<P>) => React.JSX.Element;

export default React.memo(Header) as HeaderComponent;
