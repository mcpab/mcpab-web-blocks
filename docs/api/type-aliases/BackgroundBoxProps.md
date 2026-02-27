[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / BackgroundBoxProps

# Type Alias: BackgroundBoxProps

> **BackgroundBoxProps** = `React.HTMLAttributes`\<`HTMLDivElement`\> & `object`

Defined in: [src/components/layout/BackgroundBox.tsx:105](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L105)

Props for [BackgroundBox](../variables/BackgroundBox.md).

## Type Declaration

### children?

> `optional` **children**: `React.ReactNode`

Foreground content rendered above image and overlay layers.

### className?

> `optional` **className**: `string`

Class name applied to the root element.

### ImageComponent

> **ImageComponent**: [`ImageComponentLike`](ImageComponentLike.md)

Image renderer compatible with Next.js Image-like props.

### imageConf?

> `optional` **imageConf**: [`ImageConf`](ImageConf.md)

Optional background image configuration.

### sx?

> `optional` **sx**: `SxProps`\<`Theme`\>

Additional styles applied to the root MUI `Box`.
