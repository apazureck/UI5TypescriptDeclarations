declare module 'sap/ui/core/tmpl/Template' {
    import { View } from 'sap/ui/core/mvc/View';
    import { TemplateControl } from 'sap/ui/core/tmpl/TemplateControl';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Interface } from 'sap/ui/base/Interface';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface ITemplateSettings extends IManagedObjectSettings {
        content?: string;
    }

    /**
    
    */
    export class Template extends ManagedObject {

        /**
            * Creates and initializes a new template with the given `sId` and settings.
         * 
         * The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described there.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITemplateSettings);


        /**
            * Returns the registered template for the given ID, if any.
        */
        public static byId(sId: string): Template;

        /**
            * Creates an anonymous TemplateControl for the Template.
        */
        public createControl(sId: string, oContext: {}, oView: View): TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template.
        */
        public createControl(sId: string, oView: View): TemplateControl;

        /**
            * Declares a new control based on this template and returns the created class / constructor function. The class is based on the information coming from the abstract functions `createMetadata` and `createRenderer`.
        */
        public declareControl(sControl: string): (() => any);

        /**
            * Creates a new subclass of class sap.ui.core.tmpl.Template with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getContent content}.
         * 
         * The Template definition as a String.
        */
        public getContent(): string;

        /**
            
        */
        public getInterface(): any | Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.tmpl.Template.
        */
        public static getMetadata(): Metadata | any;

        /**
            * parses the given path and extracts the model and path
        */
        protected static parsePath(sPath: string): {};

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, oContext: {}, vPosition: string | number, bInline: boolean): TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, oContext: {}, bInline: boolean): TemplateControl;

        /**
            * Creates an anonymous TemplateControl for the Template and places the control into the specified DOM element.
        */
        public placeAt(oRef: string | any, vPosition: string | number, bInline: boolean): TemplateControl;

        /**
            * Sets a new value for property {@link #getContent content}.
         * 
         * The Template definition as a String.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContent(sContent: string): this;

    }
}