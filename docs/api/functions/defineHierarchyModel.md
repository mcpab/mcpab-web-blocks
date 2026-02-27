[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / defineHierarchyModel

# Function: defineHierarchyModel()

> **defineHierarchyModel**\<`P`\>(`_payloadMap`, `model`): [`HierarchyRelations`](../type-aliases/HierarchyRelations.md)\<`P`\>

Defined in: [src/core/hierarchy/defineHierarchyModel.ts:10](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/defineHierarchyModel.ts#L10)

Helper that anchors generic inference for a hierarchy relations model.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](../type-aliases/PayloadMap.md)

## Parameters

### \_payloadMap

`P`

### model

[`HierarchyRelations`](../type-aliases/HierarchyRelations.md)\<`P`\>

## Returns

[`HierarchyRelations`](../type-aliases/HierarchyRelations.md)\<`P`\>

## Remarks

`_payloadMap` is intentionally unused at runtime; it exists to drive
compile-time inference for `P`.
