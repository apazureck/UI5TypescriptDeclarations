declare module 'sap/m/P13nColumnsItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IP13nColumnsItemSettings extends IItemSettings {
        columnKey?: string;
        index?: number;
        visible?: boolean;
        width?: string;
        total?: boolean;
    }

    /**
    
    */
    export class P13nColumnsItem extends Item {

        /**
            * Constructor for a new P13nColumnsItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nColumnsItemSettings);


        /**
            * Creates a new subclass of class sap.m.P13nColumnsItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColumnKey columnKey}.
         * 
         * This property contains the unique table column key
        */
        public getColumnKey(): string;

        /**
            * Gets current value of property {@link #getIndex index}.
         * 
         * This property contains the index of a table column
        */
        public getIndex(): number;

        /**
            * Returns a metadata object for class sap.m.P13nColumnsItem.
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
            * Gets current value of property {@link #getTotal total}.
         * 
         * This property contains the total flag of a table column.
        */
        public getTotal(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * This property decides whether a `P13nColumnsItem` is visible
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * This property contains the with of a table column.
        */
        public getWidth(): string;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * This property contains the unique table column key
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getIndex index}.
         * 
         * This property contains the index of a table column
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndex(iIndex: number): this;

        /**
            * Sets a new value for property {@link #getTotal total}.
         * 
         * This property contains the total flag of a table column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTotal(bTotal: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * This property decides whether a `P13nColumnsItem` is visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * This property contains the with of a table column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: string): this;

    }
}