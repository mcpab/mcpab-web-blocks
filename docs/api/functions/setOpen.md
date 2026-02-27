[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / setOpen

# Function: setOpen()

> **setOpen**(`store`, `nodeId`): (`open`) => `void`

Defined in: [src/components/menus/menuStore.ts:78](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L78)

Returns a stable setter that toggles the open state of a single node.

## Parameters

### store

[`MenuStore`](../type-aliases/MenuStore.md)\<[`MenuState`](../type-aliases/MenuState.md)\>

The store created by [createMenuStore](createMenuStore.md).

### nodeId

`string`

The node whose open state to update.

## Returns

A function `(open: boolean) => void` to call on toggle events.

> (`open`): `void`

### Parameters

#### open

`boolean`

### Returns

`void`
