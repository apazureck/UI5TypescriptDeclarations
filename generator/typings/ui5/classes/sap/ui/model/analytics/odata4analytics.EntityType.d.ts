declare module 'sap/ui/model/analytics/odata4analytics' {
    import { RecursiveHierarchy } from 'sap/ui/model/analytics/odata4analytics';


    export interface IEntityTypeSettings {
    }

    /**
    
    */
    export class EntityType {

        /**
            * Create a representation of an OData entity type in the context of an analytic query. Do not create your own instances.
        */
        public constructor(oModel: {}, oSchema: {}, oEntityType: {});


        /**
            * Find property by name
        */
        public findPropertyByName(sPropertyName: string): {};

        /**
            * Get the names of all properties with an associated hierarchy
        */
        public getAllHierarchyPropertyNames(): {};

        /**
            * Get names of properties that can be filtered, that is they can be used in $filter expressions
        */
        public getFilterablePropertyNames(): {};

        /**
            * Get heading of the property with specified name (identified by property metadata annotation sap:heading)
        */
        public getHeadingOfProperty(sPropertyName: string): string;

        /**
            * Get the hierarchy associated to a given property Based on the current specification, hierarchies are always recursive. TODO: Extend behavior when leveled hierarchies get in scope
        */
        public getHierarchy(sName: string): RecursiveHierarchy;

        /**
            * Get key properties of this type
        */
        public getKeyProperties(): {};

        /**
            * Get label of the property with specified name (identified by property metadata annotation sap:label)
        */
        public getLabelOfProperty(sPropertyName: string): string;

        /**
            * Get all properties
        */
        public getProperties(): {};

        /**
            * Get properties for which filter restrictions have been specified
        */
        public getPropertiesWithFilterRestrictions(): {};

        /**
            * Get the fully qualified name for this entity type
        */
        public getQName(): string;

        /**
            * Get quick info of the property with specified name (identified by property metadata annotation sap:quickinfo)
        */
        public getQuickInfoOfProperty(sPropertyName: string): string;

        /**
            * Get names of properties that must be filtered, that is they must appear in every $filter expression
        */
        public getRequiredFilterPropertyNames(): {};

        /**
            * Get names of properties that can be sorted, that is they can be used in $orderby expressions
        */
        public getSortablePropertyNames(): {};

        /**
            * Get the super-ordinate property related to the property with specified name (identified by property metadata annotation sap:super-ordinate)
        */
        public getSuperOrdinatePropertyOfProperty(sPropertyName: string): {};

        /**
            * Get the text property related to the property with specified name (identified by property metadata annotation sap:text)
        */
        public getTextPropertyOfProperty(sPropertyName: string): {};

        /**
            * Get full description for this entity type
        */
        public getTypeDescription(): {};

    }
}