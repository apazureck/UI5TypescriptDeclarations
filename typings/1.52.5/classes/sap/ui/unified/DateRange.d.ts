declare module 'sap/ui/unified/DateRange' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IDateRangeSettings extends IElementSettings {
        startDate?: {};
        endDate?: {};
    }

    /**
    
    */
    export class DateRange extends Element {

        /**
            * Constructor for a new DateRange.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDateRangeSettings);


        /**
            * Creates a new subclass of class sap.ui.unified.DateRange with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getEndDate endDate}.
         * 
         * End date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.
        */
        public getEndDate(): {};

        /**
            * Returns a metadata object for class sap.ui.unified.DateRange.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date for a date range. This must be a JavaScript date object.
        */
        public getStartDate(): {};

        /**
            * Sets a new value for property {@link #getEndDate endDate}.
         * 
         * End date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setEndDate(oEndDate: {}): this;

        /**
            * Sets a new value for property {@link #getStartDate startDate}.
         * 
         * Start date for a date range. This must be a JavaScript date object.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: {}): this;

    }
}