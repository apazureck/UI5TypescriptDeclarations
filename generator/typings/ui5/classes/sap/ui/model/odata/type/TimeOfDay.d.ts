declare module 'sap/ui/model/odata/type/TimeOfDay' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface ITimeOfDaySettings extends IODataTypeSettings {
    }

    /**
    
    */
    export class TimeOfDay extends ODataType {

        /**
            * Constructor for an OData primitive type `Edm.TimeOfDay`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean, precision?: number, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.TimeOfDay with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type.
        */
        public formatValue(sValue: string, sTargetType: string): string | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.TimeOfDay.
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
            * Parses the given value, which is expected to be of the given type, to a string with an OData V4 Edm.TimeOfDay value.
        */
        public parseValue(sValue: string, sSourceType: string): string | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validates the given value in model representation and meets the type's constraints.
        */
        public validateValue(sValue: string): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }
}