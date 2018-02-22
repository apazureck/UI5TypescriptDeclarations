declare module 'sap/ui/core/util/Export' {
    import { ExportColumn } from 'sap/ui/core/util/ExportColumn';
    import { ExportRow } from 'sap/ui/core/util/ExportRow';
    import { ExportType } from 'sap/ui/core/util/ExportType';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IExportSettings extends IControlSettings {
    }

    /**
    
    */
    export class Export extends Control {

        /**
            * Constructor for a new Export.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExportSettings);


        /**
            * Adds some column to the aggregation {@link #getColumns columns}.
        */
        public addColumn(oColumn: ExportColumn): this;

        /**
            * Adds some row to the aggregation {@link #getRows rows}.
        */
        public addRow(oRow: ExportRow): this;

        /**
            * Binds aggregation {@link #getColumns columns} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindColumns(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getRows rows} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindRows(oBindingInfo: {}): this;

        /**
            * Destroys all the columns in the aggregation {@link #getColumns columns}.
        */
        public destroyColumns(): this;

        /**
            * Destroys the exportType in the aggregation {@link #getExportType exportType}.
        */
        public destroyExportType(): this;

        /**
            * Destroys all the rows in the aggregation {@link #getRows rows}.
        */
        public destroyRows(): this;

        /**
            * Creates a new subclass of class sap.ui.core.util.Export with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Generates the file content and returns a Promise with the instance as context (this).<br> The promise will be resolved with the generated content as a string.
         * 
         * ** Please note: The return value was changed from jQuery Promises to standard ES6 Promises. jQuery specific Promise methods ('done', 'fail', 'always', 'pipe' and 'state') are still available but should not be used. Please use only the standard methods 'then' and 'catch'! **
        */
        public generate(): any;

        /**
            * Gets content of aggregation {@link #getColumns columns}.
         * 
         * Columns for the Export.
        */
        public getColumns(): {};

        /**
            * Gets content of aggregation {@link #getExportType exportType}.
         * 
         * Type that generates the content.
        */
        public getExportType(): ExportType;

        /**
            * Returns a metadata object for class sap.ui.core.util.Export.
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
            * Gets content of aggregation {@link #getRows rows}.
         * 
         * Rows of the Export.
        */
        public getRows(): {};

        /**
            * Checks for the provided `sap.ui.core.util.ExportColumn` in the aggregation {@link #getColumns columns}. and returns its index if found or -1 otherwise.
        */
        public indexOfColumn(oColumn: ExportColumn): number;

        /**
            * Checks for the provided `sap.ui.core.util.ExportRow` in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise.
        */
        public indexOfRow(oRow: ExportRow): number;

        /**
            * Inserts a column into the aggregation {@link #getColumns columns}.
        */
        public insertColumn(oColumn: ExportColumn, iIndex: number): this;

        /**
            * Inserts a row into the aggregation {@link #getRows rows}.
        */
        public insertRow(oRow: ExportRow, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getColumns columns}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllColumns(): {};

        /**
            * Removes all the controls from the aggregation {@link #getRows rows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRows(): {};

        /**
            * Removes a column from the aggregation {@link #getColumns columns}.
        */
        public removeColumn(vColumn: number | string | ExportColumn): ExportColumn;

        /**
            * Removes a row from the aggregation {@link #getRows rows}.
        */
        public removeRow(vRow: number | string | ExportRow): ExportRow;

        /**
            * Generates the file content, triggers a download / save action and returns a Promise with the instance as context (this).<br> The promise will be resolved with the generated content as a string. ** For information about browser support, see `sap.ui.core.util.File.save **</b>
         * 
         * ** Please note: The return value was changed from jQuery Promises to standard ES6 Promises. jQuery specific Promise methods ('done', 'fail', 'always', 'pipe' and 'state') are still available but should not be used. Please use only the standard methods 'then' and 'catch'! **
        */
        public saveFile(sFileName?: string): any;

        /**
            * Sets the aggregated {@link #getExportType exportType}.
        */
        public setExportType(oExportType: ExportType): this;

        /**
            * Unbinds aggregation {@link #getColumns columns} from model data.
        */
        public unbindColumns(): this;

        /**
            * Unbinds aggregation {@link #getRows rows} from model data.
        */
        public unbindRows(): this;

    }
}