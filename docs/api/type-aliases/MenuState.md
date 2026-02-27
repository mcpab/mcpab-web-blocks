[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuState

# Type Alias: MenuState

> **MenuState** = `Record`\<`string`, `boolean`\>

Defined in: [src/components/menus/menuStore.ts:8](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L8)

State shape for a menu store: a map of node id → open/closed boolean.
Only nodes that have been explicitly toggled appear in the map;
absent nodes default to `false` (closed).
