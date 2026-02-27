[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / HierachyToDrawerinputProps

# Type Alias: HierachyToDrawerinputProps\<P\>

> **HierachyToDrawerinputProps**\<`P`\> = `object`

Defined in: [src/components/menus/drawer/hierarchyToDrawerInput.tsx:13](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/hierarchyToDrawerInput.tsx#L13)

Input shape for [hierarchyToDrawerInput](../functions/hierarchyToDrawerInput.md).

## Type Parameters

### P

`P` *extends* [`PayloadMap`](PayloadMap.md)\<[`MenuTreeElement`](MenuTreeElement.md)\>

## Properties

### hierarchy

> **hierarchy**: [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTreeElement`](RootTreeElement.md)\>

Defined in: [src/components/menus/drawer/hierarchyToDrawerInput.tsx:15](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/hierarchyToDrawerInput.tsx#L15)

Typed hierarchy tree defining the menu structure.

***

### overrides

> **overrides**: [`HierarchyTreeOverrides`](HierarchyTreeOverrides.md)\<`P`, [`HierarchyTree`](HierarchyTree.md)\<`P`, [`RootTreeElement`](RootTreeElement.md)\>, [`RootOverridesUI`](RootOverridesUI.md), [`MenuTreeElementUI`](MenuTreeElementUI.md)\>

Defined in: [src/components/menus/drawer/hierarchyToDrawerInput.tsx:17](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/hierarchyToDrawerInput.tsx#L17)

Per-node and root UI overrides (link component, dividers, display flags, etc.).
