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

When `true`, title and subtitle are passed through `toTitleCase` before rendering.

#### Default Value

`true`

***

### slotProps?

> `optional` **slotProps**: `object`

Defined in: [src/components/banner/MainTitle.tsx:35](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L35)

Slot-level prop overrides applied to the wrapper and title elements.

#### stack?

> `optional` **stack**: `StackProps`

Props forwarded to the `Stack` wrapper.

#### subtitle?

> `optional` **subtitle**: `TitleLocalProps`

Props forwarded to the subtitle.

#### title?

> `optional` **title**: `TitleLocalProps`

Props forwarded to the primary title.

***

### subtitle

> **subtitle**: `string`

Defined in: [src/components/banner/MainTitle.tsx:15](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L15)

Supporting subtitle text rendered as a [SectionTitle](../variables/SectionTitle.md).

***

### title

> **title**: `string`

Defined in: [src/components/banner/MainTitle.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L13)

Primary title text rendered as a [PageTitle](../variables/PageTitle.md).
