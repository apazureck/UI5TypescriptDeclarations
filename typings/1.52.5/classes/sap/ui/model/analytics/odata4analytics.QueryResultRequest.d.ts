declare module 'sap/ui/model/analytics/odata4analytics' {
    import { FilterExpression } from 'sap/ui/model/analytics/odata4analytics';
    import { ParameterizationRequest } from 'sap/ui/model/analytics/odata4analytics';
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';
    import { SortExpression } from 'sap/ui/model/analytics/odata4analytics';


    export interface IQueryResultRequestSettings {
    }

    /**
    
    */
    export class QueryResultRequest {

        /**
            * Create a request object for interaction with a query result.
        */
        public constructor(oQueryResult: QueryResult, oParameterizationRequest: ParameterizationRequest);


        /**
            * Add one or more dimensions to the aggregation level
        */
        public addToAggregationLevel(aDimensionName: any): any;

        /**
            * Get the names of the dimensions included in the aggregation level
        */
        public getAggregationLevel(): any[];

        /**
            * Get details about a dimensions included in the aggregation level
        */
        public getAggregationLevelDetails(sDImensionName: any): {};

        /**
            * Get the filter expression for this request.
         * 
         * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
        */
        public getFilterExpression(): FilterExpression;

        /**
            * Get the names of the measures included in the query result request
        */
        public getMeasureNames(): any[];

        /**
            * Retrieves the current parametrization request
        */
        public getParameterizationRequest(): ParameterizationRequest;

        /**
            * Get the description of the query result on which this request operates on
        */
        public getQueryResult(): QueryResult;

        /**
            * Returns the current page boundaries as object with properties `start` and `end`. If the end of the page is unbounded, `end` is null.
        */
        public getResultPageBoundaries(): {};

        /**
            * Get the sort expression for this request.
         * 
         * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
        */
        public getSortExpression(): SortExpression;

        /**
            * Get the value of a query option for the OData request URI corresponding to this request.
        */
        public getURIQueryOptionValue(sQueryOptionName: string): string;

        /**
            * Get the URI to locate the entity set for the query result.
        */
        public getURIToQueryResultEntitySet(sServiceRootURI: string): string;

        /**
            * Get the unescaped URI to fetch the query result.
        */
        public getURIToQueryResultEntries(sServiceRootURI: string, sResourcePath: string): string;

        /**
            * Specify which dimension components shall be included in the query result. The settings get applied to the currently defined aggregation level.
        */
        public includeDimensionKeyTextAttributes(sDimensionName: string, bIncludeKey: boolean, bIncludeText: boolean, aAttributeName: any): any;

        /**
            * Specify which measure components shall be included in the query result. The settings get applied to the currently set measures.
        */
        public includeMeasureRawFormattedValueUnit(sMeasureName: string, bIncludeRawValue: boolean, bIncludeFormattedValue: boolean, bIncludeUnit: boolean): any;

        /**
            * Remove one or more dimensions from the aggregation level. The method also removed a potential sort expression on the dimension.
        */
        public removeFromAggregationLevel(aDimensionName: any): any;

        /**
            * Set the aggregation level for the query result request. By default, the query result will include the properties holding the keys of the given dimensions. This setting can be changed using includeDimensionKeyTextAttributes.
        */
        public setAggregationLevel(aDimensionName: any): any;

        /**
            * Set the filter expression for this request.
         * 
         * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
        */
        public setFilterExpression(oFilter: FilterExpression): any;

        /**
            * Set the measures to be included in the query result request. By default, the query result will include the properties holding the raw values of the given measures. This setting can be changed using includeMeasureRawFormattedValueUnit.
        */
        public setMeasures(aMeasureName: any): any;

        /**
            * Set the parameterization request required for interactions with the query result of parameterized queries. This method provides an alternative way to assign a parameterization request to a query result request.
        */
        public setParameterizationRequest(oParameterizationRequest: any): any;

        /**
            * Set further options to be applied for the OData request to fetch the query result
        */
        public setRequestOptions(bIncludeEntityKey: boolean, bIncludeCount: boolean, bReturnNoEntities: boolean): any;

        /**
            * Set the resource path to be considered for the OData request URI of this query request object. This method provides an alternative way to assign a path comprising a parameterization. If a path is provided, it overwrites any parameterization object that might have been specified separately.
        */
        public setResourcePath(sResourcePath: string): any;

        /**
            * Specify that only a page of the query result shall be returned. A page is described by its boundaries, that are row numbers for the first and last rows in the query result to be returned.
        */
        public setResultPageBoundaries(start: number, end: number): any;

        /**
            * Set the sort expression for this request.
         * 
         * Expressions are represented by separate objects. Calling this method replaces the sort object maintained by this request.
        */
        public setSortExpression(oSorter: SortExpression): any;

    }
}