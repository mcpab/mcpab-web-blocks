[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / IsSelectedMenuElement

# Type Alias: IsSelectedMenuElement()

> **IsSelectedMenuElement** = (`id`, `menuTreeElement`) => `boolean`

Defined in: [src/components/menus/drawer/pathSelectors.ts:16](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L16)

Callback used to determine whether a menu node is the currently active (selected) item.

## Parameters

### id

`string`

The node's unique string key in the hierarchy.

### menuTreeElement

The node's data payload, or `null` if the node has no data.

[`MenuTreeElement`](MenuTreeElement.md) | `null`

## Returns

`boolean`

`true` if this node should be treated as the selected item.

## Example

```ts
const selector: IsSelectedMenuElement = (id) => id === currentPageId;
```
