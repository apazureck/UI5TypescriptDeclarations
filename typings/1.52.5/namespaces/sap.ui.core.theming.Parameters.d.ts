declare namespace sap.ui.core.theming.Parameters {
    // Methods
    /**
        * Returns the current value for one or more theming parameters, depending on the given arguments.  * If no parameter is given a key-value map containing all parameters is returned * If a `string` is given as first parameter the value is returned as a `string` * If an `array` is given as first parameter a key-value map containing all parameters from the `array` is returned  The returned key-value maps are a copy so changing values in the map does not have any effect
        */
    export function get(vName: string | {}, oElement: {}): string | {} | any;/**
    * Resets the CSS parameters which finally will reload the parameters the next time they are queried via the method `get`.
    */
    export function reset(): any;
}