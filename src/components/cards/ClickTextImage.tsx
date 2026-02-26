'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useId } from 'react';
import type { StaticImageDataLike, ImageComponentLike } from '../../core/image/image-types';
import BackgroundBox from '../layout/BackgroundBox';

/** Props for {@link ClickTextImage}. */
export type ClickTextImageProps = {
  /**
   * Teaser title shown on top of the image when the card is closed.
   * Accepts rich React content (e.g. multiple Typography lines).
   */
  title: React.ReactNode;

  /**
   * Background image source for the card.
   * Supports either a URL string or a Next.js `StaticImageData`-compatible object.
   */
  image: StaticImageDataLike | string;

  /**
   * Detail content shown when the card is opened.
   * The content area is scrollable to support long text.
   */
  text: React.ReactNode | string;

  /**
   * Image renderer (e.g. Next.js `Image`), passed through to {@link BackgroundBox}.
   */
  ImageComponent: ImageComponentLike;
};

/**
 * Click-to-reveal card with a background image.
 *
 * Renders as a single card that toggles between:
 * - **Closed:** dark overlay + title + “Learn more”
 * - **Open:** white overlay + scrollable content + “Close”
 *
 * The card is keyboard-accessible (`Enter` / `Space`) and exposes `aria-expanded`.
 *
 * @example
 * ```tsx
 * <ClickTextImage
 *   title="Compassionate, evidence-based care"
 *   image="/hero.jpg"
 *   text="We combine warmth with scientific rigor..."
 *   ImageComponent={Image}
 * />
 * ```
 */
const ClickTextImage: React.FC<ClickTextImageProps> = ({ title, image, text, ImageComponent }) => {
  const [open, setOpen] = React.useState(false);
  const contentId = useId();

  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 } as const;

  const imageConf = React.useMemo(
    () => ({
      src: image,
      overlayColor: open ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0.45)',
    }),
    [image, open],
  );

  const toggleOpen = () => setOpen((v) => !v);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // avoid page scroll on Space
      toggleOpen();
    }
  };

  return (
    <Paper
      onClick={toggleOpen}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      aria-controls={contentId}
      aria-label="Toggle card details"
      sx={{
        position: 'relative',
        display: 'grid',
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: TILE_MIN_H,
        appearance: 'none',
        border: 0,
        background: 'inherit',
        textAlign: 'inherit',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': { transform: 'translateY(-2px)' },
        '&:focus-visible': (theme) => ({
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        }),
      }}
    >
      {/* Background */}
      <BackgroundBox
        ImageComponent={ImageComponent}
        imageConf={imageConf}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Closed state */}
      {!open && (
        <Box
          sx={{
            gridRow: '1 / -1',
            gridColumn: '1 / -1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 3,
            zIndex: 1,
          }}
        >
          <Typography
            variant="narrative"
            color="common.white"
            sx={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)', mb: 1 }}
          >
            {title}
          </Typography>

          <Box sx={{ pt: 1 }}>
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              sx={{
                fontWeight: 'bold',
                color: 'common.white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      )}

      {/* Open state */}
      <Fade in={open} unmountOnExit timeout={200}>
        <Box
          id={contentId}
          aria-label="Card details"
          onClick={(e) => e.stopPropagation()}
          sx={{
            gridRow: '1 / -1',
            gridColumn: '1 / -1',
            overflowY: 'auto',
            p: 3,
            bgcolor: 'common.white',
            color: 'text.primary',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            zIndex: 2,
            maxHeight: '100%',
          }}
        >
          <Typography variant="narrative" sx={{ mb: 2 }}>
            {text}
          </Typography>

          <Button
            variant="text"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            sx={{ fontWeight: 'bold', '&:hover': { backgroundColor: 'action.hover' } }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Paper>
  );
};

export default React.memo(ClickTextImage);
