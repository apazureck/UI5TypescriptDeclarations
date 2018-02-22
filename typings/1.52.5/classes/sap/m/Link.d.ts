declare module 'sap/m/Link' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ILinkSettings extends IControlSettings {
        text?: string;
        enabled?: boolean;
        target?: string;
        width?: sap.ui.core.CSSSize;
        href?: sap.ui.core.URI;
        wrapping?: boolean;
        textAlign?: sap.ui.core.TextAlign;
        textDirection?: sap.ui.core.TextDirection;
        subtle?: boolean;
        emphasized?: boolean;
    }

    /**
    
    */
    export class Link extends Control {

        /**
            * Constructor for a new `Link`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ILinkSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Link`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Link` itself.
         * 
         * Event is fired when the user triggers the link control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Link`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Link` itself.
         * 
         * Event is fired when the user triggers the link control.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.Link`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Link with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected firePress(mParameters?: {}): boolean;

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
            * Gets current value of property {@link #getEmphasized emphasized}.
         * 
         * Emphasized links look visually more important than regular links.
         * 
         * Default value is `false`.
        */
        public getEmphasized(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Determines whether the link can be triggered by the user.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHref href}.
         * 
         * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered, this should not be set, but instead an event handler for the `press` event should be registered.
        */
        public getHref(): sap.ui.core.URI;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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
            * Returns a metadata object for class sap.m.Link.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getSubtle subtle}.
         * 
         * Subtle links look more like standard text than like links. They should only be used to help with visual hierarchy between large data lists of important and less important links. Subtle links should not be used in any other use case.
         * 
         * Default value is `false`.
        */
        public getSubtle(): boolean;

        /**
            * Gets current value of property {@link #getTarget target}.
         * 
         * Specifies a target where the linked content will open.
         * 
         * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property is set.
        */
        public getTarget(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the displayed link text.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Determines the horizontal alignment of the text.
         * 
         * Default value is `Initial`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the parent DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the link (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Determines whether the link text is allowed to wrap when there is no sufficient space.
         * 
         * Default value is `false`.
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
            * Sets a new value for property {@link #getEmphasized emphasized}.
         * 
         * Emphasized links look visually more important than regular links.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEmphasized(bEmphasized: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Determines whether the link can be triggered by the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHref href}.
         * 
         * Defines the link target URI. Supports standard hyperlink behavior. If a JavaScript action should be triggered, this should not be set, but instead an event handler for the `press` event should be registered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHref(sHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getSubtle subtle}.
         * 
         * Subtle links look more like standard text than like links. They should only be used to help with visual hierarchy between large data lists of important and less important links. Subtle links should not be used in any other use case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSubtle(bSubtle: boolean): this;

        /**
            * Sets a new value for property {@link #getTarget target}.
         * 
         * Specifies a target where the linked content will open.
         * 
         * Options are the standard values for window.open() supported by browsers: `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered. This property is only used when the `href` property is set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTarget(sTarget: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the displayed link text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Determines the horizontal alignment of the text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Initial`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the parent DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the link (CSS-size such as % or px). When it is set, this is the exact size. When left blank, the text defines the size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Determines whether the link text is allowed to wrap when there is no sufficient space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWrapping(bWrapping: boolean): this;

    }
}