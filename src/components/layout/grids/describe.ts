// src/layout/grid/describe.ts
import { describeSplit } from '../../../core/layout/grid';
import type { Size } from  './types'

export function describeRatio(size: Size): string {
  return describeSplit(size.md, 12);
}
