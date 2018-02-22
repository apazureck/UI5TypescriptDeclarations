declare module 'sap/ui/model/type/TimeInterval' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DateInterval, IDateIntervalSettings } from 'sap/ui/model/type/DateInterval';

    export interface ITimeIntervalSettings extends IDateIntervalSettings {
    }

    /**
    
    */
    export class TimeInterval extends DateInterval {

        /**
            * Constructor for a Time interval type.
        */
        public constructor(oFormatOptions: { source?: {}, }, oConstraints: { minimum?: any | string, maximum?: any | string, });


        /**
            * Creates a new subclass of class sap.ui.model.type.TimeInterval with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.type.DateInterval.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.type.TimeInterval.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}