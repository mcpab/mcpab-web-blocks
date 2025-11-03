'use client';
/**
 * @packageDocumentation
 *
 * # VideoModal
 *
 * Trigger (Avatar + Button by default) that opens a modal with a responsive 16:9
 * iframe. Works with a YouTube `videoId` or any custom `src` URL (Vimeo, etc.).
 *
 * - Accessible: labeled modal with unique `aria-labelledby`/`aria-describedby`.
 * - Flexible: pass a custom `trigger` node, or use the default Avatar+Button.
 * - MUI v7-friendly: uses `slotProps` for Avatar img.
 *
 * ## Examples
 * ```tsx
 * <VideoModal videoId="NTyBbu66_SI" title="About Our Approach" />
 *
 * <VideoModal
 *   videoId="NTyBbu66_SI"
 *   title="Welcome"
 *   trigger={<IconButton color="primary"><PlayArrow /></IconButton>}
 * />
 *
 * <VideoModal
 *   src="https://player.vimeo.com/video/76979871"
 *   title="Vimeo Demo"
 *   buttonLabel="Watch on Vimeo"
 * />
 * ```
 */

import * as React from 'react';
import { useId, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import type { SxProps, Theme } from '@mui/material/styles';
import type { StaticImageData } from 'next/image';
import { SubsectionTitle } from '../typography';

export type VideoModalProps = {
    /** YouTube video ID, e.g. `dQw4w9WgXcQ`. If provided, `src` is ignored. */
    videoId?: string;
    /** Full iframe `src` (e.g., Vimeo or a YouTube URL with params). */
    src?: string;

    /** Title for the modal header/iframe accessibility. */
    title?: string;

    /** Custom trigger; if omitted, a default Avatar + Button is rendered. */
    trigger?: React.ReactNode;

    /** Default trigger: avatar image (string URL or static import). */
    avatarSrc?: string | StaticImageData;
    /** Default trigger: button label. @default "Learn More" */
    buttonLabel?: string;
    /** Default trigger alignment. @default 'flex-end' */
    align?: 'flex-start' | 'center' | 'flex-end';

    /** Modal width in %, clamped 40–100. @default 80 */
    widthPercent?: number;
    /** Style overrides for the modal surface. */
    modalSx?: SxProps<Theme>;
};

export default function VideoModal({
    videoId,
    src,
    title = 'Watch Video',
    trigger,
    avatarSrc = '/images/kellieBella2.jpg',
    buttonLabel = 'Learn More',
    align = 'flex-end',
    widthPercent = 80,
    modalSx,
}: VideoModalProps) {
    const [open, setOpen] = useState(false);
    const titleId = useId();
    const descId = useId();

    const iframeSrc = videoId ? `https://www.youtube.com/embed/${videoId}` : (src ?? '');

    const avatarUrl = typeof avatarSrc === 'string' ? avatarSrc : avatarSrc?.src;

    // Default trigger: Avatar + Button
    const defaultTrigger = (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: align, gap: 1 }}>
            <Avatar
                src={avatarUrl}
                alt=""
                slotProps={{ img: { loading: 'lazy', decoding: 'async' } }}
            />
            <Button variant="text" color="secondary" onClick={() => setOpen(true)}>
                {buttonLabel}
            </Button>
        </Box>
    );

    // If a custom trigger is provided, make it keyboard-activatable.
    const wrappedTrigger = trigger ? (
        <span
            role="button"
            tabIndex={0}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpen(true);
                }
            }}
            style={{ display: 'inline-flex' }}
        >
            {trigger}
        </span>
    ) : (
        defaultTrigger
    );

    return (
        <>
            {wrappedTrigger}

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby={titleId}
                aria-describedby={descId}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: `${Math.min(100, Math.max(40, widthPercent))}%`,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        ...modalSx,
                    }}
                >
                    <SubsectionTitle id={titleId}   gutterBottom>
                        {title}
                    </SubsectionTitle>

                    <Box id={descId} sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                        <iframe
                            src={iframeSrc}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                        />
                    </Box>

                    <Box sx={{ mt: 2, textAlign: 'right' }}>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
