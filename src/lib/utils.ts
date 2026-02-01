export function camelCase(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}


export function safeTitleCase(label: string): string {
  const trimmed = label.trim();
  if (!trimmed) return label;

  // Bail out if it looks technical or intentional
  if (shouldSkipCasing(trimmed)) {
    return label;
  }

  return trimmed.replace(/\b[a-z][a-z']*\b/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

function shouldSkipCasing(str: string): boolean {
  // Contains digits
  if (/\d/.test(str)) return true;

  // Contains technical symbols
  if (/[\/._+:#@\\\-]/.test(str)) return true;

  // Looks like an acronym or mixed casing already
  if (/[A-Z]{2,}/.test(str)) return true;
  if (/[a-z][A-Z]/.test(str)) return true;

  // Non-ASCII letters (likely i18n)
  if (/[^\x00-\x7F]/.test(str)) return true;

  return false;
}