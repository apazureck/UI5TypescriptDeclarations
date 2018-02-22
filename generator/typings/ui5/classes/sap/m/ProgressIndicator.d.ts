declare module 'sap/m/ProgressIndicator' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IProgressIndicatorSettings extends IControlSettings {
        enabled?: boolean;
        state?: sap.ui.core.ValueState;
        displayValue?: string;
        percentValue?: number;
        showValue?: boolean;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        textDirection?: sap.ui.core.TextDirection;
        displayOnly?: boolean;
    }

    /**
    
    */
    export class ProgressIndicator extends Control {

        /**
            * Constructor for a new ProgressIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IProgressIndicatorSettings);


        /**
            * Creates a new subclass of class sap.m.ProgressIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

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
            
        */
        protected getAccessibilityInfo(): any | {};

        /**
            * Gets current value of property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines whether the control is in display-only state where the control has different visualization and cannot be focused.
         * 
         * Default value is `false`.
        */
        public getDisplayOnly(): boolean;

        /**
            * Gets current value of property {@link #getDisplayValue displayValue}.
         * 
         * Specifies the text value to be displayed in the bar.
        */
        public getDisplayValue(): string;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Specifies the height of the control. The default value depends on the theme. Suggested size for normal use is 2.5rem (40px). Suggested size for small size (like for use in ObjectHeader) is 1.375rem (22px).
        */
        public getHeight(): sap.ui.core.CSSSize;

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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.ProgressIndicator.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Gets current value of property {@link #getPercentValue percentValue}.
         * 
         * Specifies the numerical value in percent for the length of the progress bar.
         * 
         * Default value is `0`.
        */
        public getPercentValue(): number;

        /**
            * Gets current value of property {@link #getShowValue showValue}.
         * 
         * Indicates whether the displayValue should be shown in the ProgressIndicator.
         * 
         * Default value is `true`.
        */
        public getShowValue(): boolean;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * Specifies the state of the bar. Enumeration sap.ui.core.ValueState provides Error (red), Warning (yellow), Success (green), None (blue) (default value).
         * 
         * Default value is `None`.
        */
        public getState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options (RTL or LTR). By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the control.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines whether the control is in display-only state where the control has different visualization and cannot be focused.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayOnly(bDisplayOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getDisplayValue displayValue}.
         * 
         * Specifies the text value to be displayed in the bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDisplayValue(sDisplayValue: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Switches enabled state of the control. Disabled fields have different colors, and cannot be focused.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Specifies the height of the control. The default value depends on the theme. Suggested size for normal use is 2.5rem (40px). Suggested size for small size (like for use in ObjectHeader) is 1.375rem (22px).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getPercentValue percentValue}.
         * 
         * Specifies the numerical value in percent for the length of the progress bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setPercentValue(fPercentValue: number): this;

        /**
            * Sets a new value for property {@link #getShowValue showValue}.
         * 
         * Indicates whether the displayValue should be shown in the ProgressIndicator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowValue(bShowValue: boolean): this;

        /**
            * Sets a new value for property {@link #getState state}.
         * 
         * Specifies the state of the bar. Enumeration sap.ui.core.ValueState provides Error (red), Warning (yellow), Success (green), None (blue) (default value).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setState(sState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options (RTL or LTR). By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}