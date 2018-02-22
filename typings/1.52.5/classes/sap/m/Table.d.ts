declare module 'sap/m/Table' {
    import { Column } from 'sap/m/Column';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element } from 'sap/ui/core/Element';
    import { ListBase, IListBaseSettings } from 'sap/m/ListBase';

    export interface ITableSettings extends IListBaseSettings {
        backgroundDesign?: sap.m.BackgroundDesign;
        fixedLayout?: boolean;
        showOverlay?: boolean;
        alternateRowColors?: boolean;
        popinLayout?: sap.m.PopinLayout;
    }

    /**
    
    */
    export class Table extends ListBase {

        /**
            * Constructor for a new Table.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITableSettings);


        /**
            * Adds some column to the aggregation {@link #getColumns columns}.
        */
        public addColumn(oColumn: Column): this;

        /**
            * Destroys all the columns in the aggregation {@link #getColumns columns}.
        */
        public destroyColumns(): this;

        /**
            * This method is a hook for the RenderManager that gets called during the rendering of child Controls. It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.
        */
        protected enhanceAccessibilityState(oElement: Control, mAriaProps: {}): any | {};

        /**
            * Allows the parent of a control to enhance the aria information during rendering.
         * 
         * This function is called by the RenderManager's writeAccessibilityState method for the parent of the currently rendered control - if the parent implements it.
        */
        protected enhanceAccessibilityState(oElement: this, mAriaProps: {}): {};

        /**
            * Creates a new subclass of class sap.m.Table with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
         * 
         * Enables alternating table row colors. ** Note: ** This property can only be used with the Belize and Belize Deep themes. Alternate row coloring is not available for the High Contrast Black/White themes.
         * 
         * Default value is `false`.
        */
        public getAlternateRowColors(): boolean;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Sets the background style of the table. Depending on the theme, you can change the state of the background from `Solid` to `Translucent` or to `Transparent`.
         * 
         * Default value is `Translucent`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Getter for aggregation columns.
        */
        public getColumns(bSort?: boolean): {};

        /**
            * Gets current value of property {@link #getFixedLayout fixedLayout}.
         * 
         * Defines the algorithm to be used to layout the table cells, rows, and columns. By default, a table is rendered with fixed layout algorithm. This means the horizontal layout only depends on the table's width and the width of the columns, not the contents of the cells. Cells in subsequent rows do not affect column widths. This allows a browser to layout the table faster than the auto table layout since the browser can begin to display the table once the first row has been analyzed.
         * 
         * When this property is set to `false`, `sap.m.Table` is rendered with auto layout algorithm. This means, the width of the table and its cells depends on the contents of the cells. The column width is set by the widest unbreakable content inside the cells. This can make the rendering slow, since the browser needs to read through all the content in the table before determining the final layout. ** Note: ** Since `sap.m.Table` does not have its own scrollbars, setting `fixedLayout` to false can force the table to overflow, which may cause visual problems. It is suggested to use this property when a table has a few columns in wide screens or within the horizontal scroll container (e.g `sap.m.Dialog`) to handle overflow. In auto layout mode the `width` property of `sap.m.Column` is taken into account as a minimum width.
         * 
         * Default value is `true`.
        */
        public getFixedLayout(): boolean;

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
            * Returns a metadata object for class sap.m.Table.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getPopinLayout popinLayout}.
         * 
         * Defines the layout in which the table pop-in rows are rendered. ** Note: ** The `demandPopin` and `minScreenWidth` properties of the `Column` control must be configured appropriately.
         * 
         * Default value is `Block`.
        */
        public getPopinLayout(): sap.m.PopinLayout;

        /**
            * Gets current value of property {@link #getShowOverlay showOverlay}.
         * 
         * Setting this property to `true` will show an overlay on top of the table content and prevents the user interaction with it.
         * 
         * Default value is `false`.
        */
        public getShowOverlay(): boolean;

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
            * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
         * 
         * Enables alternating table row colors. ** Note: ** This property can only be used with the Belize and Belize Deep themes. Alternate row coloring is not available for the High Contrast Black/White themes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAlternateRowColors(bAlternateRowColors: boolean): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Sets the background style of the table. Depending on the theme, you can change the state of the background from `Solid` to `Translucent` or to `Transparent`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Translucent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getFixedLayout fixedLayout}.
         * 
         * Defines the algorithm to be used to layout the table cells, rows, and columns. By default, a table is rendered with fixed layout algorithm. This means the horizontal layout only depends on the table's width and the width of the columns, not the contents of the cells. Cells in subsequent rows do not affect column widths. This allows a browser to layout the table faster than the auto table layout since the browser can begin to display the table once the first row has been analyzed.
         * 
         * When this property is set to `false`, `sap.m.Table` is rendered with auto layout algorithm. This means, the width of the table and its cells depends on the contents of the cells. The column width is set by the widest unbreakable content inside the cells. This can make the rendering slow, since the browser needs to read through all the content in the table before determining the final layout. ** Note: ** Since `sap.m.Table` does not have its own scrollbars, setting `fixedLayout` to false can force the table to overflow, which may cause visual problems. It is suggested to use this property when a table has a few columns in wide screens or within the horizontal scroll container (e.g `sap.m.Dialog`) to handle overflow. In auto layout mode the `width` property of `sap.m.Column` is taken into account as a minimum width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFixedLayout(bFixedLayout: boolean): this;

        /**
            * Sets a new value for property {@link #getPopinLayout popinLayout}.
         * 
         * Defines the layout in which the table pop-in rows are rendered. ** Note: ** The `demandPopin` and `minScreenWidth` properties of the `Column` control must be configured appropriately.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Block`.
        */
        public setPopinLayout(sPopinLayout: sap.m.PopinLayout): this;

        /**
            * Sets a new value for property {@link #getShowOverlay showOverlay}.
         * 
         * Setting this property to `true` will show an overlay on top of the table content and prevents the user interaction with it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowOverlay(bShowOverlay: boolean): this;

    }
}