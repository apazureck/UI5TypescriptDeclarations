declare module 'sap/ui/model/analytics/odata4analytics' {
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';


    export interface IModelSettings {
    }

    /**
    
    */
    export class Model {

        /**
            * Create a representation of the analytical semantics of OData service metadata
        */
        public constructor(oModelReference: {}, mParameter: {});


        /**
            * Find analytic query result by name
        */
        public findQueryResultByName(sName: string): QueryResult;

        /**
            * Get the names of all query results (entity sets) offered by the model
        */
        public getAllQueryResultNames(): {};

        /**
            * Get all query results offered by the model
        */
        public getAllQueryResults(): {};

        /**
            * Get underlying OData model provided by SAPUI5
        */
        public getODataModel(): {};

    }
}