

import * as React from "react";
import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";
import { BackgroundBox } from "../layout/";
import DynamicTransition from "./DynamicTransition";
import type { StaticImageDataLike , ImageComponentLike } from "../../core/image/image-types"; 

export type ImageCarousel = {
  image: string | StaticImageDataLike;
  transform?: string;
  objectPosition?: string;
};

export type CarouselProps = {
  images: ImageCarousel[];
  interval?: number;
  transitionDuration?: number;
  overlayColor?: string;
  preloadFirst?: number;
};

export type CarouselConfig = {
  config?: CarouselProps;
  children: React.ReactNode;
  containerProps?: ContainerProps;
  rootProps?: BoxProps;
  ImageComponent: ImageComponentLike;
};

const BlockCarousel: React.FC<CarouselConfig> = ({ config, children, containerProps, rootProps, ImageComponent }) => {

  const {
    images = [],
    interval: intervalProp,
    transitionDuration = 900,
    overlayColor = "rgba(0,0,0,0.2)",
    preloadFirst = 2,
  } = config || {};

  const interval = intervalProp ?? 5000;

  const { sx: rootSx, ...restRoot } = rootProps ?? {};

  const frames = React.useMemo(() => {
    return images.map((img, i) => {
      const { transform, image, objectPosition } = img;
      return (
        <BackgroundBox
          key={i}
          ImageComponent={ImageComponent}
          imageConf={{
            src: image,
            overlayColor,
            transform,
            objectPosition,
            sizes: "100vw",
            placeholder: "blur",
            quality: 70,
            priority: i < preloadFirst, // preload first N frames for snappy first transition
          }}
          sx={{ position: "absolute", inset: 0 }}
        />
      );
    });
  }, [images, overlayColor, preloadFirst]);

  return (
      <Box
      // SINGLE ROOT that is the *only* direct child of <Section>.
      // It participates in layout (so Section’s band height is realized),
      // and anchors the absolute layers.
      {...restRoot}
      sx={{
        position: "relative",
        display: "grid",       // grid lets us stack layers via grid-area
        width: "100%",
        minHeight: "inherit",  // ← inherit the band height from <Section>
        ...(rootSx as any),
      }}
    >
      {/* Frames root: positioned context for absolute slides */}
      <Box
        sx={{
          position: "relative",
          gridArea: "1 / 1",   // layer 1
          minHeight: "inherit",// ensure a definite box for absolute children
        }}
      >
        <DynamicTransition
          frames={frames}
          interval={interval}
          transitionDuration={transitionDuration}
        />
      </Box>

      {/* Optional shield over frames (keeps clicks off backgrounds if needed) */}
      <Box sx={{ gridArea: "1 / 1", zIndex: 1 }} />

      {/* Foreground content (titles, CTAs, etc.) */}
      <Container
        {...containerProps}
        sx={{
          gridArea: "1 / 1",   // layer 3, on top
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "inherit", // match the band height
          ...(containerProps?.sx || {}),
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default React.memo(BlockCarousel);
