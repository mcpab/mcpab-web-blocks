import * as React from 'react';

/**
 * Matches the common shape of `StaticImageData` (e.g., Next.js) without importing Next types.
 * You can broaden this later if your build pipeline produces different fields.
 */
export interface StaticImageDataLike {
  src: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export function isStaticImageDataLike(x: unknown): x is StaticImageDataLike {
  if (!x || typeof x !== 'object') return false;
  // Use a safe structural check, no `any`
  return 'src' in x && typeof (x as { src?: unknown }).src === 'string';
}

/**
 * "Next-ish" extras your app might use. These are NOT valid <img> attributes.
 * They exist so callers can write one prop object and you can adapt to different renderers.
 */
export type NextishExtras = {
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
export type UniversalImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height' | 'sizes'
> & {
  src: string | StaticImageDataLike;
  alt: string;
  width?: number | string;
  height?: number | string;
} & NextishExtras;

/**
 * A component type that can render using UniversalImageProps.
 * (e.g., HtmlImage, NextImageAdapter, etc.)
 */
export type ImageComponentLike = React.ComponentType<UniversalImageProps>;

/**
 * Extract a concrete URL + reasonable width/height defaults from `src`.
 * Does NOT include Next-only props.
 */
export function resolveImageSource(p: Pick<UniversalImageProps, 'src' | 'width' | 'height'>) {
  const { src, width, height } = p;

  const url = isStaticImageDataLike(src) ? src.src : src;

  const resolvedWidth = width ?? (isStaticImageDataLike(src) ? src.width : undefined);

  const resolvedHeight = height ?? (isStaticImageDataLike(src) ? src.height : undefined);

  return { src: url, width: resolvedWidth, height: resolvedHeight };
}

/**
 * Convert UniversalImageProps into <img> attributes safely:
 * - strips Next-ish props (fill/priority/quality/placeholder/unoptimized)
 * - resolves src/url and default width/height when src is StaticImageDataLike
 */
export function toImgAttrs(p: UniversalImageProps): React.ImgHTMLAttributes<HTMLImageElement> {
  const {
    src: _src,
    width: _w,
    height: _h,

    // Next-ish props to strip:
    fill,
    sizes,
    placeholder,
    priority,
    quality,
    unoptimized,

    // keep style separate (we may override when fill=true)
    style,

    ...rest
  } = p;

  const { src, width, height } = resolveImageSource({ src: _src, width: _w, height: _h });

  // Note: JSX <img width/height> accepts number | string.
  return {
    ...(rest as React.ImgHTMLAttributes<HTMLImageElement>),
    src,
    width: width as any,
    height: height as any,
    style,
  };
}

/**
 * Default renderer: plain <img>.
 * Supports `fill` by applying absolute positioning, similar to Next Image.
 *
 * Important: for `fill` to behave, the parent should be position: relative
 * and have an explicit size.
 */
export const HtmlImage = React.forwardRef<HTMLImageElement, UniversalImageProps>(function HtmlImage(
  { fill, style, ...props },
  ref,
) {
  const mergedStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }
    : (style ?? {});

  const imgProps = toImgAttrs({ ...(props as UniversalImageProps), style: mergedStyle });

  return <img ref={ref} {...imgProps} />;
});
