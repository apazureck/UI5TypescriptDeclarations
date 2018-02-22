declare module 'sap/ui/commons/RatingIndicator' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IRatingIndicatorSettings extends IControlSettings {
        editable?: boolean;
        maxValue?: number;
        value?: number;
        averageValue?: number;
        iconSelected?: sap.ui.core.URI;
        iconUnselected?: sap.ui.core.URI;
        iconHovered?: sap.ui.core.URI;
        visualMode?: sap.ui.commons.RatingIndicatorVisualMode;
    }

    /**
    
    */
    export class RatingIndicator extends Control {

        /**
            * Constructor for a new RatingIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRatingIndicatorSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RatingIndicator` itself.
         * 
         * The event is fired when the user has done a rating.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the user rating */
            value: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RatingIndicator` itself.
         * 
         * The event is fired when the user has done a rating.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the user rating */
            value: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.RatingIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: number, }): this;

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
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getAverageValue averageValue}.
         * 
         * Determines the average value. This value is shown if no value is set. This can be used to display an average Value before the user votes.
         * 
         * Default value is `0`.
        */
        public getAverageValue(): number;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Determines if the rating symbols can be edited.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getIconHovered iconHovered}.
         * 
         * The URI to the image which is displayed when the mouse hovers onto a rating symbol. If used, a requirement is that all custom icons need to have the same size. Note that when this attribute is used also the other icon attributes need to be set.
        */
        public getIconHovered(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconSelected iconSelected}.
         * 
         * The URI to the image which shall be displayed for all selected rating symbols. Note that when this attribute is used, also the other icon attributes need to be set.
        */
        public getIconSelected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconUnselected iconUnselected}.
         * 
         * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is used, a requirement is that all custom icons need to have the same size. Note that when this attribute is used also the other icon attributes need to be set.
        */
        public getIconUnselected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getMaxValue maxValue}.
         * 
         * Determines the number of displayed rating symbols
         * 
         * Default value is `5`.
        */
        public getMaxValue(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.RatingIndicator.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getValue value}.
         * 
         * Determines the currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the averageValue is shown.
         * 
         * Default value is `0`.
        */
        public getValue(): number;

        /**
            * Gets current value of property {@link #getVisualMode visualMode}.
         * 
         * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
         * 
         * Default value is `Half`.
        */
        public getVisualMode(): sap.ui.commons.RatingIndicatorVisualMode;

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
            * Sets a new value for property {@link #getAverageValue averageValue}.
         * 
         * Determines the average value. This value is shown if no value is set. This can be used to display an average Value before the user votes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setAverageValue(fAverageValue: number): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Determines if the rating symbols can be edited.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getIconHovered iconHovered}.
         * 
         * The URI to the image which is displayed when the mouse hovers onto a rating symbol. If used, a requirement is that all custom icons need to have the same size. Note that when this attribute is used also the other icon attributes need to be set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconHovered(sIconHovered: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconSelected iconSelected}.
         * 
         * The URI to the image which shall be displayed for all selected rating symbols. Note that when this attribute is used, also the other icon attributes need to be set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconSelected(sIconSelected: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconUnselected iconUnselected}.
         * 
         * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is used, a requirement is that all custom icons need to have the same size. Note that when this attribute is used also the other icon attributes need to be set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconUnselected(sIconUnselected: sap.ui.core.URI): this;

        /**
            * Setter for property `maxValue`.
         * 
         * Default value is `5` Minimum value is `1`
        */
        public setMaxValue(iMaxValue: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Determines the currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the averageValue is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setValue(fValue: number): this;

        /**
            * Sets a new value for property {@link #getVisualMode visualMode}.
         * 
         * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Half`.
        */
        public setVisualMode(sVisualMode: sap.ui.commons.RatingIndicatorVisualMode): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

    }
}