[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / UniversalImageProps

# Type Alias: UniversalImageProps

> **UniversalImageProps** = `Omit`\<`React.ImgHTMLAttributes`\<`HTMLImageElement`\>, `"src"` \| `"alt"` \| `"width"` \| `"height"` \| `"sizes"`\> & `object` & `NextishExtras`

Defined in: [src/core/image/image-types.tsx:39](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/image/image-types.tsx#L39)

A universal image prop type:
- accepts either a URL string or StaticImageDataLike
- keeps `alt` required
- excludes conflicting DOM props so we can redefine them

## Type Declaration

### alt

> **alt**: `string`

### height?

> `optional` **height**: `number` \| `string`

### src

> **src**: `string` \| [`StaticImageDataLike`](../interfaces/StaticImageDataLike.md)

### width?

> `optional` **width**: `number` \| `string`
