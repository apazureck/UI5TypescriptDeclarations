declare module 'sap/ui/core/Locale' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface ILocaleSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Locale extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.Locale with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Get the locale extension as a single string or `null`.
         * 
         * The extension always consists of a singleton character (not 'x'), a dash '-' and one or more extension token, each separated again with a dash.
         * 
         * Use {@link #getExtensions} to get the individual extension tokens as an array.
        */
        public getExtension(): string;

        /**
            * Get the locale extensions as an array of tokens.
         * 
         * The leading singleton and the separating dashes are not part of the result. If there is no extensions section in the locale tag, an empty array is returned.
        */
        public getExtensionSubtags(): {};

        /**
            * Get the locale language.
         * 
         * Note that the case might differ from the original script tag (Lower case is enforced as recommended by BCP47/ISO639).
        */
        public getLanguage(): string;

        /**
            * Returns a metadata object for class sap.ui.core.Locale.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Get the locale private use section or `null`.
        */
        public getPrivateUse(): string;

        /**
            * Get the locale private use section as an array of tokens.
         * 
         * The leading singleton and the separating dashes are not part of the result. If there is no private use section in the locale tag, an empty array is returned.
        */
        public getPrivateUseSubtags(): {};

        /**
            * Get the locale region or `null` if none was specified.
         * 
         * Note that the case might differ from the original script tag (Upper case is enforced as recommended by BCP47/ISO3166-1).
        */
        public getRegion(): string;

        /**
            * Best guess to get a proper SAP Logon Language for this locale.
         * 
         * Conversions taken into account:  * use the language part only * convert old ISO639 codes to newer ones (e.g. 'iw' to 'he') * for Chinese, map 'Traditional Chinese' to SAP proprietary code 'zf' * map private extensions x-sap1q and x-sap2q to SAP pseudo languages '1Q' and '2Q' * remove ext. language sub tags * convert to uppercase 
         * 
         * Note that the conversion also returns a result for languages that are not supported by the default set of SAP languages. This method has no knowledge about the concrete languages of any given backend system.
        */
        public getSAPLogonLanguage(): string;

        /**
            * Get the locale script or `null` if none was specified.
         * 
         * Note that the case might differ from the original language tag (Upper case first letter and lower case reminder enforced as recommended by BCP47/ISO15924)
        */
        public getScript(): string;

        /**
            * Get the locale variants as a single string or `null`.
         * 
         * Multiple variants are separated by a dash '-'.
        */
        public getVariant(): string;

        /**
            * Get the locale variants as an array of individual variants.
         * 
         * The separating dashes are not part of the result. If there is no variant section in the locale tag, an empty array is returned.
        */
        public getVariantSubtags(): {};

    }
}