declare module 'sap/ui/core/ComponentMetadata' {
    import { Manifest } from 'sap/ui/core/Manifest';


    export interface IComponentMetadataSettings {
    }

    export class ComponentMetadata {

        /**
            * Creates a new metadata object for a Component subclass.
        */
        public constructor(sClassName: string, oStaticInfo: {});


        /**
            * Returns the name of the Component (which is the namespace only with the module name)
        */
        public getComponentName(): string;

        /**
            * Returns array of components specified in the metadata of the Component. If not specified or the array is empty, the return value is null. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getComponents(): {};

        /**
            * Returns a copy of the configuration property to disallow modifications. If no key is specified it returns the complete configuration property
        */
        public getConfig(sKey?: string, bDoNotMerge?: boolean): {};

        /**
            * Returns the custom Component configuration entry with the specified key (this must be a JSON object). If no key is specified, the return value is null.
         * 
         * Example: ` sap.ui.core.Component.extend("sample.Component", { metadata: { "my.custom.config" : { "property1" : true, "property2" : "Something else" } } }); `
         * 
         * The configuration above can be accessed via `sample.Component.getMetadata().getCustomEntry("my.custom.config")`.
        */
        public getCustomEntry(sKey: string, bMerged: boolean): {};

        /**
            * Returns the dependencies defined in the metadata of the Component. If not specified, the return value is null. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getDependencies(): {};

        /**
            * Returns the array of the included files that the Component requires such as CSS and JavaScript. If not specified or the array is empty, the return value is null. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getIncludes(): {};

        /**
            * Returns array of libraries specified in metadata of the Component, that are automatically loaded when an instance of the component is created. If not specified or the array is empty, the return value is null. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getLibs(): {};

        /**
            * Returns the manifest defined in the metadata of the Component. If not specified, the return value is null.
        */
        public getManifest(): {};

        /**
            * Returns the configuration of a manifest section or the value for a specific path. If no section or key is specified, the return value is null.
         * 
         * Example: ` { "sap.ui5": { "dependencies": { "libs": { "sap.m": {} }, "components": { "my.component.a": {} } } }); `
         * 
         * The configuration above can be accessed in the following ways:  * ** By section/namespace **: `oComponent.getMetadata().getManifestEntry("sap.ui5")` * ** By path **: `oComponent.getMetadata().getManifestEntry("/sap.ui5/dependencies/libs")` 
         * 
         * By section/namespace returns the configuration for the specified manifest section and by path allows to specify a concrete path to a dedicated entry inside the manifest. The path syntax always starts with a slash (/).
        */
        public getManifestEntry(sKey: string, bMerged?: boolean): any | any;

        /**
            * Returns the manifest object.
        */
        public getManifestObject(): Manifest;

        /**
            * Returns the version of the metadata which could be 1 or 2. 1 is for legacy metadata whereas 2 is for the manifest.
        */
        protected getMetadataVersion(): number;

        /**
            * Returns the raw manifest defined in the metadata of the Component. If not specified, the return value is null.
        */
        public getRawManifest(): {};

        /**
            * Returns the required version of SAPUI5 defined in the metadata of the Component. If returned value is null, then no special UI5 version is required. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getUI5Version(): string;

        /**
            * Returns the version of the component. If not specified, the return value is null. <p> ** Important: **
         *  If a Component is loaded using the manifest URL (or according the "manifest first" strategy), this function ignores the entries of the manifest file! It returns only the entries which have been defined in the Component metadata or in the proper Component manifest.
        */
        public getVersion(): string;

        /**
            * Returns whether the class of this metadata is a component base class or not.
        */
        protected isBaseClass(): boolean;

    }
}