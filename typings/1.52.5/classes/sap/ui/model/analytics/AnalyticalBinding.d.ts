declare module 'sap/ui/model/analytics/AnalyticalBinding' {
    import { Filter } from 'sap/ui/model/Filter';
    import { QueryResult } from 'sap/ui/model/analytics/odata4analytics';
    import { Context } from 'sap/ui/model/Context';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Model } from 'sap/ui/model/Model';
    import { TreeBinding, ITreeBindingSettings } from 'sap/ui/model/TreeBinding';

    export interface IAnalyticalBindingSettings extends ITreeBindingSettings {
    }

    /**
    
    */
    export class AnalyticalBinding extends TreeBinding {

        /**
            
        */
        public constructor(oModel: Model, sPath: string, oContext: {}, aSorter: any[], aFilters: any[], mParameters: { entitySet?: any, useBatchRequests?: any, provideGrandTotals?: any, provideTotalResultSize?: any, reloadSingleUnitMeasures?: any, select?: string, });


        /**
            * Creates a new subclass of class sap.ui.model.analytics.AnalyticalBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.TreeBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Filters the tree according to the filter definitions.
        */
        public filter(aFilters: {}, sFilterType: sap.ui.model.FilterType): any;

        /**
            * Sets filters for matching only a subset of the entities in the bound OData entity set.
         * 
         * Invoking this function resets the state of the binding. Subsequent data requests such as calls to getNodeContexts() will need to trigger OData requests in order to fetch the data that are in line with these filters.
        */
        public filter(aFilter: {} | Filter, sFilterType?: sap.ui.model.FilterType): this;

        /**
            * Gets the analytical information for a column with a given name.
        */
        public getAnalyticalInfoForColumn(sColumnName: string): {};

        /**
            * Gets analytical metadata for the bound OData entity set.
        */
        public getAnalyticalQueryResult(): QueryResult;

        /**
            * Gets details about the dimension properties included in the bound OData entity set.
        */
        public getDimensionDetails(): any;

        /**
            * Get a download URL with the specified format considering the sort/filter/custom parameters.
         * 
         * The download URL also takes into account the selected dimensions and measures, depending on the given column definitions of the AnalyticalTable. This is based on the visible/inResult flags of the columns, as well as integrity dependencies, e.g. for mandatory Unit properties.
        */
        public getDownloadUrl(sFormat: string): string;

        /**
            * Gets the names of the filterable properties in the bound OData entity set.
        */
        public getFilterablePropertyNames(): any[];

        /**
            * Gets a printable name for a group.
         * 
         * The printable name follows the pattern is `&lt;label&gt;:&lt;key-value&gt;[-&lt;text-value&gt;]`, where `label` is the label of the dimension property used at the aggregation level for the group, `key-value` is the key value of that dimension for the group, and `text-value` is the value of the associated text property, if it is also used in the binding.
         * 
         * Whenever a formatter function has been defined for a column displaying the key or text of this dimension, the return value of this function is applied for the group name instead of the respective key or text value.
        */
        public getGroupName(oContext: Context, iLevel: number): string;

        /**
            * Gets the total number of contexts contained in a group, if known.
         * 
         * For a given group, be aware that the group size might vary over time. In principle, this can happen if the bound set of OData entities includes measure properties with amount or quantity values. The AnalyticalBinding recognizes situations where the OData service returns multiple entries for a single group entry due to the fact that a measure property cannot be aggregated properly, because an amount exists in multiple currencies or a quantity exists in multiple units. In such situations, the AnalyticalBinding substitutes these entries by a single representative, and the group size gets reduced by the count of duplicate entries. Finally, since the Binding does not always fetch all children of a group at once, but only a page with a certain range, such size changes might happen after every page access.
        */
        public getGroupSize(oContext: Context, iLevel: number): number;

        /**
            * Gets details about the measure properties included in the bound OData entity set.
        */
        public getMeasureDetails(): any;

        /**
            * Returns a metadata object for class sap.ui.model.analytics.AnalyticalBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets child contexts for a specified parent context.
         * 
         * Contexts are returned in a stable order imposed by the dimension property that defines this aggregation level beneath the parent context: Either a sort order has been specified for this property, or the entries are returned in ascending order of the values of this dimension property by default.
         * 
         * If any of the requested data is missing, an OData request will be triggered to load it.
        */
        public getNodeContexts(mParameters: any): any[];

        /**
            * Gets the metadata of a property with a given name.
        */
        public getProperty(sPropertyName: string): {};

        /**
            * Gets the label of a property with a given name.
        */
        public getPropertyHeading(sPropertyName: string): string;

        /**
            * Gets the label of a property with a given name.
        */
        public getPropertyLabel(sPropertyName: string): string;

        /**
            * Gets the quick info of a property with a given name.
        */
        public getPropertyQuickInfo(sPropertyName: string): string;

        /**
            * Gets the context for the root aggregation level representing the grand total for all bound measure properties.
         * 
         * The context is assigned to parent group ID `null`. If the binding is configured not to provide a grand total, this context is empty. If data for this context is not locally available yet, an OData request will be triggered to load it.
         * 
         * This function must be called whenever the bound set of OData entities changes, e.g., by changing selected dimensions, modifying filter conditions, etc.
        */
        public getRootContexts(mParameters: any): any[];

        /**
            * Gets the names of the sortable properties in the bound OData entity set.
        */
        public getSortablePropertyNames(): any[];

        /**
            * Gets the total number of entities in the bound OData entity set.
         * 
         * Counting takes place at the lowest aggregation level defined by the possible value combinations for the complete set of dimension properties included in the bound entity set. This means that intermediate aggregate entities with sub-totals at higher aggregation levels are not counted.
        */
        public getTotalSize(): number;

        /**
            * Determines if the binding has the entries of a given aggregation level locally available.
         * 
         * If so, no further OData request is required to fetch any of them.
        */
        public hasAvailableNodeContexts(oContext: Context, iLevel: number): boolean;

        /**
            * Determines if the contexts in a specified group have further children. If so, any of these group contexts can be a parent context of a nested sub-group in a subsequent aggregation level.
        */
        public hasChildren(oContext: Context, mParameters?: any): boolean;

        /**
            * Determines if any of the properties included in the bound OData entity set is a measure property.
        */
        public hasMeasures(): boolean;

        /**
            * Determines if a given name refers to a measure property
        */
        public isMeasure(sPropertyName: string): boolean;

        /**
            * Loads child contexts of multiple groups.
        */
        public loadGroups(mGroupIdRanges: any): any;

        /**
            * Determines if the binding has been configured to provide a grand total for the selected measure properties.
        */
        public providesGrandTotal(): boolean;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For service side models this should refetch the data from the service. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate?: boolean): any;

        /**
            * Sets sorters for retrieving the entities in the bound OData entity set in a specific order.
         * 
         * Invoking this function resets the state of the binding. Subsequent data requests such as calls to getNodeContexts() will need to trigger OData requests in order to fetch the data that are in line with these sorters.
        */
        public sort(aSorter: Sorter | any[]): this;

        /**
            * Sorts the tree according to the sorter definitions.
        */
        public sort(aSorters: {}): any;

        /**
            * Updates the binding's structure with new analytical information.
         * 
         * Analytical information is the mapping of UI columns to properties in the bound OData entity set. Every column object contains the name of the bound property and in addition:  1. A column bound to a dimension property has further boolean properties:  * grouped: dimension will be used for building groups * visible: if the column is visible, values for the related property will be fetched from the OData service * inResult: if the column is not visible, but declared to be part of the result, values for the related property will also be fetched from the OData service 2. A column bound to a measure property has further boolean properties:  * total: totals and sub-totals will be provided for the measure at all aggregation levels 
         * 
         * Invoking this function resets the state of the binding and subsequent data requests such as calls to getNodeContexts() will need to trigger OData requests in order to fetch the data that are in line with this analytical information.
         * 
         * Please be aware that a call of this function might lead to additional back-end requests, as well as a control re-rendering later on. Whenever possible use the API of the analytical control, instead of relying on the binding.
        */
        protected updateAnalyticalInfo(aColumns: any[]): any;

    }
}