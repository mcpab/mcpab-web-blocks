[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HeaderResponsiveMenuProps

# Type Alias: HeaderResponsiveMenuProps

> **HeaderResponsiveMenuProps** = `object`

Defined in: [src/components/header/Header.tsx:42](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L42)

Responsive viewport settings used when `navigation.menuType` is omitted.

## Properties

### breakpoint?

> `optional` **breakpoint**: `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`

Defined in: [src/components/header/Header.tsx:44](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L44)

Breakpoint at and below which mobile behavior applies.

#### Default Value

```ts
'md'
```

***

### desktopType?

> `optional` **desktopType**: `"dropDown"`

Defined in: [src/components/header/Header.tsx:48](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L48)

Menu variant used for large viewports.

#### Default Value

```ts
'dropDown'
```

***

### mobileType?

> `optional` **mobileType**: `"drawer"`

Defined in: [src/components/header/Header.tsx:46](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L46)

Menu variant used for small viewports.

#### Default Value

```ts
'drawer'
```
