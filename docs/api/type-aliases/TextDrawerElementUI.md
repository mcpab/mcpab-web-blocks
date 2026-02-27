[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextDrawerElementUI

# Type Alias: TextDrawerElementUI

> **TextDrawerElementUI** = `object`

Defined in: [src/components/content/TextDrawerTypes.ts:54](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L54)

UI-only overrides for a single node, merged from `HierarchyTreeOverrides`.

## Remarks

These fields are kept separate from [TextDrawerElement](TextDrawerElement.md) because they
are UI concerns (open state, visual tweaks) that are not part of the data
model and must not influence hierarchy processing.

## Properties

### defaultOpen?

> `optional` **defaultOpen**: `boolean`

Defined in: [src/components/content/TextDrawerTypes.ts:66](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L66)

When `true`, the collapsible section starts expanded.
Seeded into [TreeTextStore](TreeTextStore.md) initial state by `TextDrawer`.
Safe to set on leaf nodes — the store tracks the value but it has no
visual effect when there are no children to collapse.

***

### divider?

> `optional` **divider**: `boolean`

Defined in: [src/components/content/TextDrawerTypes.ts:59](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L59)

When `true`, a visual separator is drawn above this node.
Consumed by layout wrappers; not yet forwarded by any built-in renderer.

***

### sx?

> `optional` **sx**: `SxProps`\<`Theme`\>

Defined in: [src/components/content/TextDrawerTypes.ts:72](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L72)

Arbitrary MUI `sx` forwarded to the renderer's root element.
The renderer must explicitly accept and forward `sx` — all built-in
renderers except `titleAndSubStd` / `titleAndSubDepth` do so.
