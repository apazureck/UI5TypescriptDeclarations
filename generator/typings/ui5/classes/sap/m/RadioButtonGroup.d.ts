declare module 'sap/m/RadioButtonGroup' {
    import { Event } from 'sap/ui/base/Event';
    import { RadioButton } from 'sap/m/RadioButton';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IRadioButtonGroupSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        columns?: number;
        editable?: boolean;
        valueState?: sap.ui.core.ValueState;
        selectedIndex?: number;
        enabled?: boolean;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class RadioButtonGroup extends Control {

        /**
            * Constructor for a new RadioButtonGroup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRadioButtonGroupSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: RadioButton): this;

        /**
            * Adds a new radio button to the group.
        */
        public addButton(oButton: RadioButton): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.RadioButtonGroup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RadioButtonGroup` itself.
         * 
         * Fires when selection is changed by user interaction.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Index of the selected RadioButton. */
            selectedIndex: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.RadioButtonGroup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.RadioButtonGroup` itself.
         * 
         * Fires when selection is changed by user interaction.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Index of the selected RadioButton. */
            selectedIndex: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getButtons buttons} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindButtons(oBindingInfo: {}): this;

        /**
            * Creates a new instance of RadioButtonGroup, with the same settings as the RadioButtonGroup on which the method is called. Event handlers are not cloned.
        */
        protected clone(): this;

        /**
            * Clones a tree of objects starting with the object on which clone is called first (root object).
         * 
         * The IDs within the newly created clone tree are derived from the original IDs by appending the given `sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).
         * 
         * The `oOptions` configuration object can have the following properties:  * The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned * The boolean value `cloneBindings` specifies if bindings will be cloned 
         * 
         * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:  * all properties that are not bound. If `cloneBinding` is `false`, even these properties will be cloned; the values are used by reference, they are not cloned * all aggregated objects that are not bound. If `cloneBinding` is `false`, even the ones that are bound will be cloned; they are all cloned recursively using the same `sIdSuffix` * all associated controls; when an association points to an object inside the cloned object tree, then the cloned association will be modified to that it points to the clone of the target object. When the association points to a managed object outside of the cloned object tree, then its target won't be changed. * all models set via `setModel()`; used by reference * all property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information (path, model name) is cloned, but all other information like template control or factory function, data type or formatter function are copied by reference. The bindings themselves are created anew as they are specific for the combination (object, property, model). As a result, any later changes to a binding of the original object are not reflected in the clone, but changes to e.g the type or template etc. are. 
         * 
         * Each clone is created by first collecting the above mentioned settings and then creating a new instance with the normal constructor function. As a result, any side effects of mutator methods (`setProperty` etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to reproduce these internal settings!
         * 
         * Custom controls however can override `clone()` to implement additional clone steps. They usually will first call `clone()` on the super class and then modify the returned clone accordingly.
         * 
         * Applications ** must never provide ** the second parameter `aLocaleIds`. It is determined automatically for the root object (and its non-existence also serves as an indicator for the root object). Specifying it will break the implementation of `clone()`.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: {}, oOptions?: {}, cloneChildren?: boolean, cloneBindings?: boolean): this;

        /**
            * Destroys all radio buttons.
        */
        public destroyButtons(): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.RadioButtonGroup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Cleans up the element instance before destruction.
         * 
         * Applications must not call this hook method directly, it is called by the framework when the element is {@link #destroy destroyed}.
         * 
         * Subclasses of Element should override this hook to implement any necessary cleanup.
        */
        protected exit(): any;

        /**
            * Exits the radio button group.
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.m.RadioButtonGroup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { selectedIndex?: number, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Returns a list of the RadioButtons in a RadioButtonGroup
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getColumns columns}.
         * 
         * Specifies the maximum number of radio buttons displayed in one line.
         * 
         * Default value is `1`.
        */
        public getColumns(): number;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Specifies whether the user can change the selected value of the RadioButtonGroup. When the property is set to false, the control obtains visual styles different from its visual styles for the normal and the disabled state. Additionally, the control is no longer interactive, but can receive focus.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Switches the enabled state of the control. All Radio Buttons inside a disabled group are disabled. Default value is "true".
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

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
            * Returns a metadata object for class sap.m.RadioButtonGroup.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns the selected radio button.
        */
        public getSelectedButton(): RadioButton;

        /**
            * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         * 
         * Determines the index of the selected/checked RadioButton. Default is 0. If no radio button is selected, the selectedIndex property will return -1.
         * 
         * Default value is `0`.
        */
        public getSelectedIndex(): number;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * The value state to be displayed for the radio button. Possible values are: sap.ui.core.ValueState.Error, sap.ui.core.ValueState.Warning, sap.ui.core.ValueState.Success and sap.ui.core.ValueState.None. Note: Setting this attribute to sap.ui.core.ValueState.Error when the accessibility feature is enabled, sets the value of the invalid property for the whole RadioButtonGroup to "true".
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the RadioButtonGroup.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.RadioButton` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: RadioButton): number;

        /**
            * Adds a new radio button to the group at a specified index.
        */
        public insertButton(oButton: RadioButton, iIndex: number): this;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: RadioButton, iIndex: number): this;

        /**
            * Overwrites the onAfterRendering
        */
        protected onAfterRendering(): any;

        /**
            * Function is called when the rendering of the control is completed.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Function is called before the rendering of the control is started.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Overwrites the onBeforeRendering method.
        */
        protected onBeforeRendering(): any;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes all radio buttons.
        */
        public removeAllButtons(): any[];

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | RadioButton): RadioButton;

        /**
            * Removes a radio button from the group.
        */
        public removeButton(): RadioButton;

        /**
            * Sets a new value for property {@link #getColumns columns}.
         * 
         * Specifies the maximum number of radio buttons displayed in one line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setColumns(iColumns: number): this;

        /**
            * Sets the editable property of the RadioButtonGroup. Single buttons preserve the value of their editable property. If the group is set to editable=false the buttons are also displayed and function as read only. Non editable radio buttons can still obtain focus.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets the enabled property of the RadioButtonGroup. Single buttons preserve internally the value of their enabled property. If the group is set to enabled=false the buttons are also displayed as disabled and getEnabled returns false.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the selected sap.m.RadioButton using sap.m.RadioButton.
        */
        public setSelectedButton(oSelectedButton: RadioButton): this;

        /**
            * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         * 
         * Determines the index of the selected/checked RadioButton. Default is 0. If no radio button is selected, the selectedIndex property will return -1.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setSelectedIndex(iSelectedIndex: number): this;

        /**
            * Sets the selected sap.m.RadioButton using index.
        */
        public setSelectedIndex(iSelectedIndex: number): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets ValueState of all radio buttons in the group.
        */
        public setValueState(sValueState: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * The value state to be displayed for the radio button. Possible values are: sap.ui.core.ValueState.Error, sap.ui.core.ValueState.Warning, sap.ui.core.ValueState.Success and sap.ui.core.ValueState.None. Note: Setting this attribute to sap.ui.core.ValueState.Error when the accessibility feature is enabled, sets the value of the invalid property for the whole RadioButtonGroup to "true".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the RadioButtonGroup.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds aggregation {@link #getButtons buttons} from model data.
        */
        public unbindButtons(): this;

        /**
            * Updates the buttons in the group.
        */
        public updateButtons(): any;

    }
}