declare module 'sap/ui/commons/form/SimpleForm' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SimpleForm as SimpleFormBase, ISimpleFormSettings as ISimpleFormBaseSettings } from 'sap/ui/layout/form/SimpleForm';

    export interface ISimpleFormSettings extends ISimpleFormBaseSettings {
    }

    /**
    
    */
    export class SimpleForm extends SimpleFormBase {

        /**
            * Constructor for a new form/SimpleForm.
        */
        public constructor(sId: string, mSettings: ISimpleFormSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.form.SimpleForm with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.SimpleForm.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Getter for property `layout`. The FormLayout that is used to render the SimpleForm
         * 
         * Default value is `ResponsiveLayout`
        */
        public getLayout(): sap.ui.layout.form.SimpleFormLayout;

        /**
            * Returns a metadata object for class sap.ui.commons.form.SimpleForm.
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
            * Setter for property `layout`.
         * 
         * Default value is `ResponsiveLayout`
        */
        public setLayout(oLayout: sap.ui.layout.form.SimpleFormLayout): this;

    }
}