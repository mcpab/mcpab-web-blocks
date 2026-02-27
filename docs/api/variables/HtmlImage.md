[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HtmlImage

# Variable: HtmlImage

> `const` **HtmlImage**: `ForwardRefExoticComponent`\<`Omit`\<`ImgHTMLAttributes`\<`HTMLImageElement`\>, `"height"` \| `"width"` \| `"alt"` \| `"src"` \| `"sizes"`\> & `object` & `NextishExtras` & `RefAttributes`\<`HTMLImageElement`\>\>

Defined in: [src/core/image/image-types.tsx:115](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/image/image-types.tsx#L115)

Default renderer: plain <img>.
Supports `fill` by applying absolute positioning, similar to Next Image.

Important: for `fill` to behave, the parent should be position: relative
and have an explicit size.
