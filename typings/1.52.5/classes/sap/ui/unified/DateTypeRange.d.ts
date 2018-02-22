declare module 'sap/ui/unified/DateTypeRange' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DateRange, IDateRangeSettings } from 'sap/ui/unified/DateRange';

    export interface IDateTypeRangeSettings extends IDateRangeSettings {
        type?: sap.ui.unified.CalendarDayType;
    }

    /**
    
    */
    export class DateTypeRange extends DateRange {

        /**
            * Constructor for a new DateTypeRange.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDateTypeRangeSettings);


        /**
            * Creates a new subclass of class sap.ui.unified.DateTypeRange with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.unified.DateTypeRange.
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
            * Gets current value of property {@link #getType type}.
         * 
         * Type of the date range.
         * 
         * Default value is `Type01`.
        */
        public getType(): sap.ui.unified.CalendarDayType;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of the date range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Type01`.
        */
        public setType(sType: sap.ui.unified.CalendarDayType): this;

    }
}