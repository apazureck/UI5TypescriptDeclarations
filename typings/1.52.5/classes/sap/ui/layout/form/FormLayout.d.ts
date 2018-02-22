declare module 'sap/ui/layout/form/FormLayout' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFormLayoutSettings extends IControlSettings {
        backgroundDesign?: sap.ui.layout.BackgroundDesign;
    }

    /**
    
    */
    export class FormLayout extends Control {

        /**
            * Constructor for a new sap.ui.layout.form.FormLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFormLayoutSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.form.FormLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the `Form` content.
         * 
         * ** Note: ** The visualization of the different options depends on the theme used.
         * 
         * Default value is `Translucent`.
        */
        public getBackgroundDesign(): sap.ui.layout.BackgroundDesign;

        /**
            * Returns a metadata object for class sap.ui.layout.form.FormLayout.
        */
        public static getMetadata(): Metadata | any | {};

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

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the `Form` content.
         * 
         * ** Note: ** The visualization of the different options depends on the theme used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Translucent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.ui.layout.BackgroundDesign): this;

    }
}