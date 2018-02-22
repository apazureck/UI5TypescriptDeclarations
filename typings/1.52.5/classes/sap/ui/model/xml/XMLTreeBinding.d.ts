declare module 'sap/ui/model/xml/XMLTreeBinding' {
    import { XMLModel } from 'sap/ui/model/xml/XMLModel';


    export interface IXMLTreeBindingSettings {
    }

    /**
    
    */
    export class XMLTreeBinding {

        /**
            
        */
        public constructor(Path: string, oContext: {}, aFilters: any[], mParameters: {});

        /**
            
        */
        public constructor(oModel: XMLModel, Path: string, oContext: {}, aFilters: any[], mParameters: {});


        /**
            * Return node contexts for the tree
        */
        protected getNodeContexts(oContext: {}, iStartIndex: number, iLength: number): any[];

    }
}