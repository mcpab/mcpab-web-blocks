import React from 'react';
import { SectionContainer } from './TextContainerTypes';
import { useTextTreeRendererContext } from './TextTreeRenderContext';

export type SectionProps = {
  sectionContainer: SectionContainer;
  shouldOpen: boolean;
  isOpen: boolean;
  hasDivider?: boolean;
};

export function Section({ sectionContainer, isOpen, shouldOpen, hasDivider }: SectionProps) {

  const { openIndicator, closeIndicator, rendersRegistry } = useTextTreeRendererContext();





}


