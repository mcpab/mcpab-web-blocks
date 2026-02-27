[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ResolverReturn

# Type Alias: ResolverReturn\<H\>

> **ResolverReturn**\<`H`\> = \{ `issues`: [`HierarchyIssue`](HierarchyIssue.md)[]; `ok`: `false`; \} \| \{ `ok`: `true`; `resolvedHierarchy`: `H`; \}

Defined in: [src/core/hierarchy/resolver.ts:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/resolver.ts#L22)

Result of [resolver](../functions/resolver.md).

## Type Parameters

### H

`H` *extends* [`HierarchyTree`](HierarchyTree.md)\<`any`, `any`\>

## Remarks

- When `ok: false`, `issues` contains one or more [HierarchyIssue](HierarchyIssue.md) entries.
- When `ok: true`, `resolvedHierarchy` is the validated hierarchy tree.
