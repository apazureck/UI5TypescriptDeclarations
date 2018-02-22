declare namespace sap.ui.Device.resize {
    // Methods
    /**
        * Registers the given event handler to resize change events of the document's window.
     * 
     * The event is fired whenever the document's window size changes.
     * 
     * The event handler is called with a single argument: a map `mParams` which provides the following information:  * `mParams.height`: The height of the document's window in pixels. * `mParams.width`: The width of the document's window in pixels. 
        */
    export function attachHandler(fnFunction: (() => any), oListener: {}): any;/**
    * Removes a previously attached event handler from the resize events.
 * 
 * The passed parameters must match those used for registration with {@link #.attachHandler} beforehand.
    */
    export function detachHandler(fnFunction: (() => any), oListener: {}): any;    // Fields
    /**
    * The current height of the document's window in pixels.
    */
    export const height: number;
    // Fields
    /**
    * The current width of the document's window in pixels.
    */
    export const width: number;
}