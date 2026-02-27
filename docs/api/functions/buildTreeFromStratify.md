[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / buildTreeFromStratify

# Function: buildTreeFromStratify()

> **buildTreeFromStratify**\<`Node`, `NodeOverrides`\>(`stratify`): `object`

Defined in: [src/core/hierarchy/buildTreeFromStratify.ts:31](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/buildTreeFromStratify.ts#L31)

Build a nested `{ children: Record<id, payload> }` tree from a `d3-hierarchy` stratified root.

## Type Parameters

### Node

`Node`

### NodeOverrides

`NodeOverrides`

## Parameters

### stratify

[`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>

Root [Stratify](../type-aliases/Stratify.md) node returned by `d3.stratify()`.

## Returns

`object`

`{ root, issues }` where `root` is a plain [StratifyPayload](../type-aliases/StratifyPayload.md) tree.

### issues

> **issues**: [`HierarchyIssue`](../type-aliases/HierarchyIssue.md)[]

### root

> **root**: [`StratifyPayload`](../type-aliases/StratifyPayload.md)\<`Node`, `NodeOverrides`\>

## Remarks

This converts the `HierarchyNode` representation (where children are stored as arrays of nodes)
into a plain object tree of [StratifyPayload](../type-aliases/StratifyPayload.md) values keyed by child id.

⚠️ **Mutation:** This function mutates `stratify.data.payload` objects by assigning/creating
`payload.children` on parents during traversal.

The returned `root` is the payload object corresponding to the stratify root (often the synthetic `"root"` node),
with `root.children` set to the constructed children map.

## Example

```ts
const res = convertToD3Stratify(nodes, overrides);
if (!res.ok) throw new Error(res.issues[0]?.message);

const built = buildTreeFromStratify(res.root);
console.log(built.root?.children);
```
