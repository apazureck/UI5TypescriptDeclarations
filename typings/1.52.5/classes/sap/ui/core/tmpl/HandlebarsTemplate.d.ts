declare module 'sap/ui/core/tmpl/HandlebarsTemplate' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Template, ITemplateSettings } from 'sap/ui/core/tmpl/Template';

    export interface IHandlebarsTemplateSettings extends ITemplateSettings {
    }

    /**
    
    */
    export class HandlebarsTemplate extends Template {

        /**
            * Creates and initializes a new handlebars template with the given `sId` and settings.
         * 
         * The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described there.
        */
        public constructor(sId: string, mSettings: IHandlebarsTemplateSettings);


        /**
            * Creates a new subclass of class sap.ui.core.tmpl.HandlebarsTemplate with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.tmpl.Template.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.tmpl.HandlebarsTemplate.
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