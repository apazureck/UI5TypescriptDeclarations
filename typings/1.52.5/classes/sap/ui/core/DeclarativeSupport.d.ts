declare module 'sap/ui/core/DeclarativeSupport' {
    import { HTMLView } from 'sap/ui/core/mvc/HTMLView';


    export interface IDeclarativeSupportSettings {
    }

    /**
    
    */
    export class DeclarativeSupport {


        /**
            * Enhances the given DOM element by parsing the Control and Elements info and creating the SAPUI5 controls for them.
        */
        public static compile(oElement: any, oView?: HTMLView, isRecursive?: boolean): any;

    }
}