declare module 'sap/ui/core/Fragment' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IFragmentSettings extends IManagedObjectSettings {
        type?: string;
    }

    /**
    
    */
    export class Fragment extends ManagedObject {


        /**
            * Returns an Element/Control by its ID in the context of the Fragment with the given ID
        */
        public static byId(sFragmentId: string, sId: string): any;

        /**
            * Returns the ID which a Control with the given ID in the context of the Fragment with the given ID would have
        */
        public static createId(sFragmentId: string, sId: string): any;

        /**
            * Creates a new subclass of class sap.ui.core.Fragment with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.Fragment.
        */
        public static getMetadata(): Metadata | any;

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
            * Gets current value of property {@link #getType type}.
        */
        public getType(): string;

        /**
            * Registers a new Fragment type
        */
        public static registerType(sType: string, oFragmentImpl: {}): any;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): this;

    }
}