declare module 'sap/ui/model/odata/v4/ODataListBinding' {
    import { Event } from 'sap/ui/base/Event';
    import { Context } from 'sap/ui/model/odata/v4/Context';
    import { Filter } from 'sap/ui/model/Filter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { ODataModel } from 'sap/ui/model/odata/v4/ODataModel';
    import { Context as sap_ui_model_Context } from 'sap/ui/model/Context';
    import { ListBinding, IListBindingSettings } from 'sap/ui/model/ListBinding';

    export interface IODataListBindingSettings extends IListBindingSettings {
    }

    /**
    
    */
    export class ODataListBinding extends ListBinding {

        /**
            * Do ** NOT ** call this private constructor, but rather use {@link sap.ui.model.odata.v4.ODataModel#bindList} instead!
        */
        public constructor(oModel: ODataModel, sPath: string, oContext: sap_ui_model_Context, vSorters: Sorter | {}, vFilters: Filter | {}, mParameters: {});


        /**
            * Changes this binding's parameters and refreshes the binding.
         * 
         * If there are pending changes an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #changeParameters}.
         * 
         * The parameters are changed according to the given map of parameters: Parameters with an `undefined` value are removed, the other parameters are set, and missing parameters remain unchanged.
        */
        public changeParameters(mParameters: {}): any;

        /**
            * Creates a new entity and inserts it at the beginning of the list. As long as the binding contains an entity created via this function, you cannot create another entity. This is only possible after the creation of the entity has been successfully sent to the server and you have called {@link #refresh} at the (parent) binding, which is absolute or not relative to a {@link sap.ui.model.odata.v4.Context}, or the new entity is deleted in between.
         * 
         * For creating the new entity, the binding's update group ID is used, see binding parameter $$updateGroupId of {@link sap.ui.model.odata.v4.ODataModel#bindList}.
         * 
         * You can call {@link sap.ui.model.odata.v4.Context#delete} to delete the created context again. As long as the context is transient (see {@link sap.ui.model.odata.v4.Context#isTransient}), {@link #resetChanges} and a call to {@link sap.ui.model.odata.v4.ODataModel#resetChanges} with the update group ID as parameter also delete the created context together with other changes.
         * 
         * If the creation of the entity on the server failed, the creation is repeated automatically. If the binding's update group ID has {@link sap.ui.model.odata.v4.SubmitMode.API}, it is repeated with the next call of {@link sap.ui.model.odata.v4.ODataModel#submitBatch}. Otherwise it is repeated with the next update for the entity.
        */
        public create(oInitialData?: {}): Context;

        /**
            * Destroys the object. The object must not be used anymore after this function was called.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.ODataListBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ListBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Filters the list with the given filters.
         * 
         * If there are pending changes an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #filter}.
        */
        public filter(vFilters?: Filter | {}, sFilterType?: sap.ui.model.FilterType): this;

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
            * Returns already created binding contexts for all entities in this list binding for the range determined by the given start index `iStart` and `iLength`. If at least one of the entities in the given range has not yet been loaded, fires a {@link #event:change} event on this list binding once these entities have been loaded ** asynchronously **. A further call to this method in the 'change' event handler with the same index range then yields the updated array of contexts.
        */
        protected getContexts(iStart?: number, iLength?: number, iMaximumPrefetchSize?: number): {};

        /**
            * Returns the contexts that were requested by a control last time. Does not trigger a data request. In the time between the {@link #event:dataRequested} event and the {@link #event:dataReceived} event, the resulting array contains `undefined` at those indexes where the data is not yet available.
        */
        public getCurrentContexts(): {};

        /**
            * Returns list of distinct values for the given relative binding path
        */
        public getDistinctValues(sPath: string): any[];

        /**
            * Method not supported
        */
        public getDistinctValues(): any | any[];

        /**
            * Returns the header context which allows binding to `$count`. If known, the value of such a binding is the element count of the collection on the server. Otherwise it is `undefined`. The value is a number and its type is `Edm.Int64`.
         * 
         * The count is known to the binding in the following situations:  <li>It has been requested from the server via the system query option `$count`. <li>A "short read" in a paged collection (the server delivered less elements than requested) indicated that the server has no more unread elements. <li>It has been read completely in one request, for example an embedded collection via `$expand`. 
         * 
         * The `$count` is unknown, if the binding is relative, but has no context.
        */
        public getHeaderContext(): Context;

        /**
            * Returns the number of entries in the list. As long as the client does not know the size on the server an estimated length is returned.
        */
        public getLength(): number;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.ODataListBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns `true` if this binding or its dependent bindings have pending changes, meaning updates that have not yet been successfully sent to the server.
        */
        public hasPendingChanges(): boolean;

        /**
            * Initializes the OData list binding. Fires a 'change' event in case the binding has a resolved path.
        */
        protected initialize(): any;

        /**
            * Returns whether the binding is initial, which means it did not get an initial value yet
        */
        public isInitial(): boolean;

        /**
            * Method not supported
        */
        public isInitial(): any | boolean;

        /**
            * Returns `true` if the length has been determined by the data returned from server. If the length is a client side estimation `false` is returned.
        */
        public isLengthFinal(): boolean;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Refreshes the binding. Prompts the model to retrieve data from the server using the given group ID and notifies the control that new data is available.
         * 
         * Refresh is supported for bindings which are not relative to a {@link sap.ui.model.odata.v4.Context}.
         * 
         * Note: When calling {@link #refresh} multiple times, the result of the request triggered by the last call determines the binding's data; it is ** independent ** of the order of calls to {@link sap.ui.model.odata.v4.ODataModel#submitBatch} with the given group ID.
         * 
         * If there are pending changes, an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #refresh}.
        */
        public refresh(sGroupId?: string): any;

        /**
            * Resets all pending changes of this binding, see {@link #hasPendingChanges}. Resets also invalid user input.
        */
        public resetChanges(): any;

        /**
            * Method not supported
        */
        public resume(): any;

        /**
            * Sort the entries represented by this list binding according to the given sorters. The sorters are stored at this list binding and they are used for each following data request.
         * 
         * If there are pending changes an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #sort}.
        */
        public sort(vSorters?: Sorter | {}): this;

        /**
            * Sorts the list according to the sorter object
        */
        public sort(aSorters: Sorter | any[]): this;

        /**
            * Method not supported
        */
        public suspend(): any;

        /**
            * Returns a string representation of this object including the binding path. If the binding is relative, the parent path is also given, separated by a '|'.
        */
        public toString(): string;

    }
}