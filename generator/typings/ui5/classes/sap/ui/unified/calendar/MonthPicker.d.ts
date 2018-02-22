declare module 'sap/ui/unified/calendar/MonthPicker' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMonthPickerSettings extends IControlSettings {
        month?: number;
        months?: number;
        columns?: number;
        primaryCalendarType?: sap.ui.core.CalendarType;
    }

    /**
    
    */
    export class MonthPicker extends Control {

        /**
            * Constructor for a new MonthPicker.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMonthPickerSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
         * 
         * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed by user navigation.
        */
        attachPageChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
         * 
         * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed by user navigation.
        */
        attachPageChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
         * 
         * Month selection changed
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
         * 
         * Month selection changed
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPageChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.MonthPicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:pageChange pageChange} to attached listeners.
        */
        protected firePageChange(mParameters?: {}): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getColumns columns}.
         * 
         * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)
         * 
         * Default value is `3`.
        */
        public getColumns(): number;

        /**
            * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getMonth month}.
         * 
         * The month is initial focused and selected The value must be between 0 and 11
         * 
         * Default value is `0`.
        */
        public getMonth(): number;

        /**
            * Gets current value of property {@link #getMonths months}.
         * 
         * number of displayed months The value must be between 1 and 12
         * 
         * Default value is `12`.
        */
        public getMonths(): number;

        /**
            * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
        */
        public getPrimaryCalendarType(): sap.ui.core.CalendarType;

        /**
            * displays the next page
        */
        public nextPage(): this;

        /**
            * displays the previous page
        */
        public previousPage(): this;

        /**
            * Sets a new value for property {@link #getColumns columns}.
         * 
         * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setColumns(iColumns: number): this;

        /**
            * sets a minimum and maximum month
        */
        public setMinMax(iMin?: number, iMax?: number): this;

        /**
            * Sets a new value for property {@link #getMonth month}.
         * 
         * The month is initial focused and selected The value must be between 0 and 11
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMonth(iMonth: number): this;

        /**
            * Sets a new value for property {@link #getMonths months}.
         * 
         * number of displayed months The value must be between 1 and 12
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setMonths(iMonths: number): this;

        /**
            * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
         * 
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): this;

    }
}