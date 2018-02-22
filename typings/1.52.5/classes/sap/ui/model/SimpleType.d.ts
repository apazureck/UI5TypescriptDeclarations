declare module 'sap/ui/model/SimpleType' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Type, ITypeSettings } from 'sap/ui/model/Type';

    export interface ISimpleTypeSettings extends ITypeSettings {
    }

    /**
    
    */
    export class SimpleType extends Type {

        /**
            * Constructor for a new SimpleType.
        */
        public constructor(oFormatOptions: {}, oConstraints: {});


        /**
            * Creates a new subclass of class sap.ui.model.SimpleType with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Type.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.SimpleType.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns an object which has `format` and `parse` method. These two methods are used for converting between the raw value which is stored in the model and the related primitive type in JavaScript.
         * 
         * If a instance of {@link sap.ui.core.format.DateFormat#constructor DateFormat} or {@link sap.ui.core.format.NumberFormat#constructor NumberFormat} fits the needs, they could also be used as return value.
         * 
         * The default implementation of the `format` and `parse` method simply returns the given parameter. The subclass of {@link sap.ui.model.SimpleType#constructor SimpleType} should override this method if the raw value isn't already a JavaScript primitive type. The overwritten method must return an object which has the `format` and `parse` method implemented.
         * 
         * For example<br> If the type is related to a JavaScript Date object, but the raw value isn't, this method should return an instance of {@link sap.ui.core.format.DateFormat#constructor DateFormat}, which is able to convert between the raw value and a JavaScript Date object.
        */
        protected getModelFormat(): {};

        /**
            * Parse a value of an internal type to the expected value of the model type.
        */
        public parseValue(oValue: any, sInternalType: string): any;

        /**
            * Validate whether a given value in model representation is valid and meets the defined constraints (if any).
        */
        public validateValue(oValue: any): any;

    }
}