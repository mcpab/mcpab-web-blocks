'use client';
/**
 * @packageDocumentation
 *
 * # BreadMenu (Breadcrumbs)
 *
 * A small Next.js-friendly breadcrumb component using MUI’s `<Breadcrumbs />`.
 * - Uses `usePathname()` by default (you can inject `pathname` for SSR/Storybook).
 * - Adds a11y: last segment has `aria-current="page"`.
 * - Useful overrides: `segmentLabels`, `exclude`, `maxItems`, `titleCase`, `fontSize`, `sx`.
 *
 * ## Examples
 *
 * ### Basic (auto from current URL)
 * ```tsx
 * <BreadMenu />
 * ```
 *
 * ### Rename segments and collapse long trails
 * ```tsx
 * <BreadMenu
 *   segmentLabels={{
 *     'about-kellie': 'About Kellie',
 *     'press-media': 'Press & Media',
 *   }}
 *   maxItems={6}
 * />
 * ```
 *
 * ### Exclude certain segments
 * ```tsx
 * <BreadMenu exclude={['legacy', 'draft']} />
 * ```
 *
 * ### Provide explicit pathname (SSR / Storybook)
 * ```tsx
 * <BreadMenu pathname="/about/about-kellie/press-media" />
 * ```
 *
 * ### In a header (with defaults)
 * ```tsx
 * <AppBar>
 *   <Toolbar>
 *     <Brand />
 *     <BreadMenu segmentLabels={{ 'about-kellie': 'About Kellie' }} />
 *     <PrimaryNav />
 *   </Toolbar>
 * </AppBar>
 * ```
 */

import * as React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import { SxProps, Theme } from '@mui/material/styles';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export type BreadMenuProps = {
    /** Optional explicit pathname (useful for Storybook/SSR). Defaults to usePathname(). */
    pathname?: string;
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

/** kebab-case → Title Case */
function kebabToTitle(input: string) {
    return input
        .split('-')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

const BreadMenu: React.FC<BreadMenuProps> = ({
    pathname: pathnameProp,
    hideRoot = false,
    segmentLabels,
    exclude,
    maxItems = 8,
    fontSize = '0.875rem',
    sx,
    titleCase = true,
}) => {
    const livePathname = usePathname();
    const pathname = pathnameProp ?? livePathname ?? '/';

    const segments = React.useMemo(() => {
        const raw = pathname.split('/').filter(Boolean);
        return exclude && exclude.length ? raw.filter((s) => !exclude.includes(s)) : raw;
    }, [pathname, exclude]);

    const items = React.useMemo(() => {
        const crumbs: React.ReactNode[] = [];
        let acc: string[] = [];

        segments.forEach((seg, idx) => {
            acc.push(seg);
            const href = '/' + acc.join('/');
            const isLast = idx === segments.length - 1;
            const label = (segmentLabels && segmentLabels[seg]) || (titleCase ? kebabToTitle(seg) : seg);

            if (isLast) {
                crumbs.push(
                    <MuiLink
                        key={href}
                        component="span"
                        aria-current="page"
                        underline="none"
                        color="text.primary"
                        sx={{ cursor: 'default' }}
                    >
                        {label}
                    </MuiLink>
                );
            } else {
                crumbs.push(
                    <MuiLink key={href} component={NextLink} href={href} underline="hover" color="inherit">
                        {label}
                    </MuiLink>
                );
            }
        });

        return crumbs;
    }, [segments, segmentLabels, titleCase]);

    return (
        <nav aria-label="Breadcrumb">
            <MuiBreadcrumbs
                maxItems={maxItems}
                itemsAfterCollapse={2}
                itemsBeforeCollapse={1}
                sx={{ fontSize, color: 'inherit', mx: 2, p: 0.5, ...sx }}
            >
                {!hideRoot && (
                    <MuiLink component={NextLink} href="/" underline="hover" color="inherit">
                        Home
                    </MuiLink>
                )}
                {items}
            </MuiBreadcrumbs>
        </nav>
    );
};

export default BreadMenu;

