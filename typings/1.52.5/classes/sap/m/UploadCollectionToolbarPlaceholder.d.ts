declare module 'sap/m/UploadCollectionToolbarPlaceholder' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IUploadCollectionToolbarPlaceholderSettings extends IControlSettings {
    }

    /**
    
    */
    export class UploadCollectionToolbarPlaceholder extends Control {

        /**
            * Constructor for a new UploadCollectionToolbarPlaceholder.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
         * 
         * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control} can be used.
        */
        public constructor(sId: string, mSettings: IUploadCollectionToolbarPlaceholderSettings);


        /**
            * Creates a new subclass of class sap.m.UploadCollectionToolbarPlaceholder with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.UploadCollectionToolbarPlaceholder.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

    }
}