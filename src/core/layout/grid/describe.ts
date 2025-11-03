// src/core/layout/grid/describe.ts
export const describeSplit = (share: number, total = 12) =>
  `${Math.round((share / total) * 100)}% width on desktop, stacked on mobile`;
