[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierachyToTextDrawerProps

# Type Alias: HierachyToTextDrawerProps\<P\>

> **HierachyToTextDrawerProps**\<`P`\> = `object`

Defined in: [src/components/content/hierarchyToTextDrawerProps.ts:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/hierarchyToTextDrawerProps.ts#L24)

Input props for [hierarchyToTextDrawerProps](../functions/hierarchyToTextDrawerProps.md).

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)\<[`TextDrawerElement`](TextDrawerElement.md)\>

The payload map literal type inferred from the `hierarchy`
  constant.  Must satisfy `PayloadMap<TextDrawerElement>`.

## Properties

### hierarchy

> **hierarchy**: [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTextElement`](RootTextElement.md)\>

Defined in: [src/components/content/hierarchyToTextDrawerProps.ts:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/hierarchyToTextDrawerProps.ts#L30)

Compile-time–validated tree literal.
Use `as const satisfies HierarchyTree<P, RootTextElement>` at the
definition site to get full TypeScript narrowing.

***

### overrides

> **overrides**: [`HierarchyTreeOverrides`](HierarchyTreeOverrides.md)\<`P`, [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTextElement`](RootTextElement.md)\>, [`RootTextElementUI`](RootTextElementUI.md), [`TextDrawerElementUI`](TextDrawerElementUI.md)\>

Defined in: [src/components/content/hierarchyToTextDrawerProps.ts:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/hierarchyToTextDrawerProps.ts#L36)

UI-only overrides keyed by node ID.
Each node's overrides are merged with its base payload at render time.
All node IDs in `overrides.nodes` must exist in `hierarchy.nodes`.
