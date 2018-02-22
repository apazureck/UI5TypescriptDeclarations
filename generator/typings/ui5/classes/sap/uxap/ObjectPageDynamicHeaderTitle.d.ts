declare module 'sap/uxap/ObjectPageDynamicHeaderTitle' {
    import { Metadata } from 'sap/ui/base/Metadata';


    export interface IObjectPageDynamicHeaderTitleSettings {
    }

    /**
    
    */
    export class ObjectPageDynamicHeaderTitle {

        /**
            * Constructor for a new `ObjectPageDynamicHeaderTitle`.
        */
        public constructor(sId: string, mSettings: IObjectPageDynamicHeaderTitleSettings);


        /**
            * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderTitle with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageTitle.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderTitle.
        */
        public static getMetadata(): Metadata;

    }
}