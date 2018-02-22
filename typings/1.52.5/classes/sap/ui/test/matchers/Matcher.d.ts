declare module 'sap/ui/test/matchers/Matcher' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IMatcherSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class Matcher extends ManagedObject {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.Matcher with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.matchers.Matcher.
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
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: Control): boolean;

    }
}