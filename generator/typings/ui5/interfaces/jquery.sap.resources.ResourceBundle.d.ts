declare namespace jQuery.sap.util {

    /**
    
    */
    export interface ResourceBundle {


        /**
            * Returns a locale-specific string value for the given key sKey.
         * 
         * The text is searched in this resource bundle according to the fallback chain described in {@link jQuery.sap.util.ResourceBundle}. If no text could be found, the key itself is used as text.
         * 
         * If the second parameter`aArgs` is given, then any placeholder of the form "{* n *}" (with * n * being an integer) is replaced by the corresponding value from `aArgs` with index * n *. Note: This replacement is applied to the key if no text could be found. For more details on the replacement mechanism refer to {@link jQuery.sap.formatMessage}.
        */
        getText(sKey: string, aArgs: {}): string;

        /**
            * Checks whether a text for the given key can be found in the first loaded resource bundle or not. Neither the custom resource bundles nor the fallback chain will be processed.
         * 
         * This method allows to check for the existence of a text without triggering requests for the fallback locales.
         * 
         * When requesting the resource bundle asynchronously this check must only be used after the resource bundle has been loaded.
        */
        hasText(sKey: string): boolean;

    }
}