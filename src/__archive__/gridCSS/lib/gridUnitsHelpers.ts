/**
 * Regex-first approach:
 * - Accepts ONLY templates that are exactly one top-level repeat(...).
 * - Extracts the <track> part with a single regex.
 * - Verifies parentheses balance in the captured <track> (lightweight scan).
 * - Strips grid line names like [name] (simple regex).
 * - Falls back to implicitDefault otherwise.
 *
 * Caveats:
 * - This does not fully parse CSS; it’s a practical 95% solution.
 */
export function deriveAutoUnitFromTemplate(
  template: string,
  implicitDefault: string = "auto"
): { unit: string; isUniform: boolean; reason?: string } {

  const src = template.trim();

  if (!src) return { unit: implicitDefault, isUniform: false, reason: "empty" };

  // ^repeat(<count>, <track>)$ — anchored, case-insensitive, tolerant spacing
  // Group 1 = <count>, Group 2 = <track>
  const REPEAT_WHOLE = /^\s*repeat\s*\(\s*([^)]+?)\s*,\s*([\s\S]+)\)\s*$/i;
  const m = REPEAT_WHOLE.exec(src);
  if (!m) {
    return { unit: implicitDefault, isUniform: false, reason: "not-sole-repeat" };
  }

  const countPart = m[1].trim(); // allowed: 3, auto-fill, auto-fit, var(--n), etc. (we don't police it)
  let trackPart = m[2].trim();

  if (!trackPart) {
    return { unit: implicitDefault, isUniform: false, reason: "empty-track" };
  }

  // Quick parenthesis balance check for the track (so 'minmax(0, 1fr)' passes, etc.)
  if (!isBalancedParens(trackPart)) {
    return { unit: implicitDefault, isUniform: false, reason: "unbalanced-track-parens" };
  }

  // Strip grid line names like [name] that may appear at top level in track lists.
  // (Good enough in practice; line names rarely appear inside functional notations.)
  trackPart = trackPart.replace(/\[[^\]]*]/g, "").trim();
  if (!trackPart) {
    return { unit: implicitDefault, isUniform: false, reason: "track-only-line-names" };
  }

  return { unit: trackPart, isUniform: true };
}


/**
 * Info derived from a grid template track list (rows or columns).
 *
 * - unit: value to use for grid-auto-rows/columns
 * - isUniform: true only if the ENTIRE template is a single top-level repeat(count, track)
 * - explicitCount: number of explicit tracks declared by the template, if determinable
 * - explicitCountKnown: false if the count depends on auto-fill/auto-fit/var(...)
 * - reason: why we fell back / couldn't determine uniformity or count
 */
export type TemplateDeriveInfo = {
  unit: string;                 // implicit unit for grid-auto-*
  isUniform: boolean;           // sole, top-level repeat(...)
  explicitCount?: number;       // explicit tracks declared
  explicitCountKnown: boolean;  // whether explicitCount is reliable
  reason?: string;
};

export function deriveAutoUnitAndCountFromTemplate(
  template: string,
  implicitDefault: string = "auto"
): TemplateDeriveInfo {

  const src = template.trim();
  if (!src) {
    return {
      unit: implicitDefault,
      isUniform: false,
      explicitCountKnown: false,
      reason: "empty",
    };
  }

  // --- First: try the fast path (sole top-level repeat)
  const REPEAT_WHOLE = /^\s*repeat\s*\(\s*([^)]+?)\s*,\s*([\s\S]+)\)\s*$/i;
  const m = REPEAT_WHOLE.exec(src);
  if (m && isBalancedParens(src)) {
    const countPartRaw = m[1].trim();
    let trackPart = m[2].trim();
    trackPart = stripTopLevelLineNames(trackPart).trim();
    if (!trackPart) {
      return {
        unit: implicitDefault,
        isUniform: false,
        explicitCountKnown: false,
        reason: "track-only-line-names",
      };
    }

    // Count the tracks inside the repeat(...)'s track-list
    const inner = countTopLevelTracks(trackPart);
    // Can we determine the repeat count?
    const repeatCount = parseRepeatCount(countPartRaw);
    const countKnown = inner.known && repeatCount.known;

    return {
      unit: trackPart,
      isUniform: true,
      explicitCount: countKnown ? repeatCount.value! * inner.count : undefined,
      explicitCountKnown: countKnown,
      reason: countKnown ? undefined : "repeat-count-or-inner-unknown",
    };
  }

  // --- General path: count tracks across the whole template (mixed segments allowed)
  // If the template is NOT a sole repeat, we will NOT treat it as uniform; unit falls back.
  if (!isBalancedParens(src)) {
    return {
      unit: implicitDefault,
      isUniform: false,
      explicitCountKnown: false,
      reason: "unbalanced-parens",
    };
  }

  const withoutNames = stripTopLevelLineNames(src).trim();
  const counted = countTracksPossiblyWithRepeats(withoutNames);

  return {
    unit: implicitDefault,
    isUniform: false,
    explicitCount: counted.known ? counted.count : undefined,
    explicitCountKnown: counted.known,
    reason: counted.known ? "not-sole-repeat" : "contains-auto-fill/fit-or-var",
  };
}

/* -------------------------- helpers (internal) -------------------------- */

function isBalancedParens(s: string): boolean {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0;
}

/** Remove top-level line names like [foo]; leave anything inside parentheses alone. */
function stripTopLevelLineNames(input: string): string {
  let out = "";
  let depth = 0;
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (ch === "(") { depth++; out += ch; continue; }
    if (ch === ")") { depth = Math.max(0, depth - 1); out += ch; continue; }
    if (ch === "[" && depth === 0) {
      // skip until matching ]
      i++;
      while (i < input.length && input[i] !== "]") i++;
      // skip closing ] if present
      continue;
    }
    out += ch;
  }
  return out;
}

/** Parse repeat count; returns unknown for auto-fill/fit or anything non-integer. */
function parseRepeatCount(countSrc: string): { known: boolean; value?: number } {
  const s = countSrc.trim().toLowerCase();
  if (s === "auto-fill" || s === "auto-fit") return { known: false };
  // If it looks like an integer (possibly with CSS var or calc) we treat as unknown unless it’s a plain integer.
  if (/^\d+$/.test(s)) return { known: true, value: parseInt(s, 10) };
  return { known: false };
}

/**
 * Count top-level track tokens in a track-list string (no outer repeat expansion).
 * E.g., "minmax(0,1fr) 20px 1fr" → {count: 3, known: true}
 */
function countTopLevelTracks(trackList: string): { count: number; known: boolean } {
  let count = 0;
  let depth = 0;
  let inToken = false;

  // Treat whitespace at depth 0 as token separators; parentheses allow spaces inside a token.
  for (let i = 0; i < trackList.length; i++) {
    const ch = trackList[i];
    if (ch === "(") { depth++; inToken = true; continue; }
    if (ch === ")") { depth = Math.max(0, depth - 1); continue; }

    const isWs = ch === " " || ch === "\t" || ch === "\n" || ch === "\r" || ch === "\f";
    if (depth === 0) {
      if (isWs) {
        if (inToken) { count++; inToken = false; }
      } else {
        inToken = true;
      }
    } else {
      // inside parens, everything is part of current token
      inToken = true;
    }
  }
  if (inToken) count++;
  return { count, known: true };
}

/**
 * Count tracks across a full template that may include multiple segments and repeat(...).
 * - Expands repeat(int, inner) by multiplication.
 * - If any repeat has non-integer count (auto-fill/fit or var), the total is unknown.
 */
function countTracksPossiblyWithRepeats(templateNoNames: string): { count: number; known: boolean } {
  let i = 0;
  let count = 0;
  let known = true;

  while (i < templateNoNames.length) {
    // skip whitespace
    while (i < templateNoNames.length && /\s/.test(templateNoNames[i])) i++;
    if (i >= templateNoNames.length) break;

    // detect 'repeat(' at depth 0
    if (templateNoNames.slice(i).toLowerCase().startsWith("repeat(")) {
      // parse repeat(...)
      const start = i + "repeat(".length;
      let depth = 1;
      let j = start;
      let commaAtDepth1 = -1;

      for (; j < templateNoNames.length; j++) {
        const ch = templateNoNames[j];
        if (ch === "(") depth++;
        else if (ch === ")") { depth--; if (depth === 0) { j++; break; } }
        else if (ch === "," && depth === 1 && commaAtDepth1 === -1) commaAtDepth1 = j;
      }
      if (depth !== 0 || commaAtDepth1 === -1) {
        // malformed; bail out as unknown
        return { count, known: false };
      }

      const countPart = templateNoNames.slice(start, commaAtDepth1).trim();
      let inner = templateNoNames.slice(commaAtDepth1 + 1, j - 1).trim();
      inner = stripTopLevelLineNames(inner).trim();

      const innerCount = countTopLevelTracks(inner);
      const rep = parseRepeatCount(countPart);

      if (!innerCount.known || !rep.known) {
        known = false;
      } else {
        count += rep.value! * innerCount.count;
      }

      i = j; // continue after ')'
      continue;
    }

    // Otherwise, parse a single top-level token until next whitespace or start of repeat
    let depth = 0;
    let tokenStarted = false;
    while (i < templateNoNames.length) {
      const ch = templateNoNames[i];
      if (ch === "(") { depth++; tokenStarted = true; i++; continue; }
      if (ch === ")") { depth = Math.max(0, depth - 1); i++; continue; }
      if (depth === 0 && /\s/.test(ch)) break;
      if (depth === 0 && templateNoNames.slice(i).toLowerCase().startsWith("repeat(")) break;
      tokenStarted = true;
      i++;
    }
    if (tokenStarted) count++;
  }

  return { count, known };
}
