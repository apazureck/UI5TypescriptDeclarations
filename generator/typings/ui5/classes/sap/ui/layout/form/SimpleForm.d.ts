declare module 'sap/ui/layout/form/SimpleForm' {
    import { Element } from 'sap/ui/core/Element';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title } from 'sap/ui/core/Title';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISimpleFormSettings extends IControlSettings {
        maxContainerCols?: number;
        minWidth?: number;
        width?: sap.ui.core.CSSSize;
        editable?: boolean;
        labelMinWidth?: number;
        layout?: sap.ui.layout.form.SimpleFormLayout;
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
        backgroundDesign?: sap.ui.layout.BackgroundDesign;
    }

    /**
    
    */
    export class SimpleForm extends Control {

        /**
            * Constructor for a new sap.ui.layout.form.SimpleForm.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISimpleFormSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Element): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
        */
        public destroyToolbar(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
         * 
         * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every `FormContainer` has its own grid inside).
         * 
         * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of `FormContainers` doesn't matter in this case.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `true`.
        */
        public getAdjustLabelSpan(): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the `SimpleForm` content.
         * 
         * The visualization of the different options depends on the used theme.
         * 
         * Default value is `Translucent`.
        */
        public getBackgroundDesign(): sap.ui.layout.BackgroundDesign;

        /**
            * Gets current value of property {@link #getBreakpointL breakpointL}.
         * 
         * Breakpoint between Medium size and Large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `1024`.
        */
        public getBreakpointL(): number;

        /**
            * Gets current value of property {@link #getBreakpointM breakpointM}.
         * 
         * Breakpoint between Small size and Medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `600`.
        */
        public getBreakpointM(): number;

        /**
            * Gets current value of property {@link #getBreakpointXL breakpointXL}.
         * 
         * Breakpoint between Medium size and Large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `1440`.
        */
        public getBreakpointXL(): number;

        /**
            * Gets current value of property {@link #getColumnsL columnsL}.
         * 
         * Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `2`.
        */
        public getColumnsL(): number;

        /**
            * Gets current value of property {@link #getColumnsM columnsM}.
         * 
         * Form columns for medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `1`.
        */
        public getColumnsM(): number;

        /**
            * Gets current value of property {@link #getColumnsXL columnsXL}.
         * 
         * Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used (from the backward compatibility reasons).
         * 
         * Default value is `-1`.
        */
        public getColumnsXL(): number;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content of the form is structured in the following way:  * Add a `Title` or `Toolbar` control to start a new group (`FormContainer`). * Add a `Label` control to start a new row (`FormElement`). * Add controls as input fields, text fields or other as needed. * Use `LayoutData` to influence the layout for special cases in the single controls. For example, if a `ResponsiveLayout` is used as a layout, the form content is weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls should influence their width, you can add `sap.ui.layout.ResponsiveFlowLayoutData` to them via `setLayoutData` method. Ensure that the sum of the weights in the `ResponsiveFlowLayoutData` is not more than 5, as this is the total width of the input control part of each form row.  Example for a row where the `Input` weight 4 and the second `Input` weight 1 (using `ResponsiveLayout`): `new sap.m.Label({text:"Label"});
         * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
         * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),`
         * 
         * For example, if a `ResponsiveGridLayout` is used as a layout, there are 12 cells in one row. Depending on the screen size the labels use the defined `labelSpan`. The remaining cells are used for the fields (and `emptySpan` if defined). The available cells are distributed to all fields in the row. If one field should use a fixed number of cells you can add `sap.ui.layout.GridData` to them via `setLayoutData` method. If there are additional fields in the row they will get the remaining cells. </ul> Example for a row with two `Input` controls where one uses four cells on small screens, one cell on medium screens and 2 cells on larger screens (using `ResponsiveGridLayout`): `new sap.m.Label({text:"Label"});
         * new sap.m.Input({value:"auto size"}),
         * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),`
         * 
         * ** Note: ** Do not put any layout controls in here. This could destroy the visual layout, keyboard support and screen-reader support.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.
         * 
         * The accessibility `aria-readonly` attribute is set according to this property.
         * 
         * ** Note: ** The setting of the property has no influence on the editable functionality of the form's content.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEmptySpanL emptySpanL}.
         * 
         * Number of grid cells that are empty at the end of each line on large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `0`.
        */
        public getEmptySpanL(): number;

        /**
            * Gets current value of property {@link #getEmptySpanM emptySpanM}.
         * 
         * Number of grid cells that are empty at the end of each line on medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `0`.
        */
        public getEmptySpanM(): number;

        /**
            * Gets current value of property {@link #getEmptySpanS emptySpanS}.
         * 
         * Number of grid cells that are empty at the end of each line on small size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `0`.
        */
        public getEmptySpanS(): number;

        /**
            * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
         * 
         * Number of grid cells that are empty at the end of each line on extra large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward compatibility reasons).
         * 
         * Default value is `-1`.
        */
        public getEmptySpanXL(): number;

        /**
            * Gets current value of property {@link #getLabelMinWidth labelMinWidth}.
         * 
         * Specifies the min-width in pixels of the label in all form rows.
         * 
         * ** Note: ** This property is only used if a `ResponsiveLayout` is used as a layout.
         * 
         * Default value is `192`.
        */
        public getLabelMinWidth(): number;

        /**
            * Gets current value of property {@link #getLabelSpanL labelSpanL}.
         * 
         * Default span for labels in large size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is only used if more than 1 `FormContainer` is in one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `4`.
        */
        public getLabelSpanL(): number;

        /**
            * Gets current value of property {@link #getLabelSpanM labelSpanM}.
         * 
         * Default span for labels in medium size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is used for full-size `FormContainers`. If more than one `FormContainer` is in one line, `labelSpanL` is used.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `2`.
        */
        public getLabelSpanM(): number;

        /**
            * Gets current value of property {@link #getLabelSpanS labelSpanS}.
         * 
         * Default span for labels in small size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `12`.
        */
        public getLabelSpanS(): number;

        /**
            * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
         * 
         * Default span for labels in extra large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward compatibility reasons).
         * 
         * Default value is `-1`.
        */
        public getLabelSpanXL(): number;

        /**
            * Gets current value of property {@link #getLayout layout}.
         * 
         * The `FormLayout` that is used to render the `SimpleForm`.
         * 
         * We recommend using the `ResponsiveGridLayout` for rendering a `SimpleForm`, as its responsiveness uses the space available in the best way possible.
         * 
         * Default value is `ResponsiveLayout`.
        */
        public getLayout(): sap.ui.layout.form.SimpleFormLayout;

        /**
            * Gets current value of property {@link #getMaxContainerCols maxContainerCols}.
         * 
         * The maximum amount of groups (`FormContainers`) per row that is used before a new row is started.
         * 
         * ** Note: ** If a `ResponsiveGridLayout` is used as a `layout`, this property is not used. Please use the properties `ColumnsL` and `ColumnsM` in this case.
         * 
         * Default value is `2`.
        */
        public getMaxContainerCols(): number;

        /**
            * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
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
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * The overall minimum width in pixels that is used for the `SimpleForm`.
         * 
         * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next group (`FormContainer`). The default value is -1, meaning that inner groups (`FormContainers`) will be stacked until `maxContainerCols` is reached, irrespective of whether a `width` is reached or the available parents width is reached.
         * 
         * ** Note: ** This property is only used if a `ResponsiveLayout` is used as a layout.
         * 
         * Default value is `-1`.
        */
        public getMinWidth(): number;

        /**
            * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
         * 
         * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer` is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM` are ignored.
         * 
         * In all other cases the `FormContainer` is displayed in the size of one column.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * Default value is `true`.
        */
        public getSingleContainerFullSize(): boolean;

        /**
            * Gets content of aggregation {@link #getTitle title}.
         * 
         * Title element of the `SimpleForm`. Can either be a `Title` element, or a string.
        */
        public getTitle(): Title | string;

        /**
            * Gets content of aggregation {@link #getToolbar toolbar}.
         * 
         * Toolbar of the `SimpleForm`.
         * 
         * ** Note: ** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
        */
        public getToolbar(): sap.ui.core.Toolbar;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the form.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Element): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Element, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Element): Element;

        /**
            * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
         * 
         * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every `FormContainer` has its own grid inside).
         * 
         * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of `FormContainers` doesn't matter in this case.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAdjustLabelSpan(bAdjustLabelSpan: boolean): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the `SimpleForm` content.
         * 
         * The visualization of the different options depends on the used theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Translucent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.ui.layout.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getBreakpointL breakpointL}.
         * 
         * Breakpoint between Medium size and Large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1024`.
        */
        public setBreakpointL(iBreakpointL: number): this;

        /**
            * Sets a new value for property {@link #getBreakpointM breakpointM}.
         * 
         * Breakpoint between Small size and Medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `600`.
        */
        public setBreakpointM(iBreakpointM: number): this;

        /**
            * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
         * 
         * Breakpoint between Medium size and Large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1440`.
        */
        public setBreakpointXL(iBreakpointXL: number): this;

        /**
            * Sets a new value for property {@link #getColumnsL columnsL}.
         * 
         * Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setColumnsL(iColumnsL: number): this;

        /**
            * Sets a new value for property {@link #getColumnsM columnsM}.
         * 
         * Form columns for medium size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setColumnsM(iColumnsM: number): this;

        /**
            * Sets a new value for property {@link #getColumnsXL columnsXL}.
         * 
         * Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used (from the backward compatibility reasons).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setColumnsXL(iColumnsXL: number): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.
         * 
         * The accessibility `aria-readonly` attribute is set according to this property.
         * 
         * ** Note: ** The setting of the property has no influence on the editable functionality of the form's content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
         * 
         * Number of grid cells that are empty at the end of each line on large size.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward compatibility reasons).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setEmptySpanXL(iEmptySpanXL: number): this;

        /**
            * Sets a new value for property {@link #getLabelMinWidth labelMinWidth}.
         * 
         * Specifies the min-width in pixels of the label in all form rows.
         * 
         * ** Note: ** This property is only used if a `ResponsiveLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `192`.
        */
        public setLabelMinWidth(iLabelMinWidth: number): this;

        /**
            * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
         * 
         * Default span for labels in large size.
         * 
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is only used if more than 1 `FormContainer` is in one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** If `adjustLabelSpanThis` is set, this property is used for full-size `FormContainers`. If more than one `FormContainer` is in one line, `labelSpanL` is used.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
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
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward compatibility reasons).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setLabelSpanXL(iLabelSpanXL: number): this;

        /**
            * Sets a new value for property {@link #getLayout layout}.
         * 
         * The `FormLayout` that is used to render the `SimpleForm`.
         * 
         * We recommend using the `ResponsiveGridLayout` for rendering a `SimpleForm`, as its responsiveness uses the space available in the best way possible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `ResponsiveLayout`.
        */
        public setLayout(sLayout: sap.ui.layout.form.SimpleFormLayout): this;

        /**
            * Sets a new value for property {@link #getMaxContainerCols maxContainerCols}.
         * 
         * The maximum amount of groups (`FormContainers`) per row that is used before a new row is started.
         * 
         * ** Note: ** If a `ResponsiveGridLayout` is used as a `layout`, this property is not used. Please use the properties `ColumnsL` and `ColumnsM` in this case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setMaxContainerCols(iMaxContainerCols: number): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * The overall minimum width in pixels that is used for the `SimpleForm`.
         * 
         * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next group (`FormContainer`). The default value is -1, meaning that inner groups (`FormContainers`) will be stacked until `maxContainerCols` is reached, irrespective of whether a `width` is reached or the available parents width is reached.
         * 
         * ** Note: ** This property is only used if a `ResponsiveLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setMinWidth(iMinWidth: number): this;

        /**
            * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
         * 
         * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer` is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM` are ignored.
         * 
         * In all other cases the `FormContainer` is displayed in the size of one column.
         * 
         * ** Note: ** This property is only used if a `ResponsiveGridLayout` is used as a layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSingleContainerFullSize(bSingleContainerFullSize: boolean): this;

        /**
            * Sets the aggregated {@link #getTitle title}.
        */
        public setTitle(vTitle: Title | string): this;

        /**
            * Sets the aggregated {@link #getToolbar toolbar}.
        */
        public setToolbar(oToolbar: sap.ui.core.Toolbar): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the form.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}