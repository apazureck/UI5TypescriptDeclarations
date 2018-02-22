declare module 'sap/ui/core/Configuration' {
    import { Locale } from 'sap/ui/core/Locale';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IFormatSettingsSettings extends IObjectSettings {
    }

    /**
    
    */
    export class FormatSettings extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.Configuration.FormatSettings with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the currently set date pattern or undefined if no pattern has been defined.
        */
        public getDatePattern(): any;

        /**
            * Returns the locale to be used for formatting.
         * 
         * If no such locale has been defined, this method falls back to the language, see {@link sap.ui.core.Configuration#getLanguage Configuration.getLanguage()}.
         * 
         * If any user preferences for date, time or number formatting have been set, and if no format locale has been specified, then a special private use subtag is added to the locale, indicating to the framework that these user preferences should be applied.
        */
        public getFormatLocale(): Locale;

        /**
            * Returns the currently set customizing data for Islamic calendar support
        */
        public getLegacyDateCalendarCustomizing(): {};

        /**
            * Returns the currently set legacy ABAP date format (its id) or undefined if none has been set.
        */
        public getLegacyDateFormat(): any;

        /**
            * Returns the currently set legacy ABAP number format (its id) or undefined if none has been set.
        */
        public getLegacyNumberFormat(): any;

        /**
            * Returns the currently set legacy ABAP time format (its id) or undefined if none has been set.
        */
        public getLegacyTimeFormat(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Configuration.FormatSettings.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the currently set number symbol of the given type or undefined if no symbol has been defined.
        */
        public getNumberSymbol(): any;

        /**
            * Returns the currently set time pattern or undefined if no pattern has been defined.
        */
        public getTimePattern(): any;

        /**
            * Defines the preferred format pattern for the given date format style.
         * 
         * Calling this method with a null or undefined pattern removes a previously set pattern.
         * 
         * If a pattern is defined, it will be preferred over patterns derived from the current locale.
         * 
         * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
         * 
         * After changing the date pattern, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setDatePattern(sStyle: string, sPattern: string): this;

        /**
            * Defines the day used as the first day of the week.
         * 
         * The day is set as an integer value between 0 (Sunday) and 6 (Saturday). Calling this method with a null or undefined symbol removes a previously set value.
         * 
         * If a value is defined, it will be preferred over values derived from the current locale.
         * 
         * Usually in the US the week starts on Sunday while in most European countries on Monday. There are special cases where you want to have the first day of week set independent of the user locale.
         * 
         * After changing the first day of week, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setFirstDayOfWeek(iValue: number): this;

        /**
            * Allows to specify the customizing data for Islamic calendar support
        */
        public setLegacyDateCalendarCustomizing(aMappings: {}): this;

        /**
            * Allows to specify one of the legacy ABAP date formats.
         * 
         * This method modifies the date patterns for 'short' and 'medium' style with the corresponding ABAP format. When called with a null or undefined format id, any previously applied format will be removed.
         * 
         * After changing the legacy date format, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
         * 
         * Note: Iranian date format 'C' is NOT yet supported by UI5. It's accepted by this method for convenience (user settings from ABAP system can be used without filtering), but it's ignored. Instead, the formats from the current format locale will be used and a warning will be logged.
        */
        public setLegacyDateFormat(sFormatId: string): this;

        /**
            * Allows to specify one of the legacy ABAP number format.
         * 
         * This method will modify the 'group' and 'decimal' symbols. When called with a null or undefined format id, any previously applied format will be removed.
         * 
         * After changing the legacy number format, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setLegacyNumberFormat(sFormatId: string): this;

        /**
            * Allows to specify one of the legacy ABAP time formats.
         * 
         * This method sets the time patterns for 'short' and 'medium' style to the corresponding ABAP formats and sets the day period texts to "AM"/"PM" or "am"/"pm" respectively. When called with a null or undefined format id, any previously applied format will be removed.
         * 
         * After changing the legacy time format, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setLegacyTimeFormat(sFormatId: string): this;

        /**
            * Defines the string to be used for the given number symbol.
         * 
         * Calling this method with a null or undefined symbol removes a previously set symbol string. Note that an empty string is explicitly allowed.
         * 
         * If a symbol is defined, it will be preferred over symbols derived from the current locale.
         * 
         * See class {@link sap.ui.core.format.NumberFormat} for details about the symbols.
         * 
         * After changing the number symbol, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setNumberSymbol(sStyle: string, sSymbol: string): this;

        /**
            * Defines the preferred format pattern for the given time format style.
         * 
         * Calling this method with a null or undefined pattern removes a previously set pattern.
         * 
         * If a pattern is defined, it will be preferred over patterns derived from the current locale.
         * 
         * See class {@link sap.ui.core.format.DateFormat} for details about the pattern syntax.
         * 
         * After changing the time pattern, the framework tries to update localization specific parts of the UI. See the documentation of {@link sap.ui.core.Configuration#setLanguage} for details and restrictions.
        */
        public setTimePattern(sStyle: string, sPattern: string): this;

    }
}