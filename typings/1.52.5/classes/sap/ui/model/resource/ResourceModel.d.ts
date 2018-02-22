declare module 'sap/ui/model/resource/ResourceModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model, IModelSettings } from 'sap/ui/model/Model';

    export interface IResourceModelSettings extends IModelSettings {
    }

    /**
    
    */
    export class ResourceModel extends Model {


        /**
            * Enhances the resource model with a custom resource bundle. The resource model can be enhanced with multiple resource bundles. The last enhanced resource bundle wins against the previous ones and the original ones. This function can be called several times.
        */
        public enhance(oData: { bundleUrl?: string, bundleName?: string, bundleLocale?: string, }): any;

        /**
            * Creates a new subclass of class sap.ui.model.resource.ResourceModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.resource.ResourceModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the value for the property with the given `sPropertyName`
        */
        public getProperty(sPath: string): string | any;

        /**
            * Implement in inheriting classes
        */
        public getProperty(sPath: string, oContext?: {}): any;

        /**
            * Returns the resource bundle of this model
        */
        public getResourceBundle(): jQuery.sap.util.ResourceBundle | any;

    }
}