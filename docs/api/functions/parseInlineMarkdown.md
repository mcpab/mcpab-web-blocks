[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / parseInlineMarkdown

# Function: parseInlineMarkdown()

> **parseInlineMarkdown**(`input`, `Link`, `keyScope`): `ReactNode` \| `ReactNode`[]

Defined in: [src/lib/text/inline.tsx:48](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/lib/text/inline.tsx#L48)

Parse inline markdown-like content into React nodes.

## Parameters

### input

`string`

The string containing Markdown syntax

### Link

[`LinkTypeComponent`](../type-aliases/LinkTypeComponent.md)

Link component used for internal `/path` links

### keyScope

`string` = `'md'`

Prefix for React keys to avoid conflicts (default: 'md')

## Returns

`ReactNode` \| `ReactNode`[]

Array of React nodes with processed formatting
