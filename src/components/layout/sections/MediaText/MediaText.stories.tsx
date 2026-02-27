import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediaText from './MediaText';
import { HtmlImage } from '../../../../core/image/image-types';

export default {
  title: 'Layout/Sections/Media Text',
};

function svgDataUri(svg: string) {
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

const mediaA = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0ea5e9"/>
        <stop offset="1" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g1)"/>
    <circle cx="1080" cy="260" r="220" fill="rgba(255,255,255,0.14)"/>
    <circle cx="940" cy="500" r="290" fill="rgba(255,255,255,0.08)"/>
  </svg>
`);

const mediaB = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
    <defs>
      <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#16a34a"/>
        <stop offset="1" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g2)"/>
    <rect x="140" y="620" width="680" height="48" fill="rgba(255,255,255,0.16)"/>
    <rect x="140" y="690" width="520" height="32" fill="rgba(255,255,255,0.12)"/>
  </svg>
`);

const Message = (
  <Stack spacing={2} sx={{ p: { xs: 2, md: 3 } }}>
    <Typography variant="h4" color="primary">
      MediaText section
    </Typography>
    <Typography variant="lead" color="text.primary">
      Pair editorial content with image or video media and keep responsive proportions controlled by
      named split presets.
    </Typography>
    <Typography variant="strapline" color="text.secondary">
      Supports reversed layout, optional background color, and optional container padding.
    </Typography>
  </Stack>
);

type PlaygroundArgs = {
  media: 'imageA' | 'imageB' | 'video';
  preset: '40-60' | '45-55' | '50-50' | '55-45' | '60-40';
  reverse: boolean;
  pad: boolean;
  backgroundColor: string;
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#f8fafc' }}>
    <MediaText
      ImageComponent={HtmlImage}
      message={Message}
      reverse={args.reverse}
      pad={args.pad}
      backgroundColor={args.backgroundColor}
      textSplit={{ preset: args.preset }}
      {...(args.media === 'video' ? { video: 'dQw4w9WgXcQ' } : { image: args.media === 'imageB' ? mediaB : mediaA })}
      sx={{ minHeight: 420, borderRadius: 2, overflow: 'hidden' }}
    />
  </Box>
);

Playground.args = {
  media: 'imageA',
  preset: '50-50',
  reverse: false,
  pad: false,
  backgroundColor: '',
};

Playground.argTypes = {
  media: {
    control: { type: 'radio' },
    options: ['imageA', 'imageB', 'video'],
  },
  preset: {
    control: { type: 'radio' },
    options: ['40-60', '45-55', '50-50', '55-45', '60-40'],
  },
  reverse: { control: { type: 'boolean' } },
  pad: { control: { type: 'boolean' } },
  backgroundColor: { control: { type: 'text' } },
};

Playground.storyName = 'Playground';

export const ReversedImage: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#eef2ff' }}>
    <MediaText
      ImageComponent={HtmlImage}
      image={mediaB}
      message={Message}
      reverse
      textSplit={{ preset: '55-45' }}
      sx={{ minHeight: 420, borderRadius: 2, overflow: 'hidden' }}
    />
  </Box>
);

ReversedImage.storyName = 'Reversed image';

export const VideoEmbed: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#f1f5f9' }}>
    <MediaText
      ImageComponent={HtmlImage}
      video="https://youtu.be/dQw4w9WgXcQ"
      message={Message}
      textSplit={{ preset: '45-55' }}
      pad
      backgroundColor="#ffffff"
      sx={{ minHeight: 420, borderRadius: 2, overflow: 'hidden' }}
    />
  </Box>
);

VideoEmbed.storyName = 'Video embed';
