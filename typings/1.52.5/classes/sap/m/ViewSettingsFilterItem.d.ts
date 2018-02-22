declare module 'sap/m/ViewSettingsFilterItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ViewSettingsItem, IViewSettingsItemSettings } from 'sap/m/ViewSettingsItem';

    export interface IViewSettingsFilterItemSettings extends IViewSettingsItemSettings {
        multiSelect?: boolean;
    }

    /**
    
    */
    export class ViewSettingsFilterItem extends ViewSettingsItem {

        /**
            * Constructor for a new ViewSettingsFilterItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IViewSettingsFilterItemSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ViewSettingsItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterDetailItemsAggregationChange filterDetailItemsAggregationChange} event of this `sap.m.ViewSettingsFilterItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsFilterItem` itself.
         * 
         * Let the outside world know that the filter detail aggregation was changed.
        */
        attachFilterDetailItemsAggregationChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterDetailItemsAggregationChange filterDetailItemsAggregationChange} event of this `sap.m.ViewSettingsFilterItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ViewSettingsFilterItem` itself.
         * 
         * Let the outside world know that the filter detail aggregation was changed.
        */
        attachFilterDetailItemsAggregationChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

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
            * Detaches event handler `fnFunction` from the {@link #event:filterDetailItemsAggregationChange filterDetailItemsAggregationChange} event of this `sap.m.ViewSettingsFilterItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilterDetailItemsAggregationChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ViewSettingsFilterItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ViewSettingsItem.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:filterDetailItemsAggregationChange filterDetailItemsAggregationChange} to attached listeners.
        */
        protected fireFilterDetailItemsAggregationChange(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Items that are logically grouped under this filter item. They are used to display filter details in the ViewSettingsDialog.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.ViewSettingsFilterItem.
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
            * Gets current value of property {@link #getMultiSelect multiSelect}.
         * 
         * If set to (true), multi selection will be allowed for the items aggregation.
         * 
         * Default value is `true`.
        */
        public getMultiSelect(): boolean;

        /**
            * Checks for the provided `sap.m.ViewSettingsItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ViewSettingsItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ViewSettingsItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ViewSettingsItem): ViewSettingsItem;

        /**
            * Sets a new value for property {@link #getMultiSelect multiSelect}.
         * 
         * If set to (true), multi selection will be allowed for the items aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setMultiSelect(bMultiSelect: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}