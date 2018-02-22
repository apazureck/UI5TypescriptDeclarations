declare module 'sap/ui/core/tmpl/TemplateControl' {
    import { Event } from 'sap/ui/base/Event';
    import { View } from 'sap/ui/core/mvc/View';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Template } from 'sap/ui/core/tmpl/Template';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITemplateControlSettings extends IControlSettings {
        context?: {};
    }

    /**
    
    */
    export class TemplateControl extends Control {

        /**
            * Constructor for a new tmpl/TemplateControl.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITemplateControlSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.tmpl.TemplateControl` itself.
         * 
         * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM.
        */
        attachAfterRendering<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.tmpl.TemplateControl` itself.
         * 
         * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM.
        */
        attachAfterRendering<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.tmpl.TemplateControl` itself.
         * 
         * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc.
        */
        attachBeforeRendering<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.tmpl.TemplateControl` itself.
         * 
         * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc.
        */
        attachBeforeRendering<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Creates a pseudo binding for an aggregation to get notified once the property changes to invalidate the control and trigger a re-rendering.
        */
        protected bindList(sPath: string): any;

        /**
            * Creates a pseudo binding for a property to get notified once the property changes to invalidate the control and trigger a re-rendering.
        */
        protected bindProp(sPath: string): any;

        /**
            * compiles (creates and registers) a new control
        */
        protected createControl(mSettings: {}, sParentPath: string, oView: View): Control;

        /**
            * compiles (creates and registers) a new control
        */
        protected createControl(mSettings: {}, bDoNotAdd: boolean, oView: View): Control;

        /**
            * compiles (creates and registers) a new control
        */
        protected createControl(mSettings: {}, sParentPath: string, bDoNotAdd: boolean, oView: View): Control;

        /**
            * compiles (creates and registers) a new DOM element
        */
        protected createDOMElement(mSettings: {}, sParentPath?: string, bDoNotAdd?: boolean): Control;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterRendering afterRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterRendering(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeRendering beforeRendering} event of this `sap.ui.core.tmpl.TemplateControl`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeRendering(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.tmpl.TemplateControl with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterRendering afterRendering} to attached listeners.
        */
        protected fireAfterRendering(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeRendering beforeRendering} to attached listeners.
        */
        protected fireBeforeRendering(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getContext context}.
         * 
         * The context is a data object. It can be used for default template expressions. A change of the context object leads to a re-rendering whereas a change of a nested property of the context object doesn't. By default the context is an empty object.
        */
        public getContext(): {};

        /**
            * Returns a metadata object for class sap.ui.core.tmpl.TemplateControl.
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
            * ID of the element which is the current target of the association {@link #getTemplate template}, or `null`.
        */
        public getTemplate(): sap.ui.core.ID;

        /**
            * Returns the instance specific renderer for an anonymous template control.
        */
        protected getTemplateRenderer(): (() => any);

        /**
            * checks whether the control is inline or not
        */
        protected isInline(): boolean;

        /**
            * Sets a new value for property {@link #getContext context}.
         * 
         * The context is a data object. It can be used for default template expressions. A change of the context object leads to a re-rendering whereas a change of a nested property of the context object doesn't. By default the context is an empty object.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContext(oContext: {}): this;

        /**
            * Sets the associated {@link #getTemplate template}.
        */
        public setTemplate(oTemplate: sap.ui.core.ID | Template): this;

        /**
            * Sets the instance specific renderer for an anonymous template control.
        */
        protected setTemplateRenderer(fnRenderer: (() => any)): Template;

    }
}