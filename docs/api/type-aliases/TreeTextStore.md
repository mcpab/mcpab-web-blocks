[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TreeTextStore

# Type Alias: TreeTextStore\<TreeTextState\>

> **TreeTextStore**\<`TreeTextState`\> = `object`

Defined in: [src/components/content/textTreeStore.ts:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L24)

Minimal external store compatible with React's `useSyncExternalStore`.

## Remarks

Deliberately framework-agnostic — no React imports, no context coupling.
The store is created once per `TextDrawer` mount (via `useMemo`) and shared
downward through the `TextDrawer` context provider.

## Type Parameters

### TreeTextState

`TreeTextState`

Shape of the state slice managed by this store.

## Properties

### getState()

> **getState**: () => `TreeTextState`

Defined in: [src/components/content/textTreeStore.ts:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L26)

Returns the current state snapshot.

#### Returns

`TreeTextState`

***

### setState()

> **setState**: (`next`) => `void`

Defined in: [src/components/content/textTreeStore.ts:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L32)

Replaces the state or applies a functional update.
Skips notification if the new reference is identical to the current one.
Notifies all subscribers after every accepted update.

#### Parameters

##### next

`TreeTextState` | (`prev`) => `TreeTextState`

#### Returns

`void`

***

### subscribe()

> **subscribe**: (`listener`) => () => `void`

Defined in: [src/components/content/textTreeStore.ts:37](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textTreeStore.ts#L37)

Registers a listener called after every state change.

#### Parameters

##### listener

() => `void`

#### Returns

An unsubscribe function — call it to remove the listener.

> (): `void`

##### Returns

`void`
