declare namespace sap.ui.model.odata.ODataUtils {
    // Methods
    /**
        * Compares the given OData values based on their type. All date and time types can also be compared with a number. This number is then interpreted as the number of milliseconds that the corresponding date or time object should hold.
        */
    export function compare(vValue1: any, vValue2: any, bAsDecimal: string): number;/**
    * Formats a JavaScript value according to the given <a href="http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem"> EDM type</a>.
    */
    export function formatValue(vValue: any, sType: string): string;/**
    * Returns a comparator function optimized for the given EDM type.
    */
    export function getComparator(sEdmType: string): (() => any);/**
    * Adds an origin to the given service URL. If an origin is already present, it will only be replaced if the parameters object contains the flag "force: true". In case the URL already contains URL parameters, these will be kept. As a parameter, a sole alias is sufficient. The parameters vParameters.system and vParameters.client however have to be given in pairs. In case all three origin specifying parameters are given (system/client/alias), the alias has precedence.
 * 
 * Examples: setOrigin("/backend/service/url/", "DEMO_123"); - result: /backend/service/url;o=DEMO_123/
 * 
 * setOrigin("/backend/service/url;o=OTHERSYS8?myUrlParam=true&x=4", {alias: "DEMO_123", force: true}); - result /backend/service/url;o=DEMO_123?myUrlParam=true&x=4
 * 
 * setOrigin("/backend/service;o=NOT_TOUCHED/url;v=2;o=OTHERSYS8;srv=XVC", {alias: "DEMO_123", force: true}); - result /backend/service;o=NOT_TOUCHED/url;v=2;o=DEMO_123;srv=XVC
 * 
 * setOrigin("/backend/service/url/", {system: "DEMO", client: 134}); - result /backend/service/url;o=sid(DEMO.134)/
    */
    export function setOrigin(sServiceURL: string, vParameters: { alias: string, system: string, client: string, force: string, }): string;
}