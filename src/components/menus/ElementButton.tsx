'use client';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import type { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { LinkTypeComponent } from 'src/core/link';
import { ElementLabel } from './ElementLabel';
import { MenuTreeElementUI } from './MenuTypes';
import { RowPlan } from './RowPolicyTypes';

/**
 * Props for {@link ElementButton}.
 * @internal
 */
export type ElementButtonProps = {
  /** UI overrides for this node (display flag, click handler). */
  overrides: MenuTreeElementUI | undefined;
  /** Visual plan produced by the active {@link RowPolicy}. */
  rowPlan: RowPlan;
  /** Link component used for navigation (e.g. Next.js `Link`). Required when `link` is set. */
  linkComponent?: LinkTypeComponent;
  /**
   * Indicator icon (e.g. chevron) rendered after the label.
   * Sourced from `rowPlan.indicator` by the caller — passed separately so toggle
   * components can intercept the click without wrapping the whole button.
   */
  indicator?: React.ReactNode;
  /** Navigation href. When set (with `linkComponent`), renders a `ListItemButton` link. */
  link?: string;
};

/**
 * Lowest-level interactive row element. Renders one of three variants:
 *
 * - **Link** (`link` + `linkComponent` provided) — `ListItemButton` with `component={linkComponent}`.
 * - **Button** (`overrides.onClick` provided) — `ListItemButton` with an `onClick` handler.
 * - **Plain item** — non-interactive `ListItem`.
 *
 * Inner content is always {@link ElementLabel} (icon + text) followed by the optional `indicator`.
 *
 * @internal Used by {@link DrawerElement}, {@link DrawerOpenClose}, {@link DropDownElement}, and {@link DropDownOpenClose}.
 */
export function ElementButton({
  link,
  overrides,
  rowPlan,
  indicator,
  linkComponent,
}: ElementButtonProps) {

  if (overrides?.display === false) return null;

  const onClick = overrides?.onClick;

  const { typographyProps, icon, text, paddingInlineStart, rowSx } = rowPlan;

  const elementLabel = <ElementLabel typographyProps={typographyProps} icon={icon} text={text} />;

  const sx: SxProps<Theme> = [
    { paddingInlineStart },
    ...(Array.isArray(rowSx) ? rowSx : rowSx ? [rowSx] : []),
  ];

  const elementWithIndicator = (
    <>
      {elementLabel}
      {indicator}
    </>
  );

  if (link && linkComponent) {
    return (
      <ListItemButton component={linkComponent} href={link} onClick={onClick} sx={sx}>
        {elementWithIndicator}
      </ListItemButton>
    );
  } else if (onClick) {
    return (
      <ListItemButton onClick={onClick} sx={sx}>
        {elementWithIndicator}
      </ListItemButton>
    );
  }

  return <ListItem sx={sx}>{elementWithIndicator}</ListItem>;
}
