declare module 'sap/ui/model/odata/type/Stream' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType, IODataTypeSettings } from 'sap/ui/model/odata/type/ODataType';

    export interface IStreamSettings extends IODataTypeSettings {
    }

    /**
    
    */
    export class Stream extends ODataType {

        /**
            * Constructor for an OData primitive type `Edm.Stream`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Stream with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.ODataType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the input value unchanged.
        */
        public formatValue(sValue: string, sTargetType: string): string | any;

        /**
            * Format the given value in model representation to an output value in the given internal type. This happens according to the format options, if target type is 'string'. If oValue is not defined or null, null will be returned.
        */
        public formatValue(oValue: any, sInternalType: string): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Stream.
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
            * Method not supported
        */
        public parseValue(): any;

        /**
            * Method not supported
        */
        public validateValue(): any;

    }
}