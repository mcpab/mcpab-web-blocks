import { NodeID } from "../templates/layoutIDs";
import { defaultUniformGridOptions } from "../templates/presets/defaultUniformGridOptions";
import { AbsoluteGrid } from "./absoluteGridTypes";
import { GridOptions } from "./gridOptionsTypes";
import { DiagnosticEntry, GRID_ERROR_CODE, makeError, makeInfo } from "./gridErrorShape";
import { AbsoluteNode } from "./gridNodeTypes";
import { BoxFlowBuilder } from "../geometry/boxFlowBuilder";
import { PathGroup } from "../geometry/gridPathTypes";

type GridBuilderProps<K extends NodeID> = {

    gridPath: PathGroup;
    idsOrdered: Array<K>;
    debug?: boolean;
    gridOptions?: GridOptions;
    nodesIdentities?: Array<{ id: K; name?: string; parent?: string }>;
}

export type GridBuilderResult<K extends NodeID> = {
    readonly grid: AbsoluteGrid<K> | undefined;
    readonly diagnostics: ReadonlyArray<DiagnosticEntry>;
};
export function GridBuilder<K extends NodeID>({ gridPath, idsOrdered, debug = false,
    gridOptions = defaultUniformGridOptions,nodesIdentities
}: GridBuilderProps<K>):
    GridBuilderResult<K> {

    let diagnostics: Array<DiagnosticEntry> = [];
  

    // buiilding the absolute coordinates
    const boxFlowBuilder = new BoxFlowBuilder();

    for (let path in gridPath.paths) {
        const p = gridPath.paths[path];
        if (p.origin) {
            boxFlowBuilder.setCursorAt(p.origin);
        }
        for (let step of p.steps) {
            boxFlowBuilder.addNode(step);
        }

    }

    const { nodes, errors, rows, columns } = boxFlowBuilder.getNodes();

    
    if (debug) {
        diagnostics.push(makeInfo('factory', GRID_ERROR_CODE.PATTERN_LAYOUT_GENERATED,
            `Pattern layout "${gridPath.debugName}" generated with ${nodes.length} nodes.`,
            { details: { pattern: gridPath, nodesCount: nodes.length, rows, columns } }
        ));
    }

    diagnostics = diagnostics.concat(errors);

    if(nodes.length !== idsOrdered.length){
        diagnostics.push(makeError('factory', GRID_ERROR_CODE.NODE_ORDER_MISMATCH,
            `Node count (${nodes.length}) does not match ID count (${idsOrdered.length}).`,
            { details: { nodesCount: nodes.length, idsCount: idsOrdered.length } }
        ));
        // not accepted
        return { grid: undefined, diagnostics };
    }


    let grid: AbsoluteGrid<K> = {
        rows,
        columns,
        nodes: [],
        options: gridOptions,
    };

    // assigning nodes to ids
    idsOrdered.forEach((id, index) => {
       
        let absoluteNode: AbsoluteNode;
        absoluteNode = {
            coordinates: nodes[index],
        }
         if(nodesIdentities){
            const identity = nodesIdentities.find(n => n.id === id);
            if(identity){
                if(identity.name){
                    absoluteNode.name = identity.name;
                }
                if(identity.parent){
                    absoluteNode.parent = identity.parent;
                }
            }
        }
        grid.nodes.push({id, node: absoluteNode});
    });

    return { grid, diagnostics };
}