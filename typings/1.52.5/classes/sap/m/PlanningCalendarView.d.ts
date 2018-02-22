declare module 'sap/m/PlanningCalendarView' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IPlanningCalendarViewSettings extends IElementSettings {
        key?: string;
        intervalType?: sap.ui.unified.CalendarIntervalType;
        description?: string;
        intervalsS?: number;
        intervalsM?: number;
        intervalsL?: number;
        showSubIntervals?: boolean;
    }

    /**
    
    */
    export class PlanningCalendarView extends Element {

        /**
            * Constructor for a new `PlanningCalendarView`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPlanningCalendarViewSettings);


        /**
            * Creates a new subclass of class sap.m.PlanningCalendarView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Defines the description of the `PlanningCalendarView`.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getIntervalsL intervalsL}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is more than 1024 pixels wide.
         * 
         * Default value is `12`.
        */
        public getIntervalsL(): number;

        /**
            * Gets current value of property {@link #getIntervalsM intervalsM}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is between 600 and 1024 pixels wide.
         * 
         * Default value is `8`.
        */
        public getIntervalsM(): number;

        /**
            * Gets current value of property {@link #getIntervalsS intervalsS}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is less than 600 pixels wide.
         * 
         * Default value is `6`.
        */
        public getIntervalsS(): number;

        /**
            * Gets current value of property {@link #getIntervalType intervalType}.
         * 
         * Determines the type of the intervals of the row.
         * 
         * ** Note: ** Not all predefined interval types are supported for this property. For more information, see the descriptions in the {@link sap.ui.unified.CalendarIntervalType CalendarIntervalType} enumeration.
         * 
         * Default value is `Hour`.
        */
        public getIntervalType(): sap.ui.unified.CalendarIntervalType;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Defines the key of the view. This must be set to identify the used view in the {@link sap.m.PlanningCalendar}.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.PlanningCalendarView.
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
            * Gets current value of property {@link #getShowSubIntervals showSubIntervals}.
         * 
         * If set, subintervals are displayed as lines in the rows.
         * 
         *  * Quarter hour subintervals for interval type `Hour`. * Hour subintervals for interval types `Day`, `Week` and `OneMonth`. * Day subintervals for interval type `Month`. 
         * 
         * Default value is `false`.
        */
        public getShowSubIntervals(): boolean;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Defines the description of the `PlanningCalendarView`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getIntervalsL intervalsL}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is more than 1024 pixels wide.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setIntervalsL(iIntervalsL: number): this;

        /**
            * Sets a new value for property {@link #getIntervalsM intervalsM}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is between 600 and 1024 pixels wide.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `8`.
        */
        public setIntervalsM(iIntervalsM: number): this;

        /**
            * Sets a new value for property {@link #getIntervalsS intervalsS}.
         * 
         * Defines the number of intervals that are displayed for a {@link sap.m.PlanningCalendar} that is less than 600 pixels wide.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `6`.
        */
        public setIntervalsS(iIntervalsS: number): this;

        /**
            * Sets a new value for property {@link #getIntervalType intervalType}.
         * 
         * Determines the type of the intervals of the row.
         * 
         * ** Note: ** Not all predefined interval types are supported for this property. For more information, see the descriptions in the {@link sap.ui.unified.CalendarIntervalType CalendarIntervalType} enumeration.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Hour`.
        */
        public setIntervalType(sIntervalType: sap.ui.unified.CalendarIntervalType): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Defines the key of the view. This must be set to identify the used view in the {@link sap.m.PlanningCalendar}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getShowSubIntervals showSubIntervals}.
         * 
         * If set, subintervals are displayed as lines in the rows.
         * 
         *  * Quarter hour subintervals for interval type `Hour`. * Hour subintervals for interval types `Day`, `Week` and `OneMonth`. * Day subintervals for interval type `Month`. 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSubIntervals(bShowSubIntervals: boolean): this;

    }
}