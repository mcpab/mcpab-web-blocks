/** Generic responsive size map; caller decides breakpoints/keys */
export type Responsive<T extends string = string> = Partial<Record<T, number>>;
