declare module 'sap/ui/table/Column' {
    import { Event } from 'sap/ui/base/Event';
    import { Menu } from 'sap/ui/unified/Menu';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IColumnSettings extends IElementSettings {
        width?: sap.ui.core.CSSSize;
        minWidth?: number;
        flexible?: boolean;
        resizable?: boolean;
        hAlign?: sap.ui.core.HorizontalAlign;
        sorted?: boolean;
        sortOrder?: sap.ui.table.SortOrder;
        sortProperty?: string;
        filtered?: boolean;
        filterProperty?: string;
        filterValue?: string;
        filterOperator?: string;
        defaultFilterOperator?: string;
        filterType?: any;
        grouped?: boolean;
        visible?: boolean;
        name?: string;
        showFilterMenuEntry?: boolean;
        showSortMenuEntry?: boolean;
        headerSpan?: any;
        autoResizable?: boolean;
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
            * Adds some multiLabel to the aggregation {@link #getMultiLabels multiLabels}.
        */
        public addMultiLabel(oMultiLabel: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this `sap.ui.table.Column`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Column` itself.
         * 
         * Fires before the column menu is opened.
        */
        attachColumnMenuOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Refence to the selected <code>menu</code> instance to be opened. */
            menu: Menu,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this `sap.ui.table.Column`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Column` itself.
         * 
         * Fires before the column menu is opened.
        */
        attachColumnMenuOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Refence to the selected <code>menu</code> instance to be opened. */
            menu: Menu,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the label in the aggregation {@link #getLabel label}.
        */
        public destroyLabel(): this;

        /**
            * Destroys the menu in the aggregation {@link #getMenu menu}.
        */
        public destroyMenu(): this;

        /**
            * Destroys all the multiLabels in the aggregation {@link #getMultiLabels multiLabels}.
        */
        public destroyMultiLabels(): this;

        /**
            * Destroys the template in the aggregation {@link #getTemplate template}.
        */
        public destroyTemplate(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnMenuOpen columnMenuOpen} event of this `sap.ui.table.Column`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnMenuOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.table.Column with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:columnMenuOpen columnMenuOpen} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnMenuOpen(mParameters?: { menu?: Menu, }): boolean;

        /**
            * Gets current value of property {@link #getAutoResizable autoResizable}.
         * 
         * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox`
         * 
         * Default value is `false`.
        */
        public getAutoResizable(): boolean;

        /**
            * Gets current value of property {@link #getDefaultFilterOperator defaultFilterOperator}.
         * 
         * If this property is set, the default filter operator of the column is overridden. By default `Contains` is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
        */
        public getDefaultFilterOperator(): string;

        /**
            * Gets current value of property {@link #getFiltered filtered}.
         * 
         * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling `Column.sort()`
         * 
         * Default value is `false`.
        */
        public getFiltered(): boolean;

        /**
            * Gets current value of property {@link #getFilterOperator filterOperator}.
         * 
         * Filter operator to use when filtering this column.
        */
        public getFilterOperator(): string;

        /**
            * Gets current value of property {@link #getFilterProperty filterProperty}.
         * 
         * Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as `filterProperty`.
         * 
         * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu entry is a text input field.
        */
        public getFilterProperty(): string;

        /**
            * Gets current value of property {@link #getFilterType filterType}.
         * 
         * Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: `sap.ui.model.type.Date` or an expression similar to the binding syntax, e.g.: `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"`. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is `sap.ui.model.type.String`.
        */
        public getFilterType(): any;

        /**
            * Gets current value of property {@link #getFilterValue filterValue}.
         * 
         * Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: `&gt; 50
         * &lt; 100
         * &gt;= 150
         * &lt;= 200
         * = 250
         * != 300
         * something    ends with
         * something*    starts with
         * something*   contains
         * some..thing   between
         * 50..100       between`
        */
        public getFilterValue(): string;

        /**
            * Gets current value of property {@link #getFlexible flexible}.
         * 
         * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the original width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end of the table.
         * 
         * Default value is `true`.
        */
        public getFlexible(): boolean;

        /**
            * Gets current value of property {@link #getGrouped grouped}.
         * 
         * Indicates if the column is grouped.
         * 
         * Default value is `false`.
        */
        public getGrouped(): boolean;

        /**
            * Gets current value of property {@link #getHAlign hAlign}.
         * 
         * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.
         * 
         * Default value is `Begin`.
        */
        public getHAlign(): sap.ui.core.HorizontalAlign;

        /**
            * Gets current value of property {@link #getHeaderSpan headerSpan}.
         * 
         * If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.
         * 
         * Default value is `1`.
        */
        public getHeaderSpan(): any;

        /**
            * Gets content of aggregation {@link #getLabel label}.
         * 
         * Label of the column which is displayed in the column header. This aggregation is for the standard behavior, where you only want to display one single row header. If a string is supplied, a default label control will be created. Which control this is depends on the loaded libraries.
        */
        public getLabel(): Control | string;

        /**
            * Gets content of aggregation {@link #getMenu menu}.
         * 
         * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
         * 
         * ** Note: ** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation `menu` with a new instance of `sap.ui.unified.Menu`.
        */
        public getMenu(): Menu;

        /**
            * Returns a metadata object for class sap.ui.table.Column.
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
         * Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width `auto`. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
         * 
         * Default value is `0`.
        */
        public getMinWidth(): number;

        /**
            * Gets content of aggregation {@link #getMultiLabels multiLabels}.
         * 
         * Labels of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation if you want to use multiple headers per column.
        */
        public getMultiLabels(): {};

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)
         * 
         * Default value is `true`.
        */
        public getResizable(): boolean;

        /**
            * Gets current value of property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
         * 
         * Defines if the filter menu entry is displayed
         * 
         * Default value is `true`.
        */
        public getShowFilterMenuEntry(): boolean;

        /**
            * Gets current value of property {@link #getShowSortMenuEntry showSortMenuEntry}.
         * 
         * Defines if the sort menu entries are displayed
         * 
         * Default value is `true`.
        */
        public getShowSortMenuEntry(): boolean;

        /**
            * Gets current value of property {@link #getSorted sorted}.
         * 
         * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling `Column.sort()`
         * 
         * Default value is `false`.
        */
        public getSorted(): boolean;

        /**
            * Gets current value of property {@link #getSortOrder sortOrder}.
         * 
         * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property `sorted` is `true`
         * 
         * Default value is `Ascending`.
        */
        public getSortOrder(): sap.ui.table.SortOrder;

        /**
            * Gets current value of property {@link #getSortProperty sortProperty}.
         * 
         * Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as `sortProperty`.
         * 
         * A column menu entry for sorting can only be generated if the `sortProperty` is set.
        */
        public getSortProperty(): string;

        /**
            * Gets content of aggregation {@link #getTemplate template}.
         * 
         * Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's properties or aggregations have been changed, the template has to be applied again via `setTemplate` for the changes to take effect. If a string is defined, a default text control will be created with its text property bound to the value of the string. The default template depends on the libraries loaded. If there is no template, the column will not be rendered in the table. The set of supported controls is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.
        */
        public getTemplate(): Control | string;

        /**
            * Returns a column template clone. It either finds an unused clone or clones a new one from the column template.
        */
        protected getTemplateClone(iIndex: number): Control | any;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the column in CSS units. Default value is `auto`, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMultiLabels multiLabels}. and returns its index if found or -1 otherwise.
        */
        public indexOfMultiLabel(oMultiLabel: Control): number;

        /**
            * Inserts a multiLabel into the aggregation {@link #getMultiLabels multiLabels}.
        */
        public insertMultiLabel(oMultiLabel: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMultiLabels multiLabels}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMultiLabels(): {};

        /**
            * Removes a multiLabel from the aggregation {@link #getMultiLabels multiLabels}.
        */
        public removeMultiLabel(vMultiLabel: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getAutoResizable autoResizable}.
         * 
         * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoResizable(bAutoResizable: boolean): this;

        /**
            * Sets a new value for property {@link #getDefaultFilterOperator defaultFilterOperator}.
         * 
         * If this property is set, the default filter operator of the column is overridden. By default `Contains` is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDefaultFilterOperator(sDefaultFilterOperator: string): this;

        /**
            * Sets a new value for property {@link #getFiltered filtered}.
         * 
         * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling `Column.sort()`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFiltered(bFiltered: boolean): this;

        /**
            * Sets a new value for property {@link #getFilterOperator filterOperator}.
         * 
         * Filter operator to use when filtering this column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilterOperator(sFilterOperator: string): this;

        /**
            * Sets a new value for property {@link #getFilterProperty filterProperty}.
         * 
         * Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as `filterProperty`.
         * 
         * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu entry is a text input field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilterProperty(sFilterProperty: string): this;

        /**
            * Sets a new value for property {@link #getFilterType filterType}.
         * 
         * Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: `sap.ui.model.type.Date` or an expression similar to the binding syntax, e.g.: `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"`. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is `sap.ui.model.type.String`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilterType(oFilterType: any): this;

        /**
            * Sets a new value for property {@link #getFilterValue filterValue}.
         * 
         * Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: `&gt; 50
         * &lt; 100
         * &gt;= 150
         * &lt;= 200
         * = 250
         * != 300
         * something    ends with
         * something*    starts with
         * something*   contains
         * some..thing   between
         * 50..100       between`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilterValue(sFilterValue: string): this;

        /**
            * Sets a new value for property {@link #getFlexible flexible}.
         * 
         * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the original width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end of the table.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFlexible(bFlexible: boolean): this;

        /**
            * Sets a new value for property {@link #getGrouped grouped}.
         * 
         * Indicates if the column is grouped.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGrouped(bGrouped: boolean): this;

        /**
            * Sets a new value for property {@link #getHAlign hAlign}.
         * 
         * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setHAlign(sHAlign: sap.ui.core.HorizontalAlign): this;

        /**
            * Sets a new value for property {@link #getHeaderSpan headerSpan}.
         * 
         * If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setHeaderSpan(oHeaderSpan: any): this;

        /**
            * Sets the aggregated {@link #getLabel label}.
        */
        public setLabel(vLabel: Control | string): this;

        /**
            * Sets the aggregated {@link #getMenu menu}.
        */
        public setMenu(oMenu: Menu): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width `auto`. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMinWidth(iMinWidth: number): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setResizable(bResizable: boolean): this;

        /**
            * Sets a new value for property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
         * 
         * Defines if the filter menu entry is displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFilterMenuEntry(bShowFilterMenuEntry: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSortMenuEntry showSortMenuEntry}.
         * 
         * Defines if the sort menu entries are displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSortMenuEntry(bShowSortMenuEntry: boolean): this;

        /**
            * Sets a new value for property {@link #getSorted sorted}.
         * 
         * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling `Column.sort()`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSorted(bSorted: boolean): this;

        /**
            * Sets a new value for property {@link #getSortOrder sortOrder}.
         * 
         * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property `sorted` is `true`
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Ascending`.
        */
        public setSortOrder(sSortOrder: sap.ui.table.SortOrder): this;

        /**
            * Sets a new value for property {@link #getSortProperty sortProperty}.
         * 
         * Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as `sortProperty`.
         * 
         * A column menu entry for sorting can only be generated if the `sortProperty` is set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSortProperty(sSortProperty: string): this;

        /**
            * Sets the aggregated {@link #getTemplate template}.
        */
        public setTemplate(vTemplate: Control | string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the column in CSS units. Default value is `auto`, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Returns whether the column should be rendered.
        */
        protected shouldRender(): boolean;

        /**
            * sorts the current column ascending or descending
        */
        public sort(bDescending: boolean): this;

        /**
            * Toggles the sort order of the column.
        */
        public toggleSort(): this;

    }
}