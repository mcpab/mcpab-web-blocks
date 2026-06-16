import type { DiagnosticEntry } from '@mcpab/gridcss';
import { CSSLayout, getLayoutFromCatalog } from '@mcpab/gridcss';
import { Box } from '@mui/system';
import { GridCssMuiRenderer, LayoutRenderOverrideFor } from '@mcpab/gridcss/mui';
/** Props for {@link TwoColumnsFooter}. All slots are optional. */
export type TwoColumnsFooterProps = {
  /** Content rendered in the top header band of the footer. */
  header?: React.ReactNode;
  /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
  footer?: React.ReactNode;
  /** First column content. */
  column_1?: React.ReactNode;
  /** Second column content. */
  column_2?: React.ReactNode;
};

/**
 * A footer divided into two content columns, with an optional header band at
 * the top and a footer strip at the bottom.
 *
 * Uses the `header2colFooter` GridCSS catalog entry — a minimal layout suited
 * for simple comparison or side-by-side content (e.g. brand info + contact).
 *
 * @example
 * ```tsx
 * <TwoColumnsFooter
 *   header={<Logo />}
 *   column_1={<BrandInfo />}
 *   column_2={<ContactDetails />}
 *   footer={<Copyright />}
 * />
 * ```
 */
export function TwoColumnsFooter(props: TwoColumnsFooterProps) {
  const layout = getLayoutFromCatalog('secondary', 'header2colFooter');
  const diagnostics: DiagnosticEntry[] = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });

  const layoutRendering = {
    header: {
      block_1: {
        contentRenderer: () => <>{props.header}</>,
      },
    },
    footer: {
      block_1: {
        contentRenderer: () => <>{props.footer}</>,
      },
    },
    content: {
      block_1: {
        contentRenderer: () => <>{props.column_1}</>,
      },
      block_2: {
        contentRenderer: () => <>{props.column_2}</>,
      },
    },
  } satisfies LayoutRenderOverrideFor<typeof layout>;

  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics,
  });

  return (
    <Box width="100%" height="100%">
      {rendered}
    </Box>
  );
}

export default TwoColumnsFooter;
