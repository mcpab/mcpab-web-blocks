[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuStore

# Type Alias: MenuStore\<MenuState\>

> **MenuStore**\<`MenuState`\> = `object`

Defined in: [src/components/menus/menuStore.ts:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L19)

Minimal observable store for menu open/close state.

Compatible with React's `useSyncExternalStore`. Supports both direct
state replacement and functional updates to avoid stale closures.

## See

 - [createMenuStore](../functions/createMenuStore.md) to create an instance.
 - [useNodeOpen](../functions/useNodeOpen.md) / [setOpen](../functions/setOpen.md) for component-level helpers.

## Type Parameters

### MenuState

`MenuState`

## Properties

### getState()

> **getState**: () => `MenuState`

Defined in: [src/components/menus/menuStore.ts:21](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L21)

Returns the current state snapshot.

#### Returns

`MenuState`

***

### setState()

> **setState**: (`next`) => `void`

Defined in: [src/components/menus/menuStore.ts:23](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L23)

Replaces the state or applies a functional update. Notifies all subscribers.

#### Parameters

##### next

`MenuState` | (`prev`) => `MenuState`

#### Returns

`void`

***

### subscribe()

> **subscribe**: (`listener`) => () => `void`

Defined in: [src/components/menus/menuStore.ts:25](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/menuStore.ts#L25)

Subscribes a listener that is called on every state change. Returns an unsubscribe function.

#### Parameters

##### listener

() => `void`

#### Returns

> (): `void`

##### Returns

`void`
