declare module 'sap/ui/model/analytics/odata4analytics' {
    import { Parameterization } from 'sap/ui/model/analytics/odata4analytics';


    export interface IParameterizationRequestSettings {
    }

    /**
    
    */
    export class ParameterizationRequest {


        /**
            * Get the description of the parameterization on which this request operates on
        */
        public getParameterization(): Parameterization;

        /**
            * Get the URI to locate the entity set for the query parameterization.
        */
        public getURIToParameterizationEntitySet(sServiceRootURI: string): any;

        /**
            * Get the URI to locate the parameterization entity for the values assigned to all parameters beforehand. Notice that a value must be supplied for every parameter including those marked as optional. For optional parameters, assign the special value that the service provider uses as an "omitted" value. For example, for services based on BW Easy Queries, this would be an empty string.
        */
        public getURIToParameterizationEntry(sServiceRootURI: string): any;

        /**
            * Assign a value to a parameter
        */
        public setParameterValue(sParameterName: string, sValue: string, sToValue: string): any;

    }
}