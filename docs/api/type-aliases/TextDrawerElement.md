[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextDrawerElement

# Type Alias: TextDrawerElement

> **TextDrawerElement** = `object`

Defined in: [src/components/content/TextDrawerTypes.ts:17](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L17)

Serializable data for a single node in the text drawer tree.

## Remarks

`renderer` is a key into the active [Registry](Registry.md) and must match one of its
registered entries.  The fields consumed by each renderer vary — see
`textNodeRenderers/defaultTextPolicyRegister` for the built-in mapping.

`type` must agree with `renderer`'s declared `type` in the registry; the
`TextDrawerElement_Rg` utility type enforces this correlation at compile time
when building hierarchy payloads.

## Properties

### content?

> `optional` **content**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:36](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L36)

Body text used by content renderers (`simpleText`, `titledText`). Falls back to `title` when absent.

***

### href?

> `optional` **href**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:41](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L41)

Navigation target for link renderers (`linkedLabel`).
Falls back to `'#'` when the renderer is `linkedLabel` and this field is missing.

***

### icon?

> `optional` **icon**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:34](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L34)

Header icon identifier — reserved for future icon-picker integration.

***

### order?

> `optional` **order**: `number`

Defined in: [src/components/content/TextDrawerTypes.ts:43](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L43)

Relative sort order among siblings — lower numbers render first.

***

### renderer

> **renderer**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:24](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L24)

Registry key that selects the renderer and `type` for this node.
Must be a key of the active [Registry](Registry.md).

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:32](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L32)

Optional second line shown in header renderers (`titleAndSubStd`, `titleAndSubDepth`, `titledText`).

***

### title

> **title**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L19)

Primary label — shown in every renderer as the summary row or heading.

***

### type

> **type**: `string`

Defined in: [src/components/content/TextDrawerTypes.ts:30](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/TextDrawerTypes.ts#L30)

Semantic category that the chosen renderer belongs to.
Matches `RegistryEntry.type` for the corresponding `renderer` key.
Values: `'plainText'` | `'section'` | `'paragraph'`.
