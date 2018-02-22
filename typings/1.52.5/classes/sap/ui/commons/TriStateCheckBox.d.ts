declare module 'sap/ui/commons/TriStateCheckBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITriStateCheckBoxSettings extends IControlSettings {
        selectionState?: sap.ui.commons.TriStateCheckBoxState;
        text?: string;
        enabled?: boolean;
        editable?: boolean;
        valueState?: sap.ui.core.ValueState;
        width?: sap.ui.core.CSSSize;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class TriStateCheckBox extends Control {

        /**
            * Constructor for a new TriStateCheckBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITriStateCheckBoxSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TriStateCheckBox` itself.
         * 
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the box is flagged or not flagged. */
            selectionState: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TriStateCheckBox` itself.
         * 
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the box is flagged or not flagged. */
            selectionState: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.TriStateCheckBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { selectionState?: string, }): this;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Specifies whether the user shall be allowed to flag the check box
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Using this property, the control could be disabled, if required.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.TriStateCheckBox.
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
            * Gets current value of property {@link #getSelectionState selectionState}.
         * 
         * Defines the states of the checkbox
         * 
         * Default value is `Unchecked`.
        */
        public getSelectionState(): sap.ui.commons.TriStateCheckBoxState;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text displayed next to the check box
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

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
         * The width can be set to an absolute value. If no value is set, the control width results from the text length.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Specifies whether the user shall be allowed to flag the check box
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Using this property, the control could be disabled, if required.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getSelectionState selectionState}.
         * 
         * Defines the states of the checkbox
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Unchecked`.
        */
        public setSelectionState(sSelectionState: sap.ui.commons.TriStateCheckBoxState): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text displayed next to the check box
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

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
         * The width can be set to an absolute value. If no value is set, the control width results from the text length.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Method called whenever a user clicks on a tri-state checkbox
        */
        public toggle(destState: sap.ui.commons.TriStateCheckBoxState): any;

    }
}