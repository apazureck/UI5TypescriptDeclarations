declare namespace jQuery.device.is {
    // Fields
    /**
    * Whether the application runs on an Android phone - based not on screen size but user-agent (so this is not guaranteed to be equal to jQuery.device.is.phone on Android) https://developers.google.com/chrome/mobile/docs/user-agent Some device vendors however do not follow this rule
    */
    export const android_phone: boolean;
    // Fields
    /**
    * Whether the application runs on an Android tablet - based not on screen size but user-agent (so this is not guaranteed to be equal to jQuery.device.is.tablet on Android) https://developers.google.com/chrome/mobile/docs/user-agent Some device vendors however do not follow this rule
    */
    export const android_tablet: boolean;
    // Fields
    /**
    * Whether the running device is a desktop browser. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will be false.
    */
    export const desktop: boolean;
    // Fields
    /**
    * Whether the application runs on an iPad
    */
    export const ipad: boolean;
    // Fields
    /**
    * Whether the application runs on an iPhone
    */
    export const iphone: boolean;
    // Fields
    /**
    * Whether the device is in "landscape" orientation (also "true" when the device does not know about the orientation)
    */
    export const landscape: boolean;
    // Fields
    /**
    * Whether the running device is a phone. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will also be set according to the simulated platform. This property will be false when runs in desktop browser.
    */
    export const phone: boolean;
    // Fields
    /**
    * Whether the device is in portrait orientation
    */
    export const portrait: boolean;
    // Fields
    /**
    * Whether the application runs in standalone mode without browser UI (launched from the iOS home screen)
    */
    export const standalone: boolean;
    // Fields
    /**
    * Whether the running device is a tablet. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will also be set according to the simulated platform. This property will be false when runs in desktop browser.
    */
    export const tablet: boolean;
}