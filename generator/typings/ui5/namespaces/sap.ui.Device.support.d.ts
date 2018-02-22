declare namespace sap.ui.Device.support {
    // Fields
    /**
    * If this flag is set to `true`, the used browser natively supports media queries via JavaScript.
 * 
 * ** Note: ** The {@link sap.ui.Device.media media queries API} of the device API can also be used when there is no native support.
    */
    export const matchmedia: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the used browser natively supports events of media queries via JavaScript.
 * 
 * ** Note: ** The {@link sap.ui.Device.media media queries API} of the device API can also be used when there is no native support.
    */
    export const matchmedialistener: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the used browser natively supports the `orientationchange` event.
 * 
 * ** Note: ** The {@link sap.ui.Device.orientation orientation event} of the device API can also be used when there is no native support.
    */
    export const orientation: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the used browser supports pointer events.
    */
    export const pointer: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the device has a display with a high resolution.
    */
    export const retina: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the used browser supports touch events.
 * 
 * ** Note: ** This flag indicates whether the used browser supports touch events or not. This does not necessarily mean that the used device has a touchable screen.
    */
    export const touch: boolean;
    // Fields
    /**
    * If this flag is set to `true`, the used browser supports web sockets.
    */
    export const websocket: boolean;
}