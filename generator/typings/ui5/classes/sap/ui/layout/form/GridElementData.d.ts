declare module 'sap/ui/layout/form/GridElementData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IGridElementDataSettings extends ILayoutDataSettings {
        hCells?: sap.ui.layout.form.GridElementCells;
        vCells?: number;
    }

    /**
    
    */
    export class GridElementData extends LayoutData {

        /**
            * Constructor for a new sap.ui.layout.form.GridElementData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGridElementDataSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.form.GridElementData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getHCells hCells}.
         * 
         * Number of cells in horizontal direction.
         * 
         * If set to `auto`, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
         * 
         * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row and the label is displayed above.
         * 
         * ** Note: ** For labels, the full size setting has no effect.
         * 
         * Default value is `auto`.
        */
        public getHCells(): sap.ui.layout.form.GridElementCells;

        /**
            * Returns a metadata object for class sap.ui.layout.form.GridElementData.
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
            * Gets current value of property {@link #getVCells vCells}.
         * 
         * Number of cells in vertical direction.
         * 
         * ** Note: ** This property has no effect on labels.
         * 
         * Default value is `1`.
        */
        public getVCells(): number;

        /**
            * Sets a new value for property {@link #getHCells hCells}.
         * 
         * Number of cells in horizontal direction.
         * 
         * If set to `auto`, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
         * 
         * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row and the label is displayed above.
         * 
         * ** Note: ** For labels, the full size setting has no effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setHCells(sHCells: sap.ui.layout.form.GridElementCells): this;

        /**
            * Sets a new value for property {@link #getVCells vCells}.
         * 
         * Number of cells in vertical direction.
         * 
         * ** Note: ** This property has no effect on labels.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setVCells(iVCells: number): this;

    }
}