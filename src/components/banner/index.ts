/**
 * @packageDocumentation
 *
 * # Banner module
 * Hero/banner building blocks:
 *
 * - {@link Banner} — high-level hero that renders titles over either a carousel or a static background.
 * - {@link BannerSimple} — compact static band with centered titles and a solid background color.
 * - {@link BlockCarousel} — full-bleed background carousel (used by `Banner`).
 * - {@link MainTitle} — multi-line title renderer (primary/secondary).
 *
 * ## Tips
 * - Keep text readable: use `overlayColor` on carousels or solid backgrounds with sufficient contrast.
 * - Prefer passing stable objects to reduce re-renders (components are `React.memo`’d).
 */

export { default as BannerStatic } from './BannerStatic';
export type { BannerStaticProps  } from './BannerStatic';
export { default as BannerCarousel } from './BannerCarousel';
export { default as BlockCarousel } from './BlockCarousel';
export { default as DynamicTransition } from './DynamicTransition';
export { default as MainTitle, type MainTitleProps } from  './MainTitle';
