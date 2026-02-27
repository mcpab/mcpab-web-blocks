[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MainTitleBlock

# Type Alias: MainTitleBlock

> **MainTitleBlock** = `object`

Defined in: [src/components/banner/MainTitle.tsx:10](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L10)

A single title or subtitle block rendered by [MainTitle](../variables/MainTitle.md).

## Properties

### title

> **title**: `string` \| `React.ReactNode`

Defined in: [src/components/banner/MainTitle.tsx:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L12)

Text content. Strings are auto-capitalised when `autoCapitalize` is `true`. Accepts React nodes for rich content.

***

### titleProps?

> `optional` **titleProps**: `TitleLocalProps`

Defined in: [src/components/banner/MainTitle.tsx:21](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L21)

Per-block typography overrides, merged on top of `slotProps.title` / `slotProps.subtitle`.

***

### type?

> `optional` **type**: `"primary"` \| `"secondary"`

Defined in: [src/components/banner/MainTitle.tsx:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/MainTitle.tsx#L19)

Visual hierarchy level.
- `'primary'` — renders as `PageTitle` (h1-equivalent, large).
- `'secondary'` — renders as `SectionTitle` (h2-equivalent, smaller).

#### Default Value

`'primary'`
