[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / Registry

# Type Alias: Registry

> **Registry** = `Record`\<`string`, [`RegistryEntry`](RegistryEntry.md)\<`any`\>\>

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:85](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L85)

A map of renderer keys to their [RegistryEntry](RegistryEntry.md) definitions.

## Remarks

`RegistryEntry<any>` is the correct existential type here — using `unknown`
breaks spread at the call sites in `TextElement` and `TextOpenClose`.
Type correctness per entry is guaranteed by [defineEntry](../functions/defineEntry.md).
