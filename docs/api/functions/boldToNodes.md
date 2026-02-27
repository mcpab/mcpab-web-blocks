[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / boldToNodes

# Function: boldToNodes()

> **boldToNodes**(`input`, `keyScope`): `ReactNode`[]

Defined in: [src/lib/text/inline.tsx:35](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/lib/text/inline.tsx#L35)

Convert a string containing **bold** markers into React nodes.

A simple utility for processing text with bold formatting. Useful when you only
need bold text support without full markdown parsing.

## Parameters

### input

`string`

The string containing **bold** markers

### keyScope

`string` = `'b'`

Prefix for React keys to avoid conflicts (default: 'b')

## Returns

`ReactNode`[]

Array of React nodes with <strong> elements for bold text

## Examples

```ts
const nodes = boldToNodes("Welcome to **our platform**!");
// Returns: ["Welcome to ", <strong key="b-0">our platform</strong>, "!"]
```

```ts
// In a component
function Title({ text }: { text: string }) {
  return <Typography variant="h4">{boldToNodes(text, 'title')}</Typography>;
}
```
