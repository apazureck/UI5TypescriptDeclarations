declare module 'sap/ui/model/ListBinding' {
    import { Context } from 'sap/ui/model/Context';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Model } from 'sap/ui/model/Model';
    import { Binding, IBindingSettings } from 'sap/ui/model/Binding';

    export interface IListBindingSettings extends IBindingSettings {
    }

    /**
    
    */
    export class ListBinding extends Binding {

        /**
            * Constructor for ListBinding.
        */
        public constructor(oModel: Model, sPath: string, oContext: Context, aSorters: any[], aFilters: any[], mParameters: {});


        /**
            * Attach event-handler `fnFunction` to the 'filter' event of this `sap.ui.model.ListBinding`.
         * 
        */
        protected attachFilter(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Attach event-handler `fnFunction` to the 'sort' event of this `sap.ui.model.ListBinding`.
         * 
        */
        protected attachSort(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'filter' event of this `sap.ui.model.ListBinding`.
         * 
        */
        protected detachFilter(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'sort' event of this `sap.ui.model.ListBinding`.
         * 
        */
        protected detachSort(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Creates a new subclass of class sap.ui.model.ListBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
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
            * Returns an array of binding contexts for the bound target list.
         * 
         * ** Note: **The public usage of this method is deprecated, as calls from outside of controls will lead to unexpected side effects. For avoidance use {@link sap.ui.model.ListBinding.prototype.getCurrentContexts} instead.
        */
        protected getContexts(iStartIndex?: number, iLength?: number): {};

        /**
            * Returns an array of currently used binding contexts of the bound control
         * 
         * This method does not trigger any data requests from the backend or delta calculation, but just returns the context array as last requested by the control. This can be used by the application to get access to the data currently displayed by a list control.
        */
        public getCurrentContexts(): {};

        /**
            * Returns list of distinct values for the given relative binding path
        */
        public getDistinctValues(sPath: string): any[];

        /**
            * Gets the group for the given context. Must only be called if isGrouped() returns that grouping is enabled for this binding. The grouping will be performed using the first sorter (in case multiple sorters are defined).
        */
        public getGroup(oContext: Context): {};

        /**
            * Returns the number of entries in the list. This might be an estimated or preliminary length, in case the full length is not known yet, see method isLengthFinal().
        */
        public getLength(): number;

        /**
            * Returns a metadata object for class sap.ui.model.ListBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Indicates whether grouping is enabled for the binding. Grouping is enabled for a list binding, if at least one sorter exists on the binding and the first sorter is a grouping sorter.
        */
        public isGrouped(): boolean;

        /**
            * Returns whether the length which can be retrieved using getLength() is a known, final length, or a preliminary or estimated length which may change if further data is requested.
        */
        public isLengthFinal(): boolean;

        /**
            * Sorts the list according to the sorter object
        */
        public sort(aSorters: Sorter | any[]): this;

    }
}