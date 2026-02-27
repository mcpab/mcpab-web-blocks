[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / CarouselProps

# Type Alias: CarouselProps

> **CarouselProps** = `object`

Defined in: [src/components/banner/BlockCarousel.tsx:20](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L20)

Carousel timing and appearance configuration passed to [BlockCarousel](../variables/BlockCarousel.md).

## Properties

### images

> **images**: [`ImageCarousel`](ImageCarousel.md)[]

Defined in: [src/components/banner/BlockCarousel.tsx:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L22)

Ordered list of slides.

***

### interval?

> `optional` **interval**: `number`

Defined in: [src/components/banner/BlockCarousel.tsx:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L24)

Time each slide is fully visible, in milliseconds.

#### Default Value

```ts
5000
```

***

### overlayColor?

> `optional` **overlayColor**: `string`

Defined in: [src/components/banner/BlockCarousel.tsx:28](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L28)

CSS color string for the overlay tint (e.g. `'rgba(0,0,0,0.2)'`).

#### Default Value

`'rgba(0,0,0,0.2)'`

***

### preloadFirst?

> `optional` **preloadFirst**: `number`

Defined in: [src/components/banner/BlockCarousel.tsx:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L30)

Number of slides to mark `priority` for eager loading.

#### Default Value

```ts
2
```

***

### transitionDuration?

> `optional` **transitionDuration**: `number`

Defined in: [src/components/banner/BlockCarousel.tsx:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BlockCarousel.tsx#L26)

Crossfade duration in milliseconds.

#### Default Value

```ts
900
```
