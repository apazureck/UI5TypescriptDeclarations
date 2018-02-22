declare module 'sap/m/BarInPageEnabler' {
    import { Control } from 'sap/ui/core/Control';
    import { RenderManager } from 'sap/ui/core/RenderManager';


    export interface IIBarInPageEnablerSettings {
    }

    /**
    
    */
    export class IBarInPageEnabler {


        /**
            * Adds the sapMBarChildClass to a control.
        */
        protected addChildClassTo(oControl: Control): any;

        /**
            * Renders the tooltip for the given control
        */
        protected renderTooltip(oRM: RenderManager, oControl: Control): any;

    }
}