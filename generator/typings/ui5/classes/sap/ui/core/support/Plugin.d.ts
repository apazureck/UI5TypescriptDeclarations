declare module 'sap/ui/core/support/Plugin' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IPluginSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Plugin extends Object {


        /**
            * Returns the DOM node that represents this plugin wrapped as jQuery object.
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be wrapped by jQuery. This matches the naming convention for named inner DOM nodes of a plugin.
         * 
         * If no suffix is given and if no DOM exists, a DIV with the ID of this plugin will be created and appended to the support popup content section (identified by class .sapUiSupportCntnt).
        */
        private $(sSuffix?: string): any;

        /**
            * Adds the given stylesheet to the Support Tool's HTML page.
         * 
         * A &lt;link&gt; tag will be added to the head of the HTML page, referring to the given CSS resource. The URL of the resource is determined from the given resource name by calling {@link jQuery.sap.getResourcePath}.
         * 
         * A plugin should call this method only when it is {@link #runsAsToolPlugin running inside the tool window}.
        */
        private addStylesheet(sCssResourcePath: string): any;

        /**
            * Finalization function called each time the support mode is ended (support popup is closed).
        */
        private exit(oSupportStub: any): any;

        /**
            * Creates a new subclass of class sap.ui.core.support.Plugin with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the id of this plugin instance.
        */
        private getId(): string;

        /**
            * Returns a metadata object for class sap.ui.core.support.Plugin.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the title of this plugin instance.
        */
        private getTitle(): string;

        /**
            * Initialization function called each time the support mode is started (diagnostics popup is opened). For Plugins that are for diagnostics tool window and application window, the init method is called twice, with the `oSupportStub`
        */
        private init(oSupportStub: any): any;

        /**
            * Returns whether the plugin is currently active or not.
        */
        private isActive(): boolean;

        /**
            * Returns whether this plugin instance can run in the application window, default is `true`. Plugins that are ** only ** available on the diagnostics tool window should return `false` and overwrite the method for this matter.
         * 
         * The method is also used in a static manner (called on the prototype) and therefore must not rely on any instance specific members.
        */
        private isAppPlugin(): boolean;

        /**
            * Returns whether a plugin instance can run in the diagnostics tool window, default is `true`. Plugins that are ** only ** available on the application window should return `false` and overwrite the method for this matter.
         * 
         * The method is also used in a static manner (called on the prototype) and therefore must not rely on any instance specific members.
        */
        private isToolPlugin(): boolean;

        /**
            * Returns true if the plugin instance currently runs in tool window, otherwise false
        */
        private runsAsToolPlugin(): boolean;

    }
}