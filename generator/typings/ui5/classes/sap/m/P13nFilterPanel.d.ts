declare module 'sap/m/P13nFilterPanel' {
    import { Event } from 'sap/ui/base/Event';
    import { P13nFilterItem } from 'sap/m/P13nFilterItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { P13nPanel, IP13nPanelSettings } from 'sap/m/P13nPanel';

    export interface IP13nFilterPanelSettings extends IP13nPanelSettings {
        maxIncludes?: string;
        maxExcludes?: string;
        containerQuery?: boolean;
        layoutMode?: string;
    }

    /**
    
    */
    export class P13nFilterPanel extends P13nPanel {

        /**
            * Constructor for a new P13nFilterPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nFilterPanelSettings);


        /**
            * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
        */
        public addFilterItem(oFilterItem: P13nFilterItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addFilterItem addFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been added.
        */
        attachAddFilterItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addFilterItem addFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been added.
        */
        attachAddFilterItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeFilterItem removeFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been removed.
        */
        attachRemoveFilterItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeFilterItem removeFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been removed.
        */
        attachRemoveFilterItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateFilterItem updateFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been updated.
        */
        attachUpdateFilterItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateFilterItem updateFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nFilterPanel` itself.
         * 
         * Event raised if a filter item has been updated.
        */
        attachUpdateFilterItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getFilterItems filterItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindFilterItems(oBindingInfo: {}): this;

        /**
            * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
        */
        public destroyFilterItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:addFilterItem addFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAddFilterItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:removeFilterItem removeFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRemoveFilterItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:updateFilterItem updateFilterItem} event of this `sap.m.P13nFilterPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUpdateFilterItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.P13nFilterPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:addFilterItem addFilterItem} to attached listeners.
        */
        protected fireAddFilterItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:removeFilterItem removeFilterItem} to attached listeners.
        */
        protected fireRemoveFilterItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:updateFilterItem updateFilterItem} to attached listeners.
        */
        protected fireUpdateFilterItem(mParameters?: {}): this;

        /**
            * Returns the array of conditions.
        */
        public getConditions(): any;

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * Defines if the `mediaQuery` or a `ContainerResize` is used for layout update. If the `ConditionPanel` is used in a dialog, the property must be set to `true`.
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Getter for the exclude operations.
        */
        public getExcludeOperations(sType: string): {};

        /**
            * Gets content of aggregation {@link #getFilterItems filterItems}.
         * 
         * Defines filter items.
        */
        public getFilterItems(): {};

        /**
            * Getter for the include operations.
        */
        public getIncludeOperations(the: string): any;

        /**
            * Gets current value of property {@link #getLayoutMode layoutMode}.
         * 
         * Can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or"Phone" you can set a fixed layout.
        */
        public getLayoutMode(): string;

        /**
            * Gets current value of property {@link #getMaxExcludes maxExcludes}.
         * 
         * Defines the maximum number of exclude filters.
         * 
         * Default value is `-1`.
        */
        public getMaxExcludes(): string;

        /**
            * Gets current value of property {@link #getMaxIncludes maxIncludes}.
         * 
         * Defines the maximum number of include filters.
         * 
         * Default value is `-1`.
        */
        public getMaxIncludes(): string;

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
            * Returns a metadata object for class sap.m.P13nFilterPanel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Checks for the provided `sap.m.P13nFilterItem` in the aggregation {@link #getFilterItems filterItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfFilterItem(oFilterItem: P13nFilterItem): number;

        /**
            * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
        */
        public insertFilterItem(oFilterItem: P13nFilterItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFilterItems(): {};

        /**
            * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
        */
        public removeFilterItem(vFilterItem: number | string | P13nFilterItem): P13nFilterItem;

        /**
            * Removes all invalid conditions.
        */
        public removeInvalidConditions(): any;

        /**
            * Removes all errors and warnings states from of all filter conditions.
        */
        public removeValidationErrors(): any;

        /**
            * Sets the array of conditions.
        */
        public setConditions(aConditions: {}): this;

        /**
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * Defines if the `mediaQuery` or a `ContainerResize` is used for layout update. If the `ConditionPanel` is used in a dialog, the property must be set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Setter for the supported exclude operations array.
        */
        public setExcludeOperations(aOperation: {}, sType: string): any;

        /**
            * Setter for the supported Include operations array.
        */
        public setIncludeOperations(aOperation: {}, sType: string): any;

        /**
            * Sets a new value for property {@link #getLayoutMode layoutMode}.
         * 
         * Can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or"Phone" you can set a fixed layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLayoutMode(sLayoutMode: string): this;

        /**
            * Sets a new value for property {@link #getMaxExcludes maxExcludes}.
         * 
         * Defines the maximum number of exclude filters.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setMaxExcludes(sMaxExcludes: string): this;

        /**
            * Sets a new value for property {@link #getMaxIncludes maxIncludes}.
         * 
         * Defines the maximum number of include filters.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setMaxIncludes(sMaxIncludes: string): this;

        /**
            * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
        */
        public unbindFilterItems(): this;

        /**
            * Checks if the entered and modified conditions are correct, marks invalid fields in yellow (warning).
        */
        public validateConditions(): boolean;

    }
}