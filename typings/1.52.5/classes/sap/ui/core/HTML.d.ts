declare module 'sap/ui/core/HTML' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IHTMLSettings extends IControlSettings {
        content?: string;
        preferDOM?: boolean;
        sanitizeContent?: boolean;
        visible?: boolean;
    }

    /**
    
    */
    export class HTML extends Control {

        /**
            * Constructor for a new HTML.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHTMLSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.HTML`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.HTML` itself.
         * 
         * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
         * 
         * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
        */
        attachAfterRendering<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control). */
            isPreservedDOM: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.HTML`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.HTML` itself.
         * 
         * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
         * 
         * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
        */
        attachAfterRendering<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control). */
            isPreservedDOM: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.HTML`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterRendering(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.HTML with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterRendering afterRendering} to attached listeners.
        */
        protected fireAfterRendering(mParameters?: { isPreservedDOM?: boolean, }): this;

        /**
            * Gets current value of property {@link #getContent content}.
         * 
         * HTML content to be displayed, defined as a string.
         * 
         * The content is converted to DOM nodes with a call to `new jQuery(content)`, so any restrictions for the jQuery constructor apply to the content of the HTML control as well.
         * 
         * Some of these restrictions (there might be others!) are:  * the content must be enclosed in tags, pure text is not supported. * if the content contains script tags, they will be executed but they will not appear in the resulting DOM tree. When the contained code tries to find the corresponding script tag, it will fail. 
         * 
         * Please consider to consult the jQuery documentation as well.
         * 
         * The HTML control currently doesn't prevent the usage of multiple root nodes in its DOM content (e.g. `setContent("&lt;div/>&lt;div/>")`), but this is not a guaranteed feature. The accepted content might be restricted to single root nodes in future versions. To notify applications about this fact, a warning is written in the log when multiple root nodes are used.
         * 
         * When changing the content dynamically, ensure that the ID of the root node remains the same as the HTML control's ID. Otherwise it cannot be guaranteed that certain lifecycle events take place.
        */
        public getContent(): string;

        /**
            
        */
        protected getDomRef(sSuffix?: string): any;

        /**
            * Returns the best suitable DOM Element that represents this UI5 Element. By default the DOM Element with the same ID as this Element is returned. Subclasses should override this method if the lookup via id is not sufficient.
         * 
         * Note that such a DOM Element does not necessarily exist in all cases. Some elements or controls might not have a DOM representation at all (e.g. a naive FlowLayout) while others might not have one due to their current state (e.g. an initial, not yet rendered control).
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be returned. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected getDomRef(sSuffix?: string): any;

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
            * Returns a metadata object for class sap.ui.core.HTML.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getPreferDOM preferDOM}.
         * 
         * Whether existing DOM content is preferred over the given content string.
         * 
         * There are two scenarios where this flag is relevant (when set to true):  * for the initial rendering: when an HTML control is added to a UIArea for the first time and if the root node of that UIArea contained DOM content with the same id as the HTML control, then that content will be used for rendering instead of any specified string content * any follow-up rendering: when an HTML control is rendered for the second or any later time and the preferDOM flag is set, then the DOM from the first rendering is preserved and not replaced by the string content 
         * 
         * As preserving the existing DOM is the most common use case of the HTML control, the default value is true.
         * 
         * Default value is `true`.
        */
        public getPreferDOM(): boolean;

        /**
            * Gets current value of property {@link #getSanitizeContent sanitizeContent}.
         * 
         * Whether to run the HTML sanitizer once the content (HTML markup) is applied or not.
         * 
         * To configure allowed URLs please use the whitelist API via jQuery.sap.addUrlWhitelist.
         * 
         * Default value is `false`.
        */
        public getSanitizeContent(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether the control is visible. Invisible controls are not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getContent content}.
         * 
         * HTML content to be displayed, defined as a string.
         * 
         * The content is converted to DOM nodes with a call to `new jQuery(content)`, so any restrictions for the jQuery constructor apply to the content of the HTML control as well.
         * 
         * Some of these restrictions (there might be others!) are:  * the content must be enclosed in tags, pure text is not supported. * if the content contains script tags, they will be executed but they will not appear in the resulting DOM tree. When the contained code tries to find the corresponding script tag, it will fail. 
         * 
         * Please consider to consult the jQuery documentation as well.
         * 
         * The HTML control currently doesn't prevent the usage of multiple root nodes in its DOM content (e.g. `setContent("&lt;div/>&lt;div/>")`), but this is not a guaranteed feature. The accepted content might be restricted to single root nodes in future versions. To notify applications about this fact, a warning is written in the log when multiple root nodes are used.
         * 
         * When changing the content dynamically, ensure that the ID of the root node remains the same as the HTML control's ID. Otherwise it cannot be guaranteed that certain lifecycle events take place.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContent(sContent: string): this;

        /**
            * Sets some new DOM content for this HTML control. The content will replace the existing content after the next rendering. Properties are not modified, but preferDOM should be set to true.
        */
        public setDOMContent(oDom: any): this;

        /**
            * Sets a new value for property {@link #getPreferDOM preferDOM}.
         * 
         * Whether existing DOM content is preferred over the given content string.
         * 
         * There are two scenarios where this flag is relevant (when set to true):  * for the initial rendering: when an HTML control is added to a UIArea for the first time and if the root node of that UIArea contained DOM content with the same id as the HTML control, then that content will be used for rendering instead of any specified string content * any follow-up rendering: when an HTML control is rendered for the second or any later time and the preferDOM flag is set, then the DOM from the first rendering is preserved and not replaced by the string content 
         * 
         * As preserving the existing DOM is the most common use case of the HTML control, the default value is true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setPreferDOM(bPreferDOM: boolean): this;

        /**
            * Sets a new value for property {@link #getSanitizeContent sanitizeContent}.
         * 
         * Whether to run the HTML sanitizer once the content (HTML markup) is applied or not.
         * 
         * To configure allowed URLs please use the whitelist API via jQuery.sap.addUrlWhitelist.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSanitizeContent(bSanitizeContent: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies whether the control is visible. Invisible controls are not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}