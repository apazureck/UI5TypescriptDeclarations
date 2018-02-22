declare module 'sap/ui/table/Row' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IRowSettings extends IElementSettings {
    }

    /**
    
    */
    export class Row extends Element {

        /**
            * Constructor for a new Row.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRowSettings);


        /**
            * Adds some cell to the aggregation {@link #getCells cells}.
        */
        public addCell(oCell: Control): this;

        /**
            * Destroys all the cells in the aggregation {@link #getCells cells}.
        */
        public destroyCells(): this;

        /**
            * Creates a new subclass of class sap.ui.table.Row with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCells cells}.
         * 
         * The controls for the cells.
        */
        public getCells(): {};

        /**
            * Returns the index of the row in the table or -1 if not added to a table. This function considers the scroll position of the table and also takes fixed rows and fixed bottom rows into account.
        */
        public getIndex(): number;

        /**
            * Returns a metadata object for class sap.ui.table.Row.
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
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCells cells}. and returns its index if found or -1 otherwise.
        */
        public indexOfCell(oCell: Control): number;

        /**
            * Inserts a cell into the aggregation {@link #getCells cells}.
        */
        public insertCell(oCell: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCells cells}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCells(): {};

        /**
            * Removes a cell from the aggregation {@link #getCells cells}.
        */
        public removeCell(vCell: number | string | Control): Control;

    }
}