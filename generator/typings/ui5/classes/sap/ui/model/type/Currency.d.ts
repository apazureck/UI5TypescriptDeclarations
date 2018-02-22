declare module 'sap/ui/model/type/Currency' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CompositeType, ICompositeTypeSettings } from 'sap/ui/model/CompositeType';

    export interface ICurrencySettings extends ICompositeTypeSettings {
    }

    /**
    
    */
    export class Currency extends CompositeType {

        /**
            * Constructor for a Currency type.
        */
        public constructor(oFormatOptions: { source?: {}, }, oConstraints: { minimum?: number, maximum?: number, });


        /**
            * Creates a new subclass of class sap.ui.model.type.Currency with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.CompositeType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format the given array containing amount and currency code to an output value of type string. Other internal types than 'string' are not supported by the Currency type. If a source format has been defined for this type, the formatValue does also accept a string value as input, which will be parsed into an array using the source format. If aValues is not defined or null, null will be returned.
        */
        public formatValue(vValue: any[] | string, sInternalType: string): any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Format the given set of values in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If aValues is not defined or null, null will be returned.
        */
        public formatValue(aValues: any[], sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.type.Currency.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parse a string value to an array containing amount and currency. Parsing of other internal types than 'string' is not supported by the Currency type. In case a source format has been defined, after parsing the currency is formatted using the source format and a string value is returned instead.
        */
        public parseValue(vValue: any, sInternalType: string, aCurrentValues: any[]): any[] | string | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Parse a value of an internal type to the expected set of values of the model type.
        */
        public parseValue(oValue: any, sInternalType: string, aCurrentValues: any[]): any[] | any;

    }
}