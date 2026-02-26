import { SxProps, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { StandardStack } from 'src/components/styled';
import { SubsubsectionTitleLabel } from 'src/components/typography';

/**
 * Props for the `TitledText` renderer.
 *
 * @remarks
 * Populated by the `titledText` entry in {@link defaultRendersRegistry}:
 * `title` and optional `subtitle` come from the payload; `text` is
 * `content ?? title`; `sx` from `TextDrawerElementUI.sx`.
 */
export type TitledTextProps = {
  /** Primary heading rendered as a `SubsubsectionTitleLabel`. */
  title: string;
  /** Optional secondary heading rendered below the title. */
  subtitle?: string;
  /** Body text rendered as narrative typography. */
  text: string;
  /** Optional MUI sx overrides applied to the outer `StandardStack`. */
  sx?: SxProps<Theme>;
};

/**
 * Leaf renderer — a compact block combining a label heading with body text.
 *
 * @remarks
 * Renders title (and optional subtitle) as `SubsubsectionTitleLabel` elements
 * followed by a `Typography variant="narrative"` paragraph, all in a compact
 * `StandardStack`.  Suitable for FAQ answers with a clear question/answer
 * pair or feature descriptions with a short headline.
 *
 * Uses `SubsubsectionTitleLabel` (non-heading span/div) rather than a heading
 * tag to avoid polluting the document outline when used inside an accordion.
 *
 * Registry key: `"titledText"` | Type: `"paragraph"`
 */
export function TitledText({ title, subtitle, text, sx }: TitledTextProps) {
  return (
    <StandardStack size="compact" sx={sx}>
      <SubsubsectionTitleLabel component="div">{title}</SubsubsectionTitleLabel>
      {subtitle && <SubsubsectionTitleLabel component="div">{subtitle}</SubsubsectionTitleLabel>}
      <Typography variant="narrative">{text}</Typography>
    </StandardStack>
  );
}
