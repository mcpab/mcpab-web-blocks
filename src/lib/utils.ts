export function camelCase(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
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
  if (/\d/.test(str)) return true;

  if (/[/._+:#@\\-]/.test(str)) return true;

  if (/[A-Z]{2,}/.test(str)) return true;
  if (/[a-z][A-Z]/.test(str)) return true;

  if ([...str].some((char) => char.charCodeAt(0) > 127)) return true;

  return false;
}
