declare module 'sap/ui/test/actions/Action' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IActionSettings extends IManagedObjectSettings {
        idSuffix?: string;
    }

    /**
    
    */
    export class Action extends ManagedObject {


        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter Should be overwritten by subclasses
        */
        protected executeOn(element: Control): any;

        /**
            * Creates a new subclass of class sap.ui.test.actions.Action with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIdSuffix idSuffix}.
        */
        public getIdSuffix(): string;

        /**
            * Returns a metadata object for class sap.ui.test.actions.Action.
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
            * Sets a new value for property {@link #getIdSuffix idSuffix}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIdSuffix(sIdSuffix: string): this;

    }
}