[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / VideoModalProps

# Type Alias: VideoModalProps

> **VideoModalProps** = `object`

Defined in: [src/components/media/VideoModal.tsx:46](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L46)

Props for [VideoModal](../functions/VideoModal.md).

## Properties

### align?

> `optional` **align**: `"flex-start"` \| `"center"` \| `"flex-end"`

Defined in: [src/components/media/VideoModal.tsx:63](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L63)

Default trigger alignment.

#### Default

```ts
'flex-end'
```

***

### avatarSrc?

> `optional` **avatarSrc**: `string` \| [`StaticImageDataLike`](../interfaces/StaticImageDataLike.md)

Defined in: [src/components/media/VideoModal.tsx:59](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L59)

Default trigger: avatar image (string URL or static import).

***

### buttonLabel?

> `optional` **buttonLabel**: `string`

Defined in: [src/components/media/VideoModal.tsx:61](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L61)

Default trigger: button label.

#### Default

```ts
"Learn More"
```

***

### modalSx?

> `optional` **modalSx**: `SxProps`\<`Theme`\>

Defined in: [src/components/media/VideoModal.tsx:68](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L68)

Style overrides for the modal surface.

***

### src?

> `optional` **src**: `string`

Defined in: [src/components/media/VideoModal.tsx:50](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L50)

Full iframe `src` (e.g., Vimeo or a YouTube URL with params).

***

### title?

> `optional` **title**: `string`

Defined in: [src/components/media/VideoModal.tsx:53](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L53)

Title for the modal header/iframe accessibility.

***

### trigger?

> `optional` **trigger**: `React.ReactNode`

Defined in: [src/components/media/VideoModal.tsx:56](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L56)

Custom trigger; if omitted, a default Avatar + Button is rendered.

***

### videoId?

> `optional` **videoId**: `string`

Defined in: [src/components/media/VideoModal.tsx:48](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L48)

YouTube video ID, e.g. `dQw4w9WgXcQ`. If provided, `src` is ignored.

***

### widthPercent?

> `optional` **widthPercent**: `number`

Defined in: [src/components/media/VideoModal.tsx:66](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/media/VideoModal.tsx#L66)

Modal width in %, clamped 40–100.

#### Default

```ts
80
```
