# Source Layout

This folder contains the published TypeScript source for `@mcpab/web-blocks`.

## Top-level modules

- `components`: reusable visual components and composite page blocks.
- `core`: domain model + framework abstractions (hierarchy, links, scripts, images).
- `design`: design tokens and section sizing helpers.
- `lib`: cross-cutting utilities (text transforms, icon helpers, misc utils).

## Conventions

- Every public folder has an `index.ts` barrel for stable imports.
- Stories (`*.stories.tsx`) are for Ladle and are excluded from package builds.
- Tests are colocated in `__tests__` folders and excluded from publish output.
