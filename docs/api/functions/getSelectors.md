[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / getSelectors

# Function: getSelectors()

> **getSelectors**(`__namedParameters`): [`GetSelectorsReturnType`](../type-aliases/GetSelectorsReturnType.md)

Defined in: [src/components/menus/drawer/pathSelectors.ts:65](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L65)

Walks the menu tree using a depth-first search to find the selected node and
records the full ancestor path along the way.

Returns [GetSelectorsReturnType](../type-aliases/GetSelectorsReturnType.md) with stable function references for
`isSelected` and `isAncestorSelected`, suitable for passing into React context.
If no node matches the selector, all functions return `false`/`null`.

## Parameters

### \_\_namedParameters

`GetselectorsProps`

## Returns

[`GetSelectorsReturnType`](../type-aliases/GetSelectorsReturnType.md)
