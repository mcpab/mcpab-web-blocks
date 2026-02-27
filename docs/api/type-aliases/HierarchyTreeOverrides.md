[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierarchyTreeOverrides

# Type Alias: HierarchyTreeOverrides\<P, H, RootOverridePayload, PN\>

> **HierarchyTreeOverrides**\<`P`, `H`, `RootOverridePayload`, `PN`\> = `object`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:110](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L110)

Overrides for an entire hierarchy tree (root + nodes).

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)

Original payload universe.

### H

`H` *extends* [`HierarchyTree`](HierarchyTree.md)\<`P`\>

Tree being overridden.

### RootOverridePayload

`RootOverridePayload` = `unknown`

New payload type for the root anchor.

### PN

`PN` = `unknown`

New payload type for overridden nodes.

## Properties

### nodes?

> `optional` **nodes**: [`HierarchyRelationsOverrides`](HierarchyRelationsOverrides.md)\<`P`, `H`\[`"nodes"`\], `PN`\>

Defined in: [src/core/hierarchy/hierarchyTypes.ts:119](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L119)

***

### root?

> `optional` **root**: `object`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:116](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L116)

#### payload

> **payload**: `RootOverridePayload`
