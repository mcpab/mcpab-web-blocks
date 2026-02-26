import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import DynamicTransition from './DynamicTransition';
import type { StaticImageDataLike, ImageComponentLike } from '../../core/image/image-types';
import BackgroundBox from '../layout/BackgroundBox';

/** A single slide in the background carousel. */
export type ImageCarousel = {
  /** Image source — a URL string or a Next.js `StaticImageData`-compatible object. */
  image: string | StaticImageDataLike;
  /** CSS `transform` applied to the image (e.g. `'scale(1.05)'` for a Ken Burns effect). */
  transform?: string;
  /** CSS `object-position` for focal-point control (e.g. `'center top'`). */
  objectPosition?: string;
};

/** Carousel timing and appearance configuration passed to {@link BlockCarousel}. */
export type CarouselProps = {
  /** Ordered list of slides. */
  images: ImageCarousel[];
  /** Time each slide is fully visible, in milliseconds. @defaultValue 5000 */
  interval?: number;
  /** Crossfade duration in milliseconds. @defaultValue 900 */
  transitionDuration?: number;
  /** CSS color string for the overlay tint (e.g. `'rgba(0,0,0,0.2)'`). @defaultValue `'rgba(0,0,0,0.2)'` */
  overlayColor?: string;
  /** Number of slides to mark `priority` for eager loading. @defaultValue 2 */
  preloadFirst?: number;
};

/** Props for {@link BlockCarousel}. */
export type CarouselConfig = {
  /** Carousel timing and image list. Omit to render no background. */
  config?: CarouselProps;
  /** Foreground content rendered on top of the carousel (titles, CTAs, etc.). */
  children: React.ReactNode;
  /** Props forwarded to the foreground `Container`. */
  containerProps?: ContainerProps;
  /** Props forwarded to the outermost `Box` wrapper. */
  rootProps?: BoxProps;
  /** Image rendering component (e.g. Next.js `Image`). */
  ImageComponent: ImageComponentLike;
};

/**
 * Full-bleed background carousel with layered foreground content.
 *
 * Renders a CSS grid stack with three layers:
 * 1. **Background** — `DynamicTransition` cycling through `BackgroundBox` slides.
 * 2. **Shield** — an invisible `Box` that prevents accidental clicks on background images.
 * 3. **Foreground** — a `Container` holding `children` (titles, CTAs, etc.).
 *
 * Designed to sit inside a `Section` (or any flex/grid parent) that establishes
 * the band height; `BlockCarousel` inherits that height via `minHeight: 'inherit'`.
 *
 * @example
 * ```tsx
 * <BlockCarousel
 *   config={{ images, interval: 6000, overlayColor: 'rgba(0,0,0,0.35)' }}
 *   ImageComponent={Image}
 * >
 *   <MainTitle blocks={[{ title: 'Hello world' }]} />
 * </BlockCarousel>
 * ```
 *
 * @see {@link BannerCarousel} for the higher-level component that wraps this inside a `Section`.
 */
const BlockCarousel: React.FC<CarouselConfig> = ({
  config,
  children,
  containerProps,
  rootProps,
  ImageComponent,
}) => {
  const {
    images = [],
    interval: intervalProp,
    transitionDuration = 900,
    overlayColor = 'rgba(0,0,0,0.2)',
    preloadFirst = 2,
  } = config || {};

  const interval = intervalProp ?? 5000;

  const { sx: rootSx, ...restRoot } = rootProps ?? {};

  const frames = React.useMemo(() => {
    return images.map((img, i) => {
      const { transform, image, objectPosition } = img;
      return (
        <BackgroundBox
          key={i}
          ImageComponent={ImageComponent}
          imageConf={{
            src: image,
            overlayColor,
            transform,
            objectPosition,
            sizes: '100vw',
            placeholder: 'blur',
            quality: 70,
            priority: i < preloadFirst, // preload first N frames for snappy first transition
          }}
          sx={{ position: 'absolute', inset: 0 }}
        />
      );
    });
  }, [images, overlayColor, preloadFirst]);

  return (
    <Box
      // SINGLE ROOT that is the *only* direct child of <Section>.
      // It participates in layout (so Section’s band height is realized),
      // and anchors the absolute layers.
      {...restRoot}
      sx={{
        position: 'relative',
        display: 'grid', // grid lets us stack layers via grid-area
        width: '100%',
        minHeight: 'inherit', // ← inherit the band height from <Section>
        ...(rootSx as any),
      }}
    >
      {/* Frames root: positioned context for absolute slides */}
      <Box
        sx={{
          position: 'relative',
          gridArea: '1 / 1', // layer 1
          minHeight: 'inherit', // ensure a definite box for absolute children
        }}
      >
        <DynamicTransition
          frames={frames}
          interval={interval}
          transitionDuration={transitionDuration}
        />
      </Box>

      {/* Optional shield over frames (keeps clicks off backgrounds if needed) */}
      <Box sx={{ gridArea: '1 / 1', zIndex: 1 }} />

      {/* Foreground content (titles, CTAs, etc.) */}
      <Container
        {...containerProps}
        sx={{
          gridArea: '1 / 1', // layer 3, on top
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'inherit', // match the band height
          ...(containerProps?.sx || {}),
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default React.memo(BlockCarousel);
