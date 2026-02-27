[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / BannerCarouselProps

# Type Alias: BannerCarouselProps

> **BannerCarouselProps** = `object`

Defined in: [src/components/banner/BannerCarousel.tsx:8](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L8)

Props for [BannerCarousel](../variables/BannerCarousel.md).

## Properties

### children

> **children**: `React.ReactNode`

Defined in: [src/components/banner/BannerCarousel.tsx:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L19)

Foreground content rendered over the carousel (titles, CTAs, etc.).

***

### id?

> `optional` **id**: `string`

Defined in: [src/components/banner/BannerCarousel.tsx:17](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L17)

HTML `id` on the `Section` root. Omit to avoid duplicate IDs when multiple banners appear on one page.

***

### ImageComponent

> **ImageComponent**: [`ImageComponentLike`](ImageComponentLike.md)

Defined in: [src/components/banner/BannerCarousel.tsx:21](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L21)

Image rendering component (e.g. Next.js `Image`).

***

### images

> **images**: [`CarouselProps`](CarouselProps.md)

Defined in: [src/components/banner/BannerCarousel.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L13)

Carousel configuration (image list, timing, overlay).
This is the full [CarouselProps](CarouselProps.md) object, not just an image array.

***

### size?

> `optional` **size**: [`SectionSize`](SectionSize.md)

Defined in: [src/components/banner/BannerCarousel.tsx:15](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerCarousel.tsx#L15)

Band height token.

#### Default Value

`'micro'`
