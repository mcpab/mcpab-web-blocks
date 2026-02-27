[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextTypes

# Type Alias: TextTypes

> **TextTypes** = `"plainText"` \| `"section"` \| `"paragraph"`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L12)

Semantic category of a text drawer node.

- `'plainText'` — a leaf node that renders static content (text, label, link).
- `'paragraph'`— a leaf node that pairs a heading with body text.
- `'section'` — a parent node with collapsible children; must display an
  open/close indicator and handle `onClick` to toggle the `Collapse`.
