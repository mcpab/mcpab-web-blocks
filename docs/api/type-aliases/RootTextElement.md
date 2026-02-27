[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RootTextElement

# Type Alias: RootTextElement

> **RootTextElement** = `object`

Defined in: [src/components/content/TextDrawerTypes.ts:96](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L96)

Root-level metadata for the text drawer hierarchy.

## Remarks

Passed as the second type parameter to `HierarchyTree<P, RootTextElement>`.
Currently only carries an `id` for future root-level addressing; the field
is not consumed by any renderer.

## Properties

### id

> **id**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:98](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L98)

Identifier for the root node — not rendered, reserved for future use.
