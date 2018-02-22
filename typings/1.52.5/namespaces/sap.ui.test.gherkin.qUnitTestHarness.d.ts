declare namespace sap.ui.test.gherkin.qUnitTestHarness {
    // Methods
    /**
        * Dynamically generates and executes QUnit tests
        */
    export function test(args: { featurePath: string, steps: (() => any), }): any;
}