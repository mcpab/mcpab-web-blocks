/**
 * @packageDocumentation
 *
 * # Footers module
 *
 * GridCSS-powered page footer layouts. Each component renders a structured
 * footer with a header band, N content columns, and a bottom footer strip.
 * All slots accept arbitrary React nodes, so you can compose them freely.
 *
 * | Component | Catalog key | Columns | Best for |
 * |---|---|---|---|
 * | {@link TwoColumnsFooter} | `header2colFooter` | 2 | Side-by-side comparison, brand + contact |
 * | {@link ThreeColumnsFooter} | `footerHeader3Columns` | 3 | Balanced nav link groups |
 * | {@link FeaturedColumnsFooter} | `header3colFooter` | 3 | Feature / service showcases |
 * | {@link FiveColumnsFooter} | `footerHeader5Columns` | 5 | Large-site multi-column nav |
 *
 * ## Usage tips
 * - All props are optional — omit any slot and that region renders empty.
 * - The components set `width: 100%` and `height: 100%`; wrap them in a
 *   container that supplies background colour and padding.
 */

export { TwoColumnsFooter } from './TwoColumnsFooter';
export type { TwoColumnsFooterProps } from './TwoColumnsFooter';

export { ThreeColumnsFooter } from './ThreeColumnsFooter';
export type { ThreeColumnsFooterProps } from './ThreeColumnsFooter';

export { FeaturedColumnsFooter } from './FeaturedColumnsFooter';
export type { FeaturedColumnsFooterProps } from './FeaturedColumnsFooter';

export { FiveColumnsFooter } from './FiveColumnsFooter';
export type { FiveColumnsFooterProps } from './FiveColumnsFooter';
