[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / BreadMenuProps

# Type Alias: BreadMenuProps

> **BreadMenuProps** = `object`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L13)

Props for [BreadMenu](../functions/BreadMenu.md).

## Properties

### exclude?

> `optional` **exclude**: `string`[]

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L26)

Exclude these segments entirely (e.g., ['blog']).

***

### fontSize?

> `optional` **fontSize**: `string` \| `number`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L30)

Typography font size (applies via sx).

***

### hideRoot?

> `optional` **hideRoot**: `boolean`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:22](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L22)

Hide the “Home” root link.

#### Default Value

```ts
false
```

***

### linkComponent?

> `optional` **linkComponent**: [`LinkTypeComponent`](LinkTypeComponent.md)

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:20](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L20)

Optional custom link component (e.g., Next.js Link).

***

### maxItems?

> `optional` **maxItems**: `number`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:28](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L28)

Collapse long trails. See MUI Breadcrumbs `maxItems`.

***

### pathname?

> `optional` **pathname**: `string`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:18](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L18)

Optional explicit pathname (useful for stories and SSR).
Falls back to `window.location.pathname` when omitted.

***

### segmentLabels?

> `optional` **segmentLabels**: `Record`\<`string`, `string`\>

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L24)

Map segment -> label (e.g., { 'about-us': 'About Us' }).

***

### sx?

> `optional` **sx**: `SxProps`\<`Theme`\>

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L32)

Extra styles for the Breadcrumbs root.

***

### titleCase?

> `optional` **titleCase**: `boolean`

Defined in: [src/components/navigation/Breadcrumbs/BreadMenu.tsx:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/navigation/Breadcrumbs/BreadMenu.tsx#L34)

Capitalize segments (kebab-case → Title Case).

#### Default Value

```ts
true
```
