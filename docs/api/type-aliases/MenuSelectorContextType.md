[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuSelectorContextType

# Type Alias: MenuSelectorContextType

> **MenuSelectorContextType** = [`GetSelectorsReturnType`](GetSelectorsReturnType.md)

Defined in: [src/components/menus/MenuSelectorContext.ts:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuSelectorContext.ts#L12)

Provides selection state derived from the active page selector callback.

Holds stable `isSelected` and `isAncestorSelected` functions computed once
by [getSelectors](../functions/getSelectors.md) and distributed to all menu elements without re-renders.

## See

[GetSelectorsReturnType](GetSelectorsReturnType.md) for the full shape of the context value.
