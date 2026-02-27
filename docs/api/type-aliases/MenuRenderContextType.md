[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / MenuRenderContextType

# Type Alias: MenuRenderContextType

> **MenuRenderContextType** = `object`

Defined in: [src/components/menus/MenuRenderContext.ts:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuRenderContext.ts#L13)

Shared rendering configuration passed down through a menu tree.

Provides the [RowPolicy](RowPolicy.md) (per-row styling), the [MegaMenuPolicy](MegaMenuPolicy.md)
(mega menu panel layout), and the link component used for navigation items.
Set once at the top of each menu variant (DrawerMenu, DropDown) and consumed
by every element and label component below it.

## Properties

### linkLikeComp

> **linkLikeComp**: [`LinkTypeComponent`](LinkTypeComponent.md)

Defined in: [src/components/menus/MenuRenderContext.ts:15](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuRenderContext.ts#L15)

Component used to render navigation links (e.g. Next.js `Link`).

***

### megaMenuPolicy?

> `optional` **megaMenuPolicy**: [`MegaMenuPolicy`](MegaMenuPolicy.md)

Defined in: [src/components/menus/MenuRenderContext.ts:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuRenderContext.ts#L19)

Layout policy for the mega menu panel (dropdown only).

***

### rowPolicy

> **rowPolicy**: [`RowPolicy`](RowPolicy.md)

Defined in: [src/components/menus/MenuRenderContext.ts:17](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/MenuRenderContext.ts#L17)

Determines visual styling for each row based on depth and selection state.
