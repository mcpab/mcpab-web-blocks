[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / useNodeOpen

# Function: useNodeOpen()

> **useNodeOpen**(`store`, `nodeId`): `boolean`

Defined in: [src/components/menus/menuStore.ts:63](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L63)

React hook that subscribes to the open/closed state of a single node.

Returns `false` for nodes that have never been explicitly toggled.
Safe for server rendering (snapshot always returns `false`).

## Parameters

### store

[`MenuStore`](../type-aliases/MenuStore.md)\<[`MenuState`](../type-aliases/MenuState.md)\>

The store created by [createMenuStore](createMenuStore.md).

### nodeId

`string`

The node whose open state to read.

## Returns

`boolean`
