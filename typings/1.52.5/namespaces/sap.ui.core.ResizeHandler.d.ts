declare namespace sap.ui.core.ResizeHandler {
    // Methods
    /**
        * Deregisters a previously registered handler for resize events with the given registration ID.
        */
    export function deregister(sId: string): any;/**
    * Creates a new subclass of class sap.ui.core.ResizeHandler with name `sClassName` and enriches it with the information contained in `oClassInfo`.
 * 
 * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
    */
    export function extend(sClassName: string, oClassInfo: {}, FNMetaImpl: (() => any)): (() => any);/**
    * Returns a metadata object for class sap.ui.core.ResizeHandler.
    */
    export function getMetadata(): {};/**
    * Registers the given event handler for resize events on the given DOM element or control.
 * 
 * ** Note: ** This function must not be used before the UI5 framework is initialized. Please use the {@link {}#attachInit init event} of UI5 if you are not sure whether this is the case.
 * 
 * The resize handler periodically checks the dimensions of the registered reference. Whenever it detects changes, an event is fired. Be careful when changing dimensions within the event handler which might cause another resize event and so on.
 * 
 * The available parameters of the resize event are:  * `oEvent.target`: The DOM element of which the dimensions were checked * `oEvent.size.width`: The current width of the DOM element in pixels * `oEvent.size.height`: The current height of the DOM element in pixels * `oEvent.oldSize.width`: The previous width of the DOM element in pixels * `oEvent.oldSize.height`: The previous height of the DOM element in pixels * `oEvent.control`: The control which was given during registration of the event handler (if present) 
    */
    export function register(oRef: any | {}, fHandler: (() => any)): string;
}