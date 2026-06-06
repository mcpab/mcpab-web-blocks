import Box from '@mui/material/Box';
import { Fragment } from 'react';
import type { ContentTree } from './defaultTextRegistries';
import { useTextTreeRendererContext } from './TextTreeRenderContext';

export type ContentTreeViewProps = {
  tree: ContentTree;
};

export function ContentTreeView({ tree }: ContentTreeViewProps) {
  const { nodesRenderer } = useTextTreeRendererContext();

  return (
    <Box display="flex" flexDirection="column">
      {tree.children.map((node) => {
        const result = nodesRenderer({ node });

        return <Fragment key={node.id}>{result.rendered}</Fragment>;
      })}
    </Box>
  );
}

export default ContentTreeView;
