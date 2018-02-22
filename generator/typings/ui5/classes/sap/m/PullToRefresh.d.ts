declare module 'sap/m/PullToRefresh' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPullToRefreshSettings extends IControlSettings {
        description?: string;
        showIcon?: boolean;
        customIcon?: sap.ui.core.URI;
        iconDensityAware?: boolean;
    }

    /**
    
    */
    export class PullToRefresh extends Control {

        /**
            * Constructor for a new PullToRefresh.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPullToRefreshSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:refresh refresh} event of this `sap.m.PullToRefresh`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PullToRefresh` itself.
         * 
         * Event indicates that the user has requested new data
        */
        attachRefresh<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:refresh refresh} event of this `sap.m.PullToRefresh`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PullToRefresh` itself.
         * 
         * Event indicates that the user has requested new data
        */
        attachRefresh<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:refresh refresh} event of this `sap.m.PullToRefresh`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRefresh(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.PullToRefresh with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:refresh refresh} to attached listeners.
        */
        protected fireRefresh(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getCustomIcon customIcon}.
         * 
         * Provide a URI to a custom icon image to replace the SAP logo. Large images are scaled down to max 50px height.
        */
        public getCustomIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Optional description. May be used to inform a user, for example, when the list has been updated last time.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Returns a metadata object for class sap.m.PullToRefresh.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getShowIcon showIcon}.
         * 
         * Set to true to display an icon/logo. Icon must be set either in the customIcon property or in the CSS theme for the PullToRefresh control.
         * 
         * Default value is `false`.
        */
        public getShowIcon(): boolean;

        /**
            * Hides the control and resets it to the normal state. In non-touch environments the control is not hidden.
        */
        public hide(): any;

        /**
            * Sets a new value for property {@link #getCustomIcon customIcon}.
         * 
         * Provide a URI to a custom icon image to replace the SAP logo. Large images are scaled down to max 50px height.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCustomIcon(sCustomIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Optional description. May be used to inform a user, for example, when the list has been updated last time.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getShowIcon showIcon}.
         * 
         * Set to true to display an icon/logo. Icon must be set either in the customIcon property or in the CSS theme for the PullToRefresh control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowIcon(bShowIcon: boolean): this;

    }
}