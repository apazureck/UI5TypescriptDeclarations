declare module 'sap/ui/model/CompositeType' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SimpleType, ISimpleTypeSettings } from 'sap/ui/model/SimpleType';

    export interface ICompositeTypeSettings extends ISimpleTypeSettings {
    }

    /**
    
    */
    export class CompositeType extends SimpleType {

        /**
            * Constructor for a new CompositeType.
        */
        public constructor(oFormatOptions: {}, oConstraints: {});


        /**
            * Creates a new subclass of class sap.ui.model.CompositeType with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format the given set of values in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If aValues is not defined or null, null will be returned.
        */
        public formatValue(aValues: any[], sInternalType: string): any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.CompositeType.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parse a value of an internal type to the expected set of values of the model type.
        */
        public parseValue(oValue: any, sInternalType: string, aCurrentValues: any[]): any[] | any;

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(aValues: any[]): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }
}