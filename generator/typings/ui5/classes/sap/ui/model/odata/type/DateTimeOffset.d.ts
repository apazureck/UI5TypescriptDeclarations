declare module 'sap/ui/model/odata/type/DateTimeOffset' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DateTimeBase, IDateTimeBaseSettings } from 'sap/ui/model/odata/type/DateTimeBase';

    export interface IDateTimeOffsetSettings extends IDateTimeBaseSettings {
    }

    /**
    
    */
    export class DateTimeOffset extends DateTimeBase {

        /**
            * Constructor for a primitive type `Edm.DateTimeOffset`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean | string, precision?: boolean, V4?: boolean, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.DateTimeOffset with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.DateTimeBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(vValue: any | string, sTargetType: string): any | string;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(oValue: any, sTargetType: string): any | string;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.DateTimeOffset.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the type's name.
        */
        public getName(): string;

        /**
            * Parses the given value to a `Date` instance (OData V2).
        */
        public parseValue(sValue: string, sSourceType: string): any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Parses the given value to a `Date` instance (OData V2) or a string like "2014-11-27T13:47:26Z" (OData V4), depending on the model's OData version.
        */
        public parseValue(sValue: string, sSourceType: string): any | string;

        /**
            * Validates whether the given value in model representation is valid and meets the defined constraints, depending on the model's OData version.
        */
        public validateValue(vValue: any): any;

    }
}