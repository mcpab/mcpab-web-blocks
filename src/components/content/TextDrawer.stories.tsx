import type { Story } from '@ladle/react';

import { ContentTree, defaultRenderTextNode, TextTreeOverrides } from './defaultTextRegistries';
import { parseInlineText } from './parseInlineText';
import { ContentTreeView } from './ContentTreeView';
import { TextTreeRendererContext, TextTreeRendererContextType } from './TextTreeRenderContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DefaultLinkLike } from '../../core/link';

const textTree = {
  id: 'root',
  type: 'root',
  children: [
    {
      type: 'richText',
      id: 't1',
      content: parseInlineText('ciao ***bold*** and `code` [site](/x)', {
        idPrefix: 't1',
      }),
    },
    {
      type: 'section',
      id: 's1',
      title: {
        type: 'richText',
        id: 's1-title',
        content: parseInlineText('Section ***One***', {
          idPrefix: 's1-title',
        }),
      },
      content: [
        {
          type: 'richText',
          id: 's1-body-1',
          content: parseInlineText('This is a paragraph with **strong text** and *emphasis*.', {
            idPrefix: 's1-body-1',
          }),
        },
        {
          type: 'subSection',
          id: 's1-sub-1',
          title: {
            type: 'richText',
            id: 's1-sub-1-title',
            content: parseInlineText('A `subsection` title', {
              idPrefix: 's1-sub-1-title',
            }),
          },
          content: [
            {
              type: 'richText',
              id: 's1-sub-1-body-1',
              content: parseInlineText('Nested content can include [links](/docs) too.', {
                idPrefix: 's1-sub-1-body-1',
              }),
            },
            {
              type: 'richText',
              id: 's1-sub-1-body-2',
              content: parseInlineText('Another line with ***strong emphasis***.', {
                idPrefix: 's1-sub-1-body-2',
              }),
            },
          ],
        },
      ],
    },
  ],
} as const satisfies ContentTree;

const ovr = {
  section: {
    s1: {
      collapsible: true,
      contentGap:2,
      // hasDivider:false
    },
  },
  subSection: {
    "s1-sub-1":{
      contentGap:2,
      hasDivider:true,
      collapsible:true
    }
  }
} as const satisfies TextTreeOverrides<typeof textTree>;

export default {
  title: 'Content/TextDrawer',
};

let Component = <ContentTreeView tree={textTree} />;

const ctx: TextTreeRendererContextType = {
  openIndicator: <ExpandMoreIcon fontSize="small" />,
  closeIndicator: <ChevronRightIcon fontSize="small" />,
  LinkComponent: DefaultLinkLike,
  nodesRenderer: defaultRenderTextNode({ contentTree: textTree, textOverrides: ovr }),
};
export const TextDrawerDefault: Story = () => (
  <TextTreeRendererContext.Provider value={ctx}>
    <div style={{ padding: 24, maxWidth: 600 }}>{Component}</div>
  </TextTreeRendererContext.Provider>
);

TextDrawerDefault.storyName = 'TextDrawer / FAQ';
