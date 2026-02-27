import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BackgroundBox from './BackgroundBox';
import { HtmlImage } from '../../core/image/image-types';

export default {
  title: 'Layout/Background Box',
};

function svgDataUri(svg: string) {
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

const heroA = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0f766e"/>
        <stop offset="1" stop-color="#082f49"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="1250" cy="190" r="220" fill="rgba(255,255,255,0.14)"/>
    <circle cx="980" cy="420" r="300" fill="rgba(255,255,255,0.08)"/>
  </svg>
`);

const heroB = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">
    <defs>
      <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#1d4ed8"/>
        <stop offset="1" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g2)"/>
    <rect x="120" y="780" width="640" height="44" fill="rgba(255,255,255,0.18)"/>
    <rect x="120" y="845" width="520" height="30" fill="rgba(255,255,255,0.14)"/>
  </svg>
`);

const Foreground: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <Box
    sx={{
      position: 'relative',
      zIndex: 1,
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      p: 3,
    }}
  >
    <Stack
      spacing={1}
      sx={{
        maxWidth: 720,
        textAlign: 'center',
        color: 'common.white',
        bgcolor: 'rgba(0,0,0,0.32)',
        borderRadius: 2,
        px: 3,
        py: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Stack>
  </Box>
);

type PlaygroundArgs = {
  image: 'heroA' | 'heroB';
  mode: 'cover' | 'contain' | 'scale-down';
  overlayColor: string;
  opacity: number;
  objectPosition: string;
  transform: string;
  widthCapped: boolean;
  width: string;
  aspectRatio: string;
  minHeight: number;
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <BackgroundBox
    ImageComponent={HtmlImage}
    imageConf={{
      src: args.image === 'heroB' ? heroB : heroA,
      mode: args.mode,
      objectPosition: args.objectPosition,
      overlayColor: args.overlayColor,
      opacity: args.opacity,
      transform: args.transform || undefined,
      width: args.widthCapped ? args.width : undefined,
      aspectRatio: args.widthCapped ? args.aspectRatio : undefined,
    }}
    sx={{
      minHeight: args.minHeight,
      borderRadius: 2,
      bgcolor: args.widthCapped ? '#f1f5f9' : undefined,
    }}
  >
    <Foreground
      title="BackgroundBox playground"
      subtitle="Use Ladle controls to test fit mode, overlay, positioning, and width-capped layout."
    />
  </BackgroundBox>
);

Playground.args = {
  image: 'heroA',
  mode: 'cover',
  overlayColor: 'rgba(0,0,0,0.28)',
  opacity: 1,
  objectPosition: '50% 50%',
  transform: '',
  widthCapped: false,
  width: 'min(80vw, 540px)',
  aspectRatio: '1 / 1',
  minHeight: 340,
};

Playground.argTypes = {
  image: {
    control: { type: 'radio' },
    options: ['heroA', 'heroB'],
  },
  mode: {
    control: { type: 'select' },
    options: ['cover', 'contain', 'scale-down'],
  },
  overlayColor: { control: { type: 'text' } },
  opacity: {
    control: { type: 'range', min: 0, max: 1, step: 0.05 },
  },
  objectPosition: { control: { type: 'text' } },
  transform: { control: { type: 'text' } },
  widthCapped: { control: { type: 'boolean' } },
  width: { control: { type: 'text' } },
  aspectRatio: { control: { type: 'text' } },
  minHeight: { control: { type: 'number' } },
};

Playground.storyName = 'Playground';

export const FullBleed: Story = () => (
  <BackgroundBox
    ImageComponent={HtmlImage}
    imageConf={{
      src: heroA,
      mode: 'cover',
      objectPosition: 'center center',
      overlayColor: 'rgba(0,0,0,0.28)',
    }}
    sx={{ minHeight: 340, borderRadius: 2 }}
  >
    <Foreground
      title="Full-bleed background"
      subtitle="Default mode uses full container coverage with overlay and centered content."
    />
  </BackgroundBox>
);

FullBleed.storyName = 'Full bleed';

export const WidthCapped: Story = () => (
  <BackgroundBox
    ImageComponent={HtmlImage}
    imageConf={{
      src: heroB,
      width: 'min(80vw, 540px)',
      aspectRatio: '1 / 1',
      objectPosition: '60% 50%',
      overlayColor: 'rgba(0,0,0,0.2)',
    }}
    sx={{ minHeight: 340, borderRadius: 2, bgcolor: '#f1f5f9' }}
  >
    <Foreground
      title="Width-capped mode"
      subtitle="Setting imageConf.width centers a constrained image box inside the section."
    />
  </BackgroundBox>
);

WidthCapped.storyName = 'Width capped';

export const OverlayOnly: Story = () => (
  <BackgroundBox
    ImageComponent={HtmlImage}
    imageConf={{
      src: heroA,
      overlayColor: 'linear-gradient(120deg, rgba(15,23,42,0.75), rgba(30,41,59,0.3))',
      opacity: 0.15,
    }}
    sx={{ minHeight: 300, borderRadius: 2 }}
  >
    <Foreground
      title="Overlay emphasis"
      subtitle="Use strong overlays to stress-test text contrast against busy imagery."
    />
  </BackgroundBox>
);

OverlayOnly.storyName = 'Overlay emphasis';
