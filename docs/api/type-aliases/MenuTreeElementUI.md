[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuTreeElementUI

# Type Alias: MenuTreeElementUI

> **MenuTreeElementUI** = `object`

Defined in: [src/components/menus/MenuTypes.ts:20](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L20)

Per-node UI overrides applied on top of the default [RowPolicy](RowPolicy.md) output.

## Properties

### display?

> `optional` **display**: `boolean`

Defined in: [src/components/menus/MenuTypes.ts:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L24)

Set to `false` to hide the node entirely. Defaults to `true`.

***

### divider?

> `optional` **divider**: `boolean`

Defined in: [src/components/menus/MenuTypes.ts:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L26)

Render a divider below this node.

***

### onClick?

> `optional` **onClick**: `React.MouseEventHandler`\<`HTMLElement`\>

Defined in: [src/components/menus/MenuTypes.ts:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L22)

Click handler — attached to the row wrapper instead of (or in addition to) navigation.
