declare module 'sap/ui/layout/form/GridLayout' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { FormLayout, IFormLayoutSettings } from 'sap/ui/layout/form/FormLayout';

    export interface IGridLayoutSettings extends IFormLayoutSettings {
        singleColumn?: boolean;
    }

    /**
    
    */
    export class GridLayout extends FormLayout {

        /**
            * Constructor for a new sap.ui.layout.form.GridLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGridLayoutSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.form.GridLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.layout.form.GridLayout.
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
            * Gets current value of property {@link #getSingleColumn singleColumn}.
         * 
         * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below the other. The whole grid has 8 cells per row.
         * 
         * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed beside each other. In this case the whole grid has 16 cells per row.
         * 
         * Default value is `false`.
        */
        public getSingleColumn(): boolean;

        /**
            * Sets a new value for property {@link #getSingleColumn singleColumn}.
         * 
         * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below the other. The whole grid has 8 cells per row.
         * 
         * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed beside each other. In this case the whole grid has 16 cells per row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSingleColumn(bSingleColumn: boolean): this;

    }
}