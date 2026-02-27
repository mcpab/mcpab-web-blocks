/** Convert `kebab-case` to `Title Case`. */

/**
 * Capitalize each word boundary unless the value looks like an email address.
 *
 * @remarks
 * This uppercases initial letters but does not lowercase the rest of each word.
 */
export function toTitleCase(str: string): string {
  if (str.includes('@')) return str; // keep emails intact
  return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
