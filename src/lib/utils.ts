export function camelCase(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}