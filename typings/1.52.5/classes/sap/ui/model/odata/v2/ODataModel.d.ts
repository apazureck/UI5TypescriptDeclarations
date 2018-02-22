declare module 'sap/ui/model/odata/v2/ODataModel' {
    import { Event } from 'sap/ui/base/Event';
    import { Context } from 'sap/ui/model/Context';
    import { ContextBinding } from 'sap/ui/model/ContextBinding';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Filter } from 'sap/ui/model/Filter';
    import { ListBinding } from 'sap/ui/model/ListBinding';
    import { PropertyBinding } from 'sap/ui/model/PropertyBinding';
    import { TreeBinding } from 'sap/ui/model/TreeBinding';
    import { ODataAnnotations } from 'sap/ui/model/odata/v2/ODataAnnotations';
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
        public constructor(serviceUrl: string | {}, mParameters: { serviceUrl?: {}, json?: boolean, user?: string, password?: string, headers?: any, tokenHandling?: boolean, withCredentials?: boolean, maxDataServiceVersion?: any, useBatch?: boolean, refreshAfterChange?: boolean, annotationURI?: string | {}, loadAnnotationsJoined?: boolean, serviceUrlParams?: any, metadataUrlParams?: any, defaultBindingMode?: sap.ui.model.BindingMode, defaultCountMode?: sap.ui.model.odata.CountMode, preliminaryContext?: string, defaultOperationMode?: sap.ui.model.odata.OperationMode, defaultUpdateMethod?: sap.ui.model.odata.UpdateMethod, metadataNamespaces?: { [key: string]: string }, skipMetadataAnnotationParsing?: boolean, disableHeadRequestForToken?: boolean, sequentializeRequests?: boolean, disableSoftStateHeader?: boolean, bindableResponseHeaders?: {}, });


        /**
            * Adds (a) new URL(s) whose content should be parsed as OData annotations, which are then merged into the annotations object which can be retrieved by calling the {@link #getServiceAnnotations}-method. If a `$metadata` URL is passed, the data will also be merged into the metadata object, which can be reached by calling the {@link #getServiceMetadata} method.
        */
        protected addAnnotationUrl(vUrl: string | {}): any;

        /**
            * Adds new XML content to be parsed for OData annotations, which are then merged into the annotations object which can be retrieved by calling the {@link #getServiceAnnotations}-method.
        */
        protected addAnnotationXML(sXMLContent: string, bSuppressEvents?: boolean): any;

        /**
            * Returns a promise that resolves with an array containing information about the initially loaded annotations.
         * 
         * ** Important **: This covers the annotations that were given to the model constructor, not the ones that might have been added later on using the protected API method {@link #addAnnotationUrl}. In order to get information about those, the event `annotationsLoaded` can be used.
        */
        public annotationsLoaded(): any;

        /**
            * Attach event-handler `fnFunction` to the `annotationsFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachAnnotationsFailed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * An array of Errors */
            result: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `annotationsFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachAnnotationsFailed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * An array of Errors */
            result: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `annotationsLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachAnnotationsLoaded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * An array consisting of one or several annotation sources and/or errors containing a source property and error details. */
            result: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `annotationsLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachAnnotationsLoaded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * An array consisting of one or several annotation sources and/or errors containing a source property and error details. */
            result: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `batchRequestCompleted` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestCompleted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The request ID */
            ID: string, /* * The URL which is sent to the backend */
            url: string, /* * The HTTP method */
            method: string, /* * The request headers */
            headers: any, /* * Request was successful or not */
            success: boolean, /* * If the request is synchronous or asynchronous (if available) */
            async: boolean, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers, response object */
            requests: any[], /* * The response object - empty object if no response: The response object contains the following properties: message, success, headers, statusCode, statusText, responseText */
            response: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `batchRequestCompleted` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestCompleted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The request ID */
            ID: string, /* * The URL which is sent to the backend */
            url: string, /* * The HTTP method */
            method: string, /* * The request headers */
            headers: any, /* * Request was successful or not */
            success: boolean, /* * If the request is synchronous or asynchronous (if available) */
            async: boolean, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers, response object */
            requests: any[], /* * The response object - empty object if no response: The response object contains the following properties: message, success, headers, statusCode, statusText, responseText */
            response: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `batchRequestFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestFailed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The request ID */
            ID: string, /* * The URL which is sent to the backend */
            url: string, /* * The HTTP method */
            method: string, /* * The request headers */
            headers: any, /* * If the request is synchronous or asynchronous (if available) */
            async: boolean, /* * Request was successful or not */
            success: boolean, /* * The response object - empty object if no response The response object contains the following properties: message, success, headers, statusCode, statusText, responseText */
            response: {}, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers, response object */
            requests: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `batchRequestFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestFailed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The request ID */
            ID: string, /* * The URL which is sent to the backend */
            url: string, /* * The HTTP method */
            method: string, /* * The request headers */
            headers: any, /* * If the request is synchronous or asynchronous (if available) */
            async: boolean, /* * Request was successful or not */
            success: boolean, /* * The response object - empty object if no response The response object contains the following properties: message, success, headers, statusCode, statusText, responseText */
            response: {}, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers, response object */
            requests: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `requestSent` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestSent<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The URL which is sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers */
            requests: any[],
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `requestSent` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachBatchRequestSent<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The URL which is sent to the backend */
            url: string, /* * The type of the request (if available) */
            type?: string, /* * If the request is synchronous or asynchronous (if available) */
            async?: boolean, /* * Array of embedded requests ($batch) Each request object within the array contains the following properties: url, method, headers */
            requests: any[],
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `metadataFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachMetadataFailed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The parsed metadata */
            metadata: string, /* * A text that describes the failure. */
            message: string, /* * HTTP status code returned by the request (if available) */
            statusCode: string, /* * The status as a text, details not specified, intended only for diagnosis output */
            statusText: string, /* * Response that has been received for the request, as a text string */
            responseText: string, /* * The response object - empty object if no response */
            response: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `metadataFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachMetadataFailed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The parsed metadata */
            metadata: string, /* * A text that describes the failure. */
            message: string, /* * HTTP status code returned by the request (if available) */
            statusCode: string, /* * The status as a text, details not specified, intended only for diagnosis output */
            statusText: string, /* * Response that has been received for the request, as a text string */
            responseText: string, /* * The response object - empty object if no response */
            response: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `metadataLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachMetadataLoaded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The parsed metadata */
            metadata: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `metadataLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        attachMetadataLoaded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The parsed metadata */
            metadata: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Creates new context binding for this model.
        */
        public bindContext(sPath: string, oContext: Context, mParameters?: any): ContextBinding;

        /**
            * Implement in inheriting classes
        */
        public bindList(sPath: string, oContext?: {}, aSorters?: Sorter, aFilters?: any[], mParameters?: {}): ListBinding;

        /**
            * Creates a new list binding for this model.
        */
        public bindList(sPath: string, oContext?: Context, aSorters?: Sorter | {}, aFilters?: Filter | {}, mParameters?: { expand?: string, select?: string, custom?: any, countMode?: sap.ui.model.odata.CountMode, operationMode?: sap.ui.model.odata.OperationMode, faultTolerant?: boolean, batchGroupId?: string, threshold?: number, }): ListBinding;

        /**
            * Creates a new property binding for this model.
        */
        public bindProperty(sPath: string, oContext?: {}, mParameters?: any): PropertyBinding;

        /**
            * Implement in inheriting classes
        */
        public bindProperty(sPath: string, oContext?: {}, mParameters?: {}): PropertyBinding;

        /**
            * Creates a new tree binding for this model.
        */
        public bindTree(sPath: string, oContext?: Context, aFilters?: Filter | {}, mParameters?: { treeAnnotationProperties?: {}, navigation?: {}, numberOfExpandedLevels?: number, rootLevel?: number, batchGroupId?: string, groupId?: string, operationMode?: sap.ui.model.odata.OperationMode, threshold?: number, useServersideApplicationFilters?: boolean, treeState?: boolean, }, aSorters?: {}): TreeBinding;

        /**
            * Implement in inheriting classes
        */
        public bindTree(sPath: string, oContext?: {}, aFilters?: any[], mParameters?: {}, aSorters?: any[]): TreeBinding;

        /**
            * Trigger a request to the function import OData service that was specified in the model constructor.
         * 
         * If the return type of the function import is either an entity type or a collection of an entity type, then the changes are reflected in the model. Otherwise they are ignored, and the `response` can be processed in the `success` callback.
        */
        public callFunction(sFunctionName: string, mParameters?: { method?: string, urlParameters?: any, success?: (() => any), error?: (() => any), headers?: any, batchGroupId?: string, groupId?: string, eTag?: string, changeSetId?: string, refreshAfterChange?: string, }): {};

        /**
            * Trigger a `POST` request to the OData service that was specified in the model constructor.
         * 
         * Please note that deep creates are not supported and may not work.
        */
        public create(sPath: string, oData: {}, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), urlParameters?: any, headers?: any, batchGroupId?: string, groupId?: string, changeSetId?: string, refreshAfterChange?: string, }): {};

        /**
            * Creates a binding context for the given path.
         * 
         * If the data of the context is not yet available, it can not be created, but first the entity needs to be fetched from the server asynchronously. In case no callback function is provided, the request will not be triggered.
         * 
         * If a callback function is given, the created binding context for a fetched entity is passed as argument to the given callback function.
        */
        public createBindingContext(sPath: string, oContext?: {}, mParameters?: { expand?: string, select?: string, preliminaryContext?: boolean, custom?: any, }, fnCallBack?: (() => any), bReload?: boolean): Context;

        /**
            * Implement in inheriting classes
        */
        public createBindingContext(sPath: string, oContext?: {}, mParameters?: {}, fnCallBack?: (() => any), bReload?: boolean): Context;

        /**
            * Creates a new entry object which is described by the metadata of the entity type of the specified `sPath` Name. A context object is returned which can be used to bind against the newly created object.
         * 
         * For each created entry a request is created and stored in a request queue. The request queue can be submitted by calling {@link #submitChanges}. To delete a created entry from the request queue call {@link #deleteCreatedEntry}.
         * 
         * The optional parameter `mParameters.properties` can be used as follows:  * `properties` could be an array containing the property names which should be included in the new entry. Other properties defined in the entity type won't be included. * `properties` could be an object which includes the desired properties and the corresponding values which should be used for the created entry.  If `properties` is not specified, all properties in the entity type will be included in the created entry.
         * 
         * If there are no values specified, the properties will have `undefined` values.
         * 
         * Please note that deep creates (including data defined by navigation properties) are not supported.
        */
        public createEntry(sPath: string, mParameters: { properties?: any[] | {}, batchGroupId?: string, groupId?: string, changeSetId?: string, context?: Context, success?: (() => any), error?: (() => any), headers?: any, urlParameters?: any, refreshAfterChange?: string, }): Context;

        /**
            * Creates the key from the given collection name and property map.
         * 
         * Please make sure that the metadata document is loaded before using this function.
        */
        public createKey(sCollection: string, oKeyProperties: {}): string;

        /**
            * Deletes a created entry from the request queue and from the model.
        */
        public deleteCreatedEntry(oContext: Context): any;

        /**
            
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the `annotationsFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachAnnotationsFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `annotationsLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
        */
        public detachAnnotationsLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `batchRequestCompleted` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBatchRequestCompleted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `batchRequestFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBatchRequestFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `batchRequestSent` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBatchRequestSent(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `metadataFailed` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMetadataFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `metadataLoaded` event of this `sap.ui.model.odata.v2.ODataModel`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMetadataLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v2.ODataModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event `annotationsFailed` to attached listeners.
        */
        protected fireAnnotationsFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): this;

        /**
            * Fire event `annotationsLoaded` to attached listeners.
        */
        protected fireAnnotationsLoaded(mArguments?: { annotations?: ODataAnnotations, }): this;

        /**
            * Fire event `batchRequestCompleted` to attached listeners.
        */
        protected fireBatchRequestCompleted(mArguments: { ID: string, url: string, method: string, headers: any, success: boolean, async: boolean, requests: any[], response: {}, }): this;

        /**
            * Fire event `batchRequestFailed` to attached listeners.
        */
        protected fireBatchRequestFailed(mArguments: { ID: string, url: string, method: string, headers: any, async: boolean, success: boolean, response: {}, requests: any[], }): this;

        /**
            * Fire event `batchRequestSent` to attached listeners.
        */
        protected fireBatchRequestSent(mArguments?: { url?: string, type?: string, async?: boolean, requests: any[], }): this;

        /**
            * Fire event `metadataFailed` to attached listeners.
        */
        protected fireMetadataFailed(mArguments?: { message?: string, statusCode?: string, statusText?: string, responseText?: string, }): this;

        /**
            * Fire event `metadataLoaded` to attached listeners.
        */
        protected fireMetadataLoaded(mArguments?: { metadata?: ODataMetadata, }): this;

        /**
            * Force the update on the server of an entity by setting its ETag to '*'.
         * 
         * ETag handling must be active so the force update will work.
        */
        public forceEntityUpdate(sKey: string): any;

        /**
            * Returns the definition of batch groups per entity type for two-way binding changes
        */
        public getChangeBatchGroups(): any;

        /**
            * Returns the definition of groups per entity type for two-way binding changes
        */
        public getChangeGroups(): any;

        /**
            * Return requested data as object if the data has already been loaded and stored in the model.
        */
        public getData(sPath: string, oContext?: {}, bIncludeExpandEntries?: boolean): {};

        /**
            * Returns the default count mode for retrieving the count of collections
        */
        public getDefaultCountMode(): sap.ui.model.odata.CountMode;

        /**
            * Returns the array of batch group IDs that are set as deferred
        */
        public getDeferredBatchGroups(): any[];

        /**
            * Returns the array of group IDs that are set as deferred.
        */
        public getDeferredGroups(): any[];

        /**
            * Returns the ETag for a given binding path/context or data object.
        */
        public getETag(sPath?: string, oContext?: Context, oEntity?: {}): string;

        /**
            * Returns all headers and custom headers which are stored in this OData model.
        */
        public getHeaders(): {};

        /**
            * Returns the key part for the given the canonical entry URI, model context or data object or `undefined` when the `vValue` can't be interpreted.
        */
        public getKey(vValue: string | {} | Context): string;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v2.ODataModel.
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
            * Returns an instance of an OData meta model which offers a unified access to both OData V2 metadata and V4 annotations. It uses the existing {@link sap.ui.model.odata.ODataMetadata} as a foundation and merges V4 annotations from the existing {@link sap.ui.model.odata.v2.ODataAnnotations} directly into the corresponding model element.
         * 
         * ** BEWARE: ** Access to this OData meta model will fail before the promise returned by {@link sap.ui.model.odata.ODataMetaModel#loaded loaded} has been resolved!
        */
        public getMetaModel(): ODataMetaModel | MetaModel;

        /**
            * Returns the JSON object for an entity with the given `sPath` and optional `oContext`.
         * 
         * With the `mParameters.select` parameter it is possible to specify comma-separated property or navigation property names which should be included in the result object. This works like the OData `$select` parameter. With the `mParameters.expand` parameter it is possible to specify comma-separated navigation property names which should be included inline in the result object. This works like the OData `$expand` parameter.
         * 
         * This method will return a copy and not a reference of the entity. It does not load any data and may not return all requested data if it is not available/loaded. If select entries are contained in the parameters and not all selected properties are available, this method will return `undefined` instead of incomplete data. If no select entries are defined, all properties available on the client will be returned.
         * 
         * Example:<br> `{select: "Products/ProductName, Products", expand:"Products"}` will return no properties of the entity itself, but only the ProductName property of the Products navigation property. If Products/ProductName has not been loaded before, so is not available on the client, it will return `undefined`.
        */
        public getObject(sPath: string, oContext?: {}, mParameters?: { select?: string, expand?: string, }): any;

        /**
            * Implement in inheriting classes
        */
        public getObject(sPath: string, oContext?: {}, mParameters?: {}): any;

        /**
            * Returns the original value for the property with the given path and context. The original value is the value that was last responded by the server.
        */
        public getOriginalProperty(sPath: string, oContext?: {}): any;

        /**
            * Returns the changed properties of all changed entities in a map which are still pending. The key is the string name of the entity and the value is an object which contains the changed properties.
        */
        public getPendingChanges(): any;

        /**
            * Returns the value for the property with the given `sPath`.
         * 
         * If the path points to a navigation property which has been loaded via `$expand` then the `bIncludeExpandEntries` parameter determines if the navigation property should be included in the returned value or not. Please note that this currently works for 1..1 navigation properties only.
        */
        public getProperty(sPath: string, oContext?: {}, bIncludeExpandEntries?: boolean): any;

        /**
            
        */
        public getRefreshAfterChange(): boolean;

        /**
            * Returns the current security token.
         * 
         * If the token has not been requested from the server it will be requested first (synchronously).
        */
        public getSecurityToken(): string;

        /**
            * Return the annotation object. Please note that the metadata is loaded asynchronously and this function might return undefined because the metadata has not been loaded yet. In this case attach to the `annotationsLoaded` event to get notified when the annotations are available and then call this function.
        */
        public getServiceAnnotations(): {};

        /**
            * Return the parsed XML metadata as a Javascript object.
         * 
         * Please note that the metadata is loaded asynchronously and this function might return undefined because the metadata has not been loaded yet. In this case attach to the `metadataLoaded` event to get notified when the metadata is available and then call this function.
        */
        public getServiceMetadata(): {};

        /**
            * Checks if there exist pending changes in the model created by the {@link #setProperty} method.
        */
        public hasPendingChanges(): boolean;

        /**
            * Checks if there are pending requests, either ongoing or sequential.
        */
        public hasPendingRequests(): boolean;

        /**
            * Invalidate the model data.
         * 
         * Mark all entries in the model cache as invalid. Next time a context binding or list binding is done, the entry will be detected as invalid and will be refreshed from the server.
        */
        public invalidate(fnCheckEntry?: (() => any)): any;

        /**
            * Invalidate all entries of the given entity type in the model data.
         * 
         * Mark entries of the provided entity type in the model cache as invalid. Next time a context binding or list binding is done, the entry will be detected as invalid and will be refreshed from the server.
        */
        public invalidateEntityType(sEntityType: string): any;

        /**
            * Invalidate a single entry in the model data.
         * 
         * Mark the selected entry in the model cache as invalid. Next time a context binding or list binding is done, the entry will be detected as invalid and will be refreshed from the server.
        */
        public invalidateEntry(vEntry: string | Context): any;

        /**
            * Checks whether metadata loading has failed in the past.
        */
        public isMetadataLoadingFailed(): boolean;

        /**
            * Returns a promise for the loaded state of the metadata.
         * 
         * The promise won't get rejected in case the metadata loading failed but is only resolved if the metadata is loaded successfully. If `refreshMetadata` function is called after this promise is already resolved you should rely on the promise returned by `refreshMetadata` to get information about the refreshed metadata loaded state.
        */
        public metadataLoaded(): any;

        /**
            * Trigger a `GET` request to the OData service that was specified in the model constructor.
         * 
         * The data will be stored in the model. The requested data is returned with the response.
        */
        public read(sPath: string, mParameters?: { context?: {}, urlParameters?: any, filters?: {}, sorters?: {}, success?: (() => any), error?: (() => any), batchGroupId?: string, groupId?: string, }): {};

        /**
            * Refresh the model.
         * 
         * This will check all bindings for updated data and update the controls if data has been changed.
        */
        public refresh(bForceUpdate?: boolean, bRemoveData?: boolean, sGroupId?: string): any;

        /**
            * Refreshes the metadata for this model, for example when the request for metadata has failed.
         * 
         * ** Note **: Do not use `refreshMetadata` if the metadata is outdated or should be updated. This will lead to inconsistent data in the application.
         * 
         * Returns a new promise which can be resolved or rejected depending on the metadata loading state.
        */
        public refreshMetadata(): any;

        /**
            * Refresh XSRF token by performing a GET request against the service root URL.
        */
        public refreshSecurityToken(fnSuccess?: (() => any), fnError?: (() => any), bAsync?: boolean): {};

        /**
            * Trigger a `DELETE` request to the OData service that was specified in the model constructor.
        */
        public remove(sPath: string, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), eTag?: string, urlParameters?: any, headers?: any, batchGroupId?: string, groupId?: string, changeSetId?: string, refreshAfterChange?: string, }): {};

        /**
            * Resets the changes that have been collected by the {@link #setProperty} method.
        */
        public resetChanges(aPath?: any[]): any;

        /**
            * Returns a promise, which will resolve with the security token as soon as it is available.
        */
        public securityTokenAvailable(): any;

        /**
            * Definition of batch groups per entity type for two-way binding changes.
        */
        public setChangeBatchGroups(mGroups: any): any;

        /**
            * Definition of groups per entity type for two-way binding changes.
        */
        public setChangeGroups(mGroups: any): any;

        /**
            * Sets the default mode how to retrieve the item count for a collection in this model.
         * 
         * The count can be determined in the following ways  * by sending a separate `$count` request * by adding parameter `$inlinecount=allpages` to one or all data requests * a combination of the previous two * not at all (questions about the size of the collection can't be answered then)  See {@link sap.ui.model.odata.CountMode} for all enumeration values and more details.
         * 
         * Note that a call to this method does not modify the count mode for existing list bindings, only bindings that are created afterwards will use the new mode when no mode is defined at their creation.
         * 
         * If no default count mode is set for an `ODataModel` (v2), the mode `Request` will be used.
        */
        public setDefaultCountMode(sCountMode: sap.ui.model.odata.CountMode): any;

        /**
            * Setting batch groups as deferred.
         * 
         * Requests that belong to a deferred batch group have to be sent by explicitly calling {@link #submitChanges}.
        */
        public setDeferredBatchGroups(aGroupIds: any[]): any;

        /**
            * Setting request groups as deferred.
         * 
         * Requests that belong to a deferred group will be sent by explicitly calling {@link #submitChanges}.
        */
        public setDeferredGroups(aGroupIds: any[]): any;

        /**
            * Set custom headers which are provided in a key/value map.
         * 
         * These headers are used for requests against the OData backend. Private headers which are set in the ODataModel cannot be modified. These private headers are: `accept, accept-language, x-csrf-token, MaxDataServiceVersion, DataServiceVersion`.
         * 
         * To remove these custom headers simply set the `mCustomHeaders` parameter to null. Please also note that when calling this method again all previous custom headers are removed unless they are specified again in the `mCustomHeaders` parameter.
        */
        public setHeaders(mHeaders: {}): any;

        /**
            * Sets a new value for the given property `sPath` in the model.
         * 
         * If the `changeBatchGroup` for the changed entity type is set to deferred changes could be submitted with {@link #submitChanges}. Otherwise the change will be submitted directly.
        */
        public setProperty(sPath: string, oValue: any, oContext?: Context, bAsyncUpdate?: boolean): boolean;

        /**
            * Defines whether all bindings are updated after a change operation.
         * 
         * This flag can be overruled on request level by providing the `refreshAfterChange` parameter to the corresponding function (for example {@link #update}).
        */
        public setRefreshAfterChange(bRefreshAfterChange: boolean): any;

        /**
            * Enable/Disable XCSRF-Token handling.
        */
        public setTokenHandlingEnabled(bTokenHandling?: boolean): any;

        /**
            * Enable or disable batch mode for future requests.
        */
        public setUseBatch(bUseBatch?: boolean): any;

        /**
            * Submits the collected changes which were collected by the {@link #setProperty} method.
         * 
         * The update method is defined by the global `defaultUpdateMethod` parameter which is `sap.ui.model.odata.UpdateMethod.Merge` by default. In case of a `sap.ui.model.odata.UpdateMethod.Merge` request only the changed properties will be updated. If a URI with a `$expand` query option was used then the expand entries will be removed from the collected changes. Changes to this entries should be done on the entry itself. So no deep updates are supported.
         * 
         * ** Important **: The success/error handler will only be called if batch support is enabled. If multiple batch groups are submitted the handlers will be called for every batch group.
        */
        public submitChanges(mParameters?: { batchGroupId?: string, groupId?: string, success?: (() => any), error?: (() => any), eTag?: string, }): {};

        /**
            * Trigger a `PUT/MERGE` request to the OData service that was specified in the model constructor.
         * 
         * The update method used is defined by the global `defaultUpdateMethod` parameter which is `sap.ui.model.odata.UpdateMethod.Merge` by default. Please note that deep updates are not supported and may not work. These should be done separately and directly on the corresponding entry.
        */
        public update(sPath: string, oData: {}, mParameters?: { context?: {}, success?: (() => any), error?: (() => any), eTag?: string, urlParameters?: any, headers?: any, batchGroupId?: string, groupId?: string, changeSetId?: string, refreshAfterChange?: string, }): {};

        /**
            * Update all bindings.
        */
        public updateBindings(bForceUpdate?: boolean): any;

    }
}