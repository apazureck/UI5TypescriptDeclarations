declare module 'sap/m/DateTimeField' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { InputBase, IInputBaseSettings } from 'sap/m/InputBase';

    export interface IDateTimeFieldSettings extends IInputBaseSettings {
        displayFormat?: string;
        valueFormat?: string;
        dateValue?: {};
    }

    /**
    
    */
    export class DateTimeField extends InputBase {

        /**
            * Constructor for a new `sap.m.DateTimeField`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDateTimeFieldSettings);


        /**
            * Creates a new subclass of class sap.m.DateTimeField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getDateValue dateValue}.
         * 
         * Holds a reference to a JavaScript Date Object. The `value` (string) property will be set according to it. Alternatively, if the `value` and `valueFormat` pair properties are supplied instead, the `dateValue` will be instantiated according to the parsed `value`.
        */
        public getDateValue(): {};

        /**
            * Gets current value of property {@link #getDisplayFormat displayFormat}.
         * 
         * Determines the format, displayed in the input field.
        */
        public getDisplayFormat(): string;

        /**
            * Returns a metadata object for class sap.m.DateTimeField.
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
            * Gets current value of property {@link #getValueFormat valueFormat}.
         * 
         * Determines the format of the value property.
        */
        public getValueFormat(): string;

        /**
            * Sets a new value for property {@link #getDateValue dateValue}.
         * 
         * Holds a reference to a JavaScript Date Object. The `value` (string) property will be set according to it. Alternatively, if the `value` and `valueFormat` pair properties are supplied instead, the `dateValue` will be instantiated according to the parsed `value`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDateValue(oDateValue: {}): this;

        /**
            * Sets a new value for property {@link #getDisplayFormat displayFormat}.
         * 
         * Determines the format, displayed in the input field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDisplayFormat(sDisplayFormat: string): this;

        /**
            * Sets a new value for property {@link #getValueFormat valueFormat}.
         * 
         * Determines the format of the value property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValueFormat(sValueFormat: string): this;

    }
}