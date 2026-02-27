[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / defaultRendersRegistry

# Variable: defaultRendersRegistry

> `const` **defaultRendersRegistry**: `object`

Defined in: [src/components/content/textNodeRenderers/defaultTextPolicyRegister.ts:45](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/content/textNodeRenderers/defaultTextPolicyRegister.ts#L45)

Default renderer registry — the set of renderers available to every
`TextDrawer` out of the box.

## Type Declaration

### labelOnly

> `readonly` **labelOnly**: [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<\{ `sx`: `SxProps`\<`Theme`\> \| `undefined`; `title`: `string`; \}\>

Title-only label with no body content. Supports `sx`.

### linkedLabel

> `readonly` **linkedLabel**: [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<\{ `href`: `string`; `sx`: `SxProps`\<`Theme`\> \| `undefined`; `title`: `string`; \}\>

Clickable link leaf node.  Requires `href` in the payload; falls back to `'#'`
if missing.  Supports `sx`.

### simpleText

> `readonly` **simpleText**: `object`

Bare narrative text. Uses `content`; falls back to `title` when absent. Supports `sx`.

#### simpleText.props()

> `readonly` **props**: (`__namedParameters`) => `object`

##### Parameters

###### \_\_namedParameters

[`TextPolicyProps`](../type-aliases/TextPolicyProps.md)

##### Returns

`object`

###### sx

> **sx**: `SxProps`\<`Theme`\> \| `undefined` = `textDrawerElementUI.sx`

###### text

> **text**: `string`

#### simpleText.renderer()

> `readonly` **renderer**: (`__namedParameters`) => `Element` = `SimpleText`

Leaf renderer — displays a single block of narrative text.

##### Parameters

###### \_\_namedParameters

`SimpleTextProps`

##### Returns

`Element`

##### Remarks

Renders a MUI `Typography` with `variant="narrative"`.  No heading, no
label — just prose.  Suitable for answer text in FAQ patterns or any node
where the content speaks for itself without a separate title row.

Registry key: `"simpleText"` | Type: `"plainText"`

#### simpleText.type

> `readonly` **type**: `"plainText"` = `'plainText'`

### titleAndSubDepth

> `readonly` **titleAndSubDepth**: [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<\{ `depth`: `number`; `indicator`: `ReactNode`; `onClick`: () => `void`; `subtitle`: `string` \| `undefined`; `title`: `string`; \}\>

Collapsible section header — depth-aware heading size.
Renders `SubsectionTitleLabel` (h3) at depth 0 and `SubsubsectionTitleLabel` (h4)
at depth > 0.  Prefer this over `titleAndSubStd` for sections that may be nested.

### titleAndSubStd

> `readonly` **titleAndSubStd**: [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<\{ `indicator`: `ReactNode`; `onClick`: () => `void`; `subtitle`: `string` \| `undefined`; `title`: `string`; \}\>

Collapsible section header — fixed heading size (h3 / `SubsectionTitle`).
Use when the section is always at the top level and heading size must not vary.

### titledText

> `readonly` **titledText**: [`RegistryEntry`](../type-aliases/RegistryEntry.md)\<\{ `subtitle`: `string` \| `undefined`; `sx`: `SxProps`\<`Theme`\> \| `undefined`; `text`: `string`; `title`: `string`; \}\>

Label + optional subtitle + body paragraph. Uses `content`; falls back to `title`. Supports `sx`.

## Remarks

Each key is a `renderer` value that can appear in a `TextDrawerElement`
payload.  The registry is passed to `TextDrawer_Client` via
the render context's `rendersRegistry` field.

## Available renderers

| Key | Type | Component | Description |
|---|---|---|---|
| `simpleText` | `plainText` | `SimpleText` | Bare narrative text; uses `content` or falls back to `title`. |
| `titledText` | `paragraph` | `TitledText` | Label + optional subtitle + body text. |
| `labelOnly` | `plainText` | `LabelOnly` | Title rendered as a non-link label with no body. |
| `titleAndSubStd` | `section` | `TitleAndSubStd` | Collapsible section header at a fixed size. |
| `titleAndSubDepth` | `section` | `TitleAndSubDepth` | Collapsible section header that shrinks from h3→h4 at depth > 0. |
| `linkedLabel` | `plainText` | `LinkedLabel` | Clickable MUI link; requires `href` in the payload. |

All entries are wrapped in [defineEntry](../functions/defineEntry.md) (except `simpleText` which is
inlined as a plain object — both approaches are valid) to ensure that the
`props` return shape is validated against the renderer's prop type at
compile time.

## Example

```ts
// Using the default registry (automatic — no action needed)
<TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />

// Referencing the type for payload type-checking:
const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
```
