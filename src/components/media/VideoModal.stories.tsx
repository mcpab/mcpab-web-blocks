import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import VideoModal from './VideoModal';

export default {
  title: 'Media/Video Modal',
};

type PlaygroundArgs = {
  title: string;
  buttonLabel: string;
  align: 'flex-start' | 'center' | 'flex-end';
  widthPercent: number;
  withVideoId: boolean;
  withSrc: boolean;
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <Box sx={{ p: 3, minHeight: 220, bgcolor: '#f8fafc', borderRadius: 2 }}>
    <Stack spacing={1.5}>
      <Typography variant="eyebrow" color="text.secondary">
        Open modal from trigger
      </Typography>
      <VideoModal
        title={args.title}
        buttonLabel={args.buttonLabel}
        align={args.align}
        widthPercent={args.widthPercent}
        {...(args.withVideoId ? { videoId: 'M7lc1UVf-VE' } : {})}
        {...(!args.withVideoId && args.withSrc ? { src: 'https://player.vimeo.com/video/76979871' } : {})}
      />
    </Stack>
  </Box>
);

Playground.args = {
  title: 'Video Modal',
  buttonLabel: 'Learn More',
  align: 'flex-end',
  widthPercent: 80,
  withVideoId: true,
  withSrc: false,
};

Playground.argTypes = {
  title: { control: { type: 'text' } },
  buttonLabel: { control: { type: 'text' } },
  align: {
    control: { type: 'radio' },
    options: ['flex-start', 'center', 'flex-end'],
  },
  widthPercent: { control: { type: 'range', min: 40, max: 100, step: 1 } },
  withVideoId: { control: { type: 'boolean' } },
  withSrc: { control: { type: 'boolean' } },
};

Playground.storyName = 'Playground';

export const CustomTrigger: Story = () => (
  <Box sx={{ p: 3, minHeight: 220, bgcolor: '#eef2ff', borderRadius: 2 }}>
    <VideoModal
      title="Custom Trigger Example"
      videoId="M7lc1UVf-VE"
      trigger={
        <Button variant="contained" color="primary">
          Open Demo Video
        </Button>
      }
      widthPercent={70}
    />
  </Box>
);

CustomTrigger.storyName = 'Custom trigger';

export const InvalidSourceFallback: Story = () => (
  <Box sx={{ p: 3, minHeight: 220, bgcolor: '#f1f5f9', borderRadius: 2 }}>
    <VideoModal
      title="Invalid Source Fallback"
      buttonLabel="Open Invalid Video"
      videoId="bad-id"
      widthPercent={65}
    />
  </Box>
);

InvalidSourceFallback.storyName = 'Invalid source fallback';
