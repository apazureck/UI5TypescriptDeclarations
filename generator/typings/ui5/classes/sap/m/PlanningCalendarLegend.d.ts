declare module 'sap/m/PlanningCalendarLegend' {
    import { CalendarLegendItem } from 'sap/ui/unified/CalendarLegendItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPlanningCalendarLegendSettings extends IControlSettings {
        standardItems?: string[];
        itemsHeader?: string;
        appointmentItemsHeader?: string;
    }

    /**
    
    */
    export class PlanningCalendarLegend extends Control {

        /**
            * Constructor for a new `PlanningCalendarLegend`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPlanningCalendarLegendSettings);


        /**
            * Adds some appointmentItem to the aggregation {@link #getAppointmentItems appointmentItems}.
        */
        public addAppointmentItem(oAppointmentItem: CalendarLegendItem): this;

        /**
            * Destroys all the appointmentItems in the aggregation {@link #getAppointmentItems appointmentItems}.
        */
        public destroyAppointmentItems(): this;

        /**
            * Creates a new subclass of class sap.m.PlanningCalendarLegend with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getAppointmentItems appointmentItems}.
         * 
         * The legend items which show color and type information about the calendar appointments.
        */
        public getAppointmentItems(): {};

        /**
            * Gets current value of property {@link #getAppointmentItemsHeader appointmentItemsHeader}.
         * 
         * Defines the text displayed in the header of the appointment items list. It is commonly related to the calendar appointments.
         * 
         * Default value is `Appointments`.
        */
        public getAppointmentItemsHeader(): string;

        /**
            * Gets current value of property {@link #getItemsHeader itemsHeader}.
         * 
         * Defines the text displayed in the header of the items list. It is commonly related to the calendar days.
         * 
         * Default value is `Calendar`.
        */
        public getItemsHeader(): string;

        /**
            * Returns a metadata object for class sap.m.PlanningCalendarLegend.
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
            * Gets current value of property {@link #getStandardItems standardItems}.
         * 
         * Determines the standard items related to the calendar days, such as today, selected, working, non-working. Values must be one of `sap.ui.unified.StandardCalendarLegendItem`.
         * 
         * Default value is `Today,Selected,WorkingDay,NonWorkingDay`.
        */
        public getStandardItems(): {};

        /**
            * Checks for the provided `sap.ui.unified.CalendarLegendItem` in the aggregation {@link #getAppointmentItems appointmentItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfAppointmentItem(oAppointmentItem: CalendarLegendItem): number;

        /**
            * Inserts a appointmentItem into the aggregation {@link #getAppointmentItems appointmentItems}.
        */
        public insertAppointmentItem(oAppointmentItem: CalendarLegendItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAppointmentItems appointmentItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAppointmentItems(): {};

        /**
            * Removes a appointmentItem from the aggregation {@link #getAppointmentItems appointmentItems}.
        */
        public removeAppointmentItem(vAppointmentItem: number | string | CalendarLegendItem): CalendarLegendItem;

        /**
            * Sets a new value for property {@link #getAppointmentItemsHeader appointmentItemsHeader}.
         * 
         * Defines the text displayed in the header of the appointment items list. It is commonly related to the calendar appointments.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Appointments`.
        */
        public setAppointmentItemsHeader(sAppointmentItemsHeader: string): this;

        /**
            * Sets a new value for property {@link #getItemsHeader itemsHeader}.
         * 
         * Defines the text displayed in the header of the items list. It is commonly related to the calendar days.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Calendar`.
        */
        public setItemsHeader(sItemsHeader: string): this;

        /**
            * Sets a new value for property {@link #getStandardItems standardItems}.
         * 
         * Determines the standard items related to the calendar days, such as today, selected, working, non-working. Values must be one of `sap.ui.unified.StandardCalendarLegendItem`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Today,Selected,WorkingDay,NonWorkingDay`.
        */
        public setStandardItems(sStandardItems: {}): this;

    }
}