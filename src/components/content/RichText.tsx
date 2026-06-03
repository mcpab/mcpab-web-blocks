import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { type AnyInlineTextNode } from './defaultTextRegistries';
import { useTextTreeRendererContext } from './TextTreeRenderContext';

export type RichTextProps = {
  inlineNodes: AnyInlineTextNode[];
};

export function RichText({ inlineNodes }: RichTextProps) {
  //

  const { nodesRenderer } = useTextTreeRendererContext();

  return (
    <Box component="span">
      {inlineNodes.map((node) => {
        const result = nodesRenderer({ node });
        return <Fragment key={node.id}>{result.rendered}</Fragment>;
      })}
    </Box>
  );
}
