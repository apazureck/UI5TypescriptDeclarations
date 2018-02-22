declare module 'sap/m/UploadCollectionParameter' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IUploadCollectionParameterSettings extends IElementSettings {
        name?: string;
        value?: string;
    }

    /**
    
    */
    export class UploadCollectionParameter extends Element {

        /**
            * Constructor for a new UploadCollectionParameter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IUploadCollectionParameterSettings);


        /**
            * Creates a new subclass of class sap.m.UploadCollectionParameter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.UploadCollectionParameter.
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

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * Specifies the name of the parameter.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Specifies the value of the parameter.
        */
        public getValue(): string;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Specifies the name of the parameter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Specifies the value of the parameter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

    }
}