declare module 'sap/ui/layout/BlockLayoutRow' {
    import { BlockLayoutCell } from 'sap/ui/layout/BlockLayoutCell';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBlockLayoutRowSettings extends IControlSettings {
        scrollable?: boolean;
        rowColorSet?: sap.ui.layout.BlockRowColorSets;
    }

    /**
    
    */
    export class BlockLayoutRow extends Control {

        /**
            * Constructor for a new BlockLayoutRow.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBlockLayoutRowSettings);


        /**
            * Adds some accentCell into the association {@link #getAccentCells accentCells}.
        */
        public addAccentCell(vAccentCell: sap.ui.core.ID | BlockLayoutCell): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: BlockLayoutCell): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAccentCells accentCells}.
        */
        public getAccentCells(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content cells to be included in the row.
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
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
            * Gets current value of property {@link #getRowColorSet rowColorSet}.
         * 
         * Defines background type for that row. There might be several rows with the same type
        */
        public getRowColorSet(): sap.ui.layout.BlockRowColorSets;

        /**
            * Gets current value of property {@link #getScrollable scrollable}.
         * 
         * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.
         * 
         * Default value is `false`.
        */
        public getScrollable(): boolean;

        /**
            * Checks for the provided `sap.ui.layout.BlockLayoutCell` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: BlockLayoutCell): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: BlockLayoutCell, iIndex: number): this;

        /**
            * Removes an accentCell from the association named {@link #getAccentCells accentCells}.
        */
        public removeAccentCell(vAccentCell: number | sap.ui.core.ID | BlockLayoutCell): sap.ui.core.ID;

        /**
            * Removes all the controls in the association named {@link #getAccentCells accentCells}.
        */
        public removeAllAccentCells(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | BlockLayoutCell): BlockLayoutCell;

        /**
            * Changes dynamically row's color set Note: this might invalidate cells inside and also change color sets of the other BlockLayoutRow-s below it.
        */
        public setRowColorSet(sType: sap.ui.layout.BlockRowColorSets): this;

        /**
            * Sets a new value for property {@link #getScrollable scrollable}.
         * 
         * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setScrollable(bScrollable: boolean): this;

    }
}