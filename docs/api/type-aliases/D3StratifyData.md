[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / D3StratifyData

# Type Alias: D3StratifyData\<Node, NodeOverrides\>

> **D3StratifyData**\<`Node`, `NodeOverrides`\> = `object`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L24)

Row format passed into `d3.stratify()`.

## Remarks

`d3.stratify()` expects an array of objects where each object has:
- `id`: unique identifier
- `parentId`: parent identifier (or `null` for the root)

## Type Parameters

### Node

`Node`

### NodeOverrides

`NodeOverrides`

## Properties

### id

> **id**: `string`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:25](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L25)

***

### parentId

> **parentId**: `string` \| `null`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L26)

***

### payload

> **payload**: [`StratifyPayload`](StratifyPayload.md)\<`Node`, `NodeOverrides`\>

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:27](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L27)
