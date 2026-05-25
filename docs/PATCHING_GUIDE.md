
---

# PATCHING_GUIDE.md (VERY IMPORTANT)

This is the missing piece in most repos.

This teaches agents HOW to evolve the package safely.

Example:

```md
# Patching Guide

This package is considered stable.

Most work should be incremental.

## Preferred patch strategy

1. Identify the existing layer.
2. Extend current abstractions first.
3. Preserve API compatibility.
4. Add types before implementation.
5. Avoid architectural rewrites.

---

## When adding features

Prefer:
- policy extensions
- configuration additions
- transform composition
- optional overrides

Avoid:
- replacing pipelines
- introducing duplicate abstractions
- bypassing normalization stages

---

## Safe extension points

Examples:
- policy registries
- transform stages
- renderer registries
- override systems

---

## High-risk modifications

Changes to these areas require extra caution:
- ID typing
- breakpoint propagation
- transform ordering
- SSR/client boundaries
- public exports
- normalization logic

---

## Testing expectations

When patching:
- preserve existing tests
- add focused regression tests
- avoid snapshot-only coverage

