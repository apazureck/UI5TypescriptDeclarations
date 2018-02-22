declare module 'sap/ui/model/Context' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IContextSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Context extends Object {

        /**
            * Constructor for Context class.
        */
        public constructor(oModel: Model, sPath: string);


        /**
            * Creates a new subclass of class sap.ui.model.Context with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.Context.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Getter for model
        */
        public getModel(): Model;

        /**
            * Gets the (model dependent) object the context points to or the object with the given relative binding path
        */
        public getObject(sPath?: string, mParameters?: {}): {};

        /**
            * Getter for path of the context itself or a subpath
        */
        public getPath(sPath: string): string;

        /**
            * Gets the property with the given relative binding path
        */
        public getProperty(sPath: string): any;

    }
}