import Box, { type BoxProps } from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { Fragment, useState } from 'react';
import { SubsectionTitle } from '../typography/Title';
import type { RichTextBlock } from './defaultTextRegistries';
import { RichText } from './RichText';
import { useTextTreeRendererContext } from './TextTreeRenderContext';

export type SubSectionProps = {
  title: RichTextBlock;
  content: RichTextBlock[];
  hasDivider?: boolean;
  contentGap?: BoxProps['gap'];
  collapsible?: boolean;
  defaultOpen?: boolean;
};

export function SubSection({
  title,
  content: richTextBlocks,
  hasDivider,
  contentGap,
  collapsible = false,
  defaultOpen = true,
}: SubSectionProps) {
  //

  const [isOpenSubSection, setOpen] = useState<boolean>(defaultOpen);
  const { closeIndicator, nodesRenderer, openIndicator } = useTextTreeRendererContext();

  const onClick = () => {
    setOpen((open) => !open);
  };

  const indicator = collapsible ? (isOpenSubSection ? openIndicator : closeIndicator) : null;

  return (
    <Box display="flex" flexDirection="column" gap={contentGap}>
      <Box display="flex" flexDirection="row" onClick={collapsible ? onClick : undefined}>
        {indicator}
        <SubsectionTitle>
          <RichText inlineNodes={title.content} />
          {hasDivider && <Divider />}
        </SubsectionTitle>
      </Box>

      <Collapse in={collapsible ? isOpenSubSection : true} timeout="auto" unmountOnExit>
        <Box display="flex" flexDirection="column" gap={contentGap}>
          {richTextBlocks.map((node) => {
            return <Fragment key={node.id}>{nodesRenderer({ node: node }).rendered}</Fragment>;
          })}
        </Box>
      </Collapse>
    </Box>
  );
}

export default SubSection;
