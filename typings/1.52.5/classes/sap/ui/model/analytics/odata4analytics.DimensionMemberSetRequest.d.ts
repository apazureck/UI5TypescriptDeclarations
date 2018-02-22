declare module 'sap/ui/model/analytics/odata4analytics' {
    import { FilterExpression } from 'sap/ui/model/analytics/odata4analytics';
    import { SortExpression } from 'sap/ui/model/analytics/odata4analytics';
    import { Dimension } from 'sap/ui/model/analytics/odata4analytics';
    import { ParameterizationRequest } from 'sap/ui/model/analytics/odata4analytics';


    export interface IDimensionMemberSetRequestSettings {
    }

    /**
    
    */
    export class DimensionMemberSetRequest {

        /**
            * Create a request object for interaction with a dimension value help. Such a value help is served by either the query result entity set, in which case the returned dimension members are limited to those also used in the query result data. Or, the value help is populated by a master data entity set, if made available by the service. In this case, the result will include all valid members for that dimension.
        */
        public constructor(oDimension: Dimension, oParameterizationRequest: ParameterizationRequest, bUseMasterData: boolean);


        /**
            * Get the filter expression for this request.
         * 
         * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
        */
        public getFilterExpression(): FilterExpression;

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
            * Get the URI to locate the entity set for the dimension memebers.
        */
        public getURIToDimensionMemberEntitySet(sServiceRootURI: string): string;

        /**
            * Get the unescaped URI to fetch the dimension members, optionally augmented by text and attributes.
        */
        public getURIToDimensionMemberEntries(sServiceRootURI: string): string;

        /**
            * Set the filter expression for this request.
         * 
         * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
        */
        public setFilterExpression(oFilter: FilterExpression): any;

        /**
            * Set the parameterization request required for retrieving dimension members directly from the query result, if it is parameterized.
        */
        public setParameterizationRequest(oParameterizationRequest: any): any;

        /**
            * Set further options to be applied for the OData request
        */
        public setRequestOptions(bIncludeCount: boolean): any;

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