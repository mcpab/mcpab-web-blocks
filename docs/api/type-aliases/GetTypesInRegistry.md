[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / GetTypesInRegistry

# Type Alias: GetTypesInRegistry\<R\>

> **GetTypesInRegistry**\<`R`\> = `{ [K in keyof R]: R[K]["type"] }`\[keyof `R`\]

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:153](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L153)

Extracts the union of all `type` values present in registry `R`.

## Type Parameters

### R

`R` *extends* [`Registry`](Registry.md)

The registry to inspect.
