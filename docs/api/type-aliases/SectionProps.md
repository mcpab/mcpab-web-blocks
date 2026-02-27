[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / SectionProps

# Type Alias: SectionProps

> **SectionProps** = `BoxProps` & `object`

Defined in: [src/components/Section.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/Section.tsx#L13)

## Type Declaration

### center?

> `optional` **center**: `boolean`

Center content both vertically and horizontally. Defaults to false.

### children

> **children**: `React.ReactNode`

### id?

> `optional` **id**: `string`

Optional id for in-page anchors (TOC / jump links).

### lockHeight?

> `optional` **lockHeight**: `boolean`

If true, also sets a *definite* height equal to the size token.
Useful for heroes/carousels where absolute layers must fill exactly.

### size?

> `optional` **size**: [`SectionSize`](SectionSize.md)

Preset minimum heights (responsive). Defaults to 'md'.
