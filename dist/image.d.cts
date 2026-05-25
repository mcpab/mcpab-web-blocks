import * as React from 'react';

/**
 * Matches the common shape of `StaticImageData` (e.g., Next.js) without importing Next types.
 * You can broaden this later if your build pipeline produces different fields.
 */
interface StaticImageDataLike {
    src: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
}
declare function isStaticImageDataLike(x: unknown): x is StaticImageDataLike;
/**
 * "Next-ish" extras your app might use. These are NOT valid <img> attributes.
 * They exist so callers can write one prop object and you can adapt to different renderers.
 */
type NextishExtras = {
    fill?: boolean;
    sizes?: string;
    placeholder?: 'blur' | 'empty';
    priority?: boolean;
    quality?: number;
    unoptimized?: boolean;
};
/**
 * A universal image prop type:
 * - accepts either a URL string or StaticImageDataLike
 * - keeps `alt` required
 * - excludes conflicting DOM props so we can redefine them
 */
type UniversalImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'sizes'> & {
    src: string | StaticImageDataLike;
    alt: string;
    width?: number | string;
    height?: number | string;
} & NextishExtras;
/**
 * A component type that can render using UniversalImageProps.
 * (e.g., HtmlImage, NextImageAdapter, etc.)
 */
type ImageComponentLike = React.ComponentType<UniversalImageProps>;
/**
 * Convert UniversalImageProps into <img> attributes safely:
 * - strips Next-ish props (fill/priority/quality/placeholder/unoptimized)
 * - resolves src/url and default width/height when src is StaticImageDataLike
 */
declare function toImgAttrs(p: UniversalImageProps): React.ImgHTMLAttributes<HTMLImageElement>;
/**
 * Default renderer: plain <img>.
 * Supports `fill` by applying absolute positioning, similar to Next Image.
 *
 * Important: for `fill` to behave, the parent should be position: relative
 * and have an explicit size.
 */
declare const HtmlImage: React.ForwardRefExoticComponent<Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height" | "width" | "alt" | "src" | "sizes"> & {
    src: string | StaticImageDataLike;
    alt: string;
    width?: number | string;
    height?: number | string;
} & NextishExtras & React.RefAttributes<HTMLImageElement>>;

export { HtmlImage, type ImageComponentLike, type StaticImageDataLike, type UniversalImageProps, isStaticImageDataLike, toImgAttrs };
