[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DynamicTransitionProps

# Type Alias: DynamicTransitionProps

> **DynamicTransitionProps** = `object`

Defined in: [src/components/banner/DynamicTransition.tsx:8](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L8)

Props for [DynamicTransition](../variables/DynamicTransition.md).

## Properties

### boxProps?

> `optional` **boxProps**: `BoxProps`

Defined in: [src/components/banner/DynamicTransition.tsx:18](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L18)

Props forwarded to the root `Box` wrapper.

***

### frames

> **frames**: `React.ReactNode`[]

Defined in: [src/components/banner/DynamicTransition.tsx:10](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L10)

Ordered list of React nodes to cycle through as slides.

***

### interval?

> `optional` **interval**: `number`

Defined in: [src/components/banner/DynamicTransition.tsx:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L12)

Time each slide is fully visible, in milliseconds.

#### Default Value

```ts
2000
```

***

### startIndex?

> `optional` **startIndex**: `number`

Defined in: [src/components/banner/DynamicTransition.tsx:16](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L16)

Index of the slide shown first. Clamped to valid range.

#### Default Value

```ts
0
```

***

### transitionDuration?

> `optional` **transitionDuration**: `number`

Defined in: [src/components/banner/DynamicTransition.tsx:14](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/banner/DynamicTransition.tsx#L14)

Crossfade duration in milliseconds.

#### Default Value

```ts
1000
```
