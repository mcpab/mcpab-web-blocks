# Architecture

The package follows a layered architecture.

## Layer 1 — Domain

Pure TS types and contracts.

Responsibilities:
- schemas
- IDs
- structural typing
- validation contracts

Must NOT:
- import React
- import MUI
- contain rendering logic

---

## Layer 2 — Engine

Pure transformations.

Responsibilities:
- layout transforms
- normalization
- diagnostics
- coordinate computation

Must remain:
- deterministic
- SSR-safe
- side-effect free

---

## Layer 3 — Rendering

React/MUI rendering only.

Responsibilities:
- rendering
- styling
- interaction

Must NOT:
- contain layout computation logic
- mutate engine outputs

---

## Architectural invariants

- Rendering never computes layout.
- Engine never imports UI libraries.
- Domain never imports rendering.
- Diagnostics are aggregated, not thrown.
- Breakpoint logic stays centralized.