import { SxProps, Theme } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { SubsubsectionTitleLabel } from 'src/components/typography';

/**
 * Props for the `LinkedLabel` renderer.
 *
 * @remarks
 * Populated by the `linkedLabel` entry in {@link defaultRendersRegistry}:
 * `href` is `TextDrawerElement.href ?? '#'`; `sx` from `TextDrawerElementUI.sx`.
 */
export type LinkedLabelProps = {
  /** Link text rendered as `SubsubsectionTitleLabel`. */
  title: string;
  /**
   * Navigation target.  Falls back to `'#'` when the payload's `href` is
   * absent — consider this a misconfiguration; always supply `href` in the
   * payload when using this renderer.
   */
  href: string;
  /** Optional MUI sx overrides applied to the outer `MuiLink`. */
  sx?: SxProps<Theme>;
};

/**
 * Leaf renderer — a clickable navigation link.
 *
 * @remarks
 * Wraps a `SubsubsectionTitleLabel` in a MUI `Link` with `underline="hover"`.
 * The label text uses `component="span"` so it does not introduce block-level
 * layout inside the inline anchor.
 *
 * Suitable for resource lists, external documentation links, or any leaf node
 * that should navigate rather than display static content.
 *
 * Registry key: `"linkedLabel"` | Type: `"plainText"`
 */
export function LinkedLabel({ title, href, sx }: LinkedLabelProps) {
  return (
    <MuiLink href={href} underline="hover" sx={sx}>
      <SubsubsectionTitleLabel component="span">{title}</SubsubsectionTitleLabel>
    </MuiLink>
  );
}
