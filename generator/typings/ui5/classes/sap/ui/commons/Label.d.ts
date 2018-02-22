declare module 'sap/ui/commons/Label' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ILabelSettings extends IControlSettings {
        design?: sap.ui.commons.LabelDesign;
        textDirection?: sap.ui.core.TextDirection;
        wrapping?: boolean;
        width?: sap.ui.core.CSSSize;
        text?: string;
        icon?: sap.ui.core.URI;
        textAlign?: sap.ui.core.TextAlign;
        required?: boolean;
        requiredAtBegin?: boolean;
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
            * Creates a new subclass of class sap.ui.commons.Label with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
         * Defines whether the labels are in bold format.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.ui.commons.LabelDesign;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Determines the icon to be displayed in the control. This can be a URI to an image or an icon font URI.
        */
        public getIcon(): sap.ui.core.URI;

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
            * Returns a metadata object for class sap.ui.commons.Label.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getRequired required}.
         * 
         * Allows to enforce the required indicator even when the associated control doesn't have a getRequired method (a required property) or when the flag is not set. If the associated control has a required property, the values of both required flags are combined with the OR operator, so a Label can't override a required=true value.
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getRequiredAtBegin requiredAtBegin}.
         * 
         * Determines whether the required indicator is at the beginning of the label (if set) or at the end (if not set).
        */
        public getRequiredAtBegin(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the text to be displayed.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Determines the alignment of the text. Available options are `Begin`, `Center`, `End`, `Left`, and `Right`.
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Determines the text direction - right-to-left (RTL) and left-to-right (LTR).
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the control width as common CSS-size (for example, px or % as unit).
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Specifies whether a line wrapping width shall be displayed when the text value is longer than the width is.
         * 
         * Default value is `false`.
        */
        public getWrapping(): boolean;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Defines whether the labels are in bold format.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.ui.commons.LabelDesign): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Determines the icon to be displayed in the control. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the associated {@link #getLabelFor labelFor}.
        */
        public setLabelFor(oLabelFor: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Allows to enforce the required indicator even when the associated control doesn't have a getRequired method (a required property) or when the flag is not set. If the associated control has a required property, the values of both required flags are combined with the OR operator, so a Label can't override a required=true value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getRequiredAtBegin requiredAtBegin}.
         * 
         * Determines whether the required indicator is at the beginning of the label (if set) or at the end (if not set).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRequiredAtBegin(bRequiredAtBegin: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Determines the text to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Determines the alignment of the text. Available options are `Begin`, `Center`, `End`, `Left`, and `Right`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Determines the text direction - right-to-left (RTL) and left-to-right (LTR).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the control width as common CSS-size (for example, px or % as unit).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Specifies whether a line wrapping width shall be displayed when the text value is longer than the width is.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWrapping(bWrapping: boolean): this;

    }
}