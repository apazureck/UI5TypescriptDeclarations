declare module 'sap/ui/model/ContextBinding' {
    import { Context } from 'sap/ui/model/Context';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Binding, IBindingSettings } from 'sap/ui/model/Binding';

    export interface IContextBindingSettings extends IBindingSettings {
    }

    /**
    
    */
    export class ContextBinding extends Binding {

        /**
            * Constructor for ContextBinding
        */
        public constructor(oModel: Model, sPath: string, oContext: {}, mParameters: {}, oEvents: {});


        /**
            * Creates a new subclass of class sap.ui.model.ContextBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Return the bound context.
        */
        public getBoundContext(): Context;

        /**
            * Returns a metadata object for class sap.ui.model.ContextBinding.
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