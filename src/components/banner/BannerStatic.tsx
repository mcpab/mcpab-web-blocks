import * as React from 'react';
import { BoxProps } from '@mui/material/Box';
import BackgroundBox from '../layout/BackgroundBox';
// import MainTitle, { MainTitlesProps } from "./MainTitles";
import type { ImageConf } from '../layout/BackgroundBox';
import Section from '../Section';
import Container from '@mui/material/Container';
import { SectionSize } from '../../design/sectionTokens';
import { ImageComponentLike } from 'src/core/image/image-types';

export type BannerStaticProps = {
  image: ImageConf;
  boxProps?: BoxProps;
  size?: SectionSize;
  children: React.ReactNode;
  ImageComponent: ImageComponentLike;
};

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
      id={id} // explicit, avoids duplicate id spreading
      size={size}
      {...restBox} // other BoxProps (className, onClick, etc.)
      sx={{
        position: 'relative',
        width: '100%',
        ...(boxSx as any), // consumer overrides last
      }}
    >
      <BackgroundBox imageConf={image} ImageComponent={ImageComponent}>
        <Container
          id="cljh"
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
