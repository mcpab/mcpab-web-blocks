[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / CarouselConfig

# Type Alias: CarouselConfig

> **CarouselConfig** = `object`

Defined in: [src/components/banner/BlockCarousel.tsx:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L34)

Props for [BlockCarousel](../variables/BlockCarousel.md).

## Properties

### children

> **children**: `React.ReactNode`

Defined in: [src/components/banner/BlockCarousel.tsx:38](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L38)

Foreground content rendered on top of the carousel (titles, CTAs, etc.).

***

### config?

> `optional` **config**: [`CarouselProps`](CarouselProps.md)

Defined in: [src/components/banner/BlockCarousel.tsx:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L36)

Carousel timing and image list. Omit to render no background.

***

### containerProps?

> `optional` **containerProps**: `ContainerProps`

Defined in: [src/components/banner/BlockCarousel.tsx:40](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L40)

Props forwarded to the foreground `Container`.

***

### ImageComponent

> **ImageComponent**: [`ImageComponentLike`](ImageComponentLike.md)

Defined in: [src/components/banner/BlockCarousel.tsx:44](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L44)

Image rendering component (e.g. Next.js `Image`).

***

### rootProps?

> `optional` **rootProps**: `BoxProps`

Defined in: [src/components/banner/BlockCarousel.tsx:42](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L42)

Props forwarded to the outermost `Box` wrapper.
