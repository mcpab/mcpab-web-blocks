[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierachyToTextDrawerPropsReturn

# Type Alias: HierachyToTextDrawerPropsReturn

> **HierachyToTextDrawerPropsReturn** = \{ `issues`: [`HierarchyIssue`](HierarchyIssue.md)[]; `ok`: `false`; \} \| \{ `ok`: `true`; `treeFromRoot`: [`StratifyPayload`](StratifyPayload.md)\<[`TextDrawerElement`](TextDrawerElement.md), [`TextDrawerElementUI`](TextDrawerElementUI.md)\>; \}

Defined in: [src/components/content/hierarchyToTextDrawerProps.ts:49](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/hierarchyToTextDrawerProps.ts#L49)

Discriminated-union return type from [hierarchyToTextDrawerProps](../functions/hierarchyToTextDrawerProps.md).

Check `ok` before accessing `treeFromRoot`.

## Type Declaration

\{ `issues`: [`HierarchyIssue`](HierarchyIssue.md)[]; `ok`: `false`; \}

### issues

> **issues**: [`HierarchyIssue`](HierarchyIssue.md)[]

### ok

> **ok**: `false`

\{ `ok`: `true`; `treeFromRoot`: [`StratifyPayload`](StratifyPayload.md)\<[`TextDrawerElement`](TextDrawerElement.md), [`TextDrawerElementUI`](TextDrawerElementUI.md)\>; \}

### ok

> **ok**: `true`

### treeFromRoot

> **treeFromRoot**: [`StratifyPayload`](StratifyPayload.md)\<[`TextDrawerElement`](TextDrawerElement.md), [`TextDrawerElementUI`](TextDrawerElementUI.md)\>

Pre-built, sorted tree ready to pass directly to `<TextDrawer treeFromRoot={…} />`.
