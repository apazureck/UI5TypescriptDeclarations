declare module 'sap/ui/model/odata/Filter' {
    import { Filter as sap_ui_model_Filter } from 'sap/ui/model/Filter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IFilterSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Filter extends Object {

        /**
            * Constructor for Filter
        */
        public constructor(sPath: string, aValues: {}, bAND: boolean);


        /**
            * Converts the `sap.ui.model.odata.Filter` into a `sap.ui.model.Filter`.
        */
        public convert(): sap_ui_model_Filter;

        /**
            * Creates a new subclass of class sap.ui.model.odata.Filter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.Filter.
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