declare namespace sap.ui.core.BusyIndicator {
    // Methods
    /**
        * Registers a handler for the "close" event
        */
    export function attachClose(fnFunction: (() => any), oListener: {}): {};/**
    * Registers a handler for the "open" event.
    */
    export function attachOpen(fnFunction: (() => any), oListener: {}): {};/**
    * Unregisters a handler for the "close" event
    */
    export function detachClose(fnFunction: (() => any), oListener: {}): {};/**
    * Unregisters a handler for the "open" event
    */
    export function detachOpen(fnFunction: (() => any), oListener: {}): {};/**
    * Removes the BusyIndicator from the screen
    */
    export function hide(): any;/**
    * Displays the BusyIndicator and starts blocking all user input. This only happens after some delay and if after that delay the BusyIndicator.hide() has not yet been called in the meantime. There is a certain default value for the delay, but that one can be overridden.
    */
    export function show(iDelay: number): any;
}