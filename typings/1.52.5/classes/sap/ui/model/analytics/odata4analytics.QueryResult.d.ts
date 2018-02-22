declare module 'sap/ui/model/analytics/odata4analytics' {
    import { Dimension } from 'sap/ui/model/analytics/odata4analytics';
    import { Measure } from 'sap/ui/model/analytics/odata4analytics';
    import { EntitySet } from 'sap/ui/model/analytics/odata4analytics';
    import { EntityType } from 'sap/ui/model/analytics/odata4analytics';
    import { Parameterization } from 'sap/ui/model/analytics/odata4analytics';
    import { Model } from 'sap/ui/model/analytics/odata4analytics';


    export interface IQueryResultSettings {
    }

    /**
    
    */
    export class QueryResult {

        /**
            * Create a representation of an analytic query. Do not create your own instances.
        */
        public constructor(oModel: Model, oEntityType: EntityType, oEntitySet: EntitySet, oParameterization: Parameterization);


        /**
            * Find dimension by name
        */
        public findDimensionByName(sName: string): Dimension;

        /**
            * Find dimension by property name
        */
        public findDimensionByPropertyName(sName: string): Dimension;

        /**
            * Find measure by name
        */
        public findMeasureByName(sName: string): Measure;

        /**
            * Find measure by property name
        */
        public findMeasureByPropertyName(sName: string): Measure;

        /**
            * Get the names of all dimensions included in the query result
        */
        public getAllDimensionNames(): {};

        /**
            * Get all dimensions included in this query result
        */
        public getAllDimensions(): {};

        /**
            * Get the names of all measures included in the query result
        */
        public getAllMeasureNames(): {};

        /**
            * Get all measures included in this query result
        */
        public getAllMeasures(): {};

        /**
            * Get the entity set representing this query result in the OData model
        */
        public getEntitySet(): EntitySet;

        /**
            * Get the entity type defining the type of this query result in the OData model
        */
        public getEntityType(): EntityType;

        /**
            * Get the analytical model containing the entity set for this query result
        */
        public getModel(): {};

        /**
            * Get the name of the query result
        */
        public getName(): string;

        /**
            * Get the parameterization of this query result
        */
        public getParameterization(): Parameterization;

        /**
            * Get property holding the totaled property list
        */
        public getTotaledPropertiesListProperty(): {};

    }
}