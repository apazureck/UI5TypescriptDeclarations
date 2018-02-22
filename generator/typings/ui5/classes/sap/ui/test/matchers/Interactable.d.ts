declare module 'sap/ui/test/matchers/Interactable' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Matcher, IMatcherSettings } from 'sap/ui/test/matchers/Matcher';

    export interface IInteractableSettings extends IMatcherSettings {
    }

    /**
    
    */
    export class Interactable extends Matcher {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.Interactable with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.matchers.Interactable.
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

    }
}