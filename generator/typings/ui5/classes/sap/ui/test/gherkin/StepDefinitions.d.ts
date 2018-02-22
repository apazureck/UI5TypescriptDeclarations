declare module 'sap/ui/test/gherkin/StepDefinitions' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IStepDefinitionsSettings extends IObjectSettings {
    }

    export class StepDefinitions extends Object {


        /**
            * Closes the application and cleans up any mess made by the tests. To avoid erroneous exceptions during test execution, make sure that it is safe to run this method even if the application was never started.
        */
        public closeApplication(): any;

        /**
            * Creates a new subclass of class sap.ui.test.gherkin.StepDefinitions with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.gherkin.StepDefinitions.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Registers the step definitions by calling the method "register".
        */
        public init(): any;

        /**
            * Registers a step definition.
        */
        public register(rRegex: RegExp, fnFunc: (() => any)): any;

    }
}