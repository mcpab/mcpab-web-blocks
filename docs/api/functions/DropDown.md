[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DropDown

# Function: DropDown()

> **DropDown**(`__namedParameters`): `Element`

Defined in: [src/components/menus/dropDown/DropDown.tsx:57](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/dropDown/DropDown.tsx#L57)

Top-level entry point for the horizontal dropdown (mega menu) navigation bar.

Sets up [MenuSelectorContext](../variables/MenuSelectorContext.md) from the `selector` callback, then delegates
rendering to the client dropdown renderer that mounts a sticky MUI `AppBar`.

Top-level items are rendered at depth 0. Items with children open a MUI `Popover`
containing a mega menu panel laid out as columns.

## Parameters

### \_\_namedParameters

[`DropDownMenuProps`](../type-aliases/DropDownMenuProps.md)

## Returns

`Element`

## Example

```tsx
const result = hierarchyToDrawerInput({ hierarchy, overrides });
if (result.ok) {
  return (
    <DropDown
      {...result}
      selector={(id) => id === currentPageId}
      megaMenuPolicy={compactMegaMenuPolicy}
    />
  );
}
```

## See

 - [hierarchyToDrawerInput](hierarchyToDrawerInput.md) to build the required props from a hierarchy definition.
 - [defaultDropDownPolicy](defaultDropDownPolicy.md) for the default row styling policy.
 - [standardMegaMenuPolicy](../variables/standardMegaMenuPolicy.md) / [compactMegaMenuPolicy](../variables/compactMegaMenuPolicy.md) for built-in mega menu policies.
