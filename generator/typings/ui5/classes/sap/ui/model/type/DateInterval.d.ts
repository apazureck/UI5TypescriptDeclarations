declare module 'sap/ui/model/type/DateInterval' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CompositeType, ICompositeTypeSettings } from 'sap/ui/model/CompositeType';

    export interface IDateIntervalSettings extends ICompositeTypeSettings {
    }

    /**
    
    */
    export class DateInterval extends CompositeType {

        /**
            * Constructor for a Date interval type.
        */
        public constructor(oFormatOptions: { source?: {}, }, oConstraints: { minimum?: any | string, maximum?: any | string, });


        /**
            * Creates a new subclass of class sap.ui.model.type.DateInterval with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.CompositeType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format the given array containing two values to an output value of type string. Other internal types than 'string' and 'any' are not supported by the date interval type. If a source format has been defined for this type, the formatValue does also accept an array with string values as input. This will be parsed into an array of Dates using the source format.
         * 
         * If `aValues` isn't an array, a format exception is thrown. If one of the elements in `aValues` is not defined or null, empty string will be returned.
        */
        public formatValue(aValues: any[], sInternalType: string): any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.type.DateInterval.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parse a string value to an array containing two values. Parsing of other internal types than 'string' is not supported by the DateInterval type. In case a source format has been defined, the two values are formatted using the source format after parsing the inteval string and an array which contains two string values is returned.
        */
        public parseValue(sValue: any, sInternalType: string, aCurrentValues: any[]): any[] | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

    }
}