[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / sortD3Stratify

# Function: sortD3Stratify()

> **sortD3Stratify**\<`Node`, `NodeOverrides`\>(`stratify`): \{ `ok`: `true`; `root`: [`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>; \} \| \{ `issues`: [`HierarchyIssue`](../type-aliases/HierarchyIssue.md)[]; `ok`: `false`; \}

Defined in: [src/core/hierarchy/sortD3Stratify.ts:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/hierarchy/sortD3Stratify.ts#L22)

Sort a `d3-hierarchy` stratified tree by `payload.node.order`.

## Type Parameters

### Node

`Node` *extends* `object`

Node payload type. Must include `{ order: number }`.

### NodeOverrides

`NodeOverrides`

Optional override payload type embedded in [StratifyPayload](../type-aliases/StratifyPayload.md).

## Parameters

### stratify

[`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>

## Returns

\{ `ok`: `true`; `root`: [`Stratify`](../type-aliases/Stratify.md)\<`Node`, `NodeOverrides`\>; \} \| \{ `issues`: [`HierarchyIssue`](../type-aliases/HierarchyIssue.md)[]; `ok`: `false`; \}

## Remarks

- Uses the `HierarchyNode.sort` method to order siblings.
- Primary key: `payload.node.order` (ascending).
- Fallback: `id` lexicographic compare when `order` is missing.

Validation:
- Reports [HIERARCHY\_ERROR\_CODE.NULL\_NODE](../variables/HIERARCHY_ERROR_CODE.md#null_node) if it encounters a non-root node
  whose `payload.node` is `null`.

⚠️ Current behavior: issues are collected but sorting still proceeds.
If you want `ok:false` on any issue, return early when `issues.length > 0`.
