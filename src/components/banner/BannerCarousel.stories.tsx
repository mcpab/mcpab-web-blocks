// BannerCarousel.stories.tsx
import * as React from 'react';
import type { Story } from '@ladle/react';

import BannerCarousel from './BannerCarousel';
import type { CarouselProps } from './BlockCarousel';
import type { BannerCarouselProps } from './BannerCarousel';

/**
 * Minimal ImageComponentLike mock.
 * Matches the common surface area of Next/Image-ish props, but just renders <img>.
 */
const MockImage: React.FC<any> = ({
  src,
  alt,
  style,
  className,
  width,
  height,
  sizes,
  ...rest
}) => {
  // Handle Next/Image "static import" style: { src: string, ... }
  const resolvedSrc = typeof src === 'string' ? src : src?.src;

  return (
    <img
      src={resolvedSrc}
      alt={alt ?? ''}
      width={width}
      height={height}
      sizes={sizes}
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
  // Keep it simple and robust.
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `data:image/svg+xml,${encoded}`;
}

const slides = [
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0ea5e9"/>
          <stop offset="1" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <circle cx="1200" cy="220" r="180" fill="rgba(255,255,255,0.15)"/>
      <circle cx="980" cy="380" r="260" fill="rgba(255,255,255,0.08)"/>
    </svg>
  `),
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
      <defs>
        <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#22c55e"/>
          <stop offset="1" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect x="140" y="520" width="640" height="40" fill="rgba(255,255,255,0.18)"/>
      <rect x="140" y="590" width="460" height="30" fill="rgba(255,255,255,0.14)"/>
    </svg>
  `),
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#a855f7"/>
          <stop offset="1" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <path d="M0,700 C240,620 340,760 520,710 C740,650 820,760 1040,710 C1220,670 1380,730 1600,690 L1600,900 L0,900 Z"
            fill="rgba(255,255,255,0.10)"/>
    </svg>
  `),
];

/**
 * Adjust this object if your CarouselProps differs.
 * Common shapes:
 *  - { images: string[], interval?: number, ... }
 *  - { slides: { src: string }[], interval?: number, ... }
 */
const carouselConfig: CarouselProps = {
  // Most likely you have "images" as an array of sources.
  // If your type expects something else, swap it here.
  images: slides as any,
  interval: 2500,
} as any;

const Overlay: React.FC = () => (
  <div
    style={{
      position: 'relative',
      zIndex: 2,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      textAlign: 'center',
    }}
  >
    <div
      style={{
        maxWidth: 820,
        padding: 24,
        borderRadius: 16,
        backdropFilter: 'blur(6px)',
        background: 'rgba(0,0,0,0.35)',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1 }}>BannerCarousel</div>
      <div style={{ marginTop: 10, fontSize: 16, opacity: 0.9 }}>
        Overlay content sits above the cross-fading image layers.
      </div>
      <div style={{ marginTop: 18, display: 'flex', gap: 10, justifyContent: 'center' }}>
        <button style={{ padding: '10px 14px', borderRadius: 10, border: 0 }}>Primary CTA</button>
        <button
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            background: 'transparent',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.6)',
          }}
        >
          Secondary
        </button>
      </div>
    </div>
  </div>
);

type Args = Pick<BannerCarouselProps, 'size'>;

export const Default: Story<Args> = (args) => (
  <div style={{ width: '100%' }}>
    <BannerCarousel images={carouselConfig} size={args.size} ImageComponent={MockImage}>
      <Overlay />
    </BannerCarousel>
  </div>
);
Default.args = { size: 'micro' };
Default.storyName = 'Default';

export const TallerBand: Story = () => (
  <div style={{ width: '100%' }}>
    <BannerCarousel images={carouselConfig} size={'lg' as any} ImageComponent={MockImage}>
      <Overlay />
    </BannerCarousel>
  </div>
);
TallerBand.storyName = 'Size: lg';

export const BusyOverlay: Story = () => (
  <div style={{ width: '100%' }}>
    <BannerCarousel images={carouselConfig} size={'micro' as any} ImageComponent={MockImage}>
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 24,
        }}
      >
        <div
          style={{
            width: 'min(100%, 980px)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 16,
            color: 'white',
          }}
        >
          <div
            style={{
              padding: 18,
              borderRadius: 16,
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>Headline</div>
            <div style={{ marginTop: 8, opacity: 0.9 }}>
              More content to test alignment, overflow, and responsive behavior.
            </div>
          </div>
          <div
            style={{
              padding: 18,
              borderRadius: 16,
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.85 }}>Quick facts</div>
            <ul style={{ margin: '10px 0 0', paddingLeft: 18 }}>
              <li>Auto-advance</li>
              <li>Overlay</li>
              <li>Band tokens</li>
            </ul>
          </div>
        </div>
      </div>
    </BannerCarousel>
  </div>
);
BusyOverlay.storyName = 'Busy overlay';
