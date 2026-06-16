import Box, { type BoxProps } from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { Fragment, useState } from 'react';
import { SectionTitle } from '../typography/Title';
import { useTextTreeRendererContext } from './TextTreeRenderContext';
import type { RichTextBlock, SubSectionBlock } from './defaultTextRegistries';

export type ContentSectionProps = {
  title: RichTextBlock;
  content: (RichTextBlock | SubSectionBlock)[];
  collapsible?: boolean;
  defaultOpen: boolean;
  hasDivider?: boolean;
  contentGap?: BoxProps['gap'];
};

export function ContentSection({
  title,
  content,
  defaultOpen: isOpen,
  collapsible: shouldOpen,
  hasDivider,
  contentGap,
}: ContentSectionProps) {
  //

  const { nodesRenderer } = useTextTreeRendererContext();
  const [isOpenSection, setOpen] = useState<boolean>(isOpen);

  const { openIndicator, closeIndicator } = useTextTreeRendererContext();

  const onClick = () => {
    setOpen((open) => !open);
  };

  const indicator = shouldOpen ? (isOpenSection ? openIndicator : closeIndicator) : null;

  const titleRendered = nodesRenderer({ node: title }).rendered;
  // return <Fragment key={node.id}>{result.rendered}</Fragment>;

  return (
    <Box display="flex" flexDirection="column" gap={contentGap}>
      <Box display="flex" flexDirection="row" onClick={shouldOpen ? onClick : undefined}>
        {indicator}
        <SectionTitle>
          {titleRendered}
          {hasDivider && <Divider />}
        </SectionTitle>
      </Box>
      <Collapse in={shouldOpen ? isOpenSection : true} timeout="auto" unmountOnExit>
        <Box display="flex" flexDirection="column" gap={contentGap}>
          {content.map((node) => {
            return <Fragment key={node.id}>{nodesRenderer({ node: node }).rendered}</Fragment>;
            //
          })}
        </Box>
      </Collapse>
    </Box>
  );
}

export default ContentSection;
