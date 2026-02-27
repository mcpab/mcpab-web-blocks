import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HeroBlock from './HeroBlock';
import { HtmlImage } from '../../../../core/image/image-types';

export default {
  title: 'Layout/Sections/Hero Block',
};

function svgDataUri(svg: string) {
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

const heroA = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1000">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1d4ed8"/>
        <stop offset="1" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="1080" cy="240" r="220" fill="rgba(255,255,255,0.16)"/>
    <circle cx="960" cy="520" r="300" fill="rgba(255,255,255,0.10)"/>
  </svg>
`);

const heroB = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1000">
    <defs>
      <linearGradient id="bg2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#0f766e"/>
        <stop offset="1" stop-color="#0b1324"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg2)"/>
    <rect x="100" y="720" width="540" height="42" fill="rgba(255,255,255,0.18)"/>
    <rect x="100" y="780" width="420" height="28" fill="rgba(255,255,255,0.14)"/>
  </svg>
`);

type PlaygroundArgs = {
  image: 'heroA' | 'heroB';
  header: string;
  message: string;
  subTitle: string;
  caption: string;
  priority: boolean;
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#f8fafc' }}>
    <HeroBlock
      ImageComponent={HtmlImage}
      image={args.image === 'heroB' ? heroB : heroA}
      alt="Gradient hero illustration"
      header={args.header}
      message={args.message}
      subTitle={args.subTitle}
      caption={args.caption}
      priority={args.priority}
      sx={{ px: { xs: 2, md: 3 } }}
    />
  </Box>
);

Playground.args = {
  image: 'heroA',
  header: 'Human-centered digital systems',
  message:
    'We design resilient product experiences that scale from first launch to multi-team operations.',
  subTitle: 'Research-driven strategy. Production-ready UI.',
  caption: 'Concept art used for story preview only.',
  priority: false,
};

Playground.argTypes = {
  image: {
    control: { type: 'radio' },
    options: ['heroA', 'heroB'],
  },
  header: { control: { type: 'text' } },
  message: { control: { type: 'text' } },
  subTitle: { control: { type: 'text' } },
  caption: { control: { type: 'text' } },
  priority: { control: { type: 'boolean' } },
};

Playground.storyName = 'Playground';

export const WithCustomNodes: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#f1f5f9' }}>
    <HeroBlock
      ImageComponent={HtmlImage}
      image={heroB}
      alt="Abstract gradient with geometric shapes"
      header={
        <Typography variant="h4" color="primary">
          Build Once, Evolve Continuously
        </Typography>
      }
      message={
        <Typography variant="narrative" color="text.primary">
          HeroBlock accepts custom React nodes for heading and supporting copy, so teams can opt into
          richer formatting when needed.
        </Typography>
      }
      subTitle={<Typography variant="eyebrow">Composable blocks for product teams</Typography>}
      caption="Custom node rendering example."
      sx={{ px: { xs: 2, md: 3 } }}
    />
  </Box>
);

WithCustomNodes.storyName = 'With custom nodes';

export const ForwardedProps: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#eef2ff' }}>
    <HeroBlock
      id="hero-block-story"
      className="HeroBlockStory"
      ImageComponent={HtmlImage}
      image={heroA}
      alt="Blue gradient hero"
      header="Forwarded container props"
      message="This verifies id/className forwarding and sx merge behavior on the root container."
      subTitle="Container props now pass through correctly."
      caption="Inspect the root element in devtools."
      sx={{
        px: { xs: 2, md: 3 },
        outline: '2px dashed rgba(30,64,175,0.3)',
        outlineOffset: '-2px',
      }}
    />
  </Box>
);

ForwardedProps.storyName = 'Forwarded props';

export const NoCaption: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#f8fafc' }}>
    <HeroBlock
      ImageComponent={HtmlImage}
      image={heroB}
      alt="Teal gradient hero"
      header="No caption state"
      message="Useful when editorial content does not provide image credit or annotation."
      subTitle="Layout should remain balanced without the caption row."
      sx={{ px: { xs: 2, md: 3 } }}
    />
  </Box>
);

NoCaption.storyName = 'No caption';

export const ImageOnly: Story = () => (
  <Box sx={{ minHeight: 460, p: { xs: 1, md: 2 }, bgcolor: '#eef2ff' }}>
    <HeroBlock
      ImageComponent={HtmlImage}
      image={heroA}
      alt=""
      caption="Decorative image-only state."
      sx={{ px: { xs: 2, md: 3 } }}
    />
  </Box>
);

ImageOnly.storyName = 'Image only';
