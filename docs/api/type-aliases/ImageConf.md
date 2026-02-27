[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ImageConf

# Type Alias: ImageConf

> **ImageConf** = `object`

Defined in: [src/components/layout/BackgroundBox.tsx:19](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L19)

Background image configuration for [BackgroundBox](../variables/BackgroundBox.md).

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string` \| `number`

Defined in: [src/components/layout/BackgroundBox.tsx:99](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L99)

Aspect ratio used by width-capped mode (`number` or CSS ratio string).

#### Default Value

```ts
inferred from static image dimensions, otherwise '16 / 9'
```

***

### mode?

> `optional` **mode**: `"cover"` \| `"contain"` \| `"scale-down"`

Defined in: [src/components/layout/BackgroundBox.tsx:28](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L28)

`object-fit` mode used in full-bleed rendering.

#### Default

```ts
'cover'
```

***

### objectPosition?

> `optional` **objectPosition**: `string`

Defined in: [src/components/layout/BackgroundBox.tsx:47](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L47)

CSS `object-position` used to place the image focal point.

#### Default

```ts
'50% 50%'
```

***

### opacity?

> `optional` **opacity**: `number`

Defined in: [src/components/layout/BackgroundBox.tsx:40](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L40)

Image opacity for full-bleed rendering.

#### Default

```ts
1
```

***

### overlayColor?

> `optional` **overlayColor**: `string`

Defined in: [src/components/layout/BackgroundBox.tsx:33](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L33)

Optional overlay color rendered between image and content.

***

### placeholder?

> `optional` **placeholder**: `"blur"` \| `"empty"`

Defined in: [src/components/layout/BackgroundBox.tsx:85](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L85)

Placeholder behavior while image loads.

#### Default Value

```ts
'blur' for static imports, otherwise 'empty'
```

***

### priority?

> `optional` **priority**: `boolean`

Defined in: [src/components/layout/BackgroundBox.tsx:71](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L71)

Enables priority loading for critical, above-the-fold images.

#### Default

```ts
false
```

***

### quality?

> `optional` **quality**: `number`

Defined in: [src/components/layout/BackgroundBox.tsx:78](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L78)

Image quality passed to the image component.

#### Default

```ts
70
```

***

### sizes?

> `optional` **sizes**: `string`

Defined in: [src/components/layout/BackgroundBox.tsx:64](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L64)

`sizes` hint forwarded to the image component.

#### Default Value

```ts
'100vw' in full-bleed mode
```

***

### src

> **src**: `string` \| [`StaticImageDataLike`](../interfaces/StaticImageDataLike.md)

Defined in: [src/components/layout/BackgroundBox.tsx:21](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L21)

Image source. Supports URL strings and static imports.

***

### transform?

> `optional` **transform**: `string`

Defined in: [src/components/layout/BackgroundBox.tsx:52](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L52)

CSS transform applied to the image element.

***

### unoptimized?

> `optional` **unoptimized**: `boolean`

Defined in: [src/components/layout/BackgroundBox.tsx:92](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L92)

Disables built-in image optimization when true.

#### Default

```ts
false
```

***

### width?

> `optional` **width**: `string`

Defined in: [src/components/layout/BackgroundBox.tsx:57](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/layout/BackgroundBox.tsx#L57)

Optional width constraint that enables width-capped mode.
