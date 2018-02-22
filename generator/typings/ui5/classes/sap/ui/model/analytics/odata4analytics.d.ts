declare module 'sap/ui/model/analytics/odata4analytics' {
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';
    import { EntitySet } from 'sap/ui/model/analytics/odata4analytics';


    export interface IDimensionSettings {
    }

    /**
    
    */
    export class Dimension {

        /**
            * Create a representation of a dimension provided by an analytic query. Do not create your own instances.
        */
        public constructor(oQueryResult: QueryResult, oProperty: {});


        /**
            * Find attribute by name
        */
        public findAttributeByName(sName: string): this;

        /**
            * Get the names of all attributes included in this dimension
        */
        public getAllAttributeNames(): {};

        /**
            * Get all attributes of this dimension
        */
        public getAllAttributes(): {};

        /**
            * Get query result containing this dimension
        */
        public getContainingQueryResult(): QueryResult;

        /**
            * Get associated hierarchy
        */
        public getHierarchy(): {};

        /**
            * Get the key property
        */
        public getKeyProperty(): {};

        /**
            * Get label
        */
        public getLabelText(): string;

        /**
            * Get master data entity set for this dimension
        */
        public getMasterDataEntitySet(): EntitySet;

        /**
            * Get the name of the dimension
        */
        public getName(): string;

        /**
            * Get super-ordinate dimension
        */
        public getSuperOrdinateDimension(): {};

        /**
            * Get text property related to this dimension
        */
        public getTextProperty(): {};

        /**
            * Get indicator whether or not master data is available for this dimension
        */
        public hasMasterData(): boolean;

    }
}