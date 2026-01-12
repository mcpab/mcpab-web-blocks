'use client';

import { Theme } from "@emotion/react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { SxProps, Box } from "@mui/system";
import React from "react";
import { MenuElement, DirMenu, DropDown } from "../menus";
import { BreadMenu } from "../navigation/Breadcrumbs";
import {StaticImageDataLike} from "../../core/image/image-types";
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


/** Where to align the menu trigger/content in the header band. */
export type HeaderMenuPosition = 'left' | 'center' | 'right';

/** Props for the site Header. */
export type HeaderProps = {
    /** Menu model rendered by `DropDown`/`DirMenu`. Defaults to `src/data/menu.json`. */
    menus?: MenuElement[];

    /** Brand logo (static import or URL string). */
    logo: StaticImageDataLike | string;
    /** Alt text for the logo image. */
    altLogo?: string;
    /** Subtitle under the logo (optional). */
    logoSubtitle?: string;

    /** Show the breadcrumb bar in the middle. @defaultValue true */
    showBreadcrumbs?: boolean;

    /** Optional `sx` overrides for the outer AppBar. */
    appBarSx?: SxProps<Theme>;
    /** Optional `sx` overrides for the inner Toolbar. */
    toolbarSx?: SxProps<Theme>;

    /** Menu flavor to render. @defaultValue 'dropDown' */
    menuType?: 'dropDown' | 'drawer' | 'responsive';
    /** Alignment of the menu in the header. @defaultValue 'left' */
    menuPosition?: HeaderMenuPosition;
};

/**
 * Sticky header with brand, breadcrumb, and navigation menu.
 *
 * @example
 * ```tsx
 * <Header logo={logoPng} />
 * ```
 *
 * @example Custom menus + drawer
 * ```tsx
 * <Header
 *   logo={logoPng}
 *   menus={myMenus}
 *   menuType="drawer"
 *   menuPosition="right"
 *   showBreadcrumbs={false}
 * />
 * ```
 */
const Header: React.FC<HeaderProps> = ({
    menus,
    showBreadcrumbs = true,
    appBarSx,
    toolbarSx,
    logo,
    altLogo = 'Site logo',
    logoSubtitle,
    menuType = 'dropDown',
    menuPosition = 'left',
}) => {
 
 

    // For consistent spacing when breadcrumbs are hidden, we keep a middle placeholder.
    const BreadcrumbSlot = showBreadcrumbs ? (
        <BreadMenu />
    ) : (
        <Box aria-hidden sx={{ minWidth: 24 }} />
    );

    // DirMenu supports left/center/right/top/bottom; DropDown supports left/center/right.
    // For a header band, we map to left/center/right. (You can extend this if you want top/bottom drawer.)
    const dirPosition: 'left' | 'right' | 'top' | 'bottom' | 'center' =
        menuPosition === 'left' ? 'left' : menuPosition === 'right' ? 'right' : 'center';

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
                // Layout: brand (left), breadcrumbs (center), menu (right by default)
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                    gap: 2,
                    ...toolbarSx,
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
                    <Image
                        src={logo as any}
                        width={170}
                        height={50}
                        priority
                        alt={altLogo}
                    />
                    {logoSubtitle ? (
                        <Typography variant="subtitle1" sx={{ mt: 1 }}>
                            {logoSubtitle}
                        </Typography>
                    ) : null}
                </Box>

                {/* Breadcrumbs (optional) */}
                {BreadcrumbSlot}

                {/* Responsive menus */}
                {menuType === 'responsive' ? (
                    <>
                        {/* Mobile (below md): Drawer-style */}
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <DirMenu menus={menus} position={dirPosition} capitalize={false} />
                        </Box>

                        {/* Desktop (md+): Dropdown */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <DropDown menus={menus} position={menuPosition} capitalize />
                        </Box>
                    </>
                ) : menuType === 'drawer' ? (
                    <DirMenu menus={menus} position={dirPosition} />
                ) : (
                    <DropDown menus={menus} position={menuPosition} capitalize />
                )}

            </Toolbar>
        </AppBar>
    );
};

export default React.memo(Header);
