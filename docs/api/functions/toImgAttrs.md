[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / toImgAttrs

# Function: toImgAttrs()

> **toImgAttrs**(`p`): `ImgHTMLAttributes`\<`HTMLImageElement`\>

Defined in: [src/core/image/image-types.tsx:76](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/image/image-types.tsx#L76)

Convert UniversalImageProps into <img> attributes safely:
- strips Next-ish props (fill/priority/quality/placeholder/unoptimized)
- resolves src/url and default width/height when src is StaticImageDataLike

## Parameters

### p

[`UniversalImageProps`](../type-aliases/UniversalImageProps.md)

## Returns

`ImgHTMLAttributes`\<`HTMLImageElement`\>
