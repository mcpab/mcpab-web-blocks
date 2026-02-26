import {
  CSSLayout,
  DiagnosticEntry,
  getLayoutFromCatalog,
  GridCssMuiRenderer,
  Layout,
  LayoutRenderOverrideFor,
} from '@mcpab/gridcss';
import { Box } from '@mui/system';

/** Props for {@link ThreeColumnsFooter}. All slots are optional. */
export type ThreeColumnsFooterProps = {
  /** Content rendered in the top header band of the footer. */
  header?: React.ReactNode;
  /** Content rendered in the bottom strip of the footer (e.g. copyright line). */
  footer?: React.ReactNode;
  /** First column content. */
  column_1?: React.ReactNode;
  /** Second column content. */
  column_2?: React.ReactNode;
  /** Third column content. */
  column_3?: React.ReactNode;
};

/** Type-inference helper so `defineOverride` preserves the literal layout type. */
const defineOverride = <L extends Layout<any, any>>(
  _layout: L,
  override: LayoutRenderOverrideFor<L>,
) => override;

/**
 * A footer divided into three equal content columns, with an optional header
 * band at the top and a footer strip at the bottom.
 *
 * The layout is driven by the `footerHeader3Columns` entry in the secondary
 * GridCSS catalog. Pass any React node into each slot — typically navigation
 * link lists, contact details, or a brand logo.
 *
 * @example
 * ```tsx
 * <ThreeColumnsFooter
 *   header={<Logo />}
 *   column_1={<NavList title="Company" links={companyLinks} />}
 *   column_2={<NavList title="Services" links={serviceLinks} />}
 *   column_3={<SocialLinks />}
 *   footer={<Copyright />}
 * />
 * ```
 */
export function ThreeColumnsFooter(props: ThreeColumnsFooterProps) {
  const layout = getLayoutFromCatalog('secondary', 'footerHeader3Columns');
  const diagnostics: DiagnosticEntry[] = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });

  const layoutRendering = defineOverride(layout, {
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
      block_3: {
        contentRenderer: () => <>{props.column_3}</>,
      },
    },
  });

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
