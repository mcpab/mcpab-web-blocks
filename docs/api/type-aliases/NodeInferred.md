[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / NodeInferred

# Type Alias: NodeInferred\<P\>

> **NodeInferred**\<`P`\> = `P` *extends* [`PayloadMap`](PayloadMap.md)\<infer NodeType\> ? `NodeType` : `never`

Defined in: [src/core/hierarchy/hierarchyTypes.ts:145](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/hierarchyTypes.ts#L145)

## Type Parameters

### P

`P`

## Example

```ts
const ex = {
  a: { name: "a" },
  b: { name: "b", other: "aa" },
  c: { name: "c", jk: "b" },
  root: { name: "root", pp: "c" }, // allowed as an anchor payload
} as const satisfies PayloadMap;

const rt = {
  a: { payload: { name: "a" }, parent: "b" },
  b: { payload: { name: "b", other: "aa" }, parent: "a" },
  c: { payload: { name: "c", jk: "b" }, parent: "b" },
  // root: { payload: { name: "root", pp: "c" }, parent: "c" }, // not allowed (root isn't a node)
} as const satisfies HierarchyRelations<typeof ex>;

const ov = {
  a: { payload: { id: "aaa" } },
  b: { payload: { id: "bbb" } },
  c: { payload: { id: "ccc" } },
} as const satisfies HierarchyRelationsOverrides<typeof ex, typeof rt, { id: string }>;
```
