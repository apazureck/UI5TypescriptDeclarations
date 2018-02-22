declare module 'sap/ui/commons/TextField' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITextFieldSettings extends IControlSettings {
        value?: string;
        textDirection?: sap.ui.core.TextDirection;
        enabled?: boolean;
        editable?: boolean;
        required?: boolean;
        width?: sap.ui.core.CSSSize;
        maxLength?: number;
        valueState?: sap.ui.core.ValueState;
        textAlign?: sap.ui.core.TextAlign;
        imeMode?: sap.ui.core.ImeMode;
        design?: sap.ui.core.Design;
        helpId?: string;
        accessibleRole?: sap.ui.core.AccessibleRole;
        name?: string;
        placeholder?: string;
    }

    /**
    
    */
    export class TextField extends Control {

        /**
            * Constructor for a new TextField.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sID: string, mSettings: ITextFieldSettings);


        /**
            * Compares the previous value with the current value and fires the change event if the TextField is editable and the value has changed.
        */
        protected _checkChange(oEvent: jQuery.Event): any;

        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         * 
         * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new / changed value of the <code>TextField</code>. */
            newValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         * 
         * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new / changed value of the <code>TextField</code>. */
            newValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         * 
         * This event if fired during typing into the `TextField` and returns the currently entered value. ** Note: ** This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current visible value of the <code>TextField</code>. */
            liveValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         * 
         * This event if fired during typing into the `TextField` and returns the currently entered value. ** Note: ** This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current visible value of the <code>TextField</code>. */
            liveValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.TextField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { liveValue?: string, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         * 
         * Accessibility role for the text field.
         * 
         * Default value is `Textbox`.
        */
        public getAccessibleRole(): sap.ui.core.AccessibleRole;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Font type. valid values are Standard and Monospace.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.ui.core.Design;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Switches edit state of the control. Read-only fields have different colors, depending on theme setting.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns an object representing the serialized focus information
        */
        protected getFocusInfo(): {};

        /**
            * Gets current value of property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service.
         * 
         * Default value is ``.
        */
        public getHelpId(): string;

        /**
            * Gets current value of property {@link #getImeMode imeMode}.
         * 
         * State of the Input Method Editor (IME).
         * 
         * Default value is `Auto`.
        */
        public getImeMode(): sap.ui.core.ImeMode;

        /**
            * Method for accessing the DOM Ref of the input element.
        */
        protected getInputDomRef(): {};

        /**
            * Returns the current value of the `TextField`. In case of editing the `TextField` you can access the current value via this method. The validated value is accessible via the property value.
        */
        public getLiveValue(): string;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.TextField.
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
         * The `name` property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the text field.
        */
        public getPlaceholder(): string;

        /**
            * Gets current value of property {@link #getRequired required}.
         * 
         * Depending on theme the `TextField` is shown as required. If a `Label` is assigned to the `TextField` it will visualize the requires state too.
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text.
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Direction of the text. Possible values: "rtl", "ltr".
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Text inside the `TextField`
         * 
         * Default value is ``.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text field length defines the width.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Event handler called when control is receiving the focus
        */
        protected onfocusin(oEvent: jQuery.Event): any;

        /**
            * Event handler for keyup. fire the liveChange event
        */
        protected onkeyup(oEvent: jQuery.Event): any;

        /**
            * Event handler called when enter key is pressed.
        */
        protected onsapenter(oEvent: jQuery.Event): any;

        /**
            * Event handler called when control is losing the focus
        */
        protected onsapfocusleave(oEvent: jQuery.Event): any;

        /**
            * Event handler called when text selection starts. When the text field is disabled, the text should not be selectable, so cancel the event.
        */
        protected onselectstart(oEvent: jQuery.Event): any;

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
            * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         * 
         * Accessibility role for the text field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Textbox`.
        */
        public setAccessibleRole(sAccessibleRole: sap.ui.core.AccessibleRole): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Font type. valid values are Standard and Monospace.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.ui.core.Design): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Switches edit state of the control. Read-only fields have different colors, depending on theme setting.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHelpId(sHelpId: string): this;

        /**
            * Sets a new value for property {@link #getImeMode imeMode}.
         * 
         * State of the Input Method Editor (IME).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setImeMode(sImeMode: sap.ui.core.ImeMode): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The `name` property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the text field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Depending on theme the `TextField` is shown as required. If a `Label` is assigned to the `TextField` it will visualize the requires state too.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Direction of the text. Possible values: "rtl", "ltr".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Text inside the `TextField`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text field length defines the width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

    }
}