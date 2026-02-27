[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierarchyRelations

# Type Alias: HierarchyRelations\<P\>

> **HierarchyRelations**\<`P`\> = \{ \[K in NodeId\<P\>\]: \{ parent: AllowedParents\<K & string, P\> \| "root"; payload: P\[K\] \} \}

Defined in: [src/core/hierarchy/hierarchyTypes.ts:50](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L50)

Parent relation model for a hierarchy.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)

Node ID → payload type map. `"root"` may be present as an anchor key.

## Remarks

This is a **normalized** hierarchy representation: each node explicitly stores its parent.

### Type-level guarantees
- Parent id must be a known node id or `"root"`.
- No self-parenting.

### Runtime invariants (not enforced by types)
- No cycles.

## Example

```ts
const payloads = {
  a: { name: "a" },
  b: { name: "b" },
  c: { name: "c" },
  root: { name: "root" }, // allowed as an anchor payload
} as const satisfies PayloadMap;

const relations = {
  a: { payload: { name: "a" }, parent: "b" },
  b: { payload: { name: "b" }, parent: "root" },
  c: { payload: { name: "c" }, parent: "b" },
} as const satisfies HierarchyRelations<typeof payloads>;
```
