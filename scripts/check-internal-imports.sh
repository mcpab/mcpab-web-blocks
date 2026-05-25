#!/usr/bin/env bash
set -euo pipefail

matches="$(
  rg --glob '!**/*.md' \
    --glob '!src/index.ts' \
    --glob '!src/components/index.ts' \
    --glob '!src/core/index.ts' \
    --glob '!src/lib/index.ts' \
    --glob '!src/design/index.ts' \
    "from ['\"](src/index|src/(components|core|lib|design)|(\.\.?/)+(components|core|lib|design|menus|navigation|menus/(drawer|dropDown)|navigation/Breadcrumbs)(/index)?)[\"']" \
    src || true
)"

if [[ -n "$matches" ]]; then
  printf '%s\n' "Disallowed broad internal imports found:"
  printf '%s\n' "$matches"
  exit 1
fi
