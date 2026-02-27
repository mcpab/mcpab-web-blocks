[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RowPlan

# Type Alias: RowPlan

> **RowPlan** = `object`

Defined in: [src/components/menus/RowPolicyTypes.ts:49](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L49)

Computed visual plan for a single menu row.
Produced by [RowPolicy](RowPolicy.md) and consumed by menu row render components.

## Properties

### icon?

> `optional` **icon**: `React.ReactNode`

Defined in: [src/components/menus/RowPolicyTypes.ts:55](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L55)

Icon rendered to the left of the label (inside `ListItemIcon`).

***

### indicator?

> `optional` **indicator**: `React.ReactNode`

Defined in: [src/components/menus/RowPolicyTypes.ts:57](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L57)

Indicator icon (e.g. chevron) rendered beside the label. Position set by `indicatorPlacement`.

***

### indicatorPlacement?

> `optional` **indicatorPlacement**: `"start"` \| `"end"`

Defined in: [src/components/menus/RowPolicyTypes.ts:59](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L59)

Whether the indicator appears before or after the label.

#### Default Value

`"end"`

***

### paddingInlineStart

> **paddingInlineStart**: `number`

Defined in: [src/components/menus/RowPolicyTypes.ts:66](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L66)

Logical (RTL-safe) inline-start padding for the row.

**Note**: `DrawerMenu` policies express this in MUI spacing units (×8 px).
`DropDown` policies use raw pixel values. Both are passed directly into `sx.paddingInlineStart`.

***

### rowSx?

> `optional` **rowSx**: `SxProps`\<`Theme`\>

Defined in: [src/components/menus/RowPolicyTypes.ts:68](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L68)

Additional `sx` styles applied to the row wrapper (`ListItemButton` or `ListItem`).

***

### text

> **text**: `string` \| `React.ReactNode`

Defined in: [src/components/menus/RowPolicyTypes.ts:51](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L51)

Label text (or a custom React node).

***

### typographyProps?

> `optional` **typographyProps**: `MenuLabelTypographyProps`

Defined in: [src/components/menus/RowPolicyTypes.ts:53](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L53)

Typography props forwarded to the `<Typography>` wrapping the label.
