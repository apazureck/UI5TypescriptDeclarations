declare module 'sap/ui/model/odata/v2/ODataListBinding' {
    import { Filter } from 'sap/ui/model/Filter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { ODataModel } from 'sap/ui/model/odata/v2/ODataModel';
    import { Context } from 'sap/ui/model/Context';
    import { ListBinding, IListBindingSettings } from 'sap/ui/model/ListBinding';

    export interface IODataListBindingSettings extends IListBindingSettings {
    }

    /**
    
    */
    export class ODataListBinding extends ListBinding {

        /**
            
        */
        public constructor(oModel: ODataModel, sPath: string, oContext: Context, aSorters: Sorter | {}, aFilters: Filter | {}, mParameters: { expand?: string, select?: string, custom?: any, countMode?: sap.ui.model.odata.CountMode, operationMode?: sap.ui.model.odata.OperationMode, faultTolerant?: boolean, batchGroupId?: string, threshold?: number, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.v2.ODataListBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ListBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Filters the list.
         * 
         * When using `sap.ui.model.Filter` the filters are first grouped according to their binding path. All filters belonging to the same group are combined with OR and after that the results of all groups are combined with AND. Usually this means, all filters applied to a single table column are combined with OR, while filters on different table columns are combined with AND. Please note that a custom filter function is only supported with operation mode `sap.ui.model.odata.OperationMode.Client`.
        */
        public filter(aFilters: Filter | {}, sFilterType: sap.ui.model.FilterType, bReturnSuccess?: boolean): this;

        /**
            * Return contexts for the list.
        */
        protected getContexts(iStartIndex?: number, iLength?: number, iThreshold?: number): {};

        /**
            * Get a download URL with the specified format considering the sort/filter/custom parameters.
        */
        public getDownloadUrl(sFormat: string): string;

        /**
            * Return the length of the list.
         * 
         * In case the final length is unknown (e.g. when searching on a large dataset), this will return an estimated length.
        */
        public getLength(): number;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v2.ODataListBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Initialize binding.
         * 
         * Fires a change if data is already available ($expand) or a refresh. If metadata is not yet available, do nothing, method will be called again when metadata is loaded.
        */
        protected initialize(): this;

        /**
            * Initialize the binding. The message should be called when creating a binding. The default implementation calls checkUpdate(true).
        */
        protected initialize(): any;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate?: boolean, sGroupId?: string): any;

        /**
            * Sorts the list.
        */
        public sort(aSorters: Sorter | {}, bReturnSuccess?: boolean): this;

    }
}