declare module 'sap/ui/test/Opa' {


    export interface IOpaSettings {
    }

    /**
    
    */
    export class Opa {


        /**
            * Calls the static emptyQueue function in the Opa namespace {@link sap.ui.test.Opa.emptyQueue}
        */
        public emptyQueue(): any;

        /**
            * Waits until all waitFor calls are done.
        */
        public static emptyQueue(): any;

        /**
            * Calls the static extendConfig function in the Opa namespace {@link sap.ui.test.Opa.extendConfig}
        */
        public extendConfig(): any;

        /**
            * Extends and overwrites default values of the {@link sap.ui.test.Opa.config}. Sample usage: ``
         *         var oOpa = new Opa();
         * 
         *         // this statement will  will time out after 15 seconds and poll every 400ms.
         *         // those two values come from the defaults of {@link sap.ui.test.Opa.config}.
         *         oOpa.waitFor({
         *         });
         * 
         *         // All wait for statements added after this will take other defaults
         *         Opa.extendConfig({
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
            * Gives access to a singleton object you can save values in. This object will only be created once and it will never be destroyed. That means you can use it to save values you need in multiple separated tests.
        */
        public getContext(): {};

        /**
            * Gives access to a singleton object you can save values in. Same as {@link sap.ui.test.Opa#getContext}
        */
        public static getContext(): {};

        /**
            * Reset Opa.config to its default values. All of the global values can be overwritten in an individual waitFor call.
         * 
         * The default values are:  * arrangements: A new Opa instance * actions: A new Opa instance * assertions: A new Opa instance * timeout : 15 seconds, 0 for infinite timeout * pollingInterval: 400 milliseconds * debugTimeout: 0 seconds, infinite timeout by default. This will be used instead of timeout if running in debug mode. * executionDelay: 0 or 50 (depending on the browser). The value is a number representing milliseconds. The executionDelay will slow down the execution of every single waitFor statement to be delayed by the number of milliseconds. This does not effect the polling interval it just adds an initial pause. Use this parameter to slow down OPA when you want to watch your test during development or checking the UI of your app. It is not recommended to use this parameter in any automated test executions. 
        */
        public static resetConfig(): any;

        /**
            * Clears the queue and stops running tests so that new tests can be run. This means all waitFor statements registered by {@link sap.ui.test.Opa#waitFor} will not be invoked anymore and the promise returned by {@link sap.ui.test.Opa.emptyQueue} will be rejected When it is called inside of a check in {@link sap.ui.test.Opa#waitFor} the success function of this waitFor will not be called.
        */
        public static stopQueue(): any;

        /**
            * Queues up a waitFor command for Opa. The Queue will not be emptied until {@link sap.ui.test.Opa.emptyQueue} is called. If you are using {@link sap.ui.test.opaQunit}, emptyQueue will be called by the wrapped tests.
         * 
         * If you are using Opa5, waitFor takes additional parameters. They can be found here: {@link sap.ui.test.Opa5#waitFor}. Waits for a check condition to return true, in which case a success function will be called. If the timeout is reached before the check returns true, an error function will be called.
        */
        public waitFor(options: { timeout?: number, debugTimeout?: number, pollingInterval?: number, check?: (() => any), success?: (() => any), errorMessage?: string, }): any;

    }
}