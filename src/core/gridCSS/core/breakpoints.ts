
/**
 * Standard responsive breakpoint names
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/**
 * Complete breakpoint record with all breakpoints required
 */

export type BPs<T> = Record<Breakpoint, T>;
/**
 * Partial breakpoint record with only xs required
 */

export type PartialBps<T> = { xs: T; } & Partial<Record<Exclude<Breakpoint, 'xs'>, T>>;
