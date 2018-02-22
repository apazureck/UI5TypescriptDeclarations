declare module 'sap/ui/core/Manifest' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IManifestSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Manifest extends Object {

        /**
            * Creates and initializes a manifest wrapper which provides API access to the content of the manifest.
        */
        public constructor(oManifest: {}, mOptions: { componentName?: string, baseUrl?: string, process?: boolean, });


        /**
            * Creates a new subclass of class sap.ui.core.Manifest with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the Component name which is defined in the manifest as `sap.ui5/componentName` or `sap.app/id`
        */
        public getComponentName(): string;

        /**
            * Returns the configuration of a manifest section or the value for a specific path. If no key is specified, the return value is null.
         * 
         * Example: ` { "sap.ui5": { "dependencies": { "libs": { "sap.m": {} }, "components": { "my.component.a": {} } } }); `
         * 
         * The configuration above can be accessed in the following ways:  * ** By section/namespace **: `oManifest.getEntry("sap.ui5")` * ** By path **: `oManifest.getEntry("/sap.ui5/dependencies/libs")` 
         * 
         * By section/namespace returns the configuration for the specified manifest section and by path allows to specify a concrete path to a dedicated entry inside the manifest. The path syntax always starts with a slash (/).
        */
        public getEntry(sKey: string): any | any;

        /**
            * Returns the manifest defined in the metadata of the component. If not specified, the return value is null.
        */
        public getJson(): {};

        /**
            * Returns a metadata object for class sap.ui.core.Manifest.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the raw manifest defined in the metadata of the component. If not specified, the return value is null.
        */
        public getRawJson(): {};

        /**
            * Function to load the manifest by URL
        */
        protected static load(mOptions: { manifestUrl: string, componentName?: string, async?: boolean, failOnError?: boolean, }): Manifest | any;

    }
}