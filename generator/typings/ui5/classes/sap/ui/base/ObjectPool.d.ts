declare module 'sap/ui/base/ObjectPool' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IObjectPoolSettings extends IObjectSettings {
    }

    /**
    
    */
    export class ObjectPool extends Object {


        /**
            * Borrows a free object from the pool. Any arguments to this method are forwarded to the init method of the borrowed object.
        */
        public borrowObject(any?: any): {};

        /**
            * Creates a new subclass of class sap.ui.base.ObjectPool with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.base.ObjectPool.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns an object to the pool. The object must have been borrowed from this pool beforehand. The reset method is called on the object before it is added to the set of free objects.
        */
        public returnObject(oObject: {}): any;

    }
}