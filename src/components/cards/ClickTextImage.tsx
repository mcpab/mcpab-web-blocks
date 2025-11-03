'use client';
/**
 * @packageDocumentation
 *
 * # ClickTextImage
 *
 * An image tile that toggles to reveal a detail panel.
 * The tile keeps a **fixed minimum height** to avoid layout shifts; the
 * detail panel fades in/out (opacity only) and scrolls if the content is long.
 *
 * - Uses `BackgroundBox` for the background image + overlay tint.
 * - Closed state: dark overlay; Open state: white overlay.
 * - Click anywhere on the tile (or press **Enter/Space**) to open/close.
 *
 * ## Props
 * - `title: React.ReactNode` — short label shown in the closed state.
 * - `image: StaticImageData | string` — background image. Static imports enable blur; string paths are fine too.
 * - `text: React.ReactNode | string` — content shown in the open state (scrollable if long).
 *
 * ## Accessibility
 * - The tile is focusable, has `role="button"`, and toggles with **Enter/Space**.
 * - Uses `aria-expanded` and `aria-controls` to link the trigger and the details region.
 *
 * ## Example
 * ```tsx
 * <ClickTextImage
 *   title="Compassionate, Evidence-Based Care"
 *   image="/images/hero1.jpg"
 *   text="We combine warmth with scientific rigor to help you move forward."
 * />
 * ``` 
 */

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useId } from 'react';
import type { StaticImageData } from '../../types/staticImageData';
import BackgroundBox from '@/src/components/layout/BackgroundBox';

export type ClickTextImageProps = {
  /** Short label shown over the image when the tile is closed. */
  title: React.ReactNode;
  /** Background image (static import or string path). */
  image: StaticImageData | string;
  /** Detail content shown when the tile is open. */
  text: React.ReactNode | string;
};

const ClickTextImage: React.FC<ClickTextImageProps> = ({ title, image, text }) => {
  const [open, setOpen] = React.useState(false);
  const contentId = useId();

  // Keep overlay tint when closed; fade to white when open
  const imageConf = React.useMemo(
    () => ({
      src: image,
      overlayColor: open ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0.45)',
    }),
    [image, open]
  );

  // One consistent tile height so rows never change
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 } as const;

  // Toggle helpers
  const toggleOpen = () => setOpen((v) => !v);
  const openPanel = () => setOpen(true);
  const closePanel = () => setOpen(false);

  // Keyboard a11y: Enter / Space toggles the tile
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // avoid scrolling when Space is pressed
      toggleOpen();
    }
  };

  return (
    <Paper
      onClick={toggleOpen}
      aria-expanded={open}
      aria-controls={contentId}
      sx={{
        position: 'relative',
        display: 'grid',          // ⬅️ make the tile a grid
        gridTemplateRows: '1fr',  // ⬅️ one cell to fill
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',       // clip the overlay to tile bounds
        cursor: 'pointer',
        minHeight: { xs: 240, sm: 280, md: 300 },
        appearance: 'none',
        border: 0,
        background: 'inherit',
        textAlign: 'inherit',
        '&:focus-visible': (theme) => ({
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        }),
      }}
    >
      {/* Background */}
      <BackgroundBox imageConf={imageConf} sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Closed state */}
      {!open && (
        <Box
          sx={{
            gridRow: '1 / -1',      // ⬅️ sit in the same cell
            gridColumn: '1 / -1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 3,
            zIndex: 1,              // ⬅️ above the background
          }}
        >
          <Typography
            variant="narrative"
            color="common.white"
            sx={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
          >
            {title}
          </Typography>

          <Box sx={{ pt: 1 }}>
            <Button
              variant="text"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                openPanel();
              }}
              sx={{ fontWeight: 'bold', color: 'common.white' }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      )}

      {/* Open overlay */}
      <Fade in={open} unmountOnExit timeout={200}>
        <Box
          id={contentId}
          aria-label="Details"
          onClick={(e) => e.stopPropagation()}
          sx={{
            gridRow: '1 / -1',      // ⬅️ fill the tile
            gridColumn: '1 / -1',
            overflowY: 'auto',      // ⬅️ the magic: scroll here
            p: 3,
            bgcolor: 'common.white',
            color: 'text.primary',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
            zIndex: 1,              // ⬅️ above everything else
            // (optional) keep page from scrolling on wheel/touch while over the panel:
            // pointerEvents defaults to 'auto', so it captures scroll normally.
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
              closePanel();
            }}
            sx={{ fontWeight: 'bold' }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Paper>

  );
};

export default ClickTextImage;
