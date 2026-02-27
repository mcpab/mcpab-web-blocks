'use client';

import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StaticImageDataLike } from '../../../../core/image/image-types';
import Container from '@mui/material/Container';
import { BackgroundBoxProps } from '../../BackgroundBox';
import { SubsubsectionTitle } from '../../../typography';

/**
 * Props for {@link HeroBlock}.
 */
export type HeroBlockProps = Omit<BackgroundBoxProps, 'children' | 'imageConf'> & {
  /**
   * Primary heading content shown in the text column.
   */
  header?: React.ReactNode;

  /**
   * Main supporting copy beneath the heading.
   */
  message?: React.ReactNode;

  /**
   * Secondary strapline beneath `message`.
   */
  subTitle?: React.ReactNode;

  /**
   * Optional image caption rendered below the media.
   */
  caption?: string;

  /**
   * Hero image source.
   */
  image: string | StaticImageDataLike;

  /**
   * Accessible alternative text for `image`.
   */
  alt?: string;

  /**
   * Marks the image as high-priority for above-the-fold loading.
   */
  priority?: boolean;
};

/**
 * Normalizes title-like fields so string values map to house typography variants.
 */
function formatTitle(node: React.ReactNode, kind: 'title' | 'subtitle' = 'title') {
  if (typeof node === 'string') {
    return kind === 'title' ? (
      <SubsubsectionTitle>{node}</SubsubsectionTitle>
    ) : (
      <Typography variant="strapline">{node}</Typography>
    );
  }
  return React.isValidElement(node) ? node : null;
}

/**
 * Two-column hero section with heading/copy on the left and responsive media on the right.
 */
const HeroBlock: React.FC<HeroBlockProps> = ({
  image,
  alt,
  header,
  message,
  caption,
  subTitle,
  priority = false,
  ImageComponent,
  sx,
  ...containerProps
}) => {
  return (
    <Container
      {...containerProps}
      maxWidth="lg"
      disableGutters
      sx={[
        {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'inherit',
          width: '100%',
          height: '100%',
        },
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
      <Grid
        container
        spacing={10}
        alignItems="stretch"
        width={'100%'}
        sx={{ flex: 1, minHeight: 'inherit' }}
      >
        {/* Text column (7/12) */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
          <Stack
            spacing={3}
            sx={{
              py: { xs: 2, md: 0 },
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {formatTitle(header, 'title')}
            {message && (
              <Typography variant="lead" color="text.primary" sx={{ textAlign: 'left', maxWidth: 720 }}>
                {message}
              </Typography>
            )}
            {formatTitle(subTitle, 'subtitle')}
          </Stack>
        </Grid>

        {/* Image column (5/12) */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'stretch' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, width: '100%' }}
          >
            <Paper
              elevation={12}
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                flex: 1,
                width: '100%',
                maxWidth: 'none',
                minHeight: { xs: 260, md: 0 }, // fallback so it never collapses
              }}
            >
              <ImageComponent
                src={image}
                alt={alt ?? (typeof caption === 'string' ? caption : '')}
                fill
                priority={priority}
                sizes="(max-width: 600px) 90vw, (max-width: 1200px) 50vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </Paper>

            {caption && (
              <Typography
                variant="finePrint"
                color="text.secondary"
                textAlign={'center'}
                mt={2}
              >
                {caption}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBlock;
