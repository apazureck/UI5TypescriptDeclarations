declare module 'sap/ui/core/format/FileSizeFormat' {
    import { Locale } from 'sap/ui/core/Locale';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IFileSizeFormatSettings extends IObjectSettings {
    }

    /**
    
    */
    export class FileSizeFormat extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.format.FileSizeFormat with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format a filesize (in bytes) according to the given format options.
        */
        public format(oValue: number | string): string;

        /**
            * Get an instance of the FileSizeFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
        */
        public static getInstance(oFormatOptions?: {}, oLocale?: Locale): FileSizeFormat;

        /**
            * Returns a metadata object for class sap.ui.core.format.FileSizeFormat.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Parse a string which is formatted according to the given format options.
        */
        public parse(sValue: string): number;

    }
}