[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / FeaturedColumnsFooter

# Function: FeaturedColumnsFooter()

> **FeaturedColumnsFooter**(`props`): `Element`

Defined in: [src/components/footers/FeaturedColumnsFooter.tsx:51](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/footers/FeaturedColumnsFooter.tsx#L51)

A footer with three content columns optimised for feature showcases or
service presentations, with an optional header band and footer strip.

Uses the `header3colFooter` GridCSS catalog entry. This differs from
[ThreeColumnsFooter](ThreeColumnsFooter.md) (`footerHeader3Columns`) in its responsive grid
spans — prefer this variant when the three columns represent discrete
features, services, or highlights rather than navigation link groups.

## Parameters

### props

[`FeaturedColumnsFooterProps`](../type-aliases/FeaturedColumnsFooterProps.md)

## Returns

`Element`

## Example

```tsx
<FeaturedColumnsFooter
  header={<Logo />}
  column_1={<ServiceCard title="Design" />}
  column_2={<ServiceCard title="Development" />}
  column_3={<ServiceCard title="Support" />}
  footer={<Copyright />}
/>
```
