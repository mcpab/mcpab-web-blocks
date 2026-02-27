[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / StratifyPayload

# Type Alias: StratifyPayload\<Node, NodeOverrides\>

> **StratifyPayload**\<`Node`, `NodeOverrides`\> = `object`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:10](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L10)

Payload stored on each `d3-hierarchy` node after stratification.

## Remarks

- `node` is the original node payload (or `null` for the synthetic `"root"` anchor).
- `overrides` optionally stores a per-node override payload.
- `children` is only populated for `"root"` during conversion (as a convenience).

## Type Parameters

### Node

`Node`

### NodeOverrides

`NodeOverrides`

## Properties

### children?

> `optional` **children**: `Record`\<`string`, `StratifyPayload`\<`Node`, `NodeOverrides`\>\>

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L13)

***

### node

> **node**: `Node` \| `null`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L11)

***

### overrides?

> `optional` **overrides**: `NodeOverrides`

Defined in: [src/core/hierarchy/D3StratifyTypes.ts:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/D3StratifyTypes.ts#L12)
