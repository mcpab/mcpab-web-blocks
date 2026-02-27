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
import type { StaticImageDataLike } from '../../core/image/image-types';
import { SubsectionTitle } from '../typography';

/**
 * Props for {@link VideoModal}.
 */
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
    avatarSrc?: string | StaticImageDataLike;
    /** Default trigger: button label. @default "Learn More" */
    buttonLabel?: string;
    /** Default trigger alignment. @default 'flex-end' */
    align?: 'flex-start' | 'center' | 'flex-end';

    /** Modal width in %, clamped 40–100. @default 80 */
    widthPercent?: number;
    /** Style overrides for the modal surface. */
    modalSx?: SxProps<Theme>;
};

/**
 * Converts a YouTube URL or id into an embed URL.
 */
function toYouTubeEmbedSrc(value: string): string | null {
    const input = value.trim();
    if (!input) return null;

    if (/^[A-Za-z0-9_-]{11}$/.test(input)) {
        return `https://www.youtube.com/embed/${input}`;
    }

    try {
        const url = new URL(input);
        const host = url.hostname.toLowerCase();

        if (host === 'youtu.be') {
            const id = url.pathname.replace('/', '');
            return /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/embed/${id}` : null;
        }

        if (host.includes('youtube.com')) {
            const watchId = url.searchParams.get('v');
            if (watchId && /^[A-Za-z0-9_-]{11}$/.test(watchId)) {
                return `https://www.youtube.com/embed/${watchId}`;
            }

            const parts = url.pathname.split('/').filter(Boolean);
            const i = parts.findIndex((p) => p === 'embed' || p === 'shorts');
            const id = i >= 0 ? parts[i + 1] : null;
            return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/embed/${id}` : null;
        }
    } catch {
        return null;
    }

    return null;
}

/**
 * Returns iframe src from explicit `videoId` or raw `src`.
 */
function resolveIframeSrc(videoId?: string, src?: string): string {
    if (videoId) return toYouTubeEmbedSrc(videoId) ?? '';
    if (!src) return '';

    // If caller passed a YouTube watch/share URL in `src`, normalize to embed form.
    const fromYouTube = toYouTubeEmbedSrc(src);
    return fromYouTube ?? src.trim();
}

/**
 * Trigger (default avatar+button or custom node) that opens a modal with responsive iframe media.
 */
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

    const iframeSrc = resolveIframeSrc(videoId, src);

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
            aria-label={typeof title === 'string' ? `Open video: ${title}` : 'Open video'}
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
                        maxWidth: 1200,
                        maxHeight: '90vh',
                        overflowY: 'auto',
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
                        {iframeSrc ? (
                            <iframe
                                src={iframeSrc}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0,
                                }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'grid',
                                    placeItems: 'center',
                                    px: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="narrative" color="text.secondary">
                                    Video source is missing or invalid.
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ mt: 2, textAlign: 'right' }}>
                        <Button onClick={() => setOpen(false)} aria-label="Close video modal">
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
