[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TreeTextState

# Type Alias: TreeTextState

> **TreeTextState** = `Record`\<`string`, `boolean`\>

Defined in: [src/components/content/textTreeStore.ts:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L12)

Flat map of node-id → open/closed boolean for the entire text drawer tree.

## Remarks

Every node (parent and leaf) has an entry so that `defaultOpen` overrides can
be seeded uniformly.  Leaf nodes retain their state in the store even though
they have no visible collapse effect — this keeps the API surface consistent
and allows future controlled-open scenarios without schema changes.
