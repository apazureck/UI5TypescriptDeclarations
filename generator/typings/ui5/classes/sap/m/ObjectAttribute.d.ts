declare module 'sap/m/ObjectAttribute' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectAttributeSettings extends IControlSettings {
        title?: string;
        text?: string;
        active?: boolean;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class ObjectAttribute extends Control {

        /**
            * Constructor for a new `ObjectAttribute`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectAttributeSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ObjectAttribute`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectAttribute` itself.
         * 
         * Fires when the user clicks on active text.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the ObjectAttribute's text to be used for positioning. */
            domRef: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ObjectAttribute`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectAttribute` itself.
         * 
         * Fires when the user clicks on active text.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the ObjectAttribute's text to be used for positioning. */
            domRef: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the customContent in the aggregation {@link #getCustomContent customContent}.
        */
        public destroyCustomContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.ObjectAttribute`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ObjectAttribute with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { domRef?: string, }): this;

        /**
            * Gets current value of property {@link #getActive active}.
         * 
         * Indicates if the `ObjectAttribute` text is selectable for the user.
         * 
         * ** Note: ** As of version 1.48, only the value of the `text` property becomes active (styled and acts like a link) as opposed to both the `title` and `text` in the previous versions. If you set this property to `true`, you have to also set the `text` property.
        */
        public getActive(): boolean;

        /**
            * Gets content of aggregation {@link #getCustomContent customContent}.
         * 
         * When the aggregation is set, it replaces the text, active and textDirection properties. This also ignores the press event. The provided control is displayed as an active link. ** Note: ** It will only allow sap.m.Text and sap.m.Link controls.
        */
        public getCustomContent(): Control;

        /**
            * Returns a metadata object for class sap.m.ObjectAttribute.
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
            * Defines to which DOM reference the Popup should be docked.
        */
        protected getPopupAnchorDomRef(): any;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the ObjectAttribute text.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Determines the direction of the text, not including the title. Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the ObjectAttribute title.
        */
        public getTitle(): string;

        /**
            * Sets a new value for property {@link #getActive active}.
         * 
         * Indicates if the `ObjectAttribute` text is selectable for the user.
         * 
         * ** Note: ** As of version 1.48, only the value of the `text` property becomes active (styled and acts like a link) as opposed to both the `title` and `text` in the previous versions. If you set this property to `true`, you have to also set the `text` property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActive(bActive: boolean): this;

        /**
            * Sets the aggregated {@link #getCustomContent customContent}.
        */
        public setCustomContent(oCustomContent: Control): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the ObjectAttribute text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Determines the direction of the text, not including the title. Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the ObjectAttribute title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}