[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DrawerMenuProps

# Type Alias: DrawerMenuProps

> **DrawerMenuProps** = [`DrawerMenuPropsRendering`](DrawerMenuPropsRendering.md) & `object`

Defined in: [src/components/menus/drawer/DrawerMenu.tsx:14](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/DrawerMenu.tsx#L14)

Props for the public [DrawerMenu](../functions/DrawerMenu.md) component.

## Type Declaration

### selector?

> `optional` **selector**: [`IsSelectedMenuElement`](IsSelectedMenuElement.md)

Callback that identifies the currently active menu item (e.g. the current page).
If omitted, no item is selected and all ancestor highlighting is disabled.
