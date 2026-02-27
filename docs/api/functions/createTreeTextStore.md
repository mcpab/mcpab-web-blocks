[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / createTreeTextStore

# Function: createTreeTextStore()

> **createTreeTextStore**(`initialState`): [`TreeTextStore`](../type-aliases/TreeTextStore.md)\<[`TreeTextState`](../type-aliases/TreeTextState.md)\>

Defined in: [src/components/content/textTreeStore.ts:57](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L57)

Creates a new [TreeTextStore](../type-aliases/TreeTextStore.md) initialised with `initialState`.

## Parameters

### initialState

[`TreeTextState`](../type-aliases/TreeTextState.md)

Seed state; typically produced by walking the tree and
  collecting each node's `defaultOpen` override.

## Returns

[`TreeTextStore`](../type-aliases/TreeTextStore.md)\<[`TreeTextState`](../type-aliases/TreeTextState.md)\>

A fully wired store instance.

## Remarks

The store uses a `Set` of listeners for O(1) subscribe/unsubscribe.
Reference equality is checked in `setState` to avoid spurious re-renders
when the same state object is returned from a functional update.

## Example

```ts
const store = createTreeTextStore({ 'section-a': true, 'section-b': false });
```
