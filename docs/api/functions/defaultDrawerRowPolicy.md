[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / defaultDrawerRowPolicy

# Function: defaultDrawerRowPolicy()

> **defaultDrawerRowPolicy**(`__namedParameters`): [`RowPolicy`](../type-aliases/RowPolicy.md)

Defined in: [src/components/menus/drawer/defaultDrawerRowPolicy.tsx:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/defaultDrawerRowPolicy.tsx#L32)

Default [RowPolicy](../type-aliases/RowPolicy.md) for the drawer menu.

Styling rules:
- **depth 0** — semibold (`fontWeight: 600`), `text.primary`, icon resolved by label name via `IconPicker`.
- **depth 1+** — `0.875rem` font, `text.secondary`, no icon.
- **selected** — `primary.main` colour, semibold, 3px inline-start accent border + `action.hover` background.
- **ancestor of selected** — promoted to `text.primary` and semibold to trace the active path.

Pass a custom `RowPolicy` via [MenuRenderContext](../variables/MenuRenderContext.md) to restyle without modifying components.

## Parameters

### \_\_namedParameters

`DefaultRowPolicyProps`

## Returns

[`RowPolicy`](../type-aliases/RowPolicy.md)
