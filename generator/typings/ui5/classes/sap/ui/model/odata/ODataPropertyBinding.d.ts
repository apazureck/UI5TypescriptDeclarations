declare module 'sap/ui/model/odata/ODataPropertyBinding' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Context } from 'sap/ui/model/Context';
    import { PropertyBinding, IPropertyBindingSettings } from 'sap/ui/model/PropertyBinding';

    export interface IODataPropertyBindingSettings extends IPropertyBindingSettings {
    }

    /**
    
    */
    export class ODataPropertyBinding extends PropertyBinding {

        /**
            
        */
        public constructor(oModel: Model, sPath: string, oContext: Context, mParameters: {});


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataPropertyBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.PropertyBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataPropertyBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the current value of the bound target
        */
        public getValue(): {};

        /**
            * Returns the current value of the bound target
        */
        public getValue(): {};

        /**
            * Initialize the binding. The message should be called when creating a binding. If metadata is not yet available, do nothing, method will be called again when metadata is loaded.
        */
        protected initialize(): any;

    }
}