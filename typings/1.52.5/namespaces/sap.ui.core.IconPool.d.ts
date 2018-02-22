declare namespace sap.ui.core.IconPool {
    // Methods
    /**
        * Register an additional icon to the sap.ui.core.IconPool.
        */
    export function addIcon(iconName: string, collectionName: string, iconInfo: { fontFamily: string, content: string | {}, overWrite?: boolean, suppressMirroring?: boolean, resourceBundle?: jQuery.sap.util.ResourceBundle, }): {};/**
    * Creates an instance of {@link sap.ui.core.Icon} if the given URI is an icon URI, otherwise the given constructor is called. The given URI is set to the src property of the control.
    */
    export function createControlByURI(setting: string | {}, constructor: (() => any)): {};/**
    * Returns all names of registered collections in IconPool
    */
    export function getIconCollectionNames(): any[];/**
    * Returns the icon url based on the given mime type
    */
    export function getIconForMimeType(sMimeType: string): string;/**
    * Returns an info object for the icon with the given `iconName` and `collectionName`.
 * 
 * Instead of giving name and collection, a complete icon-URI can be provided as `iconName`. The method will determine name and collection from the URI, see {@link #.isIconURI IconPool.isIconURI} for details.
 * 
 * The returned info object has the following properties:  * `string: name` Name of the icon * `string: collection` Name of the collection that contains the icon or `undefined` in case of the default collection * `string: uri` Icon URI that identifies the icon * `string: fontFamily` CSS font family to use for this icon * `string: content` Character sequence that represents the icon in the icon font * `string: text` Alternative text describing the icon (optional, might be empty) * `boolean: suppressMirroring` Whether the icon needs no mirroring in right-to-left mode 
    */
    export function getIconInfo(iconName: string, collectionName: string): {};/**
    * Returns all name of icons that are registered under the given collection.
    */
    export function getIconNames(collectionName: string): any[];/**
    * Returns the URI of the icon in the pool which has the given `iconName` and `collectionName`.
    */
    export function getIconURI(iconName: string, collectionName: string): string;/**
    * Returns whether the given `uri` is an icon URI.
 * 
 * A string is an icon URI when it can be parsed as a URI and when it has one of the two forms  * sap-icon://collectionName/iconName * sap-icon://iconName  where collectionName and iconName must be non-empty.
    */
    export function isIconURI(uri: string): boolean;
}