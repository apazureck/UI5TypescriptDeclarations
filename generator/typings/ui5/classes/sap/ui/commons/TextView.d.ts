declare module 'sap/ui/commons/TextView' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITextViewSettings extends IControlSettings {
        text?: string;
        textDirection?: sap.ui.core.TextDirection;
        enabled?: boolean;
        helpId?: string;
        accessibleRole?: sap.ui.core.AccessibleRole;
        design?: sap.ui.commons.TextViewDesign;
        wrapping?: boolean;
        semanticColor?: sap.ui.commons.TextViewColor;
        textAlign?: sap.ui.core.TextAlign;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class TextView extends Control {

        /**
            * Constructor for a new TextView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITextViewSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Binds property {@link #getText text} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindText(oBindingInfo: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.TextView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

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
            * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         * 
         * The ARIA role for the control.
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
         * Defines the visual appearance of the control.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.ui.commons.TextViewDesign;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Switches the enabled state of the control. When the control is disabled, it is greyed out and no longer focusable.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help services.
         * 
         * Default value is ``.
        */
        public getHelpId(): string;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

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
            * Returns a metadata object for class sap.ui.commons.TextView.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Gets current value of property {@link #getSemanticColor semanticColor}.
         * 
         * Semantic color of the text View
         * 
         * Default value is `Default`.
        */
        public getSemanticColor(): sap.ui.commons.TextViewColor;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Text to be displayed.
         * 
         * Default value is ``.
        */
        public getText(): string;

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
         * Determines the text directionality. Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the TextView
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Disabled automatic wrapping of the text.
         * 
         * Default value is `true`.
        */
        public getWrapping(): boolean;

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
         * The ARIA role for the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAccessibleRole(sAccessibleRole: sap.ui.core.AccessibleRole): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Defines the visual appearance of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.ui.commons.TextViewDesign): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Switches the enabled state of the control. When the control is disabled, it is greyed out and no longer focusable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help services.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHelpId(sHelpId: string): this;

        /**
            * Sets a new value for property {@link #getSemanticColor semanticColor}.
         * 
         * Semantic color of the text View
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setSemanticColor(sSemanticColor: sap.ui.commons.TextViewColor): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Text to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

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
         * Determines the text directionality. Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the TextView
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Disabled automatic wrapping of the text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setWrapping(bWrapping: boolean): this;

        /**
            * Unbinds property {@link #getText text} from model data.
        */
        public unbindText(): this;

    }
}