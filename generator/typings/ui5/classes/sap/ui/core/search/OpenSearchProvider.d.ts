declare module 'sap/ui/core/search/OpenSearchProvider' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SearchProvider, ISearchProviderSettings } from 'sap/ui/core/search/SearchProvider';

    export interface IOpenSearchProviderSettings extends ISearchProviderSettings {
        suggestUrl?: sap.ui.core.URI;
        suggestType?: string;
    }

    /**
    
    */
    export class OpenSearchProvider extends SearchProvider {

        /**
            * Constructor for a new search/OpenSearchProvider.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IOpenSearchProviderSettings);


        /**
            * Creates a new subclass of class sap.ui.core.search.OpenSearchProvider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.search.SearchProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.search.OpenSearchProvider.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getSuggestType suggestType}.
         * 
         * The type of data which is provided by the given suggestUrl: either 'json' or 'xml'.
         * 
         * Default value is `json`.
        */
        public getSuggestType(): string;

        /**
            * Gets current value of property {@link #getSuggestUrl suggestUrl}.
         * 
         * The URL for suggestions of the search provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross domain requests maybe a proxy must be used.
        */
        public getSuggestUrl(): sap.ui.core.URI;

        /**
            * Sets a new value for property {@link #getSuggestType suggestType}.
         * 
         * The type of data which is provided by the given suggestUrl: either 'json' or 'xml'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `json`.
        */
        public setSuggestType(sSuggestType: string): this;

        /**
            * Sets a new value for property {@link #getSuggestUrl suggestUrl}.
         * 
         * The URL for suggestions of the search provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross domain requests maybe a proxy must be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSuggestUrl(sSuggestUrl: sap.ui.core.URI): this;

        /**
            * Call this function to get suggest values from the search provider. The given callback function is called with the suggest value (type 'string', 1st parameter) and an array of the suggestions (type '[string]', 2nd parameter).
        */
        public suggest(sValue: string, fCallback: (() => any)): any;

    }
}