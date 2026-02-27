[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DrawerMenu

# Function: DrawerMenu()

> **DrawerMenu**(`__namedParameters`): `Element`

Defined in: [src/components/menus/drawer/DrawerMenu.tsx:51](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/DrawerMenu.tsx#L51)

Top-level entry point for the collapsible sidebar (drawer) navigation.

Orchestrates three React contexts before rendering the interactive client component:
- **MenuSelectorContext** — derives `isSelected` / `isAncestorSelected` from the `selector` callback.
- **MenuControllerContext** — a Zustand store tracking which nodes are expanded,
  pre-opened along the path to the selected item.

Renders a hamburger `IconButton` that opens a MUI `Drawer` containing the menu tree.
Each top-level item shows an icon resolved by name via `IconPicker`.

## Parameters

### \_\_namedParameters

[`DrawerMenuProps`](../type-aliases/DrawerMenuProps.md)

## Returns

`Element`

## Example

```tsx
const result = hierarchyToDrawerInput({ hierarchy, overrides });
if (result.ok) {
  return (
    <DrawerMenu
      {...result}
      anchor="left"
      indent={2}
      selector={(id) => id === currentPageId}
    />
  );
}
```

## See

 - [hierarchyToDrawerInput](hierarchyToDrawerInput.md) to build the required props from a hierarchy definition.
 - [defaultDrawerRowPolicy](defaultDrawerRowPolicy.md) for the default row styling policy.
