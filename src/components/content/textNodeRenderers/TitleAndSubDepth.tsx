import { Box } from '@mui/material';
import { StandardStack } from 'src/components/styled';
import { SubsectionTitleLabel, SubsubsectionTitleLabel } from 'src/components/typography';

/**
 * Props for the `TitleAndSubDepth` renderer.
 *
 * @remarks
 * Populated by the `titleAndSubDepth` entry in {@link defaultRendersRegistry}.
 * `depth` is forwarded directly from {@link TextPolicyProps} so the component
 * can select the appropriate heading size.
 */
export type TitleAndSubDepthProps = {
  /** Section heading — size adapts to `depth` (see below). */
  title: string;
  /** Optional subtitle always rendered as `SubsubsectionTitleLabel`. */
  subtitle?: string;
  /**
   * Open/close icon resolved from `isOpen ? openIndicator : closeIndicator`.
   * Typically `<ExpandLess />` or `<ExpandMore />`.
   */
  indicator: React.ReactNode;
  /** Callback wired to the `TreeTextStore` toggle by `TextOpenClose`. */
  onClick: () => void;
  /**
   * Zero-based nesting depth.  Controls heading size:
   * - depth `0` → `SubsectionTitleLabel` (h3 equivalent)
   * - depth `> 0` → `SubsubsectionTitleLabel` (h4 equivalent)
   */
  depth: number;
};

/**
 * Section header renderer — depth-aware heading size.
 *
 * @remarks
 * Same layout as {@link TitleAndSubStd} (horizontally justified row,
 * full-row click target) but uses `*Label` (non-heading) typography variants
 * to avoid document-outline pollution, and switches between
 * `SubsectionTitleLabel` and `SubsubsectionTitleLabel` based on `depth`.
 *
 * Use this renderer in preference to `titleAndSubStd` whenever the section
 * may appear nested, e.g. an expandable sub-section inside a top-level
 * collapsible group.
 *
 * Registry key: `"titleAndSubDepth"` | Type: `"section"`
 */
export function TitleAndSubDepth({ title, subtitle, indicator, onClick, depth }: TitleAndSubDepthProps) {
  const TitleLabel = depth === 0 ? SubsectionTitleLabel : SubsubsectionTitleLabel;

  return (
    <Box onClick={onClick} display="flex" justifyContent="space-between">
      <StandardStack size="compact">
        <TitleLabel component="div">{title}</TitleLabel>
        {subtitle && <SubsubsectionTitleLabel component="div">{subtitle}</SubsubsectionTitleLabel>}
      </StandardStack>
      {indicator}
    </Box>
  );
}
