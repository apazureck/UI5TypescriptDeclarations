declare namespace sap.ui.core.mvc.View {

    /**
    
    */
    export interface Preprocessor {


        /**
            * Processing method that must be implemented by a Preprocessor.
        */
        process(vSource: {}, oViewInfo: { id: string, name: string, componentId: string, caller: string, }, mSettings: {}): {} | any;

    }
}