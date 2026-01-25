# Hierarchy core

Types + runtime utilities for a parent-relation hierarchy.

- `hierarchyTypes.ts`: compile-time model types (`HierarchyRelations`, `HierarchyTree`, overrides)
- `resolver.ts`: runtime validation (missing parents, invalid parents, cycles)
- `d3/*.ts`: conversion to/from `d3-hierarchy` (`stratify`, sorting, materializing children maps)

See: ../../../docs/core/hierarchy.md
