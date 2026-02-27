[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuTreeElement

# Type Alias: MenuTreeElement

> **MenuTreeElement** = `object`

Defined in: [src/components/menus/MenuTypes.ts:5](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L5)

Data payload for a single menu node. Stored in the hierarchy tree.

## Properties

### label

> **label**: `string`

Defined in: [src/components/menus/MenuTypes.ts:7](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L7)

Display label shown in the UI.

***

### link?

> `optional` **link**: `string`

Defined in: [src/components/menus/MenuTypes.ts:9](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L9)

Navigation target. Omit for toggle-only (non-link) nodes.

***

### order?

> `optional` **order**: `number`

Defined in: [src/components/menus/MenuTypes.ts:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuTypes.ts#L11)

Sort order among siblings. Lower values appear first.
