declare module 'sap/ui/test/actions/Press' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Action, IActionSettings } from 'sap/ui/test/actions/Action';

    export interface IPressSettings extends IActionSettings {
    }

    export class Press extends Action {


        /**
            * Sets focus on given control and triggers a 'tap' event on it (which is internally translated into a 'press' event). Logs an error if control is not visible (i.e. has no dom representation)
        */
        protected executeOn(oControl: Control): any;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter Should be overwritten by subclasses
        */
        protected executeOn(element: Control): any;

        /**
            * Creates a new subclass of class sap.ui.test.actions.Press with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.actions.Action.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.actions.Press.
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