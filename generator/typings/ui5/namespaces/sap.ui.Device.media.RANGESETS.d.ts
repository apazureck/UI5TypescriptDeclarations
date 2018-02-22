declare namespace sap.ui.Device.media.RANGESETS {
    // Fields
    /**
    * A 3-step range set (S-L).
 * 
 * The ranges of this set are:  * `"S"`: For screens smaller than 520 pixels. * `"M"`: For screens greater than or equal to 520 pixels and smaller than 960 pixels. * `"L"`: For screens greater than or equal to 960 pixels. 
 * 
 * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
 * 
 * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-3Step-* NAME_OF_THE_INTERVAL *`.
    */
    export const SAP_3STEPS: any;
    // Fields
    /**
    * A 4-step range set (S-XL).
 * 
 * The ranges of this set are:  * `"S"`: For screens smaller than 520 pixels. * `"M"`: For screens greater than or equal to 520 pixels and smaller than 760 pixels. * `"L"`: For screens greater than or equal to 760 pixels and smaller than 960 pixels. * `"XL"`: For screens greater than or equal to 960 pixels. 
 * 
 * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
 * 
 * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-4Step-* NAME_OF_THE_INTERVAL *`.
    */
    export const SAP_4STEPS: any;
    // Fields
    /**
    * A 6-step range set (XS-XXL).
 * 
 * The ranges of this set are:  * `"XS"`: For screens smaller than 241 pixels. * `"S"`: For screens greater than or equal to 241 pixels and smaller than 400 pixels. * `"M"`: For screens greater than or equal to 400 pixels and smaller than 541 pixels. * `"L"`: For screens greater than or equal to 541 pixels and smaller than 768 pixels. * `"XL"`: For screens greater than or equal to 768 pixels and smaller than 960 pixels. * `"XXL"`: For screens greater than or equal to 960 pixels. 
 * 
 * To use this range set, you must initialize it explicitly ({@link sap.ui.Device.media.initRangeSet}).
 * 
 * If this range set is initialized, a CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-6Step-* NAME_OF_THE_INTERVAL *`.
    */
    export const SAP_6STEPS: any;
    // Fields
    /**
    * A 3-step range set (Phone, Tablet, Desktop).
 * 
 * The ranges of this set are:  * `"Phone"`: For screens smaller than 600 pixels. * `"Tablet"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels. * `"Desktop"`: For screens greater than or equal to 1024 pixels. 
 * 
 * This range set is initialized by default. An initialization via {@link sap.ui.Device.media.initRangeSet} is not needed.
 * 
 * A CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-Std-* NAME_OF_THE_INTERVAL *`. Furthermore there are 5 additional CSS classes to hide elements based on the width of the screen:  * `sapUiHideOnPhone`: Will be hidden if the screen has 600px or more * `sapUiHideOnTablet`: Will be hidden if the screen has less than 600px or more than 1023px * `sapUiHideOnDesktop`: Will be hidden if the screen is smaller than 1024px * `sapUiVisibleOnlyOnPhone`: Will be visible if the screen has less than 600px * `sapUiVisibleOnlyOnTablet`: Will be visible if the screen has 600px or more but less than 1024px * `sapUiVisibleOnlyOnDesktop`: Will be visible if the screen has 1024px or more 
    */
    export const SAP_STANDARD: any;
    // Fields
    /**
    * A 4-step range set (Phone, Tablet, Desktop, LargeDesktop).
 * 
 * The ranges of this set are:  * `"Phone"`: For screens smaller than 600 pixels. * `"Tablet"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels. * `"Desktop"`: For screens greater than or equal to 1024 pixels and smaller than 1440 pixels. * `"LargeDesktop"`: For screens greater than or equal to 1440 pixels. 
 * 
 * This range set is initialized by default. An initialization via {@link sap.ui.Device.media.initRangeSet} is not needed.
 * 
 * A CSS class is added to the page root (`html` tag) which indicates the current screen width range: `sapUiMedia-StdExt-* NAME_OF_THE_INTERVAL *`.
    */
    export const SAP_STANDARD_EXTENDED: any;
}