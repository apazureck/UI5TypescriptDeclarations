declare module 'sap/ui/table/AnalyticalColumn' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Column, IColumnSettings } from 'sap/ui/table/Column';

    export interface IAnalyticalColumnSettings extends IColumnSettings {
        leadingProperty?: string;
        summed?: boolean;
        inResult?: boolean;
        showIfGrouped?: boolean;
        groupHeaderFormatter?: any;
    }

    /**
    
    */
    export class AnalyticalColumn extends Column {

        /**
            * Constructor for a new AnalyticalColumn.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAnalyticalColumnSettings);


        /**
            * Creates a new subclass of class sap.ui.table.AnalyticalColumn with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Column.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
         * 
         * If the column is grouped, this formatter is used to format the value in the group header
        */
        public getGroupHeaderFormatter(): any;

        /**
            * Gets current value of property {@link #getInResult inResult}.
         * 
         * Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.
         * 
         * Default value is `false`.
        */
        public getInResult(): boolean;

        /**
            * Gets current value of property {@link #getLeadingProperty leadingProperty}.
         * 
         * Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.
        */
        public getLeadingProperty(): string;

        /**
            * Returns a metadata object for class sap.ui.table.AnalyticalColumn.
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
            * Gets current value of property {@link #getShowIfGrouped showIfGrouped}.
         * 
         * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.
         * 
         * Default value is `false`.
        */
        public getShowIfGrouped(): boolean;

        /**
            * Gets current value of property {@link #getSummed summed}.
         * 
         * If defined a sum for this column is calculated
         * 
         * Default value is `false`.
        */
        public getSummed(): boolean;

        /**
            * Sets a new value for property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
         * 
         * If the column is grouped, this formatter is used to format the value in the group header
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setGroupHeaderFormatter(oGroupHeaderFormatter: any): this;

        /**
            * Sets a new value for property {@link #getInResult inResult}.
         * 
         * Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setInResult(bInResult: boolean): this;

        /**
            * Sets a new value for property {@link #getLeadingProperty leadingProperty}.
         * 
         * Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLeadingProperty(sLeadingProperty: string): this;

        /**
            * Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.
         * 
         * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowIfGrouped(bShowIfGrouped: boolean): this;

        /**
            * Sets a new value for property {@link #getSummed summed}.
         * 
         * If defined a sum for this column is calculated
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSummed(bSummed: boolean): this;

    }
}