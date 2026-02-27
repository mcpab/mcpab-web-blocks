[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextDrawerProps

# Type Alias: TextDrawerProps

> **TextDrawerProps** = `object`

Defined in: [src/components/content/TextDrawerTypes.ts:83](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L83)

Props for the public-facing `TextDrawer` component.

## Remarks

Obtain `treeFromRoot` by calling [hierarchyToTextDrawerProps](../functions/hierarchyToTextDrawerProps.md) with a
typed `HierarchyTree` literal.  The result is a pre-sorted `StratifyPayload`
ready to be passed directly here.

## Properties

### treeFromRoot

> **treeFromRoot**: [`StratifyPayload`](StratifyPayload.md)\<[`TextDrawerElement`](TextDrawerElement.md), [`TextDrawerElementUI`](TextDrawerElementUI.md)\>

Defined in: [src/components/content/TextDrawerTypes.ts:85](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L85)

Pre-built tree produced by [hierarchyToTextDrawerProps](../functions/hierarchyToTextDrawerProps.md).
