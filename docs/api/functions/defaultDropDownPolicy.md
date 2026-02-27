[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / defaultDropDownPolicy

# Function: defaultDropDownPolicy()

> **defaultDropDownPolicy**(`__namedParameters`): [`RowPolicy`](../type-aliases/RowPolicy.md)

Defined in: [src/components/menus/dropDown/defaultDropDownRowPolicy.tsx:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/dropDown/defaultDropDownRowPolicy.tsx#L34)

Default [RowPolicy](../type-aliases/RowPolicy.md) for the horizontal dropdown / mega menu navigation.

Styling rules by depth:
- **depth 0** — nav bar items: `text.primary`, icon resolved by label name via `IconPicker`,
  down-chevron indicator. Label is title-cased.
- **depth 1** — mega menu column headers: uppercase, letter-spaced, small (`0.7rem`),
  `text.secondary`, bold (`700`). No icon.
- **depth 2+** — mega menu items: indented `(depth - 1) * 8px` (raw pixels). No icon.
- **selected** — `primary.main` colour, bold (`700`). No background change.
- **ancestor-selected at depth 0** — medium weight (`500`), `text.primary`.

Pass a custom `RowPolicy` via [MenuRenderContext](../variables/MenuRenderContext.md) to restyle without modifying components.

## Parameters

### \_\_namedParameters

`DefaultDropDownProps`

## Returns

[`RowPolicy`](../type-aliases/RowPolicy.md)
