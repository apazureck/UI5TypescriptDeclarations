declare module 'sap/ui/layout/BlockLayoutCell' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBlockLayoutCellSettings extends IControlSettings {
        title?: string;
        titleAlignment?: sap.ui.core.HorizontalAlign;
        titleLevel?: sap.ui.core.TitleLevel;
        width?: number;
        backgroundColorSet?: sap.ui.layout.BlockLayoutCellColorSet;
        backgroundColorShade?: sap.ui.layout.BlockLayoutCellColorShade;
    }

    /**
    
    */
    export class BlockLayoutCell extends Control {

        /**
            * Constructor for a new BlockLayoutCell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBlockLayoutCellSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getBackgroundColorSet backgroundColorSet}.
         * 
         * The Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. ** Note: ** backgroundColorSet should be used only in combination with backgroundColorShade.
        */
        public getBackgroundColorSet(): sap.ui.layout.BlockLayoutCellColorSet;

        /**
            * Gets current value of property {@link #getBackgroundColorShade backgroundColorShade}.
         * 
         * The index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. ** Note: ** backgroundColorShade should be used only in combination with backgroundColorSet.
        */
        public getBackgroundColorShade(): sap.ui.layout.BlockLayoutCellColorShade;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content to be included inside the cell
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the cell
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleAlignment titleAlignment}.
         * 
         * Defines the alignment of the cell title
         * 
         * Default value is `Begin`.
        */
        public getTitleAlignment(): sap.ui.core.HorizontalAlign;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
         * 
         * Default value is `Auto`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. ** For example: ** If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
         * 
         * Default value is `0`.
        */
        public getWidth(): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getBackgroundColorSet backgroundColorSet}.
         * 
         * The Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. ** Note: ** backgroundColorSet should be used only in combination with backgroundColorShade.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColorSet(sBackgroundColorSet: sap.ui.layout.BlockLayoutCellColorSet): this;

        /**
            * Sets a new value for property {@link #getBackgroundColorShade backgroundColorShade}.
         * 
         * The index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. ** Note: ** backgroundColorShade should be used only in combination with backgroundColorSet.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColorShade(sBackgroundColorShade: sap.ui.layout.BlockLayoutCellColorShade): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the cell
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleAlignment titleAlignment}.
         * 
         * Defines the alignment of the cell title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTitleAlignment(sTitleAlignment: sap.ui.core.HorizontalAlign): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. ** For example: ** If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setWidth(iWidth: number): this;

    }
}