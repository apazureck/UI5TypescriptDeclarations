declare module 'sap/ui/test/PageObjectFactory' {
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IPageObjectFactorySettings extends IObjectSettings {
    }

    /**
    
    */
    export class PageObjectFactory extends Object {


        /**
            * Create a page object configured as arrangement, action and assertion to the Opa.config. Use it to structure your arrangement, action and assertion based on parts of the screen to avoid name clashes and help structuring your tests.
        */
        protected static create(): any;

    }
}