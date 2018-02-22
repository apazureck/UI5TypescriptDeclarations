declare module 'sap/ui/model/analytics/odata4analytics' {
    import { Dimension } from 'sap/ui/model/analytics/odata4analytics';
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';


    export interface IDimensionAttributeSettings {
    }

    /**
    
    */
    export class DimensionAttribute {

        /**
            * Create a representation of a dimension attribute provided by an analytic query. Do not create your own instances.
        */
        public constructor(oQueryResult: QueryResult, oProperty: {});


        /**
            * Get dimension
        */
        public getDimension(): Dimension;

        /**
            * Get the key property
        */
        public getKeyProperty(): {};

        /**
            * Get label
        */
        public getLabelText(): string;

        /**
            * Get the name of the dimension attribute
        */
        public getName(): string;

        /**
            * Get text property related to this dimension attribute
        */
        public getTextProperty(): {};

    }
}