declare module 'sap/ui/commons/DatePicker' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TextField, ITextFieldSettings } from 'sap/ui/commons/TextField';

    export interface IDatePickerSettings extends ITextFieldSettings {
        locale?: string;
        yyyymmdd?: string;
    }

    /**
    
    */
    export class DatePicker extends TextField {

        /**
            * Constructor for a new DatePicker.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDatePickerSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.DatePicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, }): this;

        /**
            * Fire event change to attached listeners.
         * 
         * Provides the following event parameters:  * 'newValue' of type `string` The new / changed value of the DatePicker. * 'newYyyymmdd' of type `string` The new / changed Yyyymmdd of the DatePicker. * 'invalidValue' of type `boolean` The new / changed value of the DatePicker is not a valid date. 
        */
        protected fireChange(bInvalidValue: boolean): this;

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Gets current value of property {@link #getLocale locale}.
         * 
         * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should be used to render the DatePicker.If the value property is bound to a model using a Date type the locale will be ignored, because the locale information of the model are used.
        */
        public getLocale(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.DatePicker.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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
            * Gets current value of property {@link #getYyyymmdd yyyymmdd}.
         * 
         * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value" attribute uses the date format as configured via the locale. The date is interpreted as gregorian date
        */
        public getYyyymmdd(): string;

        /**
            * Sets a new value for property {@link #getLocale locale}.
         * 
         * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should be used to render the DatePicker.If the value property is bound to a model using a Date type the locale will be ignored, because the locale information of the model are used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLocale(sLocale: string): this;

        /**
            * Sets a new value for property {@link #getYyyymmdd yyyymmdd}.
         * 
         * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value" attribute uses the date format as configured via the locale. The date is interpreted as gregorian date
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setYyyymmdd(sYyyymmdd: string): this;

    }
}