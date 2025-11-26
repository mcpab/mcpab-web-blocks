import { Box } from "@mui/material";
import { Kinds } from "../../ids/layoutKinds";
import { AbsoluteGrid } from "../../core/absoluteGridTypes";
import React from "react";
import { AbsoluteNode } from "../../core/gridNodeTypes";
import { formatGridUnitValue } from "../../core/utils/utils";


type MainProps<K extends Kinds> = {
    grid: AbsoluteGrid<K>;
    children?: React.ReactNode;
};

function TopContainer<K extends Kinds>({ grid, children }: MainProps<K>) {
    return (
        <Box
            sx={{
                display: "grid",

                // 🔒 hard clamp to parent width
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                boxSizing: "border-box",

                // 🔒 allow tracks to shrink
                gridTemplateColumns: {
                    xs: `repeat(${grid.columns.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${grid.columns.sm}, minmax(0, 1fr))`,
                    md: `repeat(${grid.columns.md}, minmax(0, 1fr))`,
                    lg: `repeat(${grid.columns.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${grid.columns.xl}, minmax(0, 1fr))`,
                },
                gridTemplateRows: {
                    xs: `repeat(${grid.rows.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${grid.rows.sm}, minmax(0, 1fr))`,
                    md: `repeat(${grid.rows.md}, minmax(0, 1fr))`,
                    lg: `repeat(${grid.rows.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${grid.rows.xl}, minmax(0, 1fr))`,
                },
                // 🔒 no gap – spacing is delegated to children / nodes
                // gap: 0,

                justifyItems: grid.options.justifyItems,
                alignItems: grid.options.alignItems,
                justifyContent: grid.options.justifyContent,
                alignContent: grid.options.alignContent,

                gridAutoFlow: grid.options.autoFlow,

                // keep implicit units for now, they’re not the problem anymore
                gridAutoRows: grid.options.implicitRowUnits
                    ? formatGridUnitValue(grid.options.implicitRowUnits)
                    : undefined,
                gridAutoColumns: grid.options.implicitColumnUnits
                    ? formatGridUnitValue(grid.options.implicitColumnUnits)
                    : undefined,

                // last-resort visual safety: hide any accidental overflow
                overflowX: "hidden",
            }}
        >
            {children}
        </Box>
    );
}


function renderNode<K extends Kinds>(
    node: AbsoluteNode<K>,
    gridChildComponents: Partial<Record<K, React.ReactNode>>,
    placeholder?: React.ReactNode
) {
    let content = gridChildComponents[node.kind];

    if (!content && placeholder) {
        content = placeholder;
    } else if (!content) {
        content = <></>;
    }

    return (
        <Box
            key={node.identity.id}
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
            visibility={node.options.visibility === "hidden" ? "hidden" : "visible"}
            justifySelf={node.options.justifySelf}
            alignSelf={node.options.alignSelf}
            zIndex={node.options.zIndex}
            style={{
                pointerEvents:
                    node.options.visibility === "hidden" ? "none" : "auto",
            }}
        >
            {/* inner wrapper also shrinkable */}
            <Box sx={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}>
                {content}
            </Box>
        </Box>
    );
}



export type GridCssMuiRendererProps<K extends Kinds> = {

    grid: AbsoluteGrid<K>;
    gridChildComponents: Partial<Record<K, React.ReactNode>>;
    placeholder?: React.ReactNode;

};

export function GridCssMuiRenderer<K extends Kinds>(props: GridCssMuiRendererProps<K>) {

    const { grid, gridChildComponents: content, placeholder } = props;

    return <TopContainer grid={grid}>
        {Object.values(grid.nodes).map((node) => renderNode(node as AbsoluteNode<K>, content, placeholder))}
    </TopContainer>;

}