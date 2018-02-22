declare module 'sap/ui/model/xml/XMLModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ClientModel, IClientModelSettings } from 'sap/ui/model/ClientModel';

    export interface IXMLModelSettings extends IClientModelSettings {
    }

    /**
    
    */
    export class XMLModel extends ClientModel {


        /**
            * Creates a new subclass of class sap.ui.model.xml.XMLModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ClientModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.xml.XMLModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the object for the given `path`
        */
        public getObject(sPath: string, oContext?: {}): any;

        /**
            * Returns the value for the property with the given `sPropertyName`
        */
        public getProperty(sPath: string, oContext?: {}): any;

        /**
            * Serializes the current XML data of the model into a string.
        */
        public getXML(): any;

        /**
            * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters: {} | string, sType: string, bCache: string, mHeaders: {}): any;

        /**
            * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters: {} | string, bAsync: boolean, bCache: string, mHeaders: {}): any;

        /**
            * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters: {} | string, bAsync: boolean, sType: string, mHeaders: {}): any;

        /**
            * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, bAsync: boolean, sType: string, bCache: string, mHeaders: {}): any;

        /**
            * Load XML-encoded data from the server using a GET HTTP request and store the resulting XML data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters: {} | string, bAsync: boolean, sType: string, bCache: string, mHeaders: {}): any;

        /**
            * Sets the provided XML encoded data object to the model
        */
        public setData(oData: {}): any;

        /**
            * Sets an XML namespace to use in the binding path
        */
        public setNameSpace(sNameSpace: string, sPrefix?: string): any;

        /**
            * Sets a new value for the given property `sPropertyName` in the model. If the model value changed all interested parties are informed.
        */
        public setProperty(sPath: string, oValue: any, oContext?: {}, bAsyncUpdate?: boolean): boolean;

        /**
            * Sets the specified XML formatted string text to the model
        */
        public setXML(sXMLText: string): any;

    }
}