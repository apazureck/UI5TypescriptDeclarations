declare module 'sap/m/MenuItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IMenuItemSettings extends IItemSettings {
        icon?: string;
        visible?: boolean;
        startsSection?: boolean;
    }

    /**
    
    */
    export class MenuItem extends Item {

        /**
            * Constructor for a new `MenuItem`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuItemSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:aggregationChanged aggregationChanged} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired when aggregation of the item changes.
        */
        attachAggregationChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The aggregation name of the changed aggregation. */
            aggregationName: string, /* * Which method changed the aggregation. */
            methodName: string, /* * What parameters were used to change the aggregation. */
            methodParams: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:aggregationChanged aggregationChanged} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired when aggregation of the item changes.
        */
        attachAggregationChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The aggregation name of the changed aggregation. */
            aggregationName: string, /* * Which method changed the aggregation. */
            methodName: string, /* * What parameters were used to change the aggregation. */
            methodParams: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired after the item has been pressed.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired after the item has been pressed.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired when a property of the item changes.
        */
        attachPropertyChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The property name to be changed. */
            propertyKey: string, /* * The new property value. */
            propertyValue: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this `sap.m.MenuItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuItem` itself.
         * 
         * Fired when a property of the item changes.
        */
        attachPropertyChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The property name to be changed. */
            propertyKey: string, /* * The new property value. */
            propertyValue: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:aggregationChanged aggregationChanged} event of this `sap.m.MenuItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAggregationChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.MenuItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:propertyChanged propertyChanged} event of this `sap.m.MenuItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPropertyChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MenuItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:aggregationChanged aggregationChanged} to attached listeners.
        */
        protected fireAggregationChanged(mParameters?: { aggregationName?: string, methodName?: string, methodParams?: {}, }): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:propertyChanged propertyChanged} to attached listeners.
        */
        protected firePropertyChanged(mParameters?: { propertyKey?: string, propertyValue?: any, }): this;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon, which belongs to the item. This can be a URI to an image or an icon font URI.
        */
        public getIcon(): string;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines the sub-items contained within this element.
        */
        public getItems(): {};

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
            * Returns a metadata object for class sap.m.MenuItem.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getStartsSection startsSection}.
         * 
         * Defines whether a visual separator should be rendered before the item. ** Note: ** If an item is invisible its separator is also not displayed.
         * 
         * Default value is `false`.
        */
        public getStartsSection(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Defines whether the item should be visible on the screen. If set to `false`, a placeholder is rendered instead of the real item.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.m.MenuItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: this): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | this): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon, which belongs to the item. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getStartsSection startsSection}.
         * 
         * Defines whether a visual separator should be rendered before the item. ** Note: ** If an item is invisible its separator is also not displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStartsSection(bStartsSection: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Defines whether the item should be visible on the screen. If set to `false`, a placeholder is rendered instead of the real item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}