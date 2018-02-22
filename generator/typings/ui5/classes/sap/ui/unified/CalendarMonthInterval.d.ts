declare module 'sap/ui/unified/CalendarMonthInterval' {
    import { Event } from 'sap/ui/base/Event';
    import { DateRange } from 'sap/ui/unified/DateRange';
    import { DateTypeRange } from 'sap/ui/unified/DateTypeRange';
    import { Calendar } from 'sap/ui/unified/Calendar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalendarLegend } from 'sap/ui/unified/CalendarLegend';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICalendarMonthIntervalSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        startDate?: {};
        intervalSelection?: boolean;
        singleSelection?: boolean;
        months?: number;
        pickerPopup?: boolean;
        minDate?: {};
        maxDate?: {};
    }

    /**
    
    */
    export class CalendarMonthInterval extends Control {

        /**
            * Constructor for a new `CalendarMonthInterval`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICalendarMonthIntervalSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
        */
        public addSelectedDate(oSelectedDate: DateRange): this;

        /**
            * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
        */
        public addSpecialDate(oSpecialDate: DateTypeRange): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * Month selection was cancelled
        */
        attachCancel<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * Month selection was cancelled
        */
        attachCancel<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * Month selection changed
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * Month selection changed
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * `startDate` was changed while navigation in `CalendarMonthInterval`
        */
        attachStartDateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         * 
         * `startDate` was changed while navigation in `CalendarMonthInterval`
        */
        attachStartDateChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
        */
        public destroySelectedDates(): this;

        /**
            * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
        */
        public destroySpecialDates(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancel(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarMonthInterval`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStartDateChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Displays a month in the `CalendarMonthInterval` but doesn't set the focus.
        */
        public displayDate(oDatetime: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.CalendarMonthInterval with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:cancel cancel} to attached listeners.
        */
        protected fireCancel(mParameters?: {}): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: {}): this;

        /**
            * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
        */
        protected fireStartDateChange(mParameters?: {}): this;

        /**
            * Sets the focused month of the `CalendarMonthInterval`.
        */
        public focusDate(oDatetime: {}): Calendar;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

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
            * Gets current value of property {@link #getMaxDate maxDate}.
         * 
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the month of the `maxDate`.
        */
        public getMaxDate(): {};

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarMonthInterval.
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
            * Gets current value of property {@link #getMinDate minDate}.
         * 
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month of the `minDate`.
        */
        public getMinDate(): {};

        /**
            * Gets current value of property {@link #getMonths months}.
         * 
         * Number of months displayed
         * 
         * ** Note: ** On phones, the maximum number of months displayed in the row is always 6.
         * 
         * Default value is `12`.
        */
        public getMonths(): number;

        /**
            * Gets current value of property {@link #getPickerPopup pickerPopup}.
         * 
         * If set, the yearPicker opens on a popup
         * 
         * Default value is `false`.
        */
        public getPickerPopup(): boolean;

        /**
            * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         * 
         * Date ranges for selected dates of the `CalendarMonthInterval`.
         * 
         * If `singleSelection` is set, only the first entry is used.
         * 
         * ** Note: ** Even if only one day is selected, the whole corresponding month is selected.
        */
        public getSelectedDates(): {};

        /**
            * Gets current value of property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         * 
         * ** Note: ** Selection of multiple intervals is not supported in the current version.
         * 
         * Default value is `true`.
        */
        public getSingleSelection(): boolean;

        /**
            * Gets content of aggregation {@link #getSpecialDates specialDates}.
         * 
         * Date ranges with type to visualize special months in the `CalendarMonthInterval`. If one day is assigned to more than one type, only the first one will be used.
         * 
         * ** Note: ** Even if only one day is set as a special day, the whole corresponding month is displayed in this way.
        */
        public getSpecialDates(): {};

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month in the displayed row.
        */
        public getStartDate(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSelectedDate(oSelectedDate: DateRange): number;

        /**
            * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSpecialDate(oSpecialDate: DateTypeRange): number;

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
            * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
        */
        public removeSelectedDate(vSelectedDate: number | string | DateRange): DateRange;

        /**
            * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
        */
        public removeSpecialDate(vSpecialDate: number | string | DateTypeRange): DateTypeRange;

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
            * Sets a new value for property {@link #getMaxDate maxDate}.
         * 
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the month of the `maxDate`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxDate(oMaxDate: {}): this;

        /**
            * Sets a new value for property {@link #getMinDate minDate}.
         * 
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month of the `minDate`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinDate(oMinDate: {}): this;

        /**
            * Sets a new value for property {@link #getMonths months}.
         * 
         * Number of months displayed
         * 
         * ** Note: ** On phones, the maximum number of months displayed in the row is always 6.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setMonths(iMonths: number): this;

        /**
            * Sets a new value for property {@link #getPickerPopup pickerPopup}.
         * 
         * If set, the yearPicker opens on a popup
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPickerPopup(bPickerPopup: boolean): this;

        /**
            * Sets a new value for property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         * 
         * ** Note: ** Selection of multiple intervals is not supported in the current version.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSingleSelection(bSingleSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getStartDate startDate}.
         * 
         * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month in the displayed row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: {}): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}