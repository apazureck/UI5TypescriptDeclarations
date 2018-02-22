declare module 'sap/ui/layout/form/GridContainerData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IGridContainerDataSettings extends ILayoutDataSettings {
        halfGrid?: boolean;
    }

    /**
    
    */
    export class GridContainerData extends LayoutData {

        /**
            * Constructor for a new sap.ui.layout.form.GridContainerData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGridContainerDataSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getHalfGrid halfGrid}.
         * 
         * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16 cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So containers are rendered only once per row.
         * 
         * Default value is `false`.
        */
        public getHalfGrid(): boolean;

        /**
            * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
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
            * Sets a new value for property {@link #getHalfGrid halfGrid}.
         * 
         * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16 cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So containers are rendered only once per row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHalfGrid(bHalfGrid: boolean): this;

    }
}