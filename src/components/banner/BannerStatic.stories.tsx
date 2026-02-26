// BannerStatic.stories.tsx
import * as React from "react";
import type { Story } from "@ladle/react";

import BannerStatic from "./BannerStatic";
import type { BannerStaticProps } from "./BannerStatic";
import type { ImageConf } from "../layout/BackgroundBox";

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

const heroA = svgDataUri(`
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

const heroB = svgDataUri(`
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

/**
 * Adjust these if your ImageConf differs.
 * Common keys I’ve seen: src, overlayColor, overlayOpacity, position, transform, blur, etc.
 */
const imageConfDefault: ImageConf = {
  src: heroA as any,
  overlayColor: "rgba(0,0,0,0.35)",
} as any;

const imageConfHeavyOverlay: ImageConf = {
  src: heroB as any,
  overlayColor: "rgba(0,0,0,0.55)",
} as any;

const Overlay: React.FC<{ title?: string; subtitle?: string }> = ({
  title = "BannerStatic",
  subtitle = "Single background image + centered content container.",
}) => (
  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      textAlign: "center",
    }}
  >
    <div
      style={{
        maxWidth: 860,
        padding: 24,
        borderRadius: 16,
        backdropFilter: "blur(6px)",
        background: "rgba(0,0,0,0.35)",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1 }}>
        {title}
      </div>
      <div style={{ marginTop: 10, fontSize: 16, opacity: 0.9 }}>
        {subtitle}
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
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
  </div>
);

type Args = Pick<BannerStaticProps, "size">;

export const Default: Story<Args> = (args) => (
  <div style={{ width: "100%" }}>
    <BannerStatic
      image={imageConfDefault}
      size={args.size}
      ImageComponent={MockImage}
    >
      <Overlay />
    </BannerStatic>
  </div>
);
Default.args = { size: "micro" };
Default.storyName = "Default";

export const HeavyOverlay: Story = () => (
  <div style={{ width: "100%" }}>
    <BannerStatic image={imageConfHeavyOverlay} size={"micro" as any} ImageComponent={MockImage}>
      <Overlay title="Heavy overlay" subtitle="Good for testing legibility and contrast." />
    </BannerStatic>
  </div>
);
HeavyOverlay.storyName = "Heavy overlay";

export const SizeLg: Story = () => (
  <div style={{ width: "100%" }}>
    <BannerStatic image={imageConfDefault} size={"lg" as any} ImageComponent={MockImage}>
      <Overlay title="Size: lg" subtitle="Taller band token to test vertical centering." />
    </BannerStatic>
  </div>
);
SizeLg.storyName = "Size: lg";

export const WithBoxProps: Story = () => (
  <div style={{ width: "100%" }}>
    <BannerStatic
      image={imageConfDefault}
      size={"micro" as any}
      ImageComponent={MockImage}
      boxProps={{
        id: "banner-static-story",
        className: "BannerStaticStory",
        sx: {
          outline: "2px dashed rgba(255,255,255,0.35)",
          outlineOffset: "-2px",
        },
      }}
    >
      <Overlay
        title="With boxProps"
        subtitle="Tests id, className, and sx merge order (consumer overrides last)."
      />
    </BannerStatic>
  </div>
);
WithBoxProps.storyName = "With boxProps";
