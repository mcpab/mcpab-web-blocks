import { Box } from "@mui/system";
import { GridNodeViewOptions } from "../../core/nodeViewOptions";
import { NodeID } from "../../templates/layoutIDs";
import { AbsoluteNode } from "../../core/gridNodeTypes";

type DefaultNodeRenderProps<K extends NodeID> = {
    node: AbsoluteNode;
    view:GridNodeViewOptions;
    children?: React.ReactNode;
};

export function DefaultNodeRender<K extends NodeID>({ node, view, children }: DefaultNodeRenderProps<K>) {

    return (
        <Box
           
            sx={{
                // 🔒 grid item must be allowed to shrink
                minWidth: 0,
                minHeight: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                overflow: "hidden",

                gridColumnStart: {
                    xs: node.coordinates.xs.gridColumnStart,
                    sm: node.coordinates.sm?.gridColumnStart ?? node.coordinates.xs.gridColumnStart,
                    md: node.coordinates.md?.gridColumnStart ?? node.coordinates.xs.gridColumnStart,
                    lg: node.coordinates.lg?.gridColumnStart ?? node.coordinates.xs.gridColumnStart,
                    xl: node.coordinates.xl?.gridColumnStart ?? node.coordinates.xs.gridColumnStart,
                },
                gridColumnEnd: {
                    xs: node.coordinates.xs.gridColumnEnd,
                    sm: node.coordinates.sm?.gridColumnEnd ?? node.coordinates.xs.gridColumnEnd,
                    md: node.coordinates.md?.gridColumnEnd ?? node.coordinates.xs.gridColumnEnd,
                    lg: node.coordinates.lg?.gridColumnEnd ?? node.coordinates.xs.gridColumnEnd,
                    xl: node.coordinates.xl?.gridColumnEnd ?? node.coordinates.xs.gridColumnEnd,
                },
                gridRowStart: {
                    xs: node.coordinates.xs.gridRowStart,
                    sm: node.coordinates.sm?.gridRowStart ?? node.coordinates.xs.gridRowStart,
                    md: node.coordinates.md?.gridRowStart ?? node.coordinates.xs.gridRowStart,
                    lg: node.coordinates.lg?.gridRowStart ?? node.coordinates.xs.gridRowStart,
                    xl: node.coordinates.xl?.gridRowStart ?? node.coordinates.xs.gridRowStart,
                },
                gridRowEnd: {
                    xs: node.coordinates.xs.gridRowEnd,
                    sm: node.coordinates.sm?.gridRowEnd ?? node.coordinates.xs.gridRowEnd,
                    md: node.coordinates.md?.gridRowEnd ?? node.coordinates.xs.gridRowEnd,
                    lg: node.coordinates.lg?.gridRowEnd ?? node.coordinates.xs.gridRowEnd,
                    xl: node.coordinates.xl?.gridRowEnd ?? node.coordinates.xs.gridRowEnd,
                },
            }}
            visibility={view.visibility === "hidden" ? "hidden" : "visible"}
            justifySelf={view.justifySelf}
            alignSelf={view.alignSelf}
            zIndex={view.zIndex}
            style={{
                pointerEvents:
                    view.visibility === "hidden" ? "none" : "auto",
            }}
        >
           {children}
        </Box>
    );
}
