declare namespace sap.ui.Device.media {
    // Methods
    /**
        * Registers the given event handler to change events of the screen width based on the range set with the specified name.
     * 
     * The event is fired whenever the screen width changes and the current screen width is in a different interval of the given range set than before the width change.
     * 
     * The event handler is called with a single argument: a map `mParams` which provides the following information about the entered interval:  * `mParams.from`: The start value (inclusive) of the entered interval as a number * `mParams.to`: The end value (exclusive) range of the entered interval as a number or undefined for the last interval (infinity) * `mParams.unit`: The unit used for the values above, e.g. `"px"` * `mParams.name`: The name of the entered interval, if available 
        */
    export function attachHandler(fnFunction: (() => any), oListener: {}, sName: string): any;/**
    * Removes a previously attached event handler from the change events of the screen width.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
    export function detachHandler(fnFunction: (() => any), oListener: {}, sName: string): any;/**
    * Returns information about the current active range of the range set with the given name.
 * 
 * If the optional parameter `iWidth</iWidth> is given, the active range will be determined for that width, otherwise it is determined for the current window size.
    */
    export function getCurrentRange(sName: string, iWidth: number): any;/**
    * Returns `true` if a range set with the given name is already initialized.
    */
    export function hasRangeSet(sName: string): boolean;/**
    * Initializes a screen width media query range set.
 * 
 * This initialization step makes the range set ready to be used for one of the other functions in namespace `sap.ui.Device.media`. The most important {@link sap.ui.Device.media.RANGESETS predefined range sets} are initialized automatically.
 * 
 * To make a not yet initialized {@link sap.ui.Device.media.RANGESETS predefined range set} ready to be used, call this function with the name of the range set to be initialized: `sap.ui.Device.media.initRangeSet(sap.ui.Device.media.RANGESETS.SAP_3STEPS);`
 * 
 * Alternatively it is possible to define custom range sets as shown in the following example: `sap.ui.Device.media.initRangeSet("MyRangeSet", [200, 400], "px", ["Small", "Medium", "Large"]);` This example defines the following named ranges:  * `"Small"`: For screens smaller than 200 pixels. * `"Medium"`: For screens greater than or equal to 200 pixels and smaller than 400 pixels. * `"Large"`: For screens greater than or equal to 400 pixels.  The range names are optional. If they are specified a CSS class (e.g. `sapUiMedia-MyRangeSet-Small`) is also added to the document root depending on the current active range. This can be suppressed via parameter `bSuppressClasses`.
    */
    export function initRangeSet(sName: string, aRangeBorders: {}, sUnit: string, aRangeNames: {}, bSuppressClasses: boolean): any;
}