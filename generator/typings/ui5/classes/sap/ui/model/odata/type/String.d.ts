declare module 'sap/ui/model/odata/type/String' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface IStringSettings extends IODataTypeSettings {
    }

    /**
    
    */
    export class String extends ODataType {

        /**
            * Constructor for an OData primitive type `Edm.String`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { isDigitSequence?: boolean | string, maxLength?: number | string, nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.String with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type. If `isDigitSequence` constraint of this type is set to `true` and the target type is any or string and the given value contains only digits, the leading zeros are truncated.
        */
        public formatValue(sValue: string, sTargetType: string): string | number | boolean | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.String.
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
            * Parses the given value which is expected to be of the given type to a string. If `isDigitSequence` constraint of this type is set to `true` and the parsed string is a sequence of digits, then the parsed string is either enhanced with leading zeros, if `maxLength` constraint is given, or leading zeros are removed from parsed string.
         * 
         * Note: An empty input string (`""`) is parsed to `null`. This value will be rejected with a {@link sap.ui.model.ValidateException ValidateException} by {@link #validateValue} if the constraint `nullable` is `false`.
        */
        public parseValue(vValue: string | number | boolean, sSourceType: string): string | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validates whether the given value in model representation is valid and meets the defined constraints.
        */
        public validateValue(sValue: string): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }
}