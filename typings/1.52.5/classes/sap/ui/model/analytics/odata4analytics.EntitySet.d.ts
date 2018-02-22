declare module 'sap/ui/model/analytics/odata4analytics' {


    export interface IEntitySetSettings {
    }

    /**
    
    */
    export class EntitySet {

        /**
            * Create a representation of an OData entity set in the context of an analytic query. Do not create your own instances.
        */
        public constructor(oModel: {}, oSchema: {}, oContainer: {}, oEntitySet: {}, oEntityType: {});


        /**
            * Get entity type used for this entity set
        */
        public getEntityType(): {};

        /**
            * Get the fully qualified name for this entity type
        */
        public getQName(): string;

        /**
            * Get full description for this entity set
        */
        public getSetDescription(): {};

        /**
            * Get names of properties in this entity set that can be updated
        */
        public getUpdatablePropertyNameSet(): {};

    }
}