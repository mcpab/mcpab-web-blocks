'use client';

import * as React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';
import { toTitleCase } from 'src/lib';
import { DefaultLinkLike, type LinkTypeComponent } from 'src/core/link';

/**
 * Props for {@link BreadMenu}.
 */
export type BreadMenuProps = {
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

function normalizePathname(pathname?: string): string {
  const fallback = typeof window !== 'undefined' ? window.location.pathname : '/';
  const raw = (pathname ?? fallback).trim() || '/';
  const noHash = raw.split('#')[0] ?? raw;
  const noQuery = noHash.split('?')[0] ?? noHash;
  return noQuery.startsWith('/') ? noQuery : `/${noQuery}`;
}

/**
 * Breadcrumb navigation derived from a pathname.
 */
const BreadMenu = function ({
  pathname,
  linkComponent = DefaultLinkLike,
  hideRoot = false,
  segmentLabels,
  exclude,
  maxItems = 8,
  fontSize = '0.875rem',
  sx,
  titleCase = true,
}: BreadMenuProps) {
  const normalizedPath = React.useMemo(() => normalizePathname(pathname), [pathname]);

  const excludeSet = React.useMemo(() => new Set(exclude ?? []), [exclude]);

  const segments = React.useMemo(() => {
    const raw = normalizedPath.split('/').filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);

  const items = React.useMemo(() => {
    const crumbs: React.ReactNode[] = [];
    let acc: string[] = [];

    segments.forEach((seg, idx) => {
      acc.push(seg);
      const href = '/' + acc.join('/');
      const isLast = idx === segments.length - 1;
      const label = (segmentLabels && segmentLabels[seg]) || (titleCase ? toTitleCase(seg) : seg);

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
          </MuiLink>,
        );
      } else {
        crumbs.push(
          <MuiLink
            key={href}
            component={linkComponent}
            href={href}
            underline="hover"
            color="inherit"
          >
            {label}
          </MuiLink>,
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
        sx={[
          { fontSize, color: 'inherit', mx: 2, p: 0.5 },
          ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
        ]}
      >
        {!hideRoot && (
          <MuiLink component={linkComponent} href="/" underline="hover" color="inherit">
            Home
          </MuiLink>
        )}
        {items}
      </MuiBreadcrumbs>
    </nav>
  );
};

BreadMenu.displayName = 'BreadMenu';

export default BreadMenu;
