import { Box } from '@mui/material';
import { StandardStack } from 'src/components/styled';
import { SubsectionTitle, SubsubsectionTitle } from 'src/components/typography';

/**
 * Props for the `TitleAndSubStd` renderer.
 *
 * @remarks
 * Populated by the `titleAndSubStd` entry in {@link defaultRendersRegistry}.
 * `indicator` is resolved by the registry from `isOpen ? openIndicator : closeIndicator`.
 */
export type TitleAndSubStdProps = {
  /** Section heading — always rendered as `SubsectionTitle` (h3 equivalent). */
  title: string;
  /** Optional subtitle rendered below the heading as `SubsubsectionTitle`. */
  subtitle?: string;
  /**
   * Open/close icon node resolved from the active indicator pair.
   * Typically `<ExpandLess />` (open) or `<ExpandMore />` (closed).
   */
  indicator: React.ReactNode;
  /** Callback wired to the `TreeTextStore` toggle by `TextOpenClose`. */
  onClick: () => void;
};

/**
 * Section header renderer — fixed heading size.
 *
 * @remarks
 * Renders a horizontally justified row with the title (+ optional subtitle)
 * on the left and the open/close indicator on the right.  The entire row is
 * clickable via `onClick`.
 *
 * Uses `SubsectionTitle` / `SubsubsectionTitle` (heading variants) rather than
 * `*Label` variants — appropriate when the section is always at depth 0 and
 * the fixed heading size is intentional.  For nested sections where heading
 * size should adapt, use {@link TitleAndSubDepth} instead.
 *
 * Registry key: `"titleAndSubStd"` | Type: `"section"`
 */
export function TitleAndSubStd({ title, subtitle, indicator, onClick }: TitleAndSubStdProps) {
  return (
   <Box onClick={onClick} display="flex" justifyContent="space-between"  >
      <StandardStack size="compact">
        <SubsectionTitle>{title}</SubsectionTitle>
        {subtitle && <SubsubsectionTitle>{subtitle}</SubsubsectionTitle>}
      </StandardStack>
      {indicator}
    </Box>
  );
}
