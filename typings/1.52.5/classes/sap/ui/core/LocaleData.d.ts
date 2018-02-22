declare module 'sap/ui/core/LocaleData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface ILocaleDataSettings extends IObjectSettings {
    }

    /**
    
    */
    export class LocaleData extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.LocaleData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the defined pattern for representing the calendar week number.
        */
        public getCalendarWeek(sStyle: string, iWeekNumber: number): string;

        /**
            * Get combined datetime pattern with given date and and time style.
        */
        public getCombinedDateTimePattern(sDateStyle: string, sTimeStyle: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Get combined interval pattern using a given pattern and the fallback interval pattern.
         * 
         * If a skeleton based pattern is not available or not wanted, this method can be used to create an interval pattern based on a given pattern, using the fallback interval pattern.
        */
        public getCombinedIntervalPattern(sPattern: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Returns the currency code which is corresponded with the given currency symbol.
        */
        public getCurrencyCodeBySymbol(sCurrencySymbol: string): string;

        /**
            * Returns the number of digits of the specified currency.
        */
        public getCurrencyDigits(sCurrency: string): number;

        /**
            * Returns the short currency formats (like 1K USD, 1M USD....).
        */
        public getCurrencyFormat(sStyle: string, sNumber: string, sPlural: string): string;

        /**
            * Get currency format pattern.
        */
        public getCurrencyPattern(sContext: string): string;

        /**
            * Returns the currency symbol for the specified currency, if no symbol is found the ISO 4217 currency code is returned.
        */
        public getCurrencySymbol(sCurrency: string): string;

        /**
            * Get custom datetime pattern for a given skeleton format.
         * 
         * The format string does contain pattern symbols (e.g. "yMMMd" or "Hms") and will be converted into the pattern in the used locale, which matches the wanted symbols best. The symbols must be in canonical order, that is: Era (G), Year (y/Y), Quarter (q/Q), Month (M/L), Week (w/W), Day-Of-Week (E/e/c), Day (d/D), Hour (h/H/k/K/), Minute (m), Second (s), Timezone (z/Z/v/V/O/X/x)
         * 
         * See http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
        */
        public getCustomDateTimePattern(sSkeleton: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Get interval pattern for a given skeleton format.
         * 
         * The format string does contain pattern symbols (e.g. "yMMMd" or "Hms") and will be converted into the pattern in the used locale, which matches the wanted symbols best. The symbols must be in canonical order, that is: Era (G), Year (y/Y), Quarter (q/Q), Month (M/L), Week (w/W), Day-Of-Week (E/e/c), Day (d/D), Hour (h/H/k/K/), Minute (m), Second (s), Timezone (z/Z/v/V/O/X/x)
         * 
         * See http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
        */
        public getCustomIntervalPattern(sSkeleton: string, vGreatestDiff: {} | string, sCalendarType?: sap.ui.core.CalendarType): string | {};

        /**
            * Get date pattern in format "short", "medium", "long" or "full".
        */
        public getDatePattern(sStyle: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Get datetime pattern in style "short", "medium", "long" or "full".
        */
        public getDateTimePattern(sStyle: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Get day periods in width "narrow", "abbreviated" or "wide".
        */
        public getDayPeriods(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get standalone day periods in width "narrow", "abbreviated" or "wide".
        */
        public getDayPeriodsStandAlone(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get day names in width "narrow", "abbreviated" or "wide".
        */
        public getDays(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get stand alone day names in width "narrow", "abbreviated" or "wide".
        */
        public getDaysStandAlone(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Returns the short decimal formats (like 1K, 1M....).
        */
        public getDecimalFormat(sStyle: string, sNumber: string, sPlural: string): string;

        /**
            * Get decimal format pattern.
        */
        public getDecimalPattern(): string;

        /**
            * Returns the display name for a time unit (second, minute, hour, day, week, month, year).
        */
        public getDisplayName(sType: string, sStyle?: string): any;

        /**
            * Returns the map of era IDs to era dates.
        */
        public getEraDates(sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Returns array of eras.
        */
        public getEras(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Returns the day that usually is regarded as the first day of a week in the current locale.
         * 
         * Days are encoded as integer where Sunday=0, Monday=1 etc.
         * 
         * All week data information in the CLDR is provided for territories (countries). If the locale of this LocaleData doesn't contain country information (e.g. if it contains only a language), then the "likelySubtag" information of the CLDR is taken into account to guess the "most likely" territory for the locale.
        */
        public getFirstDayOfWeek(): number;

        /**
            * Returns the interval format with the given Id (see CLDR documentation for valid Ids) or the fallback format if no interval format with that Id is known.
         * 
         * The empty Id ("") might be used to retrieve the interval format fallback.
        */
        public getIntervalPattern(sId: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Get locale specific language names.
        */
        public getLanguages(): {};

        /**
            * Returns a metadata object for class sap.ui.core.LocaleData.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the required minimal number of days for the first week of a year.
         * 
         * This is the minimal number of days of the week which must be contained in the new year for the week to become the first week of the year. Depending on the country, this is just a single day (in the US) or at least 4 days (in most of Europe).
         * 
         * All week data information in the CLDR is provided for territories (countries). If the locale of this LocaleData doesn't contain country information (e.g. if it contains only a language), then the "likelySubtag" information of the CLDR is taken into account to guess the "most likely" territory for the locale.
        */
        public getMinimalDaysInFirstWeek(): number;

        /**
            * Get month names in width "narrow", "abbreviated" or "wide".
        */
        public getMonths(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get stand alone month names in width "narrow", "abbreviated" or "wide".
        */
        public getMonthsStandAlone(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get number symbol "decimal", "group", "plusSign", "minusSign", "percentSign".
        */
        public getNumberSymbol(sType: string): string;

        /**
            * Get orientation (left-to-right or right-to-left).
        */
        public getOrientation(): string;

        /**
            * Get percent format pattern.
        */
        public getPercentPattern(): string;

        /**
            * Returns an array of all plural categories available in this language.
        */
        public getPluralCategories(): any[];

        /**
            * Returns the plural category (zero, one, two, few, many or other) for the given number value. The number should be passed as a string with dot as decimal separator and the number of decimal/fraction digits as used in the final output. This is needed in order to preserve trailing zeros which are relevant to determine the right plural categpry.
        */
        public getPluralCategory(sNumber: string | number): string;

        /**
            * Returns the preferred calendar type for the current locale which exists in {@link sap.ui.core.CalendarType}
        */
        public getPreferredCalendarType(): sap.ui.core.CalendarType;

        /**
            * Returns the preferred hour pattern symbol (h for 12, H for 24 hours) for the current locale.
        */
        public getPreferredHourSymbol(): string;

        /**
            * Get quarter names in width "narrow", "abbreviated" or "wide".
        */
        public getQuarters(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Get stand alone quarter names in width "narrow", "abbreviated" or "wide".
        */
        public getQuartersStandAlone(sWidth: string, sCalendarType?: sap.ui.core.CalendarType): any[];

        /**
            * Returns the relative day resource pattern (like "Today", "Yesterday", "{0} days ago") based on the given difference of days (0 means today, 1 means tommorrow, -1 means yesterday, ...).
        */
        public getRelativeDay(iDiff: number, sStyle?: string): string;

        /**
            * Returns the relative resource pattern with unit 'hour' (like "in {0} hour(s)", "{0} hour(s) ago" under locale 'en') based on the given difference value (positive value means in the future and negative value means in the past).
         * 
         * There's no pattern defined for 0 difference and the function returns null if 0 is given. In the 0 difference case, you can use the getRelativeMinute or getRelativeSecond function to format the difference using unit 'minute' or 'second'.
        */
        public getRelativeHour(iDiff: number, sStyle?: string): string | any;

        /**
            * Returns the relative resource pattern with unit 'minute' (like "in {0} minute(s)", "{0} minute(s) ago" under locale 'en') based on the given difference value (positive value means in the future and negative value means in the past).
         * 
         * There's no pattern defined for 0 difference and the function returns null if 0 is given. In the 0 difference case, you can use the getRelativeSecond function to format the difference using unit 'second'.
        */
        public getRelativeMinute(iDiff: number, sStyle?: string): string | any;

        /**
            * Returns the relative month resource pattern (like "This month", "Last month", "{0} months ago") based on the given difference of months (0 means this month, 1 means next month, -1 means last month, ...).
        */
        public getRelativeMonth(iDiff: number, sStyle?: string): string;

        /**
            * Returns the relative format pattern with given scale (year, month, week, ...) and difference value.
        */
        public getRelativePattern(sScale: string, iDiff: number, bFuture?: boolean, sStyle?: string): string;

        /**
            * Returns relative time patterns for the given scales as an array of objects containing scale, value and pattern.
         * 
         * The array may contain the following values: "year", "month", "week", "day", "hour", "minute" and "second". If no scales are given, patterns for all available scales will be returned.
         * 
         * The return array will contain objects looking like: `{
         *     scale: "minute",
         *     sign: 1,
         *     pattern: "in {0} minutes"
         * }`
        */
        public getRelativePatterns(aScales: {}, sStyle?: string): {};

        /**
            * Returns the relative resource pattern with unit 'second' (like now, "in {0} seconds", "{0} seconds ago" under locale 'en') based on the given difference value (0 means now, positive value means in the future and negative value means in the past).
        */
        public getRelativeSecond(iDiff: number, sStyle?: string): string;

        /**
            * Returns the relative week resource pattern (like "This week", "Last week", "{0} weeks ago") based on the given difference of weeks (0 means this week, 1 means next week, -1 means last week, ...).
        */
        public getRelativeWeek(iDiff: number, sStyle?: string): string;

        /**
            * Returns the relative year resource pattern (like "This year", "Last year", "{0} year ago") based on the given difference of years (0 means this year, 1 means next year, -1 means last year, ...).
        */
        public getRelativeYear(iDiff: number, sStyle?: string): string;

        /**
            * Get locale specific script names.
        */
        public getScripts(): {};

        /**
            * Get locale specific territory names.
        */
        public getTerritories(): {};

        /**
            * Get time pattern in style "short", "medium", "long" or "full".
        */
        public getTimePattern(sStyle: string, sCalendarType?: sap.ui.core.CalendarType): string;

        /**
            * Returns the last day of a weekend for the given locale.
         * 
         * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
         * 
         * All week data information in the CLDR is provided for territories (countries). If the locale of this LocaleData doesn't contain country information (e.g. if it contains only a language), then the "likelySubtag" information of the CLDR is taken into account to guess the "most likely" territory for the locale.
        */
        public getWeekendEnd(): number;

        /**
            * Returns the first day of a weekend for the given locale.
         * 
         * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
         * 
         * All week data information in the CLDR is provided for territories (countries). If the locale of this LocaleData doesn't contain country information (e.g. if it contains only a language), then the "likelySubtag" information of the CLDR is taken into account to guess the "most likely" territory for the locale.
        */
        public getWeekendStart(): number;

    }
}