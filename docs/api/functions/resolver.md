[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / resolver

# Function: resolver()

> **resolver**\<`H`\>(`hierarchyTree`): [`ResolverReturn`](../type-aliases/ResolverReturn.md)\<`H`\>

Defined in: [src/core/hierarchy/resolver.ts:49](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/resolver.ts#L49)

Validate a hierarchy tree and detect invalid relations.

## Type Parameters

### H

`H` *extends* [`HierarchyTree`](../type-aliases/HierarchyTree.md)\<`any`, `any`\>

## Parameters

### hierarchyTree

`H`

## Returns

[`ResolverReturn`](../type-aliases/ResolverReturn.md)\<`H`\>

## Remarks

Checks performed:
1. No `"root"` key inside `nodes`
2. No undefined node entries
3. Every node has a parent (non-null/undefined)
4. Parent must be `"root"` or an existing node id
5. No self-parenting
6. At least one node attaches to `"root"`
7. No cycles (DFS)

## Example

```ts
const result = resolver(tree);
if (!result.ok) {
  console.log(result.issues);
} else {
  const valid = result.resolvedHierarchy;
}
```
