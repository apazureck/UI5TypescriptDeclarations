declare module 'sap/m/P13nSortItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IP13nSortItemSettings extends IItemSettings {
        operation?: string;
        columnKey?: string;
    }

    /**
    
    */
    export class P13nSortItem extends Item {

        /**
            * Constructor for a new P13nSortItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nSortItemSettings);


        /**
            * Creates a new subclass of class sap.m.P13nSortItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColumnKey columnKey}.
         * 
         * key of the column
        */
        public getColumnKey(): string;

        /**
            * Returns a metadata object for class sap.m.P13nSortItem.
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
            * Gets current value of property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
        */
        public getOperation(): string;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * key of the column
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setOperation(sOperation: string): this;

    }
}