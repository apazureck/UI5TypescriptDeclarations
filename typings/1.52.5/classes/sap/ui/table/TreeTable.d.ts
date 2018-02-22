declare module 'sap/ui/table/TreeTable' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Table, ITableSettings } from 'sap/ui/table/Table';

    export interface ITreeTableSettings extends ITableSettings {
        expandFirstLevel?: boolean;
        useGroupMode?: boolean;
        groupHeaderProperty?: string;
        collapseRecursive?: boolean;
        rootLevel?: number;
    }

    /**
    
    */
    export class TreeTable extends Table {

        /**
            * Constructor for a new TreeTable.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITreeTableSettings);


        /**
            * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The TreeNodes are referenced via their absolute row index. Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be regarded.
         * 
         * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection. To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
        */
        public addSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.table.TreeTable`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
         * 
         * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
        */
        attachToggleOpenState<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Index of the expanded/collapsed row */
            rowIndex: number, /* * Binding context of the expanded/collapsed row */
            rowContext: {}, /* * Flag that indicates whether the row has been expanded or collapsed */
            expanded: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.table.TreeTable`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
         * 
         * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
        */
        attachToggleOpenState<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Index of the expanded/collapsed row */
            rowIndex: number, /* * Binding context of the expanded/collapsed row */
            rowContext: {}, /* * Flag that indicates whether the row has been expanded or collapsed */
            expanded: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Clears the complete selection (all tree table rows/nodes will lose their selection)
        */
        public clearSelection(): this;

        /**
            * collapses the row for the given row index
        */
        public collapse(iRowIndex: number): this;

        /**
            * Collapses all nodes (and lower if collapseRecursive is activated)
        */
        public collapseAll(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.table.TreeTable`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleOpenState(fnFunction: (() => any), oListener: {}): this;

        /**
            * expands the row for the given row index
        */
        public expand(iRowIndex: number): this;

        /**
            * Expands all nodes starting from the root level to the given level 'iLevel'.
         * 
         * Only supported with ODataModel v2, when running in OperationMode.Client or OperationMode.Auto. Fully supported for `sap.ui.model.ClientTreeBinding`, e.g. if you are using a `sap.ui.model.json.JSONModel`.
         * 
         * Please also see `sap.ui.model.odata.OperationMode`.
        */
        public expandToLevel(iLevel: number): this;

        /**
            * Creates a new subclass of class sap.ui.table.TreeTable with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
        */
        protected fireToggleOpenState(mParameters?: { rowIndex?: number, rowContext?: {}, expanded?: boolean, }): this;

        /**
            * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
         * 
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. ** Note: ** collapseRecursive is currently ** not ** supported if your OData service exposes the hierarchy annotation `hierarchy-descendant-count-for`. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the ** SAP Annotations for OData Version 2.0 ** specification.
         * 
         * Default value is `true`.
        */
        public getCollapseRecursive(): boolean;

        /**
            * Gets current value of property {@link #getEnableGrouping enableGrouping}.
         * 
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the `groupBy` association.
         * 
         * The following restrictions apply:  * Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models. * The table can only be grouped by ** one ** column at a time. Grouping by another column will remove the current grouping. * If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons). * The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled. 
         * 
         * Default value is `false`.
        */
        public getEnableGrouping(): boolean;

        /**
            * The property `enableGrouping` is not supported by the `TreeTable` control.
        */
        public getEnableGrouping(): any | boolean;

        /**
            * Gets current value of property {@link #getExpandFirstLevel expandFirstLevel}.
         * 
         * Specifies whether the first level is expanded.
         * 
         * Default value is `false`.
        */
        public getExpandFirstLevel(): boolean;

        /**
            * The `groupBy` association is not supported by the `TreeTable` control.
        */
        public getGroupBy(): any | sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or `null`.
        */
        public getGroupBy(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getGroupHeaderProperty groupHeaderProperty}.
         * 
         * The property name of the rows data which will be displayed as a group header if the group mode is enabled
        */
        public getGroupHeaderProperty(): string;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns a metadata object for class sap.ui.table.TreeTable.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getRootLevel rootLevel}.
         * 
         * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.
         * 
         * Default value is `0`.
        */
        public getRootLevel(): number;

        /**
            * Retrieves the lead selection index. The lead selection index is, among other things, used to determine the start/end of a selection range, when using Shift-Click to select multiple entries at once.
        */
        public getSelectedIndex(): number;

        /**
            * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
        */
        public getSelectedIndices(): any;

        /**
            * Returns an array containing the row indices of all selected tree nodes (ordered ascending).
         * 
         * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.
        */
        public getSelectedIndices(): {} | any;

        /**
            * Gets current value of property {@link #getUseGroupMode useGroupMode}.
         * 
         * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.
         * 
         * Default value is `false`.
        */
        public getUseGroupMode(): boolean;

        /**
            * Returns whether the row is expanded or collapsed.
        */
        public isExpanded(iRowIndex: number): boolean;

        /**
            * Checks if the row at the given index is selected.
        */
        public isIndexSelected(iRowIndex: number): boolean;

        /**
            * All rows/tree nodes inside the range (including boundaries) will be deselected. Tree nodes are referenced with theit absolute row index inside the tree- Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be regarded.
        */
        public removeSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Add all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity.
        */
        public selectAll(): any;

        /**
            * Selects all available nodes/rows.
         * 
         * All rows/tree nodes that are locally stored on the client and that are part of the currently visible tree are selected. Additional rows or tree nodes that come into view through scrolling or paging are also selected immediately as soon as they get visible. However, `SelectAll` does not retrieve any data from the back end in order to improve performance and reduce the network traffic.
        */
        public selectAll(): this;

        /**
            * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
         * 
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. ** Note: ** collapseRecursive is currently ** not ** supported if your OData service exposes the hierarchy annotation `hierarchy-descendant-count-for`. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the ** SAP Annotations for OData Version 2.0 ** specification.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCollapseRecursive(bCollapseRecursive: boolean): this;

        /**
            * The property `enableGrouping` is not supported by the `TreeTable` control.
        */
        public setEnableGrouping(): this;

        /**
            * Sets a new value for property {@link #getExpandFirstLevel expandFirstLevel}.
         * 
         * Specifies whether the first level is expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExpandFirstLevel(bExpandFirstLevel: boolean): this;

        /**
            * Setter for property `fixedRowCount`.
         * 
         * ** This property is not supportd for the TreeTable and will be ignored! **
         * 
         * Default value is `0`
        */
        public setFixedRowCount(iFixedRowCount: number): this;

        /**
            * The `groupBy` association is not supported by the `TreeTable` control.
        */
        public setGroupBy(): this;

        /**
            * Sets a new value for property {@link #getGroupHeaderProperty groupHeaderProperty}.
         * 
         * The property name of the rows data which will be displayed as a group header if the group mode is enabled
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setGroupHeaderProperty(sGroupHeaderProperty: string): this;

        /**
            * Sets a new value for property {@link #getRootLevel rootLevel}.
         * 
         * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setRootLevel(iRootLevel: number): this;

        /**
            * Overridden from Table.js base class. In a TreeTable you can only select indices, which correspond to the currently visualized tree. Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because they do not correspond to a TreeTable row.
        */
        public setSelectedIndex(iRowIndex: number): this;

        /**
            * Sets the selection of the TreeTable to the given range (including boundaries). Beware: The previous selection will be lost/overriden. If this is not wanted, please use "addSelectionInterval" and "removeSelectionIntervall".
        */
        public setSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Allows to hide the tree structure (tree icons, indentation) in tree mode (property `useGroupMode` is set to `false`).
         * 
         * This option might be useful in some scenarios when actually a tree table must be used but under certain conditions the data is not hierarchical, because it contains leafs only.
         * 
         * ** Note: ** In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy is not visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical data.
        */
        protected setUseFlatMode(bFlat: boolean): this;

        /**
            * Sets a new value for property {@link #getUseGroupMode useGroupMode}.
         * 
         * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseGroupMode(bUseGroupMode: boolean): this;

    }
}