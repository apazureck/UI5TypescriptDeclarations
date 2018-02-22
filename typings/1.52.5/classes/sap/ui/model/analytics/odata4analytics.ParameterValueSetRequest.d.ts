declare module 'sap/ui/model/analytics/odata4analytics' {
    import { FilterExpression } from 'sap/ui/model/analytics/odata4analytics';
    import { SortExpression } from 'sap/ui/model/analytics/odata4analytics';


    export interface IParameterValueSetRequestSettings {
    }

    /**
    
    */
    export class ParameterValueSetRequest {


        /**
            * Get the filter expression for this request.
         * 
         * Expressions are represented by separate objects. If none exists so far, a new expression object gets created.
        */
        public getFilterExpression(): FilterExpression;

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
            * Get the unescaped URI to fetch the parameter value set.
        */
        public getURIToParameterValueSetEntries(sServiceRootURI: string): string;

        /**
            * Specify which components of the parameter shall be included in the value set.
        */
        public includeParameterText(bIncludeText: boolean): any;

        /**
            * Set the filter expression for this request.
         * 
         * Expressions are represented by separate objects. Calling this method replaces the filter object maintained by this request.
        */
        public setFilterExpression(oFilter: FilterExpression): any;

        /**
            * Set the sort expression for this request.
         * 
         * Expressions are represented by separate objects. Calling this method replaces the sort object maintained by this request.
        */
        public setSortExpression(oSorter: SortExpression): any;

    }
}