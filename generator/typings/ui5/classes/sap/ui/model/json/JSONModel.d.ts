declare module 'sap/ui/model/json/JSONModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Context } from 'sap/ui/model/Context';
    import { ClientModel, IClientModelSettings } from 'sap/ui/model/ClientModel';

    export interface IJSONModelSettings extends IClientModelSettings {
    }

    /**
    
    */
    export class JSONModel extends ClientModel {

        /**
            * Constructor for a new JSONModel.
        */
        public constructor(oData: {}, bObserve: boolean);


        /**
            * Creates a new subclass of class sap.ui.model.json.JSONModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.ClientModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Serializes the current JSON data of the model into a string. Note: May not work in Internet Explorer 8 because of lacking JSON support (works only if IE 8 mode is enabled)
        */
        public getJSON(): string;

        /**
            * Returns a metadata object for class sap.ui.model.json.JSONModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the value for the property with the given `sPropertyName`
        */
        public getProperty(sPath: string, oContext?: Context): any;

        /**
            * Implement in inheriting classes
        */
        public getProperty(sPath: string, oContext?: {}): any;

        /**
            * Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in the model. Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy, the request can not successfully retrieve data from a different domain, subdomain, or protocol.
        */
        public loadData(sURL: string, oParameters?: {} | string, bAsync?: boolean, sType?: string, bMerge?: boolean, bCache?: string, mHeaders?: {}): any;

        /**
            * Sets the JSON encoded data to the model.
        */
        public setData(oData: {}, bMerge?: boolean): any;

        /**
            * Sets the JSON encoded string data to the model.
        */
        public setJSON(sJSONText: string, bMerge?: boolean): any;

        /**
            * Sets a new value for the given property `sPropertyName` in the model. If the model value changed all interested parties are informed.
        */
        public setProperty(sPath: string, oValue: any, oContext?: {}, bAsyncUpdate?: boolean): boolean;

    }
}