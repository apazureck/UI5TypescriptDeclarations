declare module 'sap/ui/model/type/FileSize' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SimpleType, ISimpleTypeSettings } from 'sap/ui/model/SimpleType';

    export interface IFileSizeSettings extends ISimpleTypeSettings {
    }

    /**
    
    */
    export class FileSize extends SimpleType {

        /**
            * Constructor for a FileSize type.
        */
        public constructor(oFormatOptions: { source?: {}, }, oConstraints: { minimum?: number, maximum?: number, });


        /**
            * Creates a new subclass of class sap.ui.model.type.FileSize with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.SimpleType.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.type.FileSize.
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