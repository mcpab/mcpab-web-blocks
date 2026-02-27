[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierarchyTree

# Type Alias: HierarchyTree\<P, RootPayLoad\>

> **HierarchyTree**\<`P`, `RootPayLoad`\> = `object`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:75](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L75)

A hierarchy tree wrapper that includes a root payload plus node relations.

## Remarks

The `"root"` entry is treated as an **anchor**, not a node in [HierarchyRelations](HierarchyRelations.md).

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)

Node ID → payload type map.

### RootPayLoad

`RootPayLoad` = `unknown`

Payload type stored at the `"root"` anchor.

## Properties

### nodes

> **nodes**: [`HierarchyRelations`](HierarchyRelations.md)\<`P`\>

Defined in: [src/core/hierarchy/hierarchyTypes.ts:79](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L79)

Normalized node relations (child → parent).

***

### root

> **root**: `RootPayLoad`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:77](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L77)

Payload at the `"root"` anchor.
