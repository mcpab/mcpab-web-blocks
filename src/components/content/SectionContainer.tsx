import { SectionContainer } from './TextContainerTypes';
import { useTextTreeRendererContext } from './TextTreeRenderContext';

export type SectionContainerProps = {
  sectionContainer: SectionContainer;
  shouldOpen: boolean;
  isOpen: boolean;
  hasDivider?: boolean;
};

export function SectionContainer({ sectionContainer, isOpen, shouldOpen, hasDivider }: SectionContainerProps) {

  const { openIndicator, closeIndicator, rendersRegistry } = useTextTreeRendererContext();





}


