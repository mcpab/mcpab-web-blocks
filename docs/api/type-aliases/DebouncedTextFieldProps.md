[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DebouncedTextFieldProps

# Type Alias: DebouncedTextFieldProps

> **DebouncedTextFieldProps** = `Omit`\<[`TextFieldProps`](https://mui.com/material-ui/api/text-field/), `"onChange"` \| `"value"`\> & `object`

Defined in: [src/components/inputs/DebouncedTextField.tsx:12](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/inputs/DebouncedTextField.tsx#L12)

Props for [DebouncedTextField](../variables/DebouncedTextField.md).

Extends MUI `TextFieldProps` and adds delayed value notifications.

## Type Declaration

### debounceMs?

> `optional` **debounceMs**: `number`

Delay in milliseconds before invoking DebouncedTextFieldProps.onDebouncedChange.

#### Default Value

```ts
500
```

### defaultValue?

> `optional` **defaultValue**: `string`

Initial input value for uncontrolled mode.

### flushOnBlur?

> `optional` **flushOnBlur**: `boolean`

Emits latest value on blur when it differs from the last debounced emission.

#### Default Value

```ts
true
```

### onChange()?

> `optional` **onChange**: (`e`) => `void`

Immediate change handler forwarded from the native input event.

#### Parameters

##### e

`React.ChangeEvent`\<`HTMLInputElement` \| `HTMLTextAreaElement`\>

#### Returns

`void`

### onDebouncedChange()?

> `optional` **onDebouncedChange**: (`value`) => `void`

Called after the user stops typing for DebouncedTextFieldProps.debounceMs.

#### Parameters

##### value

`string`

#### Returns

`void`

### value?

> `optional` **value**: `string`

Controlled input value.

When provided, the component behaves as a controlled input.
