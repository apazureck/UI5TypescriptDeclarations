declare module 'sap/m/FacetFilterList' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { List, IListSettings } from 'sap/m/List';

    export interface IFacetFilterListSettings extends IListSettings {
        title?: string;
        wordWrap?: boolean;
        multiSelect?: boolean;
        active?: boolean;
        enableCaseInsensitiveSearch?: boolean;
        allCount?: number;
        sequence?: number;
        key?: string;
        showRemoveFacetIcon?: boolean;
        retainListSequence?: boolean;
        dataType?: sap.m.FacetFilterListDataType;
    }

    /**
    
    */
    export class FacetFilterList extends List {

        /**
            * Constructor for a new `FacetFilterList`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFacetFilterListSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:listClose listClose} event of this `sap.m.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilterList` itself.
         * 
         * Triggered after the list of items is closed.
        */
        attachListClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Array of selected items. Items returned are only copies and therefore can only be used to read properties, not set them. */
            selectedItems: {}, /* * <code>True</code> if the select All checkbox is selected. This will be <code>false</code> if all items are actually selected (every FacetFilterItem.selected == true). In that case selectedItems will contain all selected items. */
            allSelected: boolean, /* * Associative array containing the keys of selected FacetFilterItems. Unlike the selectedItems parameter, this contains only the keys for all selected items, not the items themselves. Being an associative array, each object property is the FacetFilterItem key value and the value of the property is the FacetFilterItem text. */
            selectedKeys: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listClose listClose} event of this `sap.m.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilterList` itself.
         * 
         * Triggered after the list of items is closed.
        */
        attachListClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Array of selected items. Items returned are only copies and therefore can only be used to read properties, not set them. */
            selectedItems: {}, /* * <code>True</code> if the select All checkbox is selected. This will be <code>false</code> if all items are actually selected (every FacetFilterItem.selected == true). In that case selectedItems will contain all selected items. */
            allSelected: boolean, /* * Associative array containing the keys of selected FacetFilterItems. Unlike the selectedItems parameter, this contains only the keys for all selected items, not the items themselves. Being an associative array, each object property is the FacetFilterItem key value and the value of the property is the FacetFilterItem text. */
            selectedKeys: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listOpen listOpen} event of this `sap.m.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilterList` itself.
         * 
         * Fired before the filter list is opened.
        */
        attachListOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listOpen listOpen} event of this `sap.m.FacetFilterList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilterList` itself.
         * 
         * Fired before the filter list is opened.
        */
        attachListOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:listClose listClose} event of this `sap.m.FacetFilterList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachListClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:listOpen listOpen} event of this `sap.m.FacetFilterList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachListOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.FacetFilterList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.List.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:listClose listClose} to attached listeners.
        */
        protected fireListClose(mParameters?: { selectedItems?: {}, allSelected?: boolean, selectedKeys?: {}, }): this;

        /**
            * Fires event {@link #event:listOpen listOpen} to attached listeners.
        */
        protected fireListOpen(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getActive active}.
         * 
         * Indicates that the list is displayed as a button when the FacetFilter type is set to `Simple`.
         * 
         * Default value is `true`.
        */
        public getActive(): boolean;

        /**
            * Gets current value of property {@link #getAllCount allCount}.
         * 
         * Determines the number of objects that match this item in the target data set when all filter items are selected.
        */
        public getAllCount(): number;

        /**
            * Gets current value of property {@link #getDataType dataType}.
         * 
         * FacetFilterList data type. Only String data type will provide search function.
         * 
         * Default value is `String`.
        */
        public getDataType(): sap.m.FacetFilterListDataType;

        /**
            * Gets current value of property {@link #getEnableCaseInsensitiveSearch enableCaseInsensitiveSearch}.
         * 
         * If set to `true`, enables case-insensitive search for OData.
         * 
         * Default value is `false`.
        */
        public getEnableCaseInsensitiveSearch(): boolean;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Unique identifier for this filter list.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.FacetFilterList.
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
         * Specifies whether multiple or single selection is used.
         * 
         * Default value is `true`.
        */
        public getMultiSelect(): boolean;

        /**
            * Gets current value of property {@link #getRetainListSequence retainListSequence}.
         * 
         * Retains the list sequence if it is inactive and made active again.
         * 
         * Default value is `false`.
        */
        public getRetainListSequence(): boolean;

        /**
            * Returns the keys of the selected elements as an associative array. An empty object is returned if no items are selected.
        */
        public getSelectedKeys(): {};

        /**
            * Gets current value of property {@link #getSequence sequence}.
         * 
         * Sequence that determines the order in which FacetFilterList is shown on the FacetFilter. Lists are rendered by ascending order of sequence.
         * 
         * Default value is `-1`.
        */
        public getSequence(): number;

        /**
            * Gets current value of property {@link #getShowRemoveFacetIcon showRemoveFacetIcon}.
         * 
         * Specifies whether remove icon for facet is visible or hidden.
         * 
         * Default value is `true`.
        */
        public getShowRemoveFacetIcon(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the facet. The facet title is displayed on the facet button when the FacetFilter type is set to `Simple`. It is also displayed as a list item in the facet page of the dialog.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getWordWrap wordWrap}.
         * 
         * If set to `true`, the item text wraps when it is too long.
         * 
         * Default value is `false`.
        */
        public getWordWrap(): boolean;

        /**
            * Removes the specified key from the selected keys cache and deselects the item.
        */
        public removeSelectedKey(sKey: string, sText: string): any;

        /**
            * Removes all selected keys from the selected keys cache and deselects all items.
        */
        public removeSelectedKeys(): any;

        /**
            * Sets a new value for property {@link #getActive active}.
         * 
         * Indicates that the list is displayed as a button when the FacetFilter type is set to `Simple`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setActive(bActive: boolean): this;

        /**
            * Sets a new value for property {@link #getAllCount allCount}.
         * 
         * Determines the number of objects that match this item in the target data set when all filter items are selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAllCount(iAllCount: number): this;

        /**
            * Sets a new value for property {@link #getDataType dataType}.
         * 
         * FacetFilterList data type. Only String data type will provide search function.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `String`.
        */
        public setDataType(sDataType: sap.m.FacetFilterListDataType): this;

        /**
            * Sets a new value for property {@link #getEnableCaseInsensitiveSearch enableCaseInsensitiveSearch}.
         * 
         * If set to `true`, enables case-insensitive search for OData.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableCaseInsensitiveSearch(bEnableCaseInsensitiveSearch: boolean): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Unique identifier for this filter list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Overrides to allow only MultiSelect and SingleSelectMaster list modes. If an invalid mode is given then the mode will not be changed.
        */
        public setMode(mode: sap.m.ListMode): this;

        /**
            * Sets a new value for property {@link #getMultiSelect multiSelect}.
         * 
         * Specifies whether multiple or single selection is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setMultiSelect(bMultiSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getRetainListSequence retainListSequence}.
         * 
         * Retains the list sequence if it is inactive and made active again.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRetainListSequence(bRetainListSequence: boolean): this;

        /**
            * Used to pre-select FacetFilterItems, such as when restoring FacetFilterList selections from a variant. Keys are cached separately from the actual FacetFilterItems so that they remain even when the physical items are removed by filtering or sorting. If aKeys is `undefined`, `null`, or {} (empty object) then all keys are deleted. After this method completes, only those items with matching keys will be selected. All other items in the list will be deselected.
        */
        public setSelectedKeys(oKeys: {}): any;

        /**
            * Sets a new value for property {@link #getSequence sequence}.
         * 
         * Sequence that determines the order in which FacetFilterList is shown on the FacetFilter. Lists are rendered by ascending order of sequence.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setSequence(iSequence: number): this;

        /**
            * Sets a new value for property {@link #getShowRemoveFacetIcon showRemoveFacetIcon}.
         * 
         * Specifies whether remove icon for facet is visible or hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowRemoveFacetIcon(bShowRemoveFacetIcon: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the facet. The facet title is displayed on the facet button when the FacetFilter type is set to `Simple`. It is also displayed as a list item in the facet page of the dialog.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getWordWrap wordWrap}.
         * 
         * If set to `true`, the item text wraps when it is too long.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWordWrap(bWordWrap: boolean): this;

    }
}