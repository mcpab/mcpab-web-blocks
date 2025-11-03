/** Convert `kebab-case` to `Title Case`. */

/** Capitalize each word unless it looks like an email. */
export function toTitleCase(str: string): string {
  if (str.includes('@')) return str; // keep emails intact
  return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
