declare namespace sap.m {
    // Methods
    /**
        * Returns invalid date value of UI5.
        */
    export function getInvalidDate(): any;/**
    * Finds default locale settings once and returns always the same. We should not need to create new instance to get same locale settings This method keep the locale instance in the scope and returns the same after first run
    */
    export function getLocale(): {};/**
    * Finds default locale data once and returns always the same.
    */
    export function getLocaleData(): {};/**
    * Checks if the given parameter is a valid JsDate Object.
    */
    export function isDate(value: any): boolean;/**
    * Returns if the LightBox is open.
    */
    export function LightBox(): boolean;    // Fields
    /**
    * Hide the soft keyboard.
    */
    export const closeKeyboard: any;
    // Fields
    /**
    * Search given control's parents and try to find iScroll.
    */
    export const getIScroll: any;
    // Fields
    /**
    * Search given control's parents and try to find ScrollDelegate.
    */
    export const getScrollDelegate: any;
    // Fields
    /**
    * ``sap.m.Support` shows the technical information for SAPUI5 Mobile Applications.
 * This technical information includes
 *    * SAPUI5 Version
 *    * User Agent
 *    * Configurations (Bootstrap and Computed)
 *    * URI parameters
 *    * All loaded module names
 * 
 * In order to show the device information, the user must follow the following gestures.
 *    1 - Hold two finger for 3 seconds minimum.
 *    2 - Tab with a third finger while holding the first two fingers.
 * 
 * NOTE: This class is internal and all its functions must not be used by an application
 * 
 * As `sap.m.Support` is a static class, a `jQuery.sap.require("sap.m.Support");`
 * statement must be implicitly executed before the class is used.
 * 
 * 
 * Enable Support:
 * --------------------------------------------------
 * //import library
 * jQuery.sap.require("sap.m.Support");
 * 
 * //By default after require, support is enabled but implicitly we can call
 * sap.m.Support.on();
 * 
 * Disable Support:
 * --------------------------------------------------
 * sap.m.Support.off();`
    */
    export const Support: any;
}