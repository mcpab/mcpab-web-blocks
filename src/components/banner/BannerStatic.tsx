import * as React from 'react';
import { BoxProps } from '@mui/material/Box';
import BackgroundBox from '../layout/BackgroundBox';
import type { ImageConf } from '../layout/BackgroundBox';
import Section from '../Section';
import Container from '@mui/material/Container';
import { SectionSize } from '../../design/sectionTokens';
import { ImageComponentLike } from 'src/core/image/image-types';

/** Props for {@link BannerStatic}. */
export type BannerStaticProps = {
  /** Background image configuration (src, overlay, transform, etc.). */
  image: ImageConf;
  /**
   * MUI `BoxProps` forwarded to the `Section` root.
   * `id` and `sx` are extracted and handled explicitly to avoid spreading conflicts.
   */
  boxProps?: BoxProps;
  /** Band height token. @defaultValue `'micro'` */
  size?: SectionSize;
  /** Foreground content rendered over the background image. */
  children: React.ReactNode;
  /** Image rendering component (e.g. Next.js `Image`). */
  ImageComponent: ImageComponentLike;
};

/**
 * Hero banner with a single static background image.
 *
 * Renders a `Section` band containing a full-bleed `BackgroundBox` with the
 * provided image. Foreground content is centred inside a `Container`.
 *
 * @example
 * ```tsx
 * <BannerStatic
 *   image={{ src: heroImg, overlayColor: 'rgba(0,0,0,0.4)' }}
 *   size="md"
 *   ImageComponent={Image}
 * >
 *   <MainTitle blocks={[{ title: 'Our story' }]} />
 * </BannerStatic>
 * ```
 *
 * @see {@link BannerCarousel} for the animated multi-image variant.
 */
const BannerStatic: React.FC<BannerStaticProps> = ({
  image,
  boxProps,
  size = 'micro',
  children,
  ImageComponent,
}) => {
  const { id, sx: boxSx, ...restBox } = boxProps ?? {};

  return (
    <Section
      id={id}       // explicit, avoids duplicate id spreading
      size={size}
      {...restBox}  // other BoxProps (className, onClick, etc.)
      sx={{
        position: 'relative',
        width: '100%',
        ...(boxSx as any), // consumer overrides last
      }}
    >
      <BackgroundBox imageConf={image} ImageComponent={ImageComponent}>
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </Container>
      </BackgroundBox>
    </Section>
  );
};

export default React.memo(BannerStatic);
