import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BreadMenu from './BreadMenu';
import type { LinkTypeComponent } from '../../../core/link';

export default {
  title: 'Navigation/Breadcrumbs/Bread Menu',
};

const StoryLink: LinkTypeComponent = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(function StoryLink(props, ref) {
  return <a ref={ref} {...props} />;
});

type PlaygroundArgs = {
  pathname: string;
  hideRoot: boolean;
  titleCase: boolean;
  maxItems: number;
  fontSize: string;
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <Box sx={{ p: 3, bgcolor: '#f8fafc', borderRadius: 2 }}>
    <Stack spacing={1.5}>
      <Typography variant="eyebrow" color="text.secondary">
        Breadcrumb preview
      </Typography>
      <BreadMenu
        pathname={args.pathname}
        linkComponent={StoryLink}
        hideRoot={args.hideRoot}
        titleCase={args.titleCase}
        maxItems={args.maxItems}
        fontSize={args.fontSize}
        segmentLabels={{ faq: 'FAQ', api: 'API' }}
      />
    </Stack>
  </Box>
);

Playground.args = {
  pathname: '/docs/getting-started/api/faq',
  hideRoot: false,
  titleCase: true,
  maxItems: 6,
  fontSize: '0.875rem',
};

Playground.argTypes = {
  pathname: { control: { type: 'text' } },
  hideRoot: { control: { type: 'boolean' } },
  titleCase: { control: { type: 'boolean' } },
  maxItems: { control: { type: 'range', min: 2, max: 10, step: 1 } },
  fontSize: { control: { type: 'text' } },
};

Playground.storyName = 'Playground';

export const ExcludedSegments: Story = () => (
  <Box sx={{ p: 3, bgcolor: '#eef2ff', borderRadius: 2 }}>
    <BreadMenu
      pathname="/blog/platform/release-notes/v2"
      linkComponent={StoryLink}
      exclude={['blog']}
      segmentLabels={{ 'release-notes': 'Release Notes', v2: 'Version 2' }}
    />
  </Box>
);

ExcludedSegments.storyName = 'Excluded segments';

export const NoPathnameProp: Story = () => (
  <Box sx={{ p: 3, bgcolor: '#f1f5f9', borderRadius: 2 }}>
    <BreadMenu linkComponent={StoryLink} />
  </Box>
);

NoPathnameProp.storyName = 'No pathname prop';
