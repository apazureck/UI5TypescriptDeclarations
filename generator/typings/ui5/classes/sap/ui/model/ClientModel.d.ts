declare module 'sap/ui/model/ClientModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model, IModelSettings } from 'sap/ui/model/Model';

    export interface IClientModelSettings extends IModelSettings {
    }

    /**
    
    */
    export class ClientModel extends Model {


        /**
            
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.model.ClientModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Model.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Force no caching.
        */
        public forceNoCache(bForceNoCache?: boolean): any;

        /**
            * Returns the current data of the model. Be aware that the returned object is a reference to the model data so all changes to that data will also change the model data.
        */
        public getData(): any;

        /**
            * Returns a metadata object for class sap.ui.model.ClientModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * update all bindings
        */
        public updateBindings(bForceUpdate: boolean): any;

    }
}