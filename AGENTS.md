# AGENTS.md

Before editing code, read:

- docs/AI_CONTEXT.md
- docs/ARCHITECTURE.md
- docs/CONVENTIONS.md
- docs/PATCHING_GUIDE.md

Do NOT modify code until you have summarized these files.

Rules:

- Preserve existing architecture.
- Prefer incremental patches over rewrites.
- Do not refactor unrelated files.
- Avoid introducing `any`.
- Preserve SSR/client boundaries.
- Prefer explicit types over inferred magic.
- Keep diagnostics and error aggregation patterns.
- Do not collapse architectural layers.
- Keep rendering separate from pure computation.
- Keep public APIs backward compatible unless explicitly requested.