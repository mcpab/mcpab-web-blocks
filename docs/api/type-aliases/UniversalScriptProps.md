[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / UniversalScriptProps

# Type Alias: UniversalScriptProps

> **UniversalScriptProps** = `UniversalScriptBaseProps` & `object` \| `UniversalScriptBaseProps` & `object` \| `UniversalScriptBaseProps` & `object`

Defined in: [src/core/script/script-types.tsx:38](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/core/script/script-types.tsx#L38)

Source vs inline is modeled as a union so callers can't pass both.
- External script: `src`
- Inline script: `dangerouslySetInnerHTML` OR `children` (string)
