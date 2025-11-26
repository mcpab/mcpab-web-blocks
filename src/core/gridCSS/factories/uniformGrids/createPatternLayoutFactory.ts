
import {  UniformFlowBuilder } from "../../builders/uniformFlowBuilder";
import DefaultNodeManager from "../../core/DefaultNodeManager";
import { DiagnosticEntry } from "../../core/gridErrorShape";
import { LayoutFactory, LayoutFactoryProps, } from "../../core/layoutTypes";
import { defaultGrid } from "../../defaults/defaults";
import { Kinds } from "../../ids/kinds";
import { addNodeWithDiagnostics } from "../../lib/utils";
import { GridPath } from "../../builders/types";

 
export function createPatternLayoutFactory<K extends Kinds>(pattern: GridPath<K>): LayoutFactory<K> {

    const fn: LayoutFactory<K> = (props?: LayoutFactoryProps<K>) => {

        const { gridOptions, nodeOptions, nodeIntents } = props ?? {};

        let diagnostics: DiagnosticEntry[] = [];

        // check pattern validity
         let patternlength=0;

         for(let p of pattern.paths) {
            patternlength += p.steps.length;
         }

        if (pattern.slots.length !== patternlength) {
            const dd: DiagnosticEntry = {
                severity: 'error',
                origin: 'createPatternLayoutFactory',
                issue: {
                    code: 'PARTITIONS_INVALID',
                    message: `Pattern slot count (${pattern.slots.length}) does not match total steps (${pattern.paths.length})`,
                    details: { patternName: pattern.name, slotsCount: pattern.slots.length, pathsCount: pattern.paths.length }

                }
            };
            return {
                grid: undefined,
                diagnostics: [dd]
            };
        }

        const nodeManager = new DefaultNodeManager<K>('allow');

        const uniformGridBuilder = new UniformFlowBuilder();

        for (let path in pattern.paths) {
            const p = pattern.paths[path];
            if (p.origin) {
                uniformGridBuilder.setCursorAt(p.origin);
            }
            for (let step of p.steps) {
                uniformGridBuilder.addNode(step);
            }

        }

        const { nodes, errors, rows, columns } = uniformGridBuilder.getNodes();

        diagnostics.push({
            severity: 'info',
            origin: 'createPatternLayoutFactory',
            issue: {
                code: 'PATTERN_LAYOUT_GENERATED',
                message: `Pattern layout "${pattern.name}" generated with ${nodes.length} nodes.`,
                details: { pattern: pattern, nodesCount: nodes.length, rows, columns }
            }   
        })
        
        diagnostics = diagnostics.concat(errors);

        pattern.slots.forEach((kind, index) => {
            const node = nodes[index];

            if (!node) {
                diagnostics.push({
                    severity: 'error',
                    origin: 'createPatternLayoutFactory',
                    issue: {
                        code: 'NODE_MISSING_FOR_SLOT',
                        message: `No node generated for slot "${kind}" at index ${index}`,
                        details: { patternName: pattern.name, slot: kind, index },
                    },
                });
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