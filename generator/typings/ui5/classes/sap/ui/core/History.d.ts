declare module 'sap/ui/core/History' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IHistorySettings extends IObjectSettings {
    }

    /**
    
    */
    export class History extends Object {

        /**
            * Creates an instance of the History.
         * 
         * Attention: The Web Storage API which is used by this class stores the data on the client. Therefore do not use this API for confidential information.
        */
        public constructor(sId: string, mSettings: IHistorySettings);


        /**
            * Creates a new subclass of class sap.ui.core.History with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.History.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}