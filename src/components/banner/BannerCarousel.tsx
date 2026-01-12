import * as React from "react";
import Section from "../../components/Section";
import BlockCarousel, { CarouselProps } from "./BlockCarousel";
import type { SectionSize } from "../../design/sectionTokens";
import { ImageComponentLike } from "src/core/image/image-types";

export type BannerCarouselProps = {
  images: CarouselProps;
  size?: SectionSize;
  id?: string;
  children: React.ReactNode;
  ImageComponent: ImageComponentLike;
};
const BannerCarousel: React.FC<BannerCarouselProps> = ({  
  images,
  id,
  size = "micro",
  children,
  ImageComponent,
}) => {
  // Unpack and place consumer overrides LAST in `sx` while keeping other BoxProps intact.
  // const { id, sx: boxSx, ...restBox } = boxProps ?? {};

  return (
    <Section
      id={id as string | undefined}  // Don’t hardcode "banner" to avoid duplicate IDs on pages with multiple banners.
      size={size}                    // Establishes minHeight via tokens and sets display:flex.     
      position={"relative"}        // Ensure Section is the positioning context for BlockCarousel.
      width={"100%"}
      lockHeight               // Make height definite for absolute children (BlockCarousel).      
    >
      {/*
        Section applies: `& > * { flex: 1; min-height: inherit }`
        → BlockCarousel fills the band’s height automatically.
      */} 
      <BlockCarousel
        config={images}
        ImageComponent={ImageComponent}
      >
        {/* Overlay content. Keep it lean; wrap with a Container upstream if you need maxWidth constraints. */}
        {children}
      </BlockCarousel>
    </Section>
  );
};

export default React.memo(BannerCarousel);
