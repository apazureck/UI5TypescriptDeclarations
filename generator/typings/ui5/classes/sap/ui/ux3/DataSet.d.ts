declare module 'sap/ui/ux3/DataSet' {
    import { Event } from 'sap/ui/base/Event';
    import { DataSetItem } from 'sap/ui/ux3/DataSetItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDataSetSettings extends IControlSettings {
        showToolbar?: boolean;
        showFilter?: boolean;
        showSearchField?: boolean;
        multiSelect?: boolean;
    }

    /**
    
    */
    export class DataSet extends Control {

        /**
            * Constructor for a new DataSet.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDataSetSettings);


        /**
            * Rerendering of the FilterArea
        */
        protected _rerenderFilter(): any;

        /**
            * Rerendering of the Toolbar
        */
        protected _rerenderToolbar(): any;

        /**
            * Adds some filter to the aggregation {@link #getFilter filter}.
        */
        public addFilter(oFilter: Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: DataSetItem): this;

        /**
            * add a toolbarItem to the toolbar
        */
        public addToolbarItem(oOToolbarItem: sap.ui.commons.ToolbarItem): any;

        /**
            * Adds some view to the aggregation {@link #getViews views}.
        */
        public addView(oView: sap.ui.ux3.DataSetView): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         * 
         * Event which is fired when the user triggers a search
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         * 
         * Event which is fired when the user triggers a search
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.DataSet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         * 
         * selection Changed
        */
        attachSelectionChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Old lead selected index */
            oldLeadSelectedIndex: number, /* * New lead selected index */
            newLeadSelectedIndex: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.DataSet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         * 
         * selection Changed
        */
        attachSelectionChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Old lead selected index */
            oldLeadSelectedIndex: number, /* * New lead selected index */
            newLeadSelectedIndex: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * clears dataset from all previous selections
        */
        public clearSelection(): any;

        /**
            * Creates a view switch button
        */
        protected createViewSwitch(oView: {}, iIndex: number): {};

        /**
            * Destroys all the filter in the aggregation {@link #getFilter filter}.
        */
        public destroyFilter(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Destroys all the views in the aggregation {@link #getViews views}.
        */
        public destroyViews(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of this `sap.ui.ux3.DataSet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.DataSet with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { query?: string, }): this;

        /**
            * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
        */
        protected fireSelectionChanged(mParameters?: { oldLeadSelectedIndex?: number, newLeadSelectedIndex?: number, }): this;

        /**
            * Gets content of aggregation {@link #getFilter filter}.
         * 
         * Filter control (e.g. a FacetFilter) for the DataSet
        */
        public getFilter(): {};

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Aggregation of DataSetItems
        */
        public getItems(): {};

        /**
            * Returns the LeadSelection index
        */
        protected getLeadSelection(): number;

        /**
            * Returns a metadata object for class sap.ui.ux3.DataSet.
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
            * Gets current value of property {@link #getMultiSelect multiSelect}.
         * 
         * Selection mode of the DataSet
         * 
         * Default value is `false`.
        */
        public getMultiSelect(): boolean;

        /**
            * use this function to retrieve the lead selected index
        */
        public getSelectedIndex(): any;

        /**
            * use this function to retrieve all selected indices if multiple select is enabled
        */
        public getSelectedIndices(): any;

        /**
            * Returns id of selected Item from given index
        */
        protected getSelectedItemId(iIndex: number): string;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or `null`.
        */
        public getSelectedView(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowFilter showFilter}.
         * 
         * show filter
         * 
         * Default value is `true`.
        */
        public getShowFilter(): boolean;

        /**
            * Gets current value of property {@link #getShowSearchField showSearchField}.
         * 
         * Show/hide SearchField in Toolbar
         * 
         * Default value is `true`.
        */
        public getShowSearchField(): boolean;

        /**
            * Gets current value of property {@link #getShowToolbar showToolbar}.
         * 
         * show Toolbar
         * 
         * Default value is `true`.
        */
        public getShowToolbar(): boolean;

        /**
            * Gets content of aggregation {@link #getViews views}.
         * 
         * views
        */
        public getViews(): {};

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFilter filter}. and returns its index if found or -1 otherwise.
        */
        public indexOfFilter(oFilter: Control): number;

        /**
            * Checks for the provided `sap.ui.ux3.DataSetItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: DataSetItem): number;

        /**
            * Checks for the provided `sap.ui.ux3.DataSetView` in the aggregation {@link #getViews views}. and returns its index if found or -1 otherwise.
        */
        public indexOfView(oView: sap.ui.ux3.DataSetView): number;

        /**
            * Inserts a filter into the aggregation {@link #getFilter filter}.
        */
        public insertFilter(oFilter: Control, iIndex: number): this;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: DataSetItem, iIndex: number): this;

        /**
            * Inserts a view into the aggregation {@link #getViews views}.
        */
        public insertView(oView: sap.ui.ux3.DataSetView, iIndex: number): this;

        /**
            * Returns true if iIndex is selected
        */
        protected isSelectedIndex(iIndex: number): boolean;

        /**
            * Removes all the controls from the aggregation {@link #getFilter filter}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFilter(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getViews views}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllViews(): {};

        /**
            * Removes a filter from the aggregation {@link #getFilter filter}.
        */
        public removeFilter(vFilter: number | string | Control): Control;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | DataSetItem): DataSetItem;

        /**
            * remove a toolbarItem to the toolbar
        */
        public removeToolbarItem(oOToolbarItem: sap.ui.commons.ToolbarItem): any;

        /**
            * Removes a view from the aggregation {@link #getViews views}.
        */
        public removeView(vView: number | string | sap.ui.ux3.DataSetView): sap.ui.ux3.DataSetView;

        /**
            * Set the LeadSelection index
        */
        protected setLeadSelection(iIIndex: number): any;

        /**
            * setter for multi selection mode
        */
        public setMultiSelect(bMode: boolean): any;

        /**
            * Sets the associated {@link #getSelectedView selectedView}.
        */
        public setSelectedView(oSelectedView: sap.ui.core.ID | sap.ui.ux3.DataSetView): this;

        /**
            * Sets a new value for property {@link #getShowFilter showFilter}.
         * 
         * show filter
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFilter(bShowFilter: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSearchField showSearchField}.
         * 
         * Show/hide SearchField in Toolbar
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSearchField(bShowSearchField: boolean): this;

        /**
            * Sets a new value for property {@link #getShowToolbar showToolbar}.
         * 
         * show Toolbar
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowToolbar(bShowToolbar: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}