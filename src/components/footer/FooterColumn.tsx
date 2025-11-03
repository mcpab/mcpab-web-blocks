'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import type { SvgIconComponent } from '@mui/icons-material/';
import { SubsectionTitle } from '../typography';

// Types
export type FooterItem =
  | { label: string; href?: `/${string}`; icon?: SvgIconComponent; external?: false }
  | {
    label: string;
    href: `${'http' | 'https'}://${string}` | `mailto:${string}` | `tel:${string}`;
    icon?: SvgIconComponent;
    external?: true;
  }
  | { label: string; icon?: SvgIconComponent; href?: undefined };

export type FooterColumn = {
  title: string;
  items: FooterItem[];
};

interface FooterColumnProps {
  column: FooterColumn;
  sx?: object;
  /** id for the heading used by aria-labelledby on parent Grid */
  headingId?: string;
  /** role for the list container (defaults to 'list') */
  listRole?: React.AriaRole;
  /** render list container as <address> (useful for contact blocks) */
  asAddress?: boolean;
}

// Helpers
function isExternalHref(href?: string) {
  if (!href) return false;
  return /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

function externalAttrs(href?: string) {
  if (!href) return {};
  return isExternalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

const srOnly: React.CSSProperties = {
  position: 'absolute',
  left: -10000,
  top: 'auto',
  width: 1,
  height: 1,
  overflow: 'hidden',
};

const FooterColumn: React.FC<FooterColumnProps> = ({
  column,
  sx,
  headingId,
  listRole = 'list',
  asAddress = false,
}) => {
  const ListWrapper = asAddress ? 'address' : 'div';

  return (
    <Grid container rowSpacing={1} columnSpacing={0} sx={{ justifyContent: 'center', ...sx }}>
      {/* Heading */}
      <Grid size={{ xs: 12 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SubsectionTitle id={headingId}   sx={{ fontWeight: 'bold',...sx }}>
          {column.title}
        </SubsectionTitle>
      </Grid>

      {/* List */}
      <Grid
        size={{ xs: 12 }}
        component={ListWrapper as any}
        sx={{ all: asAddress ? 'unset' : undefined, display: 'block' }}
      >
        <ul role={listRole} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {column.items.map((item, index) => {
            const Icon = item.icon;
            const href = item.href;

            const content = href ? (
              <Link
                href={href}
                {...externalAttrs(href)}
                style={{ textDecoration: 'none', color: 'inherit' }}
                prefetch={false}
              >
                <Typography
                  variant="body2"
                  sx={{ '&:hover': { textDecoration: 'underline' } }}
                >
                  {item.label}
                </Typography>
              </Link>
            ) : (
              <Typography variant="body2">{item.label}</Typography>
            );

            return (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0' }}>
                {Icon ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0 }}>
                    <Icon fontSize="small" aria-hidden />
                  </span>
                ) : null}
                {content}
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );
};

export default FooterColumn;
