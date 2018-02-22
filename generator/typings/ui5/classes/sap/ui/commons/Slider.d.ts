declare module 'sap/ui/commons/Slider' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISliderSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        min?: number;
        max?: number;
        value?: number;
        smallStepWidth?: number;
        totalUnits?: number;
        stepLabels?: boolean;
        editable?: boolean;
        enabled?: boolean;
        labels?: string[];
        vertical?: boolean;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class Slider extends Control {

        /**
            * Constructor for a new `Slider`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISliderSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         * 
         * Value was changed. This event is fired if the value has changed by a user action.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the slider after a change. */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         * 
         * Value was changed. This event is fired if the value has changed by a user action.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the slider after a change. */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         * 
         * Value was changed. This event is fired during the mouse move. The normal change event is only fired by mouseup.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the slider after a change. */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         * 
         * Value was changed. This event is fired during the mouse move. The normal change event is only fired by mouseup.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the slider after a change. */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Slider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: number, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { value?: number, }): this;

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
         * Using the slider interactively requires value "true".
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
            * Gets current value of property {@link #getHeight height}.
         * 
         * Height of the vertical slider.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLabels labels}.
         * 
         * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
         * 
         * ** Note: ** To show the labels `stepLabels` must be activated.
        */
        public getLabels(): {};

        /**
            * Gets current value of property {@link #getMax max}.
         * 
         * Maximal value of the slider
         * 
         * ** Note: ** If `min` is larger than `max` both values will be switched
         * 
         * Default value is `100`.
        */
        public getMax(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.Slider.
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
         * Minimal value of the slider.
         * 
         * ** Note: ** If `min` is larger than `max` both values will be switched
         * 
         * Default value is `0`.
        */
        public getMin(): number;

        /**
            * Gets current value of property {@link #getSmallStepWidth smallStepWidth}.
         * 
         * The grip can only be moved in steps of this width.
        */
        public getSmallStepWidth(): number;

        /**
            * Gets current value of property {@link #getStepLabels stepLabels}.
         * 
         * Display step numbers for the ticks on the slider.
         * 
         * Default value is `false`.
        */
        public getStepLabels(): boolean;

        /**
            * Gets current value of property {@link #getTotalUnits totalUnits}.
         * 
         * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these units.
        */
        public getTotalUnits(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Current value of the slider. (Position of the grip.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range.
         * 
         * Default value is `50`.
        */
        public getValue(): number;

        /**
            * Gets current value of property {@link #getVertical vertical}.
         * 
         * Orientation of slider
         * 
         * Default value is `false`.
        */
        public getVertical(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the horizontal slider.
         * 
         * Default value is `100%`.
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
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Using the slider interactively requires value "true".
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
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Height of the vertical slider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLabels labels}.
         * 
         * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
         * 
         * ** Note: ** To show the labels `stepLabels` must be activated.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabels(sLabels: {}): this;

        /**
            * Sets a new value for property {@link #getMax max}.
         * 
         * Maximal value of the slider
         * 
         * ** Note: ** If `min` is larger than `max` both values will be switched
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setMax(fMax: number): this;

        /**
            * Sets a new value for property {@link #getMin min}.
         * 
         * Minimal value of the slider.
         * 
         * ** Note: ** If `min` is larger than `max` both values will be switched
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMin(fMin: number): this;

        /**
            * Sets a new value for property {@link #getSmallStepWidth smallStepWidth}.
         * 
         * The grip can only be moved in steps of this width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSmallStepWidth(fSmallStepWidth: number): this;

        /**
            * Sets a new value for property {@link #getStepLabels stepLabels}.
         * 
         * Display step numbers for the ticks on the slider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStepLabels(bStepLabels: boolean): this;

        /**
            * Sets a new value for property {@link #getTotalUnits totalUnits}.
         * 
         * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these units.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTotalUnits(iTotalUnits: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Current value of the slider. (Position of the grip.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `50`.
        */
        public setValue(fValue: number): this;

        /**
            * Sets a new value for property {@link #getVertical vertical}.
         * 
         * Orientation of slider
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setVertical(bVertical: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the horizontal slider.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}