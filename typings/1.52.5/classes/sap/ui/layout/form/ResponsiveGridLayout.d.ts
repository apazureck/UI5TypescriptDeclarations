declare module 'sap/ui/layout/form/ResponsiveGridLayout' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { FormLayout, IFormLayoutSettings } from 'sap/ui/layout/form/FormLayout';

    export interface IResponsiveGridLayoutSettings extends IFormLayoutSettings {
        labelSpanXL?: number;
        labelSpanL?: number;
        labelSpanM?: number;
        labelSpanS?: number;
        adjustLabelSpan?: boolean;
        emptySpanXL?: number;
        emptySpanL?: number;
        emptySpanM?: number;
        emptySpanS?: number;
        columnsXL?: number;
        columnsL?: number;
        columnsM?: number;
        singleContainerFullSize?: boolean;
        breakpointXL?: number;
        breakpointL?: number;
        breakpointM?: number;
    }

    /**
    
    */
    export class ResponsiveGridLayout extends FormLayout {

        /**
            * Constructor for a new `sap.ui.layout.form.ResponsiveGridLayout`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsiveGridLayoutSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
         * 
         * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every `FormContainer` has its own `Grid` inside).
         * 
         * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of `FormContainers` doesn't matter in this case.
         * 
         * Default value is `true`.
        */
        public getAdjustLabelSpan(): boolean;

        /**
            * Gets current value of property {@link #getBreakpointL breakpointL}.
         * 
         * Breakpoint (in pixel) between Medium size and Large size.
         * 
         * Default value is `1024`.
        */
        public getBreakpointL(): number;

        /**
            * Gets current value of property {@link #getBreakpointM breakpointM}.
         * 
         * Breakpoint (in pixel) between Small size and Medium size.
         * 
         * Default value is `600`.
        */
        public getBreakpointM(): number;

        /**
            * Gets current value of property {@link #getBreakpointXL breakpointXL}.
         * 
         * Breakpoint (in pixel) between large size and extra large (XL) size.
         * 
         * Default value is `1440`.
        */
        public getBreakpointXL(): number;

        /**
            * Gets current value of property {@link #getColumnsL columnsL}.
         * 
         * Number of columns for large size.
         * 
         * The number of columns for large size must not be smaller than the number of columns for medium size.
         * 
         * Default value is `2`.
        */
        public getColumnsL(): number;

        /**
            * Gets current value of property {@link #getColumnsM columnsM}.
         * 
         * Number of columns for medium size.
         * 
         * Default value is `1`.
        */
        public getColumnsM(): number;

        /**
            * Gets current value of property {@link #getColumnsXL columnsXL}.
         * 
         * Number of columns for extra large size.
         * 
         * The number of columns for extra large size must not be smaller than the number of columns for large size. ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used (from the backward compatibility reasons).
         * 
         * Default value is `-1`.
        */
        public getColumnsXL(): number;

        /**
            * Gets current value of property {@link #getEmptySpanL emptySpanL}.
         * 
         * Number of grid cells that are empty at the end of each line on large size.
         * 
         * Default value is `0`.
        */
        public getEmptySpanL(): number;

        /**
            * Gets current value of property {@link #getEmptySpanM emptySpanM}.
         * 
         * Number of grid cells that are empty at the end of each line on medium size.
         * 
         * Default value is `0`.
        */
        public getEmptySpanM(): number;

        /**
            * Gets current value of property {@link #getEmptySpanS emptySpanS}.
         * 
         * Number of grid cells that are empty at the end of each line on small size.
         * 
         * Default value is `0`.
        */
        public getEmptySpanS(): number;

        /**
            * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
         * 
         * Number of grid cells that are empty at the end of each line on extra large size.
         * 
         * ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used.
         * 
         * Default value is `-1`.
        */
        public getEmptySpanXL(): number;

        /**
            * Gets current value of property {@link #getLabelSpanL labelSpanL}.
         * 
         * Default span for labels in large size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is only used if more than 1 `FormContainer` is in one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
         * 
         * Default value is `4`.
        */
        public getLabelSpanL(): number;

        /**
            * Gets current value of property {@link #getLabelSpanM labelSpanM}.
         * 
         * Default span for labels in medium size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set this property is used for full-size `FormContainers`. If more than one `FormContainer` is in one line, `labelSpanL` is used.
         * 
         * Default value is `2`.
        */
        public getLabelSpanM(): number;

        /**
            * Gets current value of property {@link #getLabelSpanS labelSpanS}.
         * 
         * Default span for labels in small size.
         * 
         * Default value is `12`.
        */
        public getLabelSpanS(): number;

        /**
            * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
         * 
         * Default span for labels in extra large size.
         * 
         * ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used.
         * 
         * Default value is `-1`.
        */
        public getLabelSpanXL(): number;

        /**
            * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
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
            * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
         * 
         * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer` is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and `columnsM` are ignored.
         * 
         * In all other cases the `FormContainer` is displayed in the size of one column.
         * 
         * Default value is `true`.
        */
        public getSingleContainerFullSize(): boolean;

        /**
            * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
         * 
         * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every `FormContainer` has its own `Grid` inside).
         * 
         * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of `FormContainers` doesn't matter in this case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAdjustLabelSpan(bAdjustLabelSpan: boolean): this;

        /**
            * Sets a new value for property {@link #getBreakpointL breakpointL}.
         * 
         * Breakpoint (in pixel) between Medium size and Large size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1024`.
        */
        public setBreakpointL(iBreakpointL: number): this;

        /**
            * Sets a new value for property {@link #getBreakpointM breakpointM}.
         * 
         * Breakpoint (in pixel) between Small size and Medium size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `600`.
        */
        public setBreakpointM(iBreakpointM: number): this;

        /**
            * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
         * 
         * Breakpoint (in pixel) between large size and extra large (XL) size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1440`.
        */
        public setBreakpointXL(iBreakpointXL: number): this;

        /**
            * Sets a new value for property {@link #getColumnsL columnsL}.
         * 
         * Number of columns for large size.
         * 
         * The number of columns for large size must not be smaller than the number of columns for medium size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setColumnsL(iColumnsL: number): this;

        /**
            * Sets a new value for property {@link #getColumnsM columnsM}.
         * 
         * Number of columns for medium size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setColumnsM(iColumnsM: number): this;

        /**
            * Sets a new value for property {@link #getColumnsXL columnsXL}.
         * 
         * Number of columns for extra large size.
         * 
         * The number of columns for extra large size must not be smaller than the number of columns for large size. ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used (from the backward compatibility reasons).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setColumnsXL(iColumnsXL: number): this;

        /**
            * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
         * 
         * Number of grid cells that are empty at the end of each line on large size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setEmptySpanL(iEmptySpanL: number): this;

        /**
            * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
         * 
         * Number of grid cells that are empty at the end of each line on medium size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setEmptySpanM(iEmptySpanM: number): this;

        /**
            * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
         * 
         * Number of grid cells that are empty at the end of each line on small size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setEmptySpanS(iEmptySpanS: number): this;

        /**
            * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
         * 
         * Number of grid cells that are empty at the end of each line on extra large size.
         * 
         * ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setEmptySpanXL(iEmptySpanXL: number): this;

        /**
            * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
         * 
         * Default span for labels in large size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is only used if more than 1 `FormContainer` is in one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `4`.
        */
        public setLabelSpanL(iLabelSpanL: number): this;

        /**
            * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
         * 
         * Default span for labels in medium size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set this property is used for full-size `FormContainers`. If more than one `FormContainer` is in one line, `labelSpanL` is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setLabelSpanM(iLabelSpanM: number): this;

        /**
            * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
         * 
         * Default span for labels in small size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `12`.
        */
        public setLabelSpanS(iLabelSpanS: number): this;

        /**
            * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
         * 
         * Default span for labels in extra large size.
         * 
         * ** Note: ** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setLabelSpanXL(iLabelSpanXL: number): this;

        /**
            * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
         * 
         * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer` is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and `columnsM` are ignored.
         * 
         * In all other cases the `FormContainer` is displayed in the size of one column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSingleContainerFullSize(bSingleContainerFullSize: boolean): this;

    }
}