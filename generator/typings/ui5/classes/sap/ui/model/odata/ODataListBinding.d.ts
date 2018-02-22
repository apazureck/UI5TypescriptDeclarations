declare module 'sap/ui/model/odata/ODataListBinding' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { ODataModel } from 'sap/ui/model/odata/ODataModel';
    import { Context } from 'sap/ui/model/Context';
    import { ListBinding, IListBindingSettings } from 'sap/ui/model/ListBinding';

    export interface IODataListBindingSettings extends IListBindingSettings {
    }

    /**
    
    */
    export class ODataListBinding extends ListBinding {

        /**
            
        */
        public constructor(oModel: ODataModel, sPath: string, oContext: Context, aSorters: any[], aFilters: any[], mParameters: { expand?: string, select?: string, custom?: any, countMode?: sap.ui.model.odata.CountMode, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataListBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ListBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Applies a new set of filters to the list represented by this binding.
         * 
         * Depending on the nature of the model (client or server), the operation might be executed locally or on a server and it might execute asynchronously.
         * 
         * ###Application and Control Filters Each list binding maintains two separate lists of filters, one for filters defined by the control that owns the binding and another list for filters that an application can define in addition. When executing the filter operation, both sets of filters are combined.
         * 
         * By using the second parameter `sFilterType` of method `filter`, the caller can control which set of filters is modified. If no type is given, then the behavior depends on the model implementation and should be documented in the API reference for that model.
         * 
         * <h3>Auto-Grouping of Filters<h3> Filters are first grouped according to their binding path. All filters belonging to the same group are ORed and after that the results of all groups are ANDed. Usually this means, all filters applied to a single table column are ORed, while filters on different table columns are ANDed.
        */
        public filter(aFilters: {}, sFilterType?: sap.ui.model.FilterType): this;

        /**
            * Filters the list.
         * 
         * When using sap.ui.model.Filter the filters are first grouped according to their binding path. All filters belonging to a group are combined with OR and after that the results of all groups are combined with AND. Usually this means, all filters applied to a single table column are combined with OR, while filters on different table columns are combined with AND. Please note that a custom filter function is not supported.
        */
        public filter(aFilters: {} | {}, sFilterType: sap.ui.model.FilterType): this;

        /**
            * Return contexts for the list
        */
        protected getContexts(iStartIndex?: number, iLength?: number, iThreshold?: number): {};

        /**
            * Get a download URL with the specified format considering the sort/filter/custom parameters.
        */
        public getDownloadUrl(sFormat: string): string;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataListBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Initialize the binding. The message should be called when creating a binding. The default implementation calls checkUpdate(true).
        */
        protected initialize(): any;

        /**
            * Initialize binding. Fires a change if data is already available ($expand) or a refresh. If metadata is not yet available, do nothing, method will be called again when metadata is loaded.
        */
        protected initialize(): any;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate?: boolean): any;

        /**
            * Sorts the list.
        */
        public sort(aSorters: Sorter | any[]): this;

    }
}