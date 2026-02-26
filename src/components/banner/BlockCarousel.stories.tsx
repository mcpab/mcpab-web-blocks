// BlockCarousel.stories.tsx
import * as React from "react";
import type { Story } from "@ladle/react";

import BlockCarousel from "./BlockCarousel";
import type { CarouselProps, ImageCarousel } from "./BlockCarousel";

/**
 * Minimal ImageComponentLike mock.
 * Works for Next/Image-like signatures; renders <img>.
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
  const resolvedSrc = typeof src === "string" ? src : src?.src;

  return (
    <img
      src={resolvedSrc}
      alt={alt ?? ""}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }}
      {...rest}
    />
  );
};

function svgDataUri(svg: string) {
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return `data:image/svg+xml,${encoded}`;
}

const slideA = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0ea5e9"/>
        <stop offset="1" stop-color="#111827"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="1200" cy="260" r="220" fill="rgba(255,255,255,0.12)"/>
    <circle cx="980" cy="420" r="320" fill="rgba(255,255,255,0.06)"/>
  </svg>
`);

const slideB = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#22c55e"/>
        <stop offset="1" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect x="140" y="520" width="720" height="46" fill="rgba(255,255,255,0.16)"/>
    <rect x="140" y="590" width="520" height="34" fill="rgba(255,255,255,0.12)"/>
  </svg>
`);

const slideC = svgDataUri(`
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
`);

const baseImages: ImageCarousel[] = [
  { image: slideA, objectPosition: "center" },
  { image: slideB, objectPosition: "center top" },
  { image: slideC, objectPosition: "center" },
];

const defaultConfig: CarouselProps = {
  images: baseImages,
  interval: 2200,
  transitionDuration: 900,
  overlayColor: "rgba(0,0,0,0.25)",
  preloadFirst: 2,
};

const Overlay: React.FC<{ title?: string; subtitle?: string }> = ({
  title = "BlockCarousel",
  subtitle = "Foreground layer in a Container; background crossfades below.",
}) => (
  <div
    style={{
      position: "relative",
      zIndex: 3,
      width: "min(92vw, 860px)",
      padding: 24,
      borderRadius: 16,
      backdropFilter: "blur(6px)",
      background: "rgba(0,0,0,0.35)",
      color: "white",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    }}
  >
    <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
    <div style={{ marginTop: 10, fontSize: 16, opacity: 0.9 }}>{subtitle}</div>
    <div style={{ marginTop: 18, display: "flex", gap: 10, justifyContent: "center" }}>
      <button style={{ padding: "10px 14px", borderRadius: 10, border: 0 }}>
        Primary CTA
      </button>
      <button
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          background: "transparent",
          color: "white",
          border: "1px solid rgba(255,255,255,0.6)",
        }}
      >
        Secondary
      </button>
    </div>
  </div>
);

/**
 * BlockCarousel inherits its height via `minHeight: 'inherit'`,
 * so we wrap it in a parent with a definite minHeight.
 */
const Frame: React.FC<{ height?: number; children: React.ReactNode }> = ({
  height = 280,
  children,
}) => (
  <div
    style={{
      width: "100%",
      minHeight: height,
      display: "flex",
      alignItems: "stretch",
    }}
  >
    {children}
  </div>
);

type Args = {
  height: number;
};

export const Default: Story<Args> = (args) => (
  <Frame height={args.height}>
    <BlockCarousel config={defaultConfig} ImageComponent={MockImage}>
      <Overlay />
    </BlockCarousel>
  </Frame>
);
Default.args = { height: 280 };
Default.storyName = "Default";

export const KenBurns: Story = () => {
  const config: CarouselProps = {
    ...defaultConfig,
    images: [
      { image: slideA, transform: "scale(1.08)", objectPosition: "center" },
      { image: slideB, transform: "scale(1.06)", objectPosition: "center top" },
      { image: slideC, transform: "scale(1.10)", objectPosition: "center" },
    ],
    overlayColor: "rgba(0,0,0,0.30)",
  };

  return (
    <Frame height={320}>
      <BlockCarousel config={config} ImageComponent={MockImage}>
        <Overlay title="Ken Burns-ish" subtitle='Per-slide "transform" + "objectPosition".' />
      </BlockCarousel>
    </Frame>
  );
};
KenBurns.storyName = "Ken Burns transforms";

export const FastTransition: Story = () => {
  const config: CarouselProps = {
    ...defaultConfig,
    interval: 1200,
    transitionDuration: 250,
  };

  return (
    <Frame height={280}>
      <BlockCarousel config={config} ImageComponent={MockImage}>
        <Overlay title="Fast transition" subtitle="Shorter interval + shorter crossfade." />
      </BlockCarousel>
    </Frame>
  );
};
FastTransition.storyName = "Fast transition";

export const DarkOverlay: Story = () => {
  const config: CarouselProps = {
    ...defaultConfig,
    overlayColor: "rgba(0,0,0,0.55)",
  };

  return (
    <Frame height={280}>
      <BlockCarousel config={config} ImageComponent={MockImage}>
        <Overlay title="Darker overlay" subtitle="Tests readability with a heavier tint." />
      </BlockCarousel>
    </Frame>
  );
};
DarkOverlay.storyName = "Dark overlay";

export const PreloadFirst1: Story = () => {
  const config: CarouselProps = {
    ...defaultConfig,
    preloadFirst: 1,
  };

  return (
    <Frame height={280}>
      <BlockCarousel config={config} ImageComponent={MockImage}>
        <Overlay title="preloadFirst = 1" subtitle="Only first slide marked priority." />
      </BlockCarousel>
    </Frame>
  );
};
PreloadFirst1.storyName = "Preload first 1";

export const NoConfig: Story = () => (
  <Frame height={240}>
    <BlockCarousel config={undefined} ImageComponent={MockImage}>
      <Overlay title="No config" subtitle="Renders foreground only (no frames)." />
    </BlockCarousel>
  </Frame>
);
NoConfig.storyName = "No config";
