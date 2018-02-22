declare module 'sap/m/Slider' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISliderSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        name?: string;
        min?: number;
        max?: number;
        step?: number;
        progress?: boolean;
        value?: number;
        showHandleTooltip?: boolean;
        showAdvancedTooltip?: boolean;
        inputsAsTooltips?: boolean;
        enableTickmarks?: boolean;
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
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Slider` itself.
         * 
         * This event is triggered after the end user finishes interacting, if there is any change.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the slider after a change. */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Slider` itself.
         * 
         * This event is triggered after the end user finishes interacting, if there is any change.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the slider after a change. */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Slider` itself.
         * 
         * This event is triggered during the dragging period, each time the slider value changes.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the slider after a live change. */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.Slider`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Slider` itself.
         * 
         * This event is triggered during the dragging period, each time the slider value changes.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the slider after a live change. */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the scale in the aggregation {@link #getScale scale}.
        */
        public destroyScale(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.Slider`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.Slider`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Slider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can change the value.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getEnableTickmarks enableTickmarks}.
         * 
         * Enables tickmarks visualisation
         * 
         * Default value is `false`.
        */
        public getEnableTickmarks(): boolean;

        /**
            * Gets current value of property {@link #getInputsAsTooltips inputsAsTooltips}.
         * 
         * Indicates whether input fields should be used as tooltips for the handles. ** Note: ** Setting this option to `true` will only work if `showAdvancedTooltips` is set to `true`.
         * 
         * Default value is `false`.
        */
        public getInputsAsTooltips(): boolean;

        /**
            * Gets current value of property {@link #getMax max}.
         * 
         * The maximum value.
         * 
         * Default value is `100`.
        */
        public getMax(): number;

        /**
            * Returns a metadata object for class sap.m.Slider.
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
         * The minimum value.
         * 
         * Default value is `0`.
        */
        public getMin(): number;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
         * 
         * Default value is ``.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getProgress progress}.
         * 
         * Indicate whether a progress bar indicator is shown.
         * 
         * Default value is `true`.
        */
        public getProgress(): boolean;

        /**
            * Gets content of aggregation {@link #getScale scale}.
         * 
         * Scale for visualisation of tickmarks and labels
        */
        public getScale(): sap.m.IScale;

        /**
            * Gets current value of property {@link #getShowAdvancedTooltip showAdvancedTooltip}.
         * 
         * Indicate whether the handle's advanced tooltip is shown. ** Note: ** Setting this option to `true` will ignore the value set in `showHandleTooltips`. This will cause only the advanced tooltip to be shown.
         * 
         * Default value is `false`.
        */
        public getShowAdvancedTooltip(): boolean;

        /**
            * Gets current value of property {@link #getShowHandleTooltip showHandleTooltip}.
         * 
         * Indicate whether the handle tooltip is shown.
         * 
         * Default value is `true`.
        */
        public getShowHandleTooltip(): boolean;

        /**
            * Gets current value of property {@link #getStep step}.
         * 
         * Define the amount of units to change the slider when adjusting by drag and drop.
         * 
         * Defines the size of the slider's selection intervals. (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
         * 
         * The step must be positive, if a negative number is provided, the default value will be used instead. If the width of the slider converted to pixels is less than the range (max - min), the value will be rounded to multiples of the step size.
         * 
         * Default value is `1`.
        */
        public getStep(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Define the value.
         * 
         * If the value is lower/higher than the allowed minimum/maximum, the value of the properties `min`/`max` are used instead.
         * 
         * Default value is `0`.
        */
        public getValue(): number;

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
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can change the value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableTickmarks enableTickmarks}.
         * 
         * Enables tickmarks visualisation
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableTickmarks(bEnableTickmarks: boolean): this;

        /**
            * Sets a new value for property {@link #getInputsAsTooltips inputsAsTooltips}.
         * 
         * Indicates whether input fields should be used as tooltips for the handles. ** Note: ** Setting this option to `true` will only work if `showAdvancedTooltips` is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setInputsAsTooltips(bInputsAsTooltips: boolean): this;

        /**
            * Sets a new value for property {@link #getMax max}.
         * 
         * The maximum value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setMax(fMax: number): this;

        /**
            * Sets a new value for property {@link #getMin min}.
         * 
         * The minimum value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMin(fMin: number): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getProgress progress}.
         * 
         * Indicate whether a progress bar indicator is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setProgress(bProgress: boolean): this;

        /**
            * Sets the aggregated {@link #getScale scale}.
        */
        public setScale(oScale: sap.m.IScale): this;

        /**
            * Sets a new value for property {@link #getShowAdvancedTooltip showAdvancedTooltip}.
         * 
         * Indicate whether the handle's advanced tooltip is shown. ** Note: ** Setting this option to `true` will ignore the value set in `showHandleTooltips`. This will cause only the advanced tooltip to be shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowAdvancedTooltip(bShowAdvancedTooltip: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHandleTooltip showHandleTooltip}.
         * 
         * Indicate whether the handle tooltip is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHandleTooltip(bShowHandleTooltip: boolean): this;

        /**
            * Sets a new value for property {@link #getStep step}.
         * 
         * Define the amount of units to change the slider when adjusting by drag and drop.
         * 
         * Defines the size of the slider's selection intervals. (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
         * 
         * The step must be positive, if a negative number is provided, the default value will be used instead. If the width of the slider converted to pixels is less than the range (max - min), the value will be rounded to multiples of the step size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setStep(fStep: number): this;

        /**
            * Sets the property `value`.
         * 
         * Default value is `0`.
        */
        public setValue(fNewValue: number, mOptions: {}): this;

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
            * Decrements the value by multiplying the step the `step` with the given parameter.
        */
        public stepDown(iStep?: number): this;

        /**
            * Increments the value by multiplying the `step` with the given parameter.
        */
        public stepUp(iStep?: number): this;

    }
}