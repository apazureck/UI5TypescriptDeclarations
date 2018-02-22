declare module 'sap/ui/model/json/JSONTreeBinding' {
    import { JSONModel } from 'sap/ui/model/json/JSONModel';


    export interface IJSONTreeBindingSettings {
    }

    /**
    
    */
    export class JSONTreeBinding {

        /**
            
        */
        public constructor(sPath: string, oContext: {}, aFilters: any[], mParameters: { arrayNames?: {}, });

        /**
            
        */
        public constructor(oModel: JSONModel, sPath: string, oContext: {}, aFilters: any[], mParameters: { arrayNames?: {}, });


    }
}