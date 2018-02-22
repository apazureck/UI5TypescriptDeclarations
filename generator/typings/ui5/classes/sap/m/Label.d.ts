declare module 'sap/m/Label' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ILabelSettings extends IControlSettings {
        design?: sap.m.LabelDesign;
        text?: string;
        textAlign?: sap.ui.core.TextAlign;
        textDirection?: sap.ui.core.TextDirection;
        width?: sap.ui.core.CSSSize;
        required?: boolean;
        displayOnly?: boolean;
        wrapping?: boolean;
    }

    /**
    
    */
    export class Label extends Control {

        /**
            * Constructor for a new Label.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ILabelSettings);


        /**
            * Creates a new subclass of class sap.m.Label with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
            * Gets current value of property {@link #getDesign design}.
         * 
         * Sets the design of a Label to either Standard or Bold.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.m.LabelDesign;

        /**
            * Gets current value of property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines if the label is in displayOnly mode. Controls in this mode are neither interactive, nor editable, nor focusable, and not in the tab chain.
         * 
         * ** Note: ** This property should be used only in Form controls in preview mode.
         * 
         * Default value is `false`.
        */
        public getDisplayOnly(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getLabelFor labelFor}, or `null`.
        */
        public getLabelFor(): sap.ui.core.ID;

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
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.m.Label.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getRequired required}.
         * 
         * Indicates that user input is required for input control labeled by the sap.m.Label. When the property is set to true and associated input field is empty an asterisk character is added to the label text.
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the Label text to be displayed.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
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
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the label.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Determines the wrapping of the text within the `Label`. If set to true the `Label` will wrap, when set to false the `Label` will be truncated and replaced with ellipsis which is the default behavior.
         * 
         * Default value is `false`.
        */
        public getWrapping(): boolean;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Sets the design of a Label to either Standard or Bold.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.m.LabelDesign): this;

        /**
            * Sets a new value for property {@link #getDisplayOnly displayOnly}.
         * 
         * Determines if the label is in displayOnly mode. Controls in this mode are neither interactive, nor editable, nor focusable, and not in the tab chain.
         * 
         * ** Note: ** This property should be used only in Form controls in preview mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayOnly(bDisplayOnly: boolean): this;

        /**
            * Sets the associated {@link #getLabelFor labelFor}.
        */
        public setLabelFor(oLabelFor: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Indicates that user input is required for input control labeled by the sap.m.Label. When the property is set to true and associated input field is empty an asterisk character is added to the label text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Determines the Label text to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
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
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Determines the wrapping of the text within the `Label`. If set to true the `Label` will wrap, when set to false the `Label` will be truncated and replaced with ellipsis which is the default behavior.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWrapping(bWrapping: boolean): this;

    }
}