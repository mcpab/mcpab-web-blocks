[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MainTitleProps

# Type Alias: MainTitleProps

> **MainTitleProps** = `object`

Defined in: [src/components/banner/MainTitle.tsx:25](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L25)

Props for [MainTitle](../variables/MainTitle.md).

## Properties

### autoCapitalize?

> `optional` **autoCapitalize**: `boolean`

Defined in: [src/components/banner/MainTitle.tsx:33](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L33)

When `true`, string titles are passed through `toTitleCase` before rendering.
Has no effect on React node titles.

#### Default Value

`true`

***

### blocks

> **blocks**: [`MainTitleBlock`](MainTitleBlock.md)[]

Defined in: [src/components/banner/MainTitle.tsx:27](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L27)

Ordered list of title/subtitle blocks to render.

***

### slotProps?

> `optional` **slotProps**: `object`

Defined in: [src/components/banner/MainTitle.tsx:35](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L35)

Slot-level prop overrides applied as defaults to all blocks of each type.

#### stack?

> `optional` **stack**: `StackProps`

Props forwarded to the `Stack` wrapper.

#### subtitle?

> `optional` **subtitle**: `TitleLocalProps`

Default typography props for all `'secondary'` blocks.

#### title?

> `optional` **title**: `TitleLocalProps`

Default typography props for all `'primary'` blocks.
