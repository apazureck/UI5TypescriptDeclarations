declare module 'sap/ui/core/format/NumberFormat' {
    import { Locale } from 'sap/ui/core/Locale';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface INumberFormatSettings extends IObjectSettings {
    }

    /**
    
    */
    export class NumberFormat extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.format.NumberFormat with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Format a number according to the given format options.
        */
        public format(oValue: number | any[], sMeasure?: string): string;

        /**
            * Get a currency instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getCurrencyInstance(oFormatOptions?: {}, oLocale?: Locale): NumberFormat;

        /**
            * Get a float instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getFloatInstance(oFormatOptions?: {}, oLocale?: Locale): NumberFormat;

        /**
            * Get an integer instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has TOWARDS_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getIntegerInstance(oFormatOptions?: {}, oLocale?: Locale): NumberFormat;

        /**
            * Returns a metadata object for class sap.ui.core.format.NumberFormat.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Get a percent instance of the NumberFormat, which can be used for formatting.
         * 
         * If no locale is given, the currently configured {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale formatLocale} will be used.
         * 
         * This instance has HALF_AWAY_FROM_ZERO set as default rounding mode. Please set the roundingMode property in oFormatOptions to change the default value.
        */
        public static getPercentInstance(oFormatOptions?: {}, oLocale?: Locale): NumberFormat;

        /**
            * Parse a string which is formatted according to the given format options.
        */
        public parse(sValue: string): number | any[];

    }
}