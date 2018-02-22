declare module 'sap/ui/core/ComponentContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { UIComponent } from 'sap/ui/core/UIComponent';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IComponentContainerSettings extends IControlSettings {
        name?: string;
        url?: sap.ui.core.URI;
        async?: boolean;
        handleValidation?: boolean;
        settings?: {};
        propagateModel?: boolean;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        lifecycle?: sap.ui.core.ComponentLifecycle;
        autoPrefixId?: boolean;
        usage?: string;
    }

    /**
    
    */
    export class ComponentContainer extends Control {

        /**
            * Constructor for a new ComponentContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IComponentContainerSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:componentCreated componentCreated} event of this `sap.ui.core.ComponentContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.ComponentContainer` itself.
         * 
         * Fired when the component instance has been created by the ComponentContainer.
        */
        attachComponentCreated<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the created component instance */
            component: UIComponent,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:componentCreated componentCreated} event of this `sap.ui.core.ComponentContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.ComponentContainer` itself.
         * 
         * Fired when the component instance has been created by the ComponentContainer.
        */
        attachComponentCreated<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the created component instance */
            component: UIComponent,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:componentCreated componentCreated} event of this `sap.ui.core.ComponentContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachComponentCreated(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.ComponentContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:componentCreated componentCreated} to attached listeners.
        */
        protected fireComponentCreated(mParameters?: { component?: UIComponent, }): this;

        /**
            * Gets current value of property {@link #getAsync async}.
         * 
         * Flag whether the component should be created sync (default) or async. This property can only be applied initially.
         * 
         * Default value is `false`.
        */
        public getAsync(): boolean;

        /**
            * Gets current value of property {@link #getAutoPrefixId autoPrefixId}.
         * 
         * Flag, whether to autoprefix the id of the nested Component or not. If this property is set to true the ID of the Component will be prefixed with the ID of the ComponentContainer followed by a single dash. This property can only be applied initially.
         * 
         * Default value is `false`.
        */
        public getAutoPrefixId(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getComponent component}, or `null`.
        */
        public getComponent(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getHandleValidation handleValidation}.
         * 
         * Enable/disable validation handling by MessageManager for this component. The resulting Messages will be propagated to the controls. This property can only be applied initially.
         * 
         * Default value is `false`.
        */
        public getHandleValidation(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Container height in CSS size
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLifecycle lifecycle}.
         * 
         * Lifecycle behavior for the Component associated by the `ComponentContainer`. The default behavior is `Legacy`. This means that the `ComponentContainer` takes care that the Component is destroyed when the `ComponentContainer` is destroyed, but it is ** not ** destroyed when a new Component is associated. If you use the `usage` property to create the Component, the default behavior is `Container`. This means that the Component is destroyed when the `ComponentContainer` is destroyed or a new Component is associated. This property must only be applied before a component instance is created.
         * 
         * Default value is `Legacy`.
        */
        public getLifecycle(): sap.ui.core.ComponentLifecycle;

        /**
            * Returns a metadata object for class sap.ui.core.ComponentContainer.
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
            * Gets current value of property {@link #getName name}.
         * 
         * Component name, the package where the component is contained. This property can only be applied initially.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getPropagateModel propagateModel}.
         * 
         * Defines whether binding information is propagated to the component.
         * 
         * Default value is `false`.
        */
        public getPropagateModel(): boolean;

        /**
            * Gets current value of property {@link #getSettings settings}.
         * 
         * The settings object passed to the component when created. This property can only be applied initially.
        */
        public getSettings(): {};

        /**
            * Gets current value of property {@link #getUrl url}.
         * 
         * The URL of the component. This property can only be applied initially.
        */
        public getUrl(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUsage usage}.
         * 
         * The component usage. If the ComponentContainer is used inside a Component, this Component can define a usage which will be used for creating the Component. This property can only be applied initially.
        */
        public getUsage(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Container width in CSS size
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getAsync async}.
         * 
         * Flag whether the component should be created sync (default) or async. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAsync(bAsync: boolean): this;

        /**
            * Sets a new value for property {@link #getAutoPrefixId autoPrefixId}.
         * 
         * Flag, whether to autoprefix the id of the nested Component or not. If this property is set to true the ID of the Component will be prefixed with the ID of the ComponentContainer followed by a single dash. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoPrefixId(bAutoPrefixId: boolean): this;

        /**
            * Sets the component of the container. Depending on the ComponentContainer's lifecycle this might destroy the old associated Component.
         * 
         * Once the component is associated with the container the cross connection to the component will be set and the models will be propagated if defined. If the `usage` property is set the ComponentLifecycle is processed like a "Container" lifecycle.
        */
        public setComponent(vComponent: string | UIComponent): this;

        /**
            * Sets a new value for property {@link #getHandleValidation handleValidation}.
         * 
         * Enable/disable validation handling by MessageManager for this component. The resulting Messages will be propagated to the controls. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHandleValidation(bHandleValidation: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Container height in CSS size
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLifecycle lifecycle}.
         * 
         * Lifecycle behavior for the Component associated by the `ComponentContainer`. The default behavior is `Legacy`. This means that the `ComponentContainer` takes care that the Component is destroyed when the `ComponentContainer` is destroyed, but it is ** not ** destroyed when a new Component is associated. If you use the `usage` property to create the Component, the default behavior is `Container`. This means that the Component is destroyed when the `ComponentContainer` is destroyed or a new Component is associated. This property must only be applied before a component instance is created.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Legacy`.
        */
        public setLifecycle(sLifecycle: sap.ui.core.ComponentLifecycle): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Component name, the package where the component is contained. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getPropagateModel propagateModel}.
         * 
         * Defines whether binding information is propagated to the component.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPropagateModel(bPropagateModel: boolean): this;

        /**
            * Sets a new value for property {@link #getSettings settings}.
         * 
         * The settings object passed to the component when created. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSettings(oSettings: {}): this;

        /**
            * Sets a new value for property {@link #getUrl url}.
         * 
         * The URL of the component. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUrl(sUrl: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getUsage usage}.
         * 
         * The component usage. If the ComponentContainer is used inside a Component, this Component can define a usage which will be used for creating the Component. This property can only be applied initially.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUsage(sUsage: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Container width in CSS size
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}