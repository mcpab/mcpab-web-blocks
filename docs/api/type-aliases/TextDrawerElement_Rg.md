[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TextDrawerElement\_Rg

# Type Alias: TextDrawerElement\_Rg\<R\>

> **TextDrawerElement\_Rg**\<`R`\> = `{ [K in keyof R]: { content?: string; href?: string; icon?: string; order?: number; renderer: K; subtitle?: string; title: string; type: R[K]["type"] } }`\[keyof `R`\]

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:105](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L105)

Derive a discriminated-union element type from a registry `R`.

## Type Parameters

### R

`R` *extends* [`Registry`](Registry.md)

The concrete registry (e.g. `DefaultRendersRegistry`).

## Remarks

Distributes over all keys `K` in `R` and produces a union where each
member has `renderer: K` and `type: R[K]['type']` correlated at compile
time.  This prevents assigning a `renderer` key whose `type` disagrees with
the node's `type` field.

Use this when defining a payload map for `HierarchyTree`:

## Example

```ts
const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
```
