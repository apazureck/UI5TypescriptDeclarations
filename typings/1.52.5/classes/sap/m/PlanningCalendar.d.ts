declare module 'sap/m/PlanningCalendar' {
    import { Event } from 'sap/ui/base/Event';
    import { CalendarAppointment } from 'sap/ui/unified/CalendarAppointment';
    import { PlanningCalendarRow } from 'sap/m/PlanningCalendarRow';
    import { DateTypeRange } from 'sap/ui/unified/DateTypeRange';
    import { PlanningCalendarView } from 'sap/m/PlanningCalendarView';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalendarLegend } from 'sap/ui/unified/CalendarLegend';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPlanningCalendarSettings extends IControlSettings {
        startDate?: {};
        viewKey?: string;
        singleSelection?: boolean;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        showIntervalHeaders?: boolean;
        showEmptyIntervalHeaders?: boolean;
        showRowHeaders?: boolean;
        noDataText?: string;
        groupAppointmentsMode?: sap.ui.unified.GroupAppointmentsMode;
        appointmentsReducedHeight?: boolean;
        appointmentsVisualization?: sap.ui.unified.CalendarAppointmentVisualization;
        minDate?: {};
        maxDate?: {};
        showDayNamesLine?: boolean;
        showWeekNumbers?: boolean;
        builtInViews?: string[];
    }

    /**
    
    */
    export class PlanningCalendar extends Control {

        /**
            * Constructor for a new `PlanningCalendar`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sID: string, mSettings: IPlanningCalendarSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some row to the aggregation {@link #getRows rows}.
        */
        public addRow(oRow: PlanningCalendarRow): this;

        /**
            * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
        */
        public addSpecialDate(oSpecialDate: DateTypeRange): this;

        /**
            * Adds some toolbarContent to the aggregation {@link #getToolbarContent toolbarContent}.
        */
        public addToolbarContent(oToolbarContent: Control): this;

        /**
            * Adds some view to the aggregation {@link #getViews views}.
        */
        public addView(oView: PlanningCalendarView): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:appointmentSelect appointmentSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fired if an appointment is selected.
        */
        attachAppointmentSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected appointment. */
            appointment: CalendarAppointment, /* * The selected appointments in case a group appointment is selected. */
            appointments: {}, /* * If set, the appointment was selected using multiple selection (e.g. Shift + single mouse click), meaning more than the current appointment could be selected. */
            multiSelect: boolean, /* * Gives the ID of the DOM element of the clicked appointment */
            domRefId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:appointmentSelect appointmentSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fired if an appointment is selected.
        */
        attachAppointmentSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected appointment. */
            appointment: CalendarAppointment, /* * The selected appointments in case a group appointment is selected. */
            appointments: {}, /* * If set, the appointment was selected using multiple selection (e.g. Shift + single mouse click), meaning more than the current appointment could be selected. */
            multiSelect: boolean, /* * Gives the ID of the DOM element of the clicked appointment */
            domRefId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fired if an interval was selected in the calendar header or in the row.
        */
        attachIntervalSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Start date of the selected interval, as a JavaScript date object. */
            startDate: {}, /* * Interval end date as a JavaScript date object. */
            endDate: {}, /* * If set, the selected interval is a subinterval. */
            subInterval: boolean, /* * Row of the selected interval. */
            row: PlanningCalendarRow,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fired if an interval was selected in the calendar header or in the row.
        */
        attachIntervalSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Start date of the selected interval, as a JavaScript date object. */
            startDate: {}, /* * Interval end date as a JavaScript date object. */
            endDate: {}, /* * If set, the selected interval is a subinterval. */
            subInterval: boolean, /* * Row of the selected interval. */
            row: PlanningCalendarRow,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowHeaderClick rowHeaderClick} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fires when a row header is clicked.
        */
        attachRowHeaderClick<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowHeaderClick rowHeaderClick} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fires when a row header is clicked.
        */
        attachRowHeaderClick<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fires when row selection is changed.
        */
        attachRowSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Array of rows whose selection has changed. */
            rows: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * Fires when row selection is changed.
        */
        attachRowSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Array of rows whose selection has changed. */
            rows: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * `startDate` was changed while navigating in the `PlanningCalendar`. The new value can be obtained using the `sap.m.PlanningCalendar#getStartDate()` method.
        */
        attachStartDateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * `startDate` was changed while navigating in the `PlanningCalendar`. The new value can be obtained using the `sap.m.PlanningCalendar#getStartDate()` method.
        */
        attachStartDateChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:viewChange viewChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * `viewKey` was changed by user interaction.
        */
        attachViewChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:viewChange viewChange} event of this `sap.m.PlanningCalendar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PlanningCalendar` itself.
         * 
         * `viewKey` was changed by user interaction.
        */
        attachViewChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the rows in the aggregation {@link #getRows rows}.
        */
        public destroyRows(): this;

        /**
            * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
        */
        public destroySpecialDates(): this;

        /**
            * Destroys all the toolbarContent in the aggregation {@link #getToolbarContent toolbarContent}.
        */
        public destroyToolbarContent(): this;

        /**
            * Destroys all the views in the aggregation {@link #getViews views}.
        */
        public destroyViews(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:appointmentSelect appointmentSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAppointmentSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:intervalSelect intervalSelect} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIntervalSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:rowHeaderClick rowHeaderClick} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRowHeaderClick(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRowSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStartDateChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:viewChange viewChange} event of this `sap.m.PlanningCalendar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachViewChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.PlanningCalendar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:appointmentSelect appointmentSelect} to attached listeners.
        */
        protected fireAppointmentSelect(mParameters?: { appointment?: CalendarAppointment, appointments?: {}, multiSelect?: boolean, domRefId?: string, }): this;

        /**
            * Fires event {@link #event:intervalSelect intervalSelect} to attached listeners.
        */
        protected fireIntervalSelect(mParameters?: { startDate?: {}, endDate?: {}, subInterval?: boolean, row?: PlanningCalendarRow, }): this;

        /**
            * Fires event {@link #event:rowHeaderClick rowHeaderClick} to attached listeners.
        */
        protected fireRowHeaderClick(mParameters?: {}): this;

        /**
            * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
        */
        protected fireRowSelectionChange(mParameters?: { rows?: {}, }): this;

        /**
            * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
        */
        protected fireStartDateChange(mParameters?: {}): this;

        /**
            * Fires event {@link #event:viewChange viewChange} to attached listeners.
        */
        protected fireViewChange(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         * 
         * Determines whether the appointments that have only title without text are rendered with smaller height.
         * 
         * ** Note: ** On phone devices this property is ignored, appointments are always rendered in full height to facilitate touching.
         * 
         * Default value is `false`.
        */
        public getAppointmentsReducedHeight(): boolean;

        /**
            * Gets current value of property {@link #getAppointmentsVisualization appointmentsVisualization}.
         * 
         * Determines how the appointments are visualized depending on the used theme.
         * 
         * Default value is `Standard`.
        */
        public getAppointmentsVisualization(): sap.ui.unified.CalendarAppointmentVisualization;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getBuiltInViews builtInViews}.
         * 
         * Defines the list of predefined views as an array. The views should be specified by their keys.
         * 
         * The default predefined views and their keys are available at {@link sap.m.PlanningCalendarBuiltInViews}.
         * 
         * ** Note: ** If set, all specified views will be displayed along with any custom views (if available). If not set and no custom views are available, all default views will be displayed. If not set and there are any custom views available, only the custom views will be displayed.
         * 
         * Default value is `[]`.
        */
        public getBuiltInViews(): {};

        /**
            * Gets current value of property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
         * 
         * Defines the mode in which the overlapping appointments are displayed.
         * 
         * ** Note: ** This property takes effect, only if the `intervalType` of the current calendar view is set to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default value is applied.
         * 
         * Default value is `Collapsed`.
        */
        public getGroupAppointmentsMode(): sap.ui.unified.GroupAppointmentsMode;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Specifies the height of the `PlanningCalendar`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
        */
        public getLegend(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getMaxDate maxDate}.
         * 
         * Defines the maximum date that can be displayed and selected in the `PlanningCalendar`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the current `minDate`, the `minDate` is set to the first date of the month in which the `maxDate` belongs.
        */
        public getMaxDate(): {};

        /**
            * Returns a metadata object for class sap.m.PlanningCalendar.
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
         * Defines the minimum date that can be displayed and selected in the `PlanningCalendar`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the current `maxDate`, the `maxDate` is set to the last date of the month in which the `minDate` belongs.
        */
        public getMinDate(): {};

        /**
            * Gets current value of property {@link #getNoDataText noDataText}.
         * 
         * Defines the text that is displayed when no {@link sap.m.PlanningCalendarRow PlanningCalendarRows} are assigned.
        */
        public getNoDataText(): string;

        /**
            * Gets content of aggregation {@link #getRows rows}.
         * 
         * Rows of the `PlanningCalendar`.
        */
        public getRows(): {};

        /**
            * Returns an array containing the selected rows. If no row is selected, an empty array is returned.
        */
        public getSelectedRows(): {};

        /**
            * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * Determines whether the day names are displayed in a separate line or inside the single days.
         * 
         * Default value is `false`.
        */
        public getShowDayNamesLine(): boolean;

        /**
            * Gets current value of property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         * 
         * Determines whether the space (at the top of the intervals), where the assigned interval headers appear, should remain visible even when no interval headers are present in the visible time frame. If set to `false`, this space would collapse/disappear when no interval headers are assigned.
         * 
         * ** Note: ** This property takes effect, only if `showIntervalHeaders` is also set to `true`.
         * 
         * Default value is `true`.
        */
        public getShowEmptyIntervalHeaders(): boolean;

        /**
            * Gets current value of property {@link #getShowIntervalHeaders showIntervalHeaders}.
         * 
         * Determines whether the assigned interval headers are displayed. You can assign them using the `intervalHeaders` aggregation of the {@link sap.m.PlanningCalendarRow PlanningCalendarRow}.
         * 
         * ** Note: ** If you set both `showIntervalHeaders` and `showEmptyIntervalHeaders` properties to `true`, the space (at the top of the intervals) where the assigned interval headers appear, will remain visible even if no interval headers are assigned.
         * 
         * Default value is `true`.
        */
        public getShowIntervalHeaders(): boolean;

        /**
            * Gets current value of property {@link #getShowRowHeaders showRowHeaders}.
         * 
         * Determines whether the column containing the headers of the {@link sap.m.PlanningCalendarRow PlanningCalendarRows} is displayed.
         * 
         * Default value is `true`.
        */
        public getShowRowHeaders(): boolean;

        /**
            * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
         * 
         * Determines if the week numbers are displayed.
         * 
         * Default value is `false`.
        */
        public getShowWeekNumbers(): boolean;

        /**
            * Gets current value of property {@link #getSingleSelection singleSelection}.
         * 
         * Determines whether only a single row can be selected.
         * 
         * Default value is `true`.
        */
        public getSingleSelection(): boolean;

        /**
            * Gets content of aggregation {@link #getSpecialDates specialDates}.
         * 
         * Special days in the header calendar visualized as date range with a type.
         * 
         * ** Note: ** If one day is assigned to more than one type, only the first type will be used.
        */
        public getSpecialDates(): {};

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Determines the start date of the row, as a JavaScript date object. The current date is used as default.
        */
        public getStartDate(): {};

        /**
            * Gets content of aggregation {@link #getToolbarContent toolbarContent}.
         * 
         * The content of the toolbar.
        */
        public getToolbarContent(): {};

        /**
            * Gets current value of property {@link #getViewKey viewKey}.
         * 
         * Defines the key of the `PlanningCalendarView` used for the output.
         * 
         * ** Note: ** The default value is set `Hour`. If you are using your own views, the keys of these views should be used instead.
         * 
         * Default value is `sap.ui.unified.CalendarIntervalType.Hour`.
        */
        public getViewKey(): string;

        /**
            * Gets content of aggregation {@link #getViews views}.
         * 
         * Views of the `PlanningCalendar`.
         * 
         * ** Note: ** If not set, all the default views are available. Their keys are defined in {@link sap.ui.unified.CalendarIntervalType}.
        */
        public getViews(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the `PlanningCalendar`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.PlanningCalendarRow` in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise.
        */
        public indexOfRow(oRow: PlanningCalendarRow): number;

        /**
            * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}. and returns its index if found or -1 otherwise.
        */
        public indexOfSpecialDate(oSpecialDate: DateTypeRange): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getToolbarContent toolbarContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfToolbarContent(oToolbarContent: Control): number;

        /**
            * Checks for the provided `sap.m.PlanningCalendarView` in the aggregation {@link #getViews views}. and returns its index if found or -1 otherwise.
        */
        public indexOfView(oView: PlanningCalendarView): number;

        /**
            * Inserts a row into the aggregation {@link #getRows rows}.
        */
        public insertRow(oRow: PlanningCalendarRow, iIndex: number): this;

        /**
            * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
        */
        public insertSpecialDate(oSpecialDate: DateTypeRange, iIndex: number): this;

        /**
            * Inserts a toolbarContent into the aggregation {@link #getToolbarContent toolbarContent}.
        */
        public insertToolbarContent(oToolbarContent: Control, iIndex: number): this;

        /**
            * Inserts a view into the aggregation {@link #getViews views}.
        */
        public insertView(oView: PlanningCalendarView, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getRows rows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRows(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSpecialDates(): {};

        /**
            * Removes all the controls from the aggregation {@link #getToolbarContent toolbarContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllToolbarContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getViews views}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllViews(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a row from the aggregation {@link #getRows rows}.
        */
        public removeRow(vRow: number | string | PlanningCalendarRow): PlanningCalendarRow;

        /**
            * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
        */
        public removeSpecialDate(vSpecialDate: number | string | DateTypeRange): DateTypeRange;

        /**
            * Removes a toolbarContent from the aggregation {@link #getToolbarContent toolbarContent}.
        */
        public removeToolbarContent(vToolbarContent: number | string | Control): Control;

        /**
            * Removes a view from the aggregation {@link #getViews views}.
        */
        public removeView(vView: number | string | PlanningCalendarView): PlanningCalendarView;

        /**
            * Selects or deselects all `PlanningCalendarRows`.
         * 
         * ** Note: ** Selection only works if `singleSelection` is set to `false`.
        */
        public selectAllRows(bSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         * 
         * Determines whether the appointments that have only title without text are rendered with smaller height.
         * 
         * ** Note: ** On phone devices this property is ignored, appointments are always rendered in full height to facilitate touching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAppointmentsReducedHeight(bAppointmentsReducedHeight: boolean): this;

        /**
            * Sets a new value for property {@link #getAppointmentsVisualization appointmentsVisualization}.
         * 
         * Determines how the appointments are visualized depending on the used theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setAppointmentsVisualization(sAppointmentsVisualization: sap.ui.unified.CalendarAppointmentVisualization): this;

        /**
            * Sets a new value for property {@link #getBuiltInViews builtInViews}.
         * 
         * Defines the list of predefined views as an array. The views should be specified by their keys.
         * 
         * The default predefined views and their keys are available at {@link sap.m.PlanningCalendarBuiltInViews}.
         * 
         * ** Note: ** If set, all specified views will be displayed along with any custom views (if available). If not set and no custom views are available, all default views will be displayed. If not set and there are any custom views available, only the custom views will be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `[]`.
        */
        public setBuiltInViews(sBuiltInViews: {}): this;

        /**
            * Sets a new value for property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
         * 
         * Defines the mode in which the overlapping appointments are displayed.
         * 
         * ** Note: ** This property takes effect, only if the `intervalType` of the current calendar view is set to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default value is applied.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Collapsed`.
        */
        public setGroupAppointmentsMode(sGroupAppointmentsMode: sap.ui.unified.GroupAppointmentsMode): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Specifies the height of the `PlanningCalendar`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the associated {@link #getLegend legend}.
        */
        public setLegend(oLegend: sap.ui.core.ID | CalendarLegend): this;

        /**
            * Sets a new value for property {@link #getMaxDate maxDate}.
         * 
         * Defines the maximum date that can be displayed and selected in the `PlanningCalendar`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `maxDate` is set to be before the current `minDate`, the `minDate` is set to the first date of the month in which the `maxDate` belongs.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxDate(oMaxDate: {}): this;

        /**
            * Sets a new value for property {@link #getMinDate minDate}.
         * 
         * Defines the minimum date that can be displayed and selected in the `PlanningCalendar`. This must be a JavaScript date object.
         * 
         * ** Note: ** If the `minDate` is set to be after the current `maxDate`, the `maxDate` is set to the last date of the month in which the `minDate` belongs.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinDate(oMinDate: {}): this;

        /**
            * Sets a new value for property {@link #getNoDataText noDataText}.
         * 
         * Defines the text that is displayed when no {@link sap.m.PlanningCalendarRow PlanningCalendarRows} are assigned.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNoDataText(sNoDataText: string): this;

        /**
            * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
         * 
         * Determines whether the day names are displayed in a separate line or inside the single days.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowDayNamesLine(bShowDayNamesLine: boolean): this;

        /**
            * Sets a new value for property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         * 
         * Determines whether the space (at the top of the intervals), where the assigned interval headers appear, should remain visible even when no interval headers are present in the visible time frame. If set to `false`, this space would collapse/disappear when no interval headers are assigned.
         * 
         * ** Note: ** This property takes effect, only if `showIntervalHeaders` is also set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowEmptyIntervalHeaders(bShowEmptyIntervalHeaders: boolean): this;

        /**
            * Sets a new value for property {@link #getShowIntervalHeaders showIntervalHeaders}.
         * 
         * Determines whether the assigned interval headers are displayed. You can assign them using the `intervalHeaders` aggregation of the {@link sap.m.PlanningCalendarRow PlanningCalendarRow}.
         * 
         * ** Note: ** If you set both `showIntervalHeaders` and `showEmptyIntervalHeaders` properties to `true`, the space (at the top of the intervals) where the assigned interval headers appear, will remain visible even if no interval headers are assigned.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowIntervalHeaders(bShowIntervalHeaders: boolean): this;

        /**
            * Sets a new value for property {@link #getShowRowHeaders showRowHeaders}.
         * 
         * Determines whether the column containing the headers of the {@link sap.m.PlanningCalendarRow PlanningCalendarRows} is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowRowHeaders(bShowRowHeaders: boolean): this;

        /**
            * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
         * 
         * Determines if the week numbers are displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowWeekNumbers(bShowWeekNumbers: boolean): this;

        /**
            * Sets a new value for property {@link #getSingleSelection singleSelection}.
         * 
         * Determines whether only a single row can be selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSingleSelection(bSingleSelection: boolean): this;

        /**
            * Sets the given date as start date. The current date is used as default. Depending on the current view the start date may be adjusted (for example, the week view shows always the first weekday of the same week as the given date).
        */
        public setStartDate(oStartDate: any): this;

        /**
            * Sets a new value for property {@link #getViewKey viewKey}.
         * 
         * Defines the key of the `PlanningCalendarView` used for the output.
         * 
         * ** Note: ** The default value is set `Hour`. If you are using your own views, the keys of these views should be used instead.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `sap.ui.unified.CalendarIntervalType.Hour`.
        */
        public setViewKey(sViewKey: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the `PlanningCalendar`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}