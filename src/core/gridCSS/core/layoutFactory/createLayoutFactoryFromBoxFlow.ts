import { defaultGrid } from "../../presets/defaults";
import { BoxFlowBuilder } from "../boxFlow/boxFlowBuilder";
import DefaultNodeManager from "../defaultNodeManager";
import { DiagnosticEntry, GRID_ERROR_CODE } from "../gridErrorShape";
import { LayoutFactory, LayoutFactoryProps, } from "../layoutFactoryTypes";
import { GridPath } from "../boxFlow/boxFlowBuilderTypes";
import { addNodeWithDiagnostics } from "../utils/utils";
import { makeError, makeInfo } from "../gridErrorShape";

export function createLayoutFactoryFromBoxFlow<K extends string>(pattern: GridPath<K>): LayoutFactory<K> {

    const fn: LayoutFactory<K> = (props?: LayoutFactoryProps<K>) => {

        const { gridOptions, nodeOptions, nodeIntents } = props ?? {};

        let diagnostics: DiagnosticEntry[] = [];

        // check pattern validity
        let patternlength = 0;

        for (let p of pattern.paths) {
            patternlength += p.steps.length;
        }

        if (pattern.slots.length !== patternlength) {
            const dd: DiagnosticEntry = makeError(
                'factory',
                GRID_ERROR_CODE.PARTITIONS_INVALID,
                `Pattern slot count (${pattern.slots.length}) does not match total steps (${pattern.paths.length})`,
                { details: { patternName: pattern.name, slotsCount: pattern.slots.length, pathsCount: pattern.paths.length } }
            );
            return {
                grid: undefined,
                diagnostics: [dd]
            };
        }

        const nodeManager = new DefaultNodeManager<K>('allow');

        const boxFlowBuilder = new BoxFlowBuilder();

        for (let path in pattern.paths) {
            const p = pattern.paths[path];
            if (p.origin) {
                boxFlowBuilder.setCursorAt(p.origin);
            }
            for (let step of p.steps) {
                boxFlowBuilder.addNode(step);
            }

        }

        const { nodes, errors, rows, columns } = boxFlowBuilder.getNodes();

        diagnostics.push(makeInfo('factory', GRID_ERROR_CODE.PATTERN_LAYOUT_GENERATED,
            `Pattern layout "${pattern.name}" generated with ${nodes.length} nodes.`,
            { details: { pattern: pattern, nodesCount: nodes.length, rows, columns } }
        ));

        diagnostics = diagnostics.concat(errors);

        pattern.slots.forEach((kind, index) => {

            const node = nodes[index];

            if (!node) {
                diagnostics.push(makeError('factory', GRID_ERROR_CODE.NODE_MISSING_FOR_SLOT,
                    `No node generated for slot "${kind}" at index ${index}`,
                    { details: { patternName: pattern.name, slot: kind, index } }
                ));
                return;
            }

            addNodeWithDiagnostics(
                nodeManager,
                diagnostics,
                node,
                kind,
                nodeOptions?.[kind]
            );
        });

        if (nodeIntents) {
            const patches = nodeManager.patchNodes(nodeIntents);
            diagnostics = diagnostics.concat(patches);
        }

        return {
            grid: defaultGrid<K>(nodeManager, rows, columns, gridOptions),
            diagnostics,
        };

    }

    return fn;
}