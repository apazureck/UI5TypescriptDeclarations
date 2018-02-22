declare module 'sap/m/P13nFilterItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IP13nFilterItemSettings extends IItemSettings {
        operation?: string;
        value1?: string;
        value2?: string;
        columnKey?: string;
        exclude?: boolean;
    }

    /**
    
    */
    export class P13nFilterItem extends Item {

        /**
            * Constructor for a new P13nFilterItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nFilterItemSettings);


        /**
            * Creates a new subclass of class sap.m.P13nFilterItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
            * Gets current value of property {@link #getExclude exclude}.
         * 
         * defines if the filter is an include or exclude filter item
         * 
         * Default value is `false`.
        */
        public getExclude(): boolean;

        /**
            * Returns a metadata object for class sap.m.P13nFilterItem.
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
            * Gets current value of property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
        */
        public getOperation(): string;

        /**
            * Gets current value of property {@link #getValue1 value1}.
         * 
         * value of the filter
        */
        public getValue1(): string;

        /**
            * Gets current value of property {@link #getValue2 value2}.
         * 
         * to value of the between filter
        */
        public getValue2(): string;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * key of the column
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getExclude exclude}.
         * 
         * defines if the filter is an include or exclude filter item
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExclude(bExclude: boolean): this;

        /**
            * Sets a new value for property {@link #getOperation operation}.
         * 
         * sap.m.P13nConditionOperation
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setOperation(sOperation: string): this;

        /**
            * Sets a new value for property {@link #getValue1 value1}.
         * 
         * value of the filter
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue1(sValue1: string): this;

        /**
            * Sets a new value for property {@link #getValue2 value2}.
         * 
         * to value of the between filter
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue2(sValue2: string): this;

    }
}