[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DrawerMenuPropsRendering

# Type Alias: DrawerMenuPropsRendering

> **DrawerMenuPropsRendering** = [`MenuPropsRendering`](MenuPropsRendering.md) & `object`

Defined in: [src/components/menus/drawer/DrawerMenuTypes.ts:9](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/DrawerMenuTypes.ts#L9)

Props for the [DrawerMenu](../functions/DrawerMenu.md) component.
Extends the shared [MenuPropsRendering](MenuPropsRendering.md) with drawer-specific layout options.

## Type Declaration

### anchor?

> `optional` **anchor**: `"left"` \| `"right"` \| `"top"` \| `"bottom"`

Which edge of the screen the drawer slides in from.

#### Default Value

`'left'`

### drawerPaperSx?

> `optional` **drawerPaperSx**: `SxProps`\<`Theme`\>

Optional `sx` overrides for the MUI Drawer paper slot.

### indent?

> `optional` **indent**: `number`

Base indentation multiplier (MUI spacing units) applied per depth level.
Each depth-N item receives `indent * (N + 2)` spacing units of inline-start padding,
which is designed to clear the icon width present at depth 0.

#### Default Value

`0`

### listSx?

> `optional` **listSx**: `SxProps`\<`Theme`\>

Optional `sx` overrides for the root navigation list inside the drawer.

### triggerButtonSx?

> `optional` **triggerButtonSx**: `SxProps`\<`Theme`\>

Optional `sx` overrides for the menu trigger IconButton.
