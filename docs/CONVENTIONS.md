# Conventions

## Imports

Never import MUI from barrels.

BAD:
```ts
import { Box } from "@mui/material"

import Box from "@mui/material/Box"
```

Typing
Avoid any.
Prefer explicit generics.
Preserve literal inference.
Prefer narrow utility types.

Patching
Prefer extending existing abstractions.
Avoid introducing parallel systems.
Do not rewrite stable code unnecessarily.

React
Prefer server components.
Do not add use client unless required.
Keep client boundaries minimal.

Errors
Prefer diagnostics aggregation.
Avoid throwing for recoverable structural issues.

Naming
Prefer long descriptive names.
Comments should explain WHY, not WHAT.

