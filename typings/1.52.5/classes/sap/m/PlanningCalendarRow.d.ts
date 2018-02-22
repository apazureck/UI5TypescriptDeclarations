declare module 'sap/m/PlanningCalendarRow' {
    import { CalendarAppointment } from 'sap/ui/unified/CalendarAppointment';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IPlanningCalendarRowSettings extends IElementSettings {
        title?: string;
        text?: string;
        icon?: sap.ui.core.URI;
        nonWorkingDays?: number;
        nonWorkingHours?: number;
        selected?: boolean;
        key?: string;
    }

    /**
    
    */
    export class PlanningCalendarRow extends Element {

        /**
            * Constructor for a new `PlanningCalendarRow`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPlanningCalendarRowSettings);


        /**
            * Adds some appointment to the aggregation {@link #getAppointments appointments}.
        */
        public addAppointment(oAppointment: CalendarAppointment): this;

        /**
            * Adds some intervalHeader to the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public addIntervalHeader(oIntervalHeader: CalendarAppointment): this;

        /**
            * Destroys all the appointments in the aggregation {@link #getAppointments appointments}.
        */
        public destroyAppointments(): this;

        /**
            * Destroys all the intervalHeaders in the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public destroyIntervalHeaders(): this;

        /**
            * Creates a new subclass of class sap.m.PlanningCalendarRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getAppointments appointments}.
         * 
         * The appointments to be displayed in the row. Appointments that outside the visible time frame are not rendered.
         * 
         * ** Note: ** For performance reasons, only appointments in the visible time range or nearby should be assigned.
        */
        public getAppointments(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Specifies the URI of an image or an icon registered in `sap.ui.core.IconPool`.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getIntervalHeaders intervalHeaders}.
         * 
         * The appointments to be displayed at the top of the intervals (for example, for public holidays). Appointments outside the visible time frame are not rendered.
         * 
         * Keep in mind that the `intervalHeaders` should always fill whole intervals. If they are shorter or longer than one interval, they are not displayed.
         * 
         * ** Note: ** For performance reasons, only appointments in the visible time range or nearby should be assigned.
        */
        public getIntervalHeaders(): {};

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Defines the identifier of the row.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.PlanningCalendarRow.
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
         * Determines whether the provided weekdays are displayed as non-working days. Valid values inside the array are from 0 to 6 (other values are ignored). If not set, the weekend defined in the locale settings is displayed as non-working days.
         * 
         * ** Note: ** The non-working days are visualized if the `intervalType` property of the {@link sap.m.PlanningCalendarView} is set to `Day`.
        */
        public getNonWorkingDays(): {};

        /**
            * Gets current value of property {@link #getNonWorkingHours nonWorkingHours}.
         * 
         * Determines whether the provided hours are displayed as non-working hours. Valid values inside the array are from 0 to 23 (other values are ignored).
         * 
         * ** Note: ** The non-working hours are visualized if `intervalType` property of the {@link sap.m.PlanningCalendarView} is set to `Hour`.
        */
        public getNonWorkingHours(): {};

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Defines the selected state of the `PlanningCalendarRow`.
         * 
         * ** Note: ** Binding the `selected` property in single selection modes may cause unwanted results if you have more than one selected row in your binding.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text of the header (for example, the department of the person).
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the header (for example, the name of the person).
        */
        public getTitle(): string;

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
            * Removes a intervalHeader from the aggregation {@link #getIntervalHeaders intervalHeaders}.
        */
        public removeIntervalHeader(vIntervalHeader: number | string | CalendarAppointment): CalendarAppointment;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Specifies the URI of an image or an icon registered in `sap.ui.core.IconPool`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Defines the identifier of the row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
         * 
         * Determines whether the provided weekdays are displayed as non-working days. Valid values inside the array are from 0 to 6 (other values are ignored). If not set, the weekend defined in the locale settings is displayed as non-working days.
         * 
         * ** Note: ** The non-working days are visualized if the `intervalType` property of the {@link sap.m.PlanningCalendarView} is set to `Day`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNonWorkingDays(sNonWorkingDays: {}): this;

        /**
            * Sets a new value for property {@link #getNonWorkingHours nonWorkingHours}.
         * 
         * Determines whether the provided hours are displayed as non-working hours. Valid values inside the array are from 0 to 23 (other values are ignored).
         * 
         * ** Note: ** The non-working hours are visualized if `intervalType` property of the {@link sap.m.PlanningCalendarView} is set to `Hour`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNonWorkingHours(sNonWorkingHours: {}): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Defines the selected state of the `PlanningCalendarRow`.
         * 
         * ** Note: ** Binding the `selected` property in single selection modes may cause unwanted results if you have more than one selected row in your binding.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text of the header (for example, the department of the person).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the header (for example, the name of the person).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}