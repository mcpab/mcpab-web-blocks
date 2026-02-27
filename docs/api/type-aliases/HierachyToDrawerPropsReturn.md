[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierachyToDrawerPropsReturn

# Type Alias: HierachyToDrawerPropsReturn

> **HierachyToDrawerPropsReturn** = \{ `issues`: [`HierarchyIssue`](HierarchyIssue.md)[]; `ok`: `false`; \} \| \{ `ok`: `true`; `root`: [`RootTreeElement`](RootTreeElement.md); `rootOverrides?`: [`RootOverridesUI`](RootOverridesUI.md); `treeFromRoot`: [`StratifyPayload`](StratifyPayload.md)\<[`MenuTreeElement`](MenuTreeElement.md), [`MenuTreeElementUI`](MenuTreeElementUI.md)\>; \}

Defined in: [src/components/menus/drawer/hierarchyToDrawerInput.tsx:29](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/hierarchyToDrawerInput.tsx#L29)

Return type of [hierarchyToDrawerInput](../functions/hierarchyToDrawerInput.md).
Either a validated prop set ready to pass to [DrawerMenu](../functions/DrawerMenu.md), or a list of validation issues.
