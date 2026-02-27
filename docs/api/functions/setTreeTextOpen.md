[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / setTreeTextOpen

# Function: setTreeTextOpen()

> **setTreeTextOpen**(`store`, `nodeId`): (`open`) => `void`

Defined in: [src/components/content/textTreeStore.ts:114](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L114)

Returns a stable setter that toggles a single node's open state in the store.

## Parameters

### store

[`TreeTextStore`](../type-aliases/TreeTextStore.md)\<[`TreeTextState`](../type-aliases/TreeTextState.md)\>

The shared store from `TextDrawer`.

### nodeId

`string`

The node to mutate.

## Returns

A setter `(open: boolean) => void` that merges the new value into
  the existing state via a functional update.

> (`open`): `void`

### Parameters

#### open

`boolean`

### Returns

`void`

## Remarks

Curried so callers (typically `TextElement`) can create the setter once and
pass it down as a stable callback without re-creating it on every render.

## Example

```ts
const onToggle = setTreeTextOpen(store, 'section-a');
onToggle(true);  // opens section-a
onToggle(false); // closes section-a
```
