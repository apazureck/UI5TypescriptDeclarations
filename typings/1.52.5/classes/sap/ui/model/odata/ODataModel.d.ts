declare module 'sap/ui/model/odata/ODataModel' {
    import { Context } from 'sap/ui/model/Context';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Filter } from 'sap/ui/model/Filter';
    import { ListBinding } from 'sap/ui/model/ListBinding';
    import { ODataAnnotations } from 'sap/ui/model/odata/ODataAnnotations';
    import { ODataMetadata } from 'sap/ui/model/odata/ODataMetadata';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataMetaModel } from 'sap/ui/model/odata/ODataMetaModel';
    import { MetaModel } from 'sap/ui/model/MetaModel';
    import { Model, IModelSettings } from 'sap/ui/model/Model';

    export interface IODataModelSettings extends IModelSettings {
    }

    /**
    
    */
    export class ODataModel extends Model {

        /**
            * Constructor for a new ODataModel.
        */
        public constructor(sServiceUrl: string, mParameters: { json?: boolean, user?: string, password?: string, headers?: any, tokenHandling?: boolean, withCredentials?: boolean, loadMetadataAsync?: {}, maxDataServiceVersion?: any, useBatch?: boolean, refreshAfterChange?: boolean, annotationURI?: string | {}, loadAnnotationsJoined?: boolean, serviceUrlParams?: any, metadataUrlParams?: any, defaultCountMode?: string, metadataNamespaces?: any, skipMetadataAnnotationParsing?: boolean, });


        /**
            * Adds (a) new URL(s) to the be parsed for OData annotations, which are then merged into the annotations object which can be retrieved by calling the getServiceAnnotations()-method. If a $metadata url is passed the data will also be merged into the metadata object, which can be reached by calling the getServiceMetadata() method.
        */
        protected addAnnotationUrl(vUrl: string | {}): any;

        /**
            * Adds new xml content to be parsed for OData annotations, which are then merged into the annotations object which can be retrieved by calling the getServiceAnnotations()-method.
        */
        protected addAnnotationXML(sXMLContent: string, bSuppressEvents?: boolean): any;

        /**
            * Appends the change batch operations to the end of the batch stack. Only PUT, POST or DELETE batch operations should be included in the specified array. The operations in the array will be included in a single changeset. To embed change operations in different change sets call this method with the corresponding change operations again. If an illegal batch operation is added to the change set nothing will be performed and false will be returned.
        */
        public addBatchChangeOperations(aChangeOperations: {}): any;

        /**
            * Appends the read batch operations to the end of the batch stack. Only GET batch operations should be included in the specified array. If an illegal batch operation is added to the batch nothing will be performed and false will be returned.
        */
        public addBatchReadOperations(aReadOperations: {}): any;

        /**
            * Attach event-handler `fnFunction` to the 'annotationsFailed' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachAnnotationsFailed(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'annotationsFailed' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachAnnotationsFailed(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'annotationsLoaded' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachAnnotationsLoaded(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'annotationsLoaded' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachAnnotationsLoaded(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'metadataFailed' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachMetadataFailed(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'metadataFailed' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachMetadataFailed(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'metadataLoaded' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachMetadataLoaded(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'metadataLoaded' event of this `sap.ui.model.odata.ODataModel`.
        */
        public attachMetadataLoaded(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Implement in inheriting classes
        */
        public bindList(sPath: string, oContext?: {}, aSorters?: Sorter, aFilters?: any[], mParameters?: {}): ListBinding;

        /**
            * Creates a new list binding for this model.
        */
        public bindList(sPath: string, oContext?: Context, aSorters?: Sorter | {}, aFilters?: Filter | {}, mParameters?: { expand?: string, select?: string, custom?: any, countMode?: sap.ui.model.odata.CountMode, }): ListBinding;

        /**
            * Trigger a request to the function import odata service that was specified in the model constructor.
        */
        public callFunction(sFunctionName: string, mParameters?: { method?: string, urlParameters?: any, context?: {}, success?: (() => any), error?: (() => any), async?: boolean, }): {};

        /**
            * Removes all operations in the current batch.
        */
        public clearBatch(): any;

        /**
            * Trigger a POST request to the odata service that was specified in the model constructor. Please note that deep creates are not supported and may not work.
        */
        public create(sPath: string, oData: {}, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), async?: boolean, urlParameters?: any, }): {};

        /**
            * Creates a single batch operation (read or change operation) which can be used in a batch request.
        */
        public createBatchOperation(sPath: string, sMethod: string, oData?: {}, oParameters?: { sETag?: string, }): any;

        /**
            * Creates a new entry object which is described by the metadata of the entity type of the specified sPath Name. A context object is returned which can be used to bind against the newly created object.
         * 
         * For each created entry a request is created and stored in a request queue. The request queue can be submitted by calling submitChanges. To delete a created entry from the request queue call deleteCreateEntry.
         * 
         * The optional vProperties parameter can be used as follows:
         * 
         * - vProperties could be an array containing the property names which should be included in the new entry. Other properties defined in the entity type are not included. - vProperties could be an object which includes the desired properties and the values which should be used for the created entry.
         * 
         * If vProperties is not specified, all properties in the entity type will be included in the created entry.
         * 
         * If there are no values specified the properties will have undefined values.
         * 
         * Please note that deep creates (including data defined by navigationproperties) are not supported
        */
        public createEntry(sPath: string, vProperties: any[] | {}): Context;

        /**
            * Creates the key from the given collection name and property map
        */
        public createKey(sCollection: string, oKeyParameters: {}, bDecode: boolean): any;

        /**
            * Deletes a created entry from the request queue and the model.
        */
        public deleteCreatedEntry(oContext: Context): any;

        /**
            
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'annotationsFailed' event of this `sap.ui.model.odata.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachAnnotationsFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'annotationsLoaded' event of this `sap.ui.model.odata.ODataModel`.
        */
        public detachAnnotationsLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'metadataFailed' event of this `sap.ui.model.odata.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMetadataFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'metadataLoaded' event of this `sap.ui.model.odata.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMetadataLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event annotationsFailed to attached listeners.
        */
        protected fireAnnotationsFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): this;

        /**
            * Fire event annotationsLoaded to attached listeners.
        */
        protected fireAnnotationsLoaded(mArguments?: { annotations?: ODataAnnotations, }): this;

        /**
            * Fire event metadataFailed to attached listeners.
        */
        protected fireMetadataFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): this;

        /**
            * Fire event metadataLoaded to attached listeners.
        */
        protected fireMetadataLoaded(mArguments?: { metadata?: ODataMetadata, }): this;

        /**
            * Force no caching
        */
        public forceNoCache(bForceNoCache?: boolean): any;

        /**
            * Return requested data as object if the data has already been loaded and stored in the model.
        */
        public getData(sPath: string, oContext?: {}, bIncludeExpandEntries?: boolean): {};

        /**
            * Returns the default count mode for retrieving the count of collections
        */
        public getDefaultCountMode(): sap.ui.model.odata.CountMode;

        /**
            * Returns all headers and custom headers which are stored in the OData model.
        */
        public getHeaders(): {};

        /**
            * Returns the key part from the entry URI or the given context or object
        */
        public getKey(oObject: {} | Context, bDecode: boolean): any;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the meta model associated with this model if it is available for the concrete model type.
        */
        public getMetaModel(): MetaModel;

        /**
            * Returns an instance of an OData meta model which offers a unified access to both OData V2 metadata and V4 annotations. It uses the existing {@link sap.ui.model.odata.ODataMetadata} as a foundation and merges V4 annotations from the existing {@link sap.ui.model.odata.ODataAnnotations} directly into the corresponding model element.
         * 
         * ** BEWARE: ** Access to this OData meta model will fail before the promise returned by {@link sap.ui.model.odata.ODataMetaModel#loaded loaded} has been resolved!
        */
        public getMetaModel(): ODataMetaModel | MetaModel;

        /**
            * Returns the value for the property with the given `sPath`. If the path points to a navigation property which has been loaded via $expand then the `bIncludeExpandEntries` parameter determines if the navigation property should be included in the returned value or not. Please note that this currently works for 1..1 navigation properties only.
        */
        public getProperty(sPath: string, oContext?: {}, bIncludeExpandEntries?: boolean): any;

        /**
            * Returns the current security token. If the token has not been requested from the server it will be requested first.
        */
        public getSecurityToken(): string;

        /**
            * Return the annotation object. Please note that when using the model with bLoadMetadataAsync = true then this function might return undefined because the metadata has not been loaded yet. In this case attach to the `annotationsLoaded` event to get notified when the annotations are available and then call this function.
        */
        public getServiceAnnotations(): {};

        /**
            * Return the metadata object. Please note that when using the model with bLoadMetadataAsync = true then this function might return undefined because the metadata has not been loaded yet. In this case attach to the `metadataLoaded` event to get notified when the metadata is available and then call this function.
        */
        public getServiceMetadata(): {};

        /**
            * Checks if there exist pending changes in the model created by the setProperty method.
        */
        public hasPendingChanges(): boolean;

        /**
            * Returns whether this model supports the $count on its collections This method is deprecated, please use getDefaultCountMode instead.
        */
        public isCountSupported(): boolean;

        /**
            * Trigger a GET request to the odata service that was specified in the model constructor. The data will not be stored in the model. The requested data is returned with the response.
        */
        public read(sPath: string, mParameters?: { context?: {}, urlParameters?: any, async?: boolean, filters?: any[], sorters?: any[], success?: (() => any), error?: (() => any), }): {};

        /**
            * Refresh the model. This will check all bindings for updated data and update the controls if data has been changed.
        */
        public refresh(bForceUpdate?: boolean, bRemoveData?: boolean): any;

        /**
            * refreshes the metadata for model, e.g. in case the first request for metadata has failed
        */
        public refreshMetadata(): any;

        /**
            * refresh XSRF token by performing a GET request against the service root URL.
        */
        public refreshSecurityToken(fnSuccess?: (() => any), fnError?: (() => any), bAsync?: boolean): {};

        /**
            * Trigger a DELETE request to the odata service that was specified in the model constructor.
        */
        public remove(sPath: string, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), eTag?: string, payload?: {}, async?: boolean, urlParameters?: any, }): {};

        /**
            * Resets the collected changes by the setProperty method and reloads the data from the server.
        */
        public resetChanges(fnSuccess?: (() => any), fnError?: (() => any)): any;

        /**
            * Sets whether this OData service supports $count on its collections. This method is deprecated, please use setDefaultCountMode instead.
        */
        public setCountSupported(bCountSupported: boolean): any;

        /**
            * Sets the default mode how to retrieve the item count for a collection in this model.
         * 
         * The count can be determined in the following ways  * by sending a separate `$count` request * by adding parameter `$inlinecount=allpages` to one or all data requests * a combination of the previous two * not at all (questions about the size of the collection can't be answered then)  See {@link sap.ui.model.odata.CountMode} for all enumeration values and more details.
         * 
         * Note that a call to this method does not modify the count mode for existing list bindings, only bindings that are created afterwards will use the new mode when no mode is defined at their creation.
         * 
         * If no default count mode is set for an `ODataModel` (v1), the mode `Both` will be used for compatibility reasons.
        */
        public setDefaultCountMode(sCountMode: sap.ui.model.odata.CountMode): any;

        /**
            * Set custom headers which are provided in a key/value map. These headers are used for requests against the OData backend. Private headers which are set in the ODataModel cannot be modified. These private headers are: accept, accept-language, x-csrf-token, MaxDataServiceVersion, DataServiceVersion.
         * 
         * To remove these headers simply set the mCustomHeaders parameter to null. Please also note that when calling this method again all previous custom headers are removed unless they are specified again in the mCustomHeaders parameter.
        */
        public setHeaders(mHeaders: {}): any;

        /**
            * Sets a new value for the given property `sPropertyName` in the model without triggering a server request. This can be done by the submitChanges method.
         * 
         * Note: Only one entry of one collection can be updated at once. Otherwise a fireRejectChange event is fired.
         * 
         * Before updating a different entry the existing changes of the current entry have to be submitted or resetted by the corresponding methods: submitChanges, resetChanges.
         * 
         * IMPORTANT: All pending changes are resetted in the model if the application triggeres any kind of refresh on that entry. Make sure to submit the pending changes first. To determine if there are any pending changes call the hasPendingChanges method.
        */
        public setProperty(sPath: string, oValue: any, oContext?: {}, bAsyncUpdate?: boolean): boolean;

        /**
            * Enable/Disable automatic updates of all Bindings after change operations
        */
        public setRefreshAfterChange(bRefreshAfterChange: boolean): any;

        /**
            * Enable/Disable XCSRF-Token handling
        */
        public setTokenHandlingEnabled(bTokenHandling?: boolean): any;

        /**
            * Enable/Disable batch for all requests
        */
        public setUseBatch(bUseBatch?: boolean): any;

        /**
            * Submits the collected changes in the batch which were collected via `addBatchReadOperations` or `addBatchChangeOperations`. The batch will be cleared afterwards. If the batch is empty no request will be performed and false will be returned. Note: No data will be stored in the model.
        */
        public submitBatch(fnSuccess: (() => any), fnError: (() => any), bImportData: boolean): {};

        /**
            * Submits the collected changes in the batch which were collected via `addBatchReadOperations` or `addBatchChangeOperations`. The batch will be cleared afterwards. If the batch is empty no request will be performed and false will be returned. Note: No data will be stored in the model.
        */
        public submitBatch(fnSuccess: (() => any), fnError: (() => any), bAsync: boolean, bImportData: boolean): {};

        /**
            * Submits the collected changes in the batch which were collected via `addBatchReadOperations` or `addBatchChangeOperations`. The batch will be cleared afterwards. If the batch is empty no request will be performed and false will be returned. Note: No data will be stored in the model.
        */
        public submitBatch(fnSuccess: (() => any), bAsync: boolean, bImportData: boolean): {};

        /**
            * Submits the collected changes in the batch which were collected via `addBatchReadOperations` or `addBatchChangeOperations`. The batch will be cleared afterwards. If the batch is empty no request will be performed and false will be returned. Note: No data will be stored in the model.
        */
        public submitBatch(fnError: (() => any), bAsync: boolean, bImportData: boolean): {};

        /**
            * Submits the collected changes which were collected by the setProperty method. A MERGE request will be triggered to only update the changed properties. If a URI with a $expand System Query Option was used then the expand entries will be removed from the collected changes. Changes to this entries should be done on the entry itself. So no deep updates are supported.
        */
        public submitChanges(fnSuccess?: (() => any), fnError?: (() => any), oParameters?: { sETag?: string, }): {};

        /**
            * Trigger a PUT/MERGE request to the odata service that was specified in the model constructor. Please note that deep updates are not supported and may not work. These should be done seperate on the entry directly.
        */
        public update(sPath: string, oData: {}, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), merge?: boolean, eTag?: string, async?: boolean, urlParameters?: any, }): {};

        /**
            * update all bindings
        */
        public updateBindings(bForceUpdate?: boolean): any;

    }
}