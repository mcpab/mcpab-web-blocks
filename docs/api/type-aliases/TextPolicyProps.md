[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextPolicyProps

# Type Alias: TextPolicyProps

> **TextPolicyProps** = `object`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:26](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L26)

Fixed input type for every renderer's `props` factory function.

## Remarks

All available context is passed in one go so that each registry entry can
destructure only what it needs without having to declare a narrower input
type.  The **output** is what varies per entry (captured by `RendererProps`
in [RegistryEntry](RegistryEntry.md)); the input is always this type.

Keeping the input fixed (not generic) avoids the "unknown at call site"
problem that would arise if the input type were also a type parameter.

## Properties

### closeIndicator

> **closeIndicator**: `React.ReactNode`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:40](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L40)

React node to display when the section is collapsed (e.g. `<ExpandMore />`).

***

### depth

> **depth**: `number`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L32)

Zero-based nesting depth; passed to depth-aware renderers.

***

### hasChildren

> **hasChildren**: `boolean`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L36)

Whether the node has child nodes (always `true` for `section` renderers).

***

### isOpen

> **isOpen**: `boolean`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L34)

Whether the node is currently in the open/expanded state.

***

### onClick()

> **onClick**: () => `void`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:46](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L46)

Callback to toggle this node's collapsed/expanded state.
Must be wired to the `TreeTextStore` setter by the calling component.
Passed as a no-op for leaf nodes.

#### Returns

`void`

***

### openIndicator

> **openIndicator**: `React.ReactNode`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:38](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L38)

React node to display when the section is expanded (e.g. `<ExpandLess />`).

***

### textDrawerElement

> **textDrawerElement**: [`TextDrawerElement`](TextDrawerElement.md)

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:28](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L28)

The node's serialised data payload.

***

### textDrawerElementUI

> **textDrawerElementUI**: [`TextDrawerElementUI`](TextDrawerElementUI.md) \| `undefined`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L30)

Merged UI overrides for this node; `undefined` when none were provided.
