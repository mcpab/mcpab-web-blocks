[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / PayloadMap

# Type Alias: PayloadMap\<NodePayload\>

> **PayloadMap**\<`NodePayload`\> = `Record`\<`string`, `NodePayload`\>

Defined in: [src/core/hierarchy/hierarchyTypes.ts:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L11)

Map of node IDs to their payload types.

## Type Parameters

### NodePayload

`NodePayload` = `unknown`

Default payload type when using a uniform payload map.

## Remarks

- Keys are node IDs.
- `"root"` may exist on the payload map as an anchor payload key.
- `"root"` is excluded from node ids in [HierarchyRelations](HierarchyRelations.md).
