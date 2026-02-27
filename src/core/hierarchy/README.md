# Hierarchy

Typed hierarchy model plus runtime validation and transformation helpers.

## Exports

- `hierarchyTypes`: strongly-typed hierarchy relations/tree definitions.
- `hierarchyErrorShape`: shared issue/error shape for diagnostics.
- `defineHierarchyModel`: identity helper for preserving inference in model literals.
- `resolver`: runtime validation (parent integrity, cycles, shape checks).
- `convertToD3Stratify`: hierarchy -> d3 stratify-compatible data.
- `sortD3Stratify`: deterministic ordering of d3 stratify data.
- `buildTreeFromStratify`: stratified data -> nested tree.

## Typical flow

1. Define model with `defineHierarchyModel`.
2. Validate with `resolver`.
3. Convert + sort for tree rendering or menu/content builders.
