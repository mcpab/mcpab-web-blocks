import {   HierarchyRelations, PayloadMap } from "./hierarchyTypes";


export const defineHierarchyModel = <P extends PayloadMap>(payloadMap: P, model: HierarchyRelations<P>) :HierarchyRelations<P> => {
    return model;
}   