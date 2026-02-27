[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TwoColumnsFooter

# Function: TwoColumnsFooter()

> **TwoColumnsFooter**(`props`): `Element`

Defined in: [src/components/footers/TwoColumnsFooter.tsx:46](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/footers/TwoColumnsFooter.tsx#L46)

A footer divided into two content columns, with an optional header band at
the top and a footer strip at the bottom.

Uses the `header2colFooter` GridCSS catalog entry — a minimal layout suited
for simple comparison or side-by-side content (e.g. brand info + contact).

## Parameters

### props

[`TwoColumnsFooterProps`](../type-aliases/TwoColumnsFooterProps.md)

## Returns

`Element`

## Example

```tsx
<TwoColumnsFooter
  header={<Logo />}
  column_1={<BrandInfo />}
  column_2={<ContactDetails />}
  footer={<Copyright />}
/>
```
