[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DropDownMenuProps

# Type Alias: DropDownMenuProps

> **DropDownMenuProps** = [`MenuPropsRendering`](MenuPropsRendering.md) & `object`

Defined in: [src/components/menus/dropDown/DropDown.tsx:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/dropDown/DropDown.tsx#L11)

Props for the [DropDown](../functions/DropDown.md) component. Extends the shared [MenuPropsRendering](MenuPropsRendering.md).

## Type Declaration

### appBarSx?

> `optional` **appBarSx**: `SxProps`\<`Theme`\>

Optional `sx` overrides for the dropdown `AppBar`.

### megaMenuPolicy?

> `optional` **megaMenuPolicy**: [`MegaMenuPolicy`](MegaMenuPolicy.md)

Layout and styling policy for the mega menu panels.
Controls column dividers, item dividers, column min-width, and outer padding.

#### Default Value

[standardMegaMenuPolicy](../variables/standardMegaMenuPolicy.md)

### selector?

> `optional` **selector**: [`IsSelectedMenuElement`](IsSelectedMenuElement.md)

Callback that identifies the currently active menu item (e.g. the current page).
Drives selected and ancestor-selected visual states via [MenuSelectorContext](../variables/MenuSelectorContext.md).
If omitted, no item is highlighted.

### toolbarSx?

> `optional` **toolbarSx**: `SxProps`\<`Theme`\>

Optional `sx` overrides for the dropdown `Toolbar`.
