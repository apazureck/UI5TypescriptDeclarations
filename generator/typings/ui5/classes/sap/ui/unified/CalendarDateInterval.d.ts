declare module 'sap/ui/unified/CalendarDateInterval' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Calendar, ICalendarSettings } from 'sap/ui/unified/Calendar';

    export interface ICalendarDateIntervalSettings extends ICalendarSettings {
        startDate?: {};
        days?: number;
        showDayNamesLine?: boolean;
        pickerPopup?: boolean;
    }

    /**
    
    */
    export class CalendarDateInterval extends Calendar {

        /**
            * Constructor for a new `CalendarDateInterval`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICalendarDateIntervalSettings);


        /**
            * If more than this number of days are displayed, start and end month are displayed on the button.
        */
        protected _getDaysLarge(): number;

        /**
            * Creates a new subclass of class sap.ui.unified.CalendarDateInterval with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Calendar.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getDays days}.
         * 
         * number of days displayed on phones the maximum rendered number of days is 8.
         * 
         * Default value is `7`.
        */
        public getDays(): number;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarDateInterval.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getPickerPopup pickerPopup}.
         * 
         * If set, the month- and yearPicker opens on a popup
         * 
         * Default value is `false`.
        */
        public getPickerPopup(): boolean;

        /**
            * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single days.
         * 
         * Default value is `true`.
        */
        public getShowDayNamesLine(): boolean;

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date of the Interval
        */
        public getStartDate(): {};

        /**
            * Sets a new value for property {@link #getDays days}.
         * 
         * number of days displayed on phones the maximum rendered number of days is 8.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `7`.
        */
        public setDays(iDays: number): this;

        /**
            * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
         * 
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setFirstDayOfWeek(iFirstDayOfWeek: number): this;

        /**
            * Setter for property `firstDayOfWeek`.
         * 
         * Property `firstDayOfWeek` is not supported in `sap.ui.unified.CalendarDateInterval` control.
        */
        public setFirstDayOfWeek(iFirstDayOfWeek?: number): this;

        /**
            * Sets a new value for property {@link #getMonths months}.
         * 
         * Determines the number of months displayed.
         * 
         * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
         * 
         * ** Note: ** On phones, only one month is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setMonths(iMonths: number): this;

        /**
            * Setter for property `months`.
         * 
         * Property `months` is not supported in `sap.ui.unified.CalendarDateInterval` control.
        */
        public setMonths(iMonths: number): this;

        /**
            * Sets a new value for property {@link #getPickerPopup pickerPopup}.
         * 
         * If set, the month- and yearPicker opens on a popup
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPickerPopup(bPickerPopup: boolean): this;

        /**
            * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single days.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowDayNamesLine(bShowDayNamesLine: boolean): this;

        /**
            * Sets a new value for property {@link #getStartDate startDate}.
         * 
         * Start date of the Interval
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: {}): this;

    }
}