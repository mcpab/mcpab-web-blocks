# @mcpab/web-blocks

Reusable React + MUI blocks, navigation primitives, and hierarchy utilities.

## Install

```bash
npm install @mcpab/web-blocks
```

Peer dependencies expected by this package:

- `react`
- `react-dom`
- `@mui/material`
- `@mui/icons-material`

## Quick Start

```tsx
import { BannerStatic, MainTitle, DrawerMenu, hierarchyToDrawerInput } from '@mcpab/web-blocks';
```

## Package Layout

- `src/components`: UI blocks (banner, buttons, menus, layout, content, media, typography)
- `src/core`: framework-agnostic types and adapters (hierarchy, image/link/script abstractions)
- `src/design`: design tokens and layout helpers
- `src/lib`: shared helpers (text transforms, icon picker, utility functions)

## Development

```bash
npm run typecheck
npm run build
npm run docs
```

Docs output is generated to `docs/api`.

## Build Output

- ESM: `dist/index.mjs`
- CJS: `dist/index.cjs`
- Types entry: `src/index.ts` (source types)

## Notes

- Prefer importing from the package root (`@mcpab/web-blocks`) for stable APIs.
- Subpath imports are available through the barrel files under `src/` if needed.
