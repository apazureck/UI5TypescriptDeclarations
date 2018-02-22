declare module 'sap/ui/model/analytics/odata4analytics' {
    import { EntityType } from 'sap/ui/model/analytics/odata4analytics';


    export interface IRecursiveHierarchySettings {
    }

    /**
    
    */
    export class RecursiveHierarchy {

        /**
            * Create a representation of a recursive hierarchy defined on one multiple properties in an OData entity type query. Do not create your own instances.
        */
        public constructor(oEntityType: EntityType, oNodeIDProperty: {}, oParentNodeIDProperty: {}, oNodeLevelProperty: {}, oNodeValueProperty: {});


        /**
            * Get the property holding the node ID of the hierarchy node
        */
        public getNodeIDProperty(): {};

        /**
            * Get the property holding the level of the hierarchy node
        */
        public getNodeLevelProperty(): {};

        /**
            * Get the property holding the value that is structurally organized by the hierarchy
        */
        public getNodeValueProperty(): {};

        /**
            * Get the property holding the parent node ID of the hierarchy node
        */
        public getParentNodeIDProperty(): {};

        /**
            * Get indicator if this is a leveled hierarchy
        */
        public isLeveledHierarchy(): boolean;

        /**
            * Get indicator if this is a recursive hierarchy
        */
        public isRecursiveHierarchy(): boolean;

    }
}