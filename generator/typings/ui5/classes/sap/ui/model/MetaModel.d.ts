declare module 'sap/ui/model/MetaModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model, IModelSettings } from 'sap/ui/model/Model';

    export interface IMetaModelSettings extends IModelSettings {
    }

    /**
    
    */
    export class MetaModel extends Model {


        /**
            * Creates a new subclass of class sap.ui.model.MetaModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.MetaModel.
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