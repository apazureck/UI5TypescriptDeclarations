declare module 'sap/m/Text' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITextSettings extends IControlSettings {
        text?: string;
        textDirection?: sap.ui.core.TextDirection;
        wrapping?: boolean;
        textAlign?: sap.ui.core.TextAlign;
        width?: sap.ui.core.CSSSize;
        maxLines?: number;
        renderWhitespace?: boolean;
    }

    /**
    
    */
    export class Text extends Control {

        /**
            * Constructor for a new Text.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITextSettings);


        /**
            * Binds property {@link #getText text} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindText(oBindingInfo: {}): this;

        /**
            * Decides whether the control can use native line clamp feature or not.
         * 
         * In RTL mode native line clamp feature is not supported.
        */
        protected canUseNativeLineClamp(): boolean;

        /**
            * Sets the max height to support `maxLines` property.
        */
        protected clampHeight(oDomRef?: any): number;

        /**
            * Clamps the wrapping text according to max lines and returns the found ellipsis position. Parameters can be used for better performance.
        */
        protected clampText(oDomRef?: any, iStartPos?: number, iEndPos?: number): number | any;

        /**
            * Creates a new subclass of class sap.m.Text with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets the accessibility information for the text.
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns the max height according to max lines and line height calculation. This is not calculated max height!
        */
        protected getClampHeight(oDomRef?: any): number;

        /**
            * Caches and returns the computed line height of the text.
        */
        protected getLineHeight(oDomRef?: any): number;

        /**
            * Gets current value of property {@link #getMaxLines maxLines}.
         * 
         * Limits the number of lines for wrapping texts.
         * 
         * ** Note **: The multi-line overflow indicator depends on the browser line clamping support. For such browsers, this will be shown as ellipsis, for the other browsers the overflow will just be hidden.
        */
        public getMaxLines(): number;

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
            * Returns a metadata object for class sap.m.Text.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getRenderWhitespace renderWhitespace}.
         * 
         * Specifies how whitespace and tabs inside the control are handled. If true, whitespace will be preserved by the browser. Depending on wrapping property text will either only wrap on line breaks or wrap when necessary, and on line breaks.
         * 
         * ** Note: ** Special characters that can be used are : \t , \n and " " respectively Tab, New line and Space.
         * 
         * Default value is `false`.
        */
        public getRenderWhitespace(): boolean;

        /**
            * Gets the text.
        */
        public getText(bNormalize: boolean): string;

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
         * Sets the horizontal alignment of the text.
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Returns the text node container's DOM reference. This can be different from `getDomRef` when inner wrapper is needed.
        */
        protected getTextDomRef(): any | any;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Sets the width of the Text control. By default, the Text control uses the full width available. Set this property to restrict the width to a custom value.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Enables text wrapping.
         * 
         * Default value is `true`.
        */
        public getWrapping(): boolean;

        /**
            * Determines whether max lines should be rendered or not.
        */
        protected hasMaxLines(): any | any;

        /**
            * Function is called when the rendering of the control is completed.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Overwrites onAfterRendering
        */
        protected onAfterRendering(): any;

        /**
            * Sets a new value for property {@link #getMaxLines maxLines}.
         * 
         * Limits the number of lines for wrapping texts.
         * 
         * ** Note **: The multi-line overflow indicator depends on the browser line clamping support. For such browsers, this will be shown as ellipsis, for the other browsers the overflow will just be hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxLines(iMaxLines: number): this;

        /**
            * To prevent from the layout thrashing of the `textContent` call, this method first tries to set the `nodeValue` of the first child if it exists.
        */
        protected setNodeValue(oDomRef: any, sNodeValue?: string): any;

        /**
            * Sets a new value for property {@link #getRenderWhitespace renderWhitespace}.
         * 
         * Specifies how whitespace and tabs inside the control are handled. If true, whitespace will be preserved by the browser. Depending on wrapping property text will either only wrap on line breaks or wrap when necessary, and on line breaks.
         * 
         * ** Note: ** Special characters that can be used are : \t , \n and " " respectively Tab, New line and Space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRenderWhitespace(bRenderWhitespace: boolean): this;

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
            * Sets the text.
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
         * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Sets the width of the Text control. By default, the Text control uses the full width available. Set this property to restrict the width to a custom value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Enables text wrapping.
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