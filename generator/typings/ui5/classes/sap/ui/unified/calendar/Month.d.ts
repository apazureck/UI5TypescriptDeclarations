declare module 'sap/ui/unified/calendar/Month' {
    import { Event } from 'sap/ui/base/Event';
    import { DateRange } from 'sap/ui/unified/DateRange';
    import { DateTypeRange } from 'sap/ui/unified/DateTypeRange';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalendarLegend } from 'sap/ui/unified/CalendarLegend';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMonthSettings extends IControlSettings {
        date?: {};
        intervalSelection?: boolean;
        singleSelection?: boolean;
        showHeader?: boolean;
        firstDayOfWeek?: number;
        nonWorkingDays?: number;
        primaryCalendarType?: sap.ui.core.CalendarType;
        secondaryCalendarType?: sap.ui.core.CalendarType;
        width?: sap.ui.core.CSSSize;
        showWeekNumbers?: boolean;
    }

    /**
    
    */
    export class Month extends Control {

        /**
            * Constructor for a new calendar/Month.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMonthSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some disabledDate to the aggregation {@link #getDisabledDates disabledDates}.
        */
        public addDisabledDate(oDisabledDate: DateRange): this;

        /**
            * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
        */
        public addSelectedDate(oSelectedDate: DateRange): this;

        /**
            * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
        */
        public addSpecialDate(oSpecialDate: DateTypeRange): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
         * 
         * Date focus changed
        */
        attachFocus<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * focused date */
            date: {}, /* * focused date is in an other month that the displayed one */
            otherMonth: boolean, /* * focused date is set to the same as before (date in other month clicked) */
            restoreOldDate: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
         * 
         * Date focus changed
        */
        attachFocus<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * focused date */
            date: {}, /* * focused date is in an other month that the displayed one */
            otherMonth: boolean, /* * focused date is set to the same as before (date in other month clicked) */
            restoreOldDate: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
         * 
         * Date selection changed
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
         * 
         * Date selection changed
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * checks if a date is focusable in the current rendered output. So if not rendered or in other month it is not focusable.
        */
        public checkDateFocusable(oDate: {}): boolean;

        /**
            * Destroys all the disabledDates in the aggregation {@link #getDisabledDates disabledDates}.
        */
        public destroyDisabledDates(): this;

        /**
            * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
        */
        public destroySelectedDates(): this;

        /**
            * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
        */
        public destroySpecialDates(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFocus(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * displays the month of a given date without setting the focus
        */
        public displayDate(oDate: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.Month with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:focus focus} to attached listeners.
        */
        protected fireFocus(mParameters?: { date?: {}, otherMonth?: boolean, restoreOldDate?: boolean, }): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getDate date}.
         * 
         * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
        */
        public getDate(): {};

        /**
            * Gets content of aggregation {@link #getDisabledDates disabledDates}.
         * 
         * Date Ranges for disabled dates
        */
        public getDisabledDates(): {};

        /**
            * Gets current value of property {@link #getFirstDayOfWeek firstDayOfWeek}.
         * 
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.
         * 
         * Default value is `-1`.
        */
        public getFirstDayOfWeek(): number;

        /**
            * Gets current value of property {@link #getIntervalSelection intervalSelection}.
         * 
         * If set, interval selection is allowed
         * 
         * Default value is `false`.
        */
        public getIntervalSelection(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
        */
        public getLegend(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.ui.unified.calendar.Month.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
         * 
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
        */
        public getNonWorkingDays(): {};

        /**
            * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
        */
        public getPrimaryCalendarType(): sap.ui.core.CalendarType;

        /**
            * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
         * 
         * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type
        */
        public getSecondaryCalendarType(): sap.ui.core.CalendarType;

        /**
            * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         * 
         * Date Ranges for selected dates of the DatePicker
        */
        public getSelectedDates(): {};

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * If set, a header with the month name is shown
         * 
         * Default value is `false`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
         * 
         * Determines whether the week numbers in the months are displayed.
         * 
         * ** Note: ** For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.
         * 
         * Default value is `true`.
        */
        public getShowWeekNumbers(): boolean;

        /**
            * Gets current value of property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single date or interval, if intervalSelection is enabled, can be selected
         * 
         * Default value is `true`.
        */
        public getSingleSelection(): boolean;

        /**
            * Gets content of aggregation {@link #getSpecialDates specialDates}.
         * 
         * Date Range with type to visualize special days in the Calendar. If one day is assigned to more than one Type, only the first one will be used.
        */
        public getSpecialDates(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of Month
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getDisabledDates disabledDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfDisabledDate(oDisabledDate: DateRange): number;

        /**
            * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSelectedDate(oSelectedDate: DateRange): number;

        /**
            * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSpecialDate(oSpecialDate: DateTypeRange): number;

        /**
            * Inserts a disabledDate into the aggregation {@link #getDisabledDates disabledDates}.
        */
        public insertDisabledDate(oDisabledDate: DateRange, iIndex: number): this;

        /**
            * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
        */
        public insertSelectedDate(oSelectedDate: DateRange, iIndex: number): this;

        /**
            * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
        */
        public insertSpecialDate(oSpecialDate: DateTypeRange, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getDisabledDates disabledDates}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDisabledDates(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSelectedDates(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSpecialDates(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a disabledDate from the aggregation {@link #getDisabledDates disabledDates}.
        */
        public removeDisabledDate(vDisabledDate: number | string | DateRange): DateRange;

        /**
            * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
        */
        public removeSelectedDate(vSelectedDate: number | string | DateRange): DateRange;

        /**
            * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
        */
        public removeSpecialDate(vSpecialDate: number | string | DateTypeRange): DateTypeRange;

        /**
            * Sets a new value for property {@link #getDate date}.
         * 
         * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDate(oDate: {}): this;

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
            * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
         * 
         * If set, interval selection is allowed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIntervalSelection(bIntervalSelection: boolean): this;

        /**
            * Sets the associated {@link #getLegend legend}.
        */
        public setLegend(oLegend: sap.ui.core.ID | CalendarLegend): this;

        /**
            * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
         * 
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNonWorkingDays(sNonWorkingDays: {}): this;

        /**
            * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): this;

        /**
            * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
         * 
         * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * If set, a header with the month name is shown
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
         * 
         * Determines whether the week numbers in the months are displayed.
         * 
         * ** Note: ** For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowWeekNumbers(bShowWeekNumbers: boolean): this;

        /**
            * Sets a new value for property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single date or interval, if intervalSelection is enabled, can be selected
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSingleSelection(bSingleSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of Month
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}