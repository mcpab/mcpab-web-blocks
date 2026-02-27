[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HeaderLayoutProps

# Type Alias: HeaderLayoutProps

> **HeaderLayoutProps** = `object`

Defined in: [src/components/header/Header.tsx:91](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L91)

Header layout options that do not affect menu data.

## Properties

### appBarSx?

> `optional` **appBarSx**: `SxProps`\<`Theme`\>

Defined in: [src/components/header/Header.tsx:100](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L100)

Optional `sx` overrides for the outer AppBar.

***

### responsiveBreadcrumbs?

> `optional` **responsiveBreadcrumbs**: [`HeaderResponsiveBreadcrumbsProps`](HeaderResponsiveBreadcrumbsProps.md)

Defined in: [src/components/header/Header.tsx:98](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L98)

Responsive breadcrumb behavior.
Defaults to hidden on mobile and visible on desktop.

***

### showBreadcrumbs?

> `optional` **showBreadcrumbs**: `boolean`

Defined in: [src/components/header/Header.tsx:93](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L93)

Show breadcrumbs in the middle slot.

#### Default Value

```ts
true
```

***

### toolbarSx?

> `optional` **toolbarSx**: `SxProps`\<`Theme`\>

Defined in: [src/components/header/Header.tsx:102](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L102)

Optional `sx` overrides for the inner Toolbar.
