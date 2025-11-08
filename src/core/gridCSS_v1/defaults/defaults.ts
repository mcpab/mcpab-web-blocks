export const VIRTUAL_RESOLUTION = { vx: 48, vy: 48 } as const;

// literal types derived from the values
export type Vx = typeof VIRTUAL_RESOLUTION.vx; // 48
export type Vy = typeof VIRTUAL_RESOLUTION.vy; // 48