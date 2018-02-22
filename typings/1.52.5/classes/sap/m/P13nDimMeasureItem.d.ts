declare module 'sap/m/P13nDimMeasureItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IP13nDimMeasureItemSettings extends IItemSettings {
        columnKey?: string;
        index?: number;
        visible?: boolean;
        role?: string;
    }

    /**
    
    */
    export class P13nDimMeasureItem extends Item {

        /**
            * Constructor for a new P13nDimMeasureItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nDimMeasureItemSettings);


        /**
            * Creates a new subclass of class sap.m.P13nDimMeasureItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColumnKey columnKey}.
         * 
         * Specifies the unique chart column key. In this context a column refers to dimensions or measures of a chart.
        */
        public getColumnKey(): string;

        /**
            * Gets current value of property {@link #getIndex index}.
         * 
         * Specifies the order of visible dimensions or measures of a chart.
         * 
         * Default value is `-1`.
        */
        public getIndex(): number;

        /**
            * Returns a metadata object for class sap.m.P13nDimMeasureItem.
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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getRole role}.
         * 
         * Specifies the role of dimensions or measures. The role determines how dimensions and measures influence the chart.
        */
        public getRole(): string;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies the visibility of dimensions or measures.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * Specifies the unique chart column key. In this context a column refers to dimensions or measures of a chart.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getIndex index}.
         * 
         * Specifies the order of visible dimensions or measures of a chart.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setIndex(iIndex: number): this;

        /**
            * Sets a new value for property {@link #getRole role}.
         * 
         * Specifies the role of dimensions or measures. The role determines how dimensions and measures influence the chart.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRole(sRole: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies the visibility of dimensions or measures.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setVisible(bVisible: boolean): this;

    }
}