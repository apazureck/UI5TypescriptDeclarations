declare module 'sap/m/CheckBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICheckBoxSettings extends IControlSettings {
        selected?: boolean;
        enabled?: boolean;
        name?: string;
        text?: string;
        textDirection?: sap.ui.core.TextDirection;
        textAlign?: sap.ui.core.TextAlign;
        width?: sap.ui.core.CSSSize;
        useEntireWidth?: boolean;
        activeHandling?: boolean;
        editable?: boolean;
        valueState?: sap.ui.core.ValueState;
    }

    /**
    
    */
    export class CheckBox extends Control {

        /**
            * Constructor for a new `CheckBox`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICheckBoxSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.CheckBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.CheckBox` itself.
         * 
         * Event is triggered when the control status is changed by the user by selecting or deselecting the checkbox.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the CheckBox is marked or not . */
            selected: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.CheckBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.CheckBox` itself.
         * 
         * Event is triggered when the control status is changed by the user by selecting or deselecting the checkbox.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the CheckBox is marked or not . */
            selected: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.CheckBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.CheckBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { selected?: boolean, }): this;

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
            * Gets current value of property {@link #getActiveHandling activeHandling}.
         * 
         * Flag to switch on activeHandling, when it is switched off, there will be no visual changes on active state. Default value is 'true'
         * 
         * Default value is `true`.
        */
        public getActiveHandling(): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Specifies whether the user shall be allowed to edit the state of the checkbox
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Disables the Checkbox. Disabled controls are not interactive and are rendered differently according to the theme.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

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
            * Returns a metadata object for class sap.m.CheckBox.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Stores the state of the checkbox whether it is selected or not.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Returns the CheckBox`s tab index.
        */
        protected getTabIndex(): number;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text displayed next to the checkbox
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Aligns the text of the checkbox. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getUseEntireWidth useEntireWidth}.
         * 
         * Indicates if the given width will be applied to the control as a whole or to its label only.
         * 
         * ** Note: ** by default the width is set to the label
         * 
         * Default value is `false`.
        */
        public getUseEntireWidth(): boolean;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the total width of the control or the width of its label only, depending on the value of `useEntireWidth`.
         * 
         * ** Note: ** When `useEntireWidth` is set to `true`, `width` is applied to the control as a whole (checkbox and label). Otherwise, `width` is applied to the label only.
         * 
         * Default value is ``.
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
            * Sets a new value for property {@link #getActiveHandling activeHandling}.
         * 
         * Flag to switch on activeHandling, when it is switched off, there will be no visual changes on active state. Default value is 'true'
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setActiveHandling(bActiveHandling: boolean): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Specifies whether the user shall be allowed to edit the state of the checkbox
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Disables the Checkbox. Disabled controls are not interactive and are rendered differently according to the theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Stores the state of the checkbox whether it is selected or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets the tab index of the control
        */
        protected setTabIndex(iTabIndex: number): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text displayed next to the checkbox
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Aligns the text of the checkbox. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getUseEntireWidth useEntireWidth}.
         * 
         * Indicates if the given width will be applied to the control as a whole or to its label only.
         * 
         * ** Note: ** by default the width is set to the label
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseEntireWidth(bUseEntireWidth: boolean): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the total width of the control or the width of its label only, depending on the value of `useEntireWidth`.
         * 
         * ** Note: ** When `useEntireWidth` is set to `true`, `width` is applied to the control as a whole (checkbox and label). Otherwise, `width` is applied to the label only.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}