declare module 'sap/ui/commons/layout/MatrixLayoutRow' {
    import { MatrixLayoutCell } from 'sap/ui/commons/layout/MatrixLayoutCell';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IMatrixLayoutRowSettings extends IElementSettings {
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class MatrixLayoutRow extends Element {

        /**
            * Constructor for a new layout/MatrixLayoutRow.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMatrixLayoutRowSettings);


        /**
            * Adds some cell to the aggregation {@link #getCells cells}.
        */
        public addCell(oCell: MatrixLayoutCell): this;

        /**
            * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
         * 
         * This method is intended to be used to mark controls as being of a special type for which special styling can be provided using CSS selectors that reference this style class name.
         * 
         * `Example:
         * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
         * 
         * ...and in CSS:
         * .myRedTextButton {
         * color: red;
         * }`
         * 
         * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make the text in this particular button red.
         * 
         * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will ignore any strings containing quotes. Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them as different classes) and can only removed later by calling removeStyleClass() with exactly the same (space-containing) string as parameter. Multiple calls with the same sStyleClass will have no different effect than calling once. If sStyleClass is null, the call is ignored.
         * 
         * Returns `this` to allow method chaining
        */
        public addStyleClass(sStyleClass: string): this;

        /**
            * Destroys all the cells in the aggregation {@link #getCells cells}.
        */
        public destroyCells(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCells cells}.
         * 
         * The matrix layout row's individual cells.
        */
        public getCells(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Height of the row.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutRow.
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
            * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
        */
        public hasStyleClass(sStyleClass: string): boolean;

        /**
            * Checks for the provided `sap.ui.commons.layout.MatrixLayoutCell` in the aggregation {@link #getCells cells}. and returns its index if found or -1 otherwise.
        */
        public indexOfCell(oCell: MatrixLayoutCell): number;

        /**
            * Inserts a cell into the aggregation {@link #getCells cells}.
        */
        public insertCell(oCell: MatrixLayoutCell, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCells cells}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCells(): {};

        /**
            * Removes a cell from the aggregation {@link #getCells cells}.
        */
        public removeCell(vCell: number | string | MatrixLayoutCell): MatrixLayoutCell;

        /**
            * Removes the given string from the list of custom style classes that have been set previously. Regular style classes like "sapUiBtn" cannot be removed.
         * 
         * Returns `this` to allow method chaining
        */
        public removeStyleClass(sStyleClass: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Height of the row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

    }
}