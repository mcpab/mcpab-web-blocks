[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / Payload\_Rg

# Type Alias: Payload\_Rg\<R\>

> **Payload\_Rg**\<`R`\> = `Record`\<`string`, [`TextDrawerElement_Rg`](TextDrawerElement_Rg.md)\<`R`\>\>

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:127](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L127)

A record of named payloads where every value is a valid element for registry `R`.

## Type Parameters

### R

`R` *extends* [`Registry`](Registry.md)

The concrete registry (e.g. `DefaultRendersRegistry`).

## Remarks

Convenience alias for `Record<string, TextDrawerElement_Rg<R>>` — use it
as the `satisfies` target when declaring a hierarchy's payload constants.
