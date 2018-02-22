declare module 'sap/ui/model/analytics/odata4analytics' {
    import { Parameter } from 'sap/ui/model/analytics/odata4analytics';
    import { EntitySet } from 'sap/ui/model/analytics/odata4analytics';
    import { EntityType } from 'sap/ui/model/analytics/odata4analytics';
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';


    export interface IParameterizationSettings {
    }

    /**
    
    */
    export class Parameterization {

        /**
            * Create a representation of a parameterization for an analytic query. Do not create your own instances.
        */
        public constructor(oEntityType: EntityType, oEntitySet: EntitySet);


        /**
            * Find parameter by name
        */
        public findParameterByName(sName: string): Parameter;

        /**
            * Get the names of all parameters part of the parameterization
        */
        public getAllParameterNames(): {};

        /**
            * Get all parameters included in this parameterization
        */
        public getAllParameters(): {};

        /**
            * Get the entity set representing this query result in the OData model
        */
        public getEntitySet(): EntitySet;

        /**
            * Get the entity type defining the type of this query result in the OData model
        */
        public getEntityType(): EntityType;

        /**
            * Get the name of the parameter
        */
        public getName(): string;

        /**
            * Get navigation property to query result
        */
        public getNavigationPropertyToQueryResult(): QueryResult;

    }
}