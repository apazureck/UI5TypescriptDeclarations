declare namespace sap.ui.Device.system {
    // Fields
    /**
    * If this flag is set to `true`, the device is recognized as a combination of a desktop system and tablet.
 * 
 * Furthermore, a CSS class `sap-combi` is added to the document root element.
 * 
 * ** Note: ** This property is mainly for Microsoft Windows 8 (and following) devices where the mouse and touch event may be supported natively by the browser being used. This property is set to `true` only when both mouse and touch event are natively supported.
    */
    export const combi: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the device is recognized as a desktop system.
 * 
 * Furthermore, a CSS class `sap-desktop` is added to the document root element.
    */
    export const desktop: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the device is recognized as a phone.
 * 
 * Furthermore, a CSS class `sap-phone` is added to the document root element.
    */
    export const phone: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the device is recognized as a tablet.
 * 
 * Furthermore, a CSS class `sap-tablet` is added to the document root element.
 * 
 * ** Note: ** This flag is also true for some browsers on desktop devices running on Windows 8 or higher. Also see the documentation for {@link sap.ui.Device.system.combi} devices. You can use the following logic to ensure that the current device is a tablet device:
 * 
 * `if(sap.ui.Device.system.tablet && !sap.ui.Device.system.desktop){
 * 	...tablet related commands...
 * }`
    */
    export const tablet: boolean;
}