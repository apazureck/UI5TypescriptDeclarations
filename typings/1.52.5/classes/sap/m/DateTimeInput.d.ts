declare module 'sap/m/DateTimeInput' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDateTimeInputSettings extends IControlSettings {
        value?: string;
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        editable?: boolean;
        valueState?: sap.ui.core.ValueState;
        valueStateText?: string;
        showValueStateMessage?: boolean;
        name?: string;
        placeholder?: string;
        textAlign?: sap.ui.core.TextAlign;
        textDirection?: sap.ui.core.TextDirection;
        type?: sap.m.DateTimeInputType;
        displayFormat?: string;
        valueFormat?: string;
        dateValue?: {};
    }

    /**
    
    */
    export class DateTimeInput extends Control {

        /**
            * Constructor for a new DateTimeInput.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDateTimeInputSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.DateTimeInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.DateTimeInput` itself.
         * 
         * This event gets fired when the selection has finished and the value has changed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The string value of the control in given valueFormat (or locale format). */
            value: string, /* * The value of control as JavaScript Date Object or null if value is empty. */
            dateValue: {}, /* * if set, the entered value is a valid date. If not set the entered value cannot be converted to a date. */
            valid: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.DateTimeInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.DateTimeInput` itself.
         * 
         * This event gets fired when the selection has finished and the value has changed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The string value of the control in given valueFormat (or locale format). */
            value: string, /* * The value of control as JavaScript Date Object or null if value is empty. */
            dateValue: {}, /* * if set, the entered value is a valid date. If not set the entered value cannot be converted to a date. */
            valid: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.DateTimeInput`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.DateTimeInput with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, dateValue?: {}, valid?: boolean, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getDateValue dateValue}.
         * 
         * This property as JavaScript Date Object can be used to assign a new value which is independent from valueFormat.
        */
        public getDateValue(): {};

        /**
            * Gets current value of property {@link #getDisplayFormat displayFormat}.
         * 
         * Displays date value in this given format in text field. Default value is taken from locale settings. If you use data-binding on value property with type sap.ui.model.type.Date then you can ignore this property or the latter wins. If the user's browser supports native picker then this property is overwritten by browser with locale settings.
        */
        public getDisplayFormat(): string;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Defines whether the control can be modified by the user or not. ** Note: ** A user can tab to non-editable control, highlight it, and copy the text from it.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can interact with the control or not. ** Note: ** Disabled controls cannot be focused and they are out of the tab-chain.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.m.DateTimeInput.
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
            * Gets current value of property {@link #getName name}.
         * 
         * Defines the name of the control for the purposes of form submission.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getPlaceholder placeholder}.
         * 
         * Defines a short hint intended to aid the user with data entry when the control has no value.
        */
        public getPlaceholder(): string;

        /**
            * Gets current value of property {@link #getShowValueStateMessage showValueStateMessage}.
         * 
         * Indicates whether the value state message should be shown or not.
         * 
         * Default value is `true`.
        */
        public getShowValueStateMessage(): boolean;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Defines the horizontal alignment of the text that is shown inside the input field.
         * 
         * Default value is `Initial`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Defines the text directionality of the input field, e.g. `RTL`, `LTR`
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type of DateTimeInput (e.g. Date, Time, DateTime)
         * 
         * Default value is `Date`.
        */
        public getType(): sap.m.DateTimeInputType;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Defines the value of the control.
         * 
         * The new value must be in the format set by `valueFormat`.
         * 
         * The "Now" literal can also be assigned as a parameter to show the current date and/or time.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueFormat valueFormat}.
         * 
         * Given value property should match with valueFormat to parse date. Default value is taken from locale settings. You can only set and get value in this format. If you use data-binding on value property with type sap.ui.model.type.Date you can ignore this property or the latter wins.
        */
        public getValueFormat(): string;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes the validation state of the control, e.g. `Error`, `Warning`, `Success`.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text that appears in the value state message pop-up. If this is not specified, a default text is shown from the resource bundle.
        */
        public getValueStateText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the control.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getDateValue dateValue}.
         * 
         * This property as JavaScript Date Object can be used to assign a new value which is independent from valueFormat.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDateValue(oDateValue: {}): this;

        /**
            * Sets a new value for property {@link #getDisplayFormat displayFormat}.
         * 
         * Displays date value in this given format in text field. Default value is taken from locale settings. If you use data-binding on value property with type sap.ui.model.type.Date then you can ignore this property or the latter wins. If the user's browser supports native picker then this property is overwritten by browser with locale settings.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDisplayFormat(sDisplayFormat: string): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Defines whether the control can be modified by the user or not. ** Note: ** A user can tab to non-editable control, highlight it, and copy the text from it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can interact with the control or not. ** Note: ** Disabled controls cannot be focused and they are out of the tab-chain.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Defines the name of the control for the purposes of form submission.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * Defines a short hint intended to aid the user with data entry when the control has no value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets a new value for property {@link #getShowValueStateMessage showValueStateMessage}.
         * 
         * Indicates whether the value state message should be shown or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowValueStateMessage(bShowValueStateMessage: boolean): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Defines the horizontal alignment of the text that is shown inside the input field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Initial`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Defines the text directionality of the input field, e.g. `RTL`, `LTR`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of DateTimeInput (e.g. Date, Time, DateTime)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Date`.
        */
        public setType(sType: sap.m.DateTimeInputType): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Defines the value of the control.
         * 
         * The new value must be in the format set by `valueFormat`.
         * 
         * The "Now" literal can also be assigned as a parameter to show the current date and/or time.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueFormat valueFormat}.
         * 
         * Given value property should match with valueFormat to parse date. Default value is taken from locale settings. You can only set and get value in this format. If you use data-binding on value property with type sap.ui.model.type.Date you can ignore this property or the latter wins.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValueFormat(sValueFormat: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes the validation state of the control, e.g. `Error`, `Warning`, `Success`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text that appears in the value state message pop-up. If this is not specified, a default text is shown from the resource bundle.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValueStateText(sValueStateText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

    }
}