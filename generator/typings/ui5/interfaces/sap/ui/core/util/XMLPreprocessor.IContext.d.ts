declare namespace sap.ui.core.util.XMLPreprocessor {

    /**
    
    */
    export interface IContext {


        /**
            * Returns a context interface for the indicated part in case of the root formatter of a composite binding. The new interface provides access to the original settings, but only to the model and path of the indicated part: `this.getInterface(i).getSetting(sName) === this.getSetting(sName);
         * this.getInterface(i).getModel() === this.getModel(i);
         * this.getInterface(i).getPath() === this.getPath(i);`
         * 
         * If a path is given, the new interface points to the resolved path as follows: `this.getInterface(i, "foo/bar").getPath() === this.getPath(i) + "/foo/bar";
         * this.getInterface(i, "/absolute/path").getPath() === "/absolute/path";` A formatter which is not at the root level of a composite binding can also provide a path, but must not provide an index: `this.getInterface("foo/bar").getPath() === this.getPath() + "/foo/bar";
         * this.getInterface("/absolute/path").getPath() === "/absolute/path";` Note that at least one argument must be present.
        */
        getInterface(iPart: number, sPath: string): IContext;

        /**
            * Returns the model related to the current formatter call.
        */
        getModel(iPart: number): any;

        /**
            * Returns the absolute path related to the current formatter call.
        */
        getPath(iPart: number): string;

        /**
            * Returns the value of the setting with the given name which was provided to the XML template processing.
        */
        getSetting(sName: string): any;

    }
}