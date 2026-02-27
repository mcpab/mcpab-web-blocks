[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextDrawer

# Function: TextDrawer()

> **TextDrawer**(`__namedParameters`): `Element`

Defined in: [src/components/content/TextDrawer.tsx:51](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawer.tsx#L51)

Public-facing accordion/collapsible text tree component.

## Parameters

### \_\_namedParameters

`TextDrawerProps`

## Returns

`Element`

## Remarks

`TextDrawer` is the **only** component consumers should mount directly.
It is responsible for:
- Building the [TreeTextStore](../type-aliases/TreeTextStore.md) from the tree's `defaultOpen` overrides.
- Providing the store via an internal context provider.
- Delegating rendering to `TextDrawer_Client` (a `'use client'` boundary).

The store is memoised on `treeFromRoot` — it is only rebuilt when the tree
reference changes, so the open/closed state survives parent re-renders.

## Example

```tsx
const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
if (result.ok) {
  return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
}
```
