import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import { LayoutAbsolute, LayoutRenderingOverride } from "../../core/boxLayout/boxLayoutTypes";
import { BPs, BREAKPOINTS } from "../../core/breakpoints";
import { gapValueToString, gridUnitValueToString } from "../../core/cssStringify";
import { DiagnosticEntry, GRID_ERROR_CODE, makeError } from "../../core/gridErrorShape";
import { CSSCoordinates } from "../../core/gridNodeTypes";
import { GridOptions } from "../../core/gridOptionsTypes";
import { GridNodeViewOptions } from "../../core/nodeViewOptions";
import { BlocksIDs, SectionIDs } from "../../templates/layoutIDs";
import { DefaultNodeRender } from "./DefaultNodeRender";


function getSxProps(gridOptions: Partial<GridOptions>): SxProps {

    const gapCss = gridOptions.gap ? gapValueToString(gridOptions.gap) : "0px";

    return {
        gridAutoColumns:
            gridOptions.implicitColumnUnits == null
                ? "auto"
                : gridUnitValueToString(gridOptions.implicitColumnUnits),

        gridAutoRows:
            gridOptions.implicitRowUnits == null
                ? "auto"
                : gridUnitValueToString(gridOptions.implicitRowUnits),

        gridAutoFlow: gridOptions.autoFlow ?? "row",
        overflow: gridOptions.overflow ?? "visible",

        justifyItems: gridOptions.justifyItems ?? "stretch",
        alignItems: gridOptions.alignItems ?? "stretch",

        justifyContent: gridOptions.justifyContent ?? "start",
        alignContent: gridOptions.alignContent ?? "start",

        gap: gapCss,
        rowGap: gridOptions.rowGap ? gapValueToString(gridOptions.rowGap) : gapCss,
        columnGap: gridOptions.columnGap
            ? gapValueToString(gridOptions.columnGap)
            : gapCss,
    };
}


type MainProps<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
    layoutAbsolute: LayoutAbsolute<sectionIDs, blockIDs>;
    gridOptionsOverride?: Partial<GridOptions>;
    children?: React.ReactNode;
};

function TopContainer<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>({ layoutAbsolute, gridOptionsOverride, children }: MainProps<sectionIDs, blockIDs>) {

    const gridOptionsResolved: SxProps = getSxProps(gridOptionsOverride || {});

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
                    xs: `repeat(${layoutAbsolute.gridDimensions.columns.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${layoutAbsolute.gridDimensions.columns.sm}, minmax(0, 1fr))`,
                    md: `repeat(${layoutAbsolute.gridDimensions.columns.md}, minmax(0, 1fr))`,
                    lg: `repeat(${layoutAbsolute.gridDimensions.columns.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${layoutAbsolute.gridDimensions.columns.xl}, minmax(0, 1fr))`,
                },
                gridTemplateRows: {
                    xs: `repeat(${layoutAbsolute.gridDimensions.rows.xs}, minmax(min-content, auto))`,
                    sm: `repeat(${layoutAbsolute.gridDimensions.rows.sm}, minmax(min-content, auto))`,
                    md: `repeat(${layoutAbsolute.gridDimensions.rows.md}, minmax(min-content, auto))`,
                    lg: `repeat(${layoutAbsolute.gridDimensions.rows.lg}, minmax(min-content, auto))`,
                    xl: `repeat(${layoutAbsolute.gridDimensions.rows.xl}, minmax(min-content, auto))`,
                },

                // applying grid options
                ...gridOptionsResolved,
            }}
        >
            {children}
        </Box>
    );
}


export type GridCssMuiRendererProps<LA extends LayoutAbsolute<any, any>> = {
    layoutAbsolute: LA;
    diagnostics: DiagnosticEntry[];
    layoutRendering?: LayoutRenderingOverride<LA>;
    gridOptionsOverride?: Partial<GridOptions>;
};

type Breakpoint = keyof BPs<any>;
type SEID<LA extends LayoutAbsolute<any, any>> = keyof LA["sections"];

type BOXID<
    LA extends LayoutAbsolute<any, any>,
    S extends SEID<LA>
> = keyof LA["sections"][S]["coordinates"][Breakpoint];

// A union of all valid pairs: { sectionId: S; boxId: B }
type NodePair<LA extends LayoutAbsolute<any, any>> = {
    [S in SEID<LA>]: {
        [B in BOXID<LA, S>]: { sectionId: S; boxId: B };
    }[BOXID<LA, S>];
}[SEID<LA>];

type BoxRenderer<LA extends LayoutAbsolute<any, any>> =
    NodePair<LA> & {
        coordinate: BPs<CSSCoordinates>;
        content: React.ReactNode;
        view: GridNodeViewOptions;
    };

const dummyCSSCoordinates: CSSCoordinates = {
    gridColumnStart: 0,
    gridColumnEnd: 0,
    gridRowStart: 0,
    gridRowEnd: 0,
};

export function GridCssMuiRenderer<LA extends LayoutAbsolute<any, any>>(
    { layoutAbsolute, layoutRendering, diagnostics, gridOptionsOverride }: GridCssMuiRendererProps<LA>) {

    let nodes: Record<string, BoxRenderer<LA>> = {};

    // here we have the section
    for (const sectionId in layoutAbsolute.sections) {

        // the bps
        BREAKPOINTS.forEach(bp => {

            const boxesAtBP: Partial<Record<BOXID<LA, SEID<LA>>, CSSCoordinates>> = layoutAbsolute.sections[sectionId as SEID<LA>].coordinates[bp];

            if (!boxesAtBP) {
                diagnostics.push(makeError("GridCssMuiRenderer", GRID_ERROR_CODE.SECTION_SHAPES_MISSING_BP, `Missing box shapes for section "${sectionId}" at breakpoint "${bp}"`, { details: { sectionId, bp } }));
                return;
            }

            // the box ids
            for (const boxId in boxesAtBP) {

                const crd = boxesAtBP[boxId as BOXID<LA, SEID<LA>>];

                if (!crd) {
                    diagnostics.push(makeError("GridCssMuiRenderer", GRID_ERROR_CODE.BOX_SHAPE_MISSING_BP, `Missing box shape for box "${boxId}" in section "${sectionId}" at breakpoint "${bp}"`, { details: { sectionId, boxId, bp } }));
                    continue;
                }

                // and now we have the box coordinates at this bp
                const boxCrd: CSSCoordinates = crd;

                const nodeKey = `${sectionId}::${boxId}`;

                let renderConfig: GridNodeViewOptions = {};

                let content: React.ReactNode = <></>;


                if (layoutRendering &&
                    layoutRendering[sectionId] &&
                    layoutRendering[sectionId][bp] &&
                    layoutRendering[sectionId][bp][boxId]) {

                    renderConfig = layoutRendering[sectionId][bp][boxId].view || {};
                    const renderer = layoutRendering?.[sectionId]?.[bp]?.[boxId]?.contentRenderer;

                    if (renderer) {
                        content = renderer({
                            sectionId: sectionId as any,
                            boxId: boxId as any,
                            bp,
                            coords: crd,
                        });
                    }

                }
                // check if the node key exists
                if (!nodes[nodeKey]) {
                    nodes[nodeKey] = {
                        sectionId: sectionId as SEID<LA>,
                        boxId: boxId as BOXID<LA, SEID<LA>>,
                        coordinate: {
                            xs: dummyCSSCoordinates,
                            sm: dummyCSSCoordinates,
                            md: dummyCSSCoordinates,
                            lg: dummyCSSCoordinates,
                            xl: dummyCSSCoordinates,
                        },
                        view: renderConfig,
                        content: content,
                    };
                } else {
                    nodes[nodeKey].coordinate[bp] = boxCrd;
                }

            }

        })

    }

    for (const key in nodes) {

        const box: BoxRenderer<LA> = nodes[key];

        BREAKPOINTS.forEach((bp, index) => {

            const crd = box.coordinate[bp];
            // if any coordinate is zero, we need to fix it
            if (crd.gridColumnStart === 0 && crd.gridColumnEnd === 0 && crd.gridRowStart === 0 && crd.gridRowEnd === 0) {
                const message = `Box "${String(box.boxId)}" in section "${String(box.sectionId)}" is missing coordinates for breakpoint "${bp}". Recovering with default coordinates.`;
                diagnostics.push(makeError("CSSLayout", GRID_ERROR_CODE.MISSING_COORDINATES, message));
                box.coordinate[bp] = {
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 1,
                    gridRowEnd: 2,
                };
            }
        });

    }

    return <TopContainer layoutAbsolute={layoutAbsolute} gridOptionsOverride={gridOptionsOverride} >

        {Object.entries(nodes).map(([nodeKey, node]) => <>

            <DefaultNodeRender
                key={nodeKey}
                cssCoordinateBPs={node.coordinate}
                view={node.view}
            >
                {node.content}
            </DefaultNodeRender>



        </>)}

    </TopContainer>;

}