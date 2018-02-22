declare namespace sap.ui.Device.orientation {
    // Methods
    /**
        * Registers the given event handler to orientation change events of the document's window.
     * 
     * The event is fired whenever the screen orientation changes and the width of the document's window becomes greater than its height or the other way round.
     * 
     * The event handler is called with a single argument: a map `mParams` which provides the following information:  * `mParams.landscape`: If this flag is set to `true`, the screen is currently in landscape mode, otherwise in portrait mode. 
        */
    export function attachHandler(fnFunction: (() => any), oListener: {}): any;/**
    * Removes a previously attached event handler from the orientation change events.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
    export function detachHandler(fnFunction: (() => any), oListener: {}): any;    // Fields
    /**
    * If this flag is set to `true`, the screen is currently in landscape mode (the width is greater than the height).
    */
    export const landscape: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the screen is currently in portrait mode (the height is greater than the width).
    */
    export const portrait: boolean;
}