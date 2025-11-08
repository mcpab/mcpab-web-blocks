/*
 * Inline Text Processing Utilities
 *
 * A collection of functions for parsing and converting text with inline formatting to React components.
 * These utilities handle common text formatting scenarios like bold text, italics, links, and line breaks,
 * making it easy to render user-generated content or CMS text with basic formatting.
 *
 * Philosophy:
 * These utilities bridge the gap between plain text and rich text by supporting a minimal subset of
 * Markdown syntax. They're designed for scenarios where you need basic formatting without the overhead
 * of a full Markdown parser, such as CMS content, user comments, or configuration text.
 *
 * Features:
 * - Lightweight Markdown parsing for inline elements
 * - Safe HTML generation through React components
 * - Automatic link handling with internal/external detection
 * - Line break processing for multiline text
 * - Type-safe React node generation
 * - Customizable key scoping for React reconciliation
 * - Integration with Next.js Link components
 * - MUI Link component integration
 *
 * Supported Syntax:
 * - **bold text** → <strong>bold text</strong>
 * - *italic text* → <em>italic text</em>
 * - [link text](url) → <Link> or <a> based on URL type
 * - Line breaks (\\n, \\r\\n, \\r, literal "\\n") → <br />
 *
 * Link Handling Strategy:
 * - Internal links (/path) → Next.js <Link> component
 * - External links (http/https) → <a> with target="_blank" and security attributes
 * - Special schemes (mailto:, tel:, #hash) → <a> with appropriate handling
 *
 * Use Cases:
 * - CMS content with basic formatting
 * - User-generated content (comments, descriptions)
 * - Configuration text that needs formatting
 * - Rich text alternatives for simple content
 * - Dynamic content from APIs or databases
 * - Form field content with inline formatting
 * - Email template text processing
 * - Documentation and help text
 *
 * Examples:
 *
 * Basic Bold Text Processing:
 * const nodes = boldToNodes("Welcome to **our platform**!");
 * // Result: ["Welcome to ", <strong key="b-0">our platform</strong>, "!"]
 *
 * Simple Bold in JSX:
 * function WelcomeMessage({ text }: { text: string }) {
 *   return <Typography variant="h5">{boldToNodes(text)}</Typography>;
 * }
 * // Usage: <WelcomeMessage text="Hello **world**!" />
 *
 * Complete Inline Markdown Processing:
 * import Link from 'next/link';
 * 
 * const content = "Visit **our website** at [example.com](https://example.com) or \\n" +
 *                "contact us at [support@example.com](mailto:support@example.com).";
 * const nodes = parseInlineMarkdown(content, Link);
 *
 * Blog Post Excerpt:
 * function BlogExcerpt({ excerpt }: { excerpt: string }) {
 *   return (
 *     <Typography variant="body1" paragraph>
 *       {parseInlineMarkdown(excerpt, Link, 'excerpt')}
 *     </Typography>
 *   );
 * }
 * // Usage: <BlogExcerpt excerpt="Read about **React performance** tips in [this article](/blog/react-perf)." />
 *
 * Product Description:
 * function ProductDescription({ description }: { description: string }) {
 *   return (
 *     <Box sx={{ mt: 2 }}>
 *       <Typography variant="body2" color="text.secondary">
 *         {parseInlineMarkdown(description, Link, 'product')}
 *       </Typography>
 *     </Box>
 *   );
 * }
 * // Usage: <ProductDescription description="Premium **wireless headphones** with *noise cancellation*.\\nFree shipping on orders over $50." />
 *
 * User Comment System:
 * function CommentText({ comment, commentId }: { comment: string; commentId: string }) {
 *   return (
 *     <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
 *       {parseInlineMarkdown(comment, Link, `comment-${commentId}`)}
 *     </Typography>
 *   );
 * }
 * // Usage: <CommentText comment="Great article! Check out *this related post* [here](/related)." commentId="123" />
 *
 * CMS Content Block:
 * function ContentBlock({ content }: { content: string }) {
 *   return (
 *     <Paper sx={{ p: 3, mb: 2 }}>
 *       <Typography variant="body1" component="div">
 *         {parseInlineMarkdown(content, Link, 'content')}
 *       </Typography>
 *     </Paper>
 *   );
 * }
 * // Usage: <ContentBlock content="**Important:** Please review our [privacy policy](/privacy) before proceeding." />
 *
 * Feature List with Formatting:
 * function FeatureList({ features }: { features: string[] }) {
 *   return (
 *     <List>
 *       {features.map((feature, index) => (
 *         <ListItem key={index}>
 *           <ListItemText 
 *             primary={parseInlineMarkdown(feature, Link, `feature-${index}`)}
 *           />
 *         </ListItem>
 *       ))}
 *     </List>
 *   );
 * }
 * // Usage: <FeatureList features={["**Fast** performance", "*Easy* setup", "24/7 [support](mailto:help@example.com)"]} />
 *
 * Alert Messages:
 * function FormattedAlert({ message, severity }: { message: string; severity: 'info' | 'warning' | 'error' }) {
 *   return (
 *     <Alert severity={severity}>
 *       {parseInlineMarkdown(message, Link, 'alert')}
 *     </Alert>
 *   );
 * }
 * // Usage: <FormattedAlert message="**Warning:** Your session will expire in *5 minutes*. [Extend session](/extend)?" severity="warning" />
 *
 * FAQ Content:
 * function FAQAnswer({ answer }: { answer: string }) {
 *   return (
 *     <AccordionDetails>
 *       <Typography variant="body2">
 *         {parseInlineMarkdown(answer, Link, 'faq')}
 *       </Typography>
 *     </AccordionDetails>
 *   );
 * }
 * // Usage: <FAQAnswer answer="You can find more information in our **documentation** [here](/docs) or contact [support](mailto:support@example.com)." />
 *
 * Email Template Content:
 * function EmailContent({ template }: { template: string }) {
 *   return (
 *     <Box sx={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
 *       {parseInlineMarkdown(template, ({ href, children }) => (
 *         <a href={href} style={{ color: '#1976d2', textDecoration: 'none' }}>
 *           {children}
 *         </a>
 *       ), 'email')}
 *     </Box>
 *   );
 * }
 *
 * Custom Link Component:
 * function CustomMarkdown({ text }: { text: string }) {
 *   const CustomLink = ({ href, children }: LinkRef) => (
 *     <MuiLink 
 *       href={href} 
 *       sx={{ 
 *         color: 'secondary.main',
 *         textDecoration: 'underline',
 *         '&:hover': { textDecoration: 'none' }
 *       }}
 *     >
 *       {children}
 *     </MuiLink>
 *   );
 *   
 *   return (
 *     <Typography variant="body1">
 *       {parseInlineMarkdown(text, CustomLink, 'custom')}
 *     </Typography>
 *   );
 * }
 *
 * Error Message Formatting:
 * function ErrorMessage({ error }: { error: string }) {
 *   return (
 *     <Typography variant="body2" color="error" sx={{ mt: 1 }}>
 *       {parseInlineMarkdown(error, Link, 'error')}
 *     </Typography>
 *   );
 * }
 * // Usage: <ErrorMessage error="**Error:** Invalid format. See [help guide](/help#formats) for examples." />
 *
 * Syntax Examples:
 *
 * Bold Text:
 * Input: "This is **important** information"
 * Output: "This is <strong>important</strong> information"
 *
 * Italic Text:
 * Input: "This is *emphasized* text"
 * Output: "This is <em>emphasized</em> text"
 *
 * Mixed Formatting:
 * Input: "**Bold** and *italic* text together"
 * Output: "<strong>Bold</strong> and <em>italic</em> text together"
 *
 * Internal Links:
 * Input: "Check out [our blog](/blog)"
 * Output: <Link href="/blog">our blog</Link>
 *
 * External Links:
 * Input: "Visit [Google](https://google.com)"
 * Output: <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
 *
 * Email Links:
 * Input: "Contact [support](mailto:help@example.com)"
 * Output: <a href="mailto:help@example.com">support</a>
 *
 * Phone Links:
 * Input: "Call [us](tel:+1234567890)"
 * Output: <a href="tel:+1234567890">us</a>
 *
 * Hash Links:
 * Input: "Jump to [section](#overview)"
 * Output: <a href="#overview">section</a>
 *
 * Line Breaks:
 * Input: "Line one\\nLine two"
 * Output: "Line one<br />Line two"
 *
 * Complex Example:
 * Input: "**Welcome!** Visit *our site* at [example.com](https://example.com)\\nOr email [us](mailto:hi@example.com)"
 * Output: <strong>Welcome!</strong> Visit <em>our site</em> at <a href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</a><br />Or email <a href="mailto:hi@example.com">us</a>
 *
 * Key Scoping:
 * The keyScope parameter helps avoid React key conflicts when using multiple instances:
 * - boldToNodes(text, 'header') → keys: "header-0", "header-1", etc.
 * - parseInlineMarkdown(text, Link, 'content') → keys: "content-link-0", "content-b-0", "content-i-0", etc.
 *
 * Best Practices:
 * 1. Use unique keyScope values when rendering multiple instances
 * 2. Sanitize user input before processing if security is a concern
 * 3. Consider line-height and spacing when rendering multiline content
 * 4. Test link handling with various URL schemes and formats
 * 5. Use appropriate typography variants for semantic meaning
 * 6. Combine with MUI components for consistent styling
 * 7. Handle empty strings and edge cases gracefully
 * 8. Consider accessibility when styling links and emphasized text
 *
 * Security Considerations:
 * - External links automatically include rel="noopener noreferrer"
 * - Only supports predefined URL schemes (http, https, mailto, tel, /, #)
 * - Does not execute JavaScript or include dangerous HTML
 * - Uses React's built-in XSS protection through component rendering
 * - Consider additional input validation for user-generated content
 *
 * Performance:
 * - Lightweight regex-based parsing for fast processing
 * - Generates minimal React components without complex parsing trees
 * - Efficient string splitting and node creation
 * - No external dependencies beyond React and MUI
 * - Suitable for real-time content processing
 *
 * Limitations:
 * - Only supports inline elements (no block-level Markdown)
 * - No support for nested formatting (e.g., ***bold italic***)
 * - Links cannot contain other formatting
 * - No support for code spans, images, or complex Markdown features
 * - Line breaks are converted to <br> tags (no paragraph support)
 */

import * as React from 'react';
import MuiLink from '@mui/material/Link'; 

import {LinkRef} from '../../core/link';
/**
 * LinkRef type for Link component props
 * 
 * Defines the interface for Link components used in markdown processing.
 * Compatible with Next.js Link and custom link implementations.
 */

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
 * Parse inline Markdown and convert to React nodes.
 * 
 * Processes a subset of Markdown syntax including bold text, italic text, links,
 * and line breaks. Automatically handles different link types (internal, external,
 * mailto, tel, hash) and renders them with appropriate components.
 * 
 * Supported syntax:
 * - **bold text** → <strong>bold text</strong>
 * - *italic text* → <em>italic text</em>
 * - [text](url) → <Link> or <a> based on URL type
 * - Line breaks (\\n, \\r\\n, \\r, "\\n") → <br />
 * 
 * Link handling:
 * - Internal links (/path) → Uses provided Link component (typically Next.js Link)
 * - External links (http/https) → <a> with target="_blank" and security attributes
 * - Special schemes (mailto:, tel:, #hash) → <a> with appropriate handling
 * 
 * @param input - The string containing Markdown syntax
 * @param Link - React component for internal links (e.g., Next.js Link)
 * @param keyScope - Prefix for React keys to avoid conflicts (default: 'md')
 * @returns Array of React nodes with processed formatting
 * 
 * @example
 * import Link from 'next/link';
 * 
 * const content = "Visit **our site** at [example.com](https://example.com)\\nOr [contact us](mailto:hi@example.com)";
 * const nodes = parseInlineMarkdown(content, Link, 'content');
 * 
 * @example
 * // In a component
 * function RichText({ content }: { content: string }) {
 *   return (
 *     <Typography variant="body1">
 *       {parseInlineMarkdown(content, Link, 'rich-text')}
 *     </Typography>
 *   );
 * }
 */
export function parseInlineMarkdown(input: string, Link: React.ComponentType<LinkRef>, keyScope = 'md'): React.ReactNode[] | React.ReactNode {

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
