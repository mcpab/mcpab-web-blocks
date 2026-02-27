[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / defineEntry

# Function: defineEntry()

> **defineEntry**\<`RP`\>(`e`): [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<`RP`\>

Defined in: [src/components/content/textNodeRenderers/rendersRegistryTypes.ts:182](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/rendersRegistryTypes.ts#L182)

Identity helper that forces TypeScript to infer `RendererProps` concretely
for a single registry entry, catching `props`/`renderer` mismatches that
`satisfies Registry` (which erases to `any`) would miss.

## Type Parameters

### RP

`RP`

## Parameters

### e

[`RegistryEntry`](../type-aliases/RegistryEntry.md)\<`RP`\>

## Returns

[`RegistryEntry`](../type-aliases/RegistryEntry.md)\<`RP`\>

## Remarks

Without this helper, `renderer: MyComponent` and `props: () => wrongShape`
would compile silently because `Registry` uses `RegistryEntry<any>`.
Wrapping each entry in `defineEntry({...})` gives TypeScript enough
information to infer `RP` and validate that `props` returns a type
assignable to `MyComponent`'s props.

## Example

```ts
titleAndSubStd: defineEntry({
  type: 'section',
  props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick }) => ({
    title: textDrawerElement.title,
    indicator: isOpen ? openIndicator : closeIndicator,
    onClick,
  }),
  renderer: TitleAndSubStd, // TS verifies the shape matches TitleAndSubStdProps
}),
```
