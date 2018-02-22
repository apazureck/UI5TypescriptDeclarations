declare module 'sap/ui/model/analytics/odata4analytics' {
    import { Parameterization } from 'sap/ui/model/analytics/odata4analytics';


    export interface IParameterSettings {
    }

    /**
    
    */
    export class Parameter {

        /**
            * Create a representation of a single parameter contained in a parameterization. Do not create your own instances.
        */
        public constructor(oParameterization: Parameterization, oProperty: {});


        /**
            * Get parameterization containing this parameter
        */
        public getContainingParameterization(): Parameterization;

        /**
            * Get label
        */
        public getLabelText(): string;

        /**
            * Get the name of the parameter
        */
        public getName(): string;

        /**
            * Get property for the parameter representing the peer boundary of the same interval
        */
        public getPeerIntervalBoundaryParameter(): this;

        /**
            * Get property
        */
        public getProperty(): {};

        /**
            * Get text property related to this parameter
        */
        public getTextProperty(): {};

        /**
            * Get the URI to locate the entity set holding the value set, if it is available.
        */
        public getURIToValueEntitySet(sServiceRootURI: string): any;

        /**
            * Get indicator if the parameter represents an interval boundary
        */
        public isIntervalBoundary(): boolean;

        /**
            * Get indicator if the parameter represents the lower boundary of an interval
        */
        public isLowerIntervalBoundary(): boolean;

        /**
            * Get indicator whether or not the parameter is optional
        */
        public isOptional(): boolean;

        /**
            * Get indicator if a set of values is available for this parameter. Typically, this is true for parameters with a finite set of known values such as products, business partners in different roles, organization units, and false for integer or date parameters
        */
        public isValueSetAvailable(): boolean;

    }
}