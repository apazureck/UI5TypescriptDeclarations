declare module 'sap/ui/test/Opa5' {
    import { HashChanger } from 'sap/ui/core/routing/HashChanger';
    import { OpaPlugin } from 'sap/ui/test/OpaPlugin';
    import { Matcher } from 'sap/ui/test/matchers/Matcher';
    import { Action } from 'sap/ui/test/actions/Action';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IOpa5Settings extends IObjectSettings {
    }

    /**
    
    */
    export class Opa5 extends Object {


        /**
            * Create a page object configured as arrangement, action and assertion to the Opa.config. Use it to structure your arrangement, action and assertion based on parts of the screen to avoid name clashes and help to structure your tests.
        */
        public static createPageObjects(mPageObjects: { [key: string]: any, }): any;

        /**
            * Waits until all waitFor calls are done See {@link sap.ui.test.Opa.emptyQueue} for the description
        */
        public static emptyQueue(): any;

        /**
            * Extends and overwrites default values of the {@link sap.ui.test.Opa.config}. Most frequent usecase: ``
         *         // Every waitFor will append this namespace in front of your viewName
         *         Opa5.extendConfig({
         *            viewNamespace: "namespace.of.my.views."
         *         });
         * 
         *         var oOpa = new Opa5();
         * 
         *         // Looks for a control with the id "myButton" in a View with the name "namespace.of.my.views.Detail"
         *         oOpa.waitFor({
         *              id: "myButton",
         *              viewName: "Detail"
         *         });
         * 
         *         // Looks for a control with the id "myList" in a View with the name "namespace.of.my.views.Master"
         *         oOpa.waitFor({
         *              id: "myList",
         *              viewName: "Master"
         *         });
         *     ``
         * 
         * Sample usage: ``
         *         var oOpa = new Opa5();
         * 
         *         // this statement will  will time out after 15 seconds and poll every 400ms.
         *         // those two values come from the defaults of {@link sap.ui.test.Opa.config}.
         *         oOpa.waitFor({
         *         });
         * 
         *         // All wait for statements added after this will take other defaults
         *         Opa5.extendConfig({
         *             timeout: 10,
         *             pollingInterval: 100
         *         });
         * 
         *         // this statement will time out after 10 seconds and poll every 100 ms
         *         oOpa.waitFor({
         *         });
         * 
         *         // this statement will time out after 20 seconds and poll every 100 ms
         *         oOpa.waitFor({
         *             timeout: 20;
         *         });
         *     ``
        */
        public static extendConfig(options: {}): any;

        /**
            * Gives access to a singleton object you can save values in. See {@link sap.ui.test.Opa.getContext} for the description
        */
        public static getContext(): {};

        /**
            * Returns the HashChanger object in the current context. If an IFrame is launched, it will return the IFrame's HashChanger.
        */
        public static getHashChanger(): HashChanger;

        /**
            * Returns the jQuery object in the current context. If an IFrame is launched, it will return the IFrame's jQuery object.
        */
        public static getJQuery(): any;

        /**
            * Returns the Opa plugin used for retrieving controls. If an IFrame is launched, it will return the IFrame's plugin.
        */
        public static getPlugin(): OpaPlugin;

        /**
            * Return particular test lib config object. This method is intended to be used by test libraries to access their configuration provided by the test in the testLibs section in {@link sap.ui.test.Opa5.extendConfig}
        */
        public static getTestLibConfig(sTestLibName: string): {};

        /**
            * Returns the QUnit utils object in the current context. If an IFrame is launched, it will return the IFrame's QUnit utils.
        */
        public static getUtils(): any;

        /**
            * Returns the window object in the current context. If an IFrame is launched, it will return the IFrame's window.
        */
        public static getWindow(): any;

        /**
            * Checks if the application has been started using {@link sap.ui.test.Opa5#iStartMyAppInAFrame} or {@link sap.ui.test.Opa5#iStartMyUIComponent}
        */
        public hasAppStarted(): boolean;

        /**
            * Checks if the application has been started using {@link sap.ui.test.Opa5#iStartMyAppInAFrame}
        */
        public hasAppStartedInAFrame(): boolean;

        /**
            * Checks if the application has been started using {@link sap.ui.test.Opa5#iStartMyUIComponent}
        */
        public hasUIComponentStarted(): boolean;

        /**
            * Starts an app in an IFrame. Only works reliably if running on the same server.
        */
        public static iStartMyAppInAFrame(sSource: string, iTimeout?: number): any;

        /**
            * Starts an app in an IFrame. Only works reliably if running on the same server.
        */
        public iStartMyAppInAFrame(sSource: string, iTimeout?: number): any;

        /**
            * Starts a UIComponent.
        */
        public iStartMyUIComponent(oOptions: { componentConfig: {}, hash?: string, timeout?: number, }): any;

        /**
            * Tears down the started application regardless of how it was started. Removes the IFrame launched by {@link sap.ui.test.Opa5#iStartMyAppInAFrame} or destroys the UIComponent launched by {@link sap.ui.test.Opa5#iStartMyUIComponent}. This function is designed to make the test's teardown independent of the startup. Use {@link sap.ui.test.Opa5#hasAppStarted} to ensure that the application has been started and teardown can be safely performed.
        */
        public iTeardownMyApp(): any;

        /**
            * Removes the IFrame from the DOM and removes all the references to its objects Use {@link sap.ui.test.Opa5#hasAppStartedInAFrame} to ensure that an IFrame has been started and teardown can be safely performed.
        */
        public iTeardownMyAppFrame(): any;

        /**
            * Removes the IFrame from the DOM and removes all the references to its objects. Use {@link sap.ui.test.Opa5#hasAppStartedInAFrame} to ensure that an IFrame has been started and teardown can be safely performed.
        */
        public static iTeardownMyAppFrame(): any;

        /**
            * Destroys the UIComponent and removes the div from the dom like all the references on its objects. Use {@link sap.ui.test.Opa5#hasUIComponentStarted} to ensure that a UIComponent has been started and teardown can be safely performed.
        */
        public iTeardownMyUIComponent(): any;

        /**
            * Resets Opa.config to its default values. See {@link sap.ui.test.Opa5#waitFor} for the description Default values for OPA5 are:  * viewNamespace: empty string * arrangements: instance of OPA5 * actions: instance of OPA5 * assertions: instance of OPA5 * visible: true * timeout : 15 seconds, 0 for infinite timeout * pollingInterval: 400 milliseconds * debugTimeout: 0 seconds, infinite timeout by default. This will be used instead of timeout if running in debug mode. * autoWait: false - since 1.42 * appParams: object with URI parameters for the tested app - since 1.48 
        */
        public static resetConfig(): any;

        /**
            * Clears the queue and stops running tests so that new tests can be run. This means all waitFor statements registered by {@link sap.ui.test.Opa5#waitFor} will not be invoked anymore and the promise returned by {@link sap.ui.test.Opa5.emptyQueue} will be rejected. When its called inside of a check in {@link sap.ui.test.Opa5#waitFor} the success function of this waitFor will not be called.
        */
        public static stopQueue(): any;

        /**
            * Takes the same parameters as {@link sap.ui.test.Opa#waitFor}. Also allows you to specify additional parameters:
        */
        public waitFor(options: { id?: string | RegExp, viewName?: string, viewNamespace?: string, matchers?: (() => any) | any[] | Matcher, controlType?: string, searchOpenDialogs?: boolean, visible?: boolean, timeout?: number, debugTimeout?: number, pollingInterval?: number, check?: (() => any), success?: (() => any), error?: (() => any), errorMessage?: string, actions: (() => any) | {} | Action | {}, autoWait?: boolean, }): any;

    }
}