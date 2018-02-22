declare module 'sap/ui/table/AnalyticalTable' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Table, ITableSettings } from 'sap/ui/table/Table';

    export interface IAnalyticalTableSettings extends ITableSettings {
        sumOnTop?: boolean;
        numberOfExpandedLevels?: number;
        autoExpandMode?: string;
        columnVisibilityMenuSorter?: any;
        collapseRecursive?: boolean;
        dirty?: boolean;
    }

    /**
    
    */
    export class AnalyticalTable extends Table {

        /**
            * Constructor for a new AnalyticalTable.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAnalyticalTableSettings);


        /**
            * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The nodes are referenced via their absolute row index. Please be aware that the absolute row index only applies to the tree which is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken into account.
         * 
         * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection. To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
        */
        public addSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Clears the complete selection (all analytical table rows/nodes will be deselected).
        */
        public clearSelection(): this;

        /**
            * Collapses all nodes (and lower if collapseRecursive is activated)
        */
        public collapseAll(): this;

        /**
            * Creates a new subclass of class sap.ui.table.AnalyticalTable with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAutoExpandMode autoExpandMode}.
         * 
         * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must be a value of `sap.ui.table.TreeAutoExpandMode`.
         * 
         * Default value is `Bundled`.
        */
        public getAutoExpandMode(): string;

        /**
            * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
         * 
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
         * 
         * Calling the setter of this property only has an effect when the tables `rows` aggregation is already bound and the binding supports this feature.
         * 
         * Default value is `true`.
        */
        public getCollapseRecursive(): boolean;

        /**
            * Gets current value of property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
         * 
         * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
        */
        public getColumnVisibilityMenuSorter(): any;

        /**
            * Returns the context of a row by its index.
        */
        public getContextByIndex(iIndex: number): {};

        /**
            * Gets current value of property {@link #getDirty dirty}.
         * 
         * If dirty the content of the Table will be overlayed.
        */
        public getDirty(): boolean;

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
            * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
        */
        public getEnableGrouping(): any | boolean;

        /**
            * The `groupBy` association is not supported by the `AnalyticalTable` control.
        */
        public getGroupBy(): any | sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or `null`.
        */
        public getGroupBy(): sap.ui.core.ID;

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
            * Returns a metadata object for class sap.ui.table.AnalyticalTable.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
         * 
         * Number of levels, which should be opened initially (on first load of data).
         * 
         * Default value is `0`.
        */
        public getNumberOfExpandedLevels(): number;

        /**
            * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         * 
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
         * 
         * Default value is `-1`.
        */
        public getSelectedIndex(): number;

        /**
            * Retrieves the lead selection index. The lead selection index is, among other things, used to determine the start/end of a selection range, when using Shift-Click to select multiple entries at once.
        */
        public getSelectedIndex(): {} | number;

        /**
            * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
        */
        public getSelectedIndices(): any;

        /**
            * Returns an array containing the row indices of all selected tree nodes (in ascending order).
         * 
         * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.
        */
        public getSelectedIndices(): {} | any;

        /**
            * Gets current value of property {@link #getSumOnTop sumOnTop}.
         * 
         * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.
         * 
         * Default value is `false`.
        */
        public getSumOnTop(): boolean;

        /**
            * Returns the total size of the data entries.
        */
        public getTotalSize(): number;

        /**
            * Checks if the row at the given index is selected.
        */
        public isIndexSelected(iRowIndex: number): boolean;

        /**
            * All rows/tree nodes inside the range (including boundaries) will be deselected. The nodes are referenced with their absolute row index. Please be aware that the absolute row index only applies to the tree which is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken into account.
        */
        public removeSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * This function is used by some composite controls to force updating the AnalyticalInfo
        */
        protected resumeUpdateAnalyticalInfo(bSuppressRefresh: boolean, bForceChange: boolean): any;

        /**
            * Add all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity.
        */
        public selectAll(): any;

        /**
            * Selects all available nodes/rows.
         * 
         * Explanation of the SelectAll function and what to expect from its behavior: All rows/nodes stored locally on the client are selected. In addition all subsequent rows/tree nodes, which will be paged into view are also immediately selected. However, due to obvious performance/network traffic reasons, the SelectAll function will NOT retrieve any data from the backend.
        */
        public selectAll(): this;

        /**
            * Sets a new value for property {@link #getAutoExpandMode autoExpandMode}.
         * 
         * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must be a value of `sap.ui.table.TreeAutoExpandMode`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Bundled`.
        */
        public setAutoExpandMode(sAutoExpandMode: string): this;

        /**
            * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
         * 
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.
         * 
         * Calling the setter of this property only has an effect when the tables `rows` aggregation is already bound and the binding supports this feature.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCollapseRecursive(bCollapseRecursive: boolean): this;

        /**
            * Sets a new value for property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
         * 
         * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnVisibilityMenuSorter(oColumnVisibilityMenuSorter: any): this;

        /**
            * Sets a new value for property {@link #getDirty dirty}.
         * 
         * If dirty the content of the Table will be overlayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDirty(bDirty: boolean): this;

        /**
            * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
        */
        public setEnableGrouping(): this;

        /**
            * The `groupBy` association is not supported by the `AnalyticalTable` control.
        */
        public setGroupBy(): this;

        /**
            * Sets a new value for property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
         * 
         * Number of levels, which should be opened initially (on first load of data).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setNumberOfExpandedLevels(iNumberOfExpandedLevels: number): this;

        /**
            * In an `AnalyticalTable` control you can only select indices, which correspond to the currently visualized tree. Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not correspond to an `AnalyticalTable` row.
        */
        public setSelectedIndex(iRowIndex: number): this;

        /**
            * Sets the selection of the `AnalyticalTable` control to the given range (including boundaries).
         * 
         * ** Note: ** The previous selection will be lost/overridden. If this is not the required behavior, please use `addSelectionInterval` and `removeSelectionIntervall`.
        */
        public setSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Sets a new value for property {@link #getSumOnTop sumOnTop}.
         * 
         * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSumOnTop(bSumOnTop: boolean): this;

        /**
            * This function is used by some composite controls to avoid updating the AnalyticalInfo when several column are added to the table. In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo must be called.
        */
        protected suspendUpdateAnalyticalInfo(): any;

    }
}