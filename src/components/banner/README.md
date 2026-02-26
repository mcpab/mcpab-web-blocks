# Banner

Hero / banner building blocks for full-bleed page sections. Two high-level variants share the same `ImageComponent` prop API and can be mixed freely on a page.

---

## Variants

### `BannerCarousel`

A hero band whose background auto-advances through a sequence of images with a crossfade transition. Wraps `Section` → `BlockCarousel` → `DynamicTransition`.

```tsx
import { BannerCarousel } from 'src/components/banner';

<BannerCarousel
  images={{
    images: [
      { image: slide1, objectPosition: 'center top' },
      { image: slide2, transform: 'scale(1.05)' },
    ],
    interval: 6000,
    transitionDuration: 900,
    overlayColor: 'rgba(0,0,0,0.35)',
  }}
  size="lg"
  ImageComponent={Image}
>
  <MainTitle blocks={[{ title: 'Welcome' }, { title: 'Subtitle', type: 'secondary' }]} />
</BannerCarousel>
```

### `BannerStatic`

A hero band with a single fixed background image. Simpler and lighter than the carousel variant.

```tsx
import { BannerStatic } from 'src/components/banner';

<BannerStatic
  image={{ src: hero, overlayColor: 'rgba(0,0,0,0.4)', priority: true }}
  size="md"
  ImageComponent={Image}
>
  <MainTitle blocks={[{ title: 'Our story' }]} />
</BannerStatic>
```

---

## Foreground content — `MainTitle`

A vertical stack of title blocks. Each block is either a `PageTitle` (primary, h1-level) or a `SectionTitle` (secondary, h2-level). String content is auto-capitalised by default.

```tsx
<MainTitle
  blocks={[
    { title: 'Main headline', type: 'primary' },
    { title: 'Supporting line', type: 'secondary' },
  ]}
  autoCapitalize   // default: true
/>
```

`MainTitle` is independent of the banner components — it can be used in any context that needs a structured heading block.

---

## Primitives

These are used internally by the high-level variants. Import them directly only when you need to compose a custom layout.

### `BlockCarousel`

Full-bleed background carousel without the `Section` wrapper. Renders three CSS grid layers: background slides → click shield → foreground `Container`.

```tsx
<BlockCarousel
  config={{ images, interval: 5000, overlayColor: 'rgba(0,0,0,0.2)' }}
  ImageComponent={Image}
  rootProps={{ sx: { minHeight: 400 } }}
>
  {children}
</BlockCarousel>
```

### `DynamicTransition`

Client-only crossfade engine. Accepts any array of React nodes as `frames`. Handles 0-frame (null), 1-frame (static), and n-frame (timed crossfade) cases. The timer period is `interval + transitionDuration` ms.

```tsx
<DynamicTransition
  frames={backgroundSlides}
  interval={5000}
  transitionDuration={900}
/>
```

---

## Band height — `size`

Both `BannerCarousel` and `BannerStatic` accept a `size` prop that maps to band height via `sectionTokens`. Common values:

| Value | Typical height |
|-------|---------------|
| `'micro'` | small (default) |
| `'sm'` | small-medium |
| `'md'` | medium |
| `'lg'` | large |
| `'xl'` | extra large |

---

## Timing — carousel config

| Field | Default | Description |
|-------|---------|-------------|
| `interval` | 5000 ms | How long each slide is fully visible. |
| `transitionDuration` | 900 ms | Duration of the crossfade. |
| `overlayColor` | `'rgba(0,0,0,0.2)'` | Tint applied over every image for text legibility. |
| `preloadFirst` | 2 | Number of slides marked `priority` for eager image loading. |

> The actual period between slide changes is `interval + transitionDuration`.

---

## File map

```
banner/
├── index.ts               — public exports and @packageDocumentation
├── BannerCarousel.tsx     — hero band with animated carousel background
├── BannerStatic.tsx       — hero band with single static background image
├── BlockCarousel.tsx      — carousel primitive (grid-stacked layers)
├── DynamicTransition.tsx  — client-side crossfade engine
└── MainTitle.tsx          — multi-block title stack (primary / secondary)
```
