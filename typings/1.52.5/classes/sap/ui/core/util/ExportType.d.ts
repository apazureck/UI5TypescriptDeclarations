declare module 'sap/ui/core/util/ExportType' {
    import { Export } from 'sap/ui/core/util/Export';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IExportTypeSettings extends IManagedObjectSettings {
        fileExtension?: string;
        mimeType?: string;
        charset?: string;
        byteOrderMark?: boolean;
    }

    /**
    
    */
    export class ExportType extends ManagedObject {

        /**
            * Constructor for a new ExportType.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExportTypeSettings);


        /**
            * Handles the generation process of the file.<br>
        */
        protected _generate(oExport: Export): string;

        /**
            * Creates a cell "generator" (inspired by ES6 Generators)
        */
        protected cellGenerator(): any;

        /**
            * Creates a column "generator" (inspired by ES6 Generators)
        */
        protected columnGenerator(): any;

        /**
            * Creates a new subclass of class sap.ui.core.util.ExportType with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Generates the file content.<br> Should be implemented by the individual types!
        */
        protected generate(): string;

        /**
            * Gets current value of property {@link #getByteOrderMark byteOrderMark}.
         * 
         * Whether to prepend an unicode byte order mark when saving as a file (only applies for utf-8 charset).
         * 
         * Default value is `undefined`.
        */
        public getByteOrderMark(): boolean;

        /**
            * Gets current value of property {@link #getCharset charset}.
         * 
         * Charset.
        */
        public getCharset(): string;

        /**
            * Returns the number of columns.
        */
        protected getColumnCount(): number;

        /**
            * Gets current value of property {@link #getFileExtension fileExtension}.
         * 
         * File extension.
        */
        public getFileExtension(): string;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.util.ExportType.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Gets current value of property {@link #getMimeType mimeType}.
         * 
         * MIME type.
        */
        public getMimeType(): string;

        /**
            * Returns the number of rows.
        */
        protected getRowCount(): number;

        /**
            * Creates a row "generator" (inspired by ES6 Generators)
        */
        protected rowGenerator(): any;

        /**
            * Sets a new value for property {@link #getByteOrderMark byteOrderMark}.
         * 
         * Whether to prepend an unicode byte order mark when saving as a file (only applies for utf-8 charset).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `undefined`.
        */
        public setByteOrderMark(bByteOrderMark: boolean): this;

        /**
            * Sets a new value for property {@link #getCharset charset}.
         * 
         * Charset.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCharset(sCharset: string): this;

        /**
            * Sets a new value for property {@link #getFileExtension fileExtension}.
         * 
         * File extension.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFileExtension(sFileExtension: string): this;

        /**
            * Sets a new value for property {@link #getMimeType mimeType}.
         * 
         * MIME type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMimeType(sMimeType: string): this;

    }
}