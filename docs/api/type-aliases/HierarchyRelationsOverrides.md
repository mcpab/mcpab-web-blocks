[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierarchyRelationsOverrides

# Type Alias: HierarchyRelationsOverrides\<P, H, PN\>

> **HierarchyRelationsOverrides**\<`P`, `H`, `PN`\> = `{ [K in Extract<keyof H, string>]?: { payload: PN } }`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:92](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L92)

Payload overrides for a hierarchy relations map.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)

Original payload universe.

### H

`H` *extends* [`HierarchyRelations`](HierarchyRelations.md)\<`P`\>

Relations map being overridden.

### PN

`PN`

New payload type for overridden entries.

## Remarks

Useful for producing “view-model” payloads (e.g. adding UI fields) while keeping the same structure.
