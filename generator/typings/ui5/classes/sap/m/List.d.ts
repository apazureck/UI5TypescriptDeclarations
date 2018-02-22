declare module 'sap/m/List' {
    import { Column } from 'sap/m/Column';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListBase, IListBaseSettings } from 'sap/m/ListBase';

    export interface IListSettings extends IListBaseSettings {
        backgroundDesign?: sap.m.BackgroundDesign;
    }

    /**
    
    */
    export class List extends ListBase {

        /**
            * Constructor for a new List.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IListSettings);


        /**
            * Adds some column to the aggregation {@link #getColumns columns}.
        */
        public addColumn(oColumn: Column): this;

        /**
            * Destroys all the columns in the aggregation {@link #getColumns columns}.
        */
        public destroyColumns(): this;

        /**
            * Creates a new subclass of class sap.m.List with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Sets the background style of the list. Depending on the theme, you can change the state of the background from `Solid` to `Translucent` or to `Transparent`.
         * 
         * Default value is `Solid`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets content of aggregation {@link #getColumns columns}.
         * 
         * Defines columns of the list.
        */
        public getColumns(): {};

        /**
            * Returns a metadata object for class sap.m.List.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Checks for the provided `sap.m.Column` in the aggregation {@link #getColumns columns}. and returns its index if found or -1 otherwise.
        */
        public indexOfColumn(oColumn: Column): number;

        /**
            * Inserts a column into the aggregation {@link #getColumns columns}.
        */
        public insertColumn(oColumn: Column, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getColumns columns}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllColumns(): {};

        /**
            * Removes a column from the aggregation {@link #getColumns columns}.
        */
        public removeColumn(vColumn: number | string | Column): Column;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Sets the background style of the list. Depending on the theme, you can change the state of the background from `Solid` to `Translucent` or to `Transparent`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Solid`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

    }
}