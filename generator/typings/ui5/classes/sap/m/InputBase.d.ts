declare module 'sap/m/InputBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IInputBaseSettings extends IControlSettings {
        value?: string;
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        valueState?: sap.ui.core.ValueState;
        name?: string;
        placeholder?: string;
        editable?: boolean;
        valueStateText?: string;
        showValueStateMessage?: boolean;
        textAlign?: sap.ui.core.TextAlign;
        textDirection?: sap.ui.core.TextDirection;
        required?: boolean;
    }

    /**
    
    */
    export class InputBase extends Control {

        /**
            * Constructor for a new `sap.m.InputBase`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IInputBaseSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Applies the focus info. To be overwritten by subclasses.
        */
        protected applyFocusInfo(oFocusInfo: {}): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.InputBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.InputBase` itself.
         * 
         * Is fired when the text in the input field has changed and the focus leaves the input field or the enter key is pressed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code>. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.InputBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.InputBase` itself.
         * 
         * Is fired when the text in the input field has changed and the focus leaves the input field or the enter key is pressed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code>. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Registers an event listener to the browser input event.
        */
        protected bindToInputEvent(fnCallback: (() => any)): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: {}): this;

        /**
            * Close value state message popup.
        */
        protected closeValueStateMessage(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.InputBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.InputBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fires the change event for the listeners
        */
        protected fireChangeEvent(sValue: string, oParams?: {}): any;

        /**
            
        */
        protected getAccessibilityInfo(): any | {};

        /**
            * This function (if available on the concrete control) provides the current accessibility state of the control.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should implement this hook to provide any necessary accessibility information:
         * 
         * `MyControl.prototype.getAccessibilityInfo = function() {
         *    return {
         *      role: "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
         *      type: "date input",   // String which represents the control type (Must be a translated text). Might correlate with
         *                            // the role.
         *      description: "value", // String which describes the most relevant control state (e.g. the inputs value). Must be a
         *                            // translated text.
         *                            // Note: The type and the enabled/editable state must not be handled here.
         *      focusable: true,      // Boolean which describes whether the control can get the focus.
         *      enabled: true,        // Boolean which describes whether the control is enabled. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      editable: true,       // Boolean which describes whether the control is editable. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      children: []          // Aggregations of the given control (e.g. when the control is a layout). Primitive aggregations will be ignored.
         *                            // Note: Children should only be provided when it is helpful to understand the accessibility context
         *                            //       (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
         *                            //       layout should).
         *    };
         * };`
         * 
         * Note: The returned object provides the accessibility state of the control at the point in time when this function is called.
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets the DOM element reference where the message popup is attached.
        */
        protected getDomRefForValueStateMessage(): {};

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
            * Returns an object representing the serialized focus information. To be overwritten by subclasses.
        */
        protected getFocusInfo(): {};

        /**
            * Gets the labels referencing this control.
        */
        protected getLabels(): {};

        /**
            * Returns a metadata object for class sap.m.InputBase.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

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
            * Retrieves the selected text. Only supported for input control's type of Text, Url, Tel and Password.
        */
        protected getSelectedText(): string;

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
            * Gets current value of property {@link #getValue value}.
         * 
         * Defines the value of the control.
        */
        public getValue(): string;

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
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Handles the change event.
        */
        protected onChange(oEvent: {}, sNewValue: string): boolean | any;

        /**
            * Handles the change event.
        */
        protected onChange(oEvent: {}, mParameters: {}, sNewValue: string): boolean | any;

        /**
            * Hook method that gets called when the input value is reverted with hitting escape. It may require to re-implement this method from sub classes for control specific behaviour.
        */
        protected onValueRevertedByEscape(sValue: string): any;

        /**
            * Open value state message popup.
        */
        protected openValueStateMessage(): any;

        /**
            * Hook method to prevent the change event from being fired when the text input field loses focus.
        */
        protected preventChangeOnFocusLeave(oEvent?: jQuery.Event): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Selects the text within the input field between the specified start and end positions. Only supported for input control's type of Text, Url, Tel and Password.
        */
        protected selectText(iSelectionStart: number, iSelectionEnd: number): this;

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
            * Setter for property `value`.
         * 
         * Default value is empty/`undefined`.
        */
        public setValue(sValue: string): this;

        /**
            * Setter for property `valueState`.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Setter for property `valueStateText`.
         * 
         * Default value is empty/`undefined`.
        */
        public setValueStateText(sText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

        /**
            * Sets the DOM value of the input field and handles placeholder visibility.
        */
        protected updateDomValue(sValue: string): this;

    }
}