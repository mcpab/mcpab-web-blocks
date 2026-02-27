[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HeroBlockProps

# Type Alias: HeroBlockProps

> **HeroBlockProps** = `Omit`\<[`BackgroundBoxProps`](BackgroundBoxProps.md), `"children"` \| `"imageConf"`\> & `object`

Defined in: [src/components/layout/sections/HeroBlock/HeroBlock.tsx:18](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/sections/HeroBlock/HeroBlock.tsx#L18)

Props for [HeroBlock](../variables/HeroBlock.md).

## Type Declaration

### alt?

> `optional` **alt**: `string`

Accessible alternative text for `image`.

### caption?

> `optional` **caption**: `string`

Optional image caption rendered below the media.

### header?

> `optional` **header**: `React.ReactNode`

Primary heading content shown in the text column.

### image

> **image**: `string` \| [`StaticImageDataLike`](../interfaces/StaticImageDataLike.md)

Hero image source.

### message?

> `optional` **message**: `React.ReactNode`

Main supporting copy beneath the heading.

### priority?

> `optional` **priority**: `boolean`

Marks the image as high-priority for above-the-fold loading.

### subTitle?

> `optional` **subTitle**: `React.ReactNode`

Secondary strapline beneath `message`.
