import { SxProps, Theme } from '@mui/material';
import { SubsubsectionTitleLabel } from 'src/components/typography';

/**
 * Props for the `LabelOnly` renderer.
 *
 * @remarks
 * Populated by the `labelOnly` entry in {@link defaultRendersRegistry}:
 * `title` from the payload; `sx` from `TextDrawerElementUI.sx`.
 */
export type LabelOnlyProps = {
  /** Label text rendered as `SubsubsectionTitleLabel`. */
  title: string;
  /** Optional MUI sx overrides forwarded from the node's UI overrides. */
  sx?: SxProps<Theme>;
};

/**
 * Leaf renderer — a title-only label with no body content.
 *
 * @remarks
 * Renders the node's `title` as a `SubsubsectionTitleLabel` (non-heading div)
 * with no body text beneath it.  Suitable for list items that need a styled
 * label without accompanying description, e.g. feature names, menu items, or
 * tag-style content inside a collapsible section.
 *
 * Registry key: `"labelOnly"` | Type: `"plainText"`
 */
export function LabelOnly({ title, sx }: LabelOnlyProps) {
  return (
    <SubsubsectionTitleLabel component="div" sx={sx}>
      {title}
    </SubsubsectionTitleLabel>
  );
}
