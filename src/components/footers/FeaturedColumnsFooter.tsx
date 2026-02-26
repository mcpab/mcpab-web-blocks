import {
  CSSLayout,
  DiagnosticEntry,
  getLayoutFromCatalog,
  GridCssMuiRenderer,
  Layout,
  LayoutRenderOverrideFor,
} from '@mcpab/gridcss';
import { Box } from '@mui/system';

/** Props for {@link FeaturedColumnsFooter}. All slots are optional. */
export type FeaturedColumnsFooterProps = {
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
 * A footer with three content columns optimised for feature showcases or
 * service presentations, with an optional header band and footer strip.
 *
 * Uses the `header3colFooter` GridCSS catalog entry. This differs from
 * {@link ThreeColumnsFooter} (`footerHeader3Columns`) in its responsive grid
 * spans — prefer this variant when the three columns represent discrete
 * features, services, or highlights rather than navigation link groups.
 *
 * @example
 * ```tsx
 * <FeaturedColumnsFooter
 *   header={<Logo />}
 *   column_1={<ServiceCard title="Design" />}
 *   column_2={<ServiceCard title="Development" />}
 *   column_3={<ServiceCard title="Support" />}
 *   footer={<Copyright />}
 * />
 * ```
 */
export function FeaturedColumnsFooter(props: FeaturedColumnsFooterProps) {
  const layout = getLayoutFromCatalog('secondary', 'header3colFooter');
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
