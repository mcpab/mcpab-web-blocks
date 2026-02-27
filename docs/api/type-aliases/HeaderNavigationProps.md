[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HeaderNavigationProps

# Type Alias: HeaderNavigationProps\<P\>

> **HeaderNavigationProps**\<`P`\> = `object`

Defined in: [src/components/header/Header.tsx:118](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L118)

Menu data and behavior for [Header](../variables/Header.md).

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)\<[`MenuTreeElement`](MenuTreeElement.md)\>

## Properties

### drawerAnchor?

> `optional` **drawerAnchor**: [`HeaderDrawerAnchor`](HeaderDrawerAnchor.md)

Defined in: [src/components/header/Header.tsx:137](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L137)

Drawer anchor used only when `menuType="drawer"`.
Defaults to `'right'` when `menuPosition="right"`, otherwise `'left'`.

***

### hierarchy

> **hierarchy**: [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTreeElement`](RootTreeElement.md)\>

Defined in: [src/components/header/Header.tsx:139](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L139)

Typed hierarchy tree defining the menu structure.

***

### indent?

> `optional` **indent**: `number`

Defined in: [src/components/header/Header.tsx:150](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L150)

Drawer indentation step passed to `DrawerMenu`.

#### Default Value

```ts
2
```

***

### menuPosition?

> `optional` **menuPosition**: [`HeaderMenuPosition`](HeaderMenuPosition.md)

Defined in: [src/components/header/Header.tsx:132](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L132)

Where to place the menu in the header row.

#### Default Value

```ts
'right'
```

***

### menuType?

> `optional` **menuType**: `"dropDown"` \| `"drawer"`

Defined in: [src/components/header/Header.tsx:123](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L123)

Explicit menu flavor to render.
When omitted, `responsiveMenu` decides between mobile and desktop menu types.

***

### overrides

> **overrides**: [`HierarchyTreeOverrides`](HierarchyTreeOverrides.md)\<`P`, [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTreeElement`](RootTreeElement.md)\>, [`RootOverridesUI`](RootOverridesUI.md), [`MenuTreeElementUI`](MenuTreeElementUI.md)\>

Defined in: [src/components/header/Header.tsx:141](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L141)

Per-node and root UI overrides (link component, dividers, display flags, etc.).

***

### responsiveMenu?

> `optional` **responsiveMenu**: [`HeaderResponsiveMenuProps`](HeaderResponsiveMenuProps.md)

Defined in: [src/components/header/Header.tsx:128](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L128)

Responsive menu policy used only when `menuType` is omitted.

#### Default Value

```ts
{ breakpoint: 'md', mobileType: 'drawer', desktopType: 'dropDown' }
```

***

### selector

> **selector**: [`IsSelectedMenuElement`](IsSelectedMenuElement.md)

Defined in: [src/components/header/Header.tsx:148](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L148)

Active-item selector used to compute selected/ancestor-selected states.

***

### styles?

> `optional` **styles**: [`HeaderMenuStylesProps`](HeaderMenuStylesProps.md)

Defined in: [src/components/header/Header.tsx:130](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/header/Header.tsx#L130)

Visual `sx` passthrough for the rendered menu variant.
