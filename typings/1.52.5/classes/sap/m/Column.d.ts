declare module 'sap/m/Column' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IColumnSettings extends IElementSettings {
        width?: sap.ui.core.CSSSize;
        hAlign?: sap.ui.core.TextAlign;
        vAlign?: sap.ui.core.VerticalAlign;
        styleClass?: string;
        visible?: boolean;
        minScreenWidth?: string;
        demandPopin?: boolean;
        popinHAlign?: sap.ui.core.TextAlign;
        popinDisplay?: sap.m.PopinDisplay;
        mergeDuplicates?: boolean;
        mergeFunctionName?: string;
    }

    /**
    
    */
    export class Column extends Element {

        /**
            * Constructor for a new Column.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IColumnSettings);


        /**
            * Apply text alignment of the Column to Text/Label/Link...
         * 
         * TODO: This is so ugly to check content functions instead we should document how to use our controls to inherit text-alignment and we should add a new sap.ui.core.TextAlign type called "Inherit"
        */
        protected applyAlignTo(oControl: Control, sAlign?: string): Control;

        /**
            * Clears the last value of the column if mergeDuplicates property is true
        */
        protected clearLastValue(): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys the header in the aggregation {@link #getHeader header}.
        */
        public destroyHeader(): this;

        /**
            * Creates a new subclass of class sap.m.Column with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns CSS alignment according to column hAlign setting or given parameter for Begin/End values checks the locale settings
        */
        protected getCssAlign(sAlign?: string): string;

        /**
            * Gets current value of property {@link #getDemandPopin demandPopin}.
         * 
         * According to your minScreenWidth settings, the column can be hidden in different screen sizes. Setting this property to true, shows this column as pop-in instead of hiding it.
         * 
         * Default value is `false`.
        */
        public getDemandPopin(): boolean;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * Control to be displayed in the column footer.
        */
        public getFooter(): Control;

        /**
            * Gets current value of property {@link #getHAlign hAlign}.
         * 
         * Horizontal alignment of the column content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * NOTE: Control with a "textAlign" property inherits the horizontal alignment.
         * 
         * Default value is `Begin`.
        */
        public getHAlign(): sap.ui.core.TextAlign;

        /**
            * Gets content of aggregation {@link #getHeader header}.
         * 
         * Control to be displayed in the column header.
        */
        public getHeader(): Control;

        /**
            * Gets the initial order of the column
        */
        protected getInitialOrder(): number;

        /**
            * Gets the last value of the column
        */
        protected getLastValue(): any;

        /**
            * Gets current value of property {@link #getMergeDuplicates mergeDuplicates}.
         * 
         * Set "true" to merge repeating cells(duplicates) into one cell block. Please see "mergeFunctionName" property to customize this property. Note: This feature must not be used together with two-way binding. This property is ignored if a column is shown in the pop-in.
         * 
         * Default value is `false`.
        */
        public getMergeDuplicates(): boolean;

        /**
            * Gets current value of property {@link #getMergeFunctionName mergeFunctionName}.
         * 
         * Defines the value getter(serialization) function if "mergeDuplicates" property is set "true" Control itself uses this function to compare values of two repeating cells. Default value "getText" is suitable for Label and Text control. e.g. For "Icon" control "getSrc" can be used. Note: You can pass one string parameter to given function after "#" sign. e.g. "data#myparameter"
         * 
         * Default value is `getText`.
        */
        public getMergeFunctionName(): string;

        /**
            * Returns a metadata object for class sap.m.Column.
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
            * Gets current value of property {@link #getMinScreenWidth minScreenWidth}.
         * 
         * By default column is always shown. If you set this property, control checks the minimum width of the screen to show or hide this column. As you can give specific CSS sizes(e.g: "480px" or "40em"), you can also use sap.m.ScreenSize enumeration(e.g: "Phone", "Tablet", "Desktop", "Small", "Medium", "Large", ....).
         * 
         * sap.m.Column.MediaQuery1->Range1 = 199
         * 
         * This property can be used for responsive design. e.g: "40em"(or "640px" or "Tablet") setting shows this column in iPad(and Desktop) but hides in iPhone. Please also see "demandPopin" property
        */
        public getMinScreenWidth(): string;

        /**
            * Gets the order of the column
        */
        protected getOrder(): number;

        /**
            * Gets current value of property {@link #getPopinDisplay popinDisplay}.
         * 
         * Defines enumerated display options for the pop-in.
         * 
         * Default value is `Block`.
        */
        public getPopinDisplay(): sap.m.PopinDisplay;

        /**
            * Gets current value of property {@link #getPopinHAlign popinHAlign}.
         * 
         * Horizontal alignment of the pop-in content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * NOTE: Controls with a text align do not inherit the horizontal alignment.
         * 
         * Default value is `Begin`.
        */
        public getPopinHAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getStyleClass styleClass}.
         * 
         * CSS class name for column contents(header, cells and footer of column). This property can be used for different column styling. If column is shown as pop-in then this class name is applied to related pop-in row.
        */
        public getStyleClass(): string;

        /**
            * Gets current value of property {@link #getVAlign vAlign}.
         * 
         * Vertical alignment of the cells in a column. Possible values are "Inherit", "Top", "Middle", "Bottom" This property does not affect the vertical alignment of header and footer.
         * 
         * Default value is `Inherit`.
        */
        public getVAlign(): sap.ui.core.VerticalAlign;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether or not the column is visible. Invisible columns are not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the column. If you leave it empty then this column covers the remaining space.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Determines whether the column will be hidden via media queries or not
        */
        protected isHidden(): any;

        /**
            * Determines whether the column will be shown as pop-in or not
        */
        protected isPopin(): any;

        /**
            * Gets called from the Table when the all items are removed
        */
        protected onItemsRemoved(): any;

        /**
            * Sets a new value for property {@link #getDemandPopin demandPopin}.
         * 
         * According to your minScreenWidth settings, the column can be hidden in different screen sizes. Setting this property to true, shows this column as pop-in instead of hiding it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDemandPopin(bDemandPopin: boolean): this;

        /**
            * Display or hide the column from given table This does not set the visibility property of the column
        */
        protected setDisplay(oTableDomRef: {}, bDisplay?: boolean): any;

        /**
            * Display or hide the column from given table via checking media query changes
        */
        protected setDisplayViaMedia(oTableDomRef: {}): any;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(oFooter: Control): this;

        /**
            * Sets a new value for property {@link #getHAlign hAlign}.
         * 
         * Horizontal alignment of the column content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * NOTE: Control with a "textAlign" property inherits the horizontal alignment.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setHAlign(sHAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets the aggregated {@link #getHeader header}.
        */
        public setHeader(oHeader: Control): this;

        /**
            * Sets the visible column index Negative index values can be used to clear
        */
        protected setIndex(nIndex: number): any;

        /**
            * Sets the initial order of the column
        */
        protected setInitialOrder(nOrder: number): any;

        /**
            * Sets the last value of the column if mergeDuplicates property is true
        */
        protected setLastValue(value: any): this;

        /**
            * Sets a new value for property {@link #getMergeDuplicates mergeDuplicates}.
         * 
         * Set "true" to merge repeating cells(duplicates) into one cell block. Please see "mergeFunctionName" property to customize this property. Note: This feature must not be used together with two-way binding. This property is ignored if a column is shown in the pop-in.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMergeDuplicates(bMergeDuplicates: boolean): this;

        /**
            * Sets a new value for property {@link #getMergeFunctionName mergeFunctionName}.
         * 
         * Defines the value getter(serialization) function if "mergeDuplicates" property is set "true" Control itself uses this function to compare values of two repeating cells. Default value "getText" is suitable for Label and Text control. e.g. For "Icon" control "getSrc" can be used. Note: You can pass one string parameter to given function after "#" sign. e.g. "data#myparameter"
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `getText`.
        */
        public setMergeFunctionName(sMergeFunctionName: string): this;

        /**
            * Sets a new value for property {@link #getMinScreenWidth minScreenWidth}.
         * 
         * By default column is always shown. If you set this property, control checks the minimum width of the screen to show or hide this column. As you can give specific CSS sizes(e.g: "480px" or "40em"), you can also use sap.m.ScreenSize enumeration(e.g: "Phone", "Tablet", "Desktop", "Small", "Medium", "Large", ....).
         * 
         * sap.m.Column.MediaQuery1->Range1 = 199
         * 
         * This property can be used for responsive design. e.g: "40em"(or "640px" or "Tablet") setting shows this column in iPad(and Desktop) but hides in iPhone. Please also see "demandPopin" property
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinScreenWidth(sMinScreenWidth: string): this;

        /**
            * Sets the order of the column Does not do the visual effect Table should be invalidate to re-render
        */
        protected setOrder(nOrder: number): any;

        /**
            * Sets a new value for property {@link #getPopinDisplay popinDisplay}.
         * 
         * Defines enumerated display options for the pop-in.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Block`.
        */
        public setPopinDisplay(sPopinDisplay: sap.m.PopinDisplay): this;

        /**
            * Sets a new value for property {@link #getPopinHAlign popinHAlign}.
         * 
         * Horizontal alignment of the pop-in content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
         * 
         * NOTE: Controls with a text align do not inherit the horizontal alignment.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setPopinHAlign(sPopinHAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getStyleClass styleClass}.
         * 
         * CSS class name for column contents(header, cells and footer of column). This property can be used for different column styling. If column is shown as pop-in then this class name is applied to related pop-in row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStyleClass(sStyleClass: string): this;

        /**
            * Sets a new value for property {@link #getVAlign vAlign}.
         * 
         * Vertical alignment of the cells in a column. Possible values are "Inherit", "Top", "Middle", "Bottom" This property does not affect the vertical alignment of header and footer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setVAlign(sVAlign: sap.ui.core.VerticalAlign): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies whether or not the column is visible. Invisible columns are not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the column. If you leave it empty then this column covers the remaining space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}