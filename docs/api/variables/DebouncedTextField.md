[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DebouncedTextField

# Variable: DebouncedTextField

> `const` **DebouncedTextField**: `React.FC`\<[`DebouncedTextFieldProps`](../type-aliases/DebouncedTextFieldProps.md)\>

Defined in: [src/components/inputs/DebouncedTextField.tsx:53](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/inputs/DebouncedTextField.tsx#L53)

MUI `TextField` wrapper that supports debounced value callbacks.

## Remarks

- Supports controlled (`value`) and uncontrolled (`defaultValue`) modes.
- Respects IME composition and defers debounced emits until composition ends.
- Optionally flushes pending value on blur.
