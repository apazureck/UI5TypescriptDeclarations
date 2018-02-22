declare module 'sap/ui/layout/GridData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IGridDataSettings extends ILayoutDataSettings {
        span?: sap.ui.layout.GridSpan;
        spanXL?: number;
        spanL?: number;
        spanM?: number;
        spanS?: number;
        indent?: sap.ui.layout.GridIndent;
        indentXL?: number;
        indentL?: number;
        indentM?: number;
        indentS?: number;
        visibleXL?: boolean;
        visibleL?: boolean;
        visibleM?: boolean;
        visibleS?: boolean;
        moveBackwards?: sap.ui.layout.GridIndent;
        moveForward?: sap.ui.layout.GridIndent;
        linebreak?: boolean;
        linebreakXL?: boolean;
        linebreakL?: boolean;
        linebreakM?: boolean;
        linebreakS?: boolean;
        spanLarge?: number;
        spanMedium?: number;
        spanSmall?: number;
        indentLarge?: number;
        indentMedium?: number;
        indentSmall?: number;
        visibleOnLarge?: boolean;
        visibleOnMedium?: boolean;
        visibleOnSmall?: boolean;
    }

    /**
    
    */
    export class GridData extends LayoutData {

        /**
            * Constructor for a new GridData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGridDataSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.GridData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIndent indent}.
         * 
         * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
        */
        public getIndent(): sap.ui.layout.GridIndent;

        /**
            * Gets current value of property {@link #getIndentL indentL}.
         * 
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
        */
        public getIndentL(): number;

        /**
            * Gets current value of property {@link #getIndentLarge indentLarge}.
         * 
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
        */
        public getIndentLarge(): number;

        /**
            * Gets current value of property {@link #getIndentM indentM}.
         * 
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
        */
        public getIndentM(): number;

        /**
            * Gets current value of property {@link #getIndentMedium indentMedium}.
         * 
         * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
        */
        public getIndentMedium(): number;

        /**
            * Gets current value of property {@link #getIndentS indentS}.
         * 
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
        */
        public getIndentS(): number;

        /**
            * Gets current value of property {@link #getIndentSmall indentSmall}.
         * 
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
        */
        public getIndentSmall(): number;

        /**
            * Gets current value of property {@link #getIndentXL indentXL}.
         * 
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "indent".
        */
        public getIndentXL(): number;

        /**
            * Gets current value of property {@link #getLinebreak linebreak}.
         * 
         * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * Default value is `false`.
        */
        public getLinebreak(): boolean;

        /**
            * Gets current value of property {@link #getLinebreakL linebreakL}.
         * 
         * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * Default value is `false`.
        */
        public getLinebreakL(): boolean;

        /**
            * Gets current value of property {@link #getLinebreakM linebreakM}.
         * 
         * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * Default value is `false`.
        */
        public getLinebreakM(): boolean;

        /**
            * Gets current value of property {@link #getLinebreakS linebreakS}.
         * 
         * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * Default value is `false`.
        */
        public getLinebreakS(): boolean;

        /**
            * Gets current value of property {@link #getLinebreakXL linebreakXL}.
         * 
         * Optional. If this property is set to true, the control on extra large screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * Default value is `false`.
        */
        public getLinebreakXL(): boolean;

        /**
            * Returns a metadata object for class sap.ui.layout.GridData.
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
            * Gets current value of property {@link #getMoveBackwards moveBackwards}.
         * 
         * Optional. Moves a cell backwards so many columns as specified.
        */
        public getMoveBackwards(): sap.ui.layout.GridIndent;

        /**
            * Gets current value of property {@link #getMoveForward moveForward}.
         * 
         * Optional. Moves a cell forwards so many columns as specified.
        */
        public getMoveForward(): sap.ui.layout.GridIndent;

        /**
            * Gets current value of property {@link #getSpan span}.
         * 
         * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
        */
        public getSpan(): sap.ui.layout.GridSpan;

        /**
            * Gets current value of property {@link #getSpanL spanL}.
         * 
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
        */
        public getSpanL(): number;

        /**
            * Gets current value of property {@link #getSpanLarge spanLarge}.
         * 
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
        */
        public getSpanLarge(): number;

        /**
            * Gets current value of property {@link #getSpanM spanM}.
         * 
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
        */
        public getSpanM(): number;

        /**
            * Gets current value of property {@link #getSpanMedium spanMedium}.
         * 
         * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
        */
        public getSpanMedium(): number;

        /**
            * Gets current value of property {@link #getSpanS spanS}.
         * 
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
        */
        public getSpanS(): number;

        /**
            * Gets current value of property {@link #getSpanSmall spanSmall}.
         * 
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
        */
        public getSpanSmall(): number;

        /**
            * Gets current value of property {@link #getSpanXL spanXL}.
         * 
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "span".
        */
        public getSpanXL(): number;

        /**
            * Gets current value of property {@link #getVisibleL visibleL}.
         * 
         * Defines if this Control is visible on Large screens.
         * 
         * Default value is `true`.
        */
        public getVisibleL(): boolean;

        /**
            * Gets current value of property {@link #getVisibleM visibleM}.
         * 
         * Defines if this Control is visible on Medium size screens.
         * 
         * Default value is `true`.
        */
        public getVisibleM(): boolean;

        /**
            * Gets current value of property {@link #getVisibleOnLarge visibleOnLarge}.
         * 
         * Deprecated. Defines if this Control is visible on Large screens.
         * 
         * Default value is `true`.
        */
        public getVisibleOnLarge(): boolean;

        /**
            * Gets current value of property {@link #getVisibleOnMedium visibleOnMedium}.
         * 
         * Deprecated. Defines if this Control is visible on Medium size screens.
         * 
         * Default value is `true`.
        */
        public getVisibleOnMedium(): boolean;

        /**
            * Gets current value of property {@link #getVisibleOnSmall visibleOnSmall}.
         * 
         * Deprecated. Defines if this Control is visible on small screens.
         * 
         * Default value is `true`.
        */
        public getVisibleOnSmall(): boolean;

        /**
            * Gets current value of property {@link #getVisibleS visibleS}.
         * 
         * Defines if this Control is visible on small screens.
         * 
         * Default value is `true`.
        */
        public getVisibleS(): boolean;

        /**
            * Gets current value of property {@link #getVisibleXL visibleXL}.
         * 
         * Defines if this Control is visible on XL - extra Large screens.
         * 
         * Default value is `true`.
        */
        public getVisibleXL(): boolean;

        /**
            * Sets a new value for property {@link #getIndent indent}.
         * 
         * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndent(sIndent: sap.ui.layout.GridIndent): this;

        /**
            * Sets a new value for property {@link #getIndentL indentL}.
         * 
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentL(iIndentL: number): this;

        /**
            * Sets a new value for property {@link #getIndentLarge indentLarge}.
         * 
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentLarge(iIndentLarge: number): this;

        /**
            * Sets a new value for property {@link #getIndentM indentM}.
         * 
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentM(iIndentM: number): this;

        /**
            * Sets a new value for property {@link #getIndentMedium indentMedium}.
         * 
         * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentMedium(iIndentMedium: number): this;

        /**
            * Sets a new value for property {@link #getIndentS indentS}.
         * 
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentS(iIndentS: number): this;

        /**
            * Sets a new value for property {@link #getIndentSmall indentSmall}.
         * 
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentSmall(iIndentSmall: number): this;

        /**
            * Sets a new value for property {@link #getIndentXL indentXL}.
         * 
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "indent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIndentXL(iIndentXL: number): this;

        /**
            * Sets a new value for property {@link #getLinebreak linebreak}.
         * 
         * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreak(bLinebreak: boolean): this;

        /**
            * Sets a new value for property {@link #getLinebreakL linebreakL}.
         * 
         * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreakL(bLinebreakL: boolean): this;

        /**
            * Sets a new value for property {@link #getLinebreakM linebreakM}.
         * 
         * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreakM(bLinebreakM: boolean): this;

        /**
            * Sets a new value for property {@link #getLinebreakS linebreakS}.
         * 
         * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreakS(bLinebreakS: boolean): this;

        /**
            * Sets a new value for property {@link #getLinebreakXL linebreakXL}.
         * 
         * Optional. If this property is set to true, the control on extra large screens causes a line break within the Grid and becomes the first within the next line.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreakXL(bLinebreakXL: boolean): this;

        /**
            * Sets a new value for property {@link #getMoveBackwards moveBackwards}.
         * 
         * Optional. Moves a cell backwards so many columns as specified.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMoveBackwards(sMoveBackwards: sap.ui.layout.GridIndent): this;

        /**
            * Sets a new value for property {@link #getMoveForward moveForward}.
         * 
         * Optional. Moves a cell forwards so many columns as specified.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMoveForward(sMoveForward: sap.ui.layout.GridIndent): this;

        /**
            * Sets a new value for property {@link #getSpan span}.
         * 
         * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpan(sSpan: sap.ui.layout.GridSpan): this;

        /**
            * Sets a new value for property {@link #getSpanL spanL}.
         * 
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanL(iSpanL: number): this;

        /**
            * Sets a new value for property {@link #getSpanLarge spanLarge}.
         * 
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanLarge(iSpanLarge: number): this;

        /**
            * Sets a new value for property {@link #getSpanM spanM}.
         * 
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanM(iSpanM: number): this;

        /**
            * Sets a new value for property {@link #getSpanMedium spanMedium}.
         * 
         * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanMedium(iSpanMedium: number): this;

        /**
            * Sets a new value for property {@link #getSpanS spanS}.
         * 
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanS(iSpanS: number): this;

        /**
            * Sets a new value for property {@link #getSpanSmall spanSmall}.
         * 
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanSmall(iSpanSmall: number): this;

        /**
            * Sets a new value for property {@link #getSpanXL spanXL}.
         * 
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "span".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSpanXL(iSpanXL: number): this;

        /**
            * Sets a new value for property {@link #getVisibleL visibleL}.
         * 
         * Defines if this Control is visible on Large screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleL(bVisibleL: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleM visibleM}.
         * 
         * Defines if this Control is visible on Medium size screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleM(bVisibleM: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleOnLarge visibleOnLarge}.
         * 
         * Deprecated. Defines if this Control is visible on Large screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleOnLarge(bVisibleOnLarge: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleOnMedium visibleOnMedium}.
         * 
         * Deprecated. Defines if this Control is visible on Medium size screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleOnMedium(bVisibleOnMedium: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleOnSmall visibleOnSmall}.
         * 
         * Deprecated. Defines if this Control is visible on small screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleOnSmall(bVisibleOnSmall: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleS visibleS}.
         * 
         * Defines if this Control is visible on small screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleS(bVisibleS: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleXL visibleXL}.
         * 
         * Defines if this Control is visible on XL - extra Large screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleXL(bVisibleXL: boolean): this;

    }
}