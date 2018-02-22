declare module 'sap/ui/model/odata/v4/Context' {
    import { ODataContextBinding } from 'sap/ui/model/odata/v4/ODataContextBinding';
    import { ODataListBinding } from 'sap/ui/model/odata/v4/ODataListBinding';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataModel } from 'sap/ui/model/odata/v4/ODataModel';
    import { Context as ContextBase, IContextSettings as IContextBaseSettings } from 'sap/ui/model/Context';

    export interface IContextSettings extends IContextBaseSettings {
    }

    /**
    
    */
    export class Context extends ContextBase {

        /**
            * Do ** NOT ** call this private constructor. In the OData V4 model you cannot create contexts at will: retrieve them from a binding or a view element instead.
        */
        public constructor(oModel: ODataModel, oBinding: ODataContextBinding | ODataListBinding, sPath: string, iIndex: number, oCreatePromise: any);


        /**
            * Returns a promise that is resolved without data when the entity represented by this context has been created in the backend. As long as it is not yet resolved or rejected the entity represented by this context is transient.
        */
        public created(): any;

        /**
            * Deletes the OData entity this context points to.
         * 
         * The context must not be used anymore after successful deletion.
        */
        public delete(sGroupId?: string): any;

        /**
            * Destroys this context, that is, it removes this context from all dependent bindings and drops references to binding and model, so that the context cannot be used anymore; it keeps path and index for debugging purposes.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.Context with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Context.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the binding this context belongs to.
        */
        public getBinding(): ODataContextBinding | ODataListBinding;

        /**
            * Returns the "canonical path" of the entity for this context. According to "4.3.1 Canonical URL" of the specification "OData Version 4.0 Part 2: URL Conventions", this is the "name of the entity set associated with the entity followed by the key predicate identifying the entity within the collection". Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an element binding. Note: For a transient context (see {@link #isTransient}) a wrong path is returned unless all key properties are available within the initial data.
        */
        public getCanonicalPath(): string;

        /**
            * Returns the context's index within the binding's collection. The return value changes if a new entity is added via {@link sap.ui.model.odata.v4.ODataListBinding#create} or deleted again.
        */
        public getIndex(): number;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.Context.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets the (model dependent) object the context points to or the object with the given relative binding path
        */
        public getObject(sPath?: string, mParameters?: {}): {};

        /**
            * Returns the value for the given path relative to this context. The function allows access to the complete data the context points to (if `sPath` is "") or any part thereof. The data is a JSON structure as described in <a href="http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html"> "OData JSON Format Version 4.0"</a>. Note that the function clones the result. Modify values via {@link sap.ui.model.odata.v4.ODataPropertyBinding#setValue}.
         * 
         * Returns `undefined` if the data is not (yet) available. Use {@link #requestObject} for asynchronous access.
        */
        public getObject(sPath?: string): any | {};

        /**
            * Returns the property value for the given path relative to this context. The path is expected to point to a structural property with primitive type. Returns `undefined` if the data is not (yet) available. Use {@link #requestProperty} for asynchronous access.
        */
        public getProperty(sPath: string, bExternalFormat?: boolean): any;

        /**
            * Returns `true` if this context is transient, which means that the promise returned by {@link #created} is not yet resolved or rejected.
        */
        public isTransient(): boolean;

        /**
            * Returns a promise for the "canonical path" of the entity for this context. According to "4.3.1 Canonical URL" of the specification "OData Version 4.0 Part 2: URL Conventions", this is the "name of the entity set associated with the entity followed by the key predicate identifying the entity within the collection". Use the canonical path in {@link sap.ui.core.Element#bindElement} to create an element binding. Note: For a transient context (see {@link #isTransient}) a wrong path is returned unless all key properties are available within the initial data.
        */
        public requestCanonicalPath(): any;

        /**
            * Returns a promise on the value for the given path relative to this context. The function allows access to the complete data the context points to (if `sPath` is "") or any part thereof. The data is a JSON structure as described in <a href="http://docs.oasis-open.org/odata/odata-json-format/v4.0/odata-json-format-v4.0.html"> "OData JSON Format Version 4.0"</a>. Note that the function clones the result. Modify values via {@link sap.ui.model.odata.v4.ODataPropertyBinding#setValue}.
         * 
         * If you want {@link #requestObject} to read fresh data, call `oContext.getBinding().refresh()` first.
        */
        public requestObject(sPath?: string): any;

        /**
            * Returns a promise on the property value for the given path relative to this context. The path is expected to point to a structural property with primitive type.
        */
        public requestProperty(sPath?: string, bExternalFormat?: boolean): any;

        /**
            * Returns a string representation of this object including the binding path.
        */
        public toString(): string;

    }
}