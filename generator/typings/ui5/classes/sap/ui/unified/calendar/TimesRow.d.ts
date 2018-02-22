declare module 'sap/ui/unified/calendar/TimesRow' {
    import { Event } from 'sap/ui/base/Event';
    import { DateRange } from 'sap/ui/unified/DateRange';
    import { DateTypeRange } from 'sap/ui/unified/DateTypeRange';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalendarLegend } from 'sap/ui/unified/CalendarLegend';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITimesRowSettings extends IControlSettings {
        date?: {};
        startDate?: {};
        items?: number;
        intervalMinutes?: number;
        intervalSelection?: boolean;
        singleSelection?: boolean;
        showHeader?: boolean;
    }

    /**
    
    */
    export class TimesRow extends Control {

        /**
            * Constructor for a new `TimesRow`. It shows a calendar with time granularity (normally hours)
         * 
         * ** Note: ** This is used inside the CalendarTimeInterval, not for standalone usage.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITimesRowSettings);


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
            * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
         * 
         * Time focus changed
        */
        attachFocus<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * date, as JavaScript Date object, of the focused time. */
            date: {}, /* * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.) */
            notVisible: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
         * 
         * Time focus changed
        */
        attachFocus<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * date, as JavaScript Date object, of the focused time. */
            date: {}, /* * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.) */
            notVisible: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
         * 
         * Time selection changed
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
         * 
         * Time selection changed
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Checks if a date is focusable in the current rendered output. This means that if it is not rendered, it is not focusable.
        */
        public checkDateFocusable(oDate: {}): boolean;

        /**
            * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
        */
        public destroySelectedDates(): this;

        /**
            * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
        */
        public destroySpecialDates(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFocus(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Displays the given date without setting the focus
        */
        public displayDate(oDate: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.TimesRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:focus focus} to attached listeners.
        */
        protected fireFocus(mParameters?: { date?: {}, notVisible?: boolean, }): this;

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
         * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range `startDate` + `items` in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should be set to be in the visible range.
        */
        public getDate(): {};

        /**
            * Gets current value of property {@link #getIntervalMinutes intervalMinutes}.
         * 
         * Size of on time interval in minutes, default is 60 minutes.
         * 
         * ** Note: ** the start of the interval calculation is always `startDat` at 00:00.
         * 
         * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
         * 
         * A day must be divisible by this interval size. One interval must not include more than one day.
         * 
         * Default value is `60`.
        */
        public getIntervalMinutes(): number;

        /**
            * Gets current value of property {@link #getIntervalSelection intervalSelection}.
         * 
         * If set, interval selection is allowed
         * 
         * Default value is `false`.
        */
        public getIntervalSelection(): boolean;

        /**
            * Gets current value of property {@link #getItems items}.
         * 
         * Number of time items displayed
         * 
         * Default value is `12`.
        */
        public getItems(): number;

        /**
            * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
        */
        public getLegend(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.ui.unified.calendar.TimesRow.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         * 
         * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
        */
        public getSelectedDates(): {};

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * If set, a header with the years is shown to visualize what month belongs to what year.
         * 
         * Default value is `false`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single month or interval, if intervalSelection is enabled, can be selected
         * 
         * ** Note: ** Selection of multiple intervals is not supported in the current version.
         * 
         * Default value is `true`.
        */
        public getSingleSelection(): boolean;

        /**
            * Gets content of aggregation {@link #getSpecialDates specialDates}.
         * 
         * Date ranges with type to visualize special item in the row. If one day is assigned to more than one type, only the first one will be used.
        */
        public getSpecialDates(): {};

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date, as JavaScript Date object, of the row.
        */
        public getStartDate(): {};

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
            * Sets a new value for property {@link #getDate date}.
         * 
         * A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range `startDate` + `items` in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should be set to be in the visible range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDate(oDate: {}): this;

        /**
            * Sets a new value for property {@link #getIntervalMinutes intervalMinutes}.
         * 
         * Size of on time interval in minutes, default is 60 minutes.
         * 
         * ** Note: ** the start of the interval calculation is always `startDat` at 00:00.
         * 
         * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
         * 
         * A day must be divisible by this interval size. One interval must not include more than one day.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `60`.
        */
        public setIntervalMinutes(iIntervalMinutes: number): this;

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
            * Sets a new value for property {@link #getItems items}.
         * 
         * Number of time items displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setItems(iItems: number): this;

        /**
            * Sets the associated {@link #getLegend legend}.
        */
        public setLegend(oLegend: sap.ui.core.ID | CalendarLegend): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * If set, a header with the years is shown to visualize what month belongs to what year.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getSingleSelection singleSelection}.
         * 
         * If set, only a single month or interval, if intervalSelection is enabled, can be selected
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
         * Start date, as JavaScript Date object, of the row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: {}): this;

    }
}