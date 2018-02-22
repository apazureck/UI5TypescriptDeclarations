declare namespace sap.ui.unified {

    /**
    
    */
    export interface IProcessableBlobs {


        /**
            * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could be to create and upload zip archives based on the passed Blobs. The default implementation of this API should simply resolve with the received Blobs (parameter `aBlobs`).
        */
        getProcessedBlobsFromArray(aBlobs: {}): any;

    }
}