[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / FiveColumnsFooter

# Function: FiveColumnsFooter()

> **FiveColumnsFooter**(`props`): `Element`

Defined in: [src/components/footers/FiveColumnsFooter.tsx:56](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/footers/FiveColumnsFooter.tsx#L56)

A footer divided into five equal content columns, with an optional header
band at the top and a footer strip at the bottom.

The layout is driven by the `footerHeader5Columns` entry in the secondary
GridCSS catalog. Pass any React node into each slot — typically navigation
link lists, contact details, or a brand logo.

## Parameters

### props

[`FiveColumnsFooterProps`](../type-aliases/FiveColumnsFooterProps.md)

## Returns

`Element`

## Example

```tsx
<FiveColumnsFooter
  header={<Logo />}
  column_1={<NavList title="Company" links={companyLinks} />}
  column_2={<NavList title="Services" links={serviceLinks} />}
  column_3={<NavList title="Support" links={supportLinks} />}
  column_4={<NavList title="Legal" links={legalLinks} />}
  column_5={<SocialLinks />}
  footer={<Copyright />}
/>
```
