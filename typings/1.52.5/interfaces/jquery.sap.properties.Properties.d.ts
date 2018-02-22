declare namespace jQuery.sap.util {

    /**
    
    */
    export interface Properties {


        /**
            * Creates and returns a clone of the property collection.
        */
        clone(): this;

        /**
            * Returns an array of all keys in the property collection.
        */
        getKeys(): {};

        /**
            * Returns the value for the given key or `null` if the collection has no value for the key.
         * 
         * Optionally, a default value can be given which will be returned if the collection does not contain a value for the key; only non-empty default values are supported.
        */
        getProperty(sKey: string, sDefaultValue: string): string;

        /**
            * Stores or changes the value for the given key in the collection.
         * 
         * If the given value is not a string, the collection won't be modified. The key is always cast to a string.
        */
        setProperty(sKey: string, sValue: string): any;

    }
}