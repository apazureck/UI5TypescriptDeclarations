declare module 'sap/ui/unified/CalendarRow' {
    import { Event } from 'sap/ui/base/Event';
    import { CalendarAppointment } from 'sap/ui/unified/CalendarAppointment';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalendarLegend } from 'sap/ui/unified/CalendarLegend';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICalendarRowSettings extends IControlSettings {
        startDate?: {};
        intervals?: number;
        intervalType?: sap.ui.unified.CalendarIntervalType;
        showSubIntervals?: boolean;
        showIntervalHeaders?: boolean;
        showEmptyIntervalHeaders?: boolean;
        nonWorkingDays?: number;
        nonWorkingHours?: number;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        checkResize?: boolean;
        updateCurrentTime?: boolean;
        groupAppointmentsMode?: sap.ui.unified.GroupAppointmentsMode;
        appointmentsReducedHeight?: boolean;
        appointmentsVisualization?: sap.ui.unified.CalendarAppointmentVisualization;
    }

    /**
    
    */
    export class CalendarRow extends Control {

        /**
            * Constructor for a new `CalendarRow`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICalendarRowSettings);


        /**
            * Adds some appointment to the aggregation {@link #getAppointments appointments}.
        */
        public addAppointment(oAppointment: CalendarAppointment): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some intervalHeader to the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public addIntervalHeader(oIntervalHeader: CalendarAppointment): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * Fired if an interval was selected
        */
        attachIntervalSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Interval start date as JavaScript date object */
            startDate: {}, /* * Interval end date as JavaScript date object */
            endDate: {}, /* * If set, the selected interval is a subinterval */
            subInterval: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * Fired if an interval was selected
        */
        attachIntervalSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Interval start date as JavaScript date object */
            startDate: {}, /* * Interval end date as JavaScript date object */
            endDate: {}, /* * If set, the selected interval is a subinterval */
            subInterval: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine the next control to be focused
        */
        attachLeaveRow<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The type of the event that triggers this <code>leaveRow</code> */
            type: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine the next control to be focused
        */
        attachLeaveRow<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The type of the event that triggers this <code>leaveRow</code> */
            type: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * Fired if an appointment was selected
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * selected appointment */
            appointment: CalendarAppointment, /* * selected appointments in case a group appointment is selected */
            appointments: {}, /* * If set, the appointment was selected by multiple selection (e.g. shift + mouse click). So more than the current appointment could be selected. */
            multiSelect: boolean, /* * Gives the ID of the DOM element of the clicked appointment */
            domRefId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * Fired if an appointment was selected
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * selected appointment */
            appointment: CalendarAppointment, /* * selected appointments in case a group appointment is selected */
            appointments: {}, /* * If set, the appointment was selected by multiple selection (e.g. shift + mouse click). So more than the current appointment could be selected. */
            multiSelect: boolean, /* * Gives the ID of the DOM element of the clicked appointment */
            domRefId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * `startDate` was changed while navigating in `CalendarRow`
        */
        attachStartDateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarRow`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         * 
         * `startDate` was changed while navigating in `CalendarRow`
        */
        attachStartDateChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the appointments in the aggregation {@link #getAppointments appointments}.
        */
        public destroyAppointments(): this;

        /**
            * Destroys all the intervalHeaders in the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public destroyIntervalHeaders(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:intervalSelect intervalSelect} event of this `sap.ui.unified.CalendarRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIntervalSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLeaveRow(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of this `sap.ui.unified.CalendarRow`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStartDateChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.CalendarRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:intervalSelect intervalSelect} to attached listeners.
        */
        protected fireIntervalSelect(mParameters?: { startDate?: {}, endDate?: {}, subInterval?: boolean, }): this;

        /**
            * Fires event {@link #event:leaveRow leaveRow} to attached listeners.
        */
        protected fireLeaveRow(mParameters?: { type?: string, }): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { appointment?: CalendarAppointment, appointments?: {}, multiSelect?: boolean, domRefId?: string, }): this;

        /**
            * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
        */
        protected fireStartDateChange(mParameters?: {}): this;

        /**
            * Focus the given `CalendarAppointment` in the `CalendarRow`.
        */
        public focusAppointment(oAppointment: CalendarAppointment): this;

        /**
            * Focus the `CalendarAppointment` in the `CalendarRow` that is nearest to the given date.
        */
        public focusNearestAppointment(oDate: {}): this;

        /**
            * Gets content of aggregation {@link #getAppointments appointments}.
         * 
         * Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.
         * 
         * ** Note: ** For performance reasons, only appointments in the visible time range or nearby should be assigned.
        */
        public getAppointments(): {};

        /**
            * Gets current value of property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         * 
         * If set the appointments without text (only title) are rendered with a smaller height.
         * 
         * ** Note: ** On phone devices this property is ignored, appointments are always rendered in full height to allow touching.
         * 
         * Default value is `false`.
        */
        public getAppointmentsReducedHeight(): boolean;

        /**
            * Gets current value of property {@link #getAppointmentsVisualization appointmentsVisualization}.
         * 
         * Defines the visualization of the `CalendarAppoinment`
         * 
         * ** Note: ** The real visualization depends on the used theme.
         * 
         * Default value is `Standard`.
        */
        public getAppointmentsVisualization(): sap.ui.unified.CalendarAppointmentVisualization;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getCheckResize checkResize}.
         * 
         * If set, the `CalendarRow` checks for resize by itself.
         * 
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize checks should be done only by this container control. Then the container control should call `handleResize` of the `CalendarRow` if a resize happens.
         * 
         * Default value is `true`.
        */
        public getCheckResize(): boolean;

        /**
            * Returns the focused `CalendarAppointment` of the `CalendarRow`.
         * 
         * The focus must not really be on the `CalendarAppointment`, it have just to be the one that has the focus when the `CalendarRow` was focused last time.
        */
        public getFocusedAppointment(): CalendarAppointment;

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
         * Height of the row
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getIntervalHeaders intervalHeaders}.
         * 
         * Appointments to be displayed in the top of the intervals. The `intervalHeaders` are used to visualize public holidays and similar things.
         * 
         * Appointments outside the visible time frame are not rendered.
         * 
         * The `intervalHeaders` always fill whole intervals. If they are shorter than one interval, they are not displayed.
         * 
         * ** Note: ** For performance reasons, only appointments in the visible time range or nearby should be assigned.
        */
        public getIntervalHeaders(): {};

        /**
            * Gets current value of property {@link #getIntervals intervals}.
         * 
         * Number of displayed intervals. The size of the intervals is defined with `intervalType`
         * 
         * Default value is `12`.
        */
        public getIntervals(): number;

        /**
            * Gets current value of property {@link #getIntervalType intervalType}.
         * 
         * Type of the intervals of the row. The default is one hour.
         * 
         * Default value is `Hour`.
        */
        public getIntervalType(): sap.ui.unified.CalendarIntervalType;

        /**
            * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
        */
        public getLegend(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarRow.
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
            * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
         * 
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. (Other values will just be ignored.)
         * 
         * If not set, the weekend defined in the locale settings is displayed as non-working days.
         * 
         * ** Note: ** The non working days are only visualized if `intervalType` is set to day.
        */
        public getNonWorkingDays(): {};

        /**
            * Gets current value of property {@link #getNonWorkingHours nonWorkingHours}.
         * 
         * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to 23. (Other values will just be ignored.)
         * 
         * ** Note: ** The non working hours are only visualized if `intervalType` is set to hour.
        */
        public getNonWorkingHours(): {};

        /**
            * Gets current value of property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         * 
         * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
         * 
         * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
         * 
         * ** Note: ** This property is only used if `showIntervalHeaders` is set to true.
         * 
         * Default value is `true`.
        */
        public getShowEmptyIntervalHeaders(): boolean;

        /**
            * Gets current value of property {@link #getShowIntervalHeaders showIntervalHeaders}.
         * 
         * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
         * 
         * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
         * 
         * Default value is `true`.
        */
        public getShowIntervalHeaders(): boolean;

        /**
            * Gets current value of property {@link #getShowSubIntervals showSubIntervals}.
         * 
         * If set, subintervals are shown.
         * 
         * If the interval type is `Hour`, quarter hours are shown.
         * 
         * If the interval type is `Day`, hours are shown.
         * 
         * If the interval type is `Month`, days are shown.
         * 
         * Default value is `false`.
        */
        public getShowSubIntervals(): boolean;

        /**
            * Gets current value of property {@link #getStartDate startDate}.
         * 
         * Start date, as JavaScript Date object, of the row. As default, the current date is used.
        */
        public getStartDate(): {};

        /**
            * Gets current value of property {@link #getUpdateCurrentTime updateCurrentTime}.
         * 
         * If set the `CalendarRow` triggers a periodic update to visualize the current time.
         * 
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization` of the `CalendarRow` to update the visualization.
         * 
         * Default value is `true`.
        */
        public getUpdateCurrentTime(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the row
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * After a resize of the `CalendarRow`, some calculations for appointment sizes are needed.
         * 
         * For this, each `CalendarRow` can trigger the resize check for it's own DOM. But if multiple `CalendarRow`s are used in one container (e.g. `PlanningCalendar`), it is better if the container triggers the resize check once and then calls this function of each `CalendarRow`.
        */
        public handleResize(oEvent: jQuery.Event): this;

        /**
            * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getAppointments appointments}. and returns its index if found or -1 otherwise.
        */
        public indexOfAppointment(oAppointment: CalendarAppointment): number;

        /**
            * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getIntervalHeaders intervalHeaders}. and returns its index if found or -1 otherwise.
        */
        public indexOfIntervalHeader(oIntervalHeader: CalendarAppointment): number;

        /**
            * Inserts a appointment into the aggregation {@link #getAppointments appointments}.
        */
        public insertAppointment(oAppointment: CalendarAppointment, iIndex: number): this;

        /**
            * Inserts a intervalHeader into the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public insertIntervalHeader(oIntervalHeader: CalendarAppointment, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAppointments appointments}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAppointments(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getIntervalHeaders intervalHeaders}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllIntervalHeaders(): {};

        /**
            * Removes a appointment from the aggregation {@link #getAppointments appointments}.
        */
        public removeAppointment(vAppointment: number | string | CalendarAppointment): CalendarAppointment;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a intervalHeader from the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public removeIntervalHeader(vIntervalHeader: number | string | CalendarAppointment): CalendarAppointment;

        /**
            * Sets a new value for property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         * 
         * If set the appointments without text (only title) are rendered with a smaller height.
         * 
         * ** Note: ** On phone devices this property is ignored, appointments are always rendered in full height to allow touching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAppointmentsReducedHeight(bAppointmentsReducedHeight: boolean): this;

        /**
            * Sets a new value for property {@link #getAppointmentsVisualization appointmentsVisualization}.
         * 
         * Defines the visualization of the `CalendarAppoinment`
         * 
         * ** Note: ** The real visualization depends on the used theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setAppointmentsVisualization(sAppointmentsVisualization: sap.ui.unified.CalendarAppointmentVisualization): this;

        /**
            * Sets a new value for property {@link #getCheckResize checkResize}.
         * 
         * If set, the `CalendarRow` checks for resize by itself.
         * 
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize checks should be done only by this container control. Then the container control should call `handleResize` of the `CalendarRow` if a resize happens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCheckResize(bCheckResize: boolean): this;

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
         * Height of the row
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getIntervals intervals}.
         * 
         * Number of displayed intervals. The size of the intervals is defined with `intervalType`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setIntervals(iIntervals: number): this;

        /**
            * Sets a new value for property {@link #getIntervalType intervalType}.
         * 
         * Type of the intervals of the row. The default is one hour.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Hour`.
        */
        public setIntervalType(sIntervalType: sap.ui.unified.CalendarIntervalType): this;

        /**
            * Sets the associated {@link #getLegend legend}.
        */
        public setLegend(oLegend: sap.ui.core.ID | CalendarLegend): this;

        /**
            * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
         * 
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. (Other values will just be ignored.)
         * 
         * If not set, the weekend defined in the locale settings is displayed as non-working days.
         * 
         * ** Note: ** The non working days are only visualized if `intervalType` is set to day.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNonWorkingDays(sNonWorkingDays: {}): this;

        /**
            * Sets a new value for property {@link #getNonWorkingHours nonWorkingHours}.
         * 
         * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to 23. (Other values will just be ignored.)
         * 
         * ** Note: ** The non working hours are only visualized if `intervalType` is set to hour.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNonWorkingHours(sNonWorkingHours: {}): this;

        /**
            * Sets a new value for property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         * 
         * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
         * 
         * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
         * 
         * ** Note: ** This property is only used if `showIntervalHeaders` is set to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowEmptyIntervalHeaders(bShowEmptyIntervalHeaders: boolean): this;

        /**
            * Sets a new value for property {@link #getShowIntervalHeaders showIntervalHeaders}.
         * 
         * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
         * 
         * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowIntervalHeaders(bShowIntervalHeaders: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSubIntervals showSubIntervals}.
         * 
         * If set, subintervals are shown.
         * 
         * If the interval type is `Hour`, quarter hours are shown.
         * 
         * If the interval type is `Day`, hours are shown.
         * 
         * If the interval type is `Month`, days are shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSubIntervals(bShowSubIntervals: boolean): this;

        /**
            * Sets a new value for property {@link #getStartDate startDate}.
         * 
         * Start date, as JavaScript Date object, of the row. As default, the current date is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStartDate(oStartDate: {}): this;

        /**
            * Sets a new value for property {@link #getUpdateCurrentTime updateCurrentTime}.
         * 
         * If set the `CalendarRow` triggers a periodic update to visualize the current time.
         * 
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization` of the `CalendarRow` to update the visualization.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUpdateCurrentTime(bUpdateCurrentTime: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the row
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * If the current time is in the visible output of the `CalendarRow`, the indicator for the current time must be positioned.
         * 
         * For this, each `CalendarRow` can trigger a timer. But if multiple `CalendarRow`s are used in one container (e.G. `PlanningCalendar`), it is better if the container triggers the interval once and then calls this function of each `CalendarRow`.
        */
        public updateCurrentTimeVisualization(): this;

    }
}