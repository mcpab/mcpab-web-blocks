import * as React from 'react';
import { isStaticImageDataLike, type StaticImageDataLike } from '../../core/image/imageExtensions';
import type { ImageComponentLike } from '../../core/image/imageExtensions';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Converts a CSS `object-position` string into absolute positioning values.
 */
function getBoxPosition(objectPosition?: string) {
  if (!objectPosition) return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
  const [x = '50%', y = '50%'] = objectPosition.split(' ');
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}

/**
 * Background image configuration for {@link BackgroundBox}.
 */
export type ImageConf = {
  /** Image source. Supports URL strings and static imports. */
  src: string | StaticImageDataLike;

  /**
   * `object-fit` mode used in full-bleed rendering.
   *
   * @default 'cover'
   */
  mode?: 'cover' | 'contain' | 'scale-down';

  /**
   * Optional overlay color rendered between image and content.
   */
  overlayColor?: string;

  /**
   * Image opacity for full-bleed rendering.
   *
   * @default 1
   */
  opacity?: number;

  /**
   * CSS `object-position` used to place the image focal point.
   *
   * @default '50% 50%'
   */
  objectPosition?: string;

  /**
   * CSS transform applied to the image element.
   */
  transform?: string;

  /**
   * Optional width constraint that enables width-capped mode.
   */
  width?: string;

  /**
   * `sizes` hint forwarded to the image component.
   *
   * @defaultValue '100vw' in full-bleed mode
   */
  sizes?: string;

  /**
   * Enables priority loading for critical, above-the-fold images.
   *
   * @default false
   */
  priority?: boolean;

  /**
   * Image quality passed to the image component.
   *
   * @default 70
   */
  quality?: number;

  /**
   * Placeholder behavior while image loads.
   *
   * @defaultValue 'blur' for static imports, otherwise 'empty'
   */
  placeholder?: 'blur' | 'empty';

  /**
   * Disables built-in image optimization when true.
   *
   * @default false
   */
  unoptimized?: boolean;

  /**
   * Aspect ratio used by width-capped mode (`number` or CSS ratio string).
   *
   * @defaultValue inferred from static image dimensions, otherwise '16 / 9'
   */
  aspectRatio?: string | number;

  filter?: string;
};

/**
 * Props for {@link BackgroundBox}.
 */
export type BackgroundBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Optional background image configuration.
   */
  imageConf?: ImageConf;

  /**
   * Foreground content rendered above image and overlay layers.
   */
  children?: React.ReactNode;

  /**
   * Additional styles applied to the root MUI `Box`.
   */
  sx?: SxProps<Theme>;

  /**
   * Class name applied to the root element.
   */
  className?: string;

  /** Image renderer compatible with Next.js Image-like props. */
  ImageComponent: ImageComponentLike;
};

/**
 * Container that renders an optional background image, optional overlay, and foreground content.
 *
 * @remarks
 * - If `imageConf.width` is set, image is rendered in width-capped mode.
 * - Without `imageConf.width`, image is rendered full-bleed.
 */

function computeAR({ imageConf }: { imageConf: ImageConf | undefined }): {
  computedAR: string | number;
  placeholder: 'blur' | 'empty';
} {
  if (imageConf === undefined) {
    return {
      computedAR: '16 / 9',
      placeholder: 'empty',
    };
  }

  let computedAR: string | number = '16 / 9';
  let placeholder: 'blur' | 'empty' = 'empty';
  const src = imageConf.src;
  if (imageConf.aspectRatio !== undefined) {
    computedAR = imageConf.aspectRatio;
  } else {
    if (isStaticImageDataLike(src) && src.width !== undefined && src.height !== undefined) {
      computedAR = src.width / src.height;
    }
  }
  if (imageConf.placeholder !== undefined) {
    placeholder = imageConf.placeholder;
  } else {
    if (isStaticImageDataLike(src)) {
      placeholder = 'blur';
    }
  }

  return { computedAR, placeholder };
}
export function BackgroundBox({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}: BackgroundBoxProps) {
  //

  const { computedAR, placeholder } = computeAR({ imageConf });

  const quality = imageConf?.quality ?? 70;

  // Build either width-capped or full-bleed image layer.
  let imageLayer: React.ReactNode = null;

  if (imageConf?.src) {
    //

    const objPos = imageConf.objectPosition || '50% 50%';

    if (imageConf.width) {
      // Width-capped mode uses a positioned wrapper while still using `fill`.
      imageLayer = (
        <Box
          sx={{
            position: 'absolute',
            ...getBoxPosition(objPos),
            width: imageConf.width,
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', aspectRatio: computedAR }}>
            <ImageComponent
              alt=""
              src={imageConf.src}
              fill
              sizes={imageConf.sizes}
              placeholder={placeholder}
              priority={imageConf.priority}
              quality={quality}
              unoptimized={imageConf.unoptimized}
              style={{
                objectFit: 'contain',
                objectPosition: objPos,
                transform: imageConf.transform || 'none',
                filter: imageConf.filter,
                display: 'block',
              }}
            />
          </Box>
        </Box>
      );
    } else {
      imageLayer = (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', inset: 0 }}>
            <ImageComponent
              alt=""
              src={imageConf.src}
              fill
              sizes={imageConf.sizes ?? '100vw'}
              placeholder={placeholder}
              priority={imageConf.priority}
              quality={quality}
              unoptimized={imageConf.unoptimized}
              style={{
                objectFit: imageConf.mode || 'cover',
                objectPosition: objPos,
                opacity: imageConf.opacity ?? 1,
                transform: imageConf.transform || 'none',
                filter: imageConf.filter,
                zIndex: 0,
              }}
            />
          </Box>
        </Box>
      );
    }
  }

  return (
    <Box
      sx={{ position: 'relative', overflow: 'hidden', width: '100%', ...(sx || {}) }}
      className={className}
      {...rest}
    >
      {imageLayer}

      {/* Overlay tint (drawn above image, below content) */}
      {imageConf?.overlayColor && (
        <Box
          role="presentation"
          aria-hidden={true}
          sx={{ position: 'absolute', inset: 0, backgroundColor: imageConf.overlayColor }}
        />
      )}

      {/* Content layer */}
      <Box sx={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</Box>
    </Box>
  );
}

export default BackgroundBox;
