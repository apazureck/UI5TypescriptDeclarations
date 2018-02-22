declare module 'sap/ui/core/util/MockServer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IMockServerSettings extends IManagedObjectSettings {
        rootUri?: string;
        requests?: {};
    }

    /**
    
    */
    export class MockServer extends ManagedObject {

        /**
            * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without changing the application code. This class can also be used for qunit tests.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMockServerSettings, oScope: {});


        /**
            * generates a floating-point, pseudo-random number in the range [0, 1[ using a linear congruential generator with drand48 parameters the seed is fixed, so the generated random sequence is always the same each property type has a own seed. Valid types are: String, DateTime, Int, Decimal, Boolean, Byte, Double, Single, SByte, Time, Guid, Binary, DateTimeOffset
        */
        public _getPseudoRandomNumber(specific: string): any;

        /**
            * Attaches an event handler to be called after the built-in request processing of the mock server
        */
        public attachAfter(event: string, fnCallback: (() => any), sEntitySet: string): any;

        /**
            * Attaches an event handler to be called before the built-in request processing of the mock server
        */
        public attachBefore(event: string, fnCallback: (() => any), sEntitySet: string): any;

        /**
            * Global configuration of all mock servers.
        */
        public static config(mConfig: { autoRespond?: boolean, autoRespondAfter?: number, fakeHTTPMethods?: boolean, }): any;

        /**
            * Cleans up the resources associated with this object and all its aggregated children.
         * 
         * After an object has been destroyed, it can no longer be used in!
         * 
         * Applications should call this method if they don't need the object any longer.
        */
        public destroy(bSuppressInvalidate?: boolean): any;

        /**
            * Stops and calls destroy on all registered servers. Use this method for cleaning up.
        */
        public static destroyAll(): any;

        /**
            * Removes a previously attached event handler
        */
        public detachAfter(event: string, fnCallback: (() => any), sEntitySet: string): any;

        /**
            * Removes a previously attached event handler
        */
        public detachBefore(event: string, fnCallback: (() => any), sEntitySet: string): any;

        /**
            * Creates a new subclass of class sap.ui.core.util.MockServer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the data model of the given EntitySet name.
        */
        public getEntitySetData(sEntitySetName: string): any[];

        /**
            * Returns a metadata object for class sap.ui.core.util.MockServer.
        */
        public static getMetadata(): Metadata | any;

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
            * Getter for property `requests`.
         * 
         * Default value is `[]`
        */
        public getRequests(): {};

        /**
            * Getter for property `rootUri`.
         * 
         * Default value is empty/`undefined`
        */
        public getRootUri(): string;

        /**
            * Returns whether the server is started or not.
        */
        public isStarted(): boolean;

        /**
            * Respond to a request, when the servers are configured not to automatically respond.
        */
        public static respond(): any;

        /**
            * Sets the data of the given EntitySet name with the given array.
        */
        public setEntitySetData(sEntitySetName: string, aData: any[]): any;

        /**
            * Setter for property `requests`.
         * 
         * Default value is is `[]`
         * 
         * Each array entry should consist of an array with the following properties / values:
         * 
         *  * ** method <string>: "GET"|"POST"|"DELETE|"PUT" ** <br> (any HTTP verb) * ** path <string>: "/path/to/resource" ** <br> The path is converted to a regular expression, so it can contain normal regular expression syntax. All regular expression groups are forwarded as arguments to the `response` function. In addition to this, parameters can be written in this notation: `:param`. These placeholder will be replaced by regular expression groups. * ** response <function>: function(xhr, param1, param2, ...) { } ** <br> The xhr object can be used to respond on the request. Supported methods are: <br> `xhr.respond(iStatusCode, mHeaders, sBody)` <br> `xhr.respondJSON(iStatusCode, mHeaders, oJsonObjectOrString)`. By default a JSON header is set for response header <br> `xhr.respondXML(iStatusCode, mHeaders, sXmlString)`. By default an XML header is set for response header <br> `xhr.respondFile(iStatusCode, mHeaders, sFileUrl)`. By default the mime type of the file is set for response header 
        */
        public setRequests(requests: {}): any;

        /**
            * Setter for property `rootUri`. All request path URI are prefixed with this root URI if set.
         * 
         * Default value is empty/`undefined`
        */
        public setRootUri(rootUri: string): any;

        /**
            * Simulates an existing OData service by sepcifiying the metadata URL and the base URL for the mockdata. The server configures the request handlers depending on the service metadata. The mockdata needs to be stored individually for each entity type in a separate JSON file. The name of the JSON file needs to match the name of the entity type. If no base url for the mockdata is specified then the mockdata are generated from the metadata
        */
        public simulate(sMetadataUrl: string, vMockdataSettings?: { sMockdataBaseUrl?: string, bGenerateMissingMockData?: boolean, aEntitySetsNames?: any[], }): any;

        /**
            * Starts the server.
        */
        public start(): any;

        /**
            * Starts all registered servers.
        */
        public static startAll(): any;

        /**
            * Stops the server.
        */
        public stop(): any;

        /**
            * Stops all registered servers.
        */
        public static stopAll(): any;

    }
}