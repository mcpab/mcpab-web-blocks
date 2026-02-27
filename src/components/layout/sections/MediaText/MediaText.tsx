'use client';

import { CSSLayout, GridCssMuiRenderer, Layout, LayoutRenderOverrideFor } from '@mcpab/gridcss';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import * as React from 'react';
import type { ImageComponentLike, StaticImageDataLike } from '../../../../core/image/image-types';
import type { ImageConf } from '../../BackgroundBox';
import BackgroundBox from '../../BackgroundBox';

type PresetName = '40-60' | '45-55' | '50-50' | '55-45' | '60-40';

export type TextProps = {
  /**
   * Named preset for common text/media split layouts.
   *
   * @type {PresetName}
   *
   * Presets:
   * Use predefined ratios for common layout patterns:
   * - '40-60': Text-focused layout
   * - '45-55': Slightly text-focused
   * - '50-50': Equal split (default)
   * - '55-45': Slightly media-focused
   * - '60-40': Media-focused layout
   */
  preset?: PresetName;
};

/**
 * Base props shared by all MediaText variants
 *
 * Common properties that apply regardless of media type (image or video).
 * Defines layout behavior, styling, and content structure.
 *
 * @interface BaseProps
 */
type BaseProps = {
  message: React.ReactNode;

  backgroundColor?: string;

  reverse?: boolean;

  textSplit?: TextProps;

  pad?: boolean;

  sx?: SxProps<Theme>;

  ImageComponent: ImageComponentLike;
};

type ImageMedia = {
  image: string | StaticImageDataLike;

  /** Explicitly prevent video when using image */
  video?: never;
};
type VideoMedia = {
  video: string;

  /** Explicitly prevent image when using video */
  image?: never;
};
const defineOverride = <L extends Layout<any, any>>(
  layout: L,
  override: LayoutRenderOverrideFor<L>,
) => {
  return override;
};

function toYouTubeEmbedSrc(input: string): string | null {
  const value = input.trim();
  if (!value) return null;

  // Already an ID.
  if (/^[A-Za-z0-9_-]{11}$/.test(value)) {
    return `https://www.youtube.com/embed/${value}`;
  }

  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();

    if (host === 'youtu.be') {
      const id = url.pathname.replace('/', '');
      if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }

    if (host.includes('youtube.com')) {
      const watchId = url.searchParams.get('v');
      if (watchId && /^[A-Za-z0-9_-]{11}$/.test(watchId)) {
        return `https://www.youtube.com/embed/${watchId}`;
      }

      const parts = url.pathname.split('/').filter(Boolean);
      const embedIndex = parts.findIndex((p) => p === 'embed' || p === 'shorts');
      const id = embedIndex >= 0 ? parts[embedIndex + 1] : null;
      if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export type MediaAndTextProps = BaseProps & (ImageMedia | VideoMedia);

/**
 * MediaText props without message (for specialized use cases)
 *
 * Similar to MediaAndTextProps but with the message prop omitted.
 * Useful for creating wrapper components or specialized layouts.
 *
 * @type MediaAndTextNoMessage
 */
export type MediaAndTextNoMessage = Omit<BaseProps, 'message'> & (ImageMedia | VideoMedia);

const MediaText: React.FC<MediaAndTextProps> = (props) => {
  //
  //

  /** Extract image component for type safety */
  const ImageComponent = props.ImageComponent;

  let layout;

  const preset = props.textSplit?.preset || '50-50';

  if (preset === '40-60') {
    layout = {
      row_1: {
        block_1: { spanX: 4, spanY: 1 },
        block_2: { spanX: 6, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  } else if (preset === '45-55') {
    layout = {
      row_1: {
        block_1: { spanX: 9, spanY: 1 },
        block_2: { spanX: 11, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  } else if (preset === '50-50') {
    layout = {
      row_1: {
        block_1: { spanX: 1, spanY: 1 },
        block_2: { spanX: 1, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  } else if (preset === '55-45') {
    layout = {
      row_1: {
        block_1: { spanX: 11, spanY: 1 },
        block_2: { spanX: 9, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  } else if (preset === '60-40') {
    layout = {
      row_1: {
        block_1: { spanX: 6, spanY: 1 },
        block_2: { spanX: 4, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  } else {
    // default to 50-50 if unrecognized
    layout = {
      row_1: {
        block_1: { spanX: 1, spanY: 1 },
        block_2: { spanX: 1, spanY: 1 },
      },
    } satisfies Layout<'row_1', 'block_1' | 'block_2'>;
  }

  const layoutAbsolute = CSSLayout({ layout, diagnostics: [] });

  let media: React.ReactNode = null;

  // Handle image media type
  if ('image' in props && props.image) {
    /** Configure image for BackgroundBox component */
    const imageConf: ImageConf = {
      src: props.image,
      mode: 'cover', // Fill container while maintaining aspect ratio
      objectPosition: '50% 50%', // Center the image within container
    };

    media = (
      <BackgroundBox
        ImageComponent={ImageComponent}
        imageConf={imageConf}
        sx={{
          position: 'absolute',
          inset: 0, // Fill entire container
        }}
      />
    );
  }

  // Handle video media type (YouTube embed)
  if ('video' in props && props.video) {
    const embedSrc = toYouTubeEmbedSrc(props.video);
    media = (
      <Box sx={{ position: 'absolute', inset: 0 }}>
        {embedSrc && (
          <Box
            component="iframe"
            src={embedSrc}
            title="YouTube video player"
            // Comprehensive permissions for modern YouTube features
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0, // Remove default iframe border
            }}
          />
        )}
      </Box>
    );
  }

  const renderer = defineOverride(layout, {
    row_1: {
      block_1: {
        contentRenderer: () => <>{props.reverse ? props.message : media}</>,
      },
      block_2: {
        contentRenderer: () => <>{props.reverse ? media : props.message}</>,
      },
    },
  });

  const rendered = GridCssMuiRenderer({
    layoutAbsolute: layoutAbsolute,
    layoutRendering: renderer,
    diagnostics: [],
  });

  // ========================================================================
  // COMPONENT RENDER
  // ========================================================================

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'inherit', // Inherit from parent Section when available
        flex: 1, // Grow to fill available space
        backgroundColor: props.backgroundColor,
        p: props.pad ? { xs: 2, md: 3 } : undefined,
        ...props.sx, // Allow style overrides
      }}
    >
      {rendered}
    </Box>
  );
};
export default MediaText;
