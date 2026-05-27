import type { AnyInlineTextNode } from './defaultTextRegistries';

export type ParseInlineTextOptions = {
  /** Prefix used to generate deterministic inline node ids. */
  idPrefix?: string;
};

type InlineTokenType = AnyInlineTextNode['type'];

function createInlineNode(
  idPrefix: string,
  index: number,
  type: InlineTokenType,
  body: string,
  href?: string,
): AnyInlineTextNode {
  const id = `${idPrefix}.${index}`;

  if (type === 'link') {
    return {
      id,
      type,
      body,
      href: href ?? '',
    };
  }

  return {
    id,
    type,
    body,
  };
}

function findClosingMarker(source: string, marker: string, fromIndex: number): number {
  return source.indexOf(marker, fromIndex + marker.length);
}

function parseLink(source: string, fromIndex: number): { body: string; href: string; end: number } | null {
  const labelEnd = source.indexOf(']', fromIndex + 1);
  if (labelEnd === -1 || source[labelEnd + 1] !== '(') {
    return null;
  }

  const hrefEnd = source.indexOf(')', labelEnd + 2);
  if (hrefEnd === -1) {
    return null;
  }

  return {
    body: source.slice(fromIndex + 1, labelEnd),
    href: source.slice(labelEnd + 2, hrefEnd),
    end: hrefEnd + 1,
  };
}

/**
 * Parses a small markdown-ish inline syntax into renderable inline nodes.
 *
 * Supported syntax:
 * - `plain text`
 * - `` `code` ``
 * - `***strong emphasis***`
 * - `**strong**`
 * - `*emphasis*`
 * - `[label](href)`
 *
 * This parser is intentionally flat: markup inside markup is kept as literal
 * text. Unclosed or malformed markers are emitted as plain text.
 */
export function parseInlineText(
  source: string,
  { idPrefix = 'inline' }: ParseInlineTextOptions = {},
): AnyInlineTextNode[] {
  const nodes: AnyInlineTextNode[] = [];
  let index = 0;
  let cursor = 0;
  let textBuffer = '';

  const pushText = () => {
    if (!textBuffer) {
      return;
    }

    nodes.push(createInlineNode(idPrefix, index, 'text', textBuffer));
    index += 1;
    textBuffer = '';
  };

  const pushNode = (type: InlineTokenType, body: string, href?: string) => {
    pushText();
    nodes.push(createInlineNode(idPrefix, index, type, body, href));
    index += 1;
  };

  while (cursor < source.length) {
    const char = source[cursor];

    if (char === '[') {
      const link = parseLink(source, cursor);
      if (link) {
        pushNode('link', link.body, link.href);
        cursor = link.end;
        continue;
      }
    }

    if (char === '`') {
      const end = findClosingMarker(source, '`', cursor);
      if (end !== -1) {
        pushNode('code', source.slice(cursor + 1, end));
        cursor = end + 1;
        continue;
      }
    }

    if (source.startsWith('***', cursor)) {
      const end = findClosingMarker(source, '***', cursor);
      if (end !== -1) {
        pushNode('strongEmphasis', source.slice(cursor + 3, end));
        cursor = end + 3;
        continue;
      }
    }

    if (source.startsWith('**', cursor)) {
      const end = findClosingMarker(source, '**', cursor);
      if (end !== -1) {
        pushNode('strong', source.slice(cursor + 2, end));
        cursor = end + 2;
        continue;
      }
    }

    if (char === '*') {
      const end = findClosingMarker(source, '*', cursor);
      if (end !== -1) {
        pushNode('emphasis', source.slice(cursor + 1, end));
        cursor = end + 1;
        continue;
      }
    }

    textBuffer += char;
    cursor += 1;
  }

  pushText();

  return nodes;
}

