declare module 'sap/ui/unified/CalendarAppointment' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DateTypeRange, IDateTypeRangeSettings } from 'sap/ui/unified/DateTypeRange';

    export interface ICalendarAppointmentSettings extends IDateTypeRangeSettings {
        title?: string;
        text?: string;
        icon?: sap.ui.core.URI;
        tentative?: boolean;
        selected?: boolean;
        key?: string;
        color?: sap.ui.core.CSSColor;
    }

    /**
    
    */
    export class CalendarAppointment extends DateTypeRange {

        /**
            * Constructor for a new `CalendarAppointment`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICalendarAppointmentSettings);


        /**
            * Creates a new subclass of class sap.ui.unified.CalendarAppointment with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateTypeRange.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColor color}.
         * 
         * Overrides the color derived from the `type` property. This property will work only with full hex color with pound symbol, e.g.: #FF0000.
        */
        public getColor(): sap.ui.core.CSSColor;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon of the Appointment. (e.g. picture of the person)
         * 
         * URI of an image or an icon registered in sap.ui.core.IconPool.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Can be used as identifier of the appointment
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.unified.CalendarAppointment.
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
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Indicates if the icon is selected.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getTentative tentative}.
         * 
         * Indicates if the icon is tentative.
         * 
         * Default value is `false`.
        */
        public getTentative(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Text of the appointment.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title of the appointment.
        */
        public getTitle(): string;

        /**
            * Sets a new value for property {@link #getColor color}.
         * 
         * Overrides the color derived from the `type` property. This property will work only with full hex color with pound symbol, e.g.: #FF0000.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColor(sColor: sap.ui.core.CSSColor): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon of the Appointment. (e.g. picture of the person)
         * 
         * URI of an image or an icon registered in sap.ui.core.IconPool.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Can be used as identifier of the appointment
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Indicates if the icon is selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getTentative tentative}.
         * 
         * Indicates if the icon is tentative.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setTentative(bTentative: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Text of the appointment.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title of the appointment.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}