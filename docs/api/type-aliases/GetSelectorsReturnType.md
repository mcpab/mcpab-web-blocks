[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / GetSelectorsReturnType

# Type Alias: GetSelectorsReturnType

> **GetSelectorsReturnType** = `object`

Defined in: [src/components/menus/drawer/pathSelectors.ts:37](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L37)

Derived selection state computed from a single [IsSelectedMenuElement](IsSelectedMenuElement.md) callback.
Consumed by [MenuSelectorContext](../variables/MenuSelectorContext.md) throughout the menu tree.

## Properties

### isAncestorSelected()

> **isAncestorSelected**: (`nodeId`) => `boolean`

Defined in: [src/components/menus/drawer/pathSelectors.ts:41](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L41)

Returns `true` if the given node is an ancestor of the selected item (but not selected itself).

#### Parameters

##### nodeId

`string`

#### Returns

`boolean`

***

### isSelected()

> **isSelected**: (`nodeId`) => `boolean`

Defined in: [src/components/menus/drawer/pathSelectors.ts:39](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L39)

Returns `true` if the given node is the selected item.

#### Parameters

##### nodeId

`string`

#### Returns

`boolean`

***

### selectedId

> **selectedId**: `string` \| `null`

Defined in: [src/components/menus/drawer/pathSelectors.ts:43](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L43)

The id of the selected node, or `null` if nothing is selected.

***

### selectedPathIds

> **selectedPathIds**: `Set`\<`string`\>

Defined in: [src/components/menus/drawer/pathSelectors.ts:45](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/pathSelectors.ts#L45)

Set of all node ids on the path from root to the selected node (inclusive).
