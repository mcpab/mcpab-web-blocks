import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export type MenuLabelTypographyProps = Pick<
  TypographyProps,
  'variant' | 'color' | 'fontWeight' | 'sx' | 'noWrap' | 'align'
>;

export type RowPolicyProps = {
  depth: number;
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  isOpen?: boolean;
};

export type RowPlan = {
  text: string | React.ReactNode;
  typographyProps?: MenuLabelTypographyProps;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  indicatorPlacement?: 'start' | 'end';
  paddingInlineStart: number;
};

export type RowPolicy = ({ depth, node, isOpen }: RowPolicyProps) => RowPlan;