[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / hierarchyToTextDrawerProps

# Function: hierarchyToTextDrawerProps()

> **hierarchyToTextDrawerProps**\<`P`\>(`__namedParameters`): [`HierachyToTextDrawerPropsReturn`](../type-aliases/HierachyToTextDrawerPropsReturn.md)

Defined in: [src/components/content/hierarchyToTextDrawerProps.ts:84](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/hierarchyToTextDrawerProps.ts#L84)

Public entry point — converts a typed hierarchy literal into the prop
expected by `TextDrawer`.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](../type-aliases/PayloadMap.md)\<[`TextDrawerElement`](../type-aliases/TextDrawerElement.md)\>

Inferred payload map from the `hierarchy` literal.

## Parameters

### \_\_namedParameters

[`HierachyToTextDrawerProps`](../type-aliases/HierachyToTextDrawerProps.md)\<`P`\>

## Returns

[`HierachyToTextDrawerPropsReturn`](../type-aliases/HierachyToTextDrawerPropsReturn.md)

## Remarks

This is the **only** function consumers should call.  Internally it delegates
to `prepareTextTree` which runs the full pipeline:
1. `resolver` — validates parent references and detects cycles.
2. `convertToD3Stratify` — flattens the hierarchy into D3-compatible records.
3. `sortD3Stratify` — applies `order` fields for stable sibling ordering.
4. `buildTreeFromStratify` — reconstructs the recursive `StratifyPayload` tree.

All validation errors are collected into `issues` and returned as
`{ ok: false, issues }` so the caller can decide how to surface them.

## Example

```ts
const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
if (!result.ok) {
  console.error(result.issues);
} else {
  return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
}
```
