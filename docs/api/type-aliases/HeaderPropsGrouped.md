[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HeaderPropsGrouped

# Type Alias: HeaderPropsGrouped\<P\>

> **HeaderPropsGrouped**\<`P`\> = `object`

Defined in: [src/components/header/Header.tsx:156](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L156)

Grouped modern API for [Header](../variables/Header.md). Prefer this shape.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)\<[`MenuTreeElement`](MenuTreeElement.md)\>

## Properties

### brand

> **brand**: [`HeaderBrandProps`](HeaderBrandProps.md)

Defined in: [src/components/header/Header.tsx:158](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L158)

Brand/logo block options.

***

### layout?

> `optional` **layout**: [`HeaderLayoutProps`](HeaderLayoutProps.md)

Defined in: [src/components/header/Header.tsx:164](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L164)

Optional visual layout overrides.

***

### navigation

> **navigation**: [`HeaderNavigationProps`](HeaderNavigationProps.md)\<`P`\>

Defined in: [src/components/header/Header.tsx:162](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L162)

Menu data and behavior.

***

### routing

> **routing**: [`HeaderRoutingProps`](HeaderRoutingProps.md)

Defined in: [src/components/header/Header.tsx:160](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L160)

Breadcrumb route and link behavior.
