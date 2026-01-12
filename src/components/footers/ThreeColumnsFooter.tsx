import {
  CSSLayout,
  DiagnosticEntry,
  getLayoutFromCatalog,
  GridCssMuiRenderer,
  Layout,
  LayoutRenderOverrideFor,
} from '@mcpab/gridcss';
import { Box } from '@mui/system';

type ThreeColumnsFooterProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  column_1?: React.ReactNode;
  column_2?: React.ReactNode;
  column_3?: React.ReactNode;
};

const defineOverride = <L extends Layout<any, any>>(
  layout: L,
  override: LayoutRenderOverrideFor<L>,
) => {
  return override;
};

export function ThreeColumnsFooter(props: ThreeColumnsFooterProps) {
  //
  const layout = getLayoutFromCatalog('secondary', 'footerHeader3Columns');

  let diagnostics: DiagnosticEntry[] = [];

  const absoluteLayout = CSSLayout({ layout, diagnostics });
  //
  type ll = LayoutRenderOverrideFor<typeof layout>;

  const layoutRendering = defineOverride(layout, {
    header: {
      block_1: {
        contentRenderer: () => {
          return <>{props.header}</>;
        },
      },
    },
    footer: {
      block_1: {
        contentRenderer: ({ sectionId, bp, boxId, coords }) => {
          return <>{props.footer}</>;
        },
      },
    },

    content: {
      block_1: {
        contentRenderer: ({ sectionId, bp, boxId, coords }) => {
          return <>{props.column_1}</>;
        },
      },
      block_2: {
        contentRenderer: ({ sectionId, bp, boxId, coords }) => {
          return <>{props.column_2}</>;
        },
      },
      block_3: {
        contentRenderer: ({ sectionId, bp, boxId, coords }) => {
          return <>{props.column_3}</>;
        },
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
