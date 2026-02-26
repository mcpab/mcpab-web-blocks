// ClickTextImage.stories.tsx
import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ClickTextImage from './ClickTextImage';

const MockImage: React.FC<any> = ({ src, alt, style, className, ...rest }) => {
  const resolvedSrc = typeof src === 'string' ? src : src?.src;
  return (
    <img
      src={resolvedSrc}
      alt={alt ?? ''}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
      {...rest}
    />
  );
};

function svgDataUri(svg: string) {
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

const bg = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0ea5e9"/>
        <stop offset="1" stop-color="#111827"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="1220" cy="260" r="220" fill="rgba(255,255,255,0.12)"/>
    <circle cx="980" cy="420" r="320" fill="rgba(255,255,255,0.06)"/>
  </svg>
`);

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, maxWidth: 560 }}>{children}</div>
);

export const Default: Story = () => (
  <Frame>
    <ClickTextImage
      title="Compassionate, evidence-based care"
      image={bg}
      text="We combine warmth with scientific rigor to help you move forward. Click again to close."
      ImageComponent={MockImage}
    />
  </Frame>
);
Default.storyName = 'Default';

export const RichTitleAndContent: Story = () => (
  <Frame>
    <ClickTextImage
      title={
        <Box>
          <Typography variant="h6" sx={{ color: 'common.white' }}>
            Project Showcase
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
            Click to reveal details
          </Typography>
        </Box>
      }
      image={bg}
      text={
        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            This is long-ish content to test scrolling and spacing. You can put any React nodes
            here.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Try: click background / press Enter / press Space to toggle.
          </Typography>

          {/* Make it scroll a bit */}
          <Box sx={{ mt: 2 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                • Detail line {i + 1}
              </Typography>
            ))}
          </Box>
        </Box>
      }
      ImageComponent={MockImage}
    />
  </Frame>
);
RichTitleAndContent.storyName = 'Rich title + scrollable content';

export const GridLayout: Story = () => (
  <Frame>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
      }}
    >
      <ClickTextImage title="Tile A" image={bg} text="Short content" ImageComponent={MockImage} />
      <ClickTextImage
        title="Tile B (longer content)"
        image={bg}
        text={
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Longer content to confirm the tile stays stable in a grid layout.
            </Typography>
            {Array.from({ length: 10 }).map((_, i) => (
              <Typography key={i} variant="body2">
                Extra line {i + 1}
              </Typography>
            ))}
          </Box>
        }
        ImageComponent={MockImage}
      />
    </div>
  </Frame>
);
GridLayout.storyName = 'In a grid';
