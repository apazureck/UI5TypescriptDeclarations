declare module 'sap/m/FormattedText' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFormattedTextSettings extends IControlSettings {
        htmlText?: string;
        width?: sap.ui.core.CSSSize;
        convertLinksToAnchorTags?: sap.m.LinkConversion;
        convertedLinksDefaultTarget?: string;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class FormattedText extends Control {

        /**
            * Constructor for a new FormattedText.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFormattedTextSettings);


        /**
            * Creates a new subclass of class sap.m.FormattedText with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getConvertedLinksDefaultTarget convertedLinksDefaultTarget}.
         * 
         * Determines the `target` attribute of the generated HTML anchor tags.
         * 
         * ** Note: ** Applicable only if `ConvertLinksToAnchorTags` property is used with a value other than `sap.m.LinkConversion.None`. Options are the standard values for the `target` attribute of the HTML anchor tag: `_self`, `_top`, `_blank`, `_parent`, `_search`.
         * 
         * Default value is `_blank`.
        */
        public getConvertedLinksDefaultTarget(): string;

        /**
            * Gets current value of property {@link #getConvertLinksToAnchorTags convertLinksToAnchorTags}.
         * 
         * Determines whether strings that appear to be links will be converted to HTML anchor tags, and what are the criteria for recognizing them.
         * 
         * Default value is `None`.
        */
        public getConvertLinksToAnchorTags(): sap.m.LinkConversion;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Optional height of the control in CSS units.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHtmlText htmlText}.
         * 
         * Text in HTML format. The following tags are supported:  * `a` * `abbr` * `blockquote` * `br` * `cite` * `code` * `em` * `h1` * `h2` * `h3` * `h4` * `h5` * `h6` * `p` * `pre` * `strong` * `span` * `u` * `dl` * `dt` * `dl` * `ul` * `ol` * `li`  <p>`class, style,` and `target` attributes are allowed. If `target` is not set, links open in a new window by default. <p>Only safe `href` attributes can be used. See {@link jQuery.sap.validateUrl}.
         * 
         * ** Note: ** Keep in mind that not supported HTML tags and the content nested inside them are both not rendered by the control.
         * 
         * Default value is ``.
        */
        public getHtmlText(): string;

        /**
            * Returns a metadata object for class sap.m.FormattedText.
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
            * Gets current value of property {@link #getWidth width}.
         * 
         * Optional width of the control in CSS units.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getConvertedLinksDefaultTarget convertedLinksDefaultTarget}.
         * 
         * Determines the `target` attribute of the generated HTML anchor tags.
         * 
         * ** Note: ** Applicable only if `ConvertLinksToAnchorTags` property is used with a value other than `sap.m.LinkConversion.None`. Options are the standard values for the `target` attribute of the HTML anchor tag: `_self`, `_top`, `_blank`, `_parent`, `_search`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `_blank`.
        */
        public setConvertedLinksDefaultTarget(sConvertedLinksDefaultTarget: string): this;

        /**
            * Sets a new value for property {@link #getConvertLinksToAnchorTags convertLinksToAnchorTags}.
         * 
         * Determines whether strings that appear to be links will be converted to HTML anchor tags, and what are the criteria for recognizing them.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setConvertLinksToAnchorTags(sConvertLinksToAnchorTags: sap.m.LinkConversion): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Optional height of the control in CSS units.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Defines the HTML text to be displayed.
        */
        public setHtmlText(sText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Optional width of the control in CSS units.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}