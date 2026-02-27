[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / hierarchyToDrawerInput

# Function: hierarchyToDrawerInput()

> **hierarchyToDrawerInput**\<`P`\>(`__namedParameters`): [`HierachyToDrawerPropsReturn`](../type-aliases/HierachyToDrawerPropsReturn.md)

Defined in: [src/components/menus/drawer/hierarchyToDrawerInput.tsx:54](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/drawer/hierarchyToDrawerInput.tsx#L54)

Converts a typed hierarchy tree into the prop shape expected by [DrawerMenu](DrawerMenu.md).

Validates the hierarchy and flattens it into a stratified tree. Returns `ok: false`
with a list of [HierarchyIssue](../type-aliases/HierarchyIssue.md)s if validation fails.

## Type Parameters

### P

`P` *extends* [`PayloadMap`](../type-aliases/PayloadMap.md)\<[`MenuTreeElement`](../type-aliases/MenuTreeElement.md)\>

## Parameters

### \_\_namedParameters

[`HierachyToDrawerinputProps`](../type-aliases/HierachyToDrawerinputProps.md)\<`P`\>

## Returns

[`HierachyToDrawerPropsReturn`](../type-aliases/HierachyToDrawerPropsReturn.md)

## Example

```tsx
const result = hierarchyToDrawerInput({ hierarchy, overrides });
if (!result.ok) {
  console.error(result.issues);
  return null;
}
return <DrawerMenu {...result} selector={(id) => id === currentPageId} />; 
```
