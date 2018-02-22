declare module 'sap/m/StepInput' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IStepInputSettings extends IControlSettings {
        min?: number;
        max?: number;
        step?: number;
        largerStep?: number;
        value?: number;
        name?: string;
        placeholder?: string;
        required?: boolean;
        width?: sap.ui.core.CSSSize;
        valueState?: sap.ui.core.ValueState;
        valueStateText?: string;
        editable?: boolean;
        enabled?: boolean;
        displayValuePrecision?: number;
    }

    /**
    
    */
    export class StepInput extends Control {

        /**
            * Constructor for a new `StepInput`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IStepInputSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.StepInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.StepInput` itself.
         * 
         * Is fired when one of the following happens: <br>  1. the text in the input has changed and the focus leaves the input field or the enter key is pressed. 2. One of the decrement or increment buttons is pressed 
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code>. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.StepInput`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.StepInput` itself.
         * 
         * Is fired when one of the following happens: <br>  1. the text in the input has changed and the focus leaves the input field or the enter key is pressed. 2. One of the decrement or increment buttons is pressed 
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code>. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.StepInput`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.StepInput with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getDisplayValuePrecision displayValuePrecision}.
         * 
         * Determines the number of digits after the decimal point.
         * 
         * The value should be between 0 (default) and 20. In case the value is not valid it will be set to the default value.
         * 
         * Default value is `0`.
        */
        public getDisplayValuePrecision(): number;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Defines whether the control can be modified by the user or not. ** Note: ** A user can tab to the non-editable control, highlight it, and copy the text from it.
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
            * Gets current value of property {@link #getLargerStep largerStep}.
         * 
         * Increases/decreases the value with a larger value than the set step only when using the PageUp/PageDown keys. Default value is 2 times larger than the set step.
         * 
         * Default value is `2`.
        */
        public getLargerStep(): number;

        /**
            * Gets current value of property {@link #getMax max}.
         * 
         * Sets the maximum possible value of the defined range.
        */
        public getMax(): number;

        /**
            * Returns a metadata object for class sap.m.StepInput.
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
            * Gets current value of property {@link #getMin min}.
         * 
         * Sets the minimum possible value of the defined range.
        */
        public getMin(): number;

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
            * Gets current value of property {@link #getRequired required}.
         * 
         * Indicates that user input is required. This property is only needed for accessibility purposes when a single relationship between the field and a label (see aggregation `labelFor` of `sap.m.Label`) cannot be established (e.g. one label should label multiple fields).
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getStep step}.
         * 
         * Increases/decreases the value of the input. ** Note: ** * The value of the `step` property should not contain more digits after the decimal point than what is set to the `displayValuePrecision` property, as it may lead to an increase/decrease that is not visible for the user. For example, if the `value` is set to 1.22 and the `displayValuePrecision` is set to one digit after the decimal, the user will see 1.2. In this case, if the `value` of the `step` property is set to 1.005 and the user selects `increase`, the resulting value will increase to 1.2261 but the displayed value will remain as 1.2 as it will be rounded to the first digit after the decimal point. * Depending on what is set for the `value` and the `displayValuePrecision` properties, it is possible the displayed value to be rounded to a higher number, for example to 3.0 when the actual value is 2.99.
         * 
         * Default value is `1`.
        */
        public getStep(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Determines the value of the `StepInput` and can be set initially from the app developer.
         * 
         * Default value is `0`.
        */
        public getValue(): number;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Accepts the core enumeration ValueState.type that supports `None`, `Error`, `Warning` and `Success`.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text that appears in the value state message pop-up.
        */
        public getValueStateText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the control.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getDisplayValuePrecision displayValuePrecision}.
         * 
         * Determines the number of digits after the decimal point.
         * 
         * The value should be between 0 (default) and 20. In case the value is not valid it will be set to the default value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setDisplayValuePrecision(iDisplayValuePrecision: number): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Defines whether the control can be modified by the user or not. ** Note: ** A user can tab to the non-editable control, highlight it, and copy the text from it.
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
            * Sets a new value for property {@link #getLargerStep largerStep}.
         * 
         * Increases/decreases the value with a larger value than the set step only when using the PageUp/PageDown keys. Default value is 2 times larger than the set step.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setLargerStep(fLargerStep: number): this;

        /**
            * Sets a new value for property {@link #getMax max}.
         * 
         * Sets the maximum possible value of the defined range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMax(fMax: number): this;

        /**
            * Sets a new value for property {@link #getMin min}.
         * 
         * Sets the minimum possible value of the defined range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMin(fMin: number): this;

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
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Indicates that user input is required. This property is only needed for accessibility purposes when a single relationship between the field and a label (see aggregation `labelFor` of `sap.m.Label`) cannot be established (e.g. one label should label multiple fields).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getStep step}.
         * 
         * Increases/decreases the value of the input. ** Note: ** * The value of the `step` property should not contain more digits after the decimal point than what is set to the `displayValuePrecision` property, as it may lead to an increase/decrease that is not visible for the user. For example, if the `value` is set to 1.22 and the `displayValuePrecision` is set to one digit after the decimal, the user will see 1.2. In this case, if the `value` of the `step` property is set to 1.005 and the user selects `increase`, the resulting value will increase to 1.2261 but the displayed value will remain as 1.2 as it will be rounded to the first digit after the decimal point. * Depending on what is set for the `value` and the `displayValuePrecision` properties, it is possible the displayed value to be rounded to a higher number, for example to 3.0 when the actual value is 2.99.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setStep(fStep: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Determines the value of the `StepInput` and can be set initially from the app developer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setValue(fValue: number): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Accepts the core enumeration ValueState.type that supports `None`, `Error`, `Warning` and `Success`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text that appears in the value state message pop-up.
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
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}