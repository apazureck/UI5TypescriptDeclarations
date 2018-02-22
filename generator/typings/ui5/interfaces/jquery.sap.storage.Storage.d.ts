declare namespace jQuery.sap.storage {

    /**
    
    */
    export interface Storage {


        /**
            * Deletes all the entries saved in the session (Independent of the current Storage instance!).
         * 
         * CAUTION: This method should be called only in very particular situations, when a global erasing of data is required. Given that the method deletes the data saved under any ID, it should not be called when managing data for specific controls.
        */
        clear(): boolean;

        /**
            * Retrieves the state string stored in the session under the key sStorageKeyPrefix + sId.
         * 
         * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
        */
        get(sId: string): string;

        /**
            * Returns the type of the storage.
        */
        getType(): jQuery.sap.storage.Type | string;

        /**
            * Returns whether the given storage is suppported.
        */
        isSupported(): boolean;

        /**
            * Stores the passed state string in the session, under the key sStorageKeyPrefix + sId.
         * 
         * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
        */
        put(sId: string, sStateToStore: string): boolean;

        /**
            * Deletes the state string stored in the session under the key sStorageKeyPrefix + sId.s
         * 
         * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
        */
        remove(sId: string): boolean;

        /**
            * Deletes all state strings stored in the session under the key prefix sStorageKeyPrefix + sIdPrefix.
         * 
         * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
        */
        removeAll(sIdPrefix: string): boolean;

    }
}