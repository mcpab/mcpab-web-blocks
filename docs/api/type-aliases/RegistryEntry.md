[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RegistryEntry

# Type Alias: RegistryEntry\<RendererProps\>

> **RegistryEntry**\<`RendererProps`\> = `object`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:62](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L62)

A single renderer entry in a [Registry](Registry.md).

## Remarks

The existential pattern here is intentional:
- `RendererProps` is the **only** generic — it ties `props` output to
  `renderer` input so TypeScript can catch mismatches.
- The `Registry` type erases `RendererProps` to `any` (existential) so that
  a heterogeneous map of entries can be stored.  Type safety is enforced
  **per entry** via the [defineEntry](../functions/defineEntry.md) helper, not at the map level.

## Type Parameters

### RendererProps

`RendererProps` *extends* `unknown`

The prop type of the associated React component.

## Properties

### props()

> **props**: (`props`) => `RendererProps`

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:72](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L72)

Pure factory that maps the comprehensive [TextPolicyProps](TextPolicyProps.md) onto the
narrower props expected by `renderer`.  Destructure only what is needed.

#### Parameters

##### props

[`TextPolicyProps`](TextPolicyProps.md)

#### Returns

`RendererProps`

***

### renderer

> **renderer**: `React.ComponentType`\<`RendererProps`\>

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:74](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L74)

The React component that receives the output of `props`.

***

### type

> **type**: [`TextTypes`](TextTypes.md)

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:67](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L67)

Semantic category; must match `TextDrawerElement.type` for payloads that
use this renderer key.
