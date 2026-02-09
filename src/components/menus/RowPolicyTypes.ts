import type { SxProps, Theme } from "@mui/material/styles";
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';

export type MenuLabelTypographyProps = Pick<
  TypographyProps,
  'variant' | 'color' | 'fontWeight' | 'sx' | 'noWrap' | 'align' |'fontSize' |'lineHeight' |'letterSpacing' | 'textTransform' 
>;

export type RowPolicyProps = {
  depth: number;
  menuTreeElement: MenuTreeElement;
  menuTreeElementUI: MenuTreeElementUI | undefined;
  isOpen?: boolean;
  isSelected?: boolean;
  isAncestorSelected?: boolean;
  hasChildren: boolean;
};


export type RowPlan = {
  text: string | React.ReactNode;
  typographyProps?: MenuLabelTypographyProps;

  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  indicatorPlacement?: "start" | "end";

  /** Logical indent for the row (RTL-safe). */
  paddingInlineStart: number;

  /** Styles applied to the row wrapper (ListItemButton or non-clickable wrapper). */
  rowSx?: SxProps<Theme>;
};

export type RowPolicy = ({ depth, menuTreeElement, menuTreeElementUI, isOpen, isSelected, isAncestorSelected }: RowPolicyProps) => RowPlan;