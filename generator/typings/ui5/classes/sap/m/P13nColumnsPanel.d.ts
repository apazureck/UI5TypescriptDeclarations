declare module 'sap/m/P13nColumnsPanel' {
    import { Event } from 'sap/ui/base/Event';
    import { P13nColumnsItem } from 'sap/m/P13nColumnsItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { P13nPanel, IP13nPanelSettings } from 'sap/m/P13nPanel';

    export interface IP13nColumnsPanelSettings extends IP13nPanelSettings {
        visibleItemsThreshold?: number;
    }

    /**
    
    */
    export class P13nColumnsPanel extends P13nPanel {

        /**
            * Constructor for a new P13nColumnsPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nColumnsPanelSettings);


        /**
            * Adds some columnsItem to the aggregation {@link #getColumnsItems columnsItems}.
        */
        public addColumnsItem(oColumnsItem: P13nColumnsItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addColumnsItem addColumnsItem} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised when a `columnsItem` is added.
        */
        attachAddColumnsItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * <code>columnsItem</code> that needs to be added in the model. */
            newItem: P13nColumnsItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addColumnsItem addColumnsItem} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised when a `columnsItem` is added.
        */
        attachAddColumnsItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * <code>columnsItem</code> that needs to be added in the model. */
            newItem: P13nColumnsItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeColumnsItems changeColumnsItems} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised if `columnsItems` is changed or new one needs to be created in the model.
        */
        attachChangeColumnsItems<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Contains <code>columnsItems</code> that needs to be created in the model. Deprecated as of version 1.50, replaced by new parameter <code>items</code>. */
            newItems: {}, /* * Contains <code>columnsItems</code> that needs to be changed in the model. Deprecated as of version 1.50, replaced by new parameter <code>items</code>. */
            existingItems: {}, /* * Array contains an object for each item in <code>items</code> aggregation enriched with index and visibility information. The item order reflects the current order of columns in the panel. */
            items: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:changeColumnsItems changeColumnsItems} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised if `columnsItems` is changed or new one needs to be created in the model.
        */
        attachChangeColumnsItems<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Contains <code>columnsItems</code> that needs to be created in the model. Deprecated as of version 1.50, replaced by new parameter <code>items</code>. */
            newItems: {}, /* * Contains <code>columnsItems</code> that needs to be changed in the model. Deprecated as of version 1.50, replaced by new parameter <code>items</code>. */
            existingItems: {}, /* * Array contains an object for each item in <code>items</code> aggregation enriched with index and visibility information. The item order reflects the current order of columns in the panel. */
            items: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:setData setData} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised if `setData` is called in model. The event serves the purpose of minimizing such calls since they can take up a lot of performance.
        */
        attachSetData<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:setData setData} event of this `sap.m.P13nColumnsPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nColumnsPanel` itself.
         * 
         * Event raised if `setData` is called in model. The event serves the purpose of minimizing such calls since they can take up a lot of performance.
        */
        attachSetData<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getColumnsItems columnsItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindColumnsItems(oBindingInfo: {}): this;

        /**
            * Destroys all the columnsItems in the aggregation {@link #getColumnsItems columnsItems}.
        */
        public destroyColumnsItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:addColumnsItem addColumnsItem} event of this `sap.m.P13nColumnsPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAddColumnsItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:changeColumnsItems changeColumnsItems} event of this `sap.m.P13nColumnsPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChangeColumnsItems(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:setData setData} event of this `sap.m.P13nColumnsPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSetData(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.P13nColumnsPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:addColumnsItem addColumnsItem} to attached listeners.
        */
        protected fireAddColumnsItem(mParameters?: { newItem?: P13nColumnsItem, }): this;

        /**
            * Fires event {@link #event:changeColumnsItems changeColumnsItems} to attached listeners.
        */
        protected fireChangeColumnsItems(mParameters?: { newItems?: {}, existingItems?: {}, items?: {}, }): this;

        /**
            * Fires event {@link #event:setData setData} to attached listeners.
        */
        protected fireSetData(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getColumnsItems columnsItems}.
         * 
         * List of columns that has been changed.
        */
        public getColumnsItems(): {};

        /**
            * Returns a metadata object for class sap.m.P13nColumnsPanel.
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
            * Delivers a payload for columnsPanel that can be used at consumer side
        */
        public getOkPayload(): {};

        /**
            * Delivers a payload for columnsPanel that can be used at consumer side
        */
        public getResetPayload(): {} | any;

        /**
            * This method can be overwritten by subclass in order to return a payload for Reset action
        */
        public getResetPayload(): any;

        /**
            * Gets current value of property {@link #getVisibleItemsThreshold visibleItemsThreshold}.
         * 
         * Specifies a threshold of visible items. If the end user makes a lot of columns visible, this might cause performance to slow down. When this happens, the user can receive a corresponding warning triggered by the `visibleItemsThreshold` property. The property needs to be activated and set to the required value by the consuming application to ensure that the warning message is shown when the threshold has been exceeded. In the following example the message will be shown if more than 100 visible columns are selected:
         * 
         * `customData&gt;
         * core:CustomData key=&quot;p13nDialogSettings&quot;
         * value='\{&quot;columns&quot;:\{&quot;visible&quot;: true, &quot;payload&quot;: \{&quot;visibleItemsThreshold&quot;: 3\}\}\}' /&gt;
         * /customData&gt;`
         * 
         * Default value is `-1`.
        */
        public getVisibleItemsThreshold(): number;

        /**
            * Checks for the provided `sap.m.P13nColumnsItem` in the aggregation {@link #getColumnsItems columnsItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfColumnsItem(oColumnsItem: P13nColumnsItem): number;

        /**
            * Inserts a columnsItem into the aggregation {@link #getColumnsItems columnsItems}.
        */
        public insertColumnsItem(oColumnsItem: P13nColumnsItem, iIndex: number): this;

        /**
            * This method does a re-initialization of the panel
        */
        public reInitialize(): any;

        /**
            * Removes all the controls from the aggregation {@link #getColumnsItems columnsItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllColumnsItems(): {};

        /**
            * Removes a columnsItem from the aggregation {@link #getColumnsItems columnsItems}.
        */
        public removeColumnsItem(vColumnsItem: number | string | P13nColumnsItem): P13nColumnsItem;

        /**
            * Sets a new value for property {@link #getVisibleItemsThreshold visibleItemsThreshold}.
         * 
         * Specifies a threshold of visible items. If the end user makes a lot of columns visible, this might cause performance to slow down. When this happens, the user can receive a corresponding warning triggered by the `visibleItemsThreshold` property. The property needs to be activated and set to the required value by the consuming application to ensure that the warning message is shown when the threshold has been exceeded. In the following example the message will be shown if more than 100 visible columns are selected:
         * 
         * `customData&gt;
         * core:CustomData key=&quot;p13nDialogSettings&quot;
         * value='\{&quot;columns&quot;:\{&quot;visible&quot;: true, &quot;payload&quot;: \{&quot;visibleItemsThreshold&quot;: 3\}\}\}' /&gt;
         * /customData&gt;`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setVisibleItemsThreshold(iVisibleItemsThreshold: number): this;

        /**
            * Unbinds aggregation {@link #getColumnsItems columnsItems} from model data.
        */
        public unbindColumnsItems(): this;

    }
}