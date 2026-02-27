[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / BannerStaticProps

# Type Alias: BannerStaticProps

> **BannerStaticProps** = `object`

Defined in: [src/components/banner/BannerStatic.tsx:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L11)

Props for [BannerStatic](../variables/BannerStatic.md).

## Properties

### boxProps?

> `optional` **boxProps**: `BoxProps`

Defined in: [src/components/banner/BannerStatic.tsx:18](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L18)

MUI `BoxProps` forwarded to the `Section` root.
`id` and `sx` are extracted and handled explicitly to avoid spreading conflicts.

***

### children

> **children**: `React.ReactNode`

Defined in: [src/components/banner/BannerStatic.tsx:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L22)

Foreground content rendered over the background image.

***

### image

> **image**: [`ImageConf`](ImageConf.md)

Defined in: [src/components/banner/BannerStatic.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L13)

Background image configuration (src, overlay, transform, etc.).

***

### ImageComponent

> **ImageComponent**: [`ImageComponentLike`](ImageComponentLike.md)

Defined in: [src/components/banner/BannerStatic.tsx:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L24)

Image rendering component (e.g. Next.js `Image`).

***

### size?

> `optional` **size**: [`SectionSize`](SectionSize.md)

Defined in: [src/components/banner/BannerStatic.tsx:20](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/BannerStatic.tsx#L20)

Band height token.

#### Default Value

`'micro'`
