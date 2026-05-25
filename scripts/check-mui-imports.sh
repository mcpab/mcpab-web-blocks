#!/usr/bin/env bash
set -euo pipefail

matches="$(
  rg --glob '!**/*.md' \
    "from ['\"](@mui/material|@mui/icons-material)['\"]" \
    src packages || true
)"

if [[ -n "$matches" ]]; then
  printf '%s\n' "Disallowed MUI barrel imports found:"
  printf '%s\n' "$matches"
  printf '%s\n' "Use direct imports like @mui/material/Button or @mui/icons-material/Home."
  exit 1
fi
