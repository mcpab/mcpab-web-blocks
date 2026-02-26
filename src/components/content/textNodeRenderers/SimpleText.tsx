import { SxProps, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';

/**
 * Props for the `SimpleText` renderer.
 *
 * @remarks
 * Populated by the `simpleText` entry in {@link defaultRendersRegistry}:
 * `text` is `content ?? title`; `sx` comes from `TextDrawerElementUI.sx`.
 */
export type SimpleTextProps = {
  /** The text content to display. */
  text: string;
  /** Optional MUI sx overrides forwarded from the node's UI overrides. */
  sx?: SxProps<Theme>;
};

/**
 * Leaf renderer — displays a single block of narrative text.
 *
 * @remarks
 * Renders a MUI `Typography` with `variant="narrative"`.  No heading, no
 * label — just prose.  Suitable for answer text in FAQ patterns or any node
 * where the content speaks for itself without a separate title row.
 *
 * Registry key: `"simpleText"` | Type: `"plainText"`
 */
export function SimpleText({ text, sx }: SimpleTextProps) {
  //

  return (
    <Typography variant="narrative" sx={sx}>
      {text}
    </Typography>
  );
}
