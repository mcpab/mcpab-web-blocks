[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ThreeColumnsFooter

# Function: ThreeColumnsFooter()

> **ThreeColumnsFooter**(`props`): `Element`

Defined in: [src/components/footers/ThreeColumnsFooter.tsx:50](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/footers/ThreeColumnsFooter.tsx#L50)

A footer divided into three equal content columns, with an optional header
band at the top and a footer strip at the bottom.

The layout is driven by the `footerHeader3Columns` entry in the secondary
GridCSS catalog. Pass any React node into each slot — typically navigation
link lists, contact details, or a brand logo.

## Parameters

### props

[`ThreeColumnsFooterProps`](../type-aliases/ThreeColumnsFooterProps.md)

## Returns

`Element`

## Example

```tsx
<ThreeColumnsFooter
  header={<Logo />}
  column_1={<NavList title="Company" links={companyLinks} />}
  column_2={<NavList title="Services" links={serviceLinks} />}
  column_3={<SocialLinks />}
  footer={<Copyright />}
/>
```
