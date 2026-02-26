import * as React from 'react';
import Section from '../../components/Section';
import BlockCarousel, { CarouselProps } from './BlockCarousel';
import type { SectionSize } from '../../design/sectionTokens';
import { ImageComponentLike } from 'src/core/image/image-types';

/** Props for {@link BannerCarousel}. */
export type BannerCarouselProps = {
  /**
   * Carousel configuration (image list, timing, overlay).
   * This is the full {@link CarouselProps} object, not just an image array.
   */
  images: CarouselProps;
  /** Band height token. @defaultValue `'micro'` */
  size?: SectionSize;
  /** HTML `id` on the `Section` root. Omit to avoid duplicate IDs when multiple banners appear on one page. */
  id?: string;
  /** Foreground content rendered over the carousel (titles, CTAs, etc.). */
  children: React.ReactNode;
  /** Image rendering component (e.g. Next.js `Image`). */
  ImageComponent: ImageComponentLike;
};

/**
 * Hero banner with an auto-advancing background carousel.
 *
 * Wraps a `Section` (for band height and positioning context) around a
 * {@link BlockCarousel} (for the crossfading image layers). Foreground content
 * is passed as `children` and rendered centred over the carousel.
 *
 * @example
 * ```tsx
 * <BannerCarousel
 *   images={{ images: slides, interval: 6000 }}
 *   size="lg"
 *   ImageComponent={Image}
 * >
 *   <MainTitle blocks={[{ title: 'Welcome' }]} />
 * </BannerCarousel>
 * ```
 *
 * @see {@link BannerStatic} for a single-image variant.
 * @see {@link BlockCarousel} for the underlying carousel primitive.
 */
const BannerCarousel: React.FC<BannerCarouselProps> = ({
  images,
  id,
  size = 'micro',
  children,
  ImageComponent,
}) => {
  return (
    <Section
      id={id as string | undefined} // Don't hardcode "banner" to avoid duplicate IDs on pages with multiple banners.
      size={size}                    // Establishes minHeight via tokens and sets display:flex.
      position={'relative'}          // Ensure Section is the positioning context for BlockCarousel.
      width={'100%'}
      lockHeight                     // Make height definite for absolute children (BlockCarousel).
    >
      {/*
        Section applies: `& > * { flex: 1; min-height: inherit }`
        → BlockCarousel fills the band's height automatically.
      */}
      <BlockCarousel
        config={images}
        ImageComponent={ImageComponent}
      >
        {/* Overlay content. Keep it lean; wrap with a Container upstream if you need maxWidth constraints. */}
        {children}
      </BlockCarousel>
    </Section>
  );
};

export default React.memo(BannerCarousel);
