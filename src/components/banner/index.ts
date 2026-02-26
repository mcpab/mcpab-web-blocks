/**
 * @packageDocumentation
 *
 * # Banner module
 *
 * Hero / banner building blocks for full-bleed page sections:
 *
 * - {@link BannerCarousel} — hero band with an auto-advancing crossfade background carousel.
 * - {@link BannerStatic} — hero band with a single static background image.
 * - {@link BlockCarousel} — low-level carousel primitive used by `BannerCarousel`.
 * - {@link DynamicTransition} — client-side crossfade engine used by `BlockCarousel`.
 * - {@link MainTitle} — multi-block title renderer (primary / secondary hierarchy).
 *
 * ## Usage tips
 * - Keep text readable: use `overlayColor` on carousel/static images, or solid backgrounds with sufficient contrast.
 * - All components are wrapped in `React.memo` — prefer stable prop references to avoid unnecessary re-renders.
 * - `BannerCarousel` and `BannerStatic` both accept the same `ImageComponent` prop; pass Next.js `Image` (or any compatible renderer) at the call site.
 */

export { default as BannerStatic } from './BannerStatic';
export type { BannerStaticProps } from './BannerStatic';
export { default as BannerCarousel } from './BannerCarousel';
export type { BannerCarouselProps } from './BannerCarousel';
export { default as BlockCarousel } from './BlockCarousel';
export type { CarouselConfig, CarouselProps, ImageCarousel } from './BlockCarousel';
export { default as DynamicTransition } from './DynamicTransition';
export type { DynamicTransitionProps } from './DynamicTransition';
export { default as MainTitle } from './MainTitle';
export type { MainTitleProps, MainTitleBlock } from './MainTitle';
