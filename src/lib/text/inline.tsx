/**
 * Lightweight inline text formatters for React rendering.
 *
 * Supported syntax:
 * - `**bold**`
 * - `*italic*`
 * - `[label](url)` for `http(s)`, `mailto:`, `tel:`, `/path`, and `#hash`
 * - line breaks (`\r\n`, `\r`, `\n`, and literal `\\n`) to `<br />`
 */

import * as React from 'react';
import MuiLink from '@mui/material/Link';
import type { LinkTypeComponent } from '../../core/link';

/**
 * Convert a string containing **bold** markers into React nodes.
 * 
 * A simple utility for processing text with bold formatting. Useful when you only
 * need bold text support without full markdown parsing.
 * 
 * @param input - The string containing **bold** markers
 * @param keyScope - Prefix for React keys to avoid conflicts (default: 'b')
 * @returns Array of React nodes with <strong> elements for bold text
 * 
 * @example
 * const nodes = boldToNodes("Welcome to **our platform**!");
 * // Returns: ["Welcome to ", <strong key="b-0">our platform</strong>, "!"]
 * 
 * @example
 * // In a component
 * function Title({ text }: { text: string }) {
 *   return <Typography variant="h4">{boldToNodes(text, 'title')}</Typography>;
 * }
 */
export function boldToNodes(input: string, keyScope = 'b'): React.ReactNode[] {
  const boldRe = /\*\*([^*]+)\*\*/g;
  return splitAndWrap(input, boldRe, (m, k) => <strong key={k}>{m[1]}</strong>, `${keyScope}-`);
}

/**
 * Parse inline markdown-like content into React nodes.
 * 
 * @param input - The string containing Markdown syntax
 * @param Link - Link component used for internal `/path` links
 * @param keyScope - Prefix for React keys to avoid conflicts (default: 'md')
 * @returns Array of React nodes with processed formatting
 */
export function parseInlineMarkdown(
  input: string,
  Link: LinkTypeComponent,
  keyScope = 'md',
): React.ReactNode[] | React.ReactNode {

  const linkRe = /\[([^\]]+)\]\(((?:https?:\/\/|mailto:|tel:|\/|#)[^\s)]+)\)/g;
  const boldRe = /\*\*([^*]+)\*\*/g;
  const italicRe = /\*([^*]+)\*/g;

  // 1) Links
  const withLinks = splitAndWrap(
    input,
    linkRe,
    (m, k) => {
      const text = m[1]; 
      const href = m[2];

      if (href.startsWith('/')) {
        return <Link key={k} href={href}>{text}</Link>;
      }
      if (href.startsWith('http')) {
        return <MuiLink key={k} href={href} target="_blank" rel="noopener noreferrer">{text}</MuiLink>;
      }
      // mailto:, tel:, #hash, or other schemes
      return <MuiLink key={k} href={href}>{text}</MuiLink>;
    },
    `${keyScope}-link-`
  );

  // 2) **bold**
  const withBold = flatMapNodes(withLinks, n =>
    typeof n === 'string'
      ? splitAndWrap(n, boldRe, (m, k) => <strong key={k}>{m[1]}</strong>, `${keyScope}-b-`)
      : [n]
  );

  // 3) *italic*
  const withItalics = flatMapNodes(withBold, n =>
    typeof n === 'string'
      ? splitAndWrap(n, italicRe, (m, k) => <em key={k}>{m[1]}</em>, `${keyScope}-i-`)
      : [n]
  );

  // 4) Line breaks: handle \r\n, \r, \n, and the literal backslash-n
  const newlineRe = /\r\n|\r|\n|\\n/g;
  const withBreaks = flatMapNodes(withItalics, n =>
    typeof n === 'string'
      ? splitAndWrap(n, newlineRe, (_m, k) => <br key={k} />, `${keyScope}-br-`)
      : [n]
  );

  return withBreaks;
}

/* ---------- Helper Functions ---------- */

/**
 * Function type for wrapping regex matches into React nodes.
 */
type WrapFn = (match: RegExpMatchArray, key: string) => React.ReactNode;

/**
 * Split a string by a regex pattern and wrap matches with React components.
 * 
 * Core utility function that handles the parsing logic for text formatting.
 * Splits input string around regex matches and allows custom wrapping of matched content.
 * 
 * @param input - The string to process
 * @param re - Regular expression to match against
 * @param wrap - Function to wrap matches into React nodes
 * @param keyPrefix - Prefix for React keys
 * @returns Array of React nodes with processed content
 * 
 * @internal This is a helper function used by boldToNodes and parseInlineMarkdown
 */

function splitAndWrap(
  input: string,
  re: RegExp,
  wrap: WrapFn,
  keyPrefix = ''
): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let local = 0;

  for (;;) {
    const match = re.exec(input);
    if (!match) break;
    if (match.index > lastIndex) out.push(input.slice(lastIndex, match.index));
    out.push(wrap(match, `${keyPrefix}${local++}`));
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < input.length) out.push(input.slice(lastIndex));
  return out;
}

/**
 * Apply a transformation function to each node in an array, flattening the results.
 * 
 * Similar to Array.flatMap but specifically designed for React nodes. This allows
 * for processing nodes that might be strings (which need further processing) while
 * leaving React elements unchanged.
 * 
 * @param nodes - Array of React nodes to process
 * @param fn - Function that transforms each node into an array of nodes
 * @returns Flattened array of transformed React nodes
 * 
 * @internal This is a helper function used during multi-pass text processing
 */
function flatMapNodes(
  nodes: React.ReactNode[],
  fn: (n: React.ReactNode) => React.ReactNode[]
): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  for (const n of nodes) out.push(...fn(n));
  return out;
}
