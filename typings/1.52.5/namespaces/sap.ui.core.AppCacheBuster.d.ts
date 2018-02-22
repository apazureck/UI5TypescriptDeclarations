declare namespace sap.ui.core.AppCacheBuster {
    // Methods
    /**
        * Converts the given URL if it matches a URL in the cachebuster index. If not then the same URL will be returned. To prevent URLs from being modified by the application cachebuster you can implement the function `sap.ui.core.AppCacheBuster.handleURL`.
        */
    export function convertURL(sUrl: string): string;/**
    * Callback function which can be overwritten to programmatically decide whether to rewrite the given URL or not.
    */
    export function handleURL(sUrl: string): boolean;/**
    * Normalizes the given URL and make it absolute.
    */
    export function normalizeURL(sUrl: string): string;/**
    * Registers an application. Loads the cachebuster index file from this locations. All registered files will be considered by the cachebuster and the URLs will be prefixed with the timestamp of the index file.
    */
    export function register(base: string): any;
}