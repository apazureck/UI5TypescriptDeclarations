declare module 'sap/m/RadioButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IRadioButtonSettings extends IControlSettings {
        enabled?: boolean;
        selected?: boolean;
        groupName?: string;
        text?: string;
        textDirection?: sap.ui.core.TextDirection;
        width?: sap.ui.core.CSSSize;
        useEntireWidth?: boolean;
        activeHandling?: boolean;
        editable?: boolean;
        valueState?: sap.ui.core.ValueState;
        textAlign?: sap.ui.core.TextAlign;
    }

    /**
    
    */
    export class RadioButton extends Control {

        /**
            * Constructor for a new RadioButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRadioButtonSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.RadioButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RadioButton` itself.
         * 
         * Event is triggered when the user makes a change on the radio button (selecting or unselecting it).
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the RadioButton is active or not. */
            selected: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.RadioButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RadioButton` itself.
         * 
         * Event is triggered when the user makes a change on the radio button (selecting or unselecting it).
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Checks whether the RadioButton is active or not. */
            selected: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.RadioButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Destroys all related objects to the RadioButton
        */
        protected exit(): any;

        /**
            * Cleans up the element instance before destruction.
         * 
         * Applications must not call this hook method directly, it is called by the framework when the element is {@link #destroy destroyed}.
         * 
         * Subclasses of Element should override this hook to implement any necessary cleanup.
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.m.RadioButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { selected?: boolean, }): this;

        /**
            * Gets current value of property {@link #getActiveHandling activeHandling}.
         * 
         * This is a flag to switch on activeHandling. When it is switched off, there will not be visual changes on active state. Default value is 'true'
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
         * Specifies whether the user can select the radio button.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Specifies if the radio button is disabled.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getGroupName groupName}.
         * 
         * Name of the radio button group the current radio button belongs to. You can define a new name for the group. If no new name is specified, this radio button belongs to the sapMRbDefaultGroup per default. Default behavior of a radio button in a group is that when one of the radio buttons in a group is selected, all others are unselected.
         * 
         * Default value is `sapMRbDefaultGroup`.
        */
        public getGroupName(): string;

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
            * Returns a metadata object for class sap.m.RadioButton.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Specifies the select state of the radio button
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Specifies the text displayed next to the RadioButton
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Specifies the alignment of the radio button. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
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
         * Indicates if the given width will be applied for the whole RadioButton or only it's label. By Default width is set only for the label.
         * 
         * Default value is `false`.
        */
        public getUseEntireWidth(): boolean;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning, None
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the RadioButton or it's label depending on the useEntireWidth property. By Default width is set only for the label.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Pseudo event for pseudo 'select' event... space, enter, ... without modifiers (Ctrl, Alt or Shift)
        */
        public onsapselect(oEvent: {}): any;

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
         * This is a flag to switch on activeHandling. When it is switched off, there will not be visual changes on active state. Default value is 'true'
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setActiveHandling(bActiveHandling: boolean): this;

        /**
            * Method to set a RadioButton's state to active or inactive.
        */
        public setActiveState(bActive: boolean): any;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Specifies whether the user can select the radio button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Specifies if the radio button is disabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets RadioButton's groupName. Only one radioButton from the same group can be selected
        */
        public setGroupName(sGroupName: string): this;

        /**
            * Sets the state of the RadioButton to selected.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets the text for the RadioButton's label.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Specifies the alignment of the radio button. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets the text direction for the RadioButton's label.
        */
        public setTextDirection(sDirection: string): this;

        /**
            * Sets a new value for property {@link #getUseEntireWidth useEntireWidth}.
         * 
         * Indicates if the given width will be applied for the whole RadioButton or only it's label. By Default width is set only for the label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseEntireWidth(bUseEntireWidth: boolean): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning, None
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the RadioButton or it's label depending on the useEntireWidth property. By Default width is set only for the label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}