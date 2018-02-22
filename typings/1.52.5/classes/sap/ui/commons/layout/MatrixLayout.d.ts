declare module 'sap/ui/commons/layout/MatrixLayout' {
    import { MatrixLayoutRow } from 'sap/ui/commons/layout/MatrixLayoutRow';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMatrixLayoutSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        layoutFixed?: boolean;
        columns?: number;
        widths?: sap.ui.core.CSSSize[];
    }

    /**
    
    */
    export class MatrixLayout extends Control {

        /**
            * Constructor for a new layout/MatrixLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMatrixLayoutSettings);


        /**
            * Adds some row to the aggregation {@link #getRows rows}.
        */
        public addRow(oRow: MatrixLayoutRow): this;

        /**
            * Creates a new matrix layout row and appends it to this matrix layout.
         * 
         * Each argument must be either a matrix layout cell, which is added to the row "as is", or an arbitrary content control, which is wrapped with a new (default) matrix layout cell first and then added to the row.
        */
        public createRow(): this;

        /**
            * Destroys all the rows in the aggregation {@link #getRows rows}.
        */
        public destroyRows(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.MatrixLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColumns columns}.
         * 
         * Number of columns. If not specified, the number of columns will be determined from the given cells.
        */
        public getColumns(): number;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * CSS height of the matrix layout.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLayoutFixed layoutFixed}.
         * 
         * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the content of the colums has priority. The default is "fixed". If the fixed layout is used an adequate width of the MatrixLayout should be provided. Otherwise the column width displayed could be different than the given ones because of browser dependend optimazations.
         * 
         * Default value is `true`.
        */
        public getLayoutFixed(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.MatrixLayout.
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
            * Gets content of aggregation {@link #getRows rows}.
         * 
         * The matrix layout's individual rows.
        */
        public getRows(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * CSS width of the matrix layout. If the LayoutFixed = true an adequate width should be provided.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWidths widths}.
         * 
         * Widths of the columns. Use an array to define the widths of the columns. If a column shall have an automatical sizing enter "auto" for this column width.
        */
        public getWidths(): {};

        /**
            * Checks for the provided `sap.ui.commons.layout.MatrixLayoutRow` in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise.
        */
        public indexOfRow(oRow: MatrixLayoutRow): number;

        /**
            * Inserts a row into the aggregation {@link #getRows rows}.
        */
        public insertRow(oRow: MatrixLayoutRow, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getRows rows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRows(): {};

        /**
            * Removes a row from the aggregation {@link #getRows rows}.
        */
        public removeRow(vRow: number | string | MatrixLayoutRow): MatrixLayoutRow;

        /**
            * Sets a new value for property {@link #getColumns columns}.
         * 
         * Number of columns. If not specified, the number of columns will be determined from the given cells.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumns(iColumns: number): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * CSS height of the matrix layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLayoutFixed layoutFixed}.
         * 
         * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the content of the colums has priority. The default is "fixed". If the fixed layout is used an adequate width of the MatrixLayout should be provided. Otherwise the column width displayed could be different than the given ones because of browser dependend optimazations.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setLayoutFixed(bLayoutFixed: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * CSS width of the matrix layout. If the LayoutFixed = true an adequate width should be provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidths widths}.
         * 
         * Widths of the columns. Use an array to define the widths of the columns. If a column shall have an automatical sizing enter "auto" for this column width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidths(sWidths: {}): this;

    }
}