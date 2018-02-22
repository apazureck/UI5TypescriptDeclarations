declare namespace sap.m.MessageToast {
    // Methods
    /**
        * Creates and displays a simple message toast notification message with the given text, and optionally other options.
     * 
     * The only mandatory parameter is `sMessage`.
        */
    export function show(sMessage: string, mOptions: { duration?: number, width?: sap.ui.core.CSSSize, my?: sap.ui.core.Popup.Dock, at?: sap.ui.core.Popup.Dock, of?: {} | any | any | any | any, offset?: string, collision?: string, onClose?: (() => any), autoClose?: boolean, animationTimingFunction?: string, animationDuration?: number, closeOnBrowserNavigation?: boolean, }): any;
}