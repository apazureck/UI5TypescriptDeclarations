declare module 'sap/ui/model/type/String' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SimpleType, ISimpleTypeSettings } from 'sap/ui/model/SimpleType';

    export interface IStringSettings extends ISimpleTypeSettings {
    }

    /**
    
    */
    export class String extends SimpleType {

        /**
            * Constructor for a String type.
        */
        public constructor(oFormatOptions: {}, oConstraints: { maxLength?: number, minLength?: number, startsWith?: string, startsWithIgnoreCase?: string, endsWith?: string, endsWithIgnoreCase?: string, contains?: string, equals?: string, search?: RegExp, });


        /**
            * Creates a new subclass of class sap.ui.model.type.String with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.type.String.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}