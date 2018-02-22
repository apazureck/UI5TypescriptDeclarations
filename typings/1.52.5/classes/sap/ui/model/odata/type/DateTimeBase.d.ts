declare module 'sap/ui/model/odata/type/DateTimeBase' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface IDateTimeBaseSettings extends IODataTypeSettings {
    }

    /**
    
    */
    export class DateTimeBase extends ODataType {

        /**
            * Base constructor for the primitive types `Edm.DateTime` and `Edm.DateTimeOffset`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { isDateOnly?: boolean, nullable?: boolean | string, precision?: boolean, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.DateTimeBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(oValue: any, sTargetType: string): any | string;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.DateTimeBase.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parses the given value to a `Date` instance (OData V2).
        */
        public parseValue(sValue: string, sSourceType: string): any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validates whether the given value in model representation is valid and meets the defined constraints.
        */
        public validateValue(oValue: any): any;

    }
}