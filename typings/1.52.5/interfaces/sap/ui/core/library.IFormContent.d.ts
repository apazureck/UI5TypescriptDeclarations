declare namespace sap.ui.core {

    /**
    
    */
    export interface IFormContent {


        /**
            * In the `Form` control all content controls are positioned on a grid cell base. By default the controls use the full width of the used grid cell. But for some controls (like image controls), this is not the desired behavior. In this case the control must keep its original width.
        */
        getFormDoNotAdjustWidth(): boolean;

    }
}