[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / FilterTypesInRegistry

# Type Alias: FilterTypesInRegistry\<T, R\>

> **FilterTypesInRegistry**\<`T`, `R`\> = `{ [K in keyof R]: R[K]["type"] extends T ? K : never }`\[keyof `R`\]

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:144](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L144)

Extracts the subset of renderer keys in `R` whose `type` matches `T`.

## Type Parameters

### T

`T` *extends* [`TextTypes`](TextTypes.md)

The `TextTypes` value to filter by.

### R

`R` *extends* [`Registry`](Registry.md)

The registry to search.

## Example

```ts
type SectionRenderers = FilterTypesInRegistry<'section', DefaultRendersRegistry>;
// → 'titleAndSubStd' | 'titleAndSubDepth'
```
