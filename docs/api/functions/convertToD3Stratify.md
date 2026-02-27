[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / convertToD3Stratify

# Function: convertToD3Stratify()

> **convertToD3Stratify**\<`Node`, `NodeOverrides`, `P`\>(`hierarchy`, `overridesNodes?`): \{ `ok`: `true`; `root`: [`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>; \} \| \{ `issues`: [`HierarchyIssue`](../type-aliases/HierarchyIssue.md)[]; `ok`: `false`; \}

Defined in: [src/core/hierarchy/convertToD3Stratify.tsx:50](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/convertToD3Stratify.tsx#L50)

## Type Parameters

### Node

`Node`

### NodeOverrides

`NodeOverrides`

### P

`P` *extends* [`PayloadMap`](../type-aliases/PayloadMap.md)\<`Node`\>

## Parameters

### hierarchy

[`HierarchyRelations`](../type-aliases/HierarchyRelations.md)\<`P`\>

### overridesNodes?

[`HierarchyRelationsOverrides`](../type-aliases/HierarchyRelationsOverrides.md)\<`P`, [`HierarchyRelations`](../type-aliases/HierarchyRelations.md)\<`P`\>, `NodeOverrides`\>

## Returns

\{ `ok`: `true`; `root`: [`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>; \} \| \{ `issues`: [`HierarchyIssue`](../type-aliases/HierarchyIssue.md)[]; `ok`: `false`; \}
