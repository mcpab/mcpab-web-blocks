[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / LinkTypeComponent

# Type Alias: LinkTypeComponent

> **LinkTypeComponent** = `React.ComponentType`\<`React.ComponentPropsWithoutRef`\<`"a"`\>\> \| `React.ForwardRefExoticComponent`\<`React.ComponentPropsWithoutRef`\<`"a"`\> & `React.RefAttributes`\<`HTMLAnchorElement`\>\>

Defined in: [src/core/link/link-types.tsx:9](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/link/link-types.tsx#L9)

Framework-agnostic link component contract.

Uses the anchor element prop surface so adapters can map to
framework-specific link primitives (e.g. Next.js Link wrappers).
