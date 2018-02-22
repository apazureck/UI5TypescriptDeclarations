declare module 'sap/ui/model/odata/type/Decimal' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface IDecimalSettings extends IODataTypeSettings {
    }

    /**
    
    */
    export class Decimal extends ODataType {

        /**
            * Constructor for a primitive type `Edm.Decimal`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { maximum?: string, maximumExclusive?: boolean, minimum?: string, minimumExclusive?: boolean, nullable?: boolean | string, precision?: number | string, scale?: number | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Decimal with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Formats the given value to the given target type. When formatting to "string" the type's constraint `scale` is taken into account.
        */
        public formatValue(sValue: string, sTargetType: string): number | string | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Decimal.
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
            * Parses the given value, which is expected to be of the given type, to a decimal in `string` representation.
        */
        public parseValue(vValue: string | number, sSourceType: string): string | any;

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