declare module 'sap/ui/model/analytics/AnalyticalTreeBindingAdapter' {


    export interface IAnalyticalTreeBindingAdapterSettings {
    }

    export class AnalyticalTreeBindingAdapter {


        /**
            * Retrieves the currently set number of expanded levels from the Binding (commonly an AnalyticalBinding).
        */
        protected getNumberOfExpandedLevels(): number;

        /**
            * Checks if the AnalyticalBinding has totaled measures available. Used for rendering sum rows.
        */
        public hasTotaledMeasures(): boolean;

        /**
            * Sets the number of expanded levels on the TreeBinding (commonly an AnalyticalBinding). This is NOT the same as AnalyticalTreeBindingAdapter#collapse or AnalyticalTreeBindingAdapter#expand. Setting the number of expanded levels leads to different requests. This function is used by the AnalyticalTable for the ungroup/ungroup-all feature.
        */
        protected setNumberOfExpandedLevels(iLevels: number): any;

    }
}