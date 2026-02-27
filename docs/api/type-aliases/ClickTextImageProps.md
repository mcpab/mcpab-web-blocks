[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ClickTextImageProps

# Type Alias: ClickTextImageProps

> **ClickTextImageProps** = `object`

Defined in: [src/components/cards/ClickTextImage.tsx:14](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/cards/ClickTextImage.tsx#L14)

Props for [ClickTextImage](../variables/ClickTextImage.md).

## Properties

### image

> **image**: [`StaticImageDataLike`](../interfaces/StaticImageDataLike.md) \| `string`

Defined in: [src/components/cards/ClickTextImage.tsx:25](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/cards/ClickTextImage.tsx#L25)

Background image source for the card.
Supports either a URL string or a Next.js `StaticImageData`-compatible object.

***

### ImageComponent

> **ImageComponent**: [`ImageComponentLike`](ImageComponentLike.md)

Defined in: [src/components/cards/ClickTextImage.tsx:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/cards/ClickTextImage.tsx#L36)

Image renderer (e.g. Next.js `Image`), passed through to [BackgroundBox](../variables/BackgroundBox.md).

***

### text

> **text**: `React.ReactNode` \| `string`

Defined in: [src/components/cards/ClickTextImage.tsx:31](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/cards/ClickTextImage.tsx#L31)

Detail content shown when the card is opened.
The content area is scrollable to support long text.

***

### title

> **title**: `React.ReactNode`

Defined in: [src/components/cards/ClickTextImage.tsx:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/cards/ClickTextImage.tsx#L19)

Teaser title shown on top of the image when the card is closed.
Accepts rich React content (e.g. multiple Typography lines).
