declare module 'sap/ui/core/VariantLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IVariantLayoutDataSettings extends ILayoutDataSettings {
    }

    /**
    
    */
    export class VariantLayoutData extends LayoutData {

        /**
            * Constructor for a new VariantLayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IVariantLayoutDataSettings);


        /**
            * Adds some multipleLayoutData to the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public addMultipleLayoutData(oMultipleLayoutData: LayoutData): this;

        /**
            * Destroys all the multipleLayoutData in the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public destroyMultipleLayoutData(): this;

        /**
            * Creates a new subclass of class sap.ui.core.VariantLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.VariantLayoutData.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets content of aggregation {@link #getMultipleLayoutData multipleLayoutData}.
         * 
         * Allows multiple LayoutData.
        */
        public getMultipleLayoutData(): {};

        /**
            * Checks for the provided `sap.ui.core.LayoutData` in the aggregation {@link #getMultipleLayoutData multipleLayoutData}. and returns its index if found or -1 otherwise.
        */
        public indexOfMultipleLayoutData(oMultipleLayoutData: LayoutData): number;

        /**
            * Inserts a multipleLayoutData into the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public insertMultipleLayoutData(oMultipleLayoutData: LayoutData, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMultipleLayoutData(): {};

        /**
            * Removes a multipleLayoutData from the aggregation {@link #getMultipleLayoutData multipleLayoutData}.
        */
        public removeMultipleLayoutData(vMultipleLayoutData: number | string | LayoutData): LayoutData;

    }
}