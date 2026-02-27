[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RowPolicyProps

# Type Alias: RowPolicyProps

> **RowPolicyProps** = `object`

Defined in: [src/components/menus/RowPolicyTypes.ts:28](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L28)

Inputs passed to a [RowPolicy](RowPolicy.md) function for a single menu node.
Conveys depth, data, open/selected states, and whether the node has children.

## Properties

### depth

> **depth**: `number`

Defined in: [src/components/menus/RowPolicyTypes.ts:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L30)

Zero-based nesting depth (0 = top-level bar or drawer root).

***

### hasChildren

> **hasChildren**: `boolean`

Defined in: [src/components/menus/RowPolicyTypes.ts:42](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L42)

Whether the node has at least one child.

***

### isAncestorSelected?

> `optional` **isAncestorSelected**: `boolean`

Defined in: [src/components/menus/RowPolicyTypes.ts:40](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L40)

Whether this node is an ancestor of the selected item.

***

### isOpen?

> `optional` **isOpen**: `boolean`

Defined in: [src/components/menus/RowPolicyTypes.ts:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L36)

Whether the node's children are currently visible (open).

***

### isSelected?

> `optional` **isSelected**: `boolean`

Defined in: [src/components/menus/RowPolicyTypes.ts:38](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L38)

Whether this node is the currently active/selected item.

***

### menuTreeElement

> **menuTreeElement**: [`MenuTreeElement`](MenuTreeElement.md)

Defined in: [src/components/menus/RowPolicyTypes.ts:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L32)

Data payload of the node.

***

### menuTreeElementUI

> **menuTreeElementUI**: [`MenuTreeElementUI`](MenuTreeElementUI.md) \| `undefined`

Defined in: [src/components/menus/RowPolicyTypes.ts:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L34)

UI overrides for the node, if any.
