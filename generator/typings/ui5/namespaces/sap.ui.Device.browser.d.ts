declare namespace sap.ui.Device.browser {
    // Fields
    /**
    * If this flag is set to `true`, the Google Chrome browser is used.
    */
    export const chrome: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Microsoft Edge browser is used.
    */
    export const edge: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Mozilla Firefox browser is used.
    */
    export const firefox: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Safari browser runs in standalone fullscreen mode on iOS.
 * 
 * ** Note: ** This flag is only available if the Safari browser was detected. Furthermore, if this mode is detected, technically not a standard Safari is used. There might be slight differences in behavior and detection, e.g. the availability of {@link sap.ui.Device.browser.version}.
    */
    export const fullscreen: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Microsoft Internet Explorer browser is used.
    */
    export const internet_explorer: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the mobile variant of the browser is used or a tablet or phone device is detected.
 * 
 * ** Note: ** This information might not be available for all browsers.
    */
    export const mobile: boolean;
    // Fields
    /**
    * If this flag is set to `true`, a browser featuring a Mozilla engine is used.
    */
    export const mozilla: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Microsoft Internet Explorer browser is used.
    */
    export const msie: boolean;
    // Fields
    /**
    * The name of the browser.
    */
    export const name: string;
    // Fields
    /**
    * If this flag is set to `true`, the Apple Safari browser is used.
 * 
 * ** Note: ** This flag is also `true` when the standalone (fullscreen) mode or webview is used on iOS devices. Please also note the flags {@link sap.ui.Device.browser.fullscreen} and {@link sap.ui.Device.browser.webview}.
    */
    export const safari: boolean;
    // Fields
    /**
    * The version of the browser as `float`.
 * 
 * Might be `-1` if no version can be determined.
    */
    export const version: number;
    // Fields
    /**
    * The version of the browser as `string`.
 * 
 * Might be empty if no version can be determined.
    */
    export const versionStr: string;
    // Fields
    /**
    * If this flag is set to `true`, a browser featuring a Webkit engine is used.
    */
    export const webkit: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the Safari browser runs in webview mode on iOS.
 * 
 * ** Note: ** This flag is only available if the Safari browser was detected. Furthermore, if this mode is detected, technically not a standard Safari is used. There might be slight differences in behavior and detection, e.g. the availability of {@link sap.ui.Device.browser.version}.
    */
    export const webview: boolean;
}