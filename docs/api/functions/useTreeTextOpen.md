[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / useTreeTextOpen

# Function: useTreeTextOpen()

> **useTreeTextOpen**(`store`, `nodeId`): `boolean`

Defined in: [src/components/content/textTreeStore.ts:87](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L87)

React hook — subscribes to a single node's open/closed state.

## Parameters

### store

[`TreeTextStore`](../type-aliases/TreeTextStore.md)\<[`TreeTextState`](../type-aliases/TreeTextState.md)\>

The shared store from `TextDrawer`.

### nodeId

`string`

The node whose open state to observe.

## Returns

`boolean`

`true` when the node is open, `false` when closed or not found.

## Remarks

Uses `useSyncExternalStore` for concurrent-safe granular subscriptions.
Each node only re-renders when its own boolean flips; sibling toggles are
invisible to it.  The server-side snapshot always returns `false` (collapsed).
